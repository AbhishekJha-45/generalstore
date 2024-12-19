import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to your General Store Management System
        </h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/dashboard">
            <Button>Go to Dashboard</Button>
          </Link>
          <Link href="/billing">
            <Button>Go to Billing</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

