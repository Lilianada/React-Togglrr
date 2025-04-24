import type { Metadata } from "next"
import PlaygroundClient from "./PlaygroundClient"

export const metadata: Metadata = {
  title: "Playground | Togglrr",
  description: "Interactive playground to test different hamburger menu components",
}

export default function PlaygroundPage() {
  return <PlaygroundClient />
}
