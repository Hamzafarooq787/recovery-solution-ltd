"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progressBarRef.current) {
        const w = Math.floor(Math.random() * 36) + 60;
        progressBarRef.current.style.width = `${w}%`;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-surface-muted">
      <Navbar />

      {/* ---------- HERO ---------- */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden hero-surface text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:24px_24px]"
        />
        <div className="container-page relative text-center max-w-3xl">
          <span className="eyebrow text-accent-light justify-center">
            <span className="w-8 h-px bg-accent-light" /> Our services
          </span>
          <h1 className="mt-4 text-white">Expert Roadside Assistance &amp; Logistics</h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed">
            From emergency breakdowns to planned vehicle transport, our tech-enabled fleet ensures
            you're never stranded for long. Professional recovery, delivered with calm efficiency.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+447865459551" className="btn btn-accent">
              <span className="material-symbols-outlined">call</span>
              Emergency Call
            </a>
            <a href="/contact" className="btn btn-ghost-white">
              Request a Quote
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      <div className="section">
        <div className="container-page space-y-16 md:space-y-20">
          {/* ---------- Emergency Recovery ---------- */}
          <section id="emergency" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <img
                className="w-full h-[300px] md:h-[420px] object-cover"
                alt="A heavy-duty modern recovery truck with bright amber emergency lights active during a rainy evening on a highway shoulder."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdSKMFSvYlHAqtPaJ0Ubt7GJIcsRhEOYoTZFRu831iAvHIEuCJ9JFhxllCWDPNE6AHLp4XcCjQlrYs_yFzOzHO_uXbTHkgbPHvupuvOe9b34PDVzBlj6md4PK42uEk1_v2faH1Izese-ZxdXDHblhFMpiOhSBmios-nC-qIRNYmT8YbFo52DBy2-h_oGNWzTCNBaN_Nk4UdBdmvs5r_SNEqnhQ__QyAnDG9fLFvFCL3qzUdfPNhMKLpy-8XkyskrCbd8OpXI6SG_D_"
              />
            </div>
            <div className="md:col-span-5 card p-8 border-l-4 border-l-accent order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15">
                  <span className="material-symbols-outlined text-accent-dark text-[28px]">emergency_home</span>
                </span>
                <span className="eyebrow">24/7 Priority</span>
              </div>
              <h2>Emergency Recovery</h2>
              <p className="mt-3">
                Rapid response for critical situations. Our 24/7 emergency dispatch ensures a recovery
                specialist reaches your location within 60 minutes, providing peace of mind when you
                need it most.
              </p>
              <a href="tel:+447865459551" className="btn btn-accent urgent-pulse w-full sm:w-auto mt-6">
                <span className="material-symbols-outlined">call</span>
                Call Now
              </a>
            </div>
          </section>

          {/* ---------- Breakdown & Roadside ---------- */}
          <section id="roadside" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Breakdown Recovery",
                icon: "car_repair",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhiVIHKP8juQebn4Rgz3HW4ePHInbhAYGoezaGyWnBpHb3AXAm0fnn9efMhVgqIwWT4A0Ofrp7bV9Ep1QTX9P7JnuK6fZlyWta8-ReCXEhQw7QWfBSsw-QhiHfNj1Krtzynw27o6Hzw_7GjfQmYZPLJxapgzzrjHEVsVVhYZAy2JKUqy4e8AWVmyjhcKqa3cGZ2C8Ro9enjjy4P6N_HuV7OWfSXpgAyjdpcwElenLeyxlWtqfApj9y2IETqq6Kmy8E6QkUf-yI-RH6",
                desc: "Mechanical failure? We provide swift towing to your preferred garage or home. Our drivers are trained on high-value and electric vehicles with specialized equipment.",
              },
              {
                title: "Roadside Assistance",
                icon: "build",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAANzqClwQILfdm4UqHLn-rMURfwHb9dKEEqH9c7wpa4ONdNku7WYDUvf1phNryP1IHTGS3xJoYTW1VU-8rBqy62ngRJfCT8hePM5XIAMNiV_Uupi9DQWYt7LiAVeFfGPi5fzv5aRp9NPGZXOFCdpTgWwe-vWwc1jOu8IpUux22ls-t-YXA0U6o0DrW7N5maiA5D06zRcypj5BD7w9VfoOZEVy-uf7soFAfWxgSLwmsEaffHx2fbOfL0M_YDqhZfzBr21e8_wQbp1Ej",
                desc: "Flat tire, battery jumpstart, or lock-out? Our roadside technicians aim to fix the issue on-site to get you back on your journey — no tow needed.",
              },
            ].map((s) => (
              <article key={s.title} className="card card-hover p-6 md:p-7 flex flex-col">
                <div className="relative h-52 -mx-6 -mt-6 mb-6 md:-mx-7 md:-mt-7 overflow-hidden">
                  <img className="w-full h-full object-cover" src={s.img} alt={s.title} />
                </div>
                <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary">{s.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl">{s.title}</h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed flex-1">{s.desc}</p>
                <a href="/contact" className="btn btn-outline mt-5 self-start">
                  Request Assistance
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
              </article>
            ))}
          </section>

          {/* ---------- Accident Recovery ---------- */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 card p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/8">
                  <span className="material-symbols-outlined text-primary text-[28px]">car_crash</span>
                </span>
                <span className="eyebrow">Insurance approved</span>
              </div>
              <h2>Accident Recovery</h2>
              <p className="mt-3">
                In the aftermath of an accident, let us handle the logistics. We work directly with
                major insurers to recover your vehicle safely and transport it to an approved repair
                centre.
              </p>
              <a href="/contact" className="btn btn-primary mt-6">
                <span className="material-symbols-outlined">support_agent</span>
                Get Support
              </a>
            </div>
            <div className="md:col-span-7 rounded-2xl overflow-hidden shadow-xl">
              <img
                className="w-full h-[300px] md:h-[420px] object-cover"
                alt="A professional technician in a high-visibility safety vest inspecting a vehicle recovery attachment point."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzSc5eH5yuiiydvI81d8umXdrNgJwwAJ0Stm4cyg4YW8YERUlvX4HTTn6RtazADmVzbUzDVp4PJvaGJl1tiGdYo_Fio7x7_-eZRR2P_eTj1VCsI1UADlzel-zKhd3UcQm2JFX355vKvBPSFY5q2AhZGgltXBRP0qWQaOCQklC7O-1rffGm2wVN9iWGtl4qZ1D8n40R2QafoqVa1tPeqXKgVdQ3nqfo1fzQ-KWkxrUuPuMACPemC0PKq7lTw9UnXCcE34V-NG0JVRjW"
              />
            </div>
          </section>

          {/* ---------- Vehicle Transportation ---------- */}
          <section id="transport" className="rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 bg-primary text-white">
            <div className="min-h-[300px]">
              <img
                className="w-full h-full object-cover"
                alt="A multi-car carrier truck driving down a scenic highway during a clear morning."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhWjelMP29BF05jgzbjk9AD_svkyRXhLl1BNfLLy9uhGHJa5wH02TF1qV4IXhunxKmUX1hX1ArYW043UIb8Jqrg1Lt4TmCgw2QR7dkcDfK2eIAA1mC85sxf_VtYThHKsGv45a-WVzC_GTwFmbREokdC_tUpH-XTKhRDbTEsrPt5UkGUYDodeS21jVIcJeDogf10f92SCYNCmWPxHJAEHJnD6FVMPs9-m7SOhYmk9_CA9EVLb0KPw7NpgYWH5FBfme_iK00g-FWL-GW"
              />
            </div>
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <span className="eyebrow text-accent-light">
                <span className="w-8 h-px bg-accent-light" /> Logistics Solutions
              </span>
              <h2 className="mt-3 text-white">Vehicle Transportation</h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Safe, secure, and insured transport for dealerships, private collectors, and fleet
                managers. We offer nationwide door-to-door delivery with live tracking and
                professional handovers.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Fully Insured", "Live GPS Tracking", "Nationwide Coverage", "Premium Handling"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-white/90">
                    <span className="material-symbols-outlined text-accent-light text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {t}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-accent mt-8 self-start">
                Book Transport
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </section>
        </div>

        {/* ---------- Live Status ---------- */}
        <div className="container-page mt-16 md:mt-20">
          <div className="card p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg md:text-xl">Active Fleet Status</h3>
                <p className="mt-1 text-sm">Our current operational capacity in your area.</p>
              </div>
              <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
                <span className="w-2.5 h-2.5 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-semibold">14 Units Available Now</span>
              </div>
            </div>
            <div className="relative h-2 bg-surface-alt rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="absolute top-0 left-0 h-full bar-accent transition-all duration-1000 ease-out"
                style={{ width: "66%" }}
              />
            </div>
            <div className="flex justify-between mt-3 text-xs uppercase tracking-wider text-ink-soft font-semibold">
              <span>Dispatch</span>
              <span>En Route</span>
              <span>Arrived</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
