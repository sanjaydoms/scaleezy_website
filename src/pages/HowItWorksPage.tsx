import React from 'react';
import { ArrowRight, Sparkles, Database, ShieldCheck, RefreshCw, Layers, ArrowDown } from 'lucide-react';
import { Journey } from '../components/Journey';
import { Reveal } from '../components/motion';
import { triggerBookDemo } from '../components/BookDemoModal';

export function HowItWorksPage() {
  const PHASES = [
    {
      number: '01',
      title: 'Supply & Catalog Setup',
      subtitle: 'From buy sheet to buy button.',
      description: 'The moment a purchase order is created, Scaleezy structures it natively into an apparel variant matrix. Size curves, color families, and fabric types are registered once, updating your stock ledger and generating online Shopify listings without duplicate data entry.',
      steps: ['Native Size & Color Matrixing', 'Single-Click E-commerce Publishing', 'Multi-Store Allocation Cues']
    },
    {
      number: '02',
      title: 'Discovery & Clienteling',
      subtitle: 'Timelines that know your shoppers.',
      description: 'As customers explore your collection, their preferences, fitting appointments, and virtual try-ons are saved to a unified CRM profile. Associates at boutique clienteling counters or online assistants see sizing profiles and style wishlists, allowing them to provide personalized styling.',
      steps: ['AI Virtual Try-On Studio', 'Connected Fitting Appointment Logs', 'Customer Purchase Preferences']
    },
    {
      number: '03',
      title: 'Transaction & Fulfilment',
      subtitle: 'Fulfilling orders as one business.',
      description: 'When checkout happens, Scaleezy routes the order to the closest boutique or warehouse holding the stock variant. Shipping labels are generated and printed on-site, stock counts update in real-time across all channels, and customer loyalty rewards trigger immediately.',
      steps: ['Multi-Location Order Routing', 'On-Site Shipping Label Generation', 'Real-Time Inventory Adjustment']
    }
  ];

  return (
    <main className="w-full bg-[#F5F2EC] text-forest">
      {/* Page Hero Header */}
      <section className="relative flex min-h-[60vh] w-full items-center bg-[#0F3D2E] px-6 py-28 text-cream md:px-12 md:py-36 overflow-hidden">
        {/* Background visual graphics */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-lime/5 rounded-full blur-2xl pointer-events-none" />

        <div className="mx-auto w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <Reveal className="lg:col-span-7 max-w-3xl">
            <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-cream/20 px-3.5 py-1 text-[10px] text-lime bg-white/5 uppercase tracking-widest font-semibold">
              <Sparkles className="h-3 w-3" /> System Architecture
            </span>
            <h1 className="font-serif-display mt-6 text-5xl leading-[0.98] tracking-[-0.04em] md:text-8xl">
              One shared <span className="font-serif-display italic text-lime">ledger</span>.<br />
              Zero handoffs.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-cream/70 md:text-xl">
              Scaleezy replaces traditional integrations with a single database ledger. Discover how procurement, catalogs, clienteling, and supply chain logistics operate in perfect alignment.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button 
                onClick={triggerBookDemo}
                className="group inline-flex items-center gap-2.5 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-forest-deep transition-colors duration-300 hover:bg-lime-dark"
              >
                Schedule Architecture Walkthrough
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>

          {/* Interactive Flow visual block */}
          <Reveal delay={0.2} className="lg:col-span-5 hidden lg:flex flex-col gap-4 max-w-md ml-auto bg-white/5 border border-white/10 p-8 rounded-[32px] backdrop-blur-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-lime flex items-center gap-2">
              <RefreshCw className="h-4 w-4 animate-spin-slow" /> The Continuous Cycle
            </h3>
            <div className="space-y-4 mt-2">
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                <Database className="h-5 w-5 text-lime" />
                <div>
                  <h4 className="text-xs font-bold text-cream">Master Data Model</h4>
                  <p className="text-[10px] text-cream/60 mt-0.5">Live stock updates immediately across channels.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                <Layers className="h-5 w-5 text-lime" />
                <div>
                  <h4 className="text-xs font-bold text-cream">Adaptive Logic</h4>
                  <p className="text-[10px] text-cream/60 mt-0.5">Variant curves automatically managed natively.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                <ShieldCheck className="h-5 w-5 text-lime" />
                <div>
                  <h4 className="text-xs font-bold text-cream">Direct Verification</h4>
                  <p className="text-[10px] text-cream/60 mt-0.5">No synchronization processes or sync lag.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Detailed Architectural Pillars Section */}
      <section className="w-full bg-[#EFE9DE] py-24 md:py-36 border-b border-forest/10">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="eyebrow text-lime-dark">Core Architecture</span>
            <h2 className="font-serif-display mt-5 text-4xl leading-tight text-[#0F3D2E] md:text-6xl">
              The Three Core Operational Phases
            </h2>
            <p className="mt-4 text-base font-light text-forest/70 leading-relaxed">
              Instead of passing datasets between different tools, Scaleezy processes every business transaction directly on a single master ledger.
            </p>
          </Reveal>

          {/* Core Phases Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PHASES.map((phase, idx) => (
              <Reveal 
                key={phase.title}
                delay={idx * 0.08}
                className="flex flex-col bg-white/80 border border-forest/5 p-8 rounded-[32px] shadow-[0_8px_24px_rgba(15,61,46,0.01)] hover:shadow-[0_12px_32px_rgba(15,61,46,0.04)] hover:border-lime-dark/20 transition-all duration-300 relative group"
              >
                <div className="absolute top-6 right-8 text-5xl font-serif-display font-bold text-forest/5 group-hover:text-lime/20 transition-colors duration-300">
                  {phase.number}
                </div>
                
                <h3 className="font-serif-display text-2xl font-semibold text-[#0F3D2E] leading-snug">
                  {phase.title}
                </h3>
                <p className="text-xs font-semibold text-lime-dark mt-1">
                  {phase.subtitle}
                </p>
                <p className="mt-4 text-xs font-light text-forest/75 leading-relaxed flex-grow">
                  {phase.description}
                </p>

                <div className="mt-8 pt-6 border-t border-forest/5 space-y-3">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-forest/40 block">Key Operations</span>
                  {phase.steps.map((st, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-forest/80 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime-dark flex-shrink-0" />
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chronological Journey Flow */}
      <div className="bg-[#F5F2EC] py-12">
        <Reveal className="text-center max-w-xl mx-auto pt-16">
          <span className="eyebrow text-lime-dark">Step-by-step pipeline</span>
          <h2 className="font-serif-display mt-4 text-4xl leading-tight text-[#0F3D2E] md:text-6xl">
            The Timeline of Connected Work
          </h2>
          <p className="mt-4 text-sm text-forest/70">
            Scroll through the detailed order of events as product logic translates smoothly into checkout sales and customer retention.
          </p>
          <div className="mt-6 flex justify-center">
            <ArrowDown className="h-5 w-5 text-lime-dark animate-bounce" />
          </div>
        </Reveal>
        
        {/* Render Journey timeline list */}
        <Journey />
      </div>

      {/* Final Section CTA */}
      <section className="w-full bg-[#EFE9DE] border-t border-forest/10 py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <Reveal>
            <h3 className="font-serif-display text-3xl md:text-5xl leading-tight text-[#0F3D2E]">See how it fits your business</h3>
            <p className="mt-4 text-sm text-forest/70 font-light leading-relaxed">
              We help boutique apparel brands move away from slow-moving traditional systems. Let's arrange a live setup walk-through.
            </p>
            <button
              onClick={triggerBookDemo}
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-forest px-8 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:bg-forest-deep"
            >
              Request Live Workspace Demo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
