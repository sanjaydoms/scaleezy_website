import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Industries } from '../components/Industries';
import { Reveal } from '../components/motion';
import { triggerBookDemo } from '../components/BookDemoModal';

export function IndustriesPage() {
  return (
    <main className="w-full bg-[#F5F2EC] text-forest">
      {/* Page Hero Header */}
      <section className="relative flex min-h-[50vh] w-full items-center bg-[#0F3D2E] px-6 py-28 text-cream md:px-12 md:py-36">
        <div className="mx-auto w-full max-w-[1600px]">
          <Reveal className="max-w-3xl">
            <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-cream/20 px-3.5 py-1 text-[10px] text-lime bg-white/5 uppercase tracking-widest font-semibold">
              <Sparkles className="h-3 w-3" /> Tailored Adaptability
            </span>
            <h1 className="font-serif-display mt-6 text-5xl leading-[0.98] tracking-[-0.04em] md:text-8xl">
              Solutions by <br />
              <span className="font-serif-display italic text-lime">business</span> type.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-cream/70 md:text-xl">
              Apparel businesses are structured differently. See how Scaleezy accommodates saree houses, bridal salons, multi-brand boutiques, and D2C labels natively.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industries Grid */}
      <Industries />

      {/* Section CTA */}
      <section className="w-full bg-[#F5F2EC] py-20 text-center border-t border-forest/10">
        <div className="mx-auto max-w-xl px-6">
          <Reveal>
            <h3 className="font-serif-display text-3xl md:text-5xl leading-tight text-[#0F3D2E]">Find your fit with Scaleezy</h3>
            <p className="mt-4 text-sm text-forest/70 font-light leading-relaxed">
              We help fashion houses shift from disjointed software grids into a single, cohesive operating workspace. Let's configure yours.
            </p>
            <button
              onClick={triggerBookDemo}
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-forest px-8 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:bg-forest-deep"
            >
              Configure For My Model
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
