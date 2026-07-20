import React from 'react';
import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';
import { Stories } from '../components/Stories';
import { Reveal } from '../components/motion';
import { triggerBookDemo } from '../components/BookDemoModal';

export function StoriesPage() {
  const METRICS = [
    { value: '30%', label: 'Less Dead Stock', desc: 'Merchandisers allocate size curves on real-time velocities rather than manual guesses.' },
    { value: '2.4x', label: 'Try-On Conversion', desc: 'Shoppers who try on garments virtually checkout with higher purchase confidence.' },
    { value: '24 hrs', label: 'Delivery Turnaround', desc: 'Central logistics prints, registers, and routes packages from closest boutique or warehouse.' }
  ];

  return (
    <main className="w-full bg-[#F5F2EC] text-forest">
      {/* Page Hero Header */}
      <section className="relative flex min-h-[50vh] w-full items-center bg-[#0F3D2E] px-6 py-28 text-cream md:px-12 md:py-36">
        <div className="mx-auto w-full max-w-[1600px]">
          <Reveal className="max-w-3xl">
            <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-cream/20 px-3.5 py-1 text-[10px] text-lime bg-white/5 uppercase tracking-widest font-semibold">
              <Sparkles className="h-3 w-3" /> Partner Stories
            </span>
            <h1 className="font-serif-display mt-6 text-5xl leading-[0.98] tracking-[-0.04em] md:text-8xl">
              Felt by teams, <br />
              <span className="font-serif-display italic text-lime">seen</span> in revenue.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-cream/70 md:text-xl">
              Discover how fashion founders and boutique operators use Scaleezy to automate administration, clientel customers, and drive conversions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stories Grid Component */}
      <Stories />

      {/* Metrics breakdown section */}
      <section className="w-full bg-[#EFE9DE] py-24 border-t border-forest/5">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <Reveal className="text-center max-w-xl mx-auto mb-16">
            <span className="eyebrow text-lime-dark">Performance Metrics</span>
            <h2 className="font-serif-display mt-4 text-4xl leading-tight text-[#0F3D2E] md:text-6xl">
              Measurable improvements.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {METRICS.map((met, idx) => (
              <Reveal key={met.label} delay={idx * 0.08} className="bg-white/70 border border-forest/5 p-8 rounded-3xl text-center space-y-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime/10 text-lime-dark mx-auto">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <div className="font-serif-display text-4xl md:text-5xl font-bold text-[#0F3D2E]">
                  {met.value}
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-forest/80">
                  {met.label}
                </h4>
                <p className="text-xs text-forest/65 font-light leading-relaxed">
                  {met.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="w-full bg-forest text-cream py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <Reveal>
            <h3 className="font-serif-display text-3xl md:text-5xl leading-tight">Begin your success timeline</h3>
            <p className="mt-4 text-sm text-cream/70 font-light leading-relaxed">
              We help boutique apparel retailers transition away from slow-moving traditional systems. Let's show you how.
            </p>
            <button
              onClick={triggerBookDemo}
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-forest-deep transition-all duration-300 hover:bg-lime-dark"
            >
              Request Custom Demo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
