import React from 'react';
import { ParallaxImage, Reveal } from './motion';
import { IMAGES } from './assets';
export function BusinessClarity() {
  return <section className="w-full bg-forest text-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-6 md:grid-cols-[1fr_1.05fr] md:gap-20 md:px-12">
        <Reveal>
          <p className="eyebrow text-lime">Business clarity</p>
          <h2 className="font-serif-display mt-5 max-w-xl text-5xl leading-[0.98] md:text-7xl">
            One shared view of the work that matters.
          </h2>
          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-cream/70">
            Revenue, inventory, customers, campaigns, finance, and fulfilment
            live together — so your next decision is grounded in the whole
            business, not one disconnected report.
          </p>
          <p className="mt-10 border-l-2 border-lime pl-5 font-serif-display text-3xl leading-tight">
            Clear priorities for every team, every day.
          </p>
        </Reveal>
        <ParallaxImage src={IMAGES.portraitOwner} alt="Fashion store owner taking stock of her business" className="aspect-[4/5] w-full" strength={35} />
      </div>
    </section>;
}