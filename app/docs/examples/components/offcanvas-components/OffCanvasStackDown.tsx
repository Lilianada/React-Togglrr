"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface OffCanvasStackDownProps {
  isOpen: boolean
  toggle: () => void
  children: React.ReactNode
  overlayColor?: string
  height?: string
  animationDuration?: number
  stackLevel?: number // For stacking multiple panels
}

export function OffCanvasStackDown({
  isOpen,
  toggle,
  children,
  overlayColor = "rgba(30,30,30,0.7)",
  height = "300px",
  animationDuration = 300,
  stackLevel = 0,
}: OffCanvasStackDownProps) {
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

  // StackDown: Each new panel appears below the previous, offset by stackLevel
  const stackOffset = stackLevel * 16 // px offset for stacking effect

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animationDuration / 1000, ease: "easeInOut" }}
            className="fixed inset-0 z-40"
            style={{ backgroundColor: overlayColor }}
            onClick={toggle}
            aria-hidden="true"
          />
          {/* Panel */}
          <motion.div
            ref={panelRef}
            initial={{ y: `-${100 + stackOffset}%`, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
            animate={{ y: stackOffset, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
            exit={{ y: `-${100 + stackOffset}%`, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 right-0 z-50 bg-background outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            style={{ height, top: stackOffset }}
            role="dialog"
            aria-modal="true"
            aria-label="Off-canvas stacked menu"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
