"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface OffCanvasPushLeftProps {
  isOpen: boolean
  toggle: () => void
  children: React.ReactNode
  overlayColor?: string
  width?: string
  animationDuration?: number
}

export function OffCanvasPushLeft({
  isOpen,
  toggle,
  children,
  overlayColor = "rgba(30,30,30,0.7)",
  width = "300px",
  animationDuration = 300,
}: OffCanvasPushLeftProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) toggle()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, toggle])

  useEffect(() => {
    if (!isOpen || !panelRef.current) return
    const panel = panelRef.current
    const focusableElements = panel.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )
    const first = focusableElements[0] as HTMLElement
    const last = focusableElements[focusableElements.length - 1] as HTMLElement
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    panel.addEventListener("keydown", handleTabKey)
    if (first) first.focus()
    return () => {
      panel.removeEventListener("keydown", handleTabKey)
    }
  }, [isOpen])

  // Push effect: menu slides in, content is pushed (handled in parent demo)
  return (
    <motion.div
      ref={panelRef}
      initial={{ x: "-100%", boxShadow: "0 0 0 rgba(0,0,0,0)" }}
      animate={{ x: 0, boxShadow: "10px 0 30px rgba(0,0,0,0.2)" }}
      exit={{ x: "-100%", boxShadow: "0 0 0 rgba(0,0,0,0)" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 bottom-0 z-50 bg-background outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
      style={{ width }}
      role="dialog"
      aria-modal="true"
      aria-label="Off-canvas menu"
    >
      {children}
    </motion.div>
  )
}
