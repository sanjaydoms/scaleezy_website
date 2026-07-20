import React from 'react';
import { ParallaxImage, Reveal } from './motion';
import { IMAGES } from './assets';
import { Shirt, Cpu, Heart } from 'lucide-react';

export function AboutUs() {
  const VALUES = [
    {
      icon: Shirt,
      title: 'Designed for Apparel Realities',
      description: 'We model clothing exactly as it is—sizes, variants, locations, and collections—instead of treating fashion like static barcodes.'
    },
    {
      icon: Cpu,
      title: 'Unification Over Integration',
      description: 'Rather than stitching ten disjointed tools together, we built one system from the ground up to share a single live workspace.'
    },
    {
      icon: Heart,
      title: 'Empowering Human Touch',
      description: 'We automate administrative friction so your team can focus on styling, clienteling, and building real customer relationships.'
    }
  ];

  return (
    <section id="about-us" className="w-full bg-[#EFE9DE] py-24 text-forest md:py-36 border-t border-forest/10 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-5 hidden md:block">
        <span className="font-serif-display text-[15rem] leading-none select-none text-forest font-bold">
          scaleezy
        </span>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
        {/* Left Column (Story & Mission) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <Reveal>
            <span className="eyebrow inline-flex items-center rounded-full border border-forest/20 px-4 py-1.5 text-lime-dark uppercase tracking-widest text-[10px] font-semibold bg-cream/40">
              Our Story
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif-display mt-6 text-5xl leading-[0.98] tracking-[-0.04em] text-[#0F3D2E] md:text-7xl">
              We simplify how <span className="font-serif-display italic text-lime-dark">apparel</span> brands grow.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 space-y-6 text-base font-light leading-relaxed text-forest/75 md:text-lg">
              <p>
                We started Scaleezy because we saw designers, merchants, and boutique owners spending more time fighting spreadsheets and disconnected systems than styling collections and managing relationships.
              </p>
              <p>
                Apparel commerce is uniquely detailed, requiring variant tracking, custom fits, clienteling, and cross-channel fulfilment. Generic ERPs and retail systems flatten these nuances. Scaleezy was built to keep them beautifully unified.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 border-l-2 border-lime-dark pl-5 py-1">
              <p className="font-serif-display text-2xl md:text-3xl leading-snug italic text-forest">
                "Replace operational complexity with creative flow."
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right Column (Visual + Core Principles) */}
        <div className="lg:col-span-7 space-y-12">
          {/* Parallax Image representing boutique owner / manager */}
          <Reveal delay={0.15}>
            <ParallaxImage 
              src={IMAGES.portraitManager} 
              alt="Store manager organizing an apparel showroom with premium racks" 
              className="aspect-[16/10] w-full rounded-3xl shadow-lg border border-forest/5"
              strength={25}
            />
          </Reveal>

          {/* Grid of Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((val, index) => {
              const Icon = val.icon;
              return (
                <Reveal key={val.title} delay={0.2 + index * 0.08}>
                  <div className="flex flex-col h-full bg-white/70 border border-forest/5 p-6 rounded-2xl shadow-[0_8px_24px_rgba(15,61,46,0.01)] hover:shadow-[0_12px_32px_rgba(15,61,46,0.04)] hover:border-lime-dark/25 transition-all duration-300">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime/10 text-forest mb-4">
                      <Icon className="h-4.5 w-4.5 text-[#0F3D2E]" strokeWidth={1.8} />
                    </span>
                    <h4 className="text-base font-bold text-forest leading-snug tracking-tight">
                      {val.title}
                    </h4>
                    <p className="mt-2 text-xs font-light text-forest/70 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
