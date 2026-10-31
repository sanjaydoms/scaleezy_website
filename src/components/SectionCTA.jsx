import React from 'react';
import { BrandPatternAtelier, BrandWatermark } from './BrandPattern';
import BookingFormCard from './BookingFormCard';

export default function SectionCTA() {
  return (
    <section id="book-demo" className="relative py-16 sm:py-24 md:py-32 bg-[var(--color-warm-white)] overflow-hidden">
      {/* Scaleezy Atelier Sewing & Tailoring Background Pattern */}
      <BrandPatternAtelier opacity={0.16} size={360} />
      <BrandWatermark className="-left-40 -bottom-40 text-[var(--color-primary)]" opacity={0.02} size={850} />
      <BrandWatermark className="-right-40 -top-40 text-[var(--color-primary)] rotate-180" opacity={0.015} size={700} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[var(--color-primary)] mb-4 sm:mb-6 text-balance">
          <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1">
            Ready to transform?
          </span>
          <span className="font-sans font-bold tracking-tight block">
            See Scaleezy in action.
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Scaleezy is the operating system built specifically for boutiques, fashion retailers, and apparel brands.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <BookingFormCard />
        </div>
      </div>
    </section>
  );
}
