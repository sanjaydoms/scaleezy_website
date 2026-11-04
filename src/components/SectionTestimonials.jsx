import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { BrandPatternMonogram, BrandWatermark } from './BrandPattern';

const testimonials = [
  {
    author: "ANANYA SHARMA",
    role: "Founder & Head Designer, Vanya Heritage Silks (Bengaluru)",
    quote: "Before Scaleezy, festival rush meant endless handwritten chits and stockouts on our best-selling Banarasi sarees. Now, my entire boutique runs right from my phone. We cut dead stock by 32% in our very first wedding season.",
    rating: 5,
    avatar: "/indian-testimonial-1.jpg",
    bgTint: "bg-[#e5dcd3]"
  },
  {
    author: "VIKRAMADITYA SINGHANIA",
    role: "Managing Director, Singhania Weaves (Hyderabad)",
    quote: "Managing inventory across Banjara Hills and Jubilee Hills used to take 2 hours of reconciliations every night. With Scaleezy, our multi-store stock and online store sync instantly. My staff never has to say 'let me check in the back warehouse'.",
    rating: 5,
    avatar: "/indian-testimonial-2.jpg",
    bgTint: "bg-[#d8e2dc]"
  },
  {
    author: "KUNAL SUNDARAM",
    role: "Co-Founder & Director, Aavaran Luxury Pret (Chennai)",
    quote: "The bespoke clienteling and custom measurements tool is an absolute lifesaver. When a client arrives for a fitting, our styling team already has their measurements, preferred handloom weaves, and WhatsApp chat history right in front of them.",
    rating: 5,
    avatar: "/indian-testimonial-3.jpg",
    bgTint: "bg-[#e2ece9]"
  },
  {
    author: "RAJESH KULKARNI",
    role: "Director of Operations, Kulkarni Textiles & B2B (Surat)",
    quote: "We supply lehenga fabrics and unstitched suits to over 120 boutique retailers across India. Scaleezy's wholesale portal and automated barcode generator saved my team at least 25 hours of manual invoicing every single week.",
    rating: 5,
    avatar: "/indian-testimonial-4.jpg",
    bgTint: "bg-[#e6ccb2]"
  },
  {
    author: "ADITI SEN",
    role: "Co-Founder, Bengal Weavers D2C (Kolkata)",
    quote: "Scaleezy connected our master weavers' line queue directly to our e-commerce dispatch. We know the exact production stage of every Jamdani lot without having to call the workshop floor ten times a day.",
    rating: 5,
    avatar: "/indian-testimonial-8.jpg",
    bgTint: "bg-[#ddb892]"
  },
  {
    author: "ROHAN MITTAL",
    role: "Founder & CEO, Mittal & Co. Ethnic Wear (Jaipur)",
    quote: "Finally an operating system built specifically for the Indian apparel market. It handles size matrices, color lots, unstitched sets, and automated WhatsApp festive campaigns that genuinely bring old customers back into the store.",
    rating: 5,
    avatar: "/indian-testimonial-6.jpg",
    bgTint: "bg-[#d6ccc2]"
  },
  {
    author: "KAVITA REDDY",
    role: "Head of Retail, Taraaya Luxury Pret (Hyderabad)",
    quote: "Our billing lines used to back up completely on Dhanteras and festive weekends. Scaleezy's Smart POS cut checkout time to seconds, printed barcode tags effortlessly, and automatically added loyalty points to the customer's phone.",
    rating: 5,
    avatar: "/indian-testimonial-7.jpg",
    bgTint: "bg-[#f5ebe0]"
  },
  {
    author: "MEERA NAMBIAR",
    role: "Creative Director, Kasavu & Loom Atelier (Kochi)",
    quote: "Virtual try-on completely changed how our NRI brides and diaspora clients shop with us from the US and Dubai. They can visualize handloom drapes in real-time before ordering custom work, and our return rates dropped to almost zero.",
    rating: 5,
    avatar: "/indian-testimonial-5.jpg",
    bgTint: "bg-[#ede0d4]"
  }
];

