import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Chapter, Rise } from './Chapter';

// Placeholder INR prices; annual is 20% below monthly
const PLANS = [
  {
    name: 'Boutique & Atelier',
    who: 'Single boutiques, designer studios and new labels.',
    monthly: 2499, annual: 1999,
    features: ['1 store or online shop', 'Real-time SKU inventory and barcodes', 'Mobile POS and fast billing', 'Customer profiles and style notes', 'Size matrix reports and reorder alerts', 'Daily revenue and dead-stock reports', 'WhatsApp and email support'],
    cta: 'Book a demo',
    bg: 'var(--color-paper)', strip: '#DEDCD3', ink: 'var(--color-primary)', height: 'lg:min-h-[520px]',
  },
  {
    name: 'Omnichannel Growth',
    who: 'Growing brands, multi-store retailers and apparel chains.',
    monthly: 5999, annual: 4799,
    features: ['Up to 5 stores and a central warehouse', 'Virtual try-on studio, 1,500 runs a month', 'Predictive stock replenishment', 'Clienteling and VIP loyalty', 'Shopify, web and POS in sync', 'Split payments, exchanges, store credit', 'Dispatch and courier tracking', 'Priority support and guided onboarding'],
    cta: 'Start with Growth',
    bg: 'var(--color-primary)', strip: 'var(--color-forest-deep)', ink: 'var(--color-paper)', height: 'lg:min-h-[640px]',
  },
  {
    name: 'Enterprise Couture',
    who: 'National chains, textile groups and garment manufacturers.',
    monthly: null, annual: null,
    features: ['Unlimited stores, warehouses and franchises', 'Custom try-on models and 3D assets', 'Tech packs and batch sourcing', 'B2B wholesale portal and line sheets', 'ERP, SAP and Tally connectors', 'Role-based staff permissions', 'Dedicated account director and training', '99.99% uptime SLA and data governance'],
    cta: 'Talk to sales',
    bg: 'var(--color-maroon)', strip: '#3F1018', ink: 'var(--color-paper)', height: 'lg:min-h-[800px]',
  },
];

export default function PricingSteps() {
  const [annual, setAnnual] = useState(true);
  return (
    <Chapter bg="var(--color-stone)" className="py-28 lg:py-36">
      <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-2 items-end">
        <div className="lg:col-span-8 lg:row-start-1 lg:col-start-1 self-start pb-10">
          <Rise as="h2" className="t-head max-w-[12ch]">Plans that grow with you.</Rise>
          <Rise delay={0.08} className="mt-8 flex items-center gap-4">
            <span className="t-body">Monthly</span>
            <button
              type="button"
              role="switch"
              aria-checked={annual}
              aria-label="Bill annually"
              onClick={() => setAnnual(a => !a)}
              className="relative w-14 h-8 bg-[var(--color-primary)]"
            >
              <span className={`absolute top-1 left-1 w-6 h-6 bg-[var(--color-accent)] transition-transform duration-200 ${annual ? 'translate-x-6' : ''}`} />
            </button>
            <span className="t-body">Annually, save 20%</span>
          </Rise>
        </div>

        {PLANS.map((p, i) => (
          <Rise
            key={p.name}
            delay={0.08 * i}
            className={`lg:col-span-4 ${['lg:col-start-1 lg:row-start-2', 'lg:col-start-5 lg:row-start-2', 'lg:col-start-9 lg:row-start-1 lg:row-span-2'][i]} ${p.height} flex flex-col`}
            style={{ backgroundColor: p.bg, color: p.ink }}
          >
            <div className="p-7 flex-1">
              <h3 className="t-lead">{p.name}</h3>
              <p className="t-small mt-2 max-w-[34ch]">{p.who}</p>
              <p className="mt-6 font-medium tracking-[-0.04em] leading-none text-[clamp(2.75rem,3.6vw,3.5rem)] tabular-nums">
                {p.monthly ? `₹${(annual ? p.annual : p.monthly).toLocaleString('en-IN')}` : 'Custom'}
              </p>
              <p className="t-small mt-2">{p.monthly ? `a month${annual ? ', billed annually' : ''}` : 'Priced to your stores and volume'}</p>
              <ul className="mt-6 space-y-1.5 t-body">
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <Link
              to="/book-a-demo"
              className="flex items-center h-16 px-7 font-medium underline-offset-4 transition-[padding] duration-150 hover:pl-9 hover:underline"
              style={{ backgroundColor: p.strip }}
            >
              {p.cta}
            </Link>
          </Rise>
        ))}
      </div>
      <p className="wrap t-small mt-6">Prices are indicative and exclude GST.</p>
    </Chapter>
  );
}
