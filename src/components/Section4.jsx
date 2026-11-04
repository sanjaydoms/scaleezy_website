import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BrandPatternWeave, BrandWatermark } from './BrandPattern';

const modules = [
  { 
    id: 'inventory', 
    slug: 'inventory',
    externalUrl: 'https://inventory.scaleezy.com/',
    colSpan: 'col-span-1 sm:col-span-2 lg:col-span-5', 
    rowSpan: 'lg:row-span-2', 
    label: 'Inventory', 
    tagline: 'Stock Intelligence',
    desc: 'Predict demand, inward barcodes fast, and reduce dead stock across sizes and colors.', 
    img: '/card-inventory-b2b.jpg' 
  },
  { 
    id: 'crm', 
    slug: 'crm',
    externalUrl: 'https://crm.scaleezy.com/',
    colSpan: 'col-span-1 sm:col-span-1 lg:col-span-3', 
    rowSpan: 'lg:row-span-1', 
    label: 'CRM', 
    tagline: 'Clienteling',
    desc: 'Remember every client preference, size, and wedding date.', 
    img: '/crm-module.jpg' 
  },
  { 
    id: 'marketing', 
    slug: 'marketing',
    externalUrl: 'https://marketing.scaleezy.com/',
    colSpan: 'col-span-1 sm:col-span-1 lg:col-span-4', 
    rowSpan: 'lg:row-span-1', 
    label: 'Marketing', 
    tagline: 'Campaign Automation',
    desc: 'Reach the right buyers at the right time with segmented WhatsApp alerts.', 
    img: '/marketing-hub.jpg' 
  },
  { 
    id: 'tryon2buy', 
    slug: 'tryon2buy',
    externalUrl: 'https://www.tryon2buy.com/',
    colSpan: 'col-span-1 sm:col-span-1 lg:col-span-4', 
    rowSpan: 'lg:row-span-2', 
    label: 'TRYON2BUY', 
    tagline: 'AI Virtual Try-On',
    desc: 'Let customers visualize apparel on realistic models before buying.', 
    img: '/virtual-tryon.jpg' 
  },
  { 
    id: 'finance', 
    slug: 'finance',
    externalUrl: 'https://finance.scaleezy.com/',
    colSpan: 'col-span-1 sm:col-span-1 lg:col-span-3', 
    rowSpan: 'lg:row-span-1', 
    label: 'Finance', 
    tagline: 'Costing & Margins',
    desc: 'Track fabric costing, tailor piece-rates, and net margins in real-time.', 
    img: '/finance-dashboard.jpg' 
  },
  { 
    id: 'analytics', 
    slug: 'analytics',
    externalUrl: 'https://analytics.scaleezy.com/',
    colSpan: 'col-span-1 sm:col-span-2 lg:col-span-5', 
    rowSpan: 'lg:row-span-1', 
    label: 'Analytics', 
    tagline: 'Executive Insights',
    desc: 'Actionable data and Monday morning insights for business growth.', 
    img: '/analytics-hub.jpg' 
  },
  { 
    id: 'logistics', 
    slug: 'logistics',
    externalUrl: 'https://logistics.scaleezy.com/',
    colSpan: 'col-span-1 sm:col-span-1 lg:col-span-3', 
    rowSpan: 'lg:row-span-1', 
    label: 'Logistics', 
    tagline: 'Courier Routing',
    desc: 'Fast dispatches, lowest shipping rates, and live WhatsApp tracking.', 
    img: '/logistics-hub.jpg' 
  },
  { 
    id: 'boutique', 
    slug: 'boutique',
    externalUrl: 'https://boutique.scaleezy.com/',
    colSpan: 'col-span-1 sm:col-span-2 lg:col-span-12', 
    rowSpan: 'lg:row-span-1', 
    label: 'Boutique', 
    tagline: 'In-Store POS & Operations',
    desc: 'Fast in-store barcode billing, tailor alteration tracking, and offline counter checkout.', 
    img: '/smart-pos.jpg' 
  }
];

export default function Section4() {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 bg-[var(--color-charcoal)] text-white border-t border-white/10 overflow-hidden">
      {/* Scaleezy Brand Pattern Background */}
      <BrandPatternWeave opacity={0.035} color="var(--color-accent)" size={50} />
      <BrandWatermark className="-right-32 top-10 text-white" opacity={0.015} size={700} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="mb-14 sm:mb-20 max-w-3xl text-center mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white mb-5 sm:mb-6 text-balance">
            <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1 text-white">
              One platform,
            </span>
            <span className="font-sans font-bold tracking-tight text-[var(--color-accent)] block">
              Eight connected modules.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Everything you need to run your apparel business. Click any module below to open it in a new tab.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-auto lg:auto-rows-[220px]">
          {modules.map((mod, i) => (
            <motion.div 
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl overflow-hidden group bg-white/5 border border-white/15 hover:border-[var(--color-accent)]/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 transform-gpu will-change-transform ${mod.colSpan} ${mod.rowSpan}`}
            >
              <a 
                href={mod.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${mod.label} module (opens in a new tab)`}
                className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8 cursor-pointer"
              >
                {mod.img && (
                  <>
                    <img 
                      src={mod.img} 
                      alt={mod.label} 
                      loading="lazy" 
                      decoding="async" 
                      className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:scale-105 transition-transform duration-700 group-hover:opacity-75" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 group-hover:via-black/40 transition-colors duration-500 pointer-events-none"></div>
                  </>
                )}
                {!mod.img && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/40 to-transparent pointer-events-none"></div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform duration-300">
                      0{i + 1}
                    </div>
                    <span className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)] opacity-85 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
                      <span>Open App</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2 tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors duration-300 flex items-center gap-2">
                    <span>{mod.label}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 font-normal leading-relaxed line-clamp-2">
                    {mod.desc}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
