"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

// Example hamburger menu components
const Spin = ({ isOpen, toggle, color = "currentColor", size = 24, ...props }) => {
  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center focus:outline-none"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: { rotate: 45, translateY: 7 },
            closed: { rotate: 0, translateY: 0 },
          }}
          transition={{ duration: 0.3 }}
          d="M3 6H21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          d="M3 12H21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: { rotate: -45, translateY: -7 },
            closed: { rotate: 0, translateY: 0 },
          }}
          transition={{ duration: 0.3 }}
          d="M3 18H21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}

const Squash = ({ isOpen, toggle, color = "currentColor", size = 24, ...props }) => {
  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center focus:outline-none"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: { d: "M3 6L21 18" },
            closed: { d: "M3 6H21" },
          }}
          transition={{ duration: 0.3 }}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          d="M3 12H21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: { d: "M3 18L21 6" },
            closed: { d: "M3 18H21" },
          }}
          transition={{ duration: 0.3 }}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}

const Arrow = ({ isOpen, toggle, color = "currentColor", size = 24, ...props }) => {
  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center focus:outline-none"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: { d: "M6 18L18 6" },
            closed: { d: "M3 6H21" },
          }}
          transition={{ duration: 0.3 }}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: { d: "M6 6L18 18" },
            closed: { d: "M3 18H21" },
          }}
          transition={{ duration: 0.3 }}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}

const Cross = ({ isOpen, toggle, color = "currentColor", size = 24, ...props }) => {
  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center focus:outline-none"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      {...props}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={isOpen ? "open" : "closed"}
        initial="closed"
      >
        <motion.path
          variants={{
            open: { d: "M18 6L6 18", opacity: 1 },
            closed: { d: "M3 6H21", opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          variants={{
            open: { d: "M6 6L18 18", opacity: 1 },
            closed: { d: "M3 12H21", opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          variants={{
            open: { opacity: 0 },
            closed: { d: "M3 18H21", opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.svg>
    </button>
  )
}

const Elastic = ({ isOpen, toggle, color = "currentColor", size = 24, ...props }) => {
  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center focus:outline-none"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: { d: "M3 6C3 6 8 2 12 6C16 10 21 6 21 6" },
            closed: { d: "M3 6H21" },
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.2 }}
          d="M3 12H21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: { d: "M3 18C3 18 8 22 12 18C16 14 21 18 21 18" },
            closed: { d: "M3 18H21" },
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}

// Menu types for the playground
const menuTypes = [
  { name: "Spin", component: Spin },
  { name: "Squash", component: Squash },
  { name: "Arrow", component: Arrow },
  { name: "Cross", component: Cross },
  { name: "Elastic", component: Elastic },
]

// Color options
const colorOptions = [
  { name: "Default", value: "currentColor" },
  { name: "Red", value: "#ef4444" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Green", value: "#10b981" },
  { name: "Purple", value: "#8b5cf6" },
  { name: "Orange", value: "#f97316" },
]

// Size options
const sizeOptions = [
  { name: "Small", value: 20 },
  { name: "Medium", value: 24 },
  { name: "Large", value: 32 },
  { name: "X-Large", value: 40 },
]

export default function PlaygroundClient() {
  const [selectedMenu, setSelectedMenu] = useState("Spin")
  const [isOpen, setIsOpen] = useState(false)
  const [color, setColor] = useState("currentColor")
  const [size, setSize] = useState(24)
  const [copied, setCopied] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const MenuComponent = menuTypes.find((menu) => menu.name === selectedMenu)?.component

  const codeSnippet = `import { ${selectedMenu} } from 'togglrr';

// Inside your component
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);

// In your JSX
<${selectedMenu} 
  isOpen={isOpen} 
  toggle={toggle} 
  color="${color}" 
  size={${size}} 
/>`

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto py-8 max-w-5xl">
      <h1 className="text-3xl font-semibold mb-2">Interactive Playground</h1>
      <p className="text-muted-foreground mb-8">Test different hamburger menu types and customize their appearance.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Preview section */}
          <div className="bg-card border rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px]">
            <div className="mb-8">
              {MenuComponent && <MenuComponent isOpen={isOpen} toggle={toggle} color={color} size={size} />}
            </div>
            <p className="text-muted-foreground text-sm">Click the menu to toggle between states</p>
          </div>

          {/* Code snippet */}
          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
              <span className="text-sm font-mono">Example Usage</span>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-md hover:bg-muted transition-colors"
                aria-label="Copy code"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            <pre className="p-4 overflow-x-auto font-mono text-sm">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Customize</h2>

          {/* Menu Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Menu Type</label>
            <div className="grid grid-cols-2 gap-2">
              {menuTypes.map((menu) => (
                <button
                  key={menu.name}
                  onClick={() => setSelectedMenu(menu.name)}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md border transition-colors",
                    selectedMenu === menu.name
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background hover:bg-muted",
                  )}
                >
                  {menu.name}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Color</label>
            <div className="grid grid-cols-3 gap-2">
              {colorOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => setColor(option.value)}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md border transition-colors flex items-center gap-2",
                    color === option.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background hover:bg-muted",
                  )}
                >
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: option.value === "currentColor" ? "currentColor" : option.value,
                    }}
                  ></span>
                  <span>{option.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Size</label>
            <div className="grid grid-cols-2 gap-2">
              {sizeOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => setSize(option.value)}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md border transition-colors",
                    size === option.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background hover:bg-muted",
                  )}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle State */}
          <div>
            <label className="block text-sm font-medium mb-2">State</label>
            <button
              onClick={toggle}
              className="w-full px-3 py-2 text-sm rounded-md border transition-colors bg-background hover:bg-muted"
            >
              Toggle Menu State ({isOpen ? "Open" : "Closed"})
            </button>
          </div>
        </div>
      </div>

      {/* Best Practices Section */}
      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold">Best Practices</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Accessibility First</h3>
            <p className="text-muted-foreground">
              All Togglrr components are built with accessibility in mind. They include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                Proper <code className="code-inline">aria-label</code> attributes
              </li>
              <li>
                <code className="code-inline">aria-expanded</code> state for screen readers
              </li>
              <li>Keyboard navigation support</li>
              <li>Focus management</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Minimal Styling</h3>
            <p className="text-muted-foreground">
              Togglrr uses scoped styles to avoid conflicts with your existing CSS:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>No global styles that could affect your app</li>
              <li>Easy to customize with props</li>
              <li>Works with any styling solution (CSS Modules, Tailwind, etc.)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Custom Content Support</h3>
            <p className="text-muted-foreground">You can customize the content of your hamburger menu:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Pass custom children to replace the default icon</li>
              <li>Use as a button only and implement your own icon</li>
              <li>Combine with other components for complex UIs</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">RTL Support</h3>
            <p className="text-muted-foreground">Togglrr works seamlessly in right-to-left (RTL) contexts:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Animations and layout work correctly in RTL mode</li>
              <li>No additional configuration needed</li>
              <li>Tested with popular RTL frameworks and libraries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
