import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  TrendingUp, 
  ShoppingBag, 
  Shirt, 
  Truck, 
  Scissors, 
  Users, 
  RotateCcw
} from 'lucide-react';
import TypingHeading from './TypingHeading';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

// Exactly preserving all 9 original steps, descriptions, flows, KPIs, and images
const steps = [
  {
    num: '01',
    name: 'PROCUREMENT',
    scriptWord: 'Precision',
    headline: 'BUY WITH INTELLIGENCE',
    subtitle: 'STEP 01 — PROCUREMENT INTELLIGENCE',
    desc: 'Scaleezy uses demand trends and seasonal sell-through data to help boutiques and brands avoid unnecessary capital locked into unsold stock.',
    flow: ['Historical Demand', 'Stock-Out Risk', 'Smart Reorder MOQ'],
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80',
    imgAlt: 'Luxury fabric swatches and textile rolls in atelier',
    kpi: '-30% Unsold Stock',
    tag: 'Procurement Intelligence',
    bgPastel: 'bg-[#FCE3D0]',
    scriptColor: 'text-[#D97706]',
    icon: Scissors
  },
  {
    num: '02',
    name: 'INVENTORY',
    scriptWord: 'Telemetry',
    headline: 'KNOW WHAT IS MOVING',
    subtitle: 'STEP 02 — LIVE SKU TELEMETRY',
    desc: 'Real-time telemetry across boutique showrooms, sub-warehouses, and e-com. Instant detection for fast-movers and dead-stock alerts.',
    flow: ['Fast Movers', 'Color & Size Matrix', 'Dead-Stock Alerts'],
    img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=900&q=80',
    imgAlt: 'Curated boutique garment racks and apparel inventory',
    kpi: 'Sub-Second SKU Sync',
    tag: 'Live SKU Telemetry',
    bgPastel: 'bg-[#DCEEE2]',
    scriptColor: 'text-[#059669]',
    icon: Layers
  },
  {
    num: '03',
    name: 'CATALOG & PRODUCT',
    scriptWord: 'Metadata',
    headline: 'GARMENTS INTO DATA',
    subtitle: 'STEP 03 — AUTOMATED CATALOGING',
    desc: 'Extract attributes automatically and create rich metadata, size matrix specs, and barcode tags for every SKU in your collection.',
    flow: ['Digital Photo', 'Fabric & Cut', 'Size Specs', 'Instant Barcode'],
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80',
    imgAlt: 'Editorial fashion photography and catalog shoot',
    kpi: 'Sub-20s SKU Tagging',
    tag: 'Automated Cataloging',
    bgPastel: 'bg-[#FAC5BD]',
    scriptColor: 'text-[#E11D48]',
    icon: Shirt
  },
  {
    num: '04',
    name: 'CUSTOMER CRM',
    scriptWord: 'Clienteling',
    headline: 'UNDERSTAND EVERY BUYER',
    subtitle: 'STEP 04 — BOUTIQUE CLIENTELING',
    desc: 'Deep CRM clienteling signals gathered across physical store visits, VIP preferences, fit history, and price sensitivities.',
    flow: ['Fitting History', 'Style Affinity', 'Milestone Dates', 'VIP Tier'],
    img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=900&q=80',
    imgAlt: 'Boutique consultant assisting customer with digital lookbook',
    kpi: '360° Client Profile',
    tag: 'Boutique Clienteling',
    bgPastel: 'bg-[#D4C7ED]',
    scriptColor: 'text-[#7C3AED]',
    icon: Users
  },
  {
    num: '05',
    name: 'MARKETING AUTOMATION',
    scriptWord: 'Campaigns',
    headline: 'TALK TO THE RIGHT BUYER',
    subtitle: 'STEP 05 — TARGETED MARKETING',
    desc: 'Combine clienteling signals, incoming seasonal collections, and local festival dates to launch automated WhatsApp & email campaigns that convert.',
    flow: ['VIP Segment', 'New Lookbook Drop', 'Automated Campaign'],
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80',
    imgAlt: 'Editorial fashion campaign and digital lookbook presentation',
    kpi: '3.4x Campaign Conversion',
    tag: 'Targeted Marketing',
    bgPastel: 'bg-[#FCEECB]',
    scriptColor: 'text-[#D97706]',
    icon: TrendingUp
  },
  {
    num: '06',
    name: 'VIRTUAL TRY-ON',
    scriptWord: 'Drape',
    headline: 'HELP CUSTOMERS DECIDE',
    subtitle: 'STEP 06 — AI VIRTUAL TRY-ON',
    desc: 'AI virtual try-on studio lets shoppers visualize fits instantly on diverse body types, feeding preference data directly back into the CRM.',
    flow: ['Garment Upload', 'Realistic Drape', 'Fit Confidence', 'Purchase'],
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80',
    imgAlt: 'High-fashion model showcasing digital garment styling',
    kpi: '+42% Try-On Conversion',
    tag: 'AI Digital Drape',
    bgPastel: 'bg-[#D5EAF7]',
    scriptColor: 'text-[#0284C7]',
    icon: Sparkles
  },
  {
    num: '07',
    name: 'CHECKOUT & CONVERSION',
    scriptWord: 'Conversion',
    headline: 'FAST IN-STORE BILLING',
    subtitle: 'STEP 07 — OMNICHANNEL POS',
    desc: 'Ultra-fast in-store POS and seamless digital checkout with customer profiles, split payments, store credits, and instant WhatsApp receipts.',
    flow: ['Fast Scan', 'Client Profile Sync', 'Instant Checkout'],
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80',
    imgAlt: 'Modern boutique POS billing and tap-to-pay transaction',
    kpi: '< 20s Billing Speed',
    tag: 'Omnichannel POS',
    bgPastel: 'bg-[#FADBD8]',
    scriptColor: 'text-[#E11D48]',
    icon: ShoppingBag
  },
  {
    num: '08',
    name: 'LOGISTICS & DISPATCH',
    scriptWord: 'Logistics',
    headline: 'MOVE EVERY ORDER SMART',
    subtitle: 'STEP 08 — MULTI-CARRIER ROUTING',
    desc: 'Multi-carrier selection, automatic pincode routing, automated shipping labels, and real-time transit tracking for wholesale & retail orders.',
    flow: ['Order Verified', 'Courier Assigned', 'Label Generated', 'Dispatched'],
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=900&q=80',
    imgAlt: 'Carefully packaged luxury garments and fulfillment parcels',
    kpi: '99.8% On-Time SLA',
    tag: 'Automated Dispatch',
    bgPastel: 'bg-[#F3E9DD]',
    scriptColor: 'text-[#9A3412]',
    icon: Truck
  },
  {
    num: '09',
    name: 'RETENTION & LOYALTY',
    scriptWord: 'Retention',
    headline: "DON'T STOP AT THE SALE",
    subtitle: 'STEP 09 — LIFELONG RETENTION',
    desc: 'Automate the post-purchase experience with garment care reminders, anniversary follow-ups, and tailored lookbooks that drive repeat purchases.',
    flow: ['Unboxing Care', 'Profile Refreshed', 'Curated Next Drop', 'Repeat Buy'],
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80',
    imgAlt: 'Luxury boutique store interior with returning VIP shoppers',
    kpi: '+40% Repeat Purchases',
    tag: 'Lifelong Retention',
    bgPastel: 'bg-[#E7DCF8]',
    scriptColor: 'text-[#9333EA]',
    icon: RotateCcw
  }
];

