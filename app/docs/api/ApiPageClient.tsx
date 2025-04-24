"use client"

export default function ApiPageClient() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">API Reference</h1>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Hamburger Component</h2>
        <p>
          The main component exported by Togglrr is the <code className="font-mono">Hamburger</code> component. It
          accepts the following props:
        </p>

        <div className="border border-border rounded-md my-6 overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium text-sm">Prop</th>
                <th className="px-4 py-2 text-left font-medium text-sm">Type</th>
                <th className="px-4 py-2 text-left font-medium text-sm">Default</th>
                <th className="px-4 py-2 text-left font-medium text-sm">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-2 text-sm font-medium font-mono">type</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">string</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">'spin'</td>
                <td className="px-4 py-2 text-sm text-muted-foreground">Animation type</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm font-medium font-mono">isOpen</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">boolean</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">false</td>
                <td className="px-4 py-2 text-sm text-muted-foreground">Current state of the hamburger menu</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm font-medium font-mono">onClick</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">function</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">-</td>
                <td className="px-4 py-2 text-sm text-muted-foreground">Click handler function</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm font-medium font-mono">size</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">number</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">32</td>
                <td className="px-4 py-2 text-sm text-muted-foreground">Size of the hamburger menu in pixels</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm font-medium font-mono">color</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">string</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">'currentColor'</td>
                <td className="px-4 py-2 text-sm text-muted-foreground">Color of the hamburger menu</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm font-medium font-mono">duration</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">number</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">0.3</td>
                <td className="px-4 py-2 text-sm text-muted-foreground">Animation duration in seconds</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm font-medium font-mono">label</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">string</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">'Toggle menu'</td>
                <td className="px-4 py-2 text-sm text-muted-foreground">Accessible label for the button</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm font-medium font-mono">className</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">string</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">''</td>
                <td className="px-4 py-2 text-sm text-muted-foreground">Additional CSS classes</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm font-medium font-mono">barHeight</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">number</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">3</td>
                <td className="px-4 py-2 text-sm text-muted-foreground">Height of each bar in pixels</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm font-medium font-mono">barRadius</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">number</td>
                <td className="px-4 py-2 text-sm text-muted-foreground font-mono">0</td>
                <td className="px-4 py-2 text-sm text-muted-foreground">Border radius of each bar in pixels</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Animation Types</h2>
        <p>Togglrr supports the following animation types:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code className="font-mono">spin</code> - Spins and transforms into an X
          </li>
          <li>
            <code className="font-mono">elastic</code> - Elastic animation with a bounce effect
          </li>
          <li>
            <code className="font-mono">slide</code> - Slides the bars to form an X
          </li>
          <li>
            <code className="font-mono">arrow</code> - Transforms into an arrow
          </li>
          <li>
            <code className="font-mono">cross</code> - Simple cross transformation
          </li>
          <li>
            <code className="font-mono">collapse</code> - Collapses the bars
          </li>
          <li>
            <code className="font-mono">rotate</code> - Rotates the bars
          </li>
          <li>
            <code className="font-mono">spring</code> - Spring animation with bounce effect
          </li>
          <li>
            <code className="font-mono">squeeze</code> - Squeezes the bars together
          </li>
          <li>
            <code className="font-mono">stand</code> - Stands the bars upright
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">TypeScript Support</h2>
        <p>Togglrr is written in TypeScript and provides full type definitions:</p>

        <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto font-mono">
          <pre className="text-sm">{`import { Hamburger, HamburgerProps, AnimationType } from 'togglrr'

// AnimationType is a union type of all available animation types
const type: AnimationType = 'spin'

// HamburgerProps interface for type checking
const props: HamburgerProps = {
  type: 'spin',
  isOpen: false,
  onClick: () => {},
  size: 32,
  color: 'currentColor',
  duration: 0.3,
  label: 'Toggle menu',
  barHeight: 3,
  barRadius: 0,
}`}</pre>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Implementation Details</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">CSS-Based Animations</h3>
        <p>
          Most animations in Togglrr use CSS transitions and keyframes for optimal performance. Here's an example of how
          the "spin" animation is implemented:
        </p>

        <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto font-mono">
          <pre className="text-sm">{`// CSS for the spin animation
.togglrr-spin {
  .bar {
    transition: transform 0.3s ease;
  }
  
  &[data-open="true"] {
    .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    
    .bar:nth-child(2) {
      opacity: 0;
    }
    
    .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
}`}</pre>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Framer Motion Animations</h3>
        <p>
          For more complex animations, we use Framer Motion to create smooth, spring-based transitions. Here's an
          example of the "elastic" animation:
        </p>

        <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto font-mono">
          <pre className="text-sm">{`// React component with Framer Motion
import { motion } from 'framer-motion'

export const ElasticHamburger = ({ isOpen, ...props }) => {
  const topBarVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8, transition: { type: 'spring', stiffness: 260, damping: 20 } }
  }
  
  const middleBarVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  }
  
  const bottomBarVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8, transition: { type: 'spring', stiffness: 260, damping: 20 } }
  }
  
  return (
    <button aria-label="Toggle menu" {...props}>
      <motion.div className="bar" variants={topBarVariants} animate={isOpen ? 'open' : 'closed'} />
      <motion.div className="bar" variants={middleBarVariants} animate={isOpen ? 'open' : 'closed'} />
      <motion.div className="bar" variants={bottomBarVariants} animate={isOpen ? 'open' : 'closed'} />
    </button>
  )
}`}</pre>
        </div>
      </div>
    </div>
  )
}
