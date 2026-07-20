import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { BLOG_ARTICLES, type BlogArticle } from '../components/blogData';
import { Reveal } from '../components/motion';

const CATEGORIES = ['All', 'Inventory', 'Clienteling', 'Marketing', 'Logistics', 'Operations', 'Technology'];

export function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.keywords.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="w-full bg-[#F5F2EC] text-forest min-h-screen py-28 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Page Header */}
        <Reveal className="max-w-3xl mb-16">
          <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-3.5 py-1 text-[10px] text-lime-dark bg-cream-warm/20 uppercase tracking-widest font-semibold">
            <BookOpen className="h-3 w-3" /> Scaleezy Blog
          </span>
          <h1 className="font-serif-display mt-6 text-5xl leading-[0.98] tracking-[-0.04em] text-[#0F3D2E] md:text-7xl">
            Knowledge for <span className="font-serif-display italic text-lime-dark">connected</span> apparel.
          </h1>
          <p className="mt-5 text-base font-light leading-relaxed text-forest/70 md:text-lg">
            Problem-solving playbooks, engineering insights, and growth guides built for modern fashion labels and boutique retailers.
          </p>
        </Reveal>

        {/* Filters and Search Bar Row */}
        <Reveal delay={0.1} className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-forest/10 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-forest text-cream'
                    : 'bg-white/70 text-forest/70 hover:bg-white border border-forest/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:max-w-xs order-1 md:order-2">
            <input
              type="text"
              placeholder="Search topics or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-forest/10 bg-white/70 pl-10 pr-4 py-2.5 text-xs text-forest placeholder-forest/30 focus:border-lime focus:bg-white focus:outline-none transition-all duration-300"
            />
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-forest/30" />
          </div>
        </Reveal>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, idx) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={article.id}
                  className="flex flex-col h-full bg-white/60 border border-forest/5 rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(15,61,46,0.01)] hover:shadow-[0_12px_32px_rgba(15,61,46,0.05)] hover:border-lime-dark/25 transition-all duration-300 group"
                >
                  {/* Card Image */}
                  <Link to={`/blog/${article.id}`} className="block overflow-hidden aspect-[16/10] relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute left-4 bottom-4 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#0F3D2E] bg-lime/90 backdrop-blur rounded-full">
                      {article.category}
                    </span>
                  </Link>

                  {/* Card Body */}
                  <div className="flex-1 flex flex-col p-6">
                    {/* Metadata Row */}
                    <div className="flex items-center gap-4 text-[10px] text-forest/40 uppercase tracking-wider mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <Link to={`/blog/${article.id}`}>
                      <h3 className="font-serif-display text-xl md:text-2xl font-semibold text-forest leading-snug tracking-tight hover:text-lime-dark transition-colors duration-300">
                        {article.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="mt-3 text-xs font-light text-forest/75 leading-relaxed flex-grow">
                      {article.excerpt}
                    </p>

                    {/* Action Link */}
                    <div className="mt-6 pt-4 border-t border-forest/5 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-forest/40 uppercase tracking-widest">
                        By {article.author}
                      </span>
                      <Link
                        to={`/blog/${article.id}`}
                        className="group/btn inline-flex items-center gap-1 text-xs font-semibold text-lime-dark hover:text-forest transition-colors duration-300"
                      >
                        Read Article
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <Reveal className="col-span-full py-16 text-center text-forest/60">
                <p className="text-lg">No articles found matching your query.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-4 text-xs font-semibold text-lime-dark hover:underline uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </Reveal>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
