"use client"
import { motion } from "framer-motion"
import { useState } from "react"

interface FoodIconProps {
  isOpen: boolean
  toggle: () => void
  color?: string
  size?: number
  rounded?: boolean
}

// Example: Chocolate (brown bars, melt on open)
export function ChocolateIcon({ isOpen, toggle, size = 32, rounded = false }: FoodIconProps) {
  const barHeight = Math.max(2, size * 0.12)
  const barWidth = size * 0.75
  const barSpacing = size * 0.2
  const barRadius = rounded ? barHeight / 2 : 0
  return (
    <button onClick={toggle} style={{ width: size, height: size }}>
      <div className="relative w-full h-full flex items-center justify-center">
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            animate={{
              y: isOpen ? (i - 1) * 2 : (i - 1) * barSpacing,
              scaleX: isOpen ? 1.1 - i * 0.05 : 1,
              backgroundColor: "#6b3e26",
              borderRadius: barRadius,
              opacity: 1,
              boxShadow: isOpen ? "0 2px 8px #6b3e2655" : "none"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: barWidth,
              height: barHeight,
              transform: "translate(-50%, -50%)",
              marginTop: (i - 1) * barSpacing,
              zIndex: 1,
            }}
          />
        ))}
      </div>
    </button>
  )
}

// Example: Strawberry (red bars, bounce on open)
export function StrawberryIcon({ isOpen, toggle, size = 32, rounded = false }: FoodIconProps) {
  const barHeight = Math.max(2, size * 0.12)
  const barWidth = size * 0.75
  const barSpacing = size * 0.2
  const barRadius = rounded ? barHeight / 2 : 0
  return (
    <button onClick={toggle} style={{ width: size, height: size }}>
      <div className="relative w-full h-full flex items-center justify-center">
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            animate={{
              y: isOpen ? (i - 1) * 2 : (i - 1) * barSpacing,
              scaleY: isOpen ? 1.2 - i * 0.1 : 1,
              backgroundColor: "#e53e3e",
              borderRadius: barRadius,
              opacity: 1,
              boxShadow: isOpen ? "0 2px 8px #e53e3e55" : "none"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: barWidth,
              height: barHeight,
              transform: "translate(-50%, -50%)",
              marginTop: (i - 1) * barSpacing,
              zIndex: 1,
            }}
          />
        ))}
      </div>
    </button>
  )
}

// Example: Fries (yellow bars, spread out on open)
export function FriesIcon({ isOpen, toggle, size = 32, rounded = false }: FoodIconProps) {
  const barHeight = Math.max(2, size * 0.12)
  const barWidth = size * 0.75
  const barSpacing = size * 0.2
  const barRadius = rounded ? barHeight / 2 : 0
  return (
    <button onClick={toggle} style={{ width: size, height: size }}>
      <div className="relative w-full h-full flex items-center justify-center">
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            animate={{
              x: isOpen ? (i - 1) * 8 : 0,
              rotate: isOpen ? (i - 1) * 10 : 0,
              backgroundColor: "#fbbf24",
              borderRadius: barRadius,
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: barWidth,
              height: barHeight,
              transform: "translate(-50%, -50%)",
              marginTop: (i - 1) * barSpacing,
              zIndex: 1,
            }}
          />
        ))}
      </div>
    </button>
  )
}

// ...repeat similar patterns for Oreos, Cheese Burger, Kebab, Hot Dog, Stairs, Candy Box, Veggie Burger, Cake...

// Example usage in a grid:
export function FoodIconGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const icons = [
    // { label: "Hamburger", Component: HamburgerIcon },
    { label: "Chocolate", Component: ChocolateIcon },
    { label: "Strawberry", Component: StrawberryIcon },
    { label: "Fries", Component: FriesIcon },
    // ...add the rest
  ]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {icons.map(({ label, Component }, i) => (
        <div key={label} className="flex flex-col items-center">
          <Component
            isOpen={openIndex === i}
            toggle={() => setOpenIndex(openIndex === i ? null : i)}
            size={40}
            rounded
          />
          <span className="mt-2 text-xs">{label}</span>
        </div>
      ))}
    </div>
  )
}
