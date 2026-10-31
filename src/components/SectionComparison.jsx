import React from 'react';
import { BrandPatternWeave, BrandWatermark } from './BrandPattern';

export default function SectionComparison() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[var(--color-charcoal)] text-white overflow-hidden">
      {/* Scaleezy Brand Pattern Background */}
      <BrandPatternWeave opacity={0.035} color="var(--color-accent)" size={52} />
      <BrandWatermark className="-right-36 -bottom-36 text-white" opacity={0.015} size={700} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[var(--color-accent)] uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/10 inline-block mb-4">
            Ecosystem Comparison
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-[var(--color-warm-white)] leading-[1.08] tracking-tight text-balance">
            <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1 text-[var(--color-accent)]">
              Feature-by-feature,
            </span>
            <span className="font-sans font-bold tracking-tight block">
              Why Scaleezy stands apart.
            </span>
          </h2>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-white/80 mb-3 md:hidden font-medium">
          <span>← Swipe table horizontally to compare →</span>
        </div>

        <div tabIndex={0} role="region" aria-label="Feature comparison table" className="overflow-x-auto bg-black/30 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 md:p-8 border border-white/15 shadow-2xl">
          <table className="w-full min-w-[680px] text-left">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-4 sm:py-5 px-3 sm:px-4 text-sm sm:text-base md:text-lg font-semibold text-gray-200">Criteria</th>
                <th className="py-4 sm:py-5 px-3 sm:px-4 text-base sm:text-lg md:text-xl font-bold text-[var(--color-accent)]">Scaleezy</th>
                <th className="py-4 sm:py-5 px-3 sm:px-4 text-sm sm:text-base md:text-lg font-semibold text-gray-200">Shopify</th>
                <th className="py-4 sm:py-5 px-3 sm:px-4 text-sm sm:text-base md:text-lg font-semibold text-gray-200">Zoho / POS</th>
                <th className="py-4 sm:py-5 px-3 sm:px-4 text-sm sm:text-base md:text-lg font-semibold text-gray-200">Standalone CRM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm sm:text-base">
              <tr>
                <td className="py-4 sm:py-6 px-3 sm:px-4 font-semibold text-white">Apparel focus</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-[var(--color-accent)] font-bold">✓ Native</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">Generic</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">Generic</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">None</td>
              </tr>
              <tr>
                <td className="py-4 sm:py-6 px-3 sm:px-4 font-semibold text-white">Native try-on</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-[var(--color-accent)] font-bold">✓ Built-in</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">App Required</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">None</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">None</td>
              </tr>
              <tr>
                <td className="py-4 sm:py-6 px-3 sm:px-4 font-semibold text-white">AI inventory</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-[var(--color-accent)] font-bold">✓ Integrated</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">App Required</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">Manual</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">None</td>
              </tr>
              <tr>
                <td className="py-4 sm:py-6 px-3 sm:px-4 font-semibold text-white">Personalised marketing</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-[var(--color-accent)] font-bold">✓ Deep</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">Basic</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">None</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">Requires integration</td>
              </tr>
              <tr>
                <td className="py-4 sm:py-6 px-3 sm:px-4 font-semibold text-white">Unified finance</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-[var(--color-accent)] font-bold">✓ Native</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">External</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">Basic</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">None</td>
              </tr>
              <tr>
                <td className="py-4 sm:py-6 px-3 sm:px-4 font-semibold text-white">Zero-integration data</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-[var(--color-accent)] font-bold">✓ One Ecosystem</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">Patchwork</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">Silos</td>
                <td className="py-4 sm:py-6 px-3 sm:px-4 text-gray-300">Silos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
