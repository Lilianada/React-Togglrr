import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

// Space Grotesk font for code blocks
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
})

// Geist fonts are already configured and don't need to be called as functions
// Just use the variables directly

export const metadata: Metadata = {
  title: "Togglrr - React Hamburger Menu Components",
  description: "Beautiful, accessible, and customizable hamburger menu components for React",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        {/* Add font-display swap to ensure text is visible during font loading */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'Geist Sans';
                font-display: swap;
              }
              @font-face {
                font-family: 'Geist Mono';
                font-display: swap;
              }
              @font-face {
                font-family: 'Space Grotesk';
                font-display: swap;
              }
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
