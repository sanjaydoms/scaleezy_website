import React from 'react';
import { Reveal } from './motion';
const QUESTIONS = [{
  question: 'Is Scaleezy only for apparel?',
  answer: 'Scaleezy is designed around the workflows, variants, customer journeys, and operational rhythms of apparel commerce — from independent boutiques to multi-location fashion businesses.'
}, {
  question: 'Does it work with existing POS systems?',
  answer: 'Yes. Scaleezy is built to fit into the way your business works today, helping teams connect essential sales and operations data as they move forward.'
}, {
  question: 'How long does onboarding take?',
  answer: 'Onboarding is shaped around the complexity of your catalog and operations. Our team works with you on a clear rollout plan that keeps your business moving.'
}, {
  question: 'Is Virtual Try-On included?',
  answer: 'Virtual Try-On can be included as part of a Scaleezy platform plan, giving customers a more confident way to explore products before purchase.'
}, {
  question: 'Can I migrate my current inventory?',
  answer: 'Yes. Scaleezy supports a structured inventory migration so your product data, variants, and stock records can move into one connected operating system.'
}];
export function FAQ() {
  return <section className="w-full bg-cream-warm py-24 text-forest md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 md:grid-cols-[0.75fr_1.25fr] md:gap-20 md:px-12">
        <Reveal>
          <p className="eyebrow text-lime-dark">FAQ</p>
          <h2 className="font-serif-display mt-5 max-w-md text-5xl leading-[0.98] md:text-7xl">
            Questions, answered clearly.
          </h2>
        </Reveal>
        <div className="border-t border-forest/15">
          {QUESTIONS.map((item) => <details key={item.question} className="group border-b border-forest/15 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-dark">
                {item.question}
                <span aria-hidden="true" className="text-2xl font-light transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pt-4 text-base font-light leading-relaxed text-forest/70">
                {item.answer}
              </p>
            </details>)}
        </div>
      </div>
    </section>;
}