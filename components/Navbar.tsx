"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="navbar">
      <div className="site-shell nav-inner">
        <a className="brand" href="#top" aria-label="Thanakorn portfolio home">
          <span className="brand-mark">TT</span>
          <span>Thanakorn Thongpraiwan</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      <nav className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {links.map((link) => (
          <a className="nav-link" href={link.href} key={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
