import React from 'react';
import { Chapter, Rise } from './Chapter';

const LINES = [
  'Most fashion sellers',
  'keep stock in one tool,',
  'customers in another,',
  'money in a third.',
  'Scaleezy is one system.',
];

export default function StaircaseIntro() {
  return (
    <Chapter bg="var(--color-accent)" logo="mono" className="min-h-[100svh] flex items-center py-28">
      <div className="wrap w-full grid grid-cols-12 gap-x-6 gap-y-14">
        <div className="col-span-12 lg:col-span-9 flex flex-col justify-between gap-14">
          <Rise as="h2" className="t-head max-w-[14ch]">Apparel commerce is broken.</Rise>

          <Rise as="p" delay={0.08} className="font-medium tracking-[-0.02em] leading-[1.15] text-[clamp(1.375rem,2.4vw,2.25rem)]">
            {LINES.map((line, i) => (
              <span
                key={line}
                className={`block ${i % 2 ? 'text-[var(--color-maroon)]' : ''}`}
                style={{ paddingLeft: `calc(${i} * var(--stair))` }}
              >
                {line}
              </span>
            ))}
          </Rise>

          <Rise as="p" delay={0.16} className="t-body max-w-[46ch]">
            The result: dead stock locked in backrooms, slow billing queues, campaigns that get ignored, and customers who never come back.
          </Rise>
        </div>

        <Rise delay={0.12} className="col-span-12 lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4 content-start">
          <figure>
            <img
              src="/photos/shelves-from-a-saree-shop-6543977625.jpg"
              alt="Shelves of folded silk sarees in every colour at a saree shop"
              width="1920" height="1275" loading="lazy"
              className="w-full aspect-[3/2] object-cover"
            />
          </figure>
          <figure>
            <img
              src="/photos/india-varanasi-fabric-market-1723.jpg"
              alt="Shoppers unfolding saree fabric at a market stall in Varanasi"
              width="1920" height="1244" loading="lazy"
              className="w-full aspect-[3/2] object-cover"
            />
          </figure>
        </Rise>
      </div>
    </Chapter>
  );
}
