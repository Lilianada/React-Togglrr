import type { Metadata } from "next"
import HamburgerMenusClient from "./HamburgerMenusClient"

export const metadata: Metadata = {
  title: "Hamburger Menus | Togglrr",
  description: "Interactive documentation for Togglrr hamburger menu components",
}

export default function HamburgerMenusPage() {
  return <HamburgerMenusClient />
}
