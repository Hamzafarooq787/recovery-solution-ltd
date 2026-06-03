"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-[72px] min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Professional recovery truck assisting a vehicle in London"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGVLkGCcceNsz72dRWtwRTrONJv2Z_KZjnUcd733Y1fQOZrxsAuq7aF8juTd7x17RT8bivjt4ge88z-kXx5JorIuIfNHJyQGf1q_RnAqCotRHdgCTBcM7SnozLMfaphfqKY_bsjV4uPEc2rMdnDvm5cNrFMFLBqnt_C2wmMGmN5E8i67IgN-gxm1gMmVqho8X-6cK8lRCtXJj1vccXaDSTwmR6Cj0t8DtYSLwkRpEcklipHG2DrycMenIVZRS8aBwyb7EGOrwVmhIJ"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container/90 to-primary-container/40"></div>
        </div>
        <div className="relative z-10 max-w-[--spacing-container-max] mx-auto px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] w-full">
          <div className="max-w-2xl text-on-primary">
            <h1 className="font-[--font-family-headline-lg-mobile] md:font-[--font-family-headline-lg] text-[--font-size-headline-lg-mobile] md:text-[--font-size-headline-lg] mb-[--spacing-stack-sm] text-white">
              Fast & Reliable Vehicle Recovery Services Across London
            </h1>
            <p className="font-[--font-family-body-lg] text-[--font-size-body-lg] text-white/80 mb-[--spacing-stack-lg] leading-relaxed">
              24/7 Vehicle Recovery, Breakdown Assistance, Roadside Support, and
              Vehicle Transportation Services. Professional support whenever you
              need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-[--spacing-gutter]">
              <a
                href="tel:+447865459551"
                className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-[--font-family-button] text-[--font-size-button] shadow-lg urgent-pulse hover:bg-secondary transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                Call Now
              </a>
              <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-xl font-[--font-family-button] text-[--font-size-button] hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">request_quote</span>
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-[--spacing-stack-lg] px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[--spacing-container-max] mx-auto" id="services">
        <div className="text-center mb-[--spacing-stack-lg]">
          <h2 className="font-[--font-family-headline-md] text-[--font-size-headline-md] text-primary mb-[--spacing-stack-sm]">
            Our Professional Services
          </h2>
          <div className="h-1 w-20 bg-secondary-container mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[--spacing-gutter]">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden soft-elevated group hover:-translate-y-1 transition-transform border border-outline-variant/30">
            <div className="h-48 w-full overflow-hidden">
              <img alt="Vehicle Recovery" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLuzbr63wOpnvgvN_j3C8BChL15_49bRE8yC6I1wJCaTopvlUWaAbO6Khub4gzEO2socZ9gg13ZD3nEsq0z3GmCAkgKcm4kdZdHF7Ogt_JspSkbPKQrcN0MmrFm8OcCiD7-mhepqg8XT99gL9A9ZXYOaSlNwcajHF0fDtgB3TwxUsv6l4LSbmWuVU-wdu3-4jsoR4X7F7yOt53jZn0JcOkpZLoVKYrADNWhmemaMROncs2PSt-IukC8FN6O-" />
            </div>
            <div className="p-6">
              <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] mb-[--spacing-stack-sm]">Vehicle Recovery</h3>
              <p className="text-on-surface-variant leading-relaxed">Professional towing and recovery for all vehicle types across the London area.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden soft-elevated group hover:-translate-y-1 transition-transform border border-outline-variant/30">
            <div className="h-48 w-full overflow-hidden">
              <img alt="Breakdown Assistance" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLvpBCBUsAPBwYvRgTqjER2CfMw2fS_5SuranS0Rc4igHVElBGls1XsirLhW8FBKLWeUP9kwbC4Fkt_ntG0sexS4JXxexaG2HoUWXzXbqfIfxbXVviDw6Fzh4zfPsv2LhYahBKJiYP-bPE9Qq1-fCsyHWo9Wwau1HhlV_AmgzSPU3fnq-_AIiHuB9nDwScJ8BGbvlGE9IcMo2yRI_4B_KZ-O2vOXAVvh-h_8S0ekHV8Piv4Nt6j3naauT-w" />
            </div>
            <div className="p-6">
              <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] mb-[--spacing-stack-sm]">Breakdown Assistance</h3>
              <p className="text-on-surface-variant leading-relaxed">Rapid response team to diagnose and resolve mechanical issues on the spot.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden soft-elevated group hover:-translate-y-1 transition-transform border border-outline-variant/30">
            <div className="h-48 w-full overflow-hidden">
              <img alt="Roadside Assistance" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLuEdhvN38qGxmeg053B-bz8Nc41d48y9mLUr1PkRvWX_Ts6CF2WVsJlYTxJyXcjLjP4O70HgolKClqJ5GPEyH2qmFnr9uleWc8ZNOnap4yDxh_6sue5JZGh17kzeQ1xtuoH-TkPXpmruc0ruEYQ43ccj2bdFNFWLSS5DG8VegtRc7SD8g3vVps-SPk1PcGvynrT5jeqrncFHa6bbgYGdQiSo_XiRvYNNGutLMEDb8VU-CGQGQGoOLUdfgj9" />
            </div>
            <div className="p-6">
              <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] mb-[--spacing-stack-sm]">Roadside Assistance</h3>
              <p className="text-on-surface-variant leading-relaxed">Minor repairs, battery jumpstarts, and tire changes to get you back on the road.</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden soft-elevated group hover:-translate-y-1 transition-transform border border-outline-variant/30">
            <div className="h-48 w-full overflow-hidden">
              <img alt="Accident Recovery" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLuMXRJwB9RFd2_Hl9EMF4pas1x8XKthkmWtanpoABbkRn9CwNxqDYvLA8-XvNs2TGPTlHqEZLRDlthzmPZ3DlmLEBegmsuKLf0ybTsF6Ts74cKdlcQBnNbYkzutQ1CkWUsl6X-we-DdCn_-K_RqaOkloB0gk0mj8EeqvxTeKhTpV-AJ9lTxTTEEJNmFaTzinDWywMS0ozhnizRzzUn7ax_3fxanOWwyPbWv0pBNnV9sI2quTlMGq8oU6JK7" />
            </div>
            <div className="p-6">
              <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] mb-[--spacing-stack-sm]">Accident Recovery</h3>
              <p className="text-on-surface-variant leading-relaxed">Compassionate and efficient vehicle removal from accident scenes with care.</p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden soft-elevated group hover:-translate-y-1 transition-transform border border-outline-variant/30">
            <div className="h-48 w-full overflow-hidden">
              <img alt="Car Transportation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLssqNQ2WEO1v69vycJLCCfOEQwdq7Ec0-qgQFWPEeSWYtYKKVbM2ccarwFiizJFVfCviT3yDAfADV98v6iYbzkIz10n0RaipOLLlOs2mkhy3IsJOhSNz7GQi3IkokUzOVR_yhajfy1mRXulxPuOV4vRmHUMFAVpXGIStCRWZfZJ_SSxh76VaOJE020qFV7rVtTDPSND67X8W_SgOdokLZNsxaqfKSrjPTQT8vJMeMeXacdtT0-jgP_LAV5O" />
            </div>
            <div className="p-6">
              <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] mb-[--spacing-stack-sm]">Car Transportation</h3>
              <p className="text-on-surface-variant leading-relaxed">Secure long-distance or local vehicle transport for individuals and fleets.</p>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden soft-elevated group hover:-translate-y-1 transition-transform border border-outline-variant/30">
            <div className="h-48 w-full overflow-hidden">
              <img alt="Emergency Recovery" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGVLkGCcceNsz72dRWtwRTrONJv2Z_KZjnUcd733Y1fQOZrxsAuq7aF8juTd7x17RT8bivjt4ge88z-kXx5JorIuIfNHJyQGf1q_RnAqCotRHdgCTBcM7SnozLMfaphfqKY_bsjV4uPEc2rMdnDvm5cNrFMFLBqnt_C2wmMGmN5E8i67IgN-gxm1gMmVqho8X-6cK8lRCtXJj1vccXaDSTwmR6Cj0t8DtYSLwkRpEcklipHG2DrycMenIVZRS8aBwyb7EGOrwVmhIJ" />
            </div>
            <div className="p-6">
              <h3 className="font-[--font-family-headline-sm] text-[--font-size-headline-sm] mb-[--spacing-stack-sm]">Emergency Recovery</h3>
              <p className="text-on-surface-variant leading-relaxed">Critical response service available 24/7 for urgent and high-risk situations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary-container text-on-primary py-[--spacing-stack-lg]" id="why-choose-us">
        <div className="px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[--spacing-container-max] mx-auto">
          <div className="grid lg:grid-cols-2 gap-[--spacing-stack-lg] items-center">
            <div>
              <h2 className="font-[--font-family-headline-md] text-[--font-size-headline-md] mb-[--spacing-stack-md]">
                Why Choose Recovery Solution Ltd?
              </h2>
              <p className="font-[--font-family-body-lg] text-[--font-size-body-lg] text-on-primary-container mb-[--spacing-stack-lg]">
                We provide a premium, dependable service that prioritizes your safety and satisfaction above all else.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[--spacing-gutter]">
                {[
                  { icon: "schedule", title: "24/7 Availability", desc: "We are always awake and ready to assist you any time, day or night." },
                  { icon: "speed", title: "Fast Response Times", desc: "Our dispatch system ensures the nearest unit reaches you rapidly." },
                  { icon: "groups", title: "Experienced Team", desc: "Highly trained technicians with years of logistical expertise." },
                  { icon: "payments", title: "Affordable Pricing", desc: "Transparent, competitive rates with no hidden surprises." },
                  { icon: "verified", title: "Reliable Service", desc: "Dependable recovery you can trust in any weather or situation." },
                  { icon: "thumb_up", title: "Customer Satisfaction", desc: "Over 98% of our customers recommend our services to others." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-secondary-container/20">
                      <span className="material-symbols-outlined text-secondary-container">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-[--font-family-label-md] text-[--font-size-label-md] mb-1">{item.title}</h4>
                      <p className="text-sm opacity-70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img alt="Reliable silver recovery vehicle on highway" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1a-GCtr6u4n4kurB7jCzEGzPsv1fFAr0pXZaBpUmlRxmj2O1dvZ5aKm__J3_OPS1WKGXJXgmFA7HuyCbuDvHlfE_wtkBKwKWWk53DUucOIeunC8XL5CW4_iPHN5YGctCbLqfbP0zbsOGAIgOrijyGZaw9C74xsFir8D79_GISSBUVerbP3BvI2NKW9I0W0zi3qx4inlvv6PPE1ZXoj35g3EfDbaQSI4Rv7XygkfyWFSAq0NZm87h9n2qpT8cweyh0_4ETb58TkpqR" />
              <div className="absolute inset-0 bg-secondary/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-[--spacing-stack-lg] px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[--spacing-container-max] mx-auto" id="contact">
        <div className="bg-surface-container rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-[--spacing-stack-lg] overflow-hidden relative">
          <div className="md:w-1/2 z-10">
            <h2 className="font-[--font-family-headline-md] text-[--font-size-headline-md] mb-[--spacing-stack-sm]">Areas We Cover</h2>
            <p className="font-[--font-family-body-lg] text-[--font-size-body-lg] text-on-surface-variant mb-[--spacing-stack-md] leading-relaxed">
              Based in <span className="font-bold text-primary">SW16</span>, we provide comprehensive coverage across <span className="font-bold text-primary">South London</span>, <span className="font-bold text-primary">Greater London</span>, and <span className="font-bold text-primary">Surrounding Areas</span>. Our fleet is strategically positioned to guarantee quick response times in every borough.
            </p>
            <div className="flex flex-wrap gap-4">
              {["SW16", "South London", "Greater London", "Surrounding Areas", "Croydon", "Wimbledon"].map(area => (
                <span key={area} className="bg-white px-4 py-2 rounded-full text-[--font-size-label-md] font-[--font-family-label-md] shadow-sm border border-outline-variant">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md">
            <img alt="Map highlighting London service areas" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChlRSQVz0tMjuT1bxkVQAd1yuIRqLDSyFkpo7ULzkNxnHGPSc6lQvF5QQUewFsJBcDUlKDes0ddiMNx2juVXBtkvV5IjY3m6lrYnRzhoAajAzZ41Kt8V8uMEXsPhhEIvb4mpf8SSjAXf7tJSoRZ36P2Tb0GZim8i_wk7l9RVa_620lrzg3qaTptT8xFlyGWzC-Mwqkc8rxAIZ0rlXARHVxmmdR73nnlXE_kRRIc8GTN09zSa5_Fw5nSk68NjZZmL_lZZUjmFmUWjBI" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-[--spacing-stack-lg] bg-surface-bright text-center px-[--spacing-margin-mobile]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[--font-family-headline-md] text-[--font-size-headline-md] mb-[--spacing-stack-sm]">Need Immediate Recovery Assistance?</h2>
          <p className="font-[--font-family-body-lg] text-[--font-size-body-lg] text-on-surface-variant mb-[--spacing-stack-lg]">Our dispatch team is standing by to help you. Don't wait on the roadside—call the professionals now.</p>
          <a href="tel:+447865459551" className="inline-flex items-center gap-4 bg-primary text-on-primary px-10 py-6 rounded-2xl font-[--font-family-headline-sm] text-[--font-size-headline-sm] shadow-2xl hover:scale-105 active:scale-95 transition-all group">
            <span className="material-symbols-outlined text-secondary-container text-4xl group-hover:rotate-12 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>phone_forwarded</span>
            +44 7865 459551
          </a>
          <p className="mt-[--spacing-stack-md] font-[--font-family-label-md] text-[--font-size-label-md] text-secondary uppercase tracking-widest">Available 24 Hours a Day / 7 Days a Week</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}