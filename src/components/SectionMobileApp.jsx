import React from 'react';
import { motion } from 'framer-motion';
import { Package, ShoppingCart, Users, BarChart2, ArrowRight } from 'lucide-react';
import { BrandPatternAtelier } from './BrandPattern';

const featureHighlights = [
  {
    id: 'inventory',
    icon: Package,
    line1: 'Manage',
    line2: 'Inventory'
  },
  {
    id: 'orders',
    icon: ShoppingCart,
    line1: 'Track',
    line2: 'Orders'
  },
  {
    id: 'customers',
    icon: Users,
    line1: 'Connect',
    line2: 'with Customers'
  },
  {
    id: 'insights',
    icon: BarChart2,
    line1: 'View',
    line2: 'Business Insights'
  }
];

export default function SectionMobileApp() {
  return (
    <section className="relative bg-[#FAF7EF] text-[#141F18] overflow-hidden border-b border-black/8 pt-14 sm:pt-20 lg:pt-24">
      {/* Subtle Tailoring Pattern in Background */}
      <BrandPatternAtelier opacity={0.10} size={400} vignette={true} />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: HEADLINE, COPY, STORE CTAS & 4 PILLARS            */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 pb-8 sm:pb-12 lg:pb-20 pt-2 relative z-20">
            
            {/* Main Two-Line Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-4xl sm:text-5xl md:text-[54px] xl:text-[60px] leading-[1.08] tracking-[-0.025em] mb-6"
            >
              <span className="block font-sans font-semibold text-[#141F18]">
                Run Your Boutique
              </span>
              <span className="block font-sans italic font-normal text-[#5F6F65] mt-1">
                Anywhere, Anytime
              </span>
            </motion.h2>

            {/* Subtitle Copy */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-base sm:text-lg md:text-[19px] text-[#525652] leading-[1.6] font-normal max-w-[510px] mb-8 sm:mb-10"
            >
              Manage your inventory, orders, customers and more right from your phone. The complete apparel commerce OS, now in your hands.
            </motion.p>

            {/* Demo CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mb-12 sm:mb-14"
            >
              <a
                href="#book-demo"
                className="inline-flex items-center justify-center gap-2 bg-[#182D21] hover:bg-[#0F1F16] text-white px-7 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-[0_12px_28px_-8px_rgba(24,45,33,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* 4 Circular Feature Icon Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-[540px] sm:-ml-4"
            >
              {featureHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full bg-[#EFECE3] border border-[#E2DFD5] flex items-center justify-center text-[#1F2D24] mb-3 transition-all duration-300 group-hover:bg-[#182D21] group-hover:text-white group-hover:scale-105 shadow-2xs">
                      <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] stroke-[1.75]" />
                    </div>
                    <span className="text-xs sm:text-[13.5px] font-normal text-[#3B423E] leading-[1.35] whitespace-nowrap">
                      {item.line1}
                      <br />
                      {item.line2}
                    </span>
                  </div>
                );
              })}
            </motion.div>

          </div>

          {/* Spacer column on lg+ where the right-bleed visual sits */}
          <div className="hidden lg:block lg:col-span-6" />
        </div>
      </div>

      {/* ============================================================== */}
      {/* RIGHT-BLEED DUAL IPHONE BOUTIQUE STUDIO SHOWCASE               */}
      {/* ============================================================== */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative lg:absolute lg:bottom-0 lg:right-0 w-full lg:w-[54%] xl:w-[52%] max-w-[820px] ml-auto z-10"
      >
        <div className="relative w-full aspect-[547/498] overflow-hidden">
          {/* Cropped Studio Render of Dual iPhones, Stone Pedestal, Green Fluted Arch & Garment Rack */}
          <img
            src="/scaleezy-app-showcase.jpg"
            alt="Scaleezy Mobile App running on iPhones showing Orders management and Boutique Commerce OS"
            className="absolute top-0 left-[-84.27%] w-[187.26%] h-[104.82%] max-w-none select-none pointer-events-none"
          />

          {/* Seamless Edge Blending Gradients into #FAF7EF Background */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#FAF7EF] via-[#FAF7EF]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#FAF7EF] via-[#FAF7EF]/50 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
