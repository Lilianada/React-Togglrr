import type { Metadata } from "next"
import ApiPageClient from "./ApiPageClient"

export const metadata: Metadata = {
  title: "API | Togglrr",
  description: "API documentation for Togglrr hamburger menu components",
}

export default function ApiPage() {
  return <ApiPageClient />
}
