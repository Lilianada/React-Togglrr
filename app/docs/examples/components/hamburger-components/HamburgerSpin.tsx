"use client"

import { motion } from "framer-motion"

interface HamburgerSpinProps {
  isOpen: boolean
  toggle: () => void
  color?: string
  size?: number
  rounded?: boolean
}

export function HamburgerSpin({
  isOpen,
  toggle,
  color = "currentColor",
  size = 32,
  rounded = false,
}: HamburgerSpinProps) {
  // Calculate dimensions based on size
  const barHeight = Math.max(2, size * 0.1)
  const barWidth = size * 0.75
  const barSpacing = size * 0.2
  const barRadius = rounded ? barHeight / 2 : 0

  return (
    <button
      onClick={toggle}
      className="relative flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      style={{ width: size, height: size }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Top bar */}
        <motion.span
          initial={false}
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : -barSpacing,
            width: barWidth,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          style={{
            height: barHeight,
            backgroundColor: color,
            borderRadius: barRadius,
            position: "absolute",
            transformOrigin: "center",
          }}
        />

        {/* Middle bar */}
        <motion.span
          initial={false}
          animate={{
            opacity: isOpen ? 0 : 1,
            width: isOpen ? 0 : barWidth,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          style={{
            height: barHeight,
            backgroundColor: color,
            borderRadius: barRadius,
            position: "absolute",
          }}
        />

        {/* Bottom bar */}
        <motion.span
          initial={false}
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : barSpacing,
            width: barWidth,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          style={{
            height: barHeight,
            backgroundColor: color,
            borderRadius: barRadius,
            position: "absolute",
            transformOrigin: "center",
          }}
        />
      </div>
    </button>
  )
}
