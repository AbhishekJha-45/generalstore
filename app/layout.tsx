import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from './context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'General Store Management',
  description: 'Manage your general store with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}

