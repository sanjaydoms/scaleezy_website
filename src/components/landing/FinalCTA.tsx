import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { triggerBookDemo } from '../BookDemoModal';
import { IMAGES } from '../assets';
import { EASE } from '../motion';

export function FinalCTA() {
  return (
    <section id="cta" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#121712]">
      <motion.img
        src={IMAGES.ctaClosing}
        alt="Fashion boutique closing for the day with warm dimmed lights"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: EASE }}
      />
      <div className="absolute inset-0 bg-[#121712]/65" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          className="eyebrow text-lime"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          A better way to operate
        </motion.p>
        <motion.h2
          className="font-serif-display mt-6 text-5xl leading-[0.98] text-cream md:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.15, ease: EASE, delay: 0.15 }}
        >
          Ready to Transform Your Apparel Business?
        </motion.h2>
        <motion.p
          className="mx-auto mt-7 max-w-2xl text-base font-light leading-relaxed text-cream/70 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
        >
          Join the next generation of apparel businesses streamlining
          operations, personalising shopping, and building stronger customer
          relationships.
        </motion.p>
        <motion.div
          className="mt-11 flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
        >
          <button
            onClick={triggerBookDemo}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-medium text-forest-deep transition-colors duration-300 hover:bg-lime-dark"
          >
            Book a Demo{' '}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={triggerBookDemo}
            className="inline-flex items-center justify-center rounded-full border border-cream/50 px-8 py-4 text-sm font-medium text-cream transition-colors duration-300 hover:bg-cream hover:text-forest"
          >
            Talk to Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
}
