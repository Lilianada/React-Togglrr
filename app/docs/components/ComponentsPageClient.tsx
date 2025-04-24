"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HamburgerMenusSection } from "./HamburgerMenusSection"
import { OffCanvasSection } from "./OffCanvasSection"

export default function ComponentsPageClient() {
  const [activeTab, setActiveTab] = useState("hamburger")

  return (
    <div className="container mx-auto py-8 max-w-5xl">
      <h1 className="text-3xl font-semibold mb-2">Components</h1>
      <p className="text-muted-foreground mb-8">
        Interactive documentation for Togglrr hamburger menu and off-canvas components.
      </p>

      <Tabs defaultValue="hamburger" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="hamburger">Hamburger Menus</TabsTrigger>
          <TabsTrigger value="offcanvas">Off-Canvas</TabsTrigger>
        </TabsList>
        <TabsContent value="hamburger">
          <HamburgerMenusSection />
        </TabsContent>
        <TabsContent value="offcanvas">
          <OffCanvasSection />
        </TabsContent>
      </Tabs>
    </div>
  )
}
