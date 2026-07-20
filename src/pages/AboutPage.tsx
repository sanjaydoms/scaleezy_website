import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Check, AlertCircle } from 'lucide-react';
import { AboutUs } from '../components/AboutUs';
import { Reveal } from '../components/motion';

export function AboutPage() {
  return (
    <main className="w-full bg-[#F5F2EC] text-forest">
      {/* Page Hero Header */}
      <section className="relative flex min-h-[60vh] w-full items-center bg-forest-deep px-6 py-28 text-cream md:px-12 md:py-36">
        <div className="mx-auto w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal className="max-w-3xl">
            <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-cream/20 px-3.5 py-1 text-[10px] text-lime bg-white/5 uppercase tracking-widest font-semibold">
              <Sparkles className="h-3 w-3" /> About Scaleezy
            </span>
            <h1 className="font-serif-display mt-6 text-5xl leading-[0.98] tracking-[-0.04em] md:text-8xl">
              Built for the <br />
              <span className="font-serif-display italic text-lime">makers</span> of fashion.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-cream/70 md:text-xl">
              We remove the administrative friction that stands between creators, store owners, and their customers.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="/#platform" 
                className="group inline-flex items-center gap-2.5 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-forest-deep transition-colors duration-300 hover:bg-lime-dark"
              >
                Explore Modules
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link 
                to="/" 
                className="inline-flex items-center justify-center rounded-full border border-cream/30 px-6 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-cream hover:text-forest"
              >
                Back to Home
              </Link>
            </div>
          </Reveal>
          
          {/* Visual aesthetic element */}
          <Reveal delay={0.2} className="relative hidden lg:block aspect-square max-w-[400px] ml-auto">
            <div className="absolute inset-0 rounded-full border border-lime/20 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-lime/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-forest rounded-full shadow-2xl border-4 border-white/5">
              <h3 className="font-serif-display text-4xl text-[#F5F2EC] font-semibold tracking-tight">
                scale<span className="text-lime">ezy</span>
              </h3>
              <p className="mt-2 text-[10px] font-bold text-[#F5F2EC]/60 tracking-[0.25em] leading-none uppercase">
                Est. 2026
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Render the core AboutUs component content */}
      <AboutUs />

      {/* Philosophy / Platform Comparison Section */}
      <section className="w-full bg-[#F5F2EC] py-24 text-forest md:py-36 border-t border-forest/10">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <span className="eyebrow text-lime-dark">Our Philosophy</span>
            <h2 className="font-serif-display mt-5 text-4xl leading-tight text-[#0F3D2E] md:text-6xl">
              Why a unified database changes everything.
            </h2>
            <p className="mt-4 text-base font-light text-forest/70">
              Disjointed systems introduce double-entries and delayed numbers. Scaleezy brings your whole operations into a single flow state.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* The Disjointed Way */}
            <Reveal className="bg-white/40 border border-red-900/10 p-8 md:p-10 rounded-[32px] space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold text-red-950">The Disjointed Way</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Spreadsheets and manual updates to sync offline and online stock.',
                  'Customer interactions are lost across separate emails and retail tills.',
                  'Variant management forces flat, complex sku-lists inside general ERPs.',
                  'Reporting requires export files and hours of manual compilation.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-forest/80 leading-relaxed">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* The Scaleezy Way */}
            <Reveal className="bg-forest text-cream p-8 md:p-10 rounded-[32px] space-y-6 relative overflow-hidden shadow-xl" delay={0.1}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/20 text-lime">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold text-cream">The Scaleezy Way</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'A single live stock count updated immediately across all physical and web storefronts.',
                  'One continuous timeline tracking customer purchases, preferences, and fittings.',
                  'Variant dimensions (size curves, fabric types, colorways) modeled natively.',
                  'Real-time automated reports generated from the primary database logs.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-cream/80 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
