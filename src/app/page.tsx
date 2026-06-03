"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERVICES = [
  {
    title: "Vehicle Recovery",
    desc: "Professional towing and recovery for all vehicle types across London.",
    img: "https://lh3.googleusercontent.com/aida/AP1WRLuzbr63wOpnvgvN_j3C8BChL15_49bRE8yC6I1wJCaTopvlUWaAbO6Khub4gzEO2socZ9gg13ZD3nEsq0z3GmCAkgKcm4kdZdHF7Ogt_JspSkbPKQrcN0MmrFm8OcCiD7-mhepqg8XT99gL9A9ZXYOaSlNwcajHF0fDtgB3TwxUsv6l4LSbmWuVU-wdu3-4jsoR4X7F7yOt53jZn0JcOkpZLoVKYrADNWhmemaMROncs2PSt-IukC8FN6O-",
    icon: "local_shipping",
  },
  {
    title: "Breakdown Assistance",
    desc: "Rapid response team to diagnose and resolve mechanical issues on the spot.",
    img: "https://lh3.googleusercontent.com/aida/AP1WRLvpBCBUsAPBwYvRgTqjER2CfMw2fS_5SuranS0Rc4igHVElBGls1XsirLhW8FBKLWeUP9kwbC4Fkt_ntG0sexS4JXxexaG2HoUWXzXbqfIfxbXVviDw6Fzh4zfPsv2LhYahBKJiYP-bPE9Qq1-fCsyHWo9Wwau1HhlV_AmgzSPU3fnq-_AIiHuB9nDwScJ8BGbvlGE9IcMo2yRI_4B_KZ-O2vOXAVvh-h_8S0ekHV8Piv4Nt6j3naauT-w",
    icon: "car_repair",
  },
  {
    title: "Roadside Assistance",
    desc: "Minor repairs, battery jumpstarts, and tire changes to get you back on the road.",
    img: "https://lh3.googleusercontent.com/aida/AP1WRLuEdhvN38qGxmeg053B-bz8Nc41d48y9mLUr1PkRvWX_Ts6CF2WVsJlYTxJyXcjLjP4O70HgolKClqJ5GPEyH2qmFnr9uleWc8ZNOnap4yDxh_6sue5JZGh17kzeQ1xtuoH-TkPXpmruc0ruEYQ43ccj2bdFNFWLSS5DG8VegtRc7SD8g3vVps-SPk1PcGvynrT5jeqrncFHa6bbgYGdQiSo_XiRvYNNGutLMEDb8VU-CGQGQGoOLUdfgj9",
    icon: "build",
  },
  {
    title: "Accident Recovery",
    desc: "Compassionate, efficient vehicle removal from accident scenes with full care.",
    img: "https://lh3.googleusercontent.com/aida/AP1WRLuMXRJwB9RFd2_Hl9EMF4pas1x8XKthkmWtanpoABbkRn9CwNxqDYvLA8-XvNs2TGPTlHqEZLRDlthzmPZ3DlmLEBegmsuKLf0ybTsF6Ts74cKdlcQBnNbYkzutQ1CkWUsl6X-we-DdCn_-K_RqaOkloB0gk0mj8EeqvxTeKhTpV-AJ9lTxTTEEJNmFaTzinDWywMS0ozhnizRzzUn7ax_3fxanOWwyPbWv0pBNnV9sI2quTlMGq8oU6JK7",
    icon: "car_crash",
  },
  {
    title: "Car Transportation",
    desc: "Secure long-distance or local vehicle transport for individuals and fleets.",
    img: "https://lh3.googleusercontent.com/aida/AP1WRLssqNQ2WEO1v69vycJLCCfOEQwdq7Ec0-qgQFWPEeSWYtYKKVbM2ccarwFiizJFVfCviT3yDAfADV98v6iYbzkIz10n0RaipOLLlOs2mkhy3IsJOhSNz7GQi3IkokUzOVR_yhajfy1mRXulxPuOV4vRmHUMFAVpXGIStCRWZfZJ_SSxh76VaOJE020qFV7rVtTDPSND67X8W_SgOdokLZNsxaqfKSrjPTQT8vJMeMeXacdtT0-jgP_LAV5O",
    icon: "directions_car",
  },
  {
    title: "Emergency Recovery",
    desc: "Critical response service available 24/7 for urgent and high-risk situations.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGVLkGCcceNsz72dRWtwRTrONJv2Z_KZjnUcd733Y1fQOZrxsAuq7aF8juTd7x17RT8bivjt4ge88z-kXx5JorIuIfNHJyQGf1q_RnAqCotRHdgCTBcM7SnozLMfaphfqKY_bsjV4uPEc2rMdnDvm5cNrFMFLBqnt_C2wmMGmN5E8i67IgN-gxm1gMmVqho8X-6cK8lRCtXJj1vccXaDSTwmR6Cj0t8DtYSLwkRpEcklipHG2DrycMenIVZRS8aBwyb7EGOrwVmhIJ",
    icon: "emergency_home",
  },
];

