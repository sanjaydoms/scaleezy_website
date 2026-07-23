import React from 'react';
import { Link } from 'react-router-dom';
const COLUMNS = [
{
  heading: 'Product',
  links: [
  {
    label: 'Inventory',
    href: '/platform/inventory'
  },
  {
    label: 'CRM',
    href: '/platform/crm'
  },
  {
    label: 'Try-On Studio',
    href: '/platform/try-on-studio'
  },
  {
    label: 'Marketing',
    href: '/platform/marketing'
  },
  {
    label: 'Order Management',
    href: '/platform/product-management'
  },
  {
    label: 'Logistics',
    href: '/platform/logistics'
  }]

},
{
  heading: 'Explore',
  links: [
  {
    label: 'All modules',
    href: '/#platform'
  },
  {
    label: 'How it works',
    href: '/#journey'
  },
  {
    label: 'Industries',
    href: '/#industries'
  },
  {
    label: 'Stories',
    href: '/#stories'
  },
  {
    label: 'Blog',
    href: '/blog'
  }]

},
{
  heading: 'Company',
  links: [
  {
    label: 'About Us',
    href: '/about'
  },
  {
    label: 'Book a demo',
    href: '/#cta'
  },
  {
    label: 'Contact',
    href: '/#cta'
  },
  {
    label: 'Privacy policy',
    href: '/'
  },
  {
    label: 'Terms',
    href: '/'
  }]

}];

export function Footer() {
  return (
    <footer className="w-full border-t border-forest/10 bg-cream text-forest">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="hover:opacity-90 transition-opacity">
              <img src="/logo.png" alt="Scaleezy" className="h-8 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-forest/60">
              The operating system for apparel commerce.
            </p>
          </div>
          {COLUMNS.map((column) =>
          <nav key={column.heading} aria-label={column.heading}>
              <h3 className="eyebrow text-forest/50">{column.heading}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) =>
              <li key={link.label}>
                    {link.href.startsWith('/platform/') || link.href === '/about' || link.href === '/blog' ?
                <Link
                  to={link.href}
                  className="text-sm text-forest/70 transition-colors hover:text-lime-dark">
                  
                        {link.label}
                      </Link> :

                <a
                  href={link.href}
                  className="text-sm text-forest/70 transition-colors hover:text-lime-dark">
                  
                        {link.label}
                      </a>
                }
                  </li>
              )}
              </ul>
            </nav>
          )}
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-forest/10 pt-8 text-xs text-forest/45 md:flex-row">
          <p>© {new Date().getFullYear()} Scaleezy. All rights reserved.</p>
          <p>Designed for apparel businesses, everywhere.</p>
        </div>
      </div>
    </footer>);

}