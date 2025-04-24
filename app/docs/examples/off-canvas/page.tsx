import type { Metadata } from "next"
import OffCanvasClient from "./OffCanvasClient"

export const metadata: Metadata = {
  title: "Off-Canvas | Togglrr",
  description: "Interactive documentation for Togglrr off-canvas menu components",
}

export default function OffCanvasPage() {
  return <OffCanvasClient />
}
