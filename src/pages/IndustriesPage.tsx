import React from 'react';
import { Sparkles, ArrowRight, Check, X, Shield, RefreshCw, Smartphone } from 'lucide-react';
import { Industries } from '../components/Industries';
import { Reveal } from '../components/motion';
import { triggerBookDemo } from '../components/BookDemoModal';

export function IndustriesPage() {
  const MATRIX = [
    { feature: 'Variant Grid (Size/Color)', saree: true, bridal: true, ethnic: true, retail: true, d2c: true, wholesale: true },
    { feature: 'Alterations & Fitting History', saree: true, bridal: true, ethnic: true, retail: false, d2c: false, wholesale: false },
    { feature: 'AI Virtual Try-On Studio', saree: true, bridal: true, ethnic: true, retail: true, d2c: true, wholesale: false },
    { feature: 'Multi-Store Allocation', saree: false, bridal: false, ethnic: true, retail: true, d2c: true, wholesale: true },
    { feature: 'Wholesale Purchase Orders', saree: false, bridal: false, ethnic: false, retail: true, d2c: false, wholesale: true },
    { feature: 'Omnichannel Customer loyalty', saree: true, bridal: true, ethnic: true, retail: true, d2c: true, wholesale: false },
  ];

  const WORKFLOWS = [
    {
      icon: RefreshCw,
      title: 'The Fitting Alteration Loop',
      industry: 'Bridal & Couture Salons',
      desc: 'Track alteration notes, measurements, fitting appointments, and tailor handoffs inside a single customer profile, preventing styling mismatches.'
    },
    {
      icon: Shield,
      title: 'Variant Allocation Velocity',
      industry: 'Multi-store & Wholesalers',
      desc: 'Distribute stock based on variant sales velocity per store. Route fast-moving sizes to high-volume boutiques, and trigger auto-replenishment.'
    },
    {
      icon: Smartphone,
      title: 'Point-of-Sale Clienteling',
      industry: 'Boutiques & Ethnic Wear',
      desc: 'Equip sales associates with customer purchase records, color choices, and fitting notes during checkout, helping them build relationships.'
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

      {/* Main Industries Cards Grid */}
      <Industries />

      {/* Detailed Workflow Solutions Section */}
      <section className="w-full bg-[#EFE9DE] py-24 border-t border-b border-forest/10">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <Reveal className="text-center max-w-xl mx-auto mb-16">
            <span className="eyebrow text-lime-dark">Custom Workflows</span>
            <h2 className="font-serif-display mt-4 text-4xl leading-tight text-[#0F3D2E] md:text-5xl">
              Bending to your operational flow
            </h2>
            <p className="mt-3 text-sm text-forest/70 font-light leading-relaxed">
              We replace standard ERP generalities with workflows designed specifically for how clothing behaves.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WORKFLOWS.map((wf, idx) => {
              const Icon = wf.icon;
              return (
                <Reveal key={wf.title} delay={idx * 0.08} className="bg-white/80 border border-forest/5 p-8 rounded-[32px] shadow-[0_8px_24px_rgba(15,61,46,0.01)] space-y-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/10 text-forest">
                    <Icon className="h-5 w-5 text-[#0F3D2E]" />
                  </span>
                  <span className="text-[10px] font-bold text-lime-dark uppercase tracking-wider block">
                    {wf.industry}
                  </span>
                  <h3 className="font-serif-display text-xl font-bold text-[#0F3D2E]">
                    {wf.title}
                  </h3>
                  <p className="text-xs text-forest/70 font-light leading-relaxed">
                    {wf.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Alignment Matrix Section */}
      <section className="w-full bg-[#F5F2EC] py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <Reveal className="max-w-2xl mb-16">
            <span className="eyebrow text-lime-dark">Capability Alignment</span>
            <h2 className="font-serif-display mt-4 text-4xl leading-tight text-[#0F3D2E] md:text-5xl">
              Feature Matrix by Business Model
            </h2>
            <p className="mt-3 text-sm text-forest/70 font-light leading-relaxed">
              See which Scaleezy modules and tools are optimized for each particular fashion model.
            </p>
          </Reveal>

          {/* Matrix Table */}
          <Reveal className="overflow-x-auto rounded-[24px] border border-forest/10 bg-white/70 backdrop-blur-sm shadow-lg">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-forest text-cream border-b border-forest-deep uppercase font-semibold tracking-wider text-[10px]">
                  <th className="p-4 md:p-6">Capabilities</th>
                  <th className="p-4 text-center">Saree Store</th>
                  <th className="p-4 text-center">Bridal House</th>
                  <th className="p-4 text-center">Ethnic Label</th>
                  <th className="p-4 text-center">Retail Chain</th>
                  <th className="p-4 text-center">D2C Brand</th>
                  <th className="p-4 text-center">Wholesale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest/10">
                {MATRIX.map((row) => (
                  <tr key={row.feature} className="hover:bg-forest/5 transition-colors duration-200">
                    <td className="p-4 md:p-6 font-semibold text-forest">{row.feature}</td>
                    <td className="p-4 text-center">{row.saree ? <Check className="h-4 w-4 text-lime-dark mx-auto" /> : <X className="h-4 w-4 text-forest/20 mx-auto" />}</td>
                    <td className="p-4 text-center">{row.bridal ? <Check className="h-4 w-4 text-lime-dark mx-auto" /> : <X className="h-4 w-4 text-forest/20 mx-auto" />}</td>
                    <td className="p-4 text-center">{row.ethnic ? <Check className="h-4 w-4 text-lime-dark mx-auto" /> : <X className="h-4 w-4 text-forest/20 mx-auto" />}</td>
                    <td className="p-4 text-center">{row.retail ? <Check className="h-4 w-4 text-lime-dark mx-auto" /> : <X className="h-4 w-4 text-forest/20 mx-auto" />}</td>
                    <td className="p-4 text-center">{row.d2c ? <Check className="h-4 w-4 text-lime-dark mx-auto" /> : <X className="h-4 w-4 text-forest/20 mx-auto" />}</td>
                    <td className="p-4 text-center">{row.wholesale ? <Check className="h-4 w-4 text-lime-dark mx-auto" /> : <X className="h-4 w-4 text-forest/20 mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Section CTA */}
      <section className="w-full bg-[#EFE9DE] py-20 text-center border-t border-forest/10">
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
