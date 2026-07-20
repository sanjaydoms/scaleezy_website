import React from 'react';
import {
  ShoppingCartIcon,
  PackageIcon,
  UploadCloudIcon,
  UsersIcon,
  HeartHandshakeIcon,
  MegaphoneIcon,
  SparklesIcon,
  CreditCardIcon,
  TruckIcon,
  GiftIcon } from
'lucide-react';
import { Reveal } from './motion';
const STEPS = [
{
  title: 'Procurement',
  copy: 'Bring every purchase decision into the same operational rhythm.',
  icon: ShoppingCartIcon
},
{
  title: 'Inventory',
  copy: 'Know where every size, colour, and piece belongs.',
  icon: PackageIcon
},
{
  title: 'Product Upload',
  copy: 'Move a collection from catalog to commerce without duplicate work.',
  icon: UploadCloudIcon
},
{
  title: 'Customer',
  copy: 'Keep every preference, purchase, and conversation close to the team.',
  icon: UsersIcon
},
{
  title: 'CRM',
  copy: 'Turn everyday visits into relationships that keep growing.',
  icon: HeartHandshakeIcon
},
{
  title: 'Marketing',
  copy: 'Create thoughtful outreach rooted in what customers actually love.',
  icon: MegaphoneIcon
},
{
  title: 'Virtual Try-On',
  copy: 'Help shoppers feel certain before they purchase.',
  icon: SparklesIcon
},
{
  title: 'Checkout',
  copy: 'Let every detail follow the customer through a simple sale.',
  icon: CreditCardIcon
},
{
  title: 'Delivery',
  copy: 'Carry the same care from package to doorstep.',
  icon: TruckIcon
},
{
  title: 'Retention',
  copy: 'Turn a first purchase into a lasting customer relationship.',
  icon: GiftIcon
}];

const BACKGROUND_MOTIFS = [
{
  icon: ShoppingCartIcon,
  className: 'left-[5%] top-[15%]'
},
{
  icon: PackageIcon,
  className: 'right-[6%] top-[23%]'
},
{
  icon: UsersIcon,
  className: 'left-[10%] top-[42%]'
},
{
  icon: MegaphoneIcon,
  className: 'right-[10%] top-[52%]'
},
{
  icon: CreditCardIcon,
  className: 'left-[5%] top-[69%]'
},
{
  icon: TruckIcon,
  className: 'right-[5%] top-[82%]'
}];

export function Journey() {
  return (
    <section
      id="journey"
      className="relative w-full overflow-hidden bg-[#eff6f0] py-20 text-forest md:py-28">
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        
        <svg
          className="absolute inset-0 h-full w-full text-lime-dark/15"
          viewBox="0 0 1440 1200"
          fill="none"
          preserveAspectRatio="none">
          
          <path
            d="M0 170C220 70 360 300 545 225C730 150 790 55 1020 175C1200 268 1315 185 1440 102"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 12" />
          
          <path
            d="M0 670C185 560 360 770 540 660C710 550 805 770 1000 650C1160 550 1290 710 1440 620"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 12" />
          
          <path
            d="M0 1050C260 960 350 1140 570 1040C760 955 855 1140 1080 1035C1230 965 1350 1015 1440 955"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 12" />
          
        </svg>
        {BACKGROUND_MOTIFS.map((motif) => {
          const Icon = motif.icon;
          return (
            <div
              key={motif.className}
              className={`absolute flex h-20 w-20 items-center justify-center rounded-full border border-forest/10 bg-white/25 text-forest/15 ${motif.className}`}>
              
              <Icon className="h-8 w-8" strokeWidth={1.25} />
            </div>);

        })}
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow inline-flex items-center rounded-full border border-lime-dark/35 bg-white/60 px-3 py-1 text-[0.58rem] text-lime-dark">
            The flow
          </p>
          <h2 className="font-serif-display mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.04em] md:text-7xl">
            How Scaleezy Works
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-forest/65 md:text-base">
            One continuous, connected flow — from procurement to retention.
            Built to help the business move as one.
          </p>
        </Reveal>

        <ol className="relative mx-auto mt-14 max-w-5xl space-y-5 md:mt-20 md:space-y-6">
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-5 top-8 w-px bg-lime-dark/70 md:left-1/2 md:-translate-x-1/2" />
          

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isRight = index % 2 === 1;
            return (
              <Reveal
                key={step.title}
                as="li"
                delay={index * 0.045}
                y={22}
                className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-4 md:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)] md:gap-7">
                
                <div
                  aria-hidden="true"
                  className="relative z-10 col-start-1 flex h-10 w-10 items-center justify-center rounded-full border border-lime-dark/30 bg-white text-lime-dark shadow-[0_4px_12px_rgba(15,61,46,0.10)] md:col-start-2 md:h-11 md:w-11">
                  
                  <Icon className="h-4 w-4 md:h-[1.05rem] md:w-[1.05rem]" />
                </div>

                <article
                  className={`relative col-start-2 w-full rounded-lg border border-forest/15 bg-white px-5 py-4 shadow-[0_8px_20px_rgba(15,61,46,0.05)] md:row-start-1 md:max-w-md md:px-6 md:py-5 ${isRight ? 'md:col-start-3 md:justify-self-start' : 'md:col-start-1 md:justify-self-end'}`}>
                  
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-forest md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-forest/60 md:text-sm">
                    {step.copy}
                  </p>
                </article>
              </Reveal>);

          })}
        </ol>
      </div>
    </section>);

}