import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, PlayIcon } from 'lucide-react';
import { triggerBookDemo } from './BookDemoModal';
import { IMAGES } from './assets';
import { EASE } from './motion';
export function Hero() {
  return <section id="top" className="relative flex min-h-screen w-full items-end overflow-hidden bg-forest-deep">
      <motion.img src={IMAGES.hero} alt="Interior of a premium fashion boutique at golden hour with a customer browsing garments" className="absolute inset-0 h-full w-full object-cover" initial={{
      scale: 1.12
    }} animate={{
      scale: 1
    }} transition={{
      duration: 2.2,
      ease: EASE
    }} />
      <div className="absolute inset-0 bg-forest-deep/65" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 pt-40 md:px-12 md:pb-28">
        <motion.p className="eyebrow text-lime" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.9,
        ease: EASE,
        delay: 0.3
      }}>
          Scaleezy · Apparel commerce
        </motion.p>
        <motion.h1 className="font-serif-display mt-6 max-w-5xl text-[3.25rem] font-medium leading-[0.94] text-cream sm:text-6xl md:text-8xl lg:text-[6.75rem]" initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1.2,
        ease: EASE,
        delay: 0.45
      }}>
          The Operating System for Apparel Commerce
        </motion.h1>
        <motion.p className="mt-7 max-w-2xl text-base font-light leading-relaxed text-cream/75 md:text-lg" initial={{
        opacity: 0,
        y: 24
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        ease: EASE,
        delay: 0.65
      }}>
          Scaleezy unifies inventory, CRM, virtual try-on, marketing, analytics,
          finance, and logistics in one connected platform built exclusively for
          fashion businesses.
        </motion.p>
        <motion.div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        ease: EASE,
        delay: 0.85
      }}>
          <button onClick={triggerBookDemo} className="group inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3.5 text-sm font-medium tracking-wide text-forest-deep transition-colors duration-500 hover:bg-lime-dark">
            Book Demo
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </button>
          <a href="#platform" className="group inline-flex items-center gap-2 border-b border-cream/45 pb-1.5 text-sm tracking-wide text-cream transition-colors duration-300 hover:border-lime hover:text-lime">
            <PlayIcon className="h-3.5 w-3.5 fill-current" />
            Watch Product Tour
          </a>
        </motion.div>
      </div>
    </section>;
}