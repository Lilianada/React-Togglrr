"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen bg-background flex flex-col items-center justify-center overflow-hidden relative"
    >
      <div className="absolute inset-0 z-0 opacity-60 bg-noise" />

      {/*<Header /> */}

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="container px-4 py-16 relative z-10 text-center h-full flex flex-col items-center justify-center"
      >
        <div className="flex justify-center">
          <div className="flex items-center justify-center relative w-24 h-24">
            <Image src="/logo.png" alt="Togglrr Logo" width={40} height={40} />
          </div>
        </div>

        <h1 className="text-xl md:text-2xl font-bold mb-4 text-primary">Togglrr</h1>

        <p className="text-sm md:text-base mb-8 max-w-xl mx-auto text-muted-foreground">
          Beautiful, accessible, and customizable hamburger menu components for React. Create stunning toggle menus with
          minimal effort.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link href="/docs">
            <Button size="sm" className="text-base px-6 py-4 rounded-md ">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <a href="https://github.com/lilianada/togglrr/" target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="outline" className="text-base px-6 py-4 rounded-md">
              <Github className="mr-2 h-5 w-5" />
              Star on GitHub
            </Button>
          </a>
        </div>

        <Link
          href="/docs"
          className="text-muted-foreground underline underline-offset-4 hover:text-primary transition-colors"
        >
          Documentation
        </Link>
      </motion.div>
      <Footer />
    </motion.div>
  )
}
