"use client"

import { motion } from "framer-motion"

interface HamburgerRotateProps {
  isOpen: boolean
  toggle: () => void
  color?: string
  size?: number
  rounded?: boolean
}

export function HamburgerRotate({
  isOpen,
  toggle,
  color = "currentColor",
  size = 32,
  rounded = false,
}: HamburgerRotateProps) {
  // Calculate dimensions based on size (match HamburgerSpin)
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
      <motion.div
        initial={false}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="relative w-full h-full flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Top bar */}
        <motion.span
          initial={false}
          animate={{
            y: -barSpacing,
            width: barWidth,
          }}
          style={{
            height: barHeight,
            backgroundColor: color,
            borderRadius: barRadius,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transformOrigin: "center",
          }}
        />
        {/* Middle bar */}
        <motion.span
          initial={false}
          animate={{
            opacity: 1,
            width: barWidth,
          }}
          style={{
            height: barHeight,
            backgroundColor: color,
            borderRadius: barRadius,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Bottom bar */}
        <motion.span
          initial={false}
          animate={{
            y: barSpacing,
            width: barWidth,
          }}
          style={{
            height: barHeight,
            backgroundColor: color,
            borderRadius: barRadius,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transformOrigin: "center",
          }}
        />
      </motion.div>
    </button>
  )
}
