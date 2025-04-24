import * as OffCanvas from "@/components/offcanvas-components";

export const variants = [
  // Slide Variants
  {
    key: "SlideLeft",
    title: "Slide Left",
    description: "The menu slides in from the left edge of the screen and slides out to the left when closed.",
    implemented: true,
    component: OffCanvas.OffCanvasSlideLeft,
    codeSnippet: `
<OffCanvas.SlideLeft
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(0,0,0,0.7)"
  width="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.SlideLeft>
`
  },
  {
    key: "SlideRight",
    title: "Slide Right",
    description: "The menu slides in from the right edge of the screen and slides out to the right when closed.",
    implemented: true,
    component: OffCanvas.OffCanvasSlideRight,
    codeSnippet: `
<OffCanvas.SlideRight
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(0,0,0,0.7)"
  width="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.SlideRight>
`
  },
  {
    key: "SlideTop",
    title: "Slide Top",
    description: "The menu slides down from the top of the screen and retracts upward when closed.",
    implemented: true,
    component: OffCanvas.OffCanvasSlideTop,
    codeSnippet: `
<OffCanvas.SlideTop
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(0,0,0,0.7)"
  height="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.SlideTop>
`
  },
  {
    key: "SlideBottom",
    title: "Slide Bottom",
    description: "The menu slides up from the bottom of the screen and slides down to hide.",
    implemented: true,
    component: OffCanvas.OffCanvasSlideBottom,
    codeSnippet: `
<OffCanvas.SlideBottom
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(0,0,0,0.7)"
  height="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.SlideBottom>
`
  },
  // Overlay Variants
  {
    key: "OverlayLeft",
    title: "Overlay Left",
    description: "Overlay menu slides in from the left.",
    implemented: true,
    component: OffCanvas.OffCanvasOverlayLeft,
    codeSnippet: `
<OffCanvas.OverlayLeft
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.85)"
  width="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.OverlayLeft>
`
  },
  {
    key: "OverlayRight",
    title: "Overlay Right",
    description: "Overlay menu slides in from the right.",
    implemented: true,
    component: OffCanvas.OffCanvasOverlayRight,
    codeSnippet: `
<OffCanvas.OverlayRight
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.85)"
  width="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.OverlayRight>
`
  },
  {
    key: "OverlayTop",
    title: "Overlay Top",
    description: "Overlay menu slides in from the top.",
    implemented: true,
    component: OffCanvas.OffCanvasOverlayTop,
    codeSnippet: `
<OffCanvas.OverlayTop
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.85)"
  height="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.OverlayTop>
`
  },
  {
    key: "OverlayBottom",
    title: "Overlay Bottom",
    description: "Overlay menu slides in from the bottom.",
    implemented: true,
    component: OffCanvas.OffCanvasOverlayBottom,
    codeSnippet: `
<OffCanvas.OverlayBottom
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.85)"
  height="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.OverlayBottom>
`
  },
  // Reveal Variants
  {
    key: "RevealLeft",
    title: "Reveal Left",
    description: "Reveal menu from the left, sliding content away.",
    implemented: true,
    component: OffCanvas.OffCanvasRevealLeft,
    codeSnippet: `
<OffCanvas.RevealLeft
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.7)"
  width="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.RevealLeft>
`
  },
  {
    key: "RevealRight",
    title: "Reveal Right",
    description: "Reveal menu from the right, sliding content away.",
    implemented: true,
    component: OffCanvas.OffCanvasRevealRight,
    codeSnippet: `
<OffCanvas.RevealRight
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.7)"
  width="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.RevealRight>
`
  },
  {
    key: "RevealTop",
    title: "Reveal Top",
    description: "Reveal menu from the top, sliding content away.",
    implemented: true,
    component: OffCanvas.OffCanvasRevealTop,
    codeSnippet: `
<OffCanvas.RevealTop
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.7)"
  height="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.RevealTop>
`
  },
  {
    key: "RevealBottom",
    title: "Reveal Bottom",
    description: "Reveal menu from the bottom, sliding content away.",
    implemented: true,
    component: OffCanvas.OffCanvasRevealBottom,
    codeSnippet: `
<OffCanvas.RevealBottom
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.7)"
  height="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.RevealBottom>
`
  },
  // Push Variants
  {
    key: "PushLeft",
    title: "Push Left",
    description: "Push menu from the left, shifting page content.",
    implemented: true,
    component: OffCanvas.OffCanvasPushLeft,
    codeSnippet: `
<OffCanvas.PushLeft
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.7)"
  width="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.PushLeft>
`
  },
  {
    key: "PushRight",
    title: "Push Right",
    description: "Push menu from the right, shifting page content.",
    implemented: true,
    component: OffCanvas.OffCanvasPushRight,
    codeSnippet: `
<OffCanvas.PushRight
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.7)"
  width="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.PushRight>
`
  },
  {
    key: "PushTop",
    title: "Push Top",
    description: "Push menu from the top, shifting page content.",
    implemented: true,
    component: OffCanvas.OffCanvasPushTop,
    codeSnippet: `
<OffCanvas.PushTop
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.7)"
  height="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.PushTop>
`
  },
  {
    key: "PushBottom",
    title: "Push Bottom",
    description: "Push menu from the bottom, shifting page content.",
    implemented: true,
    component: OffCanvas.OffCanvasPushBottom,
    codeSnippet: `
<OffCanvas.PushBottom
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.7)"
  height="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.PushBottom>
`
  },
  // Stack Variants
  {
    key: "StackDown",
    title: "Stack Down",
    description: "Stacked panel appears below the previous.",
    implemented: true,
    component: OffCanvas.OffCanvasStackDown,
    codeSnippet: `
<OffCanvas.StackDown
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.7)"
  height="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.StackDown>
`
  },
  {
    key: "StackUp",
    title: "Stack Up",
    description: "Stacked panel appears above the previous.",
    implemented: true,
    component: OffCanvas.OffCanvasStackUp,
    codeSnippet: `
<OffCanvas.StackDown
  isOpen={isOpen}
  toggle={() => setIsOpen(!isOpen)}
  overlayColor="rgba(30,30,30,0.7)"
  height="300px"
  animationDuration={300}
>
  {/* Menu content here */}
</OffCanvas.StackDown>
`
  },
];
