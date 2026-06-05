"use client";

const PHONE = "+447865459551";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Recovery Solution Ltd, I need vehicle recovery assistance."
);

export default function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 flex flex-col gap-3 print:hidden">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${PHONE.replace("+", "")}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] hover:scale-110 active:scale-95 transition-transform"
        style={{ backgroundColor: "#25D366" }}
      >
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full animate-ping opacity-40" style={{ backgroundColor: "#25D366" }} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="relative w-7 h-7 sm:w-8 sm:h-8 fill-current"
          aria-hidden="true"
        >
          <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88s-.43-.14-.61.13-.7.88-.86 1.06-.32.2-.59.07a7.6 7.6 0 0 1-2.24-1.38 8.4 8.4 0 0 1-1.55-1.93c-.16-.27 0-.42.12-.55s.27-.32.4-.48a1.9 1.9 0 0 0 .27-.45.5.5 0 0 0 0-.48c-.07-.14-.61-1.47-.84-2s-.46-.45-.61-.46h-.52a1 1 0 0 0-.73.34 3 3 0 0 0-.95 2.25 5.27 5.27 0 0 0 1.11 2.81 12 12 0 0 0 4.66 4.11 16 16 0 0 0 1.56.58 3.78 3.78 0 0 0 1.72.11 2.82 2.82 0 0 0 1.85-1.31 2.31 2.31 0 0 0 .16-1.31c-.06-.11-.24-.17-.51-.31zM16.05 27a11.06 11.06 0 0 1-5.62-1.54l-.4-.24-4.18 1.1 1.12-4.08-.26-.42a11.06 11.06 0 1 1 9.34 5.18zm9.4-20.4a13.27 13.27 0 0 0-20.88 16L3 32l9.07-2.38a13.27 13.27 0 0 0 19.71-11.4 13.18 13.18 0 0 0-6.33-11.62z" />
        </svg>
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call */}
      <a
        href={`tel:${PHONE}`}
        aria-label="Call us"
        className="group relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent text-primary shadow-[0_10px_30px_-8px_rgba(245,158,11,0.6)] hover:bg-accent-dark hover:text-white hover:scale-110 active:scale-95 transition-all"
      >
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
        <span className="material-symbols-outlined relative text-[28px] sm:text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          call
        </span>
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
          +44 7865 459551
        </span>
      </a>
    </div>
  );
}
