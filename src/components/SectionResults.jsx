import React from 'react';
import { motion } from 'framer-motion';
import { BrandPatternMonogram, BrandWatermark } from './BrandPattern';

export default function SectionResults() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[var(--color-primary)] text-white overflow-hidden relative">
      {/* Scaleezy Brand Pattern Background */}
      <BrandPatternMonogram opacity={0.04} color="var(--color-accent)" size={72} />
      <BrandWatermark className="-right-32 -bottom-32 text-white" opacity={0.02} size={750} />
      <BrandWatermark className="-left-32 -top-32 text-[var(--color-accent)]" opacity={0.02} size={600} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[var(--color-accent)] uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block mb-4">
            Proven Performance
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white max-w-3xl mx-auto">
            <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1 text-[var(--color-accent)]">
              Measurable outcomes,
            </span>
            <span className="font-sans font-bold tracking-tight block">
              proven by data.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-16 text-center md:text-left border-b border-white/20 pb-10 sm:pb-14 md:pb-16 mb-10 sm:mb-14 md:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-accent)] mb-2 sm:mb-3">30%</div>
            <div className="text-sm sm:text-base md:text-lg font-medium tracking-normal text-white/95">Reduce dead stock</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-accent)] mb-2 sm:mb-3">40%</div>
            <div className="text-sm sm:text-base md:text-lg font-medium tracking-normal text-white/95">Improve repeat purchases</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-accent)] mb-2 sm:mb-3">50%</div>
            <div className="text-sm sm:text-base md:text-lg font-medium tracking-normal text-white/95">Cut manual operations</div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-center max-w-4xl mx-auto leading-relaxed text-balance text-white/95"
        >
          Lift conversion with virtual try-on, automated stock reorders, and smart omnichannel clienteling.
        </motion.div>
      </div>
    </section>
  );
}
