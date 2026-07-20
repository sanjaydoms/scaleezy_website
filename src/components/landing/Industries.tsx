import React from 'react';
import { IMAGES } from '../assets';
import { Reveal } from '../motion';

const INDUSTRIES = [
  {
    name: 'Saree Stores',
    challenge: 'Hundreds of fabrics, borders, colours, and customer preferences to hold in mind.',
    response: 'Bring variant-rich inventory and personal customer history into one graceful flow.',
    image: IMAGES.industryEthnic,
    alt: 'Colourful sarees arranged in an upscale boutique',
  },
  {
    name: 'Bridal Boutiques',
    challenge: 'Long journeys, fittings, alterations, and a once-in-a-lifetime customer moment.',
    response: 'Keep every appointment, order detail, and delivery milestone connected.',
    image: IMAGES.industryBridal,
    alt: 'Ivory bridal gowns displayed in a bridal boutique',
  },
  {
    name: 'Ethnic Wear',
    challenge: 'Seasonal collections and deeply personal in-store discovery.',
    response: 'Make collection, customer, and campaign data work together.',
    image: IMAGES.retailRack,
    alt: 'Curated garments on a boutique rack',
  },
  {
    name: 'Fashion Retailers',
    challenge: 'Many stores, many teams, and too many handoffs between them.',
    response: 'Give every location the same shared operational view.',
    image: IMAGES.hero,
    alt: 'Premium fashion boutique interior',
  },
  {
    name: 'Multi-brand Stores',
    challenge: 'A varied assortment needs clarity at every rack and every counter.',
    response: 'Keep products, vendors, stock, and customers aligned in one system.',
    image: IMAGES.warehouse,
    alt: 'Organized fashion warehouse inventory',
  },
  {
    name: 'D2C Fashion Brands',
    challenge: 'A brand experience that must feel equally considered online and offline.',
    response: 'Connect catalog, customer journey, fulfilment, and retention.',
    image: IMAGES.onlineShopping,
    alt: 'Customer shopping apparel online',
  },
  {
    name: 'Fashion Wholesalers',
    challenge: 'High-volume orders, variations, and delivery complexity at scale.',
    response: 'Run supply, stock, and fulfilment from a shared foundation.',
    image: IMAGES.packaging,
    alt: 'Premium fashion order packaging',
  },
];

export function Industries() {
  return (
    <section id="industries" className="w-full bg-forest py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal className="mb-14 md:mb-20">
          <p className="eyebrow text-lime">Industries</p>
          <h2 className="font-serif-display mt-5 max-w-3xl text-5xl leading-[0.98] md:text-7xl">
            Fashion businesses are not all built alike.
          </h2>
          <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-cream/65">
            Explore the challenges each business faces — and the connected
            operations that meet them.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <Reveal
              key={industry.name}
              delay={index * 0.05}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={industry.image}
                alt={industry.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 group-focus-within:scale-105"
              />
              <div className="absolute inset-0 bg-forest/35 transition-colors duration-500 group-hover:bg-forest/90 group-focus-within:bg-forest/90" />
              <div className="absolute inset-x-0 bottom-0 p-6 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
                <span className="eyebrow text-lime">0{index + 1}</span>
                <h3 className="font-serif-display mt-3 text-4xl leading-none">{industry.name}</h3>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
                <p className="eyebrow text-lime">{industry.name}</p>
                <p className="mt-4 text-base font-light leading-relaxed text-cream/70">{industry.challenge}</p>
                <p className="mt-5 border-t border-cream/25 pt-4 font-serif-display text-2xl leading-tight">{industry.response}</p>
              </div>
              <button
                type="button"
                aria-label={`${industry.name}: ${industry.challenge} ${industry.response}`}
                className="absolute inset-0 h-full w-full cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lime"
              />
            </Reveal>
          ))}

          <Reveal
            delay={0.35}
            className="flex flex-col justify-center bg-white p-8 text-forest sm:col-span-2 lg:col-span-2"
          >
            <h3 className="font-serif-display text-4xl leading-tight md:text-5xl">
              Whatever your model, Scaleezy adapts.
            </h3>
            <p className="mt-4 max-w-lg text-lg font-medium text-forest/80">
              Our connected platform is designed to bend to the unique workflows
              of your fashion business, not the other way around.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
