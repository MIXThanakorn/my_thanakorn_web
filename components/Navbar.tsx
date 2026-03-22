"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Top bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between relative z-20">
        {/* Logo */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(0.9rem, 3vw, 1rem)",
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
          }}
        >
          Thanakorn
          <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>
            .dev
          </span>
        </span>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6 md:gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="theme-toggle"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            background: "var(--nav-bg)",
            padding: "0.75rem 1.5rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              onClick={() => setOpen(false)}
              style={{ fontSize: "0.9rem" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
