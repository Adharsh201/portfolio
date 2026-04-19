"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#1e1e2e]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display font-700 text-lg tracking-tight">
          <span className="text-[#6ee7b7]">A</span>dharsh
          <span className="text-[#6ee7b7]">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#94a3b8] hover:text-[#6ee7b7] transition-colors duration-200 font-mono tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:adharshdonthagani18@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6ee7b7]/40 text-[#6ee7b7] text-sm hover:bg-[#6ee7b7]/10 transition-all duration-200 font-mono"
        >
          Hire Me
        </a>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#94a3b8] hover:text-[#6ee7b7]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#111118] border-t border-[#1e1e2e] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#94a3b8] hover:text-[#6ee7b7] transition-colors font-mono"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
