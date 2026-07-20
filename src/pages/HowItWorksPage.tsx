import React from 'react';
import { ArrowRight, Sparkles, FlowIcon } from 'lucide-react';
import { Journey } from '../components/Journey';
import { Reveal } from '../components/motion';
import { triggerBookDemo } from '../components/BookDemoModal';

export function HowItWorksPage() {
  return (
    <main className="w-full bg-[#F5F2EC] text-forest">
      {/* Page Hero Header */}
      <section className="relative flex min-h-[50vh] w-full items-center bg-[#0F3D2E] px-6 py-28 text-cream md:px-12 md:py-36">
        <div className="mx-auto w-full max-w-[1600px]">
          <Reveal className="max-w-3xl">
            <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-cream/20 px-3.5 py-1 text-[10px] text-lime bg-white/5 uppercase tracking-widest font-semibold">
              <Sparkles className="h-3 w-3" /> System Flow
            </span>
            <h1 className="font-serif-display mt-6 text-5xl leading-[0.98] tracking-[-0.04em] md:text-8xl">
              Connected <br />
              <span className="font-serif-display italic text-lime">operations</span> logic.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-cream/70 md:text-xl">
              From the initial purchase order to the final retention milestone, see how Scaleezy connects every single retail action under a single workspace.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Journey Timeline */}
      <Journey />

      {/* Section CTA */}
      <section className="w-full bg-forest text-cream py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <Reveal>
            <h3 className="font-serif-display text-3xl md:text-5xl leading-tight">Ready to see the flow in action?</h3>
            <p className="mt-4 text-sm text-cream/70 font-light leading-relaxed">
              Let us walk you through a live customization tailored specifically to your boutique store layout and stock requirements.
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
