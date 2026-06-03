// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface py-[--spacing-stack-lg]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[--spacing-gutter] px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[--spacing-container-max] mx-auto text-on-tertiary">
        {/* Brand */}
        <div className="space-y-4">
          <Link
            href="/"
            className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] font-bold text-on-tertiary hover:opacity-80 transition inline-block"
          >
            Recovery Solution Ltd
          </Link>
          <p className="font-[--font-family-body-md] text-[--font-size-body-md] opacity-70">
            Your premier partner for vehicle recovery and roadside logistics in London. Reliable, professional, and fast.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-[--font-family-label-md] text-[--font-size-label-md] text-secondary-fixed mb-4 uppercase">
            Services
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services#emergency"
                className="font-[--font-family-body-md] text-[--font-size-body-md] text-surface-variant hover:text-secondary-container underline transition-all"
              >
                Emergency Recovery
              </Link>
            </li>
            <li>
              <Link
                href="/services#transport"
                className="font-[--font-family-body-md] text-[--font-size-body-md] text-surface-variant hover:text-secondary-container underline transition-all"
              >
                Vehicle Transport
              </Link>
            </li>
            <li>
              <Link
                href="/services#roadside"
                className="font-[--font-family-body-md] text-[--font-size-body-md] text-surface-variant hover:text-secondary-container underline transition-all"
              >
                Battery Jumpstart
              </Link>
            </li>
            <li>
              <Link
                href="/services#fuel"
                className="font-[--font-family-body-md] text-[--font-size-body-md] text-surface-variant hover:text-secondary-container underline transition-all"
              >
                Fuel Delivery
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-[--font-family-label-md] text-[--font-size-label-md] text-secondary-fixed mb-4 uppercase">
            Company
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="font-[--font-family-body-md] text-[--font-size-body-md] text-surface-variant hover:text-secondary-container underline transition-all"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-[--font-family-body-md] text-[--font-size-body-md] text-surface-variant hover:text-secondary-container underline transition-all"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="font-[--font-family-body-md] text-[--font-size-body-md] text-surface-variant hover:text-secondary-container underline transition-all"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="font-[--font-family-body-md] text-[--font-size-body-md] text-surface-variant hover:text-secondary-container underline transition-all"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-[--font-family-label-md] text-[--font-size-label-md] text-secondary-fixed mb-4 uppercase">
            Contact
          </h4>
          <p className="font-[--font-family-body-md] text-[--font-size-body-md] text-surface-variant mb-2">
            Based in SW16, London
          </p>
          <a
            href="tel:+447865459551"
            className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] text-on-tertiary hover:text-secondary-container transition block mb-4"
          >
            +44 7865 459551
          </a>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="material-symbols-outlined cursor-pointer hover:text-secondary-container transition"
              aria-label="Share"
            >
              share
            </a>
            <a
              href="mailto:info@recoverysolutionltd.co.uk"
              className="material-symbols-outlined cursor-pointer hover:text-secondary-container transition"
              aria-label="Email"
            >
              mail
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-[--spacing-stack-lg] border-t border-white/10 pt-8 text-center text-on-surface-variant font-[--font-family-label-md] text-[--font-size-label-md]">
        © {new Date().getFullYear()} Recovery Solution Ltd. All rights reserved.
      </div>
    </footer>
  );
}