const FEATURES = [
  { icon: "schedule", title: "24/7 Availability", desc: "Awake and ready to assist you any time, day or night." },
  { icon: "speed", title: "Fast Response Times", desc: "Our dispatch system sends the nearest unit to reach you fast." },
  { icon: "groups", title: "Experienced Team", desc: "Highly trained technicians with years of logistical expertise." },
  { icon: "payments", title: "Affordable Pricing", desc: "Transparent, competitive rates with no hidden surprises." },
  { icon: "verified", title: "Reliable Service", desc: "Dependable recovery you can trust in any weather or situation." },
  { icon: "thumb_up", title: "98% Satisfaction", desc: "Our customers consistently recommend our services to others." },
];

export default function Home() {
  return (
    <main className="bg-surface-muted">
      <Navbar />

      {/* ---------- HERO ---------- */}
      <header className="relative pt-20 md:pt-24 min-h-[88vh] flex items-center overflow-hidden">
<div className="absolute inset-0 -z-10">
  <img
    src="./hero.webp"
    alt="Professional recovery truck assisting a vehicle in London"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/40" />
</div>

        <div className="container-page py-16 md:py-24 w-full">
          <div className="max-w-3xl text-white animate-fadeIn">
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent-light px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Available 24/7 across London
            </span>
            <h1 className="mt-6 text-white">
              Fast &amp; Reliable Vehicle Recovery Across&nbsp;London
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              24/7 vehicle recovery, breakdown assistance, roadside support, and
              vehicle transportation. Professional help, exactly when you need it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="tel:+447865459551" className="btn btn-accent urgent-pulse text-base">
                <span className="material-symbols-outlined">call</span>
                Call +44 7865 459551
              </a>
              <a href="/contact" className="btn btn-ghost-white text-base">
                <span className="material-symbols-outlined">request_quote</span>
                Get a Free Quote
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { label: "Avg. response", value: "45 min" },
                { label: "Recovered", value: "15k+" },
                { label: "Rating", value: "4.9★" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-2xl md:text-3xl text-accent-light">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ---------- SERVICES ---------- */}
      <section id="services" className="section bg-surface-muted">
        <div className="container-page">
          <div className="section-head">
            <span className="eyebrow"><span className="w-8 h-px bg-accent-dark" /> What we do</span>
            <h2 className="mt-3">Our Professional Services</h2>
            <p>From emergency recovery to long-distance transport, every job is handled with care and precision.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <article key={s.title} className="card card-hover group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={s.title}
                    src={s.img}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white text-primary shadow-md">
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section id="why-choose-us" className="section bg-primary text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:24px_24px]"
        />
        <div className="container-page relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="eyebrow text-accent-light">
                <span className="w-8 h-px bg-accent-light" /> Why choose us
              </span>
              <h2 className="mt-3 text-white">Recovery service Londoners actually trust.</h2>
              <p className="mt-4 text-white/75 text-lg max-w-xl">
                We deliver a premium, dependable service that prioritises your safety
                and satisfaction above all else.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {FEATURES.map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center">
                      <span className="material-symbols-outlined text-accent-light">{f.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white">{f.title}</h4>
                      <p className="mt-1 text-sm text-white/65 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                <img
                  alt="Reliable silver recovery vehicle on highway"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1a-GCtr6u4n4kurB7jCzEGzPsv1fFAr0pXZaBpUmlRxmj2O1dvZ5aKm__J3_OPS1WKGXJXgmFA7HuyCbuDvHlfE_wtkBKwKWWk53DUucOIeunC8XL5CW4_iPHN5YGctCbLqfbP0zbsOGAIgOrijyGZaw9C74xsFir8D79_GISSBUVerbP3BvI2NKW9I0W0zi3qx4inlvv6PPE1ZXoj35g3EfDbaQSI4Rv7XygkfyWFSAq0NZm87h9n2qpT8cweyh0_4ETb58TkpqR"
                />
              </div>
              <div className="hidden lg:block absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl bg-accent -z-0" />
              <div className="absolute -top-4 -right-4 hidden md:flex flex-col items-center justify-center w-28 h-28 rounded-2xl bg-white text-primary shadow-xl">
                <span className="font-display font-bold text-2xl leading-none">16+</span>
                <span className="text-[10px] uppercase tracking-widest mt-1 text-ink-muted">Years</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICE AREAS ---------- */}
      <section id="contact" className="section bg-surface-muted">
        <div className="container-page">
          <div className="rounded-3xl bg-white border border-border shadow-[0_30px_60px_-30px_rgba(15,23,42,0.18)] p-6 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow"><span className="w-8 h-px bg-accent-dark" /> Coverage</span>
              <h2 className="mt-3">Areas We Cover</h2>
              <p className="mt-4 text-lg">
                Based in <strong className="text-primary">SW16</strong>, we cover <strong className="text-primary">South London</strong>,{" "}
                <strong className="text-primary">Greater London</strong>, and surrounding areas. Our fleet is strategically positioned
                to guarantee quick response times in every borough.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {["SW16", "South London", "Greater London", "Croydon", "Wimbledon", "Surrounding Areas"].map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 bg-surface-alt text-primary px-3.5 py-1.5 rounded-full text-sm font-medium border border-border"
                  >
                    <span className="material-symbols-outlined text-accent-dark text-[16px]">location_on</span>
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px] shadow-md">
              <img
                alt="Map highlighting London service areas"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChlRSQVz0tMjuT1bxkVQAd1yuIRqLDSyFkpo7ULzkNxnHGPSc6lQvF5QQUewFsJBcDUlKDes0ddiMNx2juVXBtkvV5IjY3m6lrYnRzhoAajAzZ41Kt8V8uMEXsPhhEIvb4mpf8SSjAXf7tJSoRZ36P2Tb0GZim8i_wk7l9RVa_620lrzg3qaTptT8xFlyGWzC-Mwqkc8rxAIZ0rlXARHVxmmdR73nnlXE_kRRIc8GTN09zSa5_Fw5nSk68NjZZmL_lZZUjmFmUWjBI"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="section bg-gradient-to-br from-primary to-primary-light text-white text-center">
        <div className="container-page max-w-3xl">
          <span className="eyebrow text-accent-light"><span className="w-8 h-px bg-accent-light" /> Stranded right now?</span>
          <h2 className="mt-3 text-white">Need Immediate Recovery Assistance?</h2>
          <p className="mt-4 text-lg text-white/80">
            Our dispatch team is standing by. Don't wait on the roadside — call the professionals now.
          </p>
          <a
            href="tel:+447865459551"
            className="mt-8 inline-flex items-center gap-3 bg-accent text-primary px-8 py-5 rounded-2xl font-display font-bold text-xl md:text-2xl shadow-2xl hover:bg-accent-dark hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined text-3xl">phone_forwarded</span>
            +44 7865 459551
          </a>
          <p className="mt-6 text-xs uppercase tracking-widest text-white/60">
            Available 24 Hours a Day · 7 Days a Week
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
