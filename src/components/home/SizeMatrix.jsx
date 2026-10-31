import React, { useState } from 'react';
import { Chapter, Rise } from './Chapter';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
const COLOURS = [
  { id: 'haldi', name: 'Haldi yellow', swatch: '#E2B33C' },
  { id: 'bottle', name: 'Bottle green', swatch: '#1F5E3B' },
  { id: 'rani', name: 'Rani pink', swatch: '#C2185B' },
  { id: 'maroon', name: 'Maroon', swatch: '#5A1A24' },
];
// Sample opening stock for one cotton kurta style, by colour then size
const OPENING_STOCK = {
  haldi: [6, 14, 11, 4, 2],
  bottle: [5, 12, 9, 3, 1],
  rani: [8, 15, 13, 6, 3],
  maroon: [4, 10, 8, 2, 0],
};
const REORDER_AT = 2;

export default function SizeMatrix() {
  const [stock, setStock] = useState(OPENING_STOCK);
  const [sizes, setSizes] = useState(SIZES);
  const [colours, setColours] = useState(COLOURS.map(c => c.id));

  const toggle = (list, setList, value, order) =>
    setList(list.includes(value)
      ? (list.length > 1 ? list.filter(v => v !== value) : list)
      : order.filter(v => list.includes(v) || v === value));

  const sell = (colourId, sizeIndex) =>
    setStock(prev => ({
      ...prev,
      [colourId]: prev[colourId].map((n, i) => (i === sizeIndex ? Math.max(0, n - 1) : n)),
    }));

  const activeSizes = SIZES.map((s, i) => ({ s, i })).filter(({ s }) => sizes.includes(s));
  const activeColours = COLOURS.filter(c => colours.includes(c.id));
  const cells = activeColours.flatMap(c => activeSizes.map(({ i }) => stock[c.id][i]));
  const skuCount = cells.length;
  const pieces = cells.reduce((a, b) => a + b, 0);
  const toReorder = cells.filter(n => n <= REORDER_AT).length;

  return (
    <Chapter bg="var(--color-stone)" className="py-28 lg:py-36">
      <div className="wrap grid grid-cols-12 gap-x-6 gap-y-12 items-start">
        <div className="col-span-12 lg:col-span-5">
          <Rise as="h2" className="t-head">One kurta, twenty SKUs.</Rise>
          <Rise as="p" delay={0.08} className="t-body mt-8 max-w-[44ch]">
            A single style in five sizes and four colours is twenty separate stock lines, and the gaps hide in the small sizes. Turn sizes and colours on or off, then tap a cell to sell one and see what Scaleezy flags for reorder.
          </Rise>
          <Rise delay={0.16} className="mt-12 grid grid-cols-3 gap-6" aria-live="polite">
            <p><span className="block t-head">{skuCount}</span><span className="t-small">SKUs to track</span></p>
            <p><span className="block t-head">{pieces}</span><span className="t-small">pieces in stock</span></p>
            <p><span className="block t-head text-[var(--color-maroon)]">{toReorder}</span><span className="t-small">to reorder</span></p>
          </Rise>
        </div>

        <Rise delay={0.12} className="col-span-12 lg:col-span-7">
          <div data-ui className="bg-white text-[var(--color-charcoal)] border border-black/10 p-4 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4 border-b border-black/10">
              <p className="font-medium">Cotton kurta, straight cut <span className="text-black/55">· KR-2041</span></p>
              <button
                type="button"
                onClick={() => { setStock(OPENING_STOCK); setSizes(SIZES); setColours(COLOURS.map(c => c.id)); }}
                className="t-small underline underline-offset-4 hover:text-[var(--color-maroon)]"
              >
                Reset stock
              </button>
            </div>

            <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Stock by colour and size">
              <table className="w-full table-fixed border-collapse mt-4 text-[15px]">
                <caption className="sr-only">Pieces in stock for each colour and size. Select a cell to sell one piece.</caption>
                <thead>
                  <tr>
                    <th scope="col" className="w-[34%] sm:w-[30%] text-left font-medium pb-3 pr-2">Colour</th>
                    {SIZES.map(s => (
                      <th key={s} scope="col" className="pb-3 px-1">
                        <button
                          type="button"
                          aria-pressed={sizes.includes(s)}
                          aria-label={`Size ${s}`}
                          onClick={() => toggle(sizes, setSizes, s, SIZES)}
                          className={`w-full min-h-11 font-medium border transition-colors ${sizes.includes(s) ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'bg-white text-black/45 border-black/15 line-through'}`}
                        >
                          {s}
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COLOURS.map(c => {
                    const on = colours.includes(c.id);
                    return (
                      <tr key={c.id} className="border-t border-black/10">
                        <th scope="row" className="text-left font-normal py-2 pr-3">
                          <button
                            type="button"
                            aria-pressed={on}
                            onClick={() => toggle(colours, setColours, c.id, COLOURS.map(x => x.id))}
                            className={`flex items-center gap-2 min-h-11 text-left ${on ? '' : 'text-black/40 line-through'}`}
                          >
                            <span aria-hidden="true" className="w-4 h-4 shrink-0" style={{ background: c.swatch, opacity: on ? 1 : 0.35 }} />
                            {c.name}
                          </button>
                        </th>
                        {SIZES.map((s, i) => {
                          const n = stock[c.id][i];
                          const live = on && sizes.includes(s);
                          if (!live) return <td key={s} className="px-1 py-2"><span className="block min-h-11 bg-black/[0.04]" /></td>;
                          const low = n <= REORDER_AT;
                          return (
                            <td key={s} className="px-1 py-2">
                              <button
                                type="button"
                                onClick={() => sell(c.id, i)}
                                disabled={n === 0}
                                aria-label={`${c.name}, size ${s}: ${n} in stock${low ? ', reorder' : ''}. Sell one.`}
                                className={`w-full min-h-11 flex flex-col items-center justify-center leading-tight tabular-nums transition-colors ${n === 0 ? 'bg-[var(--color-maroon)] text-white cursor-not-allowed' : low ? 'bg-[#F6E3B8] text-[var(--color-maroon)] hover:bg-[#F0D594]' : 'bg-[#EEF3DC] hover:bg-[#E2EBC2]'}`}
                              >
                                <span className="font-medium">{n}</span>
                                {n === 0 ? <span className="text-[13px]"><span className="sm:hidden">Out</span><span className="hidden sm:inline">Sold out</span></span> : low && <span className="text-[13px]"><span className="sm:hidden">Low</span><span className="hidden sm:inline">Reorder</span></span>}
                              </button>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <p className="t-small mt-3">Sample stock for illustration.</p>
        </Rise>
      </div>
    </Chapter>
  );
}
