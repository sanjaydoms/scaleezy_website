import React from 'react';
import { Reveal } from '../motion';

const SIGNALS = ['Customer', 'Inventory', 'Purchases', 'Location', 'Store visits'];
const ACTIONS = ['Reorder', 'Customer follow-up', 'Campaigns', 'Offers', 'Fulfilment'];

export function ConnectedBusiness() {
  return (
    <section className="w-full bg-[#121712] py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal className="text-center">
          <p className="eyebrow text-lime">One connected business</p>
          <h2 className="font-serif-display mt-5 text-5xl leading-[0.98] md:text-7xl">
            From every signal to the next right action.
          </h2>
        </Reveal>
        {/* Responsive: stack on mobile/tablet, 3-col on lg+ */}
        <div className="mt-16 grid items-center gap-8 sm:grid-cols-[1fr_auto_1fr] lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
          <SignalList heading="What happens" items={SIGNALS} align="left" />
          <Reveal className="mx-auto flex min-h-40 w-full max-w-56 shrink-0 items-center justify-center border border-lime/70 bg-forest px-8 text-center md:min-h-48">
            <p className="font-serif-display whitespace-nowrap text-4xl leading-none">
              scale<span className="text-lime">ezy</span>
            </p>
          </Reveal>
          <SignalList heading="What moves forward" items={ACTIONS} align="right" />
        </div>
      </div>
    </section>
  );
}

type SignalListProps = {
  heading: string;
  items: string[];
  align: 'left' | 'right';
};

function SignalList({ heading, items, align }: SignalListProps) {
  return (
    <Reveal className={align === 'right' ? 'sm:text-right' : ''}>
      <p className="eyebrow text-cream/45">{heading}</p>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="border-b border-cream/15 pb-3 text-xl font-light text-cream/80">
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
