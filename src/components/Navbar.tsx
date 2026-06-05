"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_-12px_rgba(15,23,42,0.25)] border-b border-border"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Recovery Solution Ltd home"
        >
          <Image
            src="/logo.webp"
            alt="Recovery Solution Ltd"
            width={160}
            height={48}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-ink-muted hover:text-primary hover:bg-surface-alt"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <a href="tel:+447865459551" className="btn btn-accent hidden sm:inline-flex !py-2.5 !px-4 text-sm">
            <span className="material-symbols-outlined text-[20px]">call</span>
            <span className="hidden md:inline">Call Now</span>
            <span className="md:hidden">Call</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-primary hover:bg-surface-alt transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-border ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-page py-4 flex flex-col gap-1 bg-white">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-ink hover:bg-surface-alt"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="tel:+447865459551"
            className="btn btn-accent mt-2 w-full"
          >
            <span className="material-symbols-outlined">call</span>
            +44 7865 459551
          </a>
        </div>
      </div>
    </nav>
  );
}
