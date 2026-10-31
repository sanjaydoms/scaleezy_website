import React from 'react';

const marqueeItems = [
  { text: "INTELLIGENT SOURCING", isItalic: false },
  { text: "Virtual Try-On 3D", isItalic: true },
  { text: "OMNICHANNEL POS & META", isItalic: false },
  { text: "Real-Time Inventory", isItalic: true },
  { text: "AUTOMATED TECH PACKS", isItalic: false },
  { text: "VIP Clienteling Dossiers", isItalic: true },
  { text: "APPAREL COMMERCE OS", isItalic: false },
  { text: "Zero-Lag Stock Engine", isItalic: true },
  { text: "SUPPLY CHAIN TELEMETRY", isItalic: false },
  { text: "AI Sizing & Fit Precision", isItalic: true }
];

const LuxuryStar = () => (
  <span className="inline-flex items-center justify-center mx-3 sm:mx-6 md:mx-10 select-none">
    <svg 
      width="14" 
      height="14" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="text-[var(--color-accent)] drop-shadow-[0_0_8px_rgba(184,212,50,0.6)] sm:w-4 sm:h-4"
    >
      <path d="M12 0L14 9.5L24 12L14 14.5L12 24L10 14.5L0 12L10 9.5L12 0Z" />
    </svg>
  </span>
);

export default function Marquee() {
  const content = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="w-full relative overflow-hidden bg-[var(--color-primary)] text-white py-4 sm:py-6 md:py-8 group border-y border-white/10 select-none shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.05)]">
      
      {/* Subtle Glowing Accent Borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent"></div>

      {/* Seamless Edge Vignette Fade Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 md:w-48 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/80 to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 md:w-48 bg-gradient-to-l from-[var(--color-primary)] via-[var(--color-primary)]/80 to-transparent z-10"></div>

      {/* Continuous Marquee Track */}
      <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] w-max items-center transform-gpu will-change-transform">
        {content.map((item, index) => (
          <div key={index} className="inline-flex items-center">
            {item.isItalic ? (
              <span className="font-serif italic font-normal text-xl sm:text-2xl md:text-3xl text-[var(--color-accent)] tracking-wide transition-colors duration-300 hover:text-white">
                {item.text}
              </span>
            ) : (
              <span className="font-sans font-bold text-[11px] sm:text-xs md:text-sm tracking-[0.2em] uppercase text-white/95 transition-colors duration-300 hover:text-[var(--color-accent)]">
                {item.text}
              </span>
            )}
            <LuxuryStar />
          </div>
        ))}
      </div>
    </section>
  );
}
