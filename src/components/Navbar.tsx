// src/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full shadow-md z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md" : "bg-surface"
      }`}
    >
      <div className="flex justify-between items-center px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] py-4 max-w-[--spacing-container-max] mx-auto">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="font-[--font-family-headline-md] text-[--font-size-headline-md] font-bold text-primary hover:opacity-80 transition"
        >
          Recovery Solution Ltd
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-[--spacing-stack-md]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-[--font-family-body-md] text-[--font-size-body-md] transition-colors duration-200 ${
                  isActive
                    ? "text-secondary font-bold border-b-2 border-secondary"
                    : "text-on-surface font-medium hover:text-secondary-container"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Call Now Button */}
        <a
          href="tel:+447865459551"
          className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-[--font-family-button] text-[--font-size-button] hover:opacity-90 active:scale-95 transition-all"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
}