"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { Github, ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = {
  title: string
  href: string
  isActive?: boolean
}

type NavSection = {
  title: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: "Basic",
    items: [
      {
        title: "Getting Started",
        href: "/docs",
      },
      {
        title: "API",
        href: "/docs/api",
      },
      {
        title: "Playground",
        href: "/docs/playground",
      },
    ],
  },
  {
    title: "Examples",
    items: [
      {
        title: "AnimatedMenuIcon Menus",
        href: "/docs/examples/hamburger-menus",
      },
      {
        title: "Off-Canvas",
        href: "/docs/examples/off-canvas",
      },
    ],
  },
]



export default function DocsSidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Basic: true,
    Examples: true,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-background border border-border md:hidden"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "w-56 shrink-0 border-r border-border bg-background flex flex-col h-screen sticky top-0 transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "fixed inset-y-0 left-0 z-40" : "hidden md:flex",
        )}
      >
        {/* Sidebar header */}
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center">
            <div className="font-semibold text-lg">Togglrr</div>
          </Link>
        </div>

        {/* Sidebar content */}
        <div className="flex-1 overflow-y-auto py-4 px-4">
          {navSections.map((section) => (
            <div key={section.title} className="mb-12">
              <h3
                className="flex items-center justify-between w-full text-sm font-medium mb-2 text-muted px-2"
              >
                {section.title}
              </h3>

              {openSections[section.title] && (
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-1 px-2 text-sm rounded-md",
                          pathname === item.href
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent",
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-border flex items-center justify-between">
          <ModeToggle />
          <a
            href="https://github.com/lilianada/togglrr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub repository"
          >
            <Github size={20} />
          </a>
        </div>
      </aside>
    </>
  )
}
