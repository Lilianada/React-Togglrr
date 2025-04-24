"use client"

import { motion } from "framer-motion"

interface AnimatedMenuIconCollapseProps {
  isOpen: boolean
  toggle: () => void
  color?: string
  size?: number
  rounded?: boolean
}

export function AnimatedMenuIconCollapse({
  isOpen,
  toggle,
  color = "currentColor",
  size = 32,
  rounded = false,
}: AnimatedMenuIconCollapseProps) {
  // Calculate dimensions based on size (match AnimatedMenuIconSpin)
  const barHeight = Math.max(2, size * 0.1)
  const barWidth = size * 0.75
  const barSpacing = size * 0.2
  const barRadius = rounded ? barHeight / 2 : 0

  const barStyle = {
    height: barHeight,
    backgroundColor: color,
    borderRadius: barRadius,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }

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
            y: isOpen ? barSpacing * 0.5 : -barSpacing,
            opacity: isOpen ? 0 : 1,
            width: barWidth,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          style={barStyle}
        />
        {/* Middle bar */}
        <motion.span
          initial={false}
          animate={{
            scaleX: isOpen ? 0 : 1,
            opacity: isOpen ? 0 : 1,
            width: barWidth,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          style={barStyle}
        />
        {/* Bottom bar */}
        <motion.span
          initial={false}
          animate={{
            y: isOpen ? -barSpacing * 0.5 : barSpacing,
            opacity: isOpen ? 0 : 1,
            width: barWidth,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          style={barStyle}
        />
      </div>
    </button>
  )
}
