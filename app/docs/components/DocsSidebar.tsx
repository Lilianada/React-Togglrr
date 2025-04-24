"use client";
import React, { useEffect, useRef, useState } from "react";

export interface Section {
  id: string;
  label: string;
}

interface DocsSidebarProps {
  sections: Section[];
}

export default function DocsSidebar({ sections }: DocsSidebarProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0]?.id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top < window.innerHeight / 4) {
            current = section.id;
          }
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <nav aria-label="On this page" className="sticky top-24 hidden md:block">
      <div className="flex items-center gap-2 mb-4 text-muted-foreground font-medium">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        <span className="text-base">On this page</span>
      </div>
      <ul className="relative ml-2">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-muted/60" style={{ zIndex: 0, marginLeft: 2, marginTop: 20, marginBottom: 20 }} />
        {sections.map((section, idx) => (
          <li key={section.id} className="relative flex items-center min-h-8" style={{ zIndex: 1 }}>
            {/* Dot */}
            <span
              className={`absolute left-[-0.375rem] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 ${activeId === section.id ? "bg-primary border-primary" : "bg-background border-muted"}`}
              aria-hidden="true"
            />
            <a
              href={`#${section.id}`}
              className={`block pl-6 py-1 rounded transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary text-base ${activeId === section.id ? "font-semibold text-primary" : "text-muted-foreground"}`}
              tabIndex={0}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
