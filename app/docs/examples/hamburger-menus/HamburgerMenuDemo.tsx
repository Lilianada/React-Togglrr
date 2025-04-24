
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CopyIcon, CheckIcon } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function HamburgerMenuDemo({ title, description, component: Component, codeSnippet }: { title: string, description: string, component: any, codeSnippet: string }) {
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
              <div className="font-mono text-sm rounded-md overflow-hidden ">
                <SyntaxHighlighter
                  language="jsx"
                  style={vscDarkPlus}
                  customStyle={{ margin: 0, borderRadius: "0.375rem", backgroundColor: "#0e0e0b" }}
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
  