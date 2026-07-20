import React from 'react';
import { Sparkles, ArrowRight, TrendingUp, BookOpen, Quote } from 'lucide-react';
import { Stories } from '../components/Stories';
import { Reveal } from '../components/motion';
import { triggerBookDemo } from '../components/BookDemoModal';
import { IMAGES } from '../components/assets';

export function StoriesPage() {
  const METRICS = [
    { value: '30%', label: 'Less Dead Stock', desc: 'Merchandisers allocate size curves on real-time velocities rather than manual guesses.' },
    { value: '2.4x', label: 'Try-On Conversion', desc: 'Shoppers who try on garments virtually checkout with higher purchase confidence.' },
    { value: '24 hrs', label: 'Delivery Turnaround', desc: 'Central logistics prints, registers, and routes packages from closest boutique or warehouse.' }
  ];

  const CASE_STUDIES = [
    {
      title: 'Aanya Weaves (Jaipur)',
      role: 'Saree Boutique & Brand',
      metric: '28% Dead Stock Reduction',
      challenge: 'Managing thousands of individual handloom saree variants across Jaipur and Mumbai stores led to persistent stock over-allocation and heavy end-of-season discounts.',
      solution: 'Implemented Scaleezy live variant matrices and automated store-to-store stock transfers. Merchandisers shifted sizes curves dynamically based on weekly colorway velocity logs.',
      image: IMAGES.storyCustomer,
      quote: 'For the first time, we can see the collection clearly and still serve customers personally.'
    },
    {
      title: 'Maison Léa (Mumbai)',
      role: 'Premium Bridal House',
      metric: '35% Repeat Customer Growth',
      challenge: 'Bridal fitting consultations and customer notes were lost across personal messaging threads and paper files, diluting the clienteling experience.',
      solution: 'Unified CRM timelines and fitting schedule tracking directly at the styling counter. Designers and consultants share access to sizing notes and previous purchases.',
      image: IMAGES.industryBridal,
      quote: 'Our brides feel remembered long after their first fitting appointment.'
    }
  ];

  return (
    <main className="w-full bg-[#F5F2EC] text-forest">
      {/* Page Hero Header */}
      <section className="relative flex min-h-[50vh] w-full items-center bg-[#0F3D2E] px-6 py-28 text-cream md:px-12 md:py-36 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto w-full max-w-[1600px] relative z-10">
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
      <section className="w-full bg-[#EFE9DE] py-24 border-t border-b border-forest/10">
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

      {/* Written Case Studies Sections */}
      <section className="w-full bg-[#F5F2EC] py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 space-y-20 md:space-y-32">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-lime-dark">Case Studies</span>
            <h2 className="font-serif-display mt-4 text-4xl leading-tight text-[#0F3D2E] md:text-5xl">
              Detailed Operational Case Studies
            </h2>
            <p className="mt-3 text-sm text-forest/70 font-light leading-relaxed">
              Explore how premium boutique retailers solved real, variant-level and CRM bottlenecks with Scaleezy.
            </p>
          </Reveal>

          {CASE_STUDIES.map((caseStudy, idx) => (
            <div key={caseStudy.title} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Section (left on alternate, right on alternate) */}
              <Reveal 
                delay={0.1}
                className={`lg:col-span-5 aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-forest/5 ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover" />
              </Reveal>

              {/* Text Section */}
              <Reveal 
                delay={0.2}
                className={`lg:col-span-7 space-y-6 ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <span className="px-3.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#0F3D2E] bg-lime/25 rounded-full inline-block">
                  {caseStudy.metric}
                </span>
                
                <h3 className="font-serif-display text-3xl md:text-4xl text-[#0F3D2E] font-semibold leading-tight">
                  {caseStudy.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-forest/40">
                  {caseStudy.role}
                </p>

                <div className="space-y-4 pt-2 border-t border-forest/10">
                  <div>
                    <h5 className="text-xs font-bold text-forest">The Challenge:</h5>
                    <p className="text-xs text-forest/75 font-light leading-relaxed mt-1">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-forest">The Implementation:</h5>
                    <p className="text-xs text-forest/75 font-light leading-relaxed mt-1">{caseStudy.solution}</p>
                  </div>
                </div>

                <div className="bg-white/60 border border-forest/5 p-5 rounded-2xl flex gap-3 items-start relative">
                  <Quote className="h-5 w-5 text-lime-dark flex-shrink-0 mt-1" />
                  <p className="text-sm italic text-forest/85">
                    "{caseStudy.quote}"
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
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
