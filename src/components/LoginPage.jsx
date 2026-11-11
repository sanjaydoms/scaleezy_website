import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';
import { BrandPatternAtelier } from './BrandPattern';
import usePageMeta from './usePageMeta';

// Each Scaleezy product has its own workspace login. This page routes owners and
// staff to the right app instead of collecting credentials the website cannot verify.
const WORKSPACES = [
  {
    name: 'Inventory',
    desc: 'Stock, barcodes & purchase orders',
    url: 'https://inventory.scaleezy.com/'
  },
  {
    name: 'Boutique',
    desc: 'Bespoke orders, measurements & fittings',
    url: 'https://boutique.scaleezy.com/'
  },
  {
    name: 'Marketing',
    desc: 'WhatsApp campaigns & automations',
    url: 'https://marketing.scaleezy.com/'
  },
  {
    name: 'Tryon2buy',
    desc: 'AI virtual try-on studio',
    url: 'https://www.tryon2buy.com/'
  }
];

const COMING_SOON = ['POS', 'CRM', 'Analytics', 'Billing Desk', 'Logistics'];

export default function LoginPage() {
  usePageMeta(
    'Sign In to Scaleezy — Fashion Retail Operating System',
    'Open your Scaleezy workspace: Inventory, Boutique, Marketing or Tryon2buy. New store? Request platform access.'
  );

  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 relative overflow-hidden">
      <BrandPatternAtelier opacity={0.08} size={380} />

      <div className="max-w-md w-full mx-auto relative z-10 my-auto">

        {/* Top Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <img
              src="/assets/logo.png"
              alt="Scaleezy"
              width="180"
              height="30"
              className="h-8 w-auto mx-auto object-contain"
            />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-primary)] mb-2">
            Open your workspace
          </h1>
          <p className="text-sm text-gray-700">
            Sign in happens inside your Scaleezy product. Pick yours below.
          </p>
        </div>

        {/* Workspace launcher */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-5 sm:p-7 rounded-3xl border border-black/10 shadow-xl"
        >
          <ul className="space-y-3">
            {WORKSPACES.map((ws) => (
              <li key={ws.name}>
                <a
                  href={ws.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 p-4 rounded-2xl border border-black/10 hover:border-[var(--color-primary)]/40 hover:bg-emerald-50/50 transition-colors"
                >
                  <span>
                    <span className="block text-sm font-semibold text-[var(--color-primary)]">
                      {ws.name === 'Tryon2buy' ? 'Tryon2buy' : `Scaleezy ${ws.name}`}
                    </span>
                    <span className="block text-xs text-gray-600 mt-0.5">{ws.desc}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-black/30 group-hover:text-[var(--color-primary)] transition-colors"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-start gap-2 text-xs text-gray-600 bg-[var(--color-soft-cream)] rounded-xl p-3.5">
            <Clock size={14} className="shrink-0 mt-0.5 text-gray-500" />
            <span>
              {COMING_SOON.join(', ')} workspaces are rolling out soon. Multi-tenant stores sign
              in on their own domain (e.g. yourbrand.scaleezy.com).
            </span>
          </div>

          {/* New to Scaleezy banner */}
          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs sm:text-sm text-gray-600 mb-3">
              Don't have a Scaleezy store workspace yet?
            </p>
            <Link
              to="/request-access"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-50 text-[var(--color-primary)] font-semibold text-sm hover:bg-emerald-100 transition-colors border border-emerald-700/25 shadow-xs"
            >
              <span>Request Platform Access</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

        {/* Security Assurance */}
        <div className="mt-6 text-center text-xs text-gray-600 flex items-center justify-center gap-2">
          <ShieldCheck size={14} className="text-emerald-700" />
          <span>256-bit encrypted enterprise cloud infrastructure</span>
        </div>
      </div>

      {/* Mini Footer */}
      <div className="max-w-md w-full mx-auto text-center text-xs text-gray-500 pt-6">
        <span>© {new Date().getFullYear()} Scaleezy. Need assistance? </span>
        <a href="mailto:support@scaleezy.com" className="text-[var(--color-primary)] font-medium hover:underline">
          Contact Support
        </a>
      </div>
    </div>
  );
}
