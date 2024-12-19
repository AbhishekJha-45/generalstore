"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

// This is mock data. In a real application, you'd fetch this from your API.
const initialInventory = [
  { id: 1, name: "Product 1", quantity: 100, price: 9.99 },
  { id: 2, name: "Product 2", quantity: 150, price: 19.99 },
  { id: 3, name: "Product 3", quantity: 75, price: 29.99 },
]

export default function InventoryPage() {
  const [inventory, setInventory] = useState(initialInventory)
  const [newProduct, setNewProduct] = useState({ name: '', quantity: '', price: '' })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProduct(prev => ({ ...prev, [name]: value }))
  }

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.quantity && newProduct.price) {
      const newItem = {
        id: inventory.length + 1,
        name: newProduct.name,
        quantity: parseInt(newProduct.quantity),
        price: parseFloat(newProduct.price)
      }
      setInventory([...inventory, newItem])
      setNewProduct({ name: '', quantity: '', price: '' })
      toast({
        title: "Product added",
        description: `${newItem.name} has been added to the inventory.`,
      })
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
      <div className="mb-4 flex gap-4">
        <Input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <Input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newProduct.quantity}
          onChange={handleInputChange}
        />
        <Input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <Button onClick={handleAddProduct}>Add Product</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
