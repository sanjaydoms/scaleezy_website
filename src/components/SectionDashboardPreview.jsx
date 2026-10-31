import React from 'react';
import { Zap } from 'lucide-react';
import { BrandPatternWeave, BrandWatermark } from './BrandPattern';

export default function SectionDashboardPreview() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[var(--color-warm-white)] overflow-hidden">
      {/* Scaleezy Brand Pattern Background */}
      <BrandPatternWeave opacity={0.045} color="var(--color-primary)" size={48} />
      <BrandWatermark className="left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[var(--color-primary)]" opacity={0.015} size={900} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center relative z-10">
        {/* Header Icon and Title */}
        <div className="mb-4 sm:mb-6 flex justify-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[var(--color-primary)]/8 border border-[var(--color-primary)]/15 flex items-center justify-center shadow-sm">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-primary)]" fill="currentColor" strokeWidth={1} />
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-[var(--color-primary)] mb-8 sm:mb-12 md:mb-16 max-w-4xl text-balance">
          <span className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mb-1">
            Every reason to power,
          </span>
          <span className="font-sans font-bold tracking-tight block">
            your business with Scaleezy.
          </span>
        </h2>

        {/* Multi-Device Mockup (Laptop, Tablet, Mobile) */}
        <div className="w-full max-w-5xl mx-auto flex justify-center mt-2 sm:mt-6">
          <img 
            src="/assets/dashboard_devices.png" 
            alt="Scaleezy Omnichannel Customer OS Across Laptop, Tablet, and Mobile" 
            width={1024}
            height={682}
            loading="lazy"
            decoding="async"
            className="w-full max-w-5xl h-auto object-contain drop-shadow-[0_25px_60px_rgba(10,47,29,0.12)] hover:scale-102 transition-transform duration-700 transform-gpu"
          />
        </div>
      </div>
    </section>
  );
}
