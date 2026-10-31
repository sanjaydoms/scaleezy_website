import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Chapter, Rise } from './Chapter';

export default function HomeHero() {
  return (
    <Chapter bg="var(--color-primary)" ink="light" className="min-h-[100svh] flex flex-col pt-18 sm:pt-20">
      <div className="wrap flex-1 flex flex-col justify-between pt-[9vh] pb-[var(--margin)] gap-16">
        <Rise as="h1" className="t-display">
          <span className="block text-[var(--color-accent)]">Every size,</span>
          <span className="block">every store.</span>
        </Rise>

        <div className="md:ml-auto md:w-[min(34rem,40vw)]">
          <Rise as="p" delay={0.08} className="t-lead">
            Scaleezy runs your clothing business in one place: stock by size and colour, billing, customers, marketing and virtual try-on.
          </Rise>
          <Rise delay={0.16} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link to="/book-a-demo" className="btn">
              Book a demo <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/modules" className="link-arrow">See the modules</Link>
          </Rise>
          <Rise as="p" delay={0.24} className="t-small mt-8 text-[var(--color-paper)]">
            Real-time inventory. Billing in under 20 seconds. Ready for one store or fifty.
          </Rise>
        </div>
      </div>
    </Chapter>
  );
}
