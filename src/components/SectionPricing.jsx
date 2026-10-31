import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Check
} from 'lucide-react';
import { BrandPatternAtelier, BrandWatermark } from './BrandPattern';

const tiers = [
  {
    id: 'boutique',
    name: 'Boutique & Atelier',
    tagline: 'For independent designer studios, single boutiques, and emerging fashion labels.',
    monthlyPrice: 2499,
    annualPrice: 1999,
    badge: 'STARTER',
    ctaText: 'Book a Demo',
    ctaStyle: 'outline',
    features: [
      '1 Physical Boutique or Online Store',
      'Real-Time SKU Inventory & Barcoding',
      'Smart Mobile POS & Fast Billing',
      'Customer Profiles & Style Preferences',
      'Size Matrix Analytics & Reorder Alerts',
      'Daily Revenue & Dead-Stock Reports',
      'Standard WhatsApp & Email Support'
    ]
  },
  {
    id: 'growth',
    name: 'Omnichannel Growth',
    tagline: 'For scaling fashion brands, multi-store retailers, and fast-growing apparel chains.',
    monthlyPrice: 5999,
    annualPrice: 4799,
    popular: true,
    badge: 'MOST POPULAR',
    ctaText: 'Get Started with Growth',
    ctaStyle: 'accent',
    features: [
      'Up to 5 Stores & Central Warehouse',
      'AI Virtual Try-On Studio (1,500 runs/mo)',
      'Automated Predictive Stock Replenishment',
      'Omnichannel Clienteling & VIP Loyalty',
      'Real-Time E-com & POS Sync (Shopify, Web)',
      'Split Payments, Exchanges & Store Credit',
      'Logistics Dispatch & Courier Tracking',
      'Priority 24/7 Concierge & Guided Onboarding'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Couture',
    tagline: 'For nationwide retail chains, textile groups, and multi-brand garment manufacturers.',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    badge: 'ENTERPRISE',
    ctaText: 'Talk to Enterprise Sales',
    ctaStyle: 'primary',
    features: [
      'Unlimited Stores, Warehouses & Franchises',
      'Custom AI Try-On Models & 3D Assets',
      'Tech Pack Design & Batch Sourcing Flow',
      'B2B Wholesale Portal & Line Sheets',
      'Custom ERP, SAP & Tally API Connectors',
      'Granular Role-Based Staff Permissions',
      'Dedicated Account Director & Staff Training',
      '99.99% SLA & Custom Data Governance'
    ]
  }
];

export default function SectionPricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-20 sm:py-28 md:py-36 bg-[var(--color-warm-white)] text-[var(--color-charcoal)] overflow-hidden">
      {/* Background Decorative Pattern */}
      <BrandPatternAtelier opacity={0.06} size={360} />
      <BrandWatermark className="-left-40 top-1/3 text-[var(--color-primary)]" opacity={0.015} size={750} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "1200px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 text-xs sm:text-sm font-semibold tracking-wide text-[var(--color-primary)] mb-5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Transparent, Scalable Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "1200px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-primary)] leading-[1.12]"
          >
            Predictable plans for <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[var(--color-charcoal)] block text-4xl sm:text-5xl md:text-6xl mt-1">
              every stage of growth.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "1200px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you run a luxury couture studio or a multi-location apparel chain, Scaleezy pays for itself by preventing dead stock and accelerating checkout velocity.
          </motion.p>

          {/* Billing Frequency Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "1200px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-8 sm:mt-10"
          >
            <span className={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-[var(--color-primary)]' : 'text-gray-600'}`}>
              Monthly Billing
            </span>

            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-[var(--color-primary)] rounded-full p-1 cursor-pointer transition-colors shadow-inner focus:outline-none"
              aria-label="Toggle annual or monthly pricing"
            >
              <div 
                className={`w-6 h-6 bg-[var(--color-accent)] rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`} 
              />
            </button>

            <span className={`text-sm font-semibold flex items-center gap-2 transition-colors ${isAnnual ? 'text-[var(--color-primary)]' : 'text-gray-600'}`}>
              Annual Billing
              <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold shadow-xs">
                Save 20%
              </span>
            </span>
          </motion.div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch mb-16 sm:mb-20">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "1200px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`relative rounded-[32px] sm:rounded-[36px] flex flex-col justify-between transition-all duration-500 overflow-hidden ${
                tier.popular 
                  ? 'bg-[var(--color-primary)] text-white shadow-[0_25px_60px_-15px_rgba(10,47,29,0.45)] border-2 border-[var(--color-accent)]/80 lg:scale-[1.02] lg:-translate-y-2' 
                  : 'bg-white text-[var(--color-charcoal)] border border-black/10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.07)] hover:border-black/20 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)]'
              }`}
            >
              {/* Popular Glow Backdrop */}
              {tier.popular && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/15 rounded-full blur-3xl pointer-events-none" />
              )}

              {/* Card Header & Price */}
              <div className="p-6 sm:p-8 md:p-9 relative z-10">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap shrink-0 ${
                    tier.popular
                      ? 'bg-[var(--color-accent)] text-[var(--color-primary)]'
                      : 'bg-black/5 text-[var(--color-primary)]'
                  }`}>
                    {tier.badge}
                  </span>
                  
                  {tier.popular && (
                    <span className="flex items-center gap-1 text-xs text-[var(--color-accent)] font-semibold whitespace-nowrap shrink-0">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      Recommended
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                  {tier.name}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 font-normal ${tier.popular ? 'text-white/90' : 'text-gray-700'}`}>
                  {tier.tagline}
                </p>

                {/* Price Display */}
                <div className={`flex items-baseline gap-1.5 pb-6 border-b ${tier.popular ? 'border-white/15' : 'border-black/10'}`}>
                  {typeof tier.monthlyPrice === 'number' ? (
                    <>
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        ₹{(isAnnual ? tier.annualPrice : tier.monthlyPrice).toLocaleString('en-IN')}
                      </span>
                      <span className={`text-sm font-medium ${tier.popular ? 'text-white/75' : 'text-gray-600'}`}>
                        / month {isAnnual ? '(billed annually)' : ''}
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      Custom Tailored
                    </span>
                  )}
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-3.5">
                  <span className={`text-xs font-mono font-semibold uppercase tracking-wider block ${tier.popular ? 'text-[var(--color-accent)]' : 'text-gray-600'}`}>
                    What is included:
                  </span>
                  <ul className="space-y-3">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm leading-snug">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          tier.popular ? 'text-[var(--color-accent)]' : 'text-emerald-700'
                        }`} />
                        <span className={tier.popular ? 'text-white/95' : 'text-gray-800'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="p-6 sm:p-8 md:p-9 pt-0 relative z-10">
                <Link
                  to="/book-a-demo"
                  className={`w-full py-4 px-6 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                    tier.ctaStyle === 'accent'
                      ? 'bg-[var(--color-accent)] hover:bg-[#cbf026] text-[var(--color-primary)] shadow-[0_10px_25px_rgba(184,212,50,0.3)] hover:scale-102'
                      : tier.ctaStyle === 'primary'
                      ? 'bg-[var(--color-primary)] hover:bg-black text-white hover:scale-102'
                      : 'bg-white hover:bg-black/5 text-[var(--color-primary)] border border-black/15 hover:scale-102'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "1200px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8 border-t border-black/10 text-xs sm:text-sm font-medium text-gray-700 text-center"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>14-day free trial on all plans</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-700" />
            <span>Zero setup fees or hidden charges</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-700" />
            <span>Migrate existing SKU catalogs in 48h</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-700" />
            <span>Cancel or switch anytime</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
