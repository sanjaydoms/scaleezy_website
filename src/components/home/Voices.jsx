import React from 'react';
import { Chapter, Rise } from './Chapter';

// Placeholder testimonials carried over from the previous design; replace with real customers before launch
const QUOTES = [
  { name: 'Ananya Sharma', role: 'Founder, The Silk Route Boutique', quote: 'Our dead stock dropped by 30% in two quarters, and the clienteling tools turn first-time shoppers into regulars.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=320&q=70' },
  { name: 'Vikram Singh', role: 'Operations Head, Loom & Weave', quote: 'We run our Shopify store and the boutique from one dashboard. It saves us twenty hours a week of manual entry.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&q=70' },
  { name: 'Priya Patel', role: 'CEO, Urban Threads Atelier', quote: 'Finally a system that understands apparel. Size matrices and barcode generation save our wholesale team every week.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=320&q=70' },
  { name: "Timothée D'Origny", role: 'Creative Director, Maison Nouvelle', quote: 'Digital tech packs and the fabric sourcing matrix cut our sample development time by 40%.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320&q=70' },
  { name: 'Elena Rodriguez', role: 'E-commerce Director, Moda Bella', quote: 'Virtual try-on lifted our online conversion by 42%. Customers buy premium pieces with confidence.', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=320&q=70' },
  { name: 'Marcus Chen', role: 'CMO, Thread & Co.', quote: 'The right lookbook goes to the right client automatically, and our repeat rate has doubled.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=320&q=70' },
  { name: 'Sophie Laurent', role: 'Merchandising Lead, Atelier Parisienne', quote: 'Stock between our flagship boutiques and wholesale allocations finally matches.', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=320&q=70' },
  { name: 'Amara Johnson', role: 'Head of Retail, Savannah & Oak', quote: 'When a regular walks in, the team already knows her sizes and the cuts she likes.', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=320&q=70' },
];

export default function Voices() {
  return (
    <Chapter bg="var(--color-maroon)" ink="light" className="py-28 lg:py-36">
      <div className="wrap">
        <Rise as="h2" className="font-medium tracking-[-0.05em] leading-[0.9] text-[clamp(3.5rem,10vw,10rem)]">In their words</Rise>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-[8vw] gap-y-16">
          {QUOTES.map((q, i) => (
            <Rise as="figure" key={q.name} delay={0.06 * (i % 2)} className={`flex gap-5 items-start ${i % 2 ? 'md:mt-28' : ''}`}>
              <img src={q.avatar} alt="" width="320" height="400" loading="lazy" className="w-20 sm:w-24 aspect-[4/5] object-cover shrink-0" />
              <div>
                <blockquote className="t-lead">“{q.quote}”</blockquote>
                <figcaption className="t-small mt-4">{q.name}, {q.role}</figcaption>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </Chapter>
  );
}
