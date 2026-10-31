import React from 'react';
import { Chapter, Rise } from './Chapter';

export default function ResultsTiles() {
  return (
    <Chapter bg="var(--color-primary)" ink="light" className="py-28 lg:py-36">
      <div className="wrap grid grid-cols-2 lg:grid-cols-12 gap-2 lg:items-start">
        <Rise className="col-span-2 lg:col-span-6 lg:row-span-3 lg:h-[70vh] min-h-[56vw] lg:min-h-0 bg-[var(--color-accent)] text-[var(--color-primary)] p-7 flex flex-col justify-between">
          <p className="font-medium tracking-[-0.05em] leading-none text-[clamp(3.5rem,6vw,6rem)]">30%</p>
          <p className="t-body max-w-[30ch]">less stock left over at the end of a season, from reorders based on what sells by size.</p>
        </Rise>

        <div className="col-span-2 lg:col-span-6 grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-x-2 lg:gap-y-0">
          <Rise as="h2" className="col-span-2 lg:col-span-6 t-lead lg:h-[14vh] flex items-end pb-6 lg:px-1 order-first">
            What changes in a season
          </Rise>
          <Rise delay={0.08} className="lg:col-span-3 lg:h-[44vh] min-h-[48vw] lg:min-h-0 bg-[var(--color-paper)] text-[var(--color-primary)] p-6 flex flex-col justify-between">
            <p className="font-medium tracking-[-0.05em] leading-none text-[clamp(2.75rem,4.4vw,4.75rem)]">40%</p>
            <p className="t-body">more repeat purchases</p>
          </Rise>
          <Rise delay={0.16} className="lg:col-span-3 mt-8 lg:mt-[12vh] lg:h-[34vh] min-h-[40vw] lg:min-h-0 bg-[var(--color-marigold)] text-[var(--color-primary)] p-6 flex flex-col justify-between">
            <p className="font-medium tracking-[-0.05em] leading-none text-[clamp(2.75rem,4.4vw,4.75rem)]">50%</p>
            <p className="t-body">less manual data entry</p>
          </Rise>
          <Rise as="p" delay={0.2} className="col-span-2 lg:col-span-6 t-body mt-8 max-w-[44ch] lg:px-1">
            Virtual try-on lifts conversion, stock reorders itself, and clienteling brings people back to the store.
          </Rise>
        </div>
      </div>
    </Chapter>
  );
}
