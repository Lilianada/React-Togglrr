"use client"

import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { Laptop, Smartphone, Moon, Sun, Code, Copy, Check, Download, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useTheme } from "next-themes"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface LivePreviewProps {
  markdown: string
}

export function LivePreview({ markdown }: LivePreviewProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop")
  const [previewMode, setPreviewMode] = useState<"rendered" | "raw">("rendered")
  const { theme, setTheme } = useTheme()
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleCopyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(markdown)
      setCopied(true)
      toast({
        title: "Copied to clipboard",
        description: "Your markdown has been copied to the clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually",
        variant: "destructive",
      })
    }
  }

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "README.md"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "README.md downloaded",
      description: "Your profile has been downloaded as README.md",
    })
  }

  // Get the next theme in the cycle
  const getNextTheme = () => {
    if (theme === "light") return "dark"
    if (theme === "dark") return "system"
    return "light"
  }

  // Get the current theme icon
  const ThemeIcon = () => {
    if (theme === "dark") return <Moon className="h-4 w-4" />
    if (theme === "light") return <Sun className="h-4 w-4" />
    return <Monitor className="h-4 w-4" />
  }

  return (
    <div className="flex flex-col h-full">
      <TooltipProvider>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
          <div className="flex gap-2 flex-wrap">
            <ToggleGroup
              type="single"
              value={previewMode}
              onValueChange={(value) => value && setPreviewMode(value as "rendered" | "raw")}
              aria-label="Preview mode"
              className="bg-gray-800/50 border border-gray-700 rounded-md"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    value="rendered"
                    aria-label="Rendered preview"
                    className="data-[state=on]:bg-gray-700/50 data-[state=on]:text-white"
                  >
                    <Laptop className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Rendered</span>
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 border-gray-700">Rendered Preview</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    value="raw"
                    aria-label="Raw markdown"
                    className="data-[state=on]:bg-gray-700/50 data-[state=on]:text-white"
                  >
                    <Code className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Raw</span>
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 border-gray-700">Raw Markdown</TooltipContent>
              </Tooltip>
            </ToggleGroup>

            <ToggleGroup
              type="single"
              value={viewMode}
              onValueChange={(value) => value && setViewMode(value as "desktop" | "mobile")}
              aria-label="View mode"
              className="bg-gray-800/50 border border-gray-700 rounded-md"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    value="desktop"
                    aria-label="Desktop view"
                    className="data-[state=on]:bg-gray-700/50 data-[state=on]:text-white"
                  >
                    <Laptop className="h-4 w-4" />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 border-gray-700">Desktop View</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem
                    value="mobile"
                    aria-label="Mobile view"
                    className="data-[state=on]:bg-gray-700/50 data-[state=on]:text-white"
                  >
                    <Smartphone className="h-4 w-4" />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 border-gray-700">Mobile View</TooltipContent>
              </Tooltip>
            </ToggleGroup>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(getNextTheme())}
                  aria-label="Toggle theme"
                  className="border-gray-700 bg-gray-800/50 hover:bg-gray-700/50"
                >
                  <ThemeIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700">
                {theme === "light"
                  ? "Switch to Dark Mode"
                  : theme === "dark"
                    ? "Switch to System Mode"
                    : "Switch to Light Mode"}
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyMarkdown}
                  className="border-gray-700 bg-gray-800/50 hover:bg-gray-700/50"
                >
                  {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                  <span className="hidden sm:inline">Copy</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700">Copy Markdown</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" onClick={handleDownload} className="gradient-button">
                  <Download className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700">Download README.md</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>

      <Tabs value={previewMode} className="flex-1">
        <TabsContent value="rendered" className="h-full m-0 data-[state=active]:flex data-[state=active]:flex-col">
          <div
            className={`border border-gray-800 rounded-lg p-6 overflow-auto flex-1 github-markdown gradient-card ${
              viewMode === "mobile" ? "max-w-[360px] mx-auto" : "w-full"
            }`}
            aria-live="polite"
            aria-label="Live markdown preview"
          >
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="raw" className="h-full m-0">
          <div className="border border-gray-800 rounded-lg p-4 h-full overflow-auto gradient-card">
            <pre className="text-sm font-mono whitespace-pre-wrap">{markdown}</pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
