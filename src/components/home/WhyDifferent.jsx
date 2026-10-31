import React from 'react';
import { Chapter, Rise } from './Chapter';

const REASONS = [
  { title: 'Hyper-personalisation', text: 'Demographics, pincode, price preference, buying patterns, try-on behaviour and festival trends, in one customer profile.' },
  { title: 'Virtual try-on', text: 'Fit and sizing confidence for the customer, and fewer pieces crumpled in the trial room.' },
  { title: 'Commerce intelligence', text: 'Fast movers, low stock, dead-stock risk and demand forecasts, worked out for you every morning.' },
  { title: 'One business system', text: 'CRM, finance, inventory, try-on, marketing, analytics and logistics on the same data.' },
];

export default function WhyDifferent() {
  return (
    <Chapter bg="var(--color-paper)" className="py-28 lg:py-36">
      <div className="wrap grid grid-cols-12 gap-x-6 gap-y-14">
        <Rise as="h2" className="col-span-12 lg:col-span-5 t-head lg:sticky lg:top-32 self-start">
          Built for how fashion sells.
        </Rise>
        <dl className="col-span-12 lg:col-span-6 lg:col-start-7 grid gap-12">
          {REASONS.map((r, i) => (
            <Rise key={r.title} delay={0.06 * i}>
              <dt className="t-lead">{r.title}</dt>
              <dd className="t-body mt-3 max-w-[48ch]">{r.text}</dd>
            </Rise>
          ))}
        </dl>
      </div>
    </Chapter>
  );
}
