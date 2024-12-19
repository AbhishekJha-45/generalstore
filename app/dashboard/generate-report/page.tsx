"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { useToast } from "@/hooks/use-toast"

export default function GenerateReportPage() {
  const [reportType, setReportType] = useState('')
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const { toast } = useToast()

  const handleGenerateReport = () => {
    if (!reportType || !startDate || !endDate) {
      toast({
        title: "Error",
        description: "Please select all required fields.",
        variant: "destructive",
      })
      return
    }

    // Here you would typically call an API to generate the report
    toast({
      title: "Report Generated",
      description: `${reportType} report generated for ${startDate.toDateString()} to ${endDate.toDateString()}.`,
    })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Generate Report</h1>
      <Card>
        <CardHeader>
          <CardTitle>Report Parameters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Report Type</label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Sales Report</SelectItem>
                <SelectItem value="inventory">Inventory Report</SelectItem>
                <SelectItem value="profit">Profit Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Start Date</label>
            <DatePicker date={startDate} setDate={setStartDate} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">End Date</label>
            <DatePicker date={endDate} setDate={setEndDate} />
          </div>
          <Button onClick={handleGenerateReport} className="w-full">Generate Report</Button>
        </CardContent>
      </Card>
    </div>
  )
}

