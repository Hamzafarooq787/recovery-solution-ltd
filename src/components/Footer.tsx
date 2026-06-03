import Link from "next/link";

const SERVICE_LINKS = [
  { label: "Emergency Recovery", href: "/services#emergency" },
  { label: "Vehicle Transport", href: "/services#transport" },
  { label: "Battery Jumpstart", href: "/services#roadside" },
  { label: "Fuel Delivery", href: "/services#fuel" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80 pt-16 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-primary shadow-md">
                <span className="material-symbols-outlined text-[22px]">local_shipping</span>
              </span>
              <span className="font-display font-bold text-lg text-white">
                Recovery Solution
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              Your premier partner for 24/7 vehicle recovery and roadside logistics across London.
              Reliable, professional, fast.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="mailto:info@recoverysolutionltd.co.uk"
                aria-label="Email us"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
              <a
                href="tel:+447865459551"
                aria-label="Call us"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <span className="material-symbols-outlined text-accent text-[20px] mt-0.5">location_on</span>
                <span>SW16, London, United Kingdom</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <span className="material-symbols-outlined text-accent text-[20px] mt-0.5">schedule</span>
                <span>24 Hours / 7 Days a Week</span>
              </li>
              <li>
                <a
                  href="tel:+447865459551"
                  className="inline-flex items-center gap-3 mt-1 font-display font-bold text-lg text-white hover:text-accent transition-colors"
                >
                  <span className="material-symbols-outlined text-accent">call</span>
                  +44 7865 459551
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Recovery Solution Ltd. All rights reserved.</p>
          <p>Registered in England &amp; Wales.</p>
        </div>
      </div>
    </footer>
  );
}
