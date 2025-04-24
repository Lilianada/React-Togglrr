import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CopyIcon, CheckIcon, X } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import DocsSidebar from "@/components/docs-sidebar"
import { motion } from "framer-motion"


type OffCanvasDemoProps = {
  title: string;
  description: string;
  component: React.ComponentType<any>;
  codeSnippet: string;
  isOpen: boolean;
  setOpenDemo: (demo: string | null) => void;
  implemented: boolean;
};


export default function OffCanvasDemo({ title, description, component: Component, codeSnippet, isOpen, setOpenDemo, implemented }: OffCanvasDemoProps) {
  const [copied, setCopied] = useState(false)
  const [showComments, setShowComments] = useState(true)

  const handleCopy = () => {
    const codeToCopy = showComments
      ? codeSnippet || ''
      : (codeSnippet || '').split("\n").filter((line) => !line.includes("//")).join("\n")
    navigator.clipboard.writeText(codeToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const processedCode = showComments
    ? codeSnippet || ''
    : (codeSnippet || '').split("\n").filter((line) => !line.includes("//")).join("\n")

  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="relative rounded-md overflow-hidden bg-secondary py-8 px-4 flex flex-col items-center justify-center">
            <Button
              onClick={implemented ? () => setOpenDemo(title) : undefined}
              disabled={!implemented}
              variant={implemented ? "default" : "outline"}
              aria-disabled={!implemented}
            >
              {implemented ? (isOpen ? "Close Menu" : "Open Menu") : "Coming Soon"}
            </Button>
            {!implemented && (
              <span className="text-xs text-muted-foreground mt-2">This variant is coming soon.</span>
            )}
            {Component && implemented && (
              (() => {
                // Variant-specific demo logic
                if (title.toLowerCase().includes("reveal")) {
                  // Reveal: main content slides right when menu open
                  return (
                    <div style={{ position: 'relative', width: '100%' }}>
                      <Component
                        isOpen={isOpen}
                        toggle={() => setOpenDemo(title)}
                        overlayColor="rgba(0,0,0,0.5)"
                        width="250px"
                        animationDuration={300}
                      >
                        <DocsSidebar />
                      </Component>
                      <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: isOpen ? 250 : 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        style={{ position: 'relative', zIndex: 1, background: '#fff', boxShadow: isOpen ? '0 0 20px rgba(0,0,0,0.08)' : 'none', minHeight: 200 }}
                      >
                        <div className="p-6">Main content (slides right for Reveal)</div>
                      </motion.div>
                    </div>
                  );
                } else if (title.toLowerCase().includes("push")) {
                  // Push: both menu and main content move
                  return (
                    <div style={{ position: 'relative', width: '100%' }}>
                      <Component
                        isOpen={isOpen}
                        toggle={() => setOpenDemo(title)}
                        overlayColor="rgba(0,0,0,0.5)"
                        width="250px"
                        animationDuration={300}
                      >
                        <DocsSidebar />
                      </Component>
                      <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: isOpen ? 250 : 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        style={{ position: 'relative', zIndex: 1, background: '#fff', boxShadow: isOpen ? '0 0 20px rgba(0,0,0,0.08)' : 'none', minHeight: 200, display: "grid", placeItems: "center", marginTop: ".5rem" }}
                      >
                        <div className="p-6">Main content used to demo OffCanvas Pushed (pushed for Push)</div>
                      </motion.div>
                    </div>
                  );
                } else {
                  // Slide and Overlay: only menu slides, content stays
                  return (
                    <Component
                      isOpen={isOpen}
                      toggle={() => setOpenDemo(title)}
                      overlayColor="rgba(0,0,0,0.5)"
                      width="250px"
                      animationDuration={300}
                    >
                      <DocsSidebar />
                    </Component>
                  );
                }
              })()
            )}

          </div>
          {codeSnippet && (
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
              <div className="font-mono text-sm rounded-md overflow-hidden ">
                <SyntaxHighlighter
                  language="jsx"
                  style={vscDarkPlus}
                  customStyle={{ margin: 0, borderRadius: "0.5rem", backgroundColor: "#232323", padding: "1.5rem 1rem" }}
                >
                  {processedCode}
                </SyntaxHighlighter>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}