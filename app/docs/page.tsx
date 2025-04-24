import type { Metadata } from "next"
import DocsPageClient from "./DocsPageClient"

export const metadata: Metadata = {
  title: "Getting Started | Togglrr Menu Icons & Off-Canvas Panels",
  description: "Learn how to get started with Togglrr: a library of animated menu icons and off-canvas (menu panel) components for React.",
}

export default function DocsPage() {
  return <DocsPageClient />
}
