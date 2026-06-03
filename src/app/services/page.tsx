// src/app/services/page.tsx
"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Micro‑interaction: progress bar random width every 3 seconds
    const interval = setInterval(() => {
      if (progressBarRef.current) {
        const randomWidth = Math.floor(Math.random() * (95 - 60 + 1)) + 60;
        progressBarRef.current.style.width = `${randomWidth}%`;
      }
    }, 3000);

    // Header scroll effect (blur background)
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add("backdrop-blur-md", "bg-surface/90");
        } else {
          header.classList.remove("backdrop-blur-md", "bg-surface/90");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <Navbar />

      {/* Page top padding because navbar is fixed */}
      <div className="pt-32 pb-[--spacing-stack-lg]">
        {/* Hero Section */}
        <section className="px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[--spacing-container-max] mx-auto mb-[--spacing-stack-lg]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-[--font-family-headline-lg-mobile] md:font-[--font-family-headline-lg] text-[--font-size-headline-lg-mobile] md:text-[--font-size-headline-lg] text-primary mb-4">
              Expert Roadside Assistance &amp; Logistics
            </h1>
            <p className="font-[--font-family-body-lg] text-[--font-size-body-lg] text-on-surface-variant">
              From emergency breakdowns to planned vehicle transport, our tech‑enabled fleet ensures you're never stranded for long. Professional recovery, delivered with calm efficiency.
            </p>
          </div>
        </section>

        {/* Services Content */}
        <div className="px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[--spacing-container-max] mx-auto space-y-[--spacing-stack-lg]">
          {/* Service 1: Emergency Recovery (Urgent Focus) */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-[--spacing-gutter] items-center">
            <div className="md:col-span-7 rounded-xl overflow-hidden soft-elevated">
              <img
                className="w-full h-[400px] object-cover"
                alt="A heavy-duty modern recovery truck with bright amber emergency lights active during a rainy evening on a highway shoulder. The scene is illuminated by the soft golden glow of the safety equipment against a cool blue twilight sky, evoking a sense of urgent professional assistance. The composition focuses on the sleek industrial design of the vehicle and the crisp reflections on the wet asphalt."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdSKMFSvYlHAqtPaJ0Ubt7GJIcsRhEOYoTZFRu831iAvHIEuCJ9JFhxllCWDPNE6AHLp4XcCjQlrYs_yFzOzHO_uXbTHkgbPHvupuvOe9b34PDVzBlj6md4PK42uEk1_v2faH1Izese-ZxdXDHblhFMpiOhSBmios-nC-qIRNYmT8YbFo52DBy2-h_oGNWzTCNBaN_Nk4UdBdmvs5r_SNEqnhQ__QyAnDG9fLFvFCL3qzUdfPNhMKLpy-8XkyskrCbd8OpXI6SG_D_"
              />
            </div>
            <div className="md:col-span-5 p-[--spacing-stack-md] bg-white rounded-xl soft-elevated border-l-4 border-secondary-container">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-secondary-container text-4xl">
                  emergency_home
                </span>
                <h2 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] text-primary">
                  Emergency Recovery
                </h2>
              </div>
              <p className="font-[--font-family-body-md] text-[--font-size-body-md] text-on-surface-variant mb-6">
                Rapid response for critical situations. Our 24/7 emergency dispatch ensures a recovery specialist reaches your location within 60 minutes, providing peace of mind when you need it most.
              </p>
              <button className="urgent-pulse bg-secondary-container text-on-secondary-container w-full md:w-auto px-8 py-3 rounded-lg font-[--font-family-button] text-[--font-size-button] hover:opacity-90 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">call</span>
                Call Now
              </button>
            </div>
          </section>

          {/* Service 2 & 3: Breakdown & Roadside (Bento Style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[--spacing-gutter]">
            <div className="bg-white p-[--spacing-stack-md] rounded-xl soft-elevated flex flex-col justify-between">
              <img
                className="w-full h-48 object-cover rounded-lg mb-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhiVIHKP8juQebn4Rgz3HW4ePHInbhAYGoezaGyWnBpHb3AXAm0fnn9efMhVgqIwWT4A0Ofrp7bV9Ep1QTX9P7JnuK6fZlyWta8-ReCXEhQw7QWfBSsw-QhiHfNj1Krtzynw27o6Hzw_7GjfQmYZPLJxapgzzrjHEVsVVhYZAy2JKUqy4e8AWVmyjhcKqa3cGZ2C8Ro9enjjy4P6N_HuV7OWfSXpgAyjdpcwElenLeyxlWtqfApj9y2IETqq6Kmy8E6QkUf-yI-RH6"
                alt="Professional mechanic performing roadside repair"
              />
              <div>
                <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-on-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    car_repair
                  </span>
                </div>
                <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] text-primary mb-3">
                  Breakdown Recovery
                </h3>
                <p className="font-[--font-family-body-md] text-[--font-size-body-md] text-on-surface-variant mb-6">
                  Mechanical failure? We provide swift towing to your preferred garage or home. Our drivers are trained in handling high-value and electric vehicles with specialized equipment.
                </p>
              </div>
              <button className="border-2 border-primary text-primary px-6 py-2 rounded-lg font-[--font-family-button] text-[--font-size-button] hover:bg-primary hover:text-on-primary transition-all">
                Request Assistance
              </button>
            </div>

            <div className="bg-white p-[--spacing-stack-md] rounded-xl soft-elevated flex flex-col justify-between">
              <img
                className="w-full h-48 object-cover rounded-lg mb-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAANzqClwQILfdm4UqHLn-rMURfwHb9dKEEqH9c7wpa4ONdNku7WYDUvf1phNryP1IHTGS3xJoYTW1VU-8rBqy62ngRJfCT8hePM5XIAMNiV_Uupi9DQWYt7LiAVeFfGPi5fzv5aRp9NPGZXOFCdpTgWwe-vWwc1jOu8IpUux22ls-t-YXA0U6o0DrW7N5maiA5D06zRcypj5BD7w9VfoOZEVy-uf7soFAfWxgSLwmsEaffHx2fbOfL0M_YDqhZfzBr21e8_wQbp1Ej"
                alt="Technician jumpstarting a car battery"
              />
              <div>
                <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-on-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    build
                  </span>
                </div>
                <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] text-primary mb-3">
                  Roadside Assistance
                </h3>
                <p className="font-[--font-family-body-md] text-[--font-size-body-md] text-on-surface-variant mb-6">
                  Flat tire, battery jumpstart, or lock-out? Our roadside technicians aim to fix the issue on-site to get you back on your journey without the need for a tow.
                </p>
              </div>
              <button className="border-2 border-primary text-primary px-6 py-2 rounded-lg font-[--font-family-button] text-[--font-size-button] hover:bg-primary hover:text-on-primary transition-all">
                Request Assistance
              </button>
            </div>
          </div>

          {/* Service 4: Accident Recovery (Inverted Layout) */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-[--spacing-gutter] items-center">
            <div className="md:col-span-5 order-2 md:order-1 p-[--spacing-stack-md] bg-white rounded-xl soft-elevated">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-4xl">
                  car_crash
                </span>
                <h2 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] text-primary">
                  Accident Recovery
                </h2>
              </div>
              <p className="font-[--font-family-body-md] text-[--font-size-body-md] text-on-surface-variant mb-6">
                In the aftermath of an accident, let us handle the logistics. We work directly with major insurers to recover your vehicle safely and transport it to an approved repair center.
              </p>
              <button className="bg-primary text-on-primary w-full md:w-auto px-8 py-3 rounded-lg font-[--font-family-button] text-[--font-size-button] hover:opacity-90 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">support_agent</span>
                Get Support
              </button>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 rounded-xl overflow-hidden soft-elevated">
              <img
                className="w-full h-[400px] object-cover"
                alt="A professional technician in a high-visibility safety vest inspecting a vehicle recovery attachment point in a brightly lit industrial garage. The focus is on the precision and technical expertise of the staff, with a clean and organized background of recovery tools and modern automotive maintenance equipment. The lighting is crisp and corporate, highlighting safety and reliability."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzSc5eH5yuiiydvI81d8umXdrNgJwwAJ0Stm4cyg4YW8YERUlvX4HTTn6RtazADmVzbUzDVp4PJvaGJl1tiGdYo_Fio7x7_-eZRR2P_eTj1VCsI1UADlzel-zKhd3UcQm2JFX355vKvBPSFY5q2AhZGgltXBRP0qWQaOCQklC7O-1rffGm2wVN9iWGtl4qZ1D8n40R2QafoqVa1tPeqXKgVdQ3nqfo1fzQ-KWkxrUuPuMACPemC0PKq7lTw9UnXCcE34V-NG0JVRjW"
              />
            </div>
          </section>

          {/* Service 5: Vehicle Transportation (Premium Card) */}
          <section className="bg-primary-container rounded-2xl overflow-hidden text-on-primary flex flex-col md:flex-row shadow-xl">
            <div className="md:w-1/2">
              <img
                className="w-full h-full object-cover"
                alt="A multi-car carrier truck driving down a scenic highway during a clear morning. The transport vehicle is clean and modern, carrying several premium sedans. The scene suggests dependable logistics and long-distance transportation services, with soft morning sunlight illuminating the highway landscape in a professional, corporate aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhWjelMP29BF05jgzbjk9AD_svkyRXhLl1BNfLLy9uhGHJa5wH02TF1qV4IXhunxKmUX1hX1ArYW043UIb8Jqrg1Lt4TmCgw2QR7dkcDfK2eIAA1mC85sxf_VtYThHKsGv45a-WVzC_GTwFmbREokdC_tUpH-XTKhRDbTEsrPt5UkGUYDodeS21jVIcJeDogf10f92SCYNCmWPxHJAEHJnD6FVMPs9-m7SOhYmk9_CA9EVLb0KPw7NpgYWH5FBfme_iK00g-FWL-GW"
              />
            </div>
            <div className="md:w-1/2 p-[--spacing-stack-lg] flex flex-col justify-center">
              <span className="text-secondary-container font-[--font-family-label-md] text-[--font-size-label-md] mb-4">
                LOGISTICS SOLUTIONS
              </span>
              <h2 className="font-[--font-family-headline-md] text-[--font-size-headline-md] mb-6">
                Vehicle Transportation
              </h2>
              <p className="font-[--font-family-body-md] text-[--font-size-body-md] text-on-primary-container mb-8">
                Safe, secure, and insured transport for dealerships, private collectors, and fleet managers. We offer nationwide door‑to‑door delivery with live tracking and professional handovers.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="font-[--font-family-label-md] text-[--font-size-label-md]">
                    Fully Insured
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="font-[--font-family-label-md] text-[--font-size-label-md]">
                    Live GPS Tracking
                  </span>
                </div>
              </div>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-[--font-family-button] text-[--font-size-button] hover:bg-secondary-container transition-all self-start">
                Book Transport
              </button>
            </div>
          </section>
        </div>

        {/* Live Status Mockup (Interactive Element) */}
        <section className="mt-[--spacing-stack-lg] px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[--spacing-container-max] mx-auto">
          <div className="bg-white p-[--spacing-stack-md] rounded-xl soft-elevated border border-outline-variant">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] text-primary">
                  Active Fleet Status
                </h3>
                <p className="text-on-surface-variant">Our current operational capacity in your area</p>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-[--font-family-label-md] text-[--font-size-label-md]">
                  14 Units Available Now
                </span>
              </div>
            </div>
            <div className="relative h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="absolute top-0 left-0 h-full bg-secondary-container transition-all duration-1000 ease-out"
                style={{ width: "66%" }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-on-surface-variant font-[--font-family-label-md] text-[--font-size-label-md]">
              <span>Dispatch</span>
              <span>En Route</span>
              <span>Arrived</span>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}