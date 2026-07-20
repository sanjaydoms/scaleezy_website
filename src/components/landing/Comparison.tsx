import React from 'react';
import { CheckIcon, MinusIcon, XIcon } from 'lucide-react';
import { Reveal } from '../motion';

const ROWS = [
  { feature: 'Connected operations', scaleezy: 'Yes', erp: 'Partial', pos: 'No', crm: 'No' },
  { feature: 'Virtual Try-On', scaleezy: 'Yes', erp: 'No', pos: 'No', crm: 'No' },
  { feature: 'Unified Data', scaleezy: 'Yes', erp: 'Partial', pos: 'No', crm: 'No' },
  { feature: 'Marketing Automation', scaleezy: 'Yes', erp: 'No', pos: 'No', crm: 'Partial' },
  { feature: 'Apparel-first', scaleezy: 'Yes', erp: 'No', pos: 'No', crm: 'No' },
];

export function Comparison() {
  return (
    <section className="w-full bg-cream py-24 text-forest md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <Reveal className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs font-medium tracking-widest text-lime-dark uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-dark" />
            WHY SCALEEZY
          </div>
          <h2 className="font-serif-display mt-6 text-5xl leading-[0.98] md:text-7xl">
            Everything apparel needs, in one place.
          </h2>
        </Reveal>

        <Reveal className="mt-16 overflow-x-auto pb-4">
          <table className="w-full min-w-[800px] border-collapse text-center">
            <caption className="sr-only">
              Scaleezy compared with traditional ERP, point of sale, and CRM tools
            </caption>
            <thead>
              <tr>
                <th scope="col" className="w-1/4 border-b border-forest/10 p-5 text-left text-sm font-medium text-forest/70">
                  Capability
                </th>
                <th scope="col" className="w-1/4 rounded-t-2xl bg-lime/15 p-5 text-base font-semibold text-forest">
                  Scaleezy
                </th>
                <th scope="col" className="w-1/4 border-b border-forest/10 p-5 text-sm font-medium text-forest/70">
                  Traditional ERP
                </th>
                <th scope="col" className="w-1/4 border-b border-forest/10 p-5 text-sm font-medium text-forest/70">
                  POS
                </th>
                <th scope="col" className="w-1/4 border-b border-forest/10 p-5 text-sm font-medium text-forest/70">
                  CRM
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, index) => {
                const isLast = index === ROWS.length - 1;
                return (
                  <tr key={row.feature}>
                    <th scope="row" className={`p-5 text-left text-base font-medium text-forest ${!isLast ? 'border-b border-forest/10' : ''}`}>
                      {row.feature}
                    </th>
                    <td className={`bg-lime/15 p-5 ${isLast ? 'rounded-b-2xl' : 'border-b border-forest/10 border-opacity-50'}`}>
                      <div className="flex justify-center"><CellIcon value={row.scaleezy} emphasis /></div>
                    </td>
                    <td className={`p-5 ${!isLast ? 'border-b border-forest/10' : ''}`}>
                      <div className="flex justify-center"><CellIcon value={row.erp} /></div>
                    </td>
                    <td className={`p-5 ${!isLast ? 'border-b border-forest/10' : ''}`}>
                      <div className="flex justify-center"><CellIcon value={row.pos} /></div>
                    </td>
                    <td className={`p-5 ${!isLast ? 'border-b border-forest/10' : ''}`}>
                      <div className="flex justify-center"><CellIcon value={row.crm} /></div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}

function CellIcon({ value, emphasis = false }: { value: string; emphasis?: boolean }) {
  if (value === 'Yes') {
    return <CheckIcon className={`h-5 w-5 ${emphasis ? 'text-lime-dark' : 'text-forest'}`} strokeWidth={2.5} />;
  }
  if (value === 'Partial') {
    return <MinusIcon className="h-5 w-5 text-yellow-500" strokeWidth={2.5} />;
  }
  return <XIcon className="h-5 w-5 text-forest/30" strokeWidth={2.5} />;
}
