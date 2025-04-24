"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CopyIcon, CheckIcon } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { OffCanvasSlideLeft } from "../components/offcanvas-components/OffCanvasSlideLeft"

// These components will be implemented later
/*
import { OffCanvasSlideRight } from "../components/offcanvas-components/OffCanvasSlideRight"
import { OffCanvasSlideTop } from "../components/offcanvas-components/OffCanvasSlideTop"
import { OffCanvasSlideBottom } from "../components/offcanvas-components/OffCanvasSlideBottom"
import { OffCanvasFade } from "../components/offcanvas-components/OffCanvasFade"
import { OffCanvasScale } from "../components/offcanvas-components/OffCanvasScale"
import { OffCanvasPush } from "../components/offcanvas-components/OffCanvasPush"
*/

export default function OffCanvasClient() {
  return (
    <div className="container mx-auto py-8 max-w-5xl">
      <h1 className="text-3xl font-semibold mb-2">Off-Canvas Components</h1>
      <p className="text-muted-foreground mb-8">
        Togglrr provides a variety of off-canvas menu components with different animation styles. Each component is
        fully customizable and accessible.
      </p>

      <div className="grid grid-cols-1 gap-8">
        <OffCanvasDemo
          title="Slide Left"
          description="Panel slides in from the left side of the screen"
          component={OffCanvasSlideLeft}
          codeSnippet={`<OffCanvasSlideLeft
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(0,0,0,0.5)"  // Background overlay color
  width="300px"                   // Panel width
  animationDuration={300}         // Animation speed in ms
>
  {/* Menu content goes here */}
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Menu</h2>
    <nav>
      <ul className="space-y-2">
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Home</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">About</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Services</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Contact</a></li>
      </ul>
    </nav>
  </div>
</OffCanvasSlideLeft>`}
        />

        {/* These demos will be implemented later
        <OffCanvasDemo
          title="Slide Right"
          description="Panel slides in from the right side of the screen"
          component={OffCanvasSlideRight}
          codeSnippet={`<OffCanvasSlideRight
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(0,0,0,0.5)"  // Background overlay color
  width="300px"                   // Panel width
  animationDuration={300}         // Animation speed in ms
>
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Menu</h2>
    <nav>
      <ul className="space-y-2">
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Home</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">About</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Services</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Contact</a></li>
      </ul>
    </nav>
  </div>
</OffCanvasSlideRight>`}
        />

        <OffCanvasDemo
          title="Slide Top"
          description="Panel slides in from the top of the screen"
          component={OffCanvasSlideTop}
          codeSnippet={`<OffCanvasSlideTop
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(0,0,0,0.5)"  // Background overlay color
  height="300px"                  // Panel height
  animationDuration={300}         // Animation speed in ms
>
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Menu</h2>
    <nav>
      <ul className="flex space-x-4 justify-center">
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Home</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">About</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Services</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Contact</a></li>
      </ul>
    </nav>
  </div>
</OffCanvasSlideTop>`}
        />

        <OffCanvasDemo
          title="Slide Bottom"
          description="Panel slides in from the bottom of the screen"
          component={OffCanvasSlideBottom}
          codeSnippet={`<OffCanvasSlideBottom
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(0,0,0,0.5)"  // Background overlay color
  height="300px"                  // Panel height
  animationDuration={300}         // Animation speed in ms
>
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Menu</h2>
    <nav>
      <ul className="flex space-x-4 justify-center">
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Home</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">About</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Services</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Contact</a></li>
      </ul>
    </nav>
  </div>
</OffCanvasSlideBottom>`}
        />

        <OffCanvasDemo
          title="Fade"
          description="Panel fades in with a slight scale effect"
          component={OffCanvasFade}
          codeSnippet={`<OffCanvasFade
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(0,0,0,0.5)"  // Background overlay color
  width="300px"                   // Panel width
  animationDuration={300}         // Animation speed in ms
  position="center"               // Position: "center", "left", "right"
>
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Menu</h2>
    <nav>
      <ul className="space-y-2">
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Home</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">About</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Services</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Contact</a></li>
      </ul>
    </nav>
  </div>
</OffCanvasFade>`}
        />

        <OffCanvasDemo
          title="Scale"
          description="Panel scales in from the center"
          component={OffCanvasScale}
          codeSnippet={`<OffCanvasScale
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(0,0,0,0.5)"  // Background overlay color
  width="300px"                   // Panel width
  animationDuration={300}         // Animation speed in ms
>
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Menu</h2>
    <nav>
      <ul className="space-y-2">
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Home</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">About</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Services</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Contact</a></li>
      </ul>
    </nav>
  </div>
</OffCanvasScale>`}
        />

        <OffCanvasDemo
          title="Push"
          description="Panel pushes the page content"
          component={OffCanvasPush}
          codeSnippet={`<OffCanvasPush
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(0,0,0,0.2)"  // Background overlay color
  width="300px"                   // Panel width
  animationDuration={300}         // Animation speed in ms
  direction="left"                // Direction: "left" or "right"
>
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Menu</h2>
    <nav>
      <ul className="space-y-2">
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Home</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">About</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Services</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-100 rounded">Contact</a></li>
      </ul>
    </nav>
  </div>
</OffCanvasPush>`}
        />
        */}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Implementation Guidelines</h2>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <h3>Accessibility Considerations</h3>
          <p>When implementing off-canvas menus, ensure they are accessible to all users:</p>
          <ul>
            <li>Implement proper focus management (focus trap within the menu when open)</li>
            <li>Add keyboard support (Escape key to close)</li>
            <li>
              Use proper ARIA attributes (<code>aria-modal</code>, <code>aria-hidden</code>, etc.)
            </li>
            <li>Ensure the menu content is properly structured with semantic HTML</li>
          </ul>

          <h3>Best Practices</h3>
          <p>Follow these best practices for optimal user experience:</p>
          <ul>
            <li>Keep animations smooth and not too lengthy (300-500ms is ideal)</li>
            <li>Provide a clear way to close the menu (close button, clicking overlay)</li>
            <li>Consider the impact on page performance (avoid janky animations)</li>
            <li>Test on various devices and screen sizes</li>
            <li>Ensure the menu content is organized logically</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function OffCanvasDemo({ title, description, component: Component, codeSnippet }) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showComments, setShowComments] = useState(true)

  const handleCopy = () => {
    // Remove comments if showComments is false
    const codeToCopy = showComments
      ? codeSnippet
      : codeSnippet
          .split("\n")
          .filter((line) => !line.includes("//"))
          .join("\n")

    navigator.clipboard.writeText(codeToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const processedCode = showComments
    ? codeSnippet
    : codeSnippet
        .split("\n")
        .filter((line) => !line.includes("//"))
        .join("\n")

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="relative bg-muted rounded-md overflow-hidden" style={{ height: "400px" }}>
            <div className="p-4">
              <Button onClick={() => setIsOpen(!isOpen)} className="mb-4">
                Toggle Menu
              </Button>
              <div className="prose prose-sm max-w-none">
                <h3>Demo Content</h3>
                <p>
                  This is a demonstration of the {title} off-canvas menu. Click the button above to toggle the menu.
                </p>
                <p>The content on this page will interact with the off-canvas menu according to the animation style.</p>
              </div>
            </div>
            <Component
              isOpen={isOpen}
              toggle={() => setIsOpen(!isOpen)}
              overlayColor="rgba(0,0,0,0.5)"
              width="250px"
              height="250px"
              animationDuration={300}
            >
              <div className="p-4 h-full">
                <h2 className="text-xl font-bold mb-4">Menu</h2>
                <Button variant="outline" onClick={() => setIsOpen(false)} className="mb-4">
                  Close Menu
                </Button>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="block p-2 hover:bg-accent rounded">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 hover:bg-accent rounded">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 hover:bg-accent rounded">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 hover:bg-accent rounded">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </Component>
          </div>

          <div className="relative">
            <div className="absolute right-2 top-2 flex space-x-2 z-10">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowComments(!showComments)}
                className="text-xs h-7 px-2"
              >
                {showComments ? "Hide Comments" : "Show Comments"}
              </Button>
              <Button variant="outline" size="sm" onClick={handleCopy} className="text-xs h-7 px-2">
                {copied ? <CheckIcon className="h-3 w-3" /> : <CopyIcon className="h-3 w-3" />}
              </Button>
            </div>
            <div className="font-mono text-sm rounded-md overflow-hidden">
              <SyntaxHighlighter
                language="jsx"
                style={vscDarkPlus}
                customStyle={{ margin: 0, borderRadius: "0.375rem" }}
              >
                {processedCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
