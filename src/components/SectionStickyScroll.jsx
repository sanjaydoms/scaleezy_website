import React from 'react';
import { Sparkles } from 'lucide-react';
import { BrandPatternAtelier } from './BrandPattern';

// Exactly 3 Core Modules with Scaleezy Content & Images Preserved
const modularCards = [
  {
    id: 'sourcing',
    number: '01',
    title: 'Design & Sourcing',
    tagline: 'Supply Chain Matrix',
    description: 'Connect directly with verified fabric mills, manage custom tech packs, and accelerate collection launches by 40%.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
    imageAlt: 'Textiles, fabric swatches and garment design materials',
    link: '/modules'
  },
  {
    id: 'production',
    number: '02',
    title: 'Production Tracking',
    tagline: 'Shop Floor Telemetry',
    description: 'Ensure safety and line milestone precision. Prevent delays with real-time shop floor telemetry and live cutting queue alerts.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    imageAlt: 'Garment manufacturing atelier, sewing craftsmanship and machinery',
    link: '/modules'
  },
  {
    id: 'inventory',
    number: '03',
    title: 'Inventory & B2B',
    tagline: 'Omnichannel Commerce',
    description: 'Centralize multi-store stock, automate replenishment triggers, and run your wholesale B2B portal with zero dead stock.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80',
    imageAlt: 'Luxury apparel boutique showroom and warehouse inventory',
    link: '/modules'
  }
];

export default function SectionStickyScroll() {
  return (
    <section className="relative w-full pt-16 sm:pt-24 md:pt-32 bg-[var(--color-warm-white)] overflow-hidden">
      {/* Landing Page Tailoring Background Pattern at 20% Opacity */}
      <BrandPatternAtelier opacity={0.20} size={420} />
      
      {/* Header Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-4 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/5 border border-black/10">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary)]" />
          The Modular Core
        </div>
        
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight text-[var(--color-primary)] text-balance">
          <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1 text-[var(--color-primary)]">
            The Apparel OS,
          </span>
          <span className="font-sans font-bold tracking-tighter text-[var(--color-primary)] block">
            Totally different.
          </span>
        </h2>
        
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[var(--color-charcoal)]/85 max-w-2xl mx-auto leading-relaxed text-balance">
          Everything you need to feel in control of your supply chain, in one beautiful place.
        </p>
      </div>

      {/* Full-Width 3-Column Dark Split Panel Showcase (Reference Image Style) */}
      <div className="w-full bg-[#111312] border-y border-white/15">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {modularCards.map((card) => (
            <div
              key={card.id}
              className="group relative h-[460px] sm:h-[540px] lg:h-[620px] overflow-hidden select-none flex flex-col justify-between p-7 sm:p-10 lg:p-12"
            >
              {/* Full-Bleed Background Photography with Lighter Overlay */}
              <img
                src={card.image}
                alt={card.imageAlt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.72] group-hover:brightness-[0.88] group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Lighter Bottom Gradient for Crisp Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10 group-hover:from-black/70 group-hover:via-black/15 transition-colors duration-500 pointer-events-none" />

              {/* Top Row: Module Number & Tagline */}
              <div className="relative z-10 flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold tracking-widest text-[var(--color-accent)] uppercase">
                  {card.number}
                </span>
                <span className="text-white/30 font-mono text-xs">/</span>
                <span className="text-xs font-mono font-medium tracking-wider uppercase text-white/75 group-hover:text-white transition-colors">
                  {card.tagline}
                </span>
              </div>

              {/* Bottom-Left Editorial Content Block (Aligned Across All 3 Columns) */}
              <div className="relative z-10 mt-auto min-h-[120px] sm:min-h-[130px] flex flex-col justify-start">
                <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight leading-snug mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal max-w-md opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
