import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './motion';
import {
  Database,
  Package,
  Users,
  Megaphone,
  TrendingUp,
  Wallet,
  Truck,
  Shirt,
  Shield,
  Zap,
  Lock
} from 'lucide-react';

const MODULES = [
  { label: 'Inventory', angle: -90, icon: Package },
  { label: 'CRM', angle: -45, icon: Users },
  { label: 'Marketing', angle: 0, icon: Megaphone },
  { label: 'Analytics', angle: 45, icon: TrendingUp },
  { label: 'Finance', angle: 90, icon: Wallet },
  { label: 'Logistics', angle: 135, icon: Truck },
  { label: 'Virtual Try-On', angle: 180, icon: Shirt },
  { label: 'Unified Data', angle: 225, icon: Database },
];

export function ConnectionMap() {
  return (
    <section className="relative w-full bg-[#F5F2EC] overflow-hidden py-20 text-forest md:py-32">
      {/* Decorative bottom-left waves */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[350px] pointer-events-none z-0 hidden md:block">
        <svg className="w-full h-full opacity-90" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M -100 350 C 50 320, 120 220, 10 160 C -80 110, -110 50, -50 0 L -120 0 L -120 350 Z" 
            fill="#0F3D2E" 
            opacity="0.9"
          />
          <path 
            d="M -100 350 C 80 340, 160 250, 40 180 C -50 120, -70 60, -20 10 L -120 10 L -120 350 Z" 
            fill="#1b4d3e" 
            opacity="0.4"
          />
          <path 
            d="M -100 350 C 110 360, 200 270, 70 200 C -30 140, -40 70, 10 20 L -120 20 L -120 350 Z" 
            fill="#2c5e4f" 
            opacity="0.15"
          />
        </svg>
      </div>

      {/* Dotted matrix decoration (bottom right) */}
      <div className="absolute bottom-10 right-10 grid grid-cols-8 gap-2 pointer-events-none opacity-20 hidden md:grid">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#0F3D2E] rounded-full" />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <Reveal>
            <span className="eyebrow inline-flex items-center rounded-full border border-forest/20 px-4 py-1.5 text-lime-dark uppercase tracking-widest text-[10px] font-semibold">
              Meet Scaleezy
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-6">
              <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#0F3D2E] md:text-7xl">
                One <span className="font-serif-display italic text-lime-dark">platform</span>. <br />
                Complete <span className="font-serif-display italic text-lime-dark">operations</span>.
              </h2>
              {/* Decorative underline */}
              <div className="mt-4 w-48">
                <svg className="w-full h-3 text-lime-dark/70" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,9 100,5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 flex items-center justify-between rounded-3xl border border-forest/10 bg-white/75 p-5 md:p-6 shadow-[0_8px_30px_rgba(15,61,46,0.02)] backdrop-blur-md">
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <Shield className="h-5 w-5 text-[#0F3D2E]" strokeWidth={1.8} />
                <span className="mt-2 text-xs font-semibold text-[#0F3D2E] tracking-tight">All in One</span>
                <span className="mt-1.5 h-0.5 w-6 bg-lime-dark/60 rounded-full" />
              </div>
              <div className="h-10 w-px bg-forest/10 mx-2" />
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <Zap className="h-5 w-5 text-[#0F3D2E]" strokeWidth={1.8} />
                <span className="mt-2 text-xs font-semibold text-[#0F3D2E] tracking-tight">Unified</span>
                <span className="mt-1.5 h-0.5 w-6 bg-lime-dark/60 rounded-full" />
              </div>
              <div className="h-10 w-px bg-forest/10 mx-2" />
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <TrendingUp className="h-5 w-5 text-[#0F3D2E]" strokeWidth={1.8} />
                <span className="mt-2 text-xs font-semibold text-[#0F3D2E] tracking-tight">Scalable</span>
                <span className="mt-1.5 h-0.5 w-6 bg-lime-dark/60 rounded-full" />
              </div>
              <div className="h-10 w-px bg-forest/10 mx-2" />
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <Lock className="h-5 w-5 text-[#0F3D2E]" strokeWidth={1.8} />
                <span className="mt-2 text-xs font-semibold text-[#0F3D2E] tracking-tight">Secure</span>
                <span className="mt-1.5 h-0.5 w-6 bg-lime-dark/60 rounded-full" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column (Orbital circular diagram) */}
        <div className="lg:col-span-7 flex items-center justify-center mt-6 lg:mt-0">
          <div className="relative w-[340px] h-[340px] xs:w-[380px] xs:h-[380px] md:w-[560px] md:h-[560px] flex-shrink-0 flex items-center justify-center">
            {/* SVG Connecting lines and ring */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              {/* Outer dashed ring passing through the dots */}
              <circle 
                cx="50" 
                cy="50" 
                r="26" 
                stroke="#8FB926" 
                strokeWidth="0.3" 
                strokeDasharray="1.5,1.5" 
                fill="none" 
                opacity="0.4" 
              />
              
              {/* Connecting lines from center to each card */}
              {MODULES.map((m, i) => {
                const rad = (m.angle * Math.PI) / 180;
                // Coordinates for line (ends near card center)
                const x2 = 50 + 40 * Math.cos(rad);
                const y2 = 50 + 40 * Math.sin(rad);
                // Coordinates for green dot on the dashed ring
                const dotX = 50 + 26 * Math.cos(rad);
                const dotY = 50 + 26 * Math.sin(rad);
                return (
                  <g key={i}>
                    {/* Radial line */}
                    <line 
                      x1="50" 
                      y1="50" 
                      x2={x2} 
                      y2={y2} 
                      stroke="#8FB926" 
                      strokeWidth="0.25" 
                      strokeDasharray="1,1" 
                      opacity="0.5" 
                    />
                    {/* Ring intersection dot */}
                    <circle cx={dotX} cy={dotY} r="0.8" fill="#8FB926" />
                  </g>
                );
              })}
            </svg>

            {/* Central scaleezy Hub */}
            <motion.div 
              className="absolute z-20 w-32 h-32 md:w-56 md:h-56 rounded-full bg-[#0F3D2E] border-[6px] border-[#F5F2EC] md:border-[12px] flex flex-col items-center justify-center text-center shadow-xl p-4 cursor-pointer left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-50%' }}
              whileInView={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, x: '-50%', y: '-50%' }}
            >
              <h3 className="font-serif-display text-2xl md:text-4xl text-[#F5F2EC] font-semibold tracking-tight">
                scale<span className="text-[#9FC131]">ezy</span>
              </h3>
              <p className="mt-2 md:mt-3 text-[6px] md:text-[9px] font-bold text-[#F5F2EC]/80 tracking-[0.25em] leading-none uppercase">
                All Solutions.
              </p>
              <p className="mt-0.5 md:mt-1.5 text-[6px] md:text-[9px] font-bold text-[#9FC131] tracking-[0.25em] leading-none uppercase">
                One Platform.
              </p>
            </motion.div>

            {/* Surrounding Cards */}
            {MODULES.map((m, index) => {
              const Icon = m.icon;
              const rad = (m.angle * Math.PI) / 180;
              const x = 50 + 41.5 * Math.cos(rad);
              const y = 50 + 41.5 * Math.sin(rad);

              return (
                <motion.div
                  key={m.label}
                  className="absolute z-10 flex flex-col items-center justify-center bg-white/95 border border-forest/5 rounded-2xl shadow-[0_8px_20px_rgba(15,61,46,0.03)] hover:shadow-[0_12px_28px_rgba(15,61,46,0.08)] hover:border-lime-dark/30 transition-all duration-300 w-[80px] h-[80px] md:w-[125px] md:h-[125px] cursor-pointer"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -3, scale: 1.03 }}
                >
                  <div className="flex items-center justify-center w-7 h-7 md:w-11 md:h-11 rounded-full bg-lime/10 text-forest mb-1 md:mb-2">
                    <Icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#0F3D2E]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[8px] md:text-xs font-semibold text-[#0F3D2E] text-center tracking-tight leading-tight px-1">
                    {m.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}