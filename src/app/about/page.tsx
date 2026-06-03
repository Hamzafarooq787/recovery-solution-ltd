// src/app/about/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden pt-[72px]">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-50"
            alt="A professional heavy-duty recovery truck parked on a clean urban street in London at dusk. The scene is illuminated by soft blue evening light and the warm amber glow of safety beacons. The composition is modern and cinematic, conveying a sense of reliable logistics and immediate assistance in a high-key corporate style."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABBpN60D-ArxyNWF3FSeCFDM85XG9Zlti1i2Jtfg6hAWpJtzV4ojY5UGOhSiOY0bOGJZJ1vQOIKB6GXs9b_UV3vidLr-nUrNoTTRdevO73VNNqLGBjRzhtzj0YfUv8z6XxSvKRmrvSMkWknHvbj8fBgj8op2-5EYSJ_a9SaTosuAVmFpegt62uIl0ELjMP8IEKgR8RrtbZIVqp4MUFIy59lnOJkw824yBRjK7AGcxspgNDkZBa2GWaa-pMxjwpFxsAg1bf7MTPcuMN"
          />
        </div>
        <div className="relative z-10 px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[--spacing-container-max] mx-auto w-full">
          <div className="max-w-2xl">
            <h1 className="text-on-primary font-[--font-family-headline-lg-mobile] md:font-[--font-family-headline-lg] text-[--font-size-headline-lg-mobile] md:text-[--font-size-headline-lg] mb-6">
              Excellence in Vehicle Logistics &amp; Recovery
            </h1>
            <p className="text-on-primary text-[--font-size-body-lg] opacity-90 mb-8">
              Serving SW16 and the Greater London area with unwavering commitment and professional precision since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* Intro & Mission Asymmetric Layout */}
      <section className="py-[--spacing-stack-lg] px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[--spacing-container-max] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[--spacing-gutter] items-center">
          <div className="lg:col-span-7 space-y-[--spacing-stack-md]">
            <div className="inline-block px-4 py-1 bg-primary-fixed text-on-primary-fixed rounded-full text-[--font-size-label-md] font-[--font-family-label-md]">
              ESTABLISHED IN LONDON
            </div>
            <h2 className="font-[--font-family-headline-md] text-[--font-size-headline-md] text-primary">
              Reliability When You Need It Most
            </h2>
            <p className="text-[--font-size-body-lg] text-on-surface-variant">
              Based in the heart of SW16, Recovery Solution Ltd has grown from a local service to one of London's most trusted vehicle recovery specialists. We understand that a vehicle breakdown is more than a mechanical failure; it's a disruption to your life or business. That's why we've built our reputation on three core pillars: speed, safety, and transparency.
            </p>
            <div className="p-8 bg-surface-container-low border-l-4 border-secondary-container rounded-r-xl italic">
              <p className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] text-primary-container">
                "To deliver fast, dependable, and affordable vehicle recovery services that set the industry standard for professionalism and customer care across London."
              </p>
              <cite className="block mt-4 font-[--font-family-label-md] text-[--font-size-label-md] text-on-surface-variant">
                — Our Mission Statement
              </cite>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-container rounded-xl -z-10"></div>
              <img
                className="rounded-xl soft-elevated w-full aspect-[4/5] object-cover"
                alt="A close-up shot of a professional recovery driver in a high-visibility uniform, inspecting a modern vehicle flatbed. The lighting is bright and clear, highlighting the clean equipment and professional gear. The aesthetic is sharp, corporate, and trustworthy, with a focus on high-quality service and modern technology."
                src="https://lh3.googleusercontent.com/aida/AP1WRLuzbr63wOpnvgvN_j3C8BChL15_49bRE8yC6I1wJCaTopvlUWaAbO6Khub4gzEO2socZ9gg13ZD3nEsq0z3GmCAkgKcm4kdZdHF7Ogt_JspSkbPKQrcN0MmrFm8OcCiD7-mhepqg8XT99gL9A9ZXYOaSlNwcajHF0fDtgB3TwxUsv6l4LSbmWuVU-wdu3-4jsoR4X7F7yOt53jZn0JcOkpZLoVKYrADNWhmemaMROncs2PSt-IukC8FN6O-"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary-fixed rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Bento Style) */}
      <section className="bg-primary-container py-[--spacing-stack-lg]">
        <div className="px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[--spacing-container-max] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[--spacing-gutter]">
            <div className="text-center p-6 space-y-2">
              <span className="block text-secondary-container font-[--font-family-headline-lg] text-[--font-size-headline-lg-mobile] md:text-[--font-size-headline-lg]">
                15k+
              </span>
              <span className="block text-on-primary font-[--font-family-label-md] text-[--font-size-label-md] uppercase tracking-wider">
                Vehicles Recovered
              </span>
            </div>
            <div className="text-center p-6 space-y-2">
              <span className="block text-secondary-container font-[--font-family-headline-lg] text-[--font-size-headline-lg-mobile] md:text-[--font-size-headline-lg]">
                16+
              </span>
              <span className="block text-on-primary font-[--font-family-label-md] text-[--font-size-label-md] uppercase tracking-wider">
                Years Experience
              </span>
            </div>
            <div className="text-center p-6 space-y-2">
              <span className="block text-secondary-container font-[--font-family-headline-lg] text-[--font-size-headline-lg-mobile] md:text-[--font-size-headline-lg]">
                24/7
              </span>
              <span className="block text-on-primary font-[--font-family-label-md] text-[--font-size-label-md] uppercase tracking-wider">
                Emergency Support
              </span>
            </div>
            <div className="text-center p-6 space-y-2">
              <span className="block text-secondary-container font-[--font-family-headline-lg] text-[--font-size-headline-lg-mobile] md:text-[--font-size-headline-lg]">
                99%
              </span>
              <span className="block text-on-primary font-[--font-family-label-md] text-[--font-size-label-md] uppercase tracking-wider">
                Happy Customers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Grid */}
      <section className="py-[--spacing-stack-lg] px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[--spacing-container-max] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[--font-family-headline-md] text-[--font-size-headline-md] mb-4">
            Why Londoners Trust Our Fleet
          </h2>
          <p className="text-on-surface-variant text-[--font-size-body-lg]">
            Beyond the equipment, it's our people and our processes that define the Recovery Solution Ltd experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[--spacing-gutter]">
          {/* Card 1 */}
          <div className="bg-surface soft-elevated p-8 rounded-xl border border-outline-variant hover:border-secondary transition-all group stat-card animate-fadeIn">
            <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-6 stat-icon transition-transform">
              <span className="material-symbols-outlined text-primary">badge</span>
            </div>
            <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] mb-4">
              Professional Drivers
            </h3>
            <p className="text-on-surface-variant">
              Our team consists of IVR certified technicians who undergo continuous training in modern vehicle handling and roadside safety protocols.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface soft-elevated p-8 rounded-xl border border-outline-variant hover:border-secondary transition-all group stat-card animate-fadeIn">
            <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-6 stat-icon transition-transform">
              <span className="material-symbols-outlined text-primary">verified_user</span>
            </div>
            <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] mb-4">
              Fully Insured
            </h3>
            <p className="text-on-surface-variant">
              We provide comprehensive Goods in Transit and Public Liability insurance, ensuring total peace of mind for luxury, classic, and everyday vehicles.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface soft-elevated p-8 rounded-xl border border-outline-variant hover:border-secondary transition-all group stat-card animate-fadeIn">
            <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-6 stat-icon transition-transform">
              <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
            </div>
            <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] mb-4">
              Modern Equipment
            </h3>
            <p className="text-on-surface-variant">
              Our fleet features Euro 6 compliant recovery trucks equipped with hydraulic tilt-and-slide beds and professional-grade winching systems.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-surface soft-elevated p-8 rounded-xl border border-outline-variant hover:border-secondary transition-all group stat-card animate-fadeIn">
            <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-6 stat-icon transition-transform">
              <span className="material-symbols-outlined text-primary">bolt</span>
            </div>
            <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] mb-4">
              Fast Response
            </h3>
            <p className="text-on-surface-variant">
              Strategically stationed across SW16 and South London, we maintain an average response time of under 45 minutes for emergency call-outs.
            </p>
          </div>

          {/* Card 5 - spans 2 columns */}
          <div className="md:col-span-2 bg-secondary-container p-8 rounded-xl flex flex-col md:flex-row items-center gap-8 text-on-secondary-container">
            <div className="flex-1">
              <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] mb-4">
                Customer-Focused Approach
              </h3>
              <p className="text-body-md opacity-90">
                We don't just recover vehicles; we look after people. From providing clear updates via SMS to ensuring you reach your destination safely, our focus is on minimizing your stress throughout the entire recovery process.
              </p>
            </div>
            <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden shadow-md">
              <img
                alt="A person standing safely on the roadside next to a broken-down car with the hood open, looking relieved as a professional recovery driver arrives"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdSKMFSvYlHAqtPaJ0Ubt7GJIcsRhEOYoTZFRu831iAvHIEuCJ9JFhxllCWDPNE6AHLp4XcCjQlrYs_yFzOzHO_uXbTHkgbPHvupuvOe9b34PDVzBlj6md4PK42uEk1_v2faH1Izese-ZxdXDHblhFMpiOhSBmios-nC-qIRNYmT8YbFo52DBy2-h_oGNWzTCNBaN_Nk4UdBdmvs5r_SNEqnhQ__QyAnDG9fLFvFCL3qzUdfPNhMKLpy-8XkyskrCbd8OpXI6SG_D_"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reliability Visual Section */}
      <section className="py-[--spacing-stack-lg] bg-surface-container">
        <div className="px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[--spacing-container-max] mx-auto">
          <div className="flex flex-col md:flex-row gap-[--spacing-gutter]">
            <div className="flex-1 relative h-[400px] rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="A clean, organized vehicle service workshop at dawn. The floor is polished, and professional tools are arranged neatly. In the center, a modern recovery vehicle is being meticulously checked by a technician. The lighting is cool-toned with bright accents, emphasizing high standards of maintenance and reliability."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0PEDBHbISLUGMppMfoRL_GUHuG5QJhaKcMrnPKRO7lHGSeTgTZakWH46cyDbCVT6vNikcdXbxsozd0FrN3eOYXUdyu8M7UvHSlKb4OH_QS3rjZKd7NRJL7ggNn4-F14cHqrgpW95KfsSEl1g5o065inyczCUbkhKQzTQxxwognhJdGb5G9TbW4K_rVpUTbTrtPFHYPtiK9I1NAGUYHs3-wG4fjEV2-_6w0e4LyumxGub_jOVuRzIxT0MZLOaj8EsWriAzZjb_vukZ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <span className="text-on-primary font-[--font-family-headline-sm]">
                  State-of-the-Art Workshop
                </span>
              </div>
            </div>
            <div className="flex-1 relative h-[400px] rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="A group of diverse, professional recovery specialists standing together in front of a company-branded truck. They are wearing high-quality corporate safety uniforms and smiling confidently. The setting is a bright, open outdoor space in London. The mood is collaborative, expert, and deeply trustworthy."
                src="https://lh3.googleusercontent.com/aida/AP1WRLvpBCBUsAPBwYvRgTqjER2CfMw2fS_5SuranS0Rc4igHVElBGls1XsirLhW8FBKLWeUP9kwbC4Fkt_ntG0sexS4JXxexaG2HoUWXzXbqfIfxbXVviDw6Fzh4zfPsv2LhYahBKJiYP-bPE9Qq1-fCsyHWo9Wwau1HhlV_AmgzSPU3fnq-_AIiHuB9nDwScJ8BGbvlGE9IcMo2yRI_4B_KZ-O2vOXAVvh-h_8S0ekHV8Piv4Nt6j3naauT-w"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <span className="text-on-primary font-[--font-family-headline-sm]">
                  Our Expert Team
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}