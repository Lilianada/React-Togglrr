"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CopyIcon, CheckIcon } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { HamburgerSpin } from "../examples/components/hamburger-components/HamburgerSpin"

{/*import { HamburgerSquash } from "./hamburger-components/HamburgerSquash"
import { HamburgerSlide } from "./hamburger-components/HamburgerSlide"
import { HamburgerCross } from "./hamburger-components/HamburgerCross"
import { HamburgerElastic } from "./hamburger-components/HamburgerElastic"
import { HamburgerArrow } from "./hamburger-components/HamburgerArrow"
import { HamburgerCollapse } from "./hamburger-components/HamburgerCollapse"
import { HamburgerRotate } from "./hamburger-components/HamburgerRotate"
import { HamburgerSpring } from "./hamburger-components/HamburgerSpring"
import { HamburgerStand } from "./hamburger-components/HamburgerStand"*/}

export function HamburgerMenusSection() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Hamburger Menu Components</h2>
        <p className="text-muted-foreground mb-6">
          Togglrr provides a variety of hamburger menu button components with different animation styles. Each component
          is fully customizable and accessible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HamburgerMenuDemo
            title="Spin"
            description="A classic hamburger that spins into an X"
            component={HamburgerSpin}
            codeSnippet={`<HamburgerSpin
  isOpen={isOpen}           // Controls open/close state
  toggle={() => setIsOpen(!isOpen)} // Click handler to toggle
  color="#333"              // Button color
  size={30}                 // Size in pixels
  rounded                   // Rounded corners (boolean)
/>`}
          />

          {/*<HamburgerMenuDemo
            title="Squash"
            description="Lines squash and transform into an X"
            component={HamburgerSquash}
            codeSnippet={`<HamburgerSquash
  isOpen={isOpen}           // Controls open/close state
  toggle={() => setIsOpen(!isOpen)} // Click handler to toggle
  color="#333"              // Button color
  size={30}                 // Size in pixels
  rounded                   // Rounded corners (boolean)
/>`}
          />

          <HamburgerMenuDemo
            title="Slide"
            description="Lines slide and fade into an X"
            component={HamburgerSlide}
            codeSnippet={`<HamburgerSlide
  isOpen={isOpen}           // Controls open/close state
  toggle={() => setIsOpen(!isOpen)} // Click handler to toggle
  color="#333"              // Button color
  size={30}                 // Size in pixels
  rounded                   // Rounded corners (boolean)
/>`}
          />

          <HamburgerMenuDemo
            title="Cross"
            description="Clean transformation into a cross"
            component={HamburgerCross}
            codeSnippet={`<HamburgerCross
  isOpen={isOpen}           // Controls open/close state
  toggle={() => setIsOpen(!isOpen)} // Click handler to toggle
  color="#333"              // Button color
  size={30}                 // Size in pixels
  rounded                   // Rounded corners (boolean)
/>`}
          />

          <HamburgerMenuDemo
            title="Elastic"
            description="Elastic bouncy animation into an X"
            component={HamburgerElastic}
            codeSnippet={`<HamburgerElastic
  isOpen={isOpen}           // Controls open/close state
  toggle={() => setIsOpen(!isOpen)} // Click handler to toggle
  color="#333"              // Button color
  size={30}                 // Size in pixels
  rounded                   // Rounded corners (boolean)
/>`}
          />

          <HamburgerMenuDemo
            title="Arrow"
            description="Transforms into an arrow"
            component={HamburgerArrow}
            codeSnippet={`<HamburgerArrow
  isOpen={isOpen}           // Controls open/close state
  toggle={() => setIsOpen(!isOpen)} // Click handler to toggle
  color="#333"              // Button color
  size={30}                 // Size in pixels
  rounded                   // Rounded corners (boolean)
  direction="left"          // Arrow direction: "left" or "right"
/>`}
          />

          <HamburgerMenuDemo
            title="Collapse"
            description="Lines collapse and transform"
            component={HamburgerCollapse}
            codeSnippet={`<HamburgerCollapse
  isOpen={isOpen}           // Controls open/close state
  toggle={() => setIsOpen(!isOpen)} // Click handler to toggle
  color="#333"              // Button color
  size={30}                 // Size in pixels
  rounded                   // Rounded corners (boolean)
/>`}
          />

          <HamburgerMenuDemo
            title="Rotate"
            description="Rotates and transforms into an X"
            component={HamburgerRotate}
            codeSnippet={`<HamburgerRotate
  isOpen={isOpen}           // Controls open/close state
  toggle={() => setIsOpen(!isOpen)} // Click handler to toggle
  color="#333"              // Button color
  size={30}                 // Size in pixels
  rounded                   // Rounded corners (boolean)
/>`}
          />

          <HamburgerMenuDemo
            title="Spring"
            description="Springy animation into an X"
            component={HamburgerSpring}
            codeSnippet={`<HamburgerSpring
  isOpen={isOpen}           // Controls open/close state
  toggle={() => setIsOpen(!isOpen)} // Click handler to toggle
  color="#333"              // Button color
  size={30}                 // Size in pixels
  rounded                   // Rounded corners (boolean)
/>`}
          />

          <HamburgerMenuDemo
            title="Stand"
            description="Lines stand up and transform"
            component={HamburgerStand}
            codeSnippet={`<HamburgerStand
  isOpen={isOpen}           // Controls open/close state
  toggle={() => setIsOpen(!isOpen)} // Click handler to toggle
  color="#333"              // Button color
  size={30}                 // Size in pixels
  rounded                   // Rounded corners (boolean)
/>`}
          />*/}
        </div>
      </section>
    </div>
  )
}

function HamburgerMenuDemo({ title, description, component: Component, codeSnippet }) {
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
          <div className="flex justify-center items-center h-32 bg-muted rounded-md">
            <Component isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
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
