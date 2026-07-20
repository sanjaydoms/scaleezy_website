import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { PLATFORM_MODULES, type PlatformModule } from '../moduleData';
import { Reveal } from '../motion';

export function Platform() {
  const containerRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  useEffect(() => {
    const updateRange = () => {
      if (railRef.current) {
        setScrollRange(Math.max(0, railRef.current.scrollWidth - window.innerWidth));
      }
    };
    updateRange();
    const timeout = window.setTimeout(updateRange, 100);
    window.addEventListener('resize', updateRange);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener('resize', updateRange);
    };
  }, []);

  if (reduceMotion) {
    return (
      <section id="platform" className="w-full overflow-hidden bg-cream py-24 text-forest md:py-36">
        <PlatformHeading title="Built around the places fashion work happens." />
        <div className="mx-auto mt-12 max-w-[1600px] px-6 md:mt-16 md:px-12">
          <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 pt-1 md:-mx-12 md:gap-5 md:px-12">
            {PLATFORM_MODULES.map((module, index) => (
              <ModuleCard key={module.id} module={module} index={index} compact />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="platform"
      className="relative h-[430vh] w-full bg-cream text-forest"
    >
      <div 
        className="sticky top-0 z-10 flex h-[100dvh] w-full flex-col justify-center overflow-hidden bg-cream"
        style={{ paddingTop: 'clamp(1rem, 3vh, 3rem)', paddingBottom: 'clamp(1rem, 3vh, 3rem)' }}
      >
        <PlatformHeading title="Six modules. One connected operating system." />
        <div 
          className="w-full"
          style={{ marginTop: 'clamp(1rem, 4vh, 4rem)' }}
        >
          <motion.div
            ref={railRef}
            style={{ x }}
            className="flex w-max gap-4 px-6 md:gap-5 md:px-12"
          >
            {PLATFORM_MODULES.map((module, index) => (
              <ModuleCard key={module.id} module={module} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type PlatformHeadingProps = {
  title: string;
};

function PlatformHeading({ title }: PlatformHeadingProps) {
  return (
    <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12">
      <Reveal>
        <p className="eyebrow text-lime-dark">Explore the platform</p>
        <h2 
          className="font-serif-display mt-2 sm:mt-5 max-w-3xl text-4xl sm:text-5xl md:text-7xl"
          style={{ fontSize: 'clamp(2rem, 5.5vh, 4.5rem)', lineHeight: '0.98' }}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}

type ModuleCardProps = {
  module: PlatformModule;
  index: number;
  compact?: boolean;
};

function ModuleCard({ module, index, compact = false }: ModuleCardProps) {
  const Icon = module.icon;
  const number = String(index + 1).padStart(2, '0');
  return (
    <Link
      to={`/platform/${module.id}`}
      className={`group relative flex h-[33rem] w-[84vw] flex-none overflow-hidden rounded-[1.35rem] bg-forest text-cream shadow-[0_20px_40px_rgba(15,61,46,0.12)] sm:w-[25rem] md:h-[35rem] md:w-[27rem] ${compact ? 'snap-center' : 'block'}`}
      style={{ height: 'clamp(25rem, 56vh, 35rem)' }}
    >
      <img
        src={module.image}
        alt={module.alt}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover ${compact ? '' : 'transition-transform duration-1000 ease-out group-hover:scale-105'}`}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-forest/75" />
      <div className="relative z-10 flex h-full w-full flex-col p-7 md:p-8">
        <span
          aria-hidden="true"
          className="text-5xl font-semibold leading-none tracking-[-0.07em] text-cream/25 md:text-[3.35rem]"
        >
          {number}
        </span>
        <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl border border-lime/10 bg-forest-deep/45 text-lime">
          <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <div className={`mt-5 ${compact ? '' : 'transition-transform duration-300 ease-out group-hover:-translate-y-1'}`}>
          <h3 className="text-[1.7rem] font-semibold leading-tight tracking-[-0.04em] md:text-3xl">
            {module.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-cream/75 md:text-[0.95rem]">
            {module.subtitle}
          </p>
        </div>
        <ul className="mt-auto space-y-2.5 border-t border-cream/15 pt-5 text-xs leading-relaxed text-cream/80 md:text-sm">
          {module.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
              {benefit}
            </li>
          ))}
        </ul>
        <div className="group/link mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-lime/65 bg-forest-deep/35 px-4 py-2 text-sm font-medium text-lime transition-colors group-hover:bg-lime group-hover:text-forest-deep">
          Explore now
          <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
