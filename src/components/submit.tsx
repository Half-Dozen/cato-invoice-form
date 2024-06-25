"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from "@/components/ui/table"
import { products } from "@/data/products"

// Hardcoded customer ID
const hardcodedCustomerID = "14"

// Define the type for invoice items
type InvoiceItem = {
  id: number
  name: string
  description: string
  price: number
  type: string
  quantity: number
  total: number
}

export function Submit() {
  const [email, setEmail] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<InvoiceItem | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([])
  const [submitted, setSubmitted] = useState(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleProductChange = (value: string) => {
    const product = products.find((p) => p.id === parseInt(value)) || null;
    setSelectedProduct(product);
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value))
  }

  const handleAddProduct = () => {
    if (selectedProduct && quantity > 0) {
      setInvoiceItems([...invoiceItems, { ...selectedProduct, quantity, total: selectedProduct.price * quantity }])
      setSelectedProduct(null)
      setQuantity(1)
    }
  }

  const handleRemoveProduct = (index: number) => {
    setInvoiceItems(invoiceItems.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const payload = {
      customerID: hardcodedCustomerID,
      email,
      invoiceItems
    }

    try {
      const response = await fetch('/api/proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        console.log("Invoice submitted successfully")
        setSubmitted(true)
        setEmail("")
        setInvoiceItems([])
      } else {
        console.error("Failed to submit invoice")
      }
    } catch (error) {
      console.error("Error submitting invoice:", error)
    }
  }

  const total = invoiceItems.reduce((acc, item) => acc + item.total, 0)

  return (
    <section className="w-full py-12 flex justify-center items-center min-h-screen">
      <div className="container px-4 md:px-6">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Thank You!</h2>
            <p className="mb-4">Your invoice has been submitted successfully.</p>
            <Button onClick={() => setSubmitted(false)}>Submit Another Invoice</Button>
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Submit Invoice</CardTitle>
              <CardDescription>Enter your email and add products to your invoice.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                  <div className="space-y-2">
                    <Label htmlFor="product">Product</Label>
                    <Select value={selectedProduct ? String(selectedProduct.id) : ""} onValueChange={handleProductChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((product) => (
                          <SelectItem key={product.id} value={product.id.toString()}>
                            {product.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input id="quantity" type="number" min="1" value={quantity} onChange={handleQuantityChange} />
                  </div>
                  <div className="space-y-2">
                    <Label>&nbsp;</Label>
                    <Button type="button" onClick={handleAddProduct}>Add Product</Button>
                  </div>
                </div>
                {invoiceItems.length > 0 ? (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Invoice Summary</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {invoiceItems.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>${item.price.toFixed(2)}</TableCell>
                            <TableCell>${item.total.toFixed(2)}</TableCell>
                            <TableCell>
                              <Button type="button" onClick={() => handleRemoveProduct(index)}>Remove</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell colSpan={4} className="text-right font-semibold">
                            Total:
                          </TableCell>
                          <TableCell className="font-semibold">${total.toFixed(2)}</TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </div>
                ) : (
                  <div className="flex justify-center items-center h-40">
                    <p className="text-gray-500 dark:text-gray-400">No products added yet.</p>
                  </div>
                )}
                <CardFooter>
                  <Button type="submit">Submit Invoice</Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
