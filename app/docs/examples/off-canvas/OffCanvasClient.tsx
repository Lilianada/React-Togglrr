"use client"

import { useState } from "react"
import OffCanvasDemo from "./OffCanvasDemo"
import DocsSidebar, { Section } from "../../DocsSidebar";
import { CopyIcon, CheckIcon } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Button } from "@/components/ui/button";



const sections: Section[] = [
  // Slide Variants
  { id: "slideLeft", label: "Slide Left" },
  // Overlay Variants
  { id: "overlayLeft", label: "Overlay Left" },
  // Reveal Variants
  { id: "revealLeft", label: "Reveal Left" },
  // Push Variants
  { id: "pushLeft", label: "Push Left" },
  { id: "stackDown", label: "Stack Down" }

];


import { variants } from "./variants";

export default function OffCanvasClient() {
    
  const [openDemo, setOpenDemo] = useState<string | null>(null);

  return (
    <div className="container mx-auto py-8 px-2 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 overflow-x-hidden">
      <div className="col-span-3 min-w-0">
        <h1 className="text-3xl font-semibold mb-2">Off-Canvas Components</h1>
        <p className="text-muted-foreground mb-8">
          Togglrr provides a variety of off-canvas menu components with different animation styles. Each component is
          fully customizable and accessible.
        </p>

        <div className="grid gap-8">
          {/* Slide Variants */}
          <div id="slideLeft" className="scroll-mt-24">
            <OffCanvasDemo
              key={variants[0].key}
              title={variants[0].title}
              description={variants[0].description}
              component={variants[0].component}
              codeSnippet={variants[0].codeSnippet}
              isOpen={openDemo === variants[0].key}
              setOpenDemo={() => setOpenDemo(openDemo === variants[0].key ? null : variants[0].key)}
              implemented={variants[0].implemented}
            />
            <div className="mt-4 space-y-2">
              {variants.slice(1, 4).map((variant) => {
                const [copied, setCopied] = useState(false);
                const handleCopy = () => {
                  navigator.clipboard.writeText(variant.codeSnippet || '');
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                };
                return (
                  <div key={variant.key} className="bg-muted rounded p-3 overflow-x-auto">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-semibold">{variant.title}</div>
                    </div>
                    <div className="relative">
                      <div className="absolute right-2 top-2 flex space-x-2 z-10">
                        <Button variant="outline" size="sm" onClick={handleCopy} className="text-xs h-7 px-2">
                          {copied ? <CheckIcon className="h-3 w-3" /> : <CopyIcon className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                    <div className="font-mono text-sm rounded-md overflow-hidden ">
                      <SyntaxHighlighter
                        language="jsx"
                        style={vscDarkPlus}
                        customStyle={{ margin: 0, borderRadius: "0.5rem", backgroundColor: "#232323", padding: "1rem" }}
                      >
                        {variant.codeSnippet}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Overlay Variants */}
          <div id="overlayLeft" className="scroll-mt-24">
            <OffCanvasDemo
              key={variants[4].key}
              title={variants[4].title}
              description={variants[4].description}
              component={variants[4].component}
              codeSnippet={variants[4].codeSnippet}
              isOpen={openDemo === variants[4].key}
              setOpenDemo={() => setOpenDemo(openDemo === variants[4].key ? null : variants[4].key)}
              implemented={variants[4].implemented}
            />
            <div className="mt-4 space-y-2">
              {variants.slice(5, 8).map((variant) => {
                const [copied, setCopied] = useState(false);
                const handleCopy = () => {
                  navigator.clipboard.writeText(variant.codeSnippet || '');
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                };
                return (
                  <div key={variant.key} className="bg-muted rounded p-3 overflow-x-auto">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-semibold">{variant.title}</div>
                    </div>
                    <div className="relative">
                      <div className="absolute right-2 top-2 flex space-x-2 z-10">
                        <Button variant="outline" size="sm" onClick={handleCopy} className="text-xs h-7 px-2">
                          {copied ? <CheckIcon className="h-3 w-3" /> : <CopyIcon className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                    <div className="font-mono text-sm rounded-md overflow-hidden ">
                      <SyntaxHighlighter
                        language="jsx"
                        style={vscDarkPlus}
                        customStyle={{ margin: 0, borderRadius: "0.5rem", backgroundColor: "#232323", padding: "1rem" }}
                      >
                        {variant.codeSnippet}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Reveal Variants */}
          <div id="revealLeft" className="scroll-mt-24">
            <OffCanvasDemo
              key={variants[8].key}
              title={variants[8].title}
              description={variants[8].description}
              component={variants[8].component}
              codeSnippet={variants[8].codeSnippet}
              isOpen={openDemo === variants[8].key}
              setOpenDemo={() => setOpenDemo(openDemo === variants[8].key ? null : variants[8].key)}
              implemented={variants[8].implemented}
            />
            <div className="mt-4 space-y-2">
              {variants.slice(9, 12).map((variant) => {
                const [copied, setCopied] = useState(false);
                const handleCopy = () => {
                  navigator.clipboard.writeText(variant.codeSnippet || '');
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                };
                return (
                  <div key={variant.key} className="bg-muted rounded p-3 overflow-x-auto">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-semibold">{variant.title}</div>
                    </div>
                    <div className="relative">
                      <div className="absolute right-2 top-2 flex space-x-2 z-10">
                        <Button variant="outline" size="sm" onClick={handleCopy} className="text-xs h-7 px-2">
                          {copied ? <CheckIcon className="h-3 w-3" /> : <CopyIcon className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                    <div className="font-mono text-sm rounded-md overflow-hidden ">
                      <SyntaxHighlighter
                        language="jsx"
                        style={vscDarkPlus}
                        customStyle={{ margin: 0, borderRadius: "0.5rem", backgroundColor: "#232323", padding: "1rem" }}
                      >
                        {variant.codeSnippet}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Push Variants */}
          <div id="pushLeft" className="scroll-mt-24">
            <OffCanvasDemo
              key={variants[12].key}
              title={variants[12].title}
              description={variants[12].description}
              component={variants[12].component}
              codeSnippet={variants[12].codeSnippet}
              isOpen={openDemo === variants[12].key}
              setOpenDemo={() => setOpenDemo(openDemo === variants[12].key ? null : variants[12].key)}
              implemented={variants[12].implemented}
            />
            <div className="mt-4 space-y-2">
              {variants.slice(13, 16).map((variant) => {
                const [copied, setCopied] = useState(false);
                const handleCopy = () => {
                  navigator.clipboard.writeText(variant.codeSnippet || '');
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                };
                return (
                  <div key={variant.key} className="bg-muted rounded p-3 overflow-x-auto">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-semibold">{variant.title}</div>
                    </div>
                    <div className="relative">
                      <div className="absolute right-2 top-2 flex space-x-2 z-10">
                        <Button variant="outline" size="sm" onClick={handleCopy} className="text-xs h-7 px-2">
                          {copied ? <CheckIcon className="h-3 w-3" /> : <CopyIcon className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                    <div className="font-mono text-sm rounded-md overflow-hidden ">
                      <SyntaxHighlighter
                        language="jsx"
                        style={vscDarkPlus}
                        customStyle={{ margin: 0, borderRadius: "0.5rem", backgroundColor: "#232323", padding: "1rem" }}
                      >
                        {variant.codeSnippet}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stack Variants */}
          <div id="stackDown" className="scroll-mt-24">
            <OffCanvasDemo
              key={variants[16].key}
              title={variants[16].title}
              description={variants[16].description}
              component={variants[16].component}
              codeSnippet={variants[16].codeSnippet}
              isOpen={openDemo === variants[16].key}
              setOpenDemo={() => setOpenDemo(openDemo === variants[16].key ? null : variants[16].key)}
              implemented={variants[16].implemented}
            />
            <div className="mt-4 space-y-2">
              {variants.slice(17, 19).map((variant) => {
                const [copied, setCopied] = useState(false);
                const handleCopy = () => {
                  navigator.clipboard.writeText(variant.codeSnippet || '');
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                };
                return (
                  <div key={variant.key} className="bg-muted rounded p-3 overflow-x-auto">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-semibold">{variant.title}</div>
                    </div>
                    <div className="relative">
                      <div className="absolute right-2 top-2 flex space-x-2 z-10">
                        <Button variant="outline" size="sm" onClick={handleCopy} className="text-xs h-7 px-2">
                          {copied ? <CheckIcon className="h-3 w-3" /> : <CopyIcon className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                    <div className="font-mono text-sm rounded-md overflow-hidden ">
                      <SyntaxHighlighter
                        language="jsx"
                        style={vscDarkPlus}
                        customStyle={{ margin: 0, borderRadius: "0.5rem", backgroundColor: "#232323", padding: "1rem" }}
                      >
                        {variant.codeSnippet}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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
    </div>

      <div className="col-span-1 px-4">
        <DocsSidebar sections={sections} />
      </div>
    </div>
  )
};



// 1. OffCanvasSlide: The menu slides in from the right edge of the screen and slides out to the right when closed. 
// a. OffCanvasSlideLeft
// b. OffCanvasSlideRight
// c. OffCanvasSlideTop
// d. OffCanvasSlideBottom

// 2. Overlay Variants
// a. OffCanvasOverlayLeft
// b. OffCanvasOverlayRight
// c. OffCanvasOverlayTop
// d. OffCanvasOverlayBottom

// 3. OffCanvasReveal: The menu is revealed by sliding the main content away, exposing the menu underneath (sometimes called "underlay" or "reveal").
// a. OffCanvasRevealLeft
// b. OffCanvasRevealRight
// c. OffCanvasRevealTop
// d. OffCanvasRevealBottom

// 4. OffCanvasPush: The menu pushes the main content aside as it enters, shifting the page to make space for itself.
// a. OffCanvasPushLeft
// b. OffCanvasPushRight
// c. OffCanvasPushTop
// d. OffCanvasPushBottom

// 5. OffCanvasStack: Multiple menus or panels stack upward, with each new menu appearing above the previous one.
// a. OffCanvasStackDown
// b. OffCanvasStackUp

// 6. OffCanvasRotate: The menu rotates into view (e.g., spinning or flipping in 3D space) and rotates out when closed.

// 7. OffCanvasFallDown: The menu drops down into view from above, as if falling onto the screen.

// 8. OffCanvasCornerBox:
// The menu expands diagonally from a corner (e.g., top-left) while the main content shifts to the opposite corner, creating a window-like reveal effect.

// 9. OffCanvasLayered:
// Multiple off-canvas panels layer on top of each other, each new menu pushing or overlaying the previous one for a multi-step navigation.

// 10. OffCanvasMorph:
// The menu morphs from the hamburger button itself, smoothly transforming into a full panel using SVG or shape animation.

// 11. OffCanvasJelly:
// The menu enters with a soft, jelly-like bounce or squish animation, giving it an organic, playful feel.

// 12. OffCanvasWave:
// The menu slides in with a wavy or ripple effect, often using SVG path animation for a fluid, modern look.

// 13. OffCanvasOverlayBlur:
// When the menu opens, the background content is blurred and darkened, drawing focus to the menu itself.

// 14. OffCanvasExpandBox:
// Instead of sliding, the menu expands outward from the trigger button, growing into a box or card that overlays the content.

// 15. OffCanvasFade: The menu fades in and out, appearing and disappearing smoothly without moving position.

// 16. OffCanvasFullScreen:
// The menu covers the entire viewport with a fullscreen overlay, often used for immersive navigation experiences.

// 17. OffCanvas3DRotate:
// The menu and/or content rotate in 3D space (e.g., along the Y or X axis) to reveal the off-canvas panel.

// 18. OffCanvasBounce:
// The menu bounces into view from its edge, using a spring or bounce animation for added energy.

// 19. OffCanvasAccordion:
// Menu items inside the off-canvas panel expand/collapse in an accordion style, allowing for nested navigation.

// 20. OffCanvasBubble: The menu pops in with a bubble-like effect, expanding from a point or button into full view.

// 21. OffCanvasScale: The menu scales up from a smaller size (or scales down to close), creating a zoom effect.

// 22. OffCanvasFlip
// 23. OffCanvasZoom
// 24. OffCanvasExpand
// 25. OffCanvasShrink