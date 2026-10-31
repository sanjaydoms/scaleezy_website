import React from 'react';
import { motion } from 'framer-motion';
import { BrandPatternWeave, BrandWatermark } from './BrandPattern';

const modules = [
  { 
    id: 'inventory', 
    colSpan: 'col-span-1 sm:col-span-2 lg:col-span-5', 
    rowSpan: 'lg:row-span-2', 
    label: 'Inventory Intelligence', 
    desc: 'Predict demand and reduce dead stock.', 
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80' 
  },
  { 
    id: 'crm', 
    colSpan: 'col-span-1 sm:col-span-1 lg:col-span-3', 
    rowSpan: 'lg:row-span-1', 
    label: 'CRM', 
    desc: 'Remember every client preference.', 
    img: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&q=80' 
  },
  { 
    id: 'marketing', 
    colSpan: 'col-span-1 sm:col-span-1 lg:col-span-4', 
    rowSpan: 'lg:row-span-1', 
    label: 'Marketing Hub', 
    desc: 'Reach the right buyers at the right time.', 
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80' 
  },
  { 
    id: 'tryon', 
    colSpan: 'col-span-1 sm:col-span-1 lg:col-span-4', 
    rowSpan: 'lg:row-span-2', 
    label: 'Virtual Try-On', 
    desc: 'Let customers visualize before buying.', 
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80' 
  },
  { 
    id: 'finance', 
    colSpan: 'col-span-1 sm:col-span-1 lg:col-span-3', 
    rowSpan: 'lg:row-span-1', 
    label: 'Finance Dashboard', 
    desc: 'Track margins in real-time.', 
    img: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=800&q=80' 
  },
  { 
    id: 'analytics', 
    colSpan: 'col-span-1 sm:col-span-2 lg:col-span-5', 
    rowSpan: 'lg:row-span-1', 
    label: 'Analytics Hub', 
    desc: 'Actionable data for growth.', 
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80' 
  },
  { 
    id: 'logistics', 
    colSpan: 'col-span-1 sm:col-span-1 lg:col-span-3', 
    rowSpan: 'lg:row-span-1', 
    label: 'Logistics Hub', 
    desc: 'Fast dispatches and courier SLAs.', 
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80' 
  },
  { 
    id: 'pos', 
    colSpan: 'col-span-1 sm:col-span-2 lg:col-span-12', 
    rowSpan: 'lg:row-span-1', 
    label: 'Smart POS', 
    desc: 'Seamless in-store billing and checkout.', 
    img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80' 
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
            Everything you need to run your apparel business, beautifully integrated into a single ecosystem.
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
              className={`relative rounded-3xl overflow-hidden group bg-white/5 border border-white/15 hover:border-[var(--color-accent)]/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col justify-end p-6 sm:p-8 min-h-[220px] transition-all duration-500 transform-gpu will-change-transform ${mod.colSpan} ${mod.rowSpan}`}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 group-hover:via-black/40 transition-colors duration-500"></div>
                </>
              )}
              {!mod.img && (
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/40 to-transparent"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] flex items-center justify-center mb-3 sm:mb-4 font-bold text-sm shadow-md group-hover:scale-110 transition-transform duration-300">
                  {i + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2 tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {mod.label}
                </h3>
                <p className="text-sm sm:text-base text-gray-200 font-normal leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
