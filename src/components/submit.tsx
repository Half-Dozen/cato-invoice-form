"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from "@/components/ui/table"

// Hardcoded customer ID
const hardcodedCustomerID = "12345"

// Updated products data
const products = [
  { id: 3, name: "Concrete", description: "Concrete for fountain installation", price: 0, type: "Service" },
  { id: 4, name: "Design", description: "Custom Design", price: 75, type: "Service" },
  { id: 6, name: "Gardening", description: "Weekly Gardening Service", price: 0, type: "Service" },
  { id: 2, name: "Hours", description: "", price: 0, type: "Service" },
  { id: 7, name: "Installation", description: "Installation of landscape design", price: 50, type: "Service" },
  { id: 8, name: "Lighting", description: "Garden Lighting", price: 0, type: "Service" },
  { id: 9, name: "Maintenance & Repair", description: "Maintenance & Repair", price: 0, type: "Service" },
  { id: 10, name: "Pest Control", description: "Pest Control Services", price: 35, type: "Service" },
  { id: 12, name: "Refunds & Allowances", description: "Income due to refunds or allowances", price: 0, type: "Service" },
  { id: 13, name: "Rocks", description: "Garden Rocks", price: 0, type: "Service" },
  { id: 1, name: "Services", description: "", price: 0, type: "Service" },
  { id: 14, name: "Sod", description: "Sod", price: 0, type: "Service" },
  { id: 15, name: "Soil", description: "2 cubic ft. bag", price: 10, type: "Service" },
  { id: 18, name: "Trimming", description: "Tree and Shrub Trimming", price: 35, type: "Service" },
]

export function Submit() {
  const [email, setEmail] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [invoiceItems, setInvoiceItems] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleProductChange = (value) => {
    setSelectedProduct(products.find((p) => p.id === parseInt(value)))
  }

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value))
  }

  const handleAddProduct = () => {
    if (selectedProduct && quantity > 0) {
      setInvoiceItems([...invoiceItems, { ...selectedProduct, quantity, total: selectedProduct.price * quantity }])
      setSelectedProduct(null)
      setQuantity(1)
    }
  }

  const handleSubmit = async (e) => {
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
            <p>Your invoice has been submitted successfully.</p>
            <Button onClick={() => setSubmitted(false)}>Submit Another Invoice</Button>
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Submit Invoice</CardTitle>
              <CardDescription>Enter your email and add products to your invoice.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                  <Select value={selectedProduct?.id ?? ""} onValueChange={handleProductChange}>
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
                  <Button onClick={handleAddProduct}>Add Product</Button>
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
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoiceItems.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>${item.price.toFixed(2)}</TableCell>
                          <TableCell>${item.total.toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell colSpan={3} className="text-right font-semibold">
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
            </CardContent>
            <CardFooter>
              <Button onClick={handleSubmit}>Submit Invoice</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </section>
  )
}
