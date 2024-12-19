"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BillingPage() {
  const [items, setItems] = useState<{ id: number; name: string; price: number; quantity: number }[]>([])
  const [barcode, setBarcode] = useState('')

  const handleAddItem = () => {
    // In a real application, you would fetch the product details from the database
    // based on the barcode. For this example, we'll just add a dummy item.
    const newItem = {
      id: Date.now(),
      name: `Product ${items.length + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
      quantity: 1
    }
    setItems([...items, newItem])
    setBarcode('')
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Billing</h1>
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Scan barcode"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          className="mr-2"
        />
        <Button onClick={handleAddItem}>Add Item</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 text-right">
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
      <div className="mt-4">
        <Button>Print Bill</Button>
      </div>
    </div>
  )
}

