"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request sent successfully. A dispatcher will call you shortly.");
  };

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
            <span className="w-8 h-px bg-accent-light" /> Contact us
          </span>
          <h1 className="mt-4 text-white">Talk to Our Dispatch Team</h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed">
            Whether you need urgent recovery or want to plan a vehicle transport, our team is
            ready to help — 24 hours a day.
          </p>
        </div>
      </section>

      {/* ---------- EMERGENCY BANNER ---------- */}
      <section className="bg-accent">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-3xl urgent-pulse">emergency_home</span>
            <h2 className="text-primary text-base md:text-lg font-display font-bold">
              Need Immediate Assistance? Call Us 24/7
            </h2>
          </div>
          <a
            href="tel:+447865459551"
            className="inline-flex items-center gap-2 text-primary font-display font-bold text-xl md:text-2xl hover:underline decoration-2 underline-offset-4"
          >
            <span className="material-symbols-outlined">call</span>
            +44 7865 459551
          </a>
        </div>
      </section>

      {/* ---------- CONTACT BODY ---------- */}
      <section className="section">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Info column */}
          <aside className="lg:col-span-5 flex flex-col gap-6">
            <div className="card p-7 md:p-8">
              <span className="eyebrow"><span className="w-8 h-px bg-accent-dark" /> Reach us</span>
              <h2 className="mt-3 text-2xl md:text-3xl">Contact Information</h2>

              <ul className="mt-8 space-y-6">
                {[
                  { icon: "business", label: "Company", value: "Recovery Solution Ltd" },
                  { icon: "location_on", label: "Headquarters", value: "SW16, London, United Kingdom" },
                  { icon: "call", label: "24/7 Support Line", value: "+44 7865 459551", href: "tel:+447865459551" },
                  { icon: "mail", label: "Email", value: "info@recoverysolutionltd.co.uk", href: "mailto:info@recoverysolutionltd.co.uk" },
                ].map((row) => (
                  <li key={row.label} className="flex items-start gap-4">
                    <span className="shrink-0 w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-[22px]">{row.icon}</span>
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-widest font-semibold text-ink-soft">{row.label}</p>
                      {row.href ? (
                        <a href={row.href} className="text-primary font-semibold hover:text-accent-dark transition-colors break-all">
                          {row.value}
                        </a>
                      ) : (
                        <p className="text-primary font-semibold">{row.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md h-72 md:h-80 relative">
              <img
                className="w-full h-full object-cover"
                alt="Map indicating service coverage in South London"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChlRSQVz0tMjuT1bxkVQAd1yuIRqLDSyFkpo7ULzkNxnHGPSc6lQvF5QQUewFsJBcDUlKDes0ddiMNx2juVXBtkvV5IjY3m6lrYnRzhoAajAzZ41Kt8V8uMEXsPhhEIvb4mpf8SSjAXf7tJSoRZ36P2Tb0GZim8i_wk7l9RVa_620lrzg3qaTptT8xFlyGWzC-Mwqkc8rxAIZ0rlXARHVxmmdR73nnlXE_kRRIc8GTN09zSa5_Fw5nSk68NjZZmL_lZZUjmFmUWjBI"
              />
              <div className="absolute inset-0 scrim-bottom-soft pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-accent-light">place</span>
                <span className="font-semibold">Serving SW16 &amp; Greater London</span>
              </div>
            </div>
          </aside>

          {/* Form column */}
          <div className="lg:col-span-7">
            <div className="card p-7 md:p-9">
              <span className="eyebrow"><span className="w-8 h-px bg-accent-dark" /> Request recovery</span>
              <h2 className="mt-3 text-2xl md:text-3xl">Tell us what you need</h2>
              <p className="mt-2">Fill in the details below and our dispatch team will contact you shortly.</p>

              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="field-label">Full Name</label>
                  <input className="field" placeholder="John Doe" required type="text" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="field-label">Phone Number</label>
                  <input className="field" placeholder="+44 ..." required type="tel" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="field-label">Email Address</label>
                  <input className="field" placeholder="email@example.com" required type="email" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="field-label">Vehicle Type</label>
                  <select className="field" defaultValue="">
                    <option value="" disabled>Select your vehicle</option>
                    <option>Hatchback / Sedan</option>
                    <option>SUV / 4x4</option>
                    <option>Van / Light Commercial</option>
                    <option>Motorcycle</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="field-label">Recovery Location</label>
                  <div className="relative">
                    <input
                      className="field pr-12"
                      placeholder="Current street or postcode"
                      required
                      type="text"
                    />
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft">
                      my_location
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="field-label">Destination</label>
                  <input className="field" placeholder="Drop-off address" required type="text" />
                </div>
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="field-label">Message / Issue Details</label>
                  <textarea
                    className="field"
                    placeholder="Describe the problem (e.g., flat tire, engine failure, accident)"
                    rows={5}
                  />
                </div>
                <div className="md:col-span-2 pt-2">
                  <button type="submit" className="btn btn-accent w-full text-base">
                    <span className="material-symbols-outlined">send</span>
                    Submit Recovery Request
                  </button>
                  <p className="mt-3 text-xs text-ink-soft text-center">
                    By submitting, you agree to be contacted by our dispatch team about your request.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
