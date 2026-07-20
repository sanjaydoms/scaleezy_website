import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ShoppingBagIcon,
  SparklesIcon,
  TrendingUpIcon,
  UploadIcon,
} from 'lucide-react';
import { Reveal } from '../motion';

const BEFORE = '/d2bf79de-f99b-49d4-9ffe-1d6d871bc809.jpg';
const AFTER = '/ee56d119-f596-4bf8-8ec7-d30b01593ff3.jpg';

const STEPS = [
  { icon: UploadIcon, label: 'Customer uploads photo' },
  { icon: SparklesIcon, label: 'AI renders the garment' },
  { icon: TrendingUpIcon, label: 'Confidence increases' },
  { icon: ShoppingBagIcon, label: 'Purchase completed' },
];

export function TryOn() {
  const [rendered, setRendered] = useState(false);
  const [confidence, setConfidence] = useState(34);

  useEffect(() => {
    const t = setInterval(() => setRendered((v) => !v), 3800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setConfidence(rendered ? 34 : 91);
    const target = rendered ? 91 : 34;
    let raf: number;
    const start = performance.now();
    const from = rendered ? 34 : 91;
    const step = (now: number) => {
      const p = Math.min((now - start) / 900, 1);
      setConfidence(Math.round(from + (target - from) * p));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [rendered]);

  return (
    <section className="w-full bg-[#f1f7f2] py-24 text-forest md:py-36">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow text-lime-dark">Virtual Try-On</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif-display mt-5 max-w-lg text-5xl leading-[0.98] md:text-7xl">
              Let shoppers see it on themselves
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-gray-400">
              Upload a photo and AI renders any garment realistically — turning
              hesitation into confident purchases.
            </p>
          </Reveal>

          <div className="mt-8 space-y-3">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.label} delay={0.15 + i * 0.08}>
                  <div className="flex items-center gap-4 rounded-xl border border-emerald-950/10 bg-white px-4 py-3 shadow-sm">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">
                      <Icon className="h-4 w-4 text-emerald-700" />
                    </span>
                    <span className="text-sm font-medium text-[#304238]">{s.label}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.5}>
            <div className="mt-8 rounded-2xl border border-emerald-700/20 bg-emerald-50 p-6">
              <p className="text-sm text-[#4b5e53]">Purchase confidence with Try-On</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-display text-4xl font-bold text-emerald-400">+2.4×</span>
                <span className="mb-1 text-sm text-gray-400">conversion on tried-on items</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xl overflow-hidden rounded-3xl border border-emerald-950/10 bg-white shadow-[0_18px_45px_rgba(21,71,46,0.10)] lg:mr-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={rendered ? 'after' : 'before'}
                src={rendered ? AFTER : BEFORE}
                alt={rendered ? 'AI-rendered saree try-on' : 'Customer uploaded photo'}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 1, scale: 1.08 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              />
            </AnimatePresence>

            {/* Scan line while rendering */}
            {rendered && (
              <motion.div
                className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent"
                initial={{ top: '-20%' }}
                animate={{ top: '110%' }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
            )}

            <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {rendered ? 'AI Rendered' : 'Original Photo'}
            </div>

            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-black/60 p-3 backdrop-blur">
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>Purchase confidence</span>
                <span className="font-semibold text-emerald-400">{confidence}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-emerald-400"
                  animate={{ width: `${confidence}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
