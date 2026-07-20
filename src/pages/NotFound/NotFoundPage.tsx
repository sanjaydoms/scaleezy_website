import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
export function NotFoundPage() {
  return (
    <main className="flex min-h-screen w-full items-center bg-forest-deep px-6 py-28 text-cream md:px-12">
      <div className="mx-auto w-full max-w-3xl">
        <p className="eyebrow text-lime">404 · Page not found</p>
        <h1 className="font-serif-display mt-6 text-6xl leading-[0.9] tracking-[-0.04em] md:text-8xl">
          This path doesn&apos;t lead to the platform.
        </h1>
        <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-cream/75">
          The page you were looking for may have moved. Return to Scaleezy to
          explore the connected apparel commerce platform.
        </p>
        <Link
          to="/"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3.5 text-sm font-medium text-forest-deep transition-colors hover:bg-lime-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-forest-deep">
          
          Return home
          <ArrowRightIcon
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          
        </Link>
      </div>
    </main>);

}