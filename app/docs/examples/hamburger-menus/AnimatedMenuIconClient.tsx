"use client"

import { AnimatedMenuIcon } from "@/components/AnimatedMenuIcon";
import AnimatedMenuIconDemo from "./AnimatedMenuIconsDemo"
import DocsSidebar, { Section } from "@/app/docs/DocsSidebar"



const sections: Section[] = [
  { id: "spin", label: "Spin" },
  { id: "squash", label: "Squash" },
  { id: "slide", label: "Slide" },
  { id: "cross", label: "Cross" },
  { id: "elastic", label: "Elastic" },
  { id: "arrow", label: "Arrow" },
  { id: "collapse", label: "Collapse" },
  { id: "rotate", label: "Rotate" },
  { id: "spring", label: "Spring" },
  { id: "stand", label: "Stand" },
];

export default function AnimatedMenuIconClient() {
  return (
    <div className="container mx-auto py-8 px-0 max-w-7xl sm:grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-3">
        <h1 className="text-3xl font-semibold mb-2">Hamburger Menu Components</h1>
        <p className="text-muted-foreground mb-8">
          Togglrr provides a variety of hamburger menu button components with different animation styles. Each component
          is fully customizable and accessible.
        </p>
        
        <div className="grid gap-4">
          <div id="spin" className="scroll-mt-24">
            <AnimatedMenuIconDemo
              title="Spin"
              description="A classic hamburger that spins into an X"
              component={AnimatedMenuIcon.Spin}
              codeSnippet={`<AnimatedMenuIcon.Spin
  isOpen={isOpen}           
  toggle={() => setIsOpen(!isOpen)}
  color="#333"              
  size={30}                 
  rounded                   
  />`}
            />
          </div>

          <div id="squash" className="scroll-mt-24">
            <AnimatedMenuIconDemo
              title="Squash"
              description="Lines squash and transform into an X"
              component={AnimatedMenuIcon.Squash}
              codeSnippet={`<AnimatedMenuIcon.Squash
  isOpen={isOpen}           
  toggle={() => setIsOpen(!isOpen)}
  color="#333"              
  size={30}                 
  rounded                   
  />`}
            />
          </div>

          <div id="slide" className="scroll-mt-24">
            <AnimatedMenuIconDemo
              title="Slide"
              description="Lines slide and fade into an X"
              component={AnimatedMenuIcon.Slide}
              codeSnippet={`<AnimatedMenuIcon.Slide
  isOpen={isOpen}           
  toggle={() => setIsOpen(!isOpen)}
  color="#333"              
  size={30}                 
  rounded                   
  />`}
            />
          </div>

          <div id="cross" className="scroll-mt-24">
            <AnimatedMenuIconDemo
              title="Cross"
              description="Clean transformation into a cross"
              component={AnimatedMenuIcon.Cross}
              codeSnippet={`<AnimatedMenuIcon.Cross
  isOpen={isOpen}           
  toggle={() => setIsOpen(!isOpen)}
  color="#333"              
  size={30}                 
  rounded                   
  />`}
            />
          </div>

          <div id="elastic" className="scroll-mt-24">
            <AnimatedMenuIconDemo
              title="Elastic"
              description="Elastic bouncy animation into an X"
              component={AnimatedMenuIcon.Elastic}
              codeSnippet={`<AnimatedMenuIcon.Elastic
  isOpen={isOpen}           
  toggle={() => setIsOpen(!isOpen)}
  color="#333"              
  size={30}                 
  rounded                   
  />`}
            />
          </div>

          <div id="arrow" className="scroll-mt-24">
            <AnimatedMenuIconDemo
              title="Arrow"
              description="Transforms into an arrow"
              component={AnimatedMenuIcon.Arrow}
              codeSnippet={`<AnimatedMenuIcon.Arrow
  isOpen={isOpen}           
  toggle={() => setIsOpen(!isOpen)}
  color="#333"              
  size={30}                 
  rounded                   
  direction="left"          // Arrow direction: "left" or "right"
  />`}
            />
          </div>

          <div id="collapse" className="scroll-mt-24">
            <AnimatedMenuIconDemo
              title="Collapse"
              description="Lines collapse and transform"
              component={AnimatedMenuIcon.Collapse}
              codeSnippet={`<AnimatedMenuIcon.Collapse
  isOpen={isOpen}           
  toggle={() => setIsOpen(!isOpen)}
  color="#333"              
  size={30}                 
  rounded                   
  />`}
            />
          </div>

          <div id="rotate" className="scroll-mt-24">
            <AnimatedMenuIconDemo
              title="Rotate"
              description="Rotates and transforms into an X"
              component={AnimatedMenuIcon.Rotate}
              codeSnippet={`<AnimatedMenuIcon.Rotate
  isOpen={isOpen}           
  toggle={() => setIsOpen(!isOpen)}
  color="#333"              
  size={30}                 
  rounded                   
  />`}
            />
          </div>

          <div id="spring" className="scroll-mt-24">
            <AnimatedMenuIconDemo
              title="Spring"
              description="Springy animation into an X"
              component={AnimatedMenuIcon.Spring}
              codeSnippet={`<AnimatedMenuIcon.Spring
  isOpen={isOpen}           
  toggle={() => setIsOpen(!isOpen)}
  color="#333"              
  size={30}                 
  rounded                   
  />`}
            />
          </div>

          <div id="stand" className="scroll-mt-24">
            <AnimatedMenuIconDemo
              title="Stand"
              description="Lines stand up and transform"
              component={AnimatedMenuIcon.Stand}
              codeSnippet={`<AnimatedMenuIcon.Stand
  isOpen={isOpen}           
  toggle={() => setIsOpen(!isOpen)}
  color="#333"              
  size={30}                 
  rounded                   
  />`}
            />
          </div>

        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <h3>Accessibility Considerations</h3>
            <p>When implementing hamburger menu buttons, ensure they are accessible to all users:</p>
            <ul>
              <li>
                Include proper <code>aria-label</code> and <code>aria-expanded</code> attributes
              </li>
              <li>Ensure the button is keyboard accessible</li>
              <li>Provide sufficient color contrast</li>
              <li>Consider adding text alongside the icon for clarity</li>
            </ul>

            <h3>Best Practices</h3>
            <p>Follow these best practices for optimal user experience:</p>
            <ul>
              <li>Keep animations smooth and not too lengthy (300-500ms is ideal)</li>
              <li>Ensure the button is large enough for touch targets (at least 44x44px)</li>
              <li>Position the button consistently across your application</li>
              <li>Consider using a different animation style to match your brand personality</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-1 px-4">
        <DocsSidebar sections={sections} />
      </div>
    </div>
  )
}