export default function HowItWorks() {
  usePageMeta("How Scaleezy Works — From Procurement to Repeat Purchase", "See how Scaleezy connects sourcing, cataloguing, stock, selling and customer follow-up for boutiques and apparel brands.");
  return (
    <div className="min-h-screen bg-white text-[var(--color-charcoal)] pt-20 relative overflow-hidden">
      
      {/* ============================================================== */}
      {/* AMBIENT BACKGROUND CALLIGRAPHY FLOURISH WATERMARKS             */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <svg className="absolute -top-10 -left-20 w-[900px] h-[900px] opacity-[0.035] text-gray-900" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M10,30 Q30,5 60,30 T90,70 Q60,95 30,70 T10,30 Z" />
          <path d="M20,40 Q50,10 80,40 T70,80" />
        </svg>
        <svg className="absolute top-[32%] -right-32 w-[1100px] h-[1100px] opacity-[0.03] text-gray-900" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M15,50 Q45,15 75,45 T45,85 T15,50" />
        </svg>
        <svg className="absolute top-[68%] -left-40 w-[1000px] h-[1000px] opacity-[0.03] text-gray-900" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M25,20 Q65,10 85,50 T35,90 T25,20" />
        </svg>
      </div>

      {/* ============================================================== */}
      {/* EDITORIAL HERO SECTION WITH LIVE TYPING HEADLINE               */}
      {/* ============================================================== */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-20 md:pt-28 md:pb-20 px-4 sm:px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/8 text-xs sm:text-sm font-semibold tracking-wider text-[var(--color-primary)] uppercase mb-6 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>End-to-End Operational Journey</span>
          </motion.div>

          {/* Dynamic Typographic Heading: Serif Line 1 + Sans Bold Line 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 sm:mb-8"
          >
            <TypingHeading
              line1="From procurement to,"
              line1Class="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-[var(--color-primary)] block text-center mb-1"
              line2Prefix=""
              line2Words={[
                'repeat purchase.',
                'zero dead stock.',
                'instant POS billing.',
                '360° VIP loyalty.',
                'automated dispatch.'
              ]}
              line2Class="font-sans font-bold tracking-tight text-[var(--color-charcoal)] block text-center mt-1 sm:mt-2"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.06] tracking-tight text-center"
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={2800}
              seoText="From procurement to repeat purchase."
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-normal px-2 mb-4"
          >
            Scaleezy synchronizes every milestone of your apparel business — inventory, clienteling, POS, try-on, and fulfillment — through one intelligent operating system.
          </motion.p>

        </div>
      </section>

      {/* ============================================================== */}
      {/* THE ASYMMETRIC LEAF CARDS LAYOUT (Exact Reference Design)      */}
      {/* ============================================================== */}
      <section className="relative z-10 py-8 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-20 sm:space-y-28 md:space-y-36">
          
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={step.num}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center"
              >

                {/* TEXT CONTENT COLUMN */}
                <div className={`lg:col-span-6 flex flex-col justify-center items-start text-left ${!isEven ? 'lg:order-2 lg:pl-4' : 'lg:order-1 lg:pr-4'}`}>
                  
                  {/* Editorial Italic Accent Word */}
                  <div className="relative mb-1">
                    <span className={`font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl ${step.scriptColor} block select-none`}>
                      {step.scriptWord}
                    </span>
                  </div>

                  {/* Heavy Bold Sans Headline in Uppercase */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--color-charcoal)] uppercase leading-[1.02] mb-2.5">
                    {step.headline}
                  </h2>

                  {/* Spaced Dark Gray Caps Subtitle */}
                  <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-gray-600 uppercase mb-5 sm:mb-6">
                    {step.subtitle}
                  </div>

                  {/* Body Paragraph 1 */}
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal mb-6 max-w-xl">
                    {step.desc}
                  </p>

                  {/* Operational Flow Pills & Impact Metric — Cleanly Left-Aligned */}
                  <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-gray-50/90 border border-gray-200/80">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-gray-200/80">
                      <span className="text-xs font-mono font-bold tracking-wider uppercase text-gray-700">
                        Operational Flow
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{step.kpi}</span>
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {step.flow.map((node, nIdx) => (
                        <span 
                          key={nIdx}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs sm:text-sm font-medium text-gray-800 border border-gray-200 shadow-2xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                          <span>{node}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* EXACT ASYMMETRIC LEAF CARD SHAPE WITH FASHION PHOTOGRAPHY */}
                <div className={`lg:col-span-6 flex justify-center ${!isEven ? 'lg:order-1 lg:justify-start' : 'lg:order-2 lg:justify-end'}`}>
                  
                  {/* Outer Asymmetric Leaf Card Container */}
                  <div className={`w-full max-w-[480px] aspect-[4/5] sm:aspect-[5/6] ${step.bgPastel} rounded-tl-[110px] sm:rounded-tl-[180px] md:rounded-tl-[220px] rounded-br-[110px] sm:rounded-br-[180px] md:rounded-br-[220px] rounded-tr-[32px] rounded-bl-[32px] p-5 sm:p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-700 flex items-center justify-center relative group overflow-hidden`}>

                    {/* Inner Photography Frame with Matching Leaf Silhouette */}
                    <div className="w-full h-full rounded-tl-[85px] sm:rounded-tl-[140px] md:rounded-tl-[170px] rounded-br-[85px] sm:rounded-br-[140px] md:rounded-br-[170px] rounded-tr-[24px] rounded-bl-[24px] overflow-hidden shadow-2xl relative bg-white">
                      
                      {/* High-Resolution Fashion Photography */}
                      <img 
                        src={step.img} 
                        alt={step.imgAlt} 
                        loading="lazy" 
                        decoding="async" 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />

                    </div>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>
      </section>

      {/* ============================================================== */}
      {/* FINAL MINIMAL CALL TO ACTION (Matching Reference Tone)         */}
      {/* ============================================================== */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center border-t border-black/10 pt-16 sm:pt-20">
          
          <span className="font-serif italic font-normal text-3xl sm:text-4xl text-amber-700 block mb-2">
            Transform your retail
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--color-charcoal)] mb-4 leading-tight">
            One Connected System. <br />
            <span className="text-[var(--color-primary)]">Zero Dead Stock.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto mb-8 font-normal">
            Experience firsthand how Scaleezy replaces scattered spreadsheets and siloed billing tools with one synchronized apparel platform.
          </p>

          <Link 
            to="/book-a-demo" 
            className="inline-flex items-center gap-3 bg-[var(--color-primary)] text-[var(--color-accent)] px-9 py-4 text-sm font-black tracking-widest uppercase rounded-full hover:bg-[var(--color-charcoal)] hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <span>BOOK A DEMO</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>
      </section>

      <Footer />
    </div>
  );
}
