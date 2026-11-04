import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  TrendingUp, 
  CheckCircle2, 
  X 
} from 'lucide-react';
import TypingHeading from './TypingHeading';
import Footer from './Footer';
import usePageMeta from './usePageMeta';
import { submitNewsletter } from '../lib/supabase';
import { MotifCommerceThread } from './BackgroundMotifs';
import { blogs } from '../data/blogs';

const CATEGORIES = [
  { id: 'all', label: 'All Articles' },
  { id: 'inventory', label: 'Inventory & Stock' },
  { id: 'marketing', label: 'Marketing & WhatsApp' },
  { id: 'tech', label: 'Retail Tech & POS' },
  { id: 'customer', label: 'Clienteling & CRM' },
  { id: 'tryon', label: 'AI Virtual Try-On' },
  { id: 'logistics', label: 'Logistics & Ops' }
];

function getCategoryGroup(cat = '') {
  if (cat.includes('Inventory')) return 'inventory';
  if (cat.includes('Marketing')) return 'marketing';
  if (cat.includes('Technology')) return 'tech';
  if (cat.includes('Customer') || cat.includes('Loyalty')) return 'customer';
  if (cat.includes('Try-On')) return 'tryon';
  if (cat.includes('Logistics') || cat.includes('Product')) return 'logistics';
  return 'all';
}

function calculateReadingTime(content, excerpt) {
  const text = (content || '') + ' ' + (excerpt || '');
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(3, Math.ceil(words / 220));
  return `${minutes} min read`;
}

