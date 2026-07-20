import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './motion';
type Module = {
  label: string;
  position: string;
};
const MODULES: Module[] = [{
  label: 'Inventory',
  position: 'md:col-start-2 md:row-start-1'
}, {
  label: 'CRM',
  position: 'md:col-start-3 md:row-start-1'
}, {
  label: 'Marketing',
  position: 'md:col-start-3 md:row-start-2'
}, {
  label: 'Analytics',
  position: 'md:col-start-3 md:row-start-3'
}, {
  label: 'Finance',
  position: 'md:col-start-2 md:row-start-3'
}, {
  label: 'Logistics',
  position: 'md:col-start-1 md:row-start-3'
}, {
  label: 'Virtual Try-On',
  position: 'md:col-start-1 md:row-start-2'
}];
export function ConnectionMap() {
  return <section className="w-full bg-cream py-24 text-forest md:py-40">
      <div className="mx-auto max-w-[1100px] px-6 text-center md:px-12">
        <Reveal>
          <p className="eyebrow text-lime-dark">Meet Scaleezy</p>
          <h2 className="font-serif-display mt-5 text-5xl leading-[0.98] md:text-7xl">
            One platform. Complete operations.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-forest/65">
            Every essential part of apparel commerce shares the same foundation,
            without adding another system to manage.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div aria-hidden="true" className="absolute inset-x-[16.67%] top-1/2 hidden h-px -translate-y-1/2 bg-forest/15 md:block" />
          <div aria-hidden="true" className="absolute left-1/2 inset-y-[16.67%] hidden w-px -translate-x-1/2 bg-forest/15 md:block" />
          <div aria-hidden="true" className="absolute left-[16.67%] top-[16.67%] hidden h-[66.66%] w-[66.66%] border border-forest/10 md:block" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 md:gap-6">
            {MODULES.slice(0, 3).map((module, index) => <ModuleLabel key={module.label} label={module.label} delay={index * 0.08} position={module.position} />)}

            <ScaleezyHub />

            {MODULES.slice(3).map((module, index) => <ModuleLabel key={module.label} label={module.label} delay={(index + 4) * 0.08} position={module.position} />)}
          </div>
        </div>
      </div>
    </section>;
}
type ModuleLabelProps = {
  label: string;
  delay: number;
  position: string;
};
function ModuleLabel({
  label,
  delay,
  position
}: ModuleLabelProps) {
  return <motion.div className={`relative z-10 flex min-h-24 items-center justify-center border border-forest/20 bg-cream px-4 text-sm tracking-wide text-forest ${position}`} initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    amount: 0.4
  }} transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
    delay
  }}>
      {label}
    </motion.div>;
}
function ScaleezyHub() {
  return <motion.div className="relative z-20 col-span-2 flex min-h-28 items-center justify-center border border-lime bg-forest px-6 text-cream shadow-[0_0_0_8px_rgba(245,242,236,0.92)] sm:col-span-1 md:col-start-2 md:row-start-2 md:min-h-32" initial={{
    opacity: 0,
    scale: 0.94
  }} whileInView={{
    opacity: 1,
    scale: 1
  }} viewport={{
    once: true,
    amount: 0.4
  }} transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
    delay: 0.24
  }}>
      <span className="font-serif-display text-4xl">
        scale<span className="text-lime">ezy</span>
      </span>
    </motion.div>;
}