"use client";

import React from "react";

const MENU_SECTIONS = [
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

export default function HamburgerMenusSidebar() {
  return (
    <nav aria-label="On this page" className="sticky top-24">
      <div className="flex items-center gap-2 mb-4 text-muted-foreground font-medium">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        <span className="text-base">On this page</span>
      </div>
      <ul className="space-y-2 ml-2">
        {MENU_SECTIONS.map(section => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block px-2 py-1 rounded transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary text-base"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
