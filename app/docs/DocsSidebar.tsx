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
    <nav aria-label="On this page" className="fixed top-24 hidden md:block ml-6">
      <div className="flex items-center gap-2 mb-4 text-muted-foreground font-medium">
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        <span className="text-sm">On this page</span>
      </div>
      <ul className="relative ml-2">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-muted" style={{ zIndex: 0, marginLeft: -15, marginTop: 10, marginBottom: 10 }} />
        {sections.map((section, idx) => (
          <li key={section.id} className="relative flex items-center min-h-8" style={{ zIndex: 1 }}>
            {/* Dot */}
            <span
              className={`absolute left-[-0.375rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border-2 ${activeId === section.id ? "bg-muted-foreground border-secondary" : "hidden"}`}
              aria-hidden="true"
            />
            <a
              href={`#${section.id}`}
              className={`block pl-6 py-1 rounded transition-colors hover:text-primary focus:text-primary text-xs ${activeId === section.id ? "font-semibold text-primary" : "text-muted-foreground"}`}
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