export default function BlogsPage() {
  usePageMeta("Scaleezy Blog — Insights for Fashion Retail", "Practical guides on inventory, customer retention, marketing and operations for boutiques and apparel brands.");

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);

  // Dynamic Category Counts
  const categoryCounts = useMemo(() => {
    const counts = { all: blogs.length };
    CATEGORIES.forEach(c => {
      if (c.id !== 'all') {
        counts[c.id] = blogs.filter(b => getCategoryGroup(b.category) === c.id).length;
      }
    });
    return counts;
  }, []);

  // Filtered Articles based on Category & Search
  const filteredBlogs = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' || getCategoryGroup(post.category) === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured Lead Story (Displayed when on "All" with no active search)
  const isDefaultView = selectedCategory === 'all' && !searchQuery.trim();
  const featuredPost = isDefaultView ? filteredBlogs[0] : null;
  const gridPosts = isDefaultView ? filteredBlogs.slice(1) : filteredBlogs;

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubmittingEmail(true);
      try {
        await submitNewsletter(emailInput);
        setEmailSubscribed(true);
        setEmailInput('');
      } catch (err) {
        console.error('Blog subscribe error:', err);
      } finally {
        setIsSubmittingEmail(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] pt-20 flex flex-col">
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
              <Sparkles size={14} className="text-emerald-700" />
              <span>06 — SCALEEZY JOURNAL & RESEARCH</span>
            </div>

            <TypingHeading
              align="left"
              line1="Scaleezy insights,"
              line1Class="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] text-[var(--color-primary)] block text-left mb-1"
              line2Prefix="Strategies for "
              line2Words={[
                'Scaling Fashion Retail.',
                'Festive Stock Planning.',
                'Virtual Try-On Growth.',
                'VIP Client Retention.',
                'Zero Dead Stock.'
              ]}
              line2Class="font-sans font-bold tracking-tight text-[var(--color-primary)] block text-left mt-1 sm:mt-2"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold leading-[1.08] tracking-tight text-left mb-4 sm:mb-6"
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={2800}
              seoText="Scaleezy insights, Strategies for scaling modern apparel commerce."
            />
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed font-normal">
              Actionable frameworks, retail telemetry, and operational intelligence for modern apparel founders and boutique operators.
            </p>
          </div>

          {/* SEARCH & FILTER CONTROLS BAR */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 sm:mb-12 pb-6 border-b border-black/8">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 15+ articles by topic, keyword..."
                className="w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-full bg-white border border-black/12 text-sm text-[var(--color-charcoal)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-0.5"
                  title="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Live Count Indicator */}
            <div className="text-xs sm:text-sm text-gray-500 font-medium self-center md:self-auto">
              Showing <span className="font-bold text-[var(--color-primary)]">{filteredBlogs.length}</span> {filteredBlogs.length === 1 ? 'article' : 'articles'}
            </div>
          </div>

          {/* CATEGORY TABS ROW */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[var(--color-primary)] text-white shadow-md'
                      : 'bg-white hover:bg-gray-100 text-gray-700 border border-black/8'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-gray-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* SPOTLIGHT FEATURED STORY (When in Default View) */}
          {featuredPost && (
            <div className="mb-14 sm:mb-16">
              <Link
                to={`/blog/${featuredPost.slug.replace(/^\/?blog\/?/, '')}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-black/8 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-6 sm:p-8 lg:p-10 hover:-translate-y-1">
                  {/* Image Column */}
                  <div className="lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm bg-gray-100">
                    <img
                      src={featuredPost.img}
                      alt={featuredPost.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="backdrop-blur-md bg-black/60 text-white border border-white/25 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                        <Sparkles size={13} className="text-[var(--color-accent)]" />
                        Featured Analysis
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="backdrop-blur-md bg-white/90 text-[var(--color-charcoal)] text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                        <Clock size={13} />
                        {calculateReadingTime(featuredPost.content, featuredPost.excerpt)}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between py-2">
                    <div>
                      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-4">
                        <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                          {featuredPost.category}
                        </span>
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                        <span className="text-gray-500 font-medium">{featuredPost.date}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-[var(--color-primary)] group-hover:text-emerald-700 transition-colors leading-tight mb-4 text-balance">
                        {featuredPost.title}
                      </h2>

                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal mb-6">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 font-medium">#InventoryAging</span>
                        <span className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 font-medium">#DeadStock</span>
                        <span className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 font-medium">#RetailTelemetry</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-black/8 flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-xs text-gray-600">
                        <div className="w-7 h-7 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs flex items-center justify-center">
                          S
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900 block">Scaleezy Research</span>
                          <span className="text-[11px] text-gray-500">Retail Intelligence Team</span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--color-primary)] group-hover:text-emerald-700 group-hover:translate-x-1 transition-all">
                        <span>Read Full Guide</span>
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* MAIN ARTICLES GRID */}
          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {gridPosts.map((post) => (
                <Link
                  to={`/blog/${post.slug.replace(/^\/?blog\/?/, '')}`}
                  key={post.id}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <article className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-black/8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                    {/* Card Thumbnail */}
                    <div className="aspect-[16/10] overflow-hidden relative bg-gray-100">
                      <img
                        src={post.img}
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="backdrop-blur-md bg-black/60 text-white border border-white/20 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="backdrop-blur-md bg-white/90 text-[var(--color-charcoal)] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                          <Clock size={12} />
                          {calculateReadingTime(post.content, post.excerpt)}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-2.5">
                          <span>{post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span className="text-emerald-700 font-semibold">Operational Guide</span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-[var(--color-primary)] group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2 mb-3">
                          {post.title}
                        </h3>

                        <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-6 font-normal">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-4 border-t border-black/6 flex items-center justify-between mt-auto">
                        <span className="text-xs text-gray-500 font-medium">Scaleezy Research</span>
                        <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] group-hover:text-emerald-700 transition-colors inline-flex items-center gap-1.5">
                          <span>Read Article</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            /* EMPTY SEARCH / FILTER STATE */
            <div className="py-16 sm:py-20 text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-4">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">No articles found</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                We couldn't find any articles matching &ldquo;{searchQuery}&rdquo;. Try another term or reset your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-2.5 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* NEWSLETTER / PLAYBOOK STRIP */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] text-white p-8 sm:p-12 md:p-16 my-16 sm:my-20 shadow-2xl">
            <MotifCommerceThread
              className="absolute inset-0 w-full h-full opacity-10 text-[var(--color-accent)] z-0 pointer-events-none"
              path="M 0,40 C 60,0 120,80 180,40"
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-4">
                  <TrendingUp size={14} />
                  <span>WEEKLY INTEL BRIEFING</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight mb-3 text-balance">
                  The Apparel Operating Playbook.
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                  No fluff, no generic tips. Get field-tested frameworks on inventory turnover, VIP clienteling, and AI try-on unit economics every Tuesday.
                </p>
              </div>

              <div className="lg:col-span-5">
                {emailSubscribed ? (
                  <div className="p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 size={24} className="text-[var(--color-accent)] shrink-0" />
                    <div>
                      <span className="font-bold block">You're subscribed!</span>
                      <span className="text-xs text-white/80">Check your inbox for this Tuesday's retail briefing.</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Enter your work email..."
                      className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:bg-white/15 transition-all"
                    />
                    <button
                      type="submit"
                      className="px-7 py-3.5 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-lg active:scale-95 whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
