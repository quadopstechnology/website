"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SITE_METADATA } from "@/src/constants";

const NAV_LINKS = [
  { name: "Home", href: "#", id: "home" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Portfolio", href: "#portfolio", id: "portfolio" },
  { name: "Project Planner", href: "#estimator", id: "estimator" },
  { name: "About Team", href: "#team", id: "team" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position to update active navigation links
  useEffect(() => {
    // Scroll fallback for top of the page
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when the element spans the middle view range
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe all page section IDs that match nav items
    NAV_LINKS.forEach((link) => {
      if (link.id !== "home") {
        const element = document.getElementById(link.id);
        if (element) observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1280px] left-1/2 -translate-x-1/2 glass-nav rounded-b-2xl mt-0 md:mt-2">
      <div className="flex items-center gap-2.5">
        <Image
          src="/aarvi_solutions_logo.png"
          alt="QuadOps Logo"
          width={32}
          height={32}
          className="w-8 h-8 object-contain rounded-lg shadow-sm"
        />
        <span className="text-headline-sm font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-gray-400 to-orange-400 font-exo2 transition-colors duration-300 hover:from-orange-400 hover:to-gray-400">
          {SITE_METADATA.name}
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex gap-gutter items-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`pb-1 border-b-2 transition-all duration-300 font-label-md text-label-md ${
              activeSection === link.id
                ? "text-tertiary font-bold border-tertiary"
                : "text-on-surface-variant font-medium border-transparent hover:text-tertiary"
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="hidden sm:inline-block bg-on-background text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md hover:bg-tertiary transition-all scale-95 active:scale-90 shadow-md"
        >
          Let&apos;s Collaborate
        </a>

        {/* Mobile Hamburg menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-on-surface p-2 focus:outline-none flex items-center justify-center cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-bright/95 backdrop-blur-xl border-t border-outline-variant/20 shadow-2xl flex flex-col items-center py-6 gap-4 md:hidden rounded-b-2xl animate-fade-in">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              onClick={() => setMobileMenuOpen(false)}
              href={link.href}
              className={`font-label-md text-label-md py-1.5 transition-colors ${
                activeSection === link.id
                  ? "text-tertiary font-bold"
                  : "text-on-surface-variant font-medium hover:text-tertiary"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            onClick={() => setMobileMenuOpen(false)}
            href="#contact"
            className="bg-on-background text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-tertiary transition-all"
          >
            Let&apos;s Collaborate
          </a>
        </div>
      )}
    </header>
  );
}
