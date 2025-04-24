import type { Metadata } from "next"
import ComponentsPageClient from "./ComponentsPageClient"

export const metadata: Metadata = {
  title: "Components | Togglrr",
  description: "Interactive documentation for Togglrr hamburger menu and off-canvas components",
}

export default function ComponentsPage() {
  return <ComponentsPageClient />
}
