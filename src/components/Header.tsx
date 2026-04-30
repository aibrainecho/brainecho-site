"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Products", href: "#services" },
  { label: "Evidence", href: "#evidence" },
  { label: "Notice", href: "#notice" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Active section detection
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
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex items-center gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
            B
          </div>
          <span className={`text-xl font-bold transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}>
            Brain<span className="text-lime-400">Echo</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors lg:text-sm ${
                  isScrolled
                    ? `${isActive ? "bg-brand-50 text-brand-600" : "text-gray-600 hover:bg-gray-100 hover:text-brand-600"}`
                    : `${isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <a
            href="/admin"
            className={`ml-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors lg:text-sm ${
              isScrolled
                ? "bg-brand-500 text-white hover:bg-brand-600"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Admin
          </a>
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-lg p-2 md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden shadow-lg">
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
            <a href="/admin" className="mt-2 rounded-lg bg-brand-500 px-4 py-3 text-center text-sm font-medium text-white">
              Admin
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
