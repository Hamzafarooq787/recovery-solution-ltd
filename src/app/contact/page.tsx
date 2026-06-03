// src/app/contact/page.tsx
"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  useEffect(() => {
    // Micro-interaction: change label color on input focus
    const inputs = document.querySelectorAll("input, select, textarea");
    const handleFocus = (e: Event) => {
      const label = (e.target as HTMLElement).closest(".form-group")?.querySelector("label");
      if (label) label.classList.add("text-secondary");
    };
    const handleBlur = (e: Event) => {
      const label = (e.target as HTMLElement).closest(".form-group")?.querySelector("label");
      if (label) label.classList.remove("text-secondary");
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request sent successfully. A dispatcher will call you shortly.");
  };

  return (
    <main>
      <Navbar />

      {/* Extra padding because navbar is fixed */}
      <div className="pt-24">
        {/* Emergency Banner */}
        <section className="bg-secondary-container py-6">
          <div className="max-w-[--spacing-container-max] mx-auto px-[--spacing-margin-desktop] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-4xl urgent-pulse">
                emergency_home
              </span>
              <h2 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] text-primary">
                Need Immediate Assistance? Call Us 24/7
              </h2>
            </div>
            <a
              href="tel:+447865459551"
              className="font-[--font-family-headline-md] text-[--font-size-headline-md] font-bold text-primary hover:underline decoration-2 underline-offset-4"
            >
              +44 7865 459551
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-[--spacing-stack-lg] max-w-[--spacing-container-max] mx-auto px-[--spacing-margin-desktop] grid grid-cols-1 lg:grid-cols-12 gap-[--spacing-gutter]">
          {/* Info and Map Column */}
          <div className="lg:col-span-5 flex flex-col gap-[--spacing-stack-md]">
            <div className="bg-white p-8 rounded-xl soft-elevated">
              <h1 className="font-[--font-family-headline-md] text-[--font-size-headline-md] mb-6 text-primary border-l-4 border-secondary-container pl-4">
                Contact Information
              </h1>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">business</span>
                  <div>
                    <p className="font-bold text-primary">Company Name</p>
                    <p className="text-on-surface-variant">Recovery Solution Ltd</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                  <div>
                    <p className="font-bold text-primary">Headquarters</p>
                    <p className="text-on-surface-variant">SW16, London, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">call</span>
                  <div>
                    <p className="font-bold text-primary">24/7 Support Line</p>
                    <p className="text-on-surface-variant">+44 7865 459551</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="rounded-xl overflow-hidden soft-elevated h-[400px] relative group">
              <img
                className="w-full h-full object-cover"
                alt="A person standing safely on the roadside next to a broken-down car with the hood open, looking relieved as a professional recovery driver arrives"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdSKMFSvYlHAqtPaJ0Ubt7GJIcsRhEOYoTZFRu831iAvHIEuCJ9JFhxllCWDPNE6AHLp4XcCjQlrYs_yFzOzHO_uXbTHkgbPHvupuvOe9b34PDVzBlj6md4PK42uEk1_v2faH1Izese-ZxdXDHblhFMpiOhSBmios-nC-qIRNYmT8YbFo52DBy2-h_oGNWzTCNBaN_Nk4UdBdmvs5r_SNEqnhQ__QyAnDG9fLFvFCL3qzUdfPNhMKLpy-8XkyskrCbd8OpXI6SG_D_"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors pointer-events-none"></div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-xl soft-elevated">
            <h2 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] mb-2 text-primary">
              Request a Recovery
            </h2>
            <p className="text-on-surface-variant mb-8">
              Fill in the details below and our dispatch team will contact you shortly.
            </p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 form-group">
                <label className="font-[--font-family-label-md] text-[--font-size-label-md] text-on-surface-variant transition-colors">
                  Full Name
                </label>
                <input
                  className="w-full h-12 px-4 rounded-lg border-2 border-surface-container-highest focus:border-primary focus:ring-0 transition-colors"
                  placeholder="John Doe"
                  required
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 form-group">
                <label className="font-[--font-family-label-md] text-[--font-size-label-md] text-on-surface-variant transition-colors">
                  Phone Number
                </label>
                <input
                  className="w-full h-12 px-4 rounded-lg border-2 border-surface-container-highest focus:border-primary focus:ring-0 transition-colors"
                  placeholder="+44"
                  required
                  type="tel"
                />
              </div>
              <div className="flex flex-col gap-2 form-group">
                <label className="font-[--font-family-label-md] text-[--font-size-label-md] text-on-surface-variant transition-colors">
                  Email Address
                </label>
                <input
                  className="w-full h-12 px-4 rounded-lg border-2 border-surface-container-highest focus:border-primary focus:ring-0 transition-colors"
                  placeholder="email@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2 form-group">
                <label className="font-[--font-family-label-md] text-[--font-size-label-md] text-on-surface-variant transition-colors">
                  Vehicle Type
                </label>
                <select className="w-full h-12 px-4 rounded-lg border-2 border-surface-container-highest focus:border-primary focus:ring-0 transition-colors">
                  <option>Hatchback / Sedan</option>
                  <option>SUV / 4x4</option>
                  <option>Van / Light Commercial</option>
                  <option>Motorcycle</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 form-group">
                <label className="font-[--font-family-label-md] text-[--font-size-label-md] text-on-surface-variant transition-colors">
                  Recovery Location
                </label>
                <div className="relative">
                  <input
                    className="w-full h-12 px-4 pr-10 rounded-lg border-2 border-surface-container-highest focus:border-primary focus:ring-0 transition-colors"
                    placeholder="Current street or postcode"
                    required
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute right-3 top-3 text-outline">
                    my_location
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 form-group">
                <label className="font-[--font-family-label-md] text-[--font-size-label-md] text-on-surface-variant transition-colors">
                  Destination
                </label>
                <input
                  className="w-full h-12 px-4 rounded-lg border-2 border-surface-container-highest focus:border-primary focus:ring-0 transition-colors"
                  placeholder="Drop-off address"
                  required
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2 form-group">
                <label className="font-[--font-family-label-md] text-[--font-size-label-md] text-on-surface-variant transition-colors">
                  Message / Issue Details
                </label>
                <textarea
                  className="w-full p-4 rounded-lg border-2 border-surface-container-highest focus:border-primary focus:ring-0 transition-colors"
                  placeholder="Describe the problem (e.g., flat tire, engine failure, accident)"
                  rows={4}
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full bg-secondary-container hover:opacity-90 text-primary font-[--font-family-headline-sm] py-4 rounded-lg transition-all active:scale-[0.98] flex justify-center items-center gap-2"
                >
                  <span className="material-symbols-outlined">send</span>
                  Submit Recovery Request
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}