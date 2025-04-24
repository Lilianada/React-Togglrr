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
  const lineHeight = size / 10
  const lineSpacing = size / 3

  return (
    <motion.button
      onClick={toggle}
      className="flex items-center justify-center focus:outline-none"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      style={{ width: size, height: size }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="flex flex-col justify-between items-center"
          style={{ width: size, height: size }}
        >
          <motion.span
            className={rounded ? "rounded-full" : ""}
            style={{
              width: size,
              height: lineHeight,
              backgroundColor: color,
              marginBottom: lineSpacing - lineHeight,
              transformOrigin: "center",
            }}
            variants={{
              open: { rotate: 45, y: lineSpacing },
              closed: { rotate: 0, y: 0 },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          />
          <motion.span
            className={rounded ? "rounded-full" : ""}
            style={{
              width: size,
              height: lineHeight,
              backgroundColor: color,
              transformOrigin: "center",
            }}
            variants={{
              open: { opacity: 0, scale: 0.8 },
              closed: { opacity: 1, scale: 1 },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          />
          <motion.span
            className={rounded ? "rounded-full" : ""}
            style={{
              width: size,
              height: lineHeight,
              backgroundColor: color,
              marginTop: lineSpacing - lineHeight,
              transformOrigin: "center",
            }}
            variants={{
              open: { rotate: -45, y: -lineSpacing },
              closed: { rotate: 0, y: 0 },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          />
        </motion.div>
      </div>
    </motion.button>
  )
}
