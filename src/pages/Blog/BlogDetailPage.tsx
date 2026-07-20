import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ArrowRight, Sparkles, BookOpen, Share2 } from 'lucide-react';
import { BLOG_ARTICLES, type BlogArticle } from '../../components/blogData';
import { Reveal } from '../../components/motion';
import { triggerBookDemo } from '../../components/BookDemoModal';

export function BlogDetailPage() {
  const { blogId } = useParams<{ blogId: string }>();
  
  // Find current article
  const article = BLOG_ARTICLES.find(art => art.id === blogId);

  if (!article) {
    return (
      <main className="flex min-h-screen w-full items-center bg-[#F5F2EC] px-6 py-28 text-forest md:px-12">
        <div className="mx-auto w-full max-w-lg text-center">
          <p className="eyebrow text-red-600">404 · Article not found</p>
          <h1 className="font-serif-display mt-6 text-4xl leading-tight md:text-6xl text-[#0F3D2E]">
            This article doesn&apos;t exist.
          </h1>
          <p className="mt-5 text-sm font-light text-forest/70">
            The blog post you are looking for might have been moved or renamed.
          </p>
          <Link
            to="/blog"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-deep transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" /> Return to Blog
          </Link>
        </div>
      </main>
    );
  }

  // Find related articles (same category, excluding the current article, max 3)
  const relatedArticles = BLOG_ARTICLES
    .filter(art => art.category === article.category && art.id !== article.id)
    .slice(0, 3);

  // If not enough related in the same category, fill with others
  if (relatedArticles.length < 3) {
    const fallbackArticles = BLOG_ARTICLES
      .filter(art => art.id !== article.id && !relatedArticles.some(r => r.id === art.id))
      .slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...fallbackArticles);
  }

  return (
    <main className="w-full bg-[#F5F2EC] text-forest min-h-screen py-24 md:py-32">
      {/* Article Content Layout */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 mt-8">
        {/* Back Link */}
        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest/50 hover:text-lime-dark transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to all articles
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Body (Column 1-8) */}
          <div className="lg:col-span-8 space-y-8 bg-white/70 border border-forest/5 p-6 md:p-10 rounded-[32px]">
            {/* Header */}
            <div>
              <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-3.5 py-1 text-[9px] text-lime-dark bg-lime/10 uppercase tracking-widest font-bold">
                {article.category}
              </span>
              <h1 className="font-serif-display mt-6 text-3xl leading-[1.05] tracking-tight text-[#0F3D2E] md:text-5xl">
                {article.title}
              </h1>
              
              {/* Meta information row */}
              <div className="flex flex-wrap items-center gap-6 mt-6 pb-6 border-b border-forest/10 text-xs text-forest/50 font-medium">
                <span>By <strong className="text-forest">{article.author}</strong></span>
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {article.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {article.readTime}</span>
              </div>
            </div>

            {/* Showcase Image */}
            <div className="overflow-hidden rounded-2xl aspect-[16/9] border border-forest/5 shadow-sm">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>

            {/* Article Content Render */}
            <div 
              className="prose prose-forest max-w-none text-base md:text-lg font-light leading-relaxed text-forest/80 space-y-6 pt-4
                prose-headings:font-serif-display prose-headings:text-[#0F3D2E] prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:mt-2 prose-p:mb-6
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Keyword tags (Important for indexing and GEO mapping references) */}
            <div className="pt-8 border-t border-forest/10 mt-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-forest/40 block mb-3">Targeted Search Queries</span>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((kw, i) => (
                  <span key={i} className="text-xs bg-forest/5 text-forest/70 px-3 py-1 rounded-full border border-forest/5">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area (Column 9-12) */}
          <div className="lg:col-span-4 space-y-8">
            {/* CTA Widget */}
            <div className="bg-forest text-cream p-8 rounded-[32px] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-lime/10 rounded-full blur-2xl pointer-events-none" />
              <span className="eyebrow inline-flex items-center gap-1 text-[10px] text-lime">
                <Sparkles className="h-3 w-3" /> Scaleezy Suite
              </span>
              <h3 className="font-serif-display text-2xl font-bold mt-4 leading-tight">
                Ready to unify your operations?
              </h3>
              <p className="mt-3 text-xs font-light text-cream/70 leading-relaxed">
                Connect your boutique registers, Shopify store, warehouse inventory, and customer profile pipelines natively.
              </p>
              <button
                onClick={triggerBookDemo}
                className="group mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-lime py-3.5 text-xs font-bold text-forest-deep transition-all duration-300 hover:bg-lime-dark"
              >
                Book a Demo Session
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Related/Sidebar Posts */}
            <div className="bg-white/70 border border-forest/5 p-6 rounded-[32px] space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-forest/50 pb-4 border-b border-forest/10 flex items-center gap-2">
                <BookOpen className="h-4 w-4" /> Related Articles
              </h3>
              <div className="space-y-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/blog/${rel.id}`}
                    className="group block space-y-2 border-b border-forest/5 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-[9px] font-bold uppercase tracking-widest text-lime-dark bg-lime/10 px-2.5 py-0.5 rounded-full inline-block">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-semibold text-forest leading-snug tracking-tight group-hover:text-lime-dark transition-colors duration-300">
                      {rel.title}
                    </h4>
                    <p className="text-[11px] text-forest/50 leading-tight line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
