"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'

// Mock data for the chart
const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 4800 },
  { name: 'Jun', sales: 5500 },
]

export default function ReportsPage() {
  const [reportType, setReportType] = useState('sales')

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <div className="mb-4 flex items-center gap-4">
        <Select value={reportType} onValueChange={setReportType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select report type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sales">Sales Report</SelectItem>
            <SelectItem value="inventory">Inventory Report</SelectItem>
            <SelectItem value="profit">Profit Report</SelectItem>
          </SelectContent>
        </Select>
        <Button>Generate Report</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

