"use client";

import { Plus, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import SignalPath from "./SignalPath";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Work", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Achievements", href: "#achievements", id: "achievements" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const sections = ["top", ...links.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      if (wasOpen.current) triggerRef.current?.focus();
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;
    document.body.style.overflow = "hidden";
    const firstLink = overlayRef.current?.querySelector<HTMLAnchorElement>("a[href]");
    const focusTimer = window.setTimeout(() => firstLink?.focus(), 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || !overlayRef.current) return;
      const focusable = Array.from(
        overlayRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (triggerRef.current) focusable.push(triggerRef.current);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [closeMenu, open]);

  return (
    <header className="navbar">
      <div className="site-shell nav-inner">
        <a className="brand" href="#top" aria-label="Thanakorn — back to top">
          <span className="brand-mark">TT</span>
          <span className="brand-name">THANAKORN / PLAYGROUND</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link, index) => (
            <a
              className={`nav-link ${activeSection === link.id ? "is-active" : ""}`}
              href={link.href}
              key={link.id}
            >
              <span>0{index + 1}</span>{link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="mobile-controls">
          <ThemeToggle />
          <button
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="menu-toggle"
            onClick={() => setOpen((value) => !value)}
            ref={triggerRef}
            type="button"
          >
            {open ? <X size={20} /> : <Plus size={20} />}
          </button>
        </div>
      </div>

      <div
        aria-modal="true"
        className={`mobile-overlay ${open ? "is-open" : ""}`}
        id="mobile-navigation"
        ref={overlayRef}
        role="dialog"
        aria-label="Site navigation"
      >
        <div className="mobile-overlay-inner">
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map((link, index) => (
              <a
                className={activeSection === link.id ? "is-active" : ""}
                href={link.href}
                key={link.id}
                onClick={closeMenu}
              >
                <span>0{index + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>
          <SignalPath compact activeStep={Math.max(0, links.findIndex((link) => link.id === activeSection))} />
          <div className="mobile-menu-meta">
            <ThemeToggle showLabel />
            <p>WEB · MOBILE · DATA</p>
            <span>TT — THANAKORN</span>
          </div>
        </div>
      </div>
    </header>
  );
}
