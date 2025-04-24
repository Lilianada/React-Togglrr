import type { Metadata } from "next"
import AnimatedMenuIconClient from "./AnimatedMenuIconClient"

export const metadata: Metadata = {
  title: "Hamburger Menus | Togglrr",
  description: "Interactive documentation for Togglrr hamburger menu components",
}

export default function HamburgerMenusPage() {
  return <AnimatedMenuIconClient />
}
