import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('https://cato-supply-automation-system.onrender.com/webhook/2b81b67a-b719-49cc-ac97-560742ec7c53', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      })

      if (response.ok) {
        res.status(200).json({ message: 'Success' })
      } else {
        res.status(response.status).json({ message: 'Failed to forward request' })
      }
    } catch (error) {
      console.error('Error forwarding request:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}