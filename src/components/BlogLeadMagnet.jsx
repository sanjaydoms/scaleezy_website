import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, CheckCircle2, Lock, ArrowUpRight, Sparkles } from 'lucide-react';
import { submitNewsletter } from '../lib/supabase';

// Copy for the small line under the form, by how close the reader is to buying.
const STAGE_NOTE = {
  awareness: 'Free. We also send one practical retail note a week. Unsubscribe any time.',
  consideration: 'Free. Includes our weekly note on choosing and running boutique software.',
  decision: 'Free. A Scaleezy specialist may follow up once to offer a walkthrough.'
};

// Fires a lightweight analytics event if a tag manager or gtag is present; silent otherwise.
function track(event, payload) {
  try {
    if (typeof window === 'undefined') return;
    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event, ...payload });
    if (typeof window.gtag === 'function') window.gtag('event', event, payload);
  } catch {
    // analytics must never break the page
  }
}

/**
 * Inline, email-gated lead magnet shown mid-article.
 * The checklist content lives in the post data (`post.leadMagnet.items`) and is revealed after the
 * reader leaves an email, which is stored in the newsletter_subscribers table.
 */
export default function BlogLeadMagnet({ magnet, stage = 'awareness', module = 'platform', slug }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | done | error

  if (!magnet) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clean = email.trim();
    if (!clean) return;
    setStatus('submitting');
    try {
      await submitNewsletter(clean);
      setStatus('done');
      track('lead_magnet_unlock', { magnet: magnet.title, stage, module, slug });
    } catch (err) {
      console.error('Lead magnet subscribe error:', err);
      setStatus('error');
    }
  };

  const requestHref = module && module !== 'platform' ? `/request-access?module=${module}` : '/request-access';

  return (
    <aside
      className="not-prose my-10 sm:my-12 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-white shadow-sm overflow-hidden"
      aria-labelledby="lead-magnet-title"
    >
      <div className="p-6 sm:p-7">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0">
            <Download size={14} />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-primary)]">
            Free resource
          </span>
        </div>

        <h3 id="lead-magnet-title" className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-charcoal)] mb-2">
          {magnet.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
          {magnet.desc}
        </p>

        {status === 'done' ? (
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800 mb-4">
              <CheckCircle2 size={18} className="text-emerald-600" />
              <span>Unlocked. Here is your {magnet.title.toLowerCase()}.</span>
            </div>
            <ol className="space-y-2.5 text-sm sm:text-base text-gray-800">
              {magnet.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white border border-emerald-200 text-[var(--color-primary)] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="flex-1 leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 pt-5 border-t border-emerald-100 flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="text-sm text-gray-700 flex-1">
                Want this done for you inside the software?
              </p>
              <Link
                to={requestHref}
                onClick={() => track('lead_magnet_cta_click', { magnet: magnet.title, stage, module, slug })}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold hover:bg-emerald-900 transition-colors"
              >
                <span>Request access</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {/* Blurred preview of the first few items so the reader sees what they get */}
            <ul className="space-y-2 mb-5 select-none" aria-hidden="true">
              {magnet.items.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-white border border-emerald-200 text-[var(--color-primary)] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className={i === 0 ? 'flex-1' : 'flex-1 blur-[3px] opacity-70'}>{item}</span>
                </li>
              ))}
              <li className="flex items-center gap-2 text-xs text-gray-500 pl-8">
                <Lock size={12} />
                <span>{magnet.items.length - 3 > 0 ? `${magnet.items.length - 3} more items` : 'Full list'} unlocked with your email</span>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <label htmlFor={`lead-magnet-email-${slug}`} className="sr-only">Email address</label>
              <input
                id={`lead-magnet-email-${slug}`}
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourboutique.com"
                className="flex-1 px-4 py-3 rounded-full bg-white border border-black/12 text-sm text-[var(--color-charcoal)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-6 py-3 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold hover:bg-emerald-900 disabled:opacity-60 transition-colors inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Sparkles size={14} />
                <span>{status === 'submitting' ? 'Unlocking…' : 'Unlock the list'}</span>
              </button>
            </form>
            {status === 'error' && (
              <p className="mt-2 text-xs text-red-600" role="alert">
                Something went wrong. Please try again in a moment.
              </p>
            )}
            <p className="mt-2.5 text-[11px] text-gray-500">{STAGE_NOTE[stage] || STAGE_NOTE.awareness}</p>
          </div>
        )}
      </div>
    </aside>
  );
}
