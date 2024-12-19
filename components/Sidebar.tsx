"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import { LayoutDashboard, ShoppingCart, Package, BarChart2, FileText, Settings } from 'lucide-react'

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Billing",
    href: "/billing",
    icon: ShoppingCart,
  },
  {
    title: "Inventory",
    href: "/dashboard/inventory",
    icon: Package,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: BarChart2,
  },
  {
    title: "Generate Report",
    href: "/dashboard/generate-report",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Package className="h-6 w-6" />
            <span className="">General Store</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 overflow-auto">
          <div className="flex flex-col gap-2 p-4 pt-0">
            {sidebarNavItems.map((item, index) => (
              <Button
                key={index}
                asChild
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname === item.href
                    ? "bg-gray-200 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-700"
                    : ""
                )}
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

