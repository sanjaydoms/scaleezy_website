import React from 'react';
import { motion } from 'framer-motion';
import { MotifDataAnnotation } from './BackgroundMotifs';
import { BrandPatternAtelier } from './BrandPattern';
import TypewriterText from './TypewriterText';

export default function Section2() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Scaleezy Atelier Sewing & Tailoring Pattern */}
      <BrandPatternAtelier opacity={0.13} size={360} vignette={true} />
      <MotifDataAnnotation className="top-6 right-6 md:top-10 md:right-10 text-[var(--color-primary)] hidden sm:block" label="PROFILE_MATCH" value="98.4%" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-20 relative z-10 items-center">
        <div className="flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[var(--color-primary)] text-balance"
          >
            <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1 text-[var(--color-primary)]">
              Apparel commerce is broken,
            </span>
            <span className="font-sans font-bold tracking-tighter text-[var(--color-primary)] block">
              Scaleezy fixes it.
            </span>
          </motion.h2>
          <div className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-5 text-base sm:text-lg md:text-xl leading-relaxed text-[var(--color-charcoal)] font-medium">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Most fashion sellers juggle separate tools for stock, customers and finance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-baseline gap-1.5"
            >
              <span className="font-bold text-[var(--color-primary)]">The result:</span>
              <span className="font-semibold text-red-800 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full text-sm sm:text-base inline-block">
                <TypewriterText
                  words={[
                    'Dead stock locked in backrooms.',
                    'Generic campaigns that get ignored.',
                    'Slow counter POS billing queues.',
                    'Low repeat customer retention.',
                    'Manual spreadsheets that drift out of sync.'
                  ]}
                  typingSpeed={60}
                  deletingSpeed={30}
                  pauseDuration={2300}
                  cursorClassName="text-red-600 font-bold"
                />
              </span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-bold text-[var(--color-primary)]"
            >
              Scaleezy replaces that patchwork with one connected system.
            </motion.p>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[560px] md:h-[720px] lg:h-[800px] w-full">
          {/* Editorial Collage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 right-0 w-3/4 h-[220px] sm:h-[300px] md:h-[380px] lg:h-[400px] bg-[var(--color-charcoal)] rounded-[24px] sm:rounded-[36px] md:rounded-[45px] overflow-hidden shadow-2xl border-2 sm:border-4 border-white transform-gpu will-change-transform"
          >
            <img src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&q=80" alt="Boutique Owner" loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 w-2/3 h-[190px] sm:h-[260px] md:h-[330px] lg:h-[350px] bg-[var(--color-primary)] rounded-[24px] sm:rounded-[36px] md:rounded-[45px] overflow-hidden z-10 shadow-2xl border-2 sm:border-4 border-white transform-gpu will-change-transform"
          >
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" alt="Customer Shopping" loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 right-2 sm:right-6 md:right-10 w-1/3 h-[140px] sm:h-[180px] md:h-[230px] lg:h-[250px] bg-[var(--color-accent)] rounded-[18px] sm:rounded-[24px] md:rounded-[30px] overflow-hidden z-20 shadow-xl border-2 sm:border-4 border-white transform-gpu will-change-transform"
          >
            <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&q=80" alt="Product Details" loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
