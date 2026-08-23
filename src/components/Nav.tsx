"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg border-b-[5px] border-ink py-4">
      <div className="relative flex items-center justify-center min-h-[52px]">
        <nav className="hidden md:flex items-center justify-center gap-8 font-mono font-bold text-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          className="md:hidden absolute right-0 brutal-border px-3 py-1 font-display text-sm bg-ink text-bg shadow-brutalSm hover-punch"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "X" : "MENU"}
        </button>
      </div>

      <nav
        className={cn(
          "md:hidden flex flex-col gap-2 mt-4 font-mono font-bold text-xl overflow-hidden transition-all",
          open ? "max-h-60" : "max-h-0"
        )}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="border-b-2 border-ink py-2 hover:text-accent hover:pl-2 transition-all"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}