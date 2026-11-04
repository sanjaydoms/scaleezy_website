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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 relative z-10 items-center">
        {/* Left Column: Adjusted Typographic Copy */}
        <div className="lg:col-span-6 flex flex-col justify-center max-w-xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] leading-[1.12] tracking-tight text-[var(--color-primary)]"
          >
            <span className="font-serif italic font-normal block mb-1 text-[var(--color-primary)]">
              Apparel commerce <br className="hidden sm:inline" />is broken,
            </span>
            <span className="font-sans font-bold tracking-tight text-[var(--color-primary)] block mt-1">
              Scaleezy fixes it.
            </span>
          </motion.h2>

          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-base sm:text-lg md:text-[19px] leading-relaxed text-[var(--color-charcoal)] font-normal">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700"
            >
              Most fashion sellers juggle separate tools for stock, customers, and finance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="font-bold text-[var(--color-primary)]">The result:</span>
              <span className="font-medium text-red-700 bg-red-50 border border-red-200/80 px-3 py-0.5 rounded-full text-sm sm:text-base inline-block">
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
              className="font-medium text-[var(--color-primary)] pt-1"
            >
              Scaleezy replaces that patchwork with one connected system.
            </motion.p>
          </div>
        </div>

        {/* Right Column: Shifted to the Right Side */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex items-center justify-center lg:justify-end"
          >
            <img 
              src="/scaleezy-ecosystem-cycle.png" 
              alt="Scaleezy - The Operating System for Apparel Commerce (Source, Manage, Sell, Fulfill, Analyze, Grow)" 
              loading="lazy" 
              decoding="async" 
              className="w-full max-w-[560px] lg:max-w-[620px] xl:max-w-[660px] h-auto object-contain select-none pointer-events-none drop-shadow-sm lg:translate-x-4 xl:translate-x-8" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
