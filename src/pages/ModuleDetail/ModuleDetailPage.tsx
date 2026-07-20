import React, { lazy } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, MoveLeftIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  getModuleById,
  getRelatedModules,
  type PlatformModule } from
'../../components/moduleData';
import { EASE, Reveal } from '../../components/motion';
import { NotFoundPage } from '../NotFound/NotFoundPage';
export function ModuleDetailPage() {
  const { moduleId } = useParams<{
    moduleId: string;
  }>();
  const module = getModuleById(moduleId);
  if (!module) {
    return <NotFoundPage />;
  }
  return <ModuleDetailContent module={module} />;
}
type ModuleDetailContentProps = {
  module: PlatformModule;
};
function ModuleDetailContent({ module }: ModuleDetailContentProps) {
  const relatedModules = getRelatedModules(module.id);
  const Icon = module.icon;
  return (
    <div className="w-full bg-cream text-forest">
      <main>
        <section className="relative isolate flex min-h-[46rem] w-full items-end overflow-hidden bg-forest-deep text-cream md:min-h-[48rem]">
          <motion.img
            src={module.image}
            alt={module.alt}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            initial={{
              scale: 1.08
            }}
            animate={{
              scale: 1
            }}
            transition={{
              duration: 1.5,
              ease: EASE
            }} />
          
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-forest-deep/75" />
          
          <div className="mx-auto w-full max-w-[1600px] px-6 pb-20 pt-40 md:px-12 md:pb-24">
            <motion.div
              initial={{
                opacity: 0,
                y: 18
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                ease: EASE
              }}>
              
              <Link
                to="/#platform"
                className="inline-flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-forest-deep">
                
                <MoveLeftIcon aria-hidden="true" className="h-4 w-4" />
                All platform modules
              </Link>
            </motion.div>
            <motion.div
              className="mt-14 max-w-4xl"
              initial={{
                opacity: 0,
                y: 32
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.9,
                ease: EASE,
                delay: 0.1
              }}>
              
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-lime/30 bg-forest-deep/60 text-lime">
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5"
                  strokeWidth={1.8} />
                
              </span>
              <p className="eyebrow mt-8 text-lime">{module.eyebrow}</p>
              <h1 className="font-serif-display mt-5 text-6xl leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-9xl">
                {module.name}
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-cream/80 md:text-xl">
                {module.description}
              </p>
              <div className="mt-9 border-l-2 border-lime pl-4">
                <p className="eyebrow text-[0.6rem] text-cream/55">Best for</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/85 md:text-base">
                  {module.bestFor}
                </p>
              </div>
              {module.id === 'inventory' ? (
                <Link
                  to="/platform/inventory/workspace"
                  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3.5 text-sm font-medium text-forest-deep transition-colors hover:bg-lime-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-forest-deep"
                >
                  See the workspace
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              ) : (
                <a
                  href="#module-tour"
                  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3.5 text-sm font-medium text-forest-deep transition-colors hover:bg-lime-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-forest-deep"
                >
                  See the workspace
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              )}
            </motion.div>
          </div>
        </section>

        <section
          id="module-capabilities"
          className="w-full bg-cream py-24 md:py-36">
          
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <Reveal className="grid gap-8 md:grid-cols-[0.82fr_1.18fr] md:gap-16">
              <div>
                <p className="eyebrow text-lime-dark">Made for everyday work</p>
                <h2 className="font-serif-display mt-5 max-w-lg text-5xl leading-[0.96] tracking-[-0.035em] md:text-7xl">
                  The details that keep apparel operations moving.
                </h2>
              </div>
              <p className="max-w-xl self-end text-lg font-light leading-relaxed text-forest/70">
                {module.subtitle} Scaleezy gives teams a shared operating rhythm
                without asking them to switch between disconnected tools or lose
                the context behind a customer, garment, or order.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-px overflow-hidden border border-forest/15 bg-forest/15 md:grid-cols-2">
              {module.capabilities.map((capability, index) =>
              <Reveal
                key={capability.title}
                delay={index * 0.07}
                className="min-h-[17rem] bg-cream p-7 md:p-9">
                
                  <span className="text-sm font-medium tracking-[0.18em] text-lime-dark">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-12 text-2xl font-medium leading-tight tracking-[-0.03em] md:text-3xl">
                    {capability.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-forest/65 md:text-base">
                    {capability.description}
                  </p>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        <ProductTour module={module} />
        <ModuleWorkflows module={module} />

        <section className="w-full bg-forest py-24 text-cream md:py-32">
          <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-12">
            <Reveal>
              <p className="eyebrow text-lime">A clearer outcome</p>
              <p className="font-serif-display mt-5 text-7xl leading-none tracking-[-0.06em] text-lime md:text-9xl">
                {module.proof.value}
              </p>
              <h2 className="mt-4 text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                {module.proof.label}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-2xl font-light leading-snug text-cream/82 md:text-4xl">
                {module.proof.detail}
              </p>
              <ul className="mt-10 grid gap-3 sm:grid-cols-3">
                {module.benefits.map((benefit) =>
                <li
                  key={benefit}
                  className="flex items-center gap-3 border-t border-cream/20 pt-4 text-sm text-cream/75">
                  
                    <CheckIcon
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-lime" />
                  
                    {benefit}
                  </li>
                )}
              </ul>
            </Reveal>
          </div>
        </section>

        <RelatedModules modules={relatedModules} />

        <section className="w-full bg-cream-warm py-24 text-forest md:py-32">
          <Reveal className="mx-auto max-w-4xl px-6 text-center md:px-12">
            <p className="eyebrow text-lime-dark">One connected platform</p>
            <h2 className="font-serif-display mt-5 text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
              {module.cta}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-forest/70 md:text-lg">
              See how this module connects to the rest of your apparel
              operations in a tailored Scaleezy walkthrough.
            </p>
            <a
              href="/#cta"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-4 focus-visible:ring-offset-cream-warm">
              
              Book a demo
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              
            </a>
          </Reveal>
        </section>
      </main>
    </div>);

}
type ProductTourProps = {
  module: PlatformModule;
};
function ProductTour({ module }: ProductTourProps) {
  const Icon = module.icon;
  return (
    <section
      id="module-tour"
      className="w-full overflow-hidden bg-[#edf3ed] py-24 text-forest md:py-36"
      aria-labelledby="module-tour-heading">
      
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-24">
          <Reveal className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-lime-dark/30 bg-lime/15 text-forest">
                <Icon
                  aria-hidden="true"
                  className="h-4 w-4"
                  strokeWidth={1.8} />
                
              </span>
              <p className="eyebrow text-lime-dark">Inside {module.name}</p>
            </div>

            <h2
              id="module-tour-heading"
              className="font-serif-display mt-7 text-5xl leading-[0.94] tracking-[-0.04em] md:text-7xl">
              
              {module.media.title}
            </h2>

            <p className="mt-7 max-w-lg text-lg font-light leading-relaxed text-forest/72 md:text-xl">
              {module.media.description}
            </p>

            <div className="mt-8 border-l-2 border-lime-dark/70 pl-5">
              <p className="eyebrow text-[0.6rem] text-forest/50">Built for</p>
              <p className="mt-2 text-sm leading-relaxed text-forest/72 md:text-base">
                {module.bestFor}
              </p>
            </div>

            <ol className="mt-10 border-t border-forest/15">
              {module.media.tourPoints.map((point, index) =>
              <li
                key={point.label}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-forest/15 py-5">
                
                  <span
                  aria-hidden="true"
                  className="font-serif-display text-3xl leading-none text-lime-dark">
                  
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="eyebrow text-[0.6rem] text-forest/45">
                      {point.label}
                    </p>
                    <h3 className="mt-2 text-lg font-medium tracking-[-0.025em] md:text-xl">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest/65">
                      {point.description}
                    </p>
                  </div>
                </li>
              )}
            </ol>
          </Reveal>

          <Reveal
            delay={0.12}
            className="relative flex min-h-[22rem] items-center py-10 lg:min-h-[32rem] lg:justify-self-end lg:w-full lg:py-14">
            
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[105%] w-[105%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/25" />
            
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-dark/35" />
            
            <figure className="relative w-full border border-forest/20 bg-cream p-3 shadow-[0_24px_55px_rgba(15,61,46,0.14)] md:p-5">
              <div className="flex items-center justify-between border-b border-forest/15 px-1 pb-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-forest/50 md:px-2 md:pb-4">
                <span>Scaleezy workspace</span>
                <span className="text-lime-dark">{module.name}</span>
              </div>
              <div className="mt-3 overflow-hidden bg-cream-warm md:mt-5">
                <img
                  src={module.media.image}
                  alt={module.media.alt}
                  className="aspect-[16/10] h-full w-full object-cover object-top"
                  loading="lazy" />
                
              </div>
              <figcaption className="flex items-start gap-3 px-1 pt-4 md:px-2 md:pt-5">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-dark" />
                
                <p className="text-sm leading-relaxed text-forest/65">
                  One connected view for the decisions that move{' '}
                  {module.name.toLowerCase()} forward.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {module.media.supportingVisual &&
        <Reveal className="mt-12 grid overflow-hidden border border-forest/15 bg-cream lg:grid-cols-[0.78fr_1.22fr]">
            <div className="p-7 md:p-9">
              <p className="eyebrow text-lime-dark">Connected context</p>
              <h3 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
                {module.media.supportingVisual.title}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-forest/68 md:text-base">
                {module.media.supportingVisual.description}
              </p>
            </div>
            <div className="border-t border-forest/15 bg-cream-warm p-4 lg:border-l lg:border-t-0 md:p-6">
              <img
              src={module.media.supportingVisual.image}
              alt={module.media.supportingVisual.alt}
              className="h-full w-full object-cover object-top shadow-[0_12px_30px_rgba(15,61,46,0.10)]"
              loading="lazy" />
            
            </div>
          </Reveal>
        }
      </div>
    </section>);

}
type ModuleWorkflowsProps = {
  module: PlatformModule;
};
function ModuleWorkflows({ module }: ModuleWorkflowsProps) {
  return (
    <section className="w-full bg-cream py-24 text-forest md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal className="grid gap-8 md:grid-cols-[0.82fr_1.18fr] md:gap-16">
          <div>
            <p className="eyebrow text-lime-dark">
              Made for the moments that matter
            </p>
            <h2 className="font-serif-display mt-5 max-w-lg text-5xl leading-[0.96] tracking-[-0.035em] md:text-7xl">
              Practical workflows for real apparel teams.
            </h2>
          </div>
          <div className="self-end border-l-2 border-lime-dark/60 pl-5">
            <p className="eyebrow text-forest/50">Best for</p>
            <p className="mt-2 max-w-xl text-lg font-light leading-relaxed text-forest/75 md:text-xl">
              {module.bestFor}
            </p>
          </div>
        </Reveal>

        <ol className="mt-16 grid gap-5 lg:grid-cols-3">
          {module.workflows.map((workflow, index) =>
          <Reveal
            key={workflow.title}
            as="li"
            delay={index * 0.08}
            className="flex min-h-[20rem] flex-col border border-forest/15 bg-[#edf3ed] p-7 md:p-8">
            
              <span className="eyebrow text-[0.6rem] text-lime-dark">
                {String(index + 1).padStart(2, '0')} · Everyday workflow
              </span>
              <h3 className="mt-12 text-2xl font-medium leading-tight tracking-[-0.03em] md:text-3xl">
                {workflow.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-forest/68 md:text-base">
                {workflow.description}
              </p>
            </Reveal>
          )}
        </ol>
      </div>
    </section>);

}
type RelatedModulesProps = {
  modules: PlatformModule[];
};
function RelatedModules({ modules }: RelatedModulesProps) {
  return (
    <section className="w-full bg-[#edf3ed] py-24 text-forest md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-lime-dark">Continue exploring</p>
            <h2 className="font-serif-display mt-5 text-5xl leading-[0.95] tracking-[-0.035em] md:text-7xl">
              Related modules, working in concert.
            </h2>
          </div>
          <Link
            to="/#platform"
            className="group inline-flex w-fit items-center gap-2 border-b border-forest/30 pb-1.5 text-sm font-medium transition-colors hover:border-lime-dark hover:text-lime-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-dark focus-visible:ring-offset-4">
            
            View all modules
            <ArrowRightIcon
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Reveal
                key={module.id}
                delay={index * 0.08}
                className="flex h-full flex-col border border-forest/15 bg-cream p-6 md:p-7">
                
                <div className="flex items-start justify-between gap-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime/20 text-forest">
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.7} />
                    
                  </span>
                  <span className="eyebrow text-[0.6rem] text-forest/45">
                    {module.eyebrow}
                  </span>
                </div>
                <h3 className="mt-12 text-2xl font-medium tracking-[-0.03em]">
                  {module.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-forest/65">
                  {module.cardSummary}
                </p>
                <Link
                  to={`/platform/${module.id}`}
                  className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-forest/25 px-4 py-2 text-sm font-medium text-forest transition-colors hover:border-forest hover:bg-forest hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-dark focus-visible:ring-offset-4">
                  
                  Explore now
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  
                </Link>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}