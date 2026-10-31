import React from 'react';
import { Link } from 'react-router-dom';
import TypingHeading from './TypingHeading';
import Footer from './Footer';
import usePageMeta from './usePageMeta';
import { blogs } from '../data/blogs';

export default function BlogsPage() {
  usePageMeta("Scaleezy Blog — Insights for Fashion Retail", "Practical guides on inventory, customer retention, marketing and operations for boutiques and apparel brands.");
  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] pt-20 flex flex-col">
      <main className="flex-grow">
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16 md:mb-20">
            <TypingHeading
              align="left"
              line1="Scaleezy insights,"
              line1Class="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-[var(--color-primary)] block text-left mb-1"
              line2Prefix="Strategies for "
              line2Words={[
                'Scaling Fashion Retail.',
                'Festive Stock Planning.',
                'Virtual Try-On Growth.',
                'VIP Client Retention.',
                'Zero Dead Stock.'
              ]}
              line2Class="font-sans font-bold tracking-tight text-[var(--color-primary)] block text-left mt-1 sm:mt-2"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.06] tracking-tight text-left mb-4 sm:mb-6"
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={2800}
              seoText="Scaleezy insights, Strategies for scaling modern apparel commerce."
            />
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Thoughts, trends, and strategies on scaling modern apparel commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {blogs.map((post) => (
              <Link to={`/blog/${post.slug.replace('/blog/', '')}`} key={post.id} className="group cursor-pointer flex flex-col">
                <article className="flex flex-col h-full bg-white rounded-3xl p-5 sm:p-6 border border-black/8 shadow-sm hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-200 mb-5 rounded-2xl shadow-sm">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 text-[11px]">{post.category}</span>
                    <span className="w-1 h-1 bg-emerald-700 rounded-full"></span>
                    <span className="text-[11px] text-gray-600">{post.date}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-emerald-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 mb-5 flex-grow leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                  <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] group-hover:text-emerald-700 transition-colors inline-flex items-center gap-1.5 w-max">
                    <span>Read Article</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
