import type { Metadata } from "next"
import DocsPageClient from "./DocsPageClient"

export const metadata: Metadata = {
  title: "Getting Started | Togglrr",
  description: "Learn how to get started with Togglrr hamburger menu components",
}

export default function DocsPage() {
  return <DocsPageClient />
}
