import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// The wordmark built from blocks: "scale" on lime, "ezy" on paper, as in the logo
const LETTERS = [
  ['s', 78], ['c', 92], ['a', 70], ['l', 100], ['e', 84],
  ['e', 66], ['z', 88], ['y', 74],
];

const COLUMNS = [
  { heading: 'Product', links: [['Inventory', '/modules'], ['CRM', '/modules'], ['Virtual try-on', '/modules'], ['Marketing', '/modules']] },
  { heading: 'Company', links: [['About', '/about-scaleezy'], ['How it works', '/how-it-works'], ['Solutions', '/solutions'], ['Book a demo', '/book-a-demo']] },
  { heading: 'Read', links: [['Blog', '/blogs']] },
];

const CREDITS = [
  '“Shelves from a Saree shop” by screaming_monkey, CC BY-SA 2.0',
  '“India - Varanasi fabric market - 1723” by Jorge Royan, CC BY-SA 3.0',
  '“Saree Weaving by Handloom 2” by Pranayraj1985, CC BY-SA 4.0',
  '“Paharganj Market Tailor Shop” by Pallav.journo, CC BY-SA 4.0',
  '“India - Colours of India - 004 - Suit shop” by McKay Savage, CC BY 2.0',
  '“Weaving Tant Saree by Handloom - 2 Natun Phulia” by Biswarup Ganguly, CC BY 3.0',
];

export default function Footer() {
  // No email service is connected yet, so a signup only shows a notice
  const [newsletterNotice, setNewsletterNotice] = useState('');

  return (
    <footer
      data-chapter-bg="var(--color-primary)"
      data-chapter-ink="light"
      className="bg-[var(--color-primary)] text-[var(--color-paper)] pt-24 pb-10"
    >
      <div className="wrap">
        <Link to="/" aria-label="Scaleezy home" className="flex items-end gap-1 h-[22svh] lg:h-[34svh] group">
          {LETTERS.map(([ch, h], i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`flex-1 flex items-end justify-center pb-[1vw] font-medium leading-none text-[clamp(2.5rem,9vw,9rem)] tracking-[-0.04em] text-[var(--color-primary)] transition-transform duration-200 group-hover:-translate-y-1 ${i < 5 ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-paper)]'}`}
              style={{ height: `${h}%`, transitionDelay: `${i * 25}ms` }}
            >
              {ch}
            </span>
          ))}
        </Link>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-x-6 gap-y-10">
          {COLUMNS.map(col => (
            <nav key={col.heading} aria-label={col.heading} className="lg:col-span-2">
              <h2 className="t-small text-[var(--color-accent)]">{col.heading}</h2>
              <ul className="mt-3 space-y-2 t-small">
                {col.links.map(([label, to]) => (
                  <li key={label}><Link to={to} className="hover:underline underline-offset-4">{label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 sm:col-span-3 lg:col-span-5 lg:col-start-8">
            <label htmlFor="footer-newsletter-email" className="t-small text-[var(--color-accent)]">Join the newsletter</label>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterNotice('Newsletter signups open soon. Thanks for your interest!');
              }}
              className="mt-3 flex max-w-md"
            >
              <input
                id="footer-newsletter-email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@yourstore.in"
                className="flex-1 min-w-0 h-12 px-4 bg-[var(--color-forest-deep)] text-[var(--color-paper)] placeholder-white/55 outline-none focus:bg-black/40"
              />
              <button type="submit" className="w-12 h-12 shrink-0 flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-paper)] transition-colors" aria-label="Subscribe to newsletter">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p role="status" className="mt-2 t-small min-h-5">{newsletterNotice}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <p className="t-small max-w-[70ch] text-white/75">
            Photographs and film from Wikimedia Commons: {CREDITS.join('; ')}.
          </p>
          <div className="flex flex-wrap items-center gap-6 t-small shrink-0">
            <Link to="/" className="hover:underline underline-offset-4">Privacy Policy</Link>
            <Link to="/" className="hover:underline underline-offset-4">Terms of Service</Link>
            <span>© {new Date().getFullYear()} Scaleezy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
