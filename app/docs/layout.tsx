import type React from "react"
import DocsSidebar from "@/components/docs-sidebar"

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <main className="flex-1 p-6 md:p-10">
        <div className="mx-auto max-w-5xl">{children}</div>
      </main>
    </div>
  )
}
