import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { PLATFORM_MODULES } from '../components/moduleData';
import { Reveal } from '../components/motion';
import { triggerBookDemo } from '../components/BookDemoModal';

export function PlatformPage() {
  return (
    <main className="w-full bg-[#F5F2EC] text-forest">
      {/* Page Hero Header */}
      <section className="relative flex min-h-[50vh] w-full items-center bg-[#0F3D2E] px-6 py-28 text-cream md:px-12 md:py-36">
        <div className="mx-auto w-full max-w-[1600px]">
          <Reveal className="max-w-3xl">
            <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-cream/20 px-3.5 py-1 text-[10px] text-lime bg-white/5 uppercase tracking-widest font-semibold">
              <Sparkles className="h-3 w-3" /> Core Infrastructure
            </span>
            <h1 className="font-serif-display mt-6 text-5xl leading-[0.98] tracking-[-0.04em] md:text-8xl">
              The connected <br />
              <span className="font-serif-display italic text-lime">workspace</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-cream/70 md:text-xl">
              Replacing software bloat with a unified data architecture. Learn about the individual workspaces that handle your fashion business logic natively.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="w-full bg-[#F5F2EC] py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <Reveal className="max-w-2xl mb-16">
            <span className="eyebrow text-lime-dark">Workspaces</span>
            <h2 className="font-serif-display mt-4 text-4xl leading-tight text-[#0F3D2E] md:text-5xl">
              Deeply functional modules built for apparel teams.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PLATFORM_MODULES.map((module, idx) => {
              const Icon = module.icon;
              return (
                <Reveal 
                  key={module.id} 
                  delay={idx * 0.05}
                  className="flex flex-col h-full bg-white/80 border border-forest/5 p-6 md:p-8 rounded-[32px] shadow-[0_8px_24px_rgba(15,61,46,0.01)] hover:shadow-[0_12px_32px_rgba(15,61,46,0.04)] hover:border-lime-dark/25 transition-all duration-300 group"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/10 text-forest mb-6">
                    <Icon className="h-5 w-5 text-[#0F3D2E]" />
                  </span>
                  
                  <h3 className="font-serif-display text-2xl font-semibold text-forest leading-snug group-hover:text-lime-dark transition-colors duration-300">
                    {module.name}
                  </h3>
                  
                  <p className="mt-1.5 text-xs text-lime-dark font-semibold tracking-wide uppercase">
                    {module.eyebrow}
                  </p>
                  
                  <p className="mt-4 text-xs font-light text-forest/70 leading-relaxed flex-grow">
                    {module.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-forest/5 space-y-2">
                    {module.benefits.slice(0, 2).map((ben, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-forest/80 font-medium">
                        <Check className="h-3.5 w-3.5 text-lime-dark flex-shrink-0" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={`/platform/${module.id}`}
                    className="group/btn mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-forest py-3.5 text-xs font-bold text-cream hover:bg-forest-deep transition-all duration-300"
                  >
                    Explore {module.name} Workspace
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="w-full bg-forest text-cream py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <Reveal>
            <h3 className="font-serif-display text-3xl md:text-5xl leading-tight">Ready to see them work together?</h3>
            <p className="mt-4 text-sm text-cream/70 font-light leading-relaxed">
              We help boutique apparel retailers transition away from slow-moving traditional systems. Let's show you how.
            </p>
            <button
              onClick={triggerBookDemo}
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-forest-deep transition-all duration-300 hover:bg-lime-dark"
            >
              Book My Demo Session
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
