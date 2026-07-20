import React from 'react';
import { Reveal } from '../motion';

const OUTCOMES = [
  { stat: '30%', label: 'Less Dead Stock' },
  { stat: '40%', label: 'Higher Repeat Purchases' },
  { stat: '50%', label: 'Less Manual Work' },
  { stat: 'Higher', label: 'Conversion Rate' },
];

export function Outcomes() {
  return (
    <section aria-label="Business results" className="w-full bg-[#F4F7F4] py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 text-center md:px-12">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium tracking-widest text-emerald-600 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            BUSINESS RESULTS
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#1A2E24] md:text-6xl">
            Outcomes that move the
            <br />
            bottom line
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {OUTCOMES.map((outcome, index) => (
            <Reveal
              key={outcome.label}
              delay={index * 0.1}
              className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
            >
              <span className="text-5xl font-bold text-[#1B6B3A] md:text-6xl">
                {outcome.stat}
              </span>
              <span className="mt-4 text-sm font-medium text-gray-600">{outcome.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
