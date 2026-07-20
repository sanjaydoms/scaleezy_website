import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

const BRANDS = [
  'APPAREL BRANDS',
  'FASHION RETAILERS',
  'SAREE STORES',
  'BRIDAL BOUTIQUES',
  'D2C BRANDS',
  'MULTI-BRAND STORES',
];

export function TrustedBy() {
  const items = [...BRANDS, ...BRANDS];
  return (
    <section
      aria-label="Trusted by apparel businesses"
      className="overflow-hidden border-y border-forest/10 bg-cream py-7"
    >
      <div className="mx-auto flex max-w-[1600px] items-center gap-8 px-6 md:px-12">
        <p className="eyebrow hidden shrink-0 md:block text-[24px] font-[900] text-[#9FC131]">
          Built for
        </p>
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-9"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
          >
            {items.map((brand, index) => (
              <Fragment key={`${brand}-${index}`}>
                <span className="text-xs font-medium tracking-[0.16em] text-forest/65 sm:text-sm">
                  {brand}
                </span>
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-lime-dark"
                />
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
