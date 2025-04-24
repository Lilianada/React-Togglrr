"use client"

import { motion } from "framer-motion"

interface AnimatedMenuIconStandProps {
  isOpen: boolean
  toggle: () => void
  color?: string
  size?: number
  rounded?: boolean
}

export function AnimatedMenuIconStand({
  isOpen,
  toggle,
  color = "currentColor",
  size = 32,
  rounded = false,
}: AnimatedMenuIconStandProps) {
  // Calculate dimensions based on size (match AnimatedMenuIconSpin)
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
            rotate: 0,
            y: isOpen ? barSpacing : 0,
            x: isOpen ? barWidth * 0.25 : 0,
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
            position: "absolute" as const,
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
            rotate: isOpen ? 90 : 0,
            scaleX: isOpen ? 0.7 : 1,
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
            position: "absolute" as const,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Bottom bar */}
        <motion.span
          initial={false}
          animate={{
            rotate: 0,
            y: isOpen ? -barSpacing : 0,
            x: isOpen ? -barWidth * 0.25 : 0,
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
            position: "absolute" as const,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transformOrigin: "center",
          }}
        />
      </div>
    </button>
  )
}
