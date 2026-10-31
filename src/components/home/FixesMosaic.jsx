import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Chapter, Rise } from './Chapter';
import LoopVideo from './LoopVideo';

const tile = 'p-6 flex flex-col';

export default function FixesMosaic() {
  return (
    <Chapter bg="var(--color-maroon)" ink="light" className="py-28 lg:py-36">
      <div className="wrap grid grid-cols-2 lg:grid-cols-12 lg:auto-rows-[96px] gap-2">
        {/* Heading */}
        <Rise className={`${tile} col-span-2 lg:col-span-6 lg:row-span-3 justify-between gap-8`}>
          <h2 className="t-head">Friction, solved.</h2>
          <div>
            <p className="t-body max-w-[40ch]">
              Scaleezy replaces the patchwork of retail tools with four connected fixes, so effort stops leaking out of your margins.
            </p>
            <Link to="/book-a-demo" className="btn mt-6">
              Book a demo <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Rise>

        {/* Moving picture */}
        <Rise delay={0.08} className="col-span-2 lg:col-span-6 lg:row-span-6 relative min-h-[60vw] lg:min-h-0 bg-[var(--color-primary)]">
          <LoopVideo
            src="/photos/weaving-tant-saree-by-handloom-2-natun.webm"
            poster="/photos/weaving-tant-saree-by-handloom-2-natun-poster.jpg"
            label="A tant saree being woven on a handloom"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <p className="absolute left-0 bottom-0 m-4 px-3 py-1.5 t-small bg-[var(--color-primary)] text-[var(--color-paper)]">
            A tant saree on the loom in Phulia, West Bengal
          </p>
        </Rise>

        {/* Figure */}
        <Rise delay={0.12} className={`${tile} lg:col-span-3 lg:row-span-3 bg-[var(--color-primary)] text-[var(--color-paper)] justify-between gap-6 min-h-[44vw] lg:min-h-0`}>
          <p className="t-head text-[var(--color-accent)]">30%</p>
          <p className="t-body">less capital locked in dead stock</p>
        </Rise>

        {/* List */}
        <Rise delay={0.16} className={`${tile} lg:col-span-3 lg:row-span-3 bg-[var(--color-accent)] text-[var(--color-primary)] justify-between gap-6`}>
          <p className="t-small font-medium">Out of the box</p>
          <ul className="t-body space-y-1.5">
            <li>Real-time SKU tracking</li>
            <li>Dead-stock alerts</li>
            <li>Store and online in sync</li>
            <li>Billing in under 20 seconds</li>
          </ul>
        </Rise>

        {/* Sentences */}
        <Rise className={`${tile} col-span-2 lg:col-span-6 lg:row-span-3 bg-[var(--color-paper)] text-[var(--color-primary)]`}>
          <h3 className="t-lead max-w-[22ch]">Procurement without guesswork.</h3>
          <p className="t-body mt-3 max-w-[40ch]">Buy from real demand trends instead of last season's gut feel, and stop locking cash into stock that won't move.</p>
        </Rise>
        <Rise delay={0.08} className={`${tile} col-span-2 lg:col-span-3 lg:row-span-3 bg-[var(--color-marigold)] text-[var(--color-primary)]`}>
          <h3 className="t-lead">Faster stores.</h3>
          <p className="t-body mt-3">Mobile checkout clears the billing queue up to three times faster.</p>
        </Rise>
        <Rise delay={0.16} className={`${tile} col-span-2 lg:col-span-3 lg:row-span-3 bg-[#4A141D] text-[var(--color-paper)]`}>
          <h3 className="t-lead">Customers who come back.</h3>
          <p className="t-body mt-3">Follow-ups use purchase history, size profile and loyalty perks.</p>
        </Rise>
        <Rise className={`${tile} col-span-2 lg:col-span-6 lg:row-span-3 bg-[var(--color-primary)] text-[var(--color-paper)]`}>
          <h3 className="t-lead">One source of truth.</h3>
          <p className="t-body mt-3 max-w-[40ch]">No more reconciling separate tools, ERPs and spreadsheets by hand at the end of the month.</p>
        </Rise>
        <Rise delay={0.08} className="col-span-2 lg:col-span-6 lg:row-span-3 min-h-[60vw] lg:min-h-0">
          <img
            src="/ca58058f-dd88-4dc3-acef-ab4d5651d156.jpg"
            alt="A saree store with silk sarees draped on mannequins and stacked on shelves"
            width="896" height="1200" loading="lazy"
            className="w-full h-full object-cover"
          />
        </Rise>
      </div>
    </Chapter>
  );
}
