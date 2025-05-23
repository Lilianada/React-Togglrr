"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface OffCanvasSlideLeftProps {
  isOpen: boolean
  toggle: () => void
  children: React.ReactNode
  overlayColor?: string
  width?: string
  animationDuration?: number
}

export function OffCanvasSlideLeft({
  isOpen,
  toggle,
  children,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  width = "300px",
  animationDuration = 300,
}: OffCanvasSlideLeftProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        toggle()
      }
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

  // Focus trap
  useEffect(() => {
    if (!isOpen || !panelRef.current) return

    const panel = panelRef.current
    const focusableElements = panel.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    panel.addEventListener("keydown", handleTabKey)
    if (firstElement) firstElement.focus()

    return () => {
      panel.removeEventListener("keydown", handleTabKey)
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-40"
            style={{ backgroundColor: overlayColor }}
            onClick={toggle}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            initial={{ x: "-100%", boxShadow: "0 0 0 rgba(0,0,0,0)" }}
            animate={{
              x: 0,
              boxShadow: "10px 0 30px rgba(0,0,0,0.2)",
            }}
            exit={{
              x: "-100%",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed top-0 left-0 bottom-0 z-50 bg-background"
            style={{ width }}
            role="dialog"
            aria-modal="true"
            aria-label="Off-canvas menu"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
