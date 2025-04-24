// This file provides off-canvas menu variant components for OffCanvasClient
// Each variant is a simple wrapper around a Drawer/Sheet component for demonstration purposes.

import * as React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

// Slide Left Variant
export function OffCanvasSlideLeft({ isOpen, toggle, children, ...props }: any) {
  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetContent side="left" {...props}>{children}</SheetContent>
    </Sheet>
  );
}

// Slide Right Variant
export function OffCanvasSlideRight({ isOpen, toggle, children, ...props }: any) {
  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetContent side="right" {...props}>{children}</SheetContent>
    </Sheet>
  );
}

// Slide Top Variant
export function OffCanvasSlideTop({ isOpen, toggle, children, ...props }: any) {
  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetContent side="top" {...props}>{children}</SheetContent>
    </Sheet>
  );
}

// Slide Bottom Variant
export function OffCanvasSlideBottom({ isOpen, toggle, children, ...props }: any) {
  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetContent side="bottom" {...props}>{children}</SheetContent>
    </Sheet>
  );
}

// Overlay/Reveal/Push/Stack variants can be implemented similarly.
// For now, these are simple wrappers. You can extend them to add overlay, push, or stack logic as needed.

export function OffCanvasOverlayLeft(props: any) { return <OffCanvasSlideLeft {...props} />; }
export function OffCanvasOverlayRight(props: any) { return <OffCanvasSlideRight {...props} />; }
export function OffCanvasOverlayTop(props: any) { return <OffCanvasSlideTop {...props} />; }
export function OffCanvasOverlayBottom(props: any) { return <OffCanvasSlideBottom {...props} />; }

export function OffCanvasRevealLeft(props: any) { return <OffCanvasSlideLeft {...props} />; }
export function OffCanvasRevealRight(props: any) { return <OffCanvasSlideRight {...props} />; }
export function OffCanvasRevealTop(props: any) { return <OffCanvasSlideTop {...props} />; }
export function OffCanvasRevealBottom(props: any) { return <OffCanvasSlideBottom {...props} />; }

export function OffCanvasPushLeft(props: any) { return <OffCanvasSlideLeft {...props} />; }
export function OffCanvasPushRight(props: any) { return <OffCanvasSlideRight {...props} />; }
export function OffCanvasPushTop(props: any) { return <OffCanvasSlideTop {...props} />; }
export function OffCanvasPushBottom(props: any) { return <OffCanvasSlideBottom {...props} />; }

export function OffCanvasStackDown(props: any) { return <OffCanvasSlideBottom {...props} />; }
export function OffCanvasStackUp(props: any) { return <OffCanvasSlideTop {...props} />; }
