import React from 'react';
import { Chapter, Rise } from './Chapter';

const TOOLS = ['Scaleezy', 'Shopify', 'Zoho or a POS', 'Standalone CRM'];
const ROWS = [
  ['Made for apparel', 'Yes, natively', 'Generic', 'Generic', 'No'],
  ['Virtual try-on', 'Built in', 'Needs an app', 'No', 'No'],
  ['Inventory forecasting', 'Built in', 'Needs an app', 'Manual', 'No'],
  ['Personalised marketing', 'Deep', 'Basic', 'No', 'Needs an integration'],
  ['Finance', 'Built in', 'External', 'Basic', 'No'],
  ['Data without integrations', 'One system', 'Patchwork', 'Silos', 'Silos'],
];

export default function CompareTable() {
  return (
    <Chapter bg="var(--color-primary)" ink="light" className="py-28 lg:py-36">
      <div className="wrap">
        <Rise as="h2" className="t-head max-w-[14ch]">Scaleezy next to the rest.</Rise>
        <Rise delay={0.08} className="mt-14 overflow-x-auto" tabIndex={0} role="region" aria-label="Feature comparison table">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/25">
                <th scope="col" className="py-4 pr-6 t-small font-normal">Compared on</th>
                {TOOLS.map((t, i) => (
                  <th key={t} scope="col" className={`py-4 pr-6 t-lead ${i === 0 ? 'text-[var(--color-accent)]' : ''}`}>{t}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([label, ...cells]) => (
                <tr key={label} className="border-b border-white/15">
                  <th scope="row" className="py-5 pr-6 t-body font-medium">{label}</th>
                  {cells.map((c, i) => (
                    <td key={i} className={`py-5 pr-6 t-body ${i === 0 ? 'text-[var(--color-accent)] font-medium' : ''}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Rise>
      </div>
    </Chapter>
  );
}
