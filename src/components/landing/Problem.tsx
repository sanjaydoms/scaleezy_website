import React from 'react';
import {
  AlertTriangleIcon,
  ArchiveXIcon,
  BoxesIcon,
  MegaphoneOffIcon,
  UserRoundXIcon,
  UsersRoundIcon,
} from 'lucide-react';
import { Reveal } from '../motion';

const BOTTLENECKS = [
  { label: 'Disconnected inventory', icon: BoxesIcon },
  { label: 'Manual CRM', icon: UsersRoundIcon },
  { label: 'Dead stock', icon: ArchiveXIcon },
  { label: 'Generic marketing', icon: MegaphoneOffIcon },
  { label: 'Poor customer experience', icon: UserRoundXIcon },
  { label: 'Lost revenue', icon: AlertTriangleIcon },
];

export function Problem() {
  return (
    <section className="w-full bg-cream py-24 text-forest md:py-36">
      <div className="mx-auto max-w-[1080px] px-6 md:px-12">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-lime-dark/50 px-4 py-2 text-lime-dark">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-lime-dark" />
            The problem
          </p>
          <h2 className="mt-6 text-5xl font-semibold leading-[0.94] tracking-[-0.045em] md:text-7xl">
            Apparel commerce shouldn&apos;t be this complicated.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-20 md:gap-5">
          {BOTTLENECKS.map((item, index) => {
            const Icon = item.icon;
            const isOutcome = index === BOTTLENECKS.length - 1;
            return (
              <Reveal
                key={item.label}
                delay={index * 0.07}
                className={`relative flex min-h-56 flex-col overflow-hidden border p-6 md:min-h-64 md:p-7 ${isOutcome ? 'border-red-200 bg-red-50 text-red-700' : 'border-forest/15 bg-cream-warm/35'}`}
              >
                <span
                  className={`relative inline-flex h-9 w-9 items-center justify-center rounded-lg ${isOutcome ? 'bg-red-100 text-red-600' : 'bg-lime/25 text-forest'}`}
                >
                  <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                </span>

                <div className="relative mt-auto pt-12">
                  <span
                    aria-hidden="true"
                    className={`mb-4 block h-px w-8 ${isOutcome ? 'bg-red-300' : 'bg-lime-dark/55'}`}
                  />
                  <h3 className="max-w-[13rem] text-xl font-medium leading-snug tracking-[-0.025em] md:text-2xl">
                    {item.label}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mx-auto mt-12 max-w-xl text-center md:mt-16">
          <p className="text-lg leading-relaxed text-forest/70 md:text-xl">
            Every disconnected tool creates another{' '}
            <span className="font-medium text-red-600">operational bottleneck.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