export default function SectionTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = testimonials[activeIdx];

  // Optional subtle auto-advance every 8s (only when tab is active and visible)
  useEffect(() => {
    const timer = setInterval(() => {
      if (typeof document !== 'undefined' && !document.hidden) {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
      }
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-24 md:py-36 bg-[var(--color-warm-white)] text-[var(--color-charcoal)] relative overflow-hidden select-none">
      {/* Scaleezy Brand Pattern Background */}
      <BrandPatternMonogram opacity={0.03} color="var(--color-primary)" size={80} />
      <BrandWatermark className="-left-28 top-20 text-[var(--color-primary)]" opacity={0.02} size={650} />
      <BrandWatermark className="-right-28 bottom-20 text-[var(--color-primary)] rotate-180" opacity={0.02} size={650} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* ============================================================== */}
        {/* HEADER & TESTIMONIAL QUOTE BLOCK                               */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20 flex flex-col items-center justify-center">
          {/* Main Prominent Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-[var(--color-charcoal)] mb-8 sm:mb-10 md:mb-12 text-balance">
            <span className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mb-1 text-[var(--color-primary)]">
              Trusted by apparel founders,
            </span>
            <span className="font-sans font-bold tracking-tight block">
              What founders say about Scaleezy.
            </span>
          </h2>

          {/* Dynamic Quote & Author Block */}
          <div className="min-h-[160px] sm:min-h-[180px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-2.5 sm:space-y-3"
              >
                {/* Author Name */}
                <h4 className="font-bold tracking-widest text-xs sm:text-sm md:text-base text-[var(--color-charcoal)] uppercase">
                  {current.author}
                </h4>

                {/* Role / Title */}
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                  {current.role}
                </p>

                {/* Star Rating */}
                <div className="flex justify-center gap-1 text-amber-500 pt-0.5 pb-0.5">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base md:text-lg text-[var(--color-charcoal)] leading-relaxed font-normal italic text-balance max-w-2xl px-2 sm:px-4">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CLOUD OF CIRCULAR AVATAR BUBBLES (Matching Reference Image)    */}
        {/* ============================================================== */}
        <div className="w-full max-w-6xl mx-auto pt-6 pb-12">
          
          {/* Desktop/Tablet Organic Bubble Canvas */}
          <div className="hidden sm:flex items-center justify-center gap-4 md:gap-7 flex-wrap relative py-8">
            
            {/* Cluster Left 1: Avatar 0 (Top Left) */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => setActiveIdx(0)}
                className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden transition-all duration-500 cursor-pointer ${
                  activeIdx === 0 
                    ? 'ring-4 ring-[var(--color-primary)] scale-110 shadow-2xl z-20' 
                    : 'opacity-85 hover:opacity-100 hover:scale-105 shadow-md'
                }`}
                aria-label={`View testimonial by ${testimonials[0].author}`}
              >
                <img 
                  src={testimonials[0].avatar} 
                  alt={testimonials[0].author} 
                  className="w-full h-full object-cover" 
                />
              </button>

              {/* View More Circle Button */}
              <button
                onClick={handleNext}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-300 bg-white/80 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300 shadow-sm flex items-center justify-center text-xs md:text-sm font-semibold text-gray-700 cursor-pointer group"
                aria-label="View more testimonials"
              >
                <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  View More
                </span>
              </button>
            </div>

            {/* Cluster Left 2: Avatar 1 (Center Left) & Smaller Stack */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => setActiveIdx(1)}
                className={`relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden transition-all duration-500 cursor-pointer ${
                  activeIdx === 1 
                    ? 'ring-4 ring-[var(--color-primary)] scale-110 shadow-2xl z-20' 
                    : 'opacity-85 hover:opacity-100 hover:scale-105 shadow-md'
                }`}
                aria-label={`View testimonial by ${testimonials[1].author}`}
              >
                <img 
                  src={testimonials[1].avatar} 
                  alt={testimonials[1].author} 
                  className="w-full h-full object-cover" 
                />
              </button>

              <div className="flex items-center gap-3">
                {/* Avatar 6 (Small Left) */}
                <button
                  onClick={() => setActiveIdx(6)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden transition-all duration-500 cursor-pointer ${
                    activeIdx === 6 
                      ? 'ring-4 ring-[var(--color-primary)] scale-110 shadow-2xl z-20' 
                      : 'opacity-85 hover:opacity-100 hover:scale-105 shadow-sm'
                  }`}
                  aria-label={`View testimonial by ${testimonials[6].author}`}
                >
                  <img 
                    src={testimonials[6].avatar} 
                    alt={testimonials[6].author} 
                    className="w-full h-full object-cover" 
                  />
                </button>

                {/* Avatar 5 (Small Center-Left) */}
                <button
                  onClick={() => setActiveIdx(5)}
                  className={`relative w-18 h-18 md:w-22 md:h-22 rounded-full overflow-hidden transition-all duration-500 cursor-pointer ${
                    activeIdx === 5 
                      ? 'ring-4 ring-[var(--color-primary)] scale-110 shadow-2xl z-20' 
                      : 'opacity-85 hover:opacity-100 hover:scale-105 shadow-sm'
                  }`}
                  aria-label={`View testimonial by ${testimonials[5].author}`}
                >
                  <img 
                    src={testimonials[5].avatar} 
                    alt={testimonials[5].author} 
                    className="w-full h-full object-cover" 
                  />
                </button>
              </div>
            </div>

            {/* ============================================================ */}
            {/* CENTER FEATURED AVATAR (Prominent Large Circle like reference) */}
            {/* ============================================================ */}
            <div className="flex flex-col items-center px-1 md:px-3 z-10">
              <button
                onClick={() => setActiveIdx(2)}
                className={`relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden transition-all duration-500 cursor-pointer ${
                  activeIdx === 2 
                    ? 'ring-6 ring-[var(--color-primary)] shadow-2xl scale-105' 
                    : 'opacity-90 hover:opacity-100 hover:scale-105 shadow-xl'
                }`}
                aria-label={`View testimonial by ${testimonials[2].author}`}
              >
                <img 
                  src={testimonials[2].avatar} 
                  alt={testimonials[2].author} 
                  className="w-full h-full object-cover" 
                />
              </button>
            </div>

            {/* Cluster Right 1: Avatar 3 (Top Right) & Avatar 4 (Bottom Right) */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => setActiveIdx(3)}
                className={`relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden transition-all duration-500 cursor-pointer ${
                  activeIdx === 3 
                    ? 'ring-4 ring-[var(--color-primary)] scale-110 shadow-2xl z-20' 
                    : 'opacity-85 hover:opacity-100 hover:scale-105 shadow-md'
                }`}
                aria-label={`View testimonial by ${testimonials[3].author}`}
              >
                <img 
                  src={testimonials[3].avatar} 
                  alt={testimonials[3].author} 
                  className="w-full h-full object-cover" 
                />
              </button>

              <button
                onClick={() => setActiveIdx(4)}
                className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden transition-all duration-500 cursor-pointer ${
                  activeIdx === 4 
                    ? 'ring-4 ring-[var(--color-primary)] scale-110 shadow-2xl z-20' 
                    : 'opacity-85 hover:opacity-100 hover:scale-105 shadow-md'
                }`}
                aria-label={`View testimonial by ${testimonials[4].author}`}
              >
                <img 
                  src={testimonials[4].avatar} 
                  alt={testimonials[4].author} 
                  className="w-full h-full object-cover" 
                />
              </button>
            </div>

            {/* Cluster Right 2: Avatar 7 (Far Right Large Bubble) */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setActiveIdx(7)}
                className={`relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden transition-all duration-500 cursor-pointer ${
                  activeIdx === 7 
                    ? 'ring-6 ring-[var(--color-primary)] shadow-2xl scale-105 z-20' 
                    : 'opacity-90 hover:opacity-100 hover:scale-105 shadow-xl'
                }`}
                aria-label={`View testimonial by ${testimonials[7].author}`}
              >
                <img 
                  src={testimonials[7].avatar} 
                  alt={testimonials[7].author} 
                  className="w-full h-full object-cover" 
                />
              </button>
            </div>

          </div>

          {/* Mobile Avatar Carousel / Horizontal Cluster */}
          <div className="flex sm:hidden overflow-x-auto gap-3 py-3 px-2 no-scrollbar justify-start items-center scroll-smooth">
            {testimonials.map((t, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`shrink-0 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'w-20 h-20 ring-4 ring-[var(--color-primary)] scale-105 shadow-lg' 
                      : 'w-14 h-14 opacity-75 hover:opacity-100'
                  }`}
                  aria-label={`View testimonial by ${t.author}`}
                >
                  <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                </button>
              );
            })}
            
            <button
              onClick={handleNext}
              className="shrink-0 w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center text-xs font-semibold text-gray-700 shadow-sm"
              aria-label="Next testimonial"
            >
              Next
            </button>
          </div>

          {/* Navigation Dots Indicator for mobile */}
          <div className="flex sm:hidden justify-center items-center gap-1.5 pt-4">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIdx === i ? 'w-6 bg-[var(--color-primary)]' : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
