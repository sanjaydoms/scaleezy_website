import React from 'react';
import { motion } from 'framer-motion';
import { BrandPatternAtelier, BrandWatermark } from './BrandPattern';
import TypewriterText from './TypewriterText';

const features = [
  {
    title: 'Hyper-personalisation',
    desc: 'Demographics + pincode + price preference + buying patterns + try-on behaviour + festival trends.'
  },
  {
    title: 'Virtual Try-On',
    desc: 'Build fit and sizing confidence while reducing physical trials.'
  },
  {
    title: 'AI Commerce Intelligence',
    desc: 'Fast movers + low stock + dead-stock risk + demand forecasting.'
  },
  {
    title: 'Unified Business Ecosystem',
    desc: 'CRM + finance + inventory + try-on + marketing + analytics + logistics.'
  }
];

export default function SectionWhy() {
  return (
    <section id="why" className="relative py-16 sm:py-24 md:py-36 bg-[var(--color-charcoal)] text-white overflow-hidden">
      {/* Scaleezy Atelier Sewing & Tailoring Background Pattern (Dark Mode) */}
      <BrandPatternAtelier mode="dark" opacity={0.07} size={380} />
      <BrandWatermark className="-right-32 -bottom-32 text-white" opacity={0.02} size={700} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-wrap items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium tracking-wide mb-6 sm:mb-8 shadow-xs max-w-full"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse shrink-0" />
          <span className="text-gray-200 font-normal">Real-Time Commerce Telemetry:</span>
          <span className="font-bold text-[var(--color-accent)]">
            <TypewriterText
              words={[
                'Sub-Second SKU Sync',
                'Zero-Drift Multi-Branch Stock',
                'AI Virtual Try-On Draping',
                'Predictive Festive Reordering',
                'Omnichannel Clienteling Signals'
              ]}
              typingSpeed={65}
              deletingSpeed={30}
              pauseDuration={2400}
              cursorClassName="text-[var(--color-accent)] font-bold"
            />
          </span>
        </motion.div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[var(--color-warm-white)] mb-10 sm:mb-14 md:mb-16 text-balance">
          <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1 text-[var(--color-accent)]">
            Built for modern retail,
          </span>
          <span className="font-sans font-bold tracking-tight block">
            Why Scaleezy is different.
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {features.map((feature, i) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="border-t border-white/25 pt-6 sm:pt-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[var(--color-accent)] tracking-tight leading-snug">{feature.title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-normal">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
