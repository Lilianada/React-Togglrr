"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import DocsSidebar, { Section } from "@/app/docs/DocsSidebar"

const sections: Section[] = [
  { id: "installation", label: "Installation" },
  { id: "menu-icons", label: "Animated Menu Icons" },
  { id: "off-canvas-panels", label: "Off-Canvas Panels" },
  { id: "combining-icons-panels", label: "Combining Icons & Panels" },
  { id: "best-practices", label: "Best Practices" },
  { id: "references", label: "References & Inspiration" },
  { id: "next-steps", label: "Next Steps" },
];

export default function DocsPageClient() {
  return (
    <div className="container mx-auto py-8 px-0 max-w-7xl sm:grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="col-span-3">

        <h1 className="text-3xl font-semibold mb-2">Getting Started</h1>
        <p className="text-muted-foreground mb-8">Togglrr is a library of beautiful, accessible, and customizable animated menu icons and off-canvas (menu panel) components for React. Use animated icons as menu triggers and pair them with off-canvas panels for modern navigation experiences.</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Installation</h2>
            <p className="mb-4">Install Togglrr using your package manager of choice:</p>
            <div className="bg-secondary p-4 rounded-md mb-4 font-mono text-sm">
              <pre>npm install togglrr</pre>
            </div>
            <p className="mb-4">Or with yarn:</p>
            <div className="bg-secondary p-4 rounded-md mb-4 font-mono text-sm">
              <pre>yarn add togglrr</pre>
            </div>
            <p className="mb-4">Or with pnpm:</p>
            <div className="bg-secondary p-4 rounded-md font-mono text-sm">
              <pre>pnpm add togglrr</pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Animated Menu Icons</h2>
            <p className="mb-4">
              Togglrr offers a variety of animated menu icon components (sometimes called hamburger icons) that can be used as triggers for menus or panels. Each icon is a separate React component, fully customizable and accessible.
            </p>
            <div className="bg-secondary p-4 rounded-md mb-4 font-mono text-sm">
              <pre>{`import { AnimatedMenuIcon } from 'togglrr';
import { useState } from 'react';

function MyComponent() {
  const [open, setOpen] = useState(false);
  return (
    <AnimatedMenuIcon.Spin isOpen={open} toggle={() => setOpen(!open)} />
  );
}`}</pre>
            </div>
            <p className="mb-2">Available icons include: <strong>Spin, Squash, Slide, Cross, Elastic, Arrow, Collapse, Rotate, Spring, Stand</strong>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Off-Canvas Panels</h2>
            <p className="mb-4">
              Off-canvas panels are sliding menu panels that appear from the side of the screen. They are perfect for navigation menus, settings, or any content you want to show in a temporary panel.
            </p>
            <div className="bg-secondary p-4 rounded-md mb-4 font-mono text-sm">
              <pre>{`import { OffCanvas } from 'togglrr';
import { useState } from 'react';

function MyComponent() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Menu</button>
      <OffCanvas isOpen={open} onClose={() => setOpen(false)}>
        <nav>Menu content here</nav>
      </OffCanvas>
    </>
  );
}`}</pre>
            </div>

            <h3 className="text-xl font-medium mt-6 mb-3">Performance & Bundle Size</h3>
            <ul className="list-disc pl-5 space-y-2 text-secondary-foreground mb-4">
              <li>
                <strong className="text-foreground">No Heavy Dependencies:</strong> Avoids large UI frameworks. Uses only
                React, optional Framer Motion, and CSS.
              </li>
              <li>
                <strong className="text-foreground">Tree-Shakable Exports:</strong> Exports each icon as a named export so
                users can import only what they need.
              </li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">Accessibility</h3>
            <ul className="list-disc pl-5 space-y-2 text-secondary-foreground mb-4">
              <li>
                <strong className="text-foreground">Keyboard Navigation & ARIA:</strong> Adds keyboard support and ARIA
                attributes for accessibility out of the box.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How Users Can Test Different AnimatedMenuIcon Menus</h2>

            <h3 className="text-xl font-medium mt-6 mb-3">Demo Playground in Docs</h3>
            <ul className="list-disc pl-5 space-y-2 text-secondary-foreground mb-4">
              <li>
                <strong className="text-foreground">Interactive Gallery:</strong> We've built a demo page that displays
                all hamburger menu types side by side.
              </li>
              <li>
                <strong className="text-foreground">Live Props Editor:</strong> You can tweak props (color, size,
                animation, etc.) live and see instant results.
              </li>
              <li>
                <strong className="text-foreground">Code Snippets:</strong> We show the JSX and CSS for each variant so
                you can copy-paste.
              </li>
            </ul>

            <div className="bg-card border rounded-lg p-6 mb-6">
              <h4 className="text-lg font-medium mb-3">Try the Interactive Playground</h4>
              <p className="text-secondary-foreground mb-4">
                Test all the different hamburger menu types and customize their appearance in our interactive playground.
              </p>
              <Link href="/docs/playground" className="inline-flex items-center text-primary hover:underline">
                Go to Playground <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <h3 className="text-xl font-medium mt-6 mb-3">Example Implementation</h3>
            <p className="mb-3 text-secondary-foreground">Simple Usage: Each menu is easy to use:</p>
            <div className="bg-secondary p-4 rounded-md mb-4 font-mono text-sm">
              <pre>{`import { Squash, Spin, Arrow } from 'togglrr';

// Inside your component
const [open, setOpen] = useState(false);

// In your JSX
<Squash isOpen={open} toggle={setOpen} color="#fff" size={32} />
<Spin isOpen={open} toggle={setOpen} color="red" size={40} />`}</pre>
            </div>
            <p className="text-secondary-foreground">
              Toggle State: Users can click to toggle open/close and see the animation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Best Practices for Robustness and User Experience</h2>
            <ul className="list-disc pl-5 space-y-3 text-secondary-foreground">
              <li>
                <strong className="text-foreground">Document All Variants:</strong> We list and describe each menu type
                and its intended use.
              </li>
              <li>
                <strong className="text-foreground">Accessibility First:</strong> All icons are keyboard- and
                screen-reader-friendly by default.
              </li>
              <li>
                <strong className="text-foreground">Custom Content Support:</strong> You can pass custom children or use
                as a button only.
              </li>
              <li>
                <strong className="text-foreground">RTL Support:</strong> Animations and layout work in right-to-left
                contexts.
              </li>
              <li>
                <strong className="text-foreground">Minimal Styles:</strong> We use CSS modules or scoped styles to avoid
                conflicts.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">References & Inspiration</h2>
            <ul className="list-disc pl-5 space-y-3 text-secondary-foreground">
              <li>
                <a
                  href="https://hamburger-react.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  hamburger-react
                </a>{" "}
                for elegant, CSS-driven animated icons.
              </li>
              <li>
                <a
                  href="https://www.framer.com/motion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Framer Motion
                </a>{" "}
                for advanced but easy React animations.
              </li>
              <li>
                <a
                  href="https://www.epicweb.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Epic Web Dev
                </a>{" "}
                for creative CSS hamburger menu ideas.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/docs/api"
                className="block p-4 bg-card border rounded-lg hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">API Reference</h3>
                <p className="text-secondary-foreground">Learn about all available props and options.</p>
              </Link>
              <Link
                href="/docs/playground"
                className="block p-4 bg-card border rounded-lg hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">Interactive Playground</h3>
                <p className="text-secondary-foreground">Test and customize different hamburger menu types.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    

    <div className="col-span-1 px-4">
      <DocsSidebar sections={sections} />
    </div>
    </div>
  )
}
