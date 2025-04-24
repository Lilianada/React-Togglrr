"use client"

import React, { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface OffCanvasOverlayLeftProps {
  isOpen: boolean
  toggle: () => void
  children: React.ReactNode
  overlayColor?: string
  width?: string
  animationDuration?: number
}

export function OffCanvasOverlayLeft({
  isOpen,
  toggle,
  children,
  overlayColor = "rgba(30,30,30,0.85)",
  width = "300px",
  animationDuration = 300,
}: OffCanvasOverlayLeftProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  // Trap focus and handle Escape key
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") toggle()
      // Focus trap
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    // Focus the first focusable element
    setTimeout(() => {
      if (panelRef.current) {
        const focusable = panelRef.current.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        focusable?.focus()
      }
    }, 10)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, toggle])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animationDuration / 1000, ease: "easeInOut" }}
            className="fixed inset-0 z-40"
            style={{
              backgroundColor: overlayColor,
              backdropFilter: "blur(2px)",
              cursor: "pointer",
            }}
            onClick={toggle}
            aria-hidden="true"
          />
          {/* Panel */}
          <motion.aside
            ref={panelRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: animationDuration / 1000, ease: "easeInOut" }}
            className="fixed top-0 left-0 bottom-0 z-50 bg-background shadow-xl outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            style={{
              width,
              maxWidth: "100vw",
              display: "flex",
              flexDirection: "column",
              boxShadow: "10px 0 30px rgba(0,0,0,0.3)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Off-canvas menu"
            tabIndex={-1}
          >
            {/* Close button for accessibility */}
            <button
              onClick={toggle}
              className="absolute top-4 right-4 z-10 rounded-full p-2 bg-white/80 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close menu"
              tabIndex={0}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="flex-1 overflow-y-auto p-6">{children}</div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
