import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Chapter, Rise } from './Chapter';

const MODULES = [
  { name: 'Inventory', text: 'Predict demand and cut dead stock.' },
  { name: 'CRM', text: "Remember every client's sizes and taste." },
  { name: 'Marketing', text: 'Reach the right buyers at the right time.' },
  { name: 'Virtual try-on', text: 'Let customers see it on before they buy.' },
  { name: 'Finance', text: 'Track margins as they happen.' },
  { name: 'Analytics', text: 'Numbers you can act on this week.' },
  { name: 'Logistics', text: 'Dispatch fast and track every courier.' },
  { name: 'Smart POS', text: 'Billing and checkout at the counter.' },
];

export default function ModuleRows() {
  return (
    <Chapter bg="var(--color-primary)" ink="light" className="py-28 lg:py-36">
      <div className="wrap grid grid-cols-12 gap-x-6 gap-y-6 mb-14">
        <Rise as="h2" className="col-span-12 lg:col-span-8 t-head">Eight modules, one platform.</Rise>
        <Rise as="p" delay={0.08} className="col-span-12 lg:col-span-4 t-body max-w-[38ch] lg:self-end">
          Start with the one you need most. The rest share the same data the day you switch them on.
        </Rise>
      </div>

      <ul>
        {MODULES.map((m, i) => (
          <li key={m.name} className={i % 2 ? 'bg-[var(--color-forest-deep)]' : ''}>
            <Link
              to="/modules"
              className="wrap group grid grid-cols-12 gap-x-6 items-end min-h-[5.5rem] lg:min-h-[8.5rem] py-4 hover:text-[var(--color-accent)] transition-colors"
            >
              <span className="col-span-12 md:col-span-7 font-medium tracking-[-0.045em] leading-none text-[clamp(2.5rem,6vw,5.5rem)] transition-transform duration-200 group-hover:translate-x-2">
                {m.name}
              </span>
              <span className="col-span-12 md:col-span-5 t-body text-[var(--color-paper)] md:pb-2">{m.text}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="wrap mt-14">
        <Link to="/modules" className="btn">
          See every module <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </Chapter>
  );
}
