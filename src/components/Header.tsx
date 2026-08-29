"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "History", href: "#history" },
  { label: "Technology", href: "#technology" },
  { label: "Business", href: "#services" },
  { label: "Evidence", href: "#evidence" },
  { label: "Notice", href: "#notice" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((i) => i.href.slice(1));
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex items-center gap-2"
        >
          <img src="/brand-logo.png?v=1" alt="BrainEcho" className="h-7 w-auto" />
        </a>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="rounded-lg px-3 py-2 text-xs font-medium transition-colors lg:text-sm"
                style={{
                  color: isActive ? "#0047AB" : "#64748B",
                  background: isActive ? "rgba(0,71,171,0.08)" : "transparent",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 md:hidden text-gray-500"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="section-container flex flex-col gap-0.5 py-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-brand-600"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
