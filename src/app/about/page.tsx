"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TRUST_CARDS = [
  {
    icon: "badge",
    title: "Professional Drivers",
    desc: "IVR-certified technicians who undergo continuous training in modern vehicle handling and roadside safety.",
  },
  {
    icon: "verified_user",
    title: "Fully Insured",
    desc: "Comprehensive Goods-in-Transit and Public Liability cover for luxury, classic, and everyday vehicles.",
  },
  {
    icon: "precision_manufacturing",
    title: "Modern Equipment",
    desc: "Euro-6 compliant trucks with hydraulic tilt-and-slide beds and professional-grade winching systems.",
  },
  {
    icon: "bolt",
    title: "Fast Response",
    desc: "Stationed across SW16 and South London with an average response time under 45 minutes.",
  },
];

const STATS = [
  { value: "15k+", label: "Vehicles Recovered" },
  { value: "16+", label: "Years Experience" },
  { value: "24/7", label: "Emergency Support" },
  { value: "99%", label: "Happy Customers" },
];

export default function AboutPage() {
  return (
    <main className="bg-surface-muted">
      <Navbar />

      {/* ---------- HERO ---------- */}
      <section className="relative pt-20 md:pt-24 min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            className="w-full h-full object-cover"
            alt="A professional heavy-duty recovery truck on a clean urban street in London at dusk."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABBpN60D-ArxyNWF3FSeCFDM85XG9Zlti1i2Jtfg6hAWpJtzV4ojY5UGOhSiOY0bOGJZJ1vQOIKB6GXs9b_UV3vidLr-nUrNoTTRdevO73VNNqLGBjRzhtzj0YfUv8z6XxSvKRmrvSMkWknHvbj8fBgj8op2-5EYSJ_a9SaTosuAVmFpegt62uIl0ELjMP8IEKgR8RrtbZIVqp4MUFIy59lnOJkw824yBRjK7AGcxspgNDkZBa2GWaa-pMxjwpFxsAg1bf7MTPcuMN"
          />
          <div className="absolute inset-0 hero-scrim" />
        </div>

        <div className="container-page py-16 md:py-20 w-full">
          <div className="max-w-2xl text-white animate-fadeIn">
            <span className="eyebrow text-accent-light">
              <span className="w-8 h-px bg-accent-light" /> About Recovery Solution
            </span>
            <h1 className="mt-4 text-white">Excellence in Vehicle Logistics &amp; Recovery</h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed">
              Serving SW16 and the Greater London area with unwavering commitment and professional precision since 2008.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn btn-accent">
                <span className="material-symbols-outlined">support_agent</span>
                Get in Touch
              </a>
              <a href="/services" className="btn btn-ghost-white">
                Explore Services
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MISSION ---------- */}
      <section className="section">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow"><span className="w-8 h-px bg-accent-dark" /> Established in London</span>
              <h2 className="mt-3">Reliability When You Need It Most</h2>
              <p className="mt-6 text-lg">
                Based in the heart of SW16, Recovery Solution Ltd has grown from a local service to one of
                London's most trusted vehicle recovery specialists. A vehicle breakdown is more than a
                mechanical failure — it's a disruption to your life. That's why we've built our reputation
                on three core pillars: <strong className="text-primary">speed, safety, and transparency.</strong>
              </p>

              <blockquote className="mt-8 p-6 md:p-8 bg-white border-l-4 border-accent rounded-r-2xl shadow-sm">
                <p className="font-display text-lg md:text-xl text-primary leading-relaxed italic">
                  "To deliver fast, dependable, and affordable vehicle recovery services that set the
                  industry standard for professionalism and customer care across London."
                </p>
                <cite className="block mt-4 text-xs not-italic uppercase tracking-widest text-accent-dark font-semibold">
                  — Our Mission Statement
                </cite>
              </blockquote>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary rounded-2xl -z-10" />
                <img
                  className="relative rounded-2xl w-full aspect-[4/5] object-cover shadow-xl"
                  alt="A close-up shot of a professional recovery driver in a high-visibility uniform inspecting a modern vehicle flatbed."
                  src="https://lh3.googleusercontent.com/aida/AP1WRLuzbr63wOpnvgvN_j3C8BChL15_49bRE8yC6I1wJCaTopvlUWaAbO6Khub4gzEO2socZ9gg13ZD3nEsq0z3GmCAkgKcm4kdZdHF7Ogt_JspSkbPKQrcN0MmrFm8OcCiD7-mhepqg8XT99gL9A9ZXYOaSlNwcajHF0fDtgB3TwxUsv6l4LSbmWuVU-wdu3-4jsoR4X7F7yOt53jZn0JcOkpZLoVKYrADNWhmemaMROncs2PSt-IukC8FN6O-"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="bg-primary text-white relative overflow-hidden py-16 md:py-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:24px_24px]"
        />
        <div className="container-page relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center p-4">
                <div className="font-display font-bold text-4xl md:text-5xl text-accent-light leading-none">
                  {s.value}
                </div>
                <div className="mt-3 text-xs md:text-sm uppercase tracking-widest text-white/70 font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TRUST GRID ---------- */}
      <section className="section">
        <div className="container-page">
          <div className="section-head">
            <span className="eyebrow"><span className="w-8 h-px bg-accent-dark" /> Why trust us</span>
            <h2 className="mt-3">Why Londoners Trust Our Fleet</h2>
            <p>Beyond the equipment, it's our people and our processes that define the Recovery Solution Ltd experience.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUST_CARDS.map((c) => (
              <article key={c.title} className="card card-hover p-7 animate-fadeIn">
                <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-primary">{c.icon}</span>
                </div>
                <h3 className="text-lg">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{c.desc}</p>
              </article>
            ))}

            {/* Highlight card spanning 2 cols on lg */}
            <article className="card lg:col-span-2 p-7 md:p-8 accent-surface text-primary border-0 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-primary text-xl md:text-2xl">Customer-Focused Approach</h3>
                <p className="mt-3 text-primary/85 leading-relaxed">
                  We don't just recover vehicles — we look after people. From clear SMS updates to ensuring
                  you reach your destination safely, our focus is minimising your stress throughout the
                  entire recovery process.
                </p>
              </div>
              <div className="w-full md:w-56 h-40 rounded-xl overflow-hidden shadow-lg shrink-0">
                <img
                  alt="A person on the roadside next to a broken-down car looking relieved as a recovery driver arrives"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdSKMFSvYlHAqtPaJ0Ubt7GJIcsRhEOYoTZFRu831iAvHIEuCJ9JFhxllCWDPNE6AHLp4XcCjQlrYs_yFzOzHO_uXbTHkgbPHvupuvOe9b34PDVzBlj6md4PK42uEk1_v2faH1Izese-ZxdXDHblhFMpiOhSBmios-nC-qIRNYmT8YbFo52DBy2-h_oGNWzTCNBaN_Nk4UdBdmvs5r_SNEqnhQ__QyAnDG9fLFvFCL3qzUdfPNhMKLpy-8XkyskrCbd8OpXI6SG_D_"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- WORKSHOP / TEAM ---------- */}
      <section className="section bg-white border-t border-border">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "State-of-the-Art Workshop",
                alt: "A clean, organized vehicle service workshop at dawn.",
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0PEDBHbISLUGMppMfoRL_GUHuG5QJhaKcMrnPKRO7lHGSeTgTZakWH46cyDbCVT6vNikcdXbxsozd0FrN3eOYXUdyu8M7UvHSlKb4OH_QS3rjZKd7NRJL7ggNn4-F14cHqrgpW95KfsSEl1g5o065inyczCUbkhKQzTQxxwognhJdGb5G9TbW4K_rVpUTbTrtPFHYPtiK9I1NAGUYHs3-wG4fjEV2-_6w0e4LyumxGub_jOVuRzIxT0MZLOaj8EsWriAzZjb_vukZ",
              },
              {
                title: "Our Expert Team",
                alt: "A group of diverse, professional recovery specialists in front of a company-branded truck.",
                src: "https://lh3.googleusercontent.com/aida/AP1WRLvpBCBUsAPBwYvRgTqjER2CfMw2fS_5SuranS0Rc4igHVElBGls1XsirLhW8FBKLWeUP9kwbC4Fkt_ntG0sexS4JXxexaG2HoUWXzXbqfIfxbXVviDw6Fzh4zfPsv2LhYahBKJiYP-bPE9Qq1-fCsyHWo9Wwau1HhlV_AmgzSPU3fnq-_AIiHuB9nDwScJ8BGbvlGE9IcMo2yRI_4B_KZ-O2vOXAVvh-h_8S0ekHV8Piv4Nt6j3naauT-w",
              },
            ].map((card) => (
              <div key={card.title} className="relative group rounded-2xl overflow-hidden aspect-[16/10] shadow-md">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={card.alt} src={card.src} />
                <div className="absolute inset-0 scrim-bottom" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="text-white text-xl md:text-2xl">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
