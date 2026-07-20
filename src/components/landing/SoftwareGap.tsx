import React from 'react';
import { Reveal } from '../motion';

const TOOLS = [
  { name: 'Traditional ERP', limitation: 'Inventory only' },
  { name: 'CRM', limitation: 'Customer only' },
  { name: 'POS', limitation: 'Billing only' },
  { name: 'Marketing tools', limitation: 'Campaign only' },
];

export function SoftwareGap() {
  return (
    <section className="w-full bg-forest py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <p className="eyebrow text-lime">Why current software falls short</p>
          <h2 className="font-serif-display mt-5 max-w-3xl text-5xl leading-[0.98] md:text-7xl">
            Your business is connected. Your tools should be too.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden border border-cream/20 bg-cream/20 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool, index) => (
            <Reveal key={tool.name} delay={index * 0.08} className="min-h-52 bg-forest p-7 md:p-8">
              <p className="eyebrow text-cream/45">{tool.name}</p>
              <p className="mt-12 text-lg text-cream/75">
                <span className="mr-2 text-lime">×</span>
                {tool.limitation}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-col justify-between gap-6 border-t border-lime pt-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-lime">Scaleezy</p>
            <p className="font-serif-display mt-3 text-4xl md:text-6xl">
              Everything connected.
            </p>
          </div>
          <p className="max-w-md text-base font-light leading-relaxed text-cream/65">
            One apparel-first operating platform brings the work, the people,
            and the customer journey together.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
