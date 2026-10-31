import React from 'react';
import { Chapter, Rise } from './Chapter';

// The same product record, one step further along in each field
const STAGES = [
  {
    bg: 'var(--color-accent)', ink: 'dark', logo: 'mono',
    clause: 'First, it arrives.',
    detail: 'Intelligent procurement: every fabric lot and wholesale delivery is logged before a customer sees a piece.',
    status: 'Received', rows: [['Lot', '#7728, 120 pcs'], ['Warehouse', 'Central, Surat']],
  },
  {
    bg: 'var(--color-maroon)', ink: 'light',
    clause: 'Then it is everywhere.',
    detail: 'Omnichannel visibility: the website, Instagram and the store counter go live together. No double entry, no overselling.',
    status: 'Listed', rows: [['Lot', '#7728, 120 pcs'], ['Channels', 'Web, Instagram, POS']],
  },
  {
    bg: 'var(--color-marigold)', ink: 'dark',
    clause: 'Then it finds her.',
    detail: "The perfect match: staff see the client's size history and wishlist the moment she walks in.",
    status: 'Sold', rows: [['Channels', 'Web, Instagram, POS'], ['Client', 'Priya S., size M']],
  },
  {
    bg: 'var(--color-primary)', ink: 'light',
    clause: 'Then she comes back.',
    detail: 'A festive preview goes to her on WhatsApp, matched to what she bought and what she tried on.',
    status: 'Repeat', rows: [['Client', 'Priya S., size M'], ['Follow-up', 'Diwali preview sent']],
  },
];

function RecordCard({ stage }) {
  return (
    <div data-ui className="w-[260px] max-w-full bg-white text-[var(--color-charcoal)] p-4 text-[15px] leading-snug transition-transform duration-150 group-hover:-translate-y-1.5">
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-medium">KR-2041</span>
        <span className="px-2 py-0.5 bg-[var(--color-primary)] text-[var(--color-accent)] text-[13px]">{stage.status}</span>
      </div>
      <p className="mt-1 text-black/60">Cotton kurta, Haldi yellow</p>
      <dl className="mt-3 pt-3 border-t border-black/10 space-y-1">
        {stage.rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-3">
            <dt className="text-black/60">{k}</dt>
            <dd className="text-right">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function KurtaJourney() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {STAGES.map((s, i) => (
        <Chapter
          key={s.clause}
          bg={s.bg}
          ink={s.ink}
          logo={s.logo}
          className="group min-h-[64svh] xl:min-h-[84svh] p-[var(--margin)] pt-24 flex flex-col"
        >
          {i === 0 && <Rise as="h2" className="t-lead mb-8">One kurta's journey</Rise>}
          <Rise delay={0.08 * i} className="mt-auto mb-auto py-10">
            <RecordCard stage={s} />
          </Rise>
          <Rise delay={0.08 * i + 0.08}>
            <p className="t-lead max-w-[16ch]">{s.clause}</p>
            <p className="t-small mt-3 max-w-[34ch]">{s.detail}</p>
          </Rise>
        </Chapter>
      ))}
    </div>
  );
}
