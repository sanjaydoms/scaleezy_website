import React from 'react';
import { Link } from 'react-router-dom';
import { Chapter, Rise } from './Chapter';

const BUSINESSES = ['Saree stores', 'Bridal boutiques', 'Ethnic wear', 'Fashion retailers', 'Multi-brand stores', 'D2C brands', 'Wholesalers', 'Manufacturers'];

export default function BusinessBand() {
  const row = BUSINESSES.flatMap(b => [b, '•']);
  return (
    <Chapter bg="var(--color-marigold)" className="pt-24 pb-28 lg:pb-36">
      <div className="overflow-hidden py-6" aria-hidden="true">
        <div className="flex w-max animate-band whitespace-nowrap font-medium tracking-[-0.05em] leading-none text-[clamp(3.5rem,8vw,8rem)]">
          {[0, 1].map(copy => (
            <span key={copy} className="flex items-center gap-[0.35em] pr-[0.35em]">
              {row.map((item, i) => (
                <span key={i} className={item === '•' ? 'text-[var(--color-maroon)] text-[0.5em]' : ''}>{item}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <div className="wrap mt-14 grid grid-cols-12 gap-x-6 gap-y-6 items-end">
        <Rise as="h2" className="col-span-12 lg:col-span-7 t-lead max-w-[30ch]">
          Built for eight kinds of apparel business, from a single saree store to a garment mill.
        </Rise>
        <Rise delay={0.08} className="col-span-12 lg:col-span-5 lg:text-right">
          <p className="sr-only">{BUSINESSES.join(', ')}.</p>
          <Link to="/solutions" className="btn btn-dark">Find your workflow</Link>
        </Rise>
      </div>
    </Chapter>
  );
}
