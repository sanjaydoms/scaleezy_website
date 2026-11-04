import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  Clock, 
  Calendar, 
  Share2, 
  CheckCircle2, 
  ArrowLeft, 
  Copy, 
  Check, 
  Sparkles, 
  ChevronRight, 
  ArrowUpRight, 
  BookOpen, 
  TrendingUp,
  MessageCircle,
  Building2
} from 'lucide-react';

function LinkedInIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function TwitterIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
import { blogs } from '../data/blogs';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogs.find(b => b.slug === slug || b.slug === '/blog/' + slug || '/blog/' + b.slug === slug);

  usePageMeta(
    post ? `${post.title} — Scaleezy` : "Article — Scaleezy",
    post?.excerpt || "Practical guides on inventory, customer retention, marketing and operations for boutiques and apparel brands."
  );

  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState('');

  // Scroll Progress Tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parse Headings for Dynamic Table of Contents
  const headings = useMemo(() => {
    if (!post?.content) return [];
    const items = [];
    const lines = post.content.split('\n');
    lines.forEach((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim().replace(/\*\*/g, '');
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        items.push({ level, text, id });
      }
    });
    return items;
  }, [post?.content]);

  // Track active heading on scroll
  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeadingId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  // Calculate estimated reading time
  const readingTime = useMemo(() => {
    if (!post?.content) return 3;
    const words = post.content.trim().split(/\s+/).length;
    return Math.max(2, Math.ceil(words / 200));
  }, [post?.content]);

  // Related articles (same category first, then others)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const sameCategory = blogs.filter(b => b.id !== post.id && b.category === post.category);
    const otherCategories = blogs.filter(b => b.id !== post.id && b.category !== post.category);
    return [...sameCategory, ...otherCategories].slice(0, 3);
  }, [post]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareWhatsApp = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Check out this retail insight from Scaleezy: "${post.title}"\n${window.location.href}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    }
  };

  const handleShareLinkedIn = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }
  };

  const handleShareTwitter = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Great read on apparel commerce: "${post.title}" by @scaleezy`);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col pt-24 bg-[var(--color-warm-white)]">
        <div className="flex-grow flex items-center justify-center flex-col text-center px-6">
          <span className="w-16 h-16 rounded-full bg-emerald-100 text-[var(--color-primary)] flex items-center justify-center mb-4">
            <BookOpen size={30} />
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-3">
            Article Not Found
          </h1>
          <p className="mb-8 text-gray-600 max-w-md">
            The retail intelligence report or blog post you are looking for does not exist or may have been relocated.
          </p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-medium hover:bg-emerald-900 transition-colors shadow-sm"
          >
            <ArrowLeft size={16} /> Return to Retail Insights
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": [post.img],
    "datePublished": new Date(post.date).toISOString(),
    "author": [{
      "@type": "Organization",
      "name": "Scaleezy Retail Intelligence Desk",
      "url": "https://www.scaleezy.com"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Scaleezy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.scaleezy.com/logo.png"
      }
    }
  };

  const howToSchema = post.id === 14 ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": post.title,
    "description": post.excerpt,
    "step": [
      {
        "@type": "HowToStep",
        "name": "Use a clear category indicator",
        "text": "Start your SKU with a short code for the category, like SAR for Saree."
      },
      {
        "@type": "HowToStep",
        "name": "Include fabric or style",
        "text": "Add a fabric code, like SLK for Silk or COT for Cotton."
      },
      {
        "@type": "HowToStep",
        "name": "Add size and color",
        "text": "Ensure your SKU specifies color (RED) and size (FS) so stock remains accurate."
      }
    ]
  } : null;

  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] pt-20 flex flex-col selection:bg-emerald-100 selection:text-[var(--color-primary)]">
      {/* Dynamic Reading Progress Bar Fixed to Top */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-black/5">
        <div 
          className="h-full bg-gradient-to-r from-[var(--color-primary)] to-emerald-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}

      <main className="flex-grow">
        {/* ============================================================== */}
        {/* EDITORIAL HERO SECTION                                         */}
        {/* ============================================================== */}
        <header className="relative pt-8 sm:pt-14 pb-8 sm:pb-12 bg-gradient-to-b from-white/60 to-transparent border-b border-black/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gray-500 mb-6 flex-wrap">
              <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
              <ChevronRight size={13} className="text-gray-400" />
              <Link to="/blogs" className="hover:text-[var(--color-primary)] transition-colors">Insights</Link>
              <ChevronRight size={13} className="text-gray-400" />
              <span className="text-[var(--color-primary)] truncate max-w-[200px] sm:max-w-none">{post.category}</span>
            </nav>

            {/* Badges & Meta Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 font-semibold text-[var(--color-primary)] uppercase tracking-wider text-xs">
                <Sparkles size={12} className="text-emerald-600" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-gray-500 font-medium">
                <Calendar size={14} className="text-gray-400" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-gray-500 font-medium">
                <Clock size={14} className="text-gray-400" />
                {readingTime} min read
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-primary)] mb-6 sm:mb-8 leading-[1.12] text-balance">
              {post.title}
            </h1>

            {/* Lead Excerpt */}
            {post.excerpt && (
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-8 max-w-4xl text-balance">
                {post.excerpt}
              </p>
            )}

            {/* Author Byline & Social Share Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-black/8">
              {/* Author Desk Credential */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-2 ring-emerald-100">
                  SZ
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[var(--color-charcoal)]">Scaleezy Retail Intelligence Desk</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">Retail systems architecture & multi-store intelligence</p>
                </div>
              </div>

              {/* Social Share Toolbar */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 transition-all shadow-2xs cursor-pointer"
                  title="Copy Link to Clipboard"
                >
                  {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                </button>
                <button
                  onClick={handleShareWhatsApp}
                  className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600 text-gray-600 transition-colors shadow-2xs cursor-pointer"
                  title="Share on WhatsApp"
                  aria-label="Share on WhatsApp"
                >
                  <MessageCircle size={15} />
                </button>
                <button
                  onClick={handleShareLinkedIn}
                  className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 text-gray-600 transition-colors shadow-2xs cursor-pointer"
                  title="Share on LinkedIn"
                  aria-label="Share on LinkedIn"
                >
                  <LinkedInIcon size={15} />
                </button>
                <button
                  onClick={handleShareTwitter}
                  className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-100 text-gray-600 transition-colors shadow-2xs cursor-pointer"
                  title="Share on X"
                  aria-label="Share on X"
                >
                  <TwitterIcon size={14} />
                </button>
              </div>
            </div>

          </div>
        </header>

        {/* ============================================================== */}
        {/* TWO-COLUMN EDITORIAL CONTENT LAYOUT                            */}
        {/* ============================================================== */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          
          {/* Featured Hero Banner Image */}
          <div className="w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-gray-100 mb-10 sm:mb-14 rounded-2xl sm:rounded-3xl shadow-xl border border-black/8 relative">
            <img 
              src={post.img} 
              alt={post.title} 
              decoding="async"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Grid: Main Column (70%) + Sticky Sidebar (30%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* MAIN ARTICLE CONTENT (lg:col-span-8) */}
            <article className="lg:col-span-8 min-w-0">

              {/* Executive Summary / Key Takeaways Callout Card */}
              <div className="mb-10 sm:mb-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 border border-emerald-200/80 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                    <Sparkles size={13} />
                  </span>
                  <h3 className="font-bold text-xs sm:text-sm tracking-wider uppercase text-[var(--color-primary)]">
                    Executive Takeaways • 60-Second Brief
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium mb-3">
                  Key strategic points for apparel boutique owners, multi-store retailers, and fashion brand founders:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-800">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Real-time inventory and clienteling intelligence prevent stockouts and dead stock.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Multi-store synchronization eliminates manual reconciliations across retail locations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Unified billing, CRM, and WhatsApp campaigns increase repeat festive visits by up to 34%.</span>
                  </li>
                </ul>
              </div>

              {/* Markdown Styled Typography */}
              <div className="prose prose-base sm:prose-lg max-w-none text-gray-800 leading-relaxed">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ node, children, ...props }) => {
                      const text = String(children);
                      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                      return (
                        <h2 
                          id={id}
                          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-primary)] mt-10 sm:mt-14 mb-4 pt-4 border-t border-black/5 flex items-center gap-2 group scroll-mt-24"
                          {...props}
                        >
                          <span className="w-1.5 h-6 bg-[var(--color-primary)] rounded-full shrink-0"></span>
                          <span>{children}</span>
                        </h2>
                      );
                    },
                    h3: ({ node, children, ...props }) => {
                      const text = String(children);
                      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                      return (
                        <h3 
                          id={id}
                          className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-primary)] mt-8 sm:mt-10 mb-3 scroll-mt-24"
                          {...props}
                        >
                          {children}
                        </h3>
                      );
                    },
                    p: ({ node, children, ...props }) => (
                      <p className="text-base sm:text-lg text-gray-800 leading-relaxed sm:leading-loose mb-5 font-normal" {...props}>
                        {children}
                      </p>
                    ),
                    ul: ({ node, children, ...props }) => (
                      <ul className="space-y-2.5 my-6 list-none pl-0 text-base sm:text-lg text-gray-800" {...props}>
                        {children}
                      </ul>
                    ),
                    li: ({ node, children, ...props }) => (
                      <li className="flex items-start gap-3 pl-1 leading-relaxed" {...props}>
                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2.5 shrink-0" />
                        <span className="flex-1">{children}</span>
                      </li>
                    ),
                    blockquote: ({ node, children, ...props }) => (
                      <blockquote className="my-8 pl-6 sm:pl-8 py-4 border-l-4 border-[var(--color-primary)] bg-emerald-50/40 rounded-r-2xl italic text-lg sm:text-xl text-[var(--color-primary)] font-serif relative" {...props}>
                        {children}
                      </blockquote>
                    ),
                    a: ({ node, href, children, ...props }) => {
                      const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
                      if (isInternal) {
                        return (
                          <Link 
                            to={href} 
                            className="text-[var(--color-primary)] font-bold underline underline-offset-4 decoration-emerald-300 hover:decoration-[var(--color-primary)] hover:text-emerald-950 transition-colors inline-flex items-center gap-0.5"
                            {...props}
                          >
                            {children}
                          </Link>
                        );
                      }
                      return (
                        <a 
                          href={href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[var(--color-primary)] font-bold underline underline-offset-4 decoration-emerald-300 hover:decoration-[var(--color-primary)] hover:text-emerald-950 transition-colors inline-flex items-center gap-0.5"
                          {...props}
                        >
                          {children}
                          <ArrowUpRight size={13} className="shrink-0" />
                        </a>
                      );
                    },
                    table: ({ node, children, ...props }) => (
                      <div className="overflow-x-auto w-full my-8 rounded-xl border border-gray-200 shadow-xs">
                        <table className="w-full text-left border-collapse text-sm sm:text-base" {...props}>
                          {children}
                        </table>
                      </div>
                    ),
                    th: ({ node, children, ...props }) => (
                      <th className="bg-gray-100 font-bold text-[var(--color-primary)] p-3 sm:p-4 border-b border-gray-200 text-xs sm:text-sm uppercase tracking-wider" {...props}>
                        {children}
                      </th>
                    ),
                    td: ({ node, children, ...props }) => (
                      <td className="p-3 sm:p-4 border-b border-gray-100 text-gray-700" {...props}>
                        {children}
                      </td>
                    ),
                    code: ({ node, inline, children, ...props }) => {
                      if (inline) {
                        return (
                          <code className="px-2 py-0.5 rounded-md bg-gray-100 text-emerald-900 font-mono text-sm font-semibold border border-gray-200" {...props}>
                            {children}
                          </code>
                        );
                      }
                      return (
                        <pre className="p-4 rounded-xl bg-gray-900 text-emerald-400 font-mono text-xs sm:text-sm overflow-x-auto my-6 border border-gray-800">
                          <code {...props}>{children}</code>
                        </pre>
                      );
                    }
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Post-Article Conversion Banner */}
              <div className="mt-14 p-8 rounded-3xl bg-[var(--color-primary)] text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 max-w-xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-2 inline-block">
                    Scaleezy Commerce Engine
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                    Modernize your apparel boutique today.
                  </h3>
                  <p className="text-emerald-100 text-sm sm:text-base mb-6 leading-relaxed">
                    Stop fighting disconnected spreadsheets, manual bill books, and dead inventory. Switch to India&apos;s fastest retail platform.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to="/book-a-demo"
                      className="px-6 py-3 rounded-full bg-white text-[var(--color-primary)] font-bold text-sm hover:bg-emerald-50 transition-colors shadow-md inline-flex items-center gap-2"
                    >
                      <span>Book a Personalized Demo</span>
                      <ArrowUpRight size={16} />
                    </Link>
                    <Link
                      to="/modules"
                      className="px-6 py-3 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors"
                    >
                      Explore All Modules
                    </Link>
                  </div>
                </div>
              </div>

              {/* Author Biography Footer Card */}
              <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-black/8 shadow-2xs flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)] text-white font-serif font-bold text-2xl flex items-center justify-center shrink-0 shadow-md">
                  SZ
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                    <h4 className="font-bold text-base text-[var(--color-charcoal)]">
                      Scaleezy Retail Intelligence Desk
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 text-center sm:text-left">
                    Our retail intelligence team publishes deep-dive playbooks, inventory optimization benchmarks, and multi-store management guides tailored specifically for Indian fashion designers, boutique owners, and apparel brand founders.
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-[var(--color-primary)]">
                    <Link to="/blogs" className="hover:underline flex items-center gap-1">
                      More Articles by Desk <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>

            </article>

            {/* STICKY EDITORIAL SIDEBAR (lg:col-span-4) */}
            <aside className="lg:col-span-4 w-full sticky top-28 space-y-8">
              
              {/* Dynamic Table of Contents */}
              {headings.length > 0 && (
                <div className="p-6 rounded-2xl bg-white border border-black/8 shadow-2xs">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                    <BookOpen size={16} className="text-[var(--color-primary)]" />
                    <h3 className="font-bold text-xs uppercase tracking-wider text-[var(--color-charcoal)]">
                      On This Page
                    </h3>
                  </div>
                  <nav className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                    {headings.map((h, i) => (
                      <a
                        key={i}
                        href={`#${h.id}`}
                        className={`block text-xs leading-relaxed py-1 transition-colors ${
                          h.level === 3 ? 'pl-3 text-gray-500 hover:text-gray-900' : 'font-semibold text-gray-700 hover:text-[var(--color-primary)]'
                        } ${activeHeadingId === h.id ? 'text-[var(--color-primary)] font-bold border-l-2 border-[var(--color-primary)] pl-2' : ''}`}
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Conversion CTA Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-emerald-50/50 border border-emerald-200/60 shadow-sm text-center">
                <span className="w-12 h-12 rounded-full bg-emerald-100 text-[var(--color-primary)] flex items-center justify-center mx-auto mb-3">
                  <Building2 size={22} />
                </span>
                <h4 className="font-bold text-base text-[var(--color-charcoal)] mb-2">
                  Operating multi-store or boutique retail?
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-5">
                  See how Scaleezy replaces 4 disjointed tools with 1 connected apparel ecosystem.
                </p>
                <Link
                  to="/book-a-demo"
                  className="w-full py-2.5 px-4 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold hover:bg-emerald-900 transition-colors shadow-sm inline-flex items-center justify-center gap-1.5"
                >
                  <span>Request Live Boutique Demo</span>
                  <ArrowUpRight size={14} />
                </Link>
                <p className="text-[11px] text-gray-500 mt-2.5">
                  ✓ Free setup &bull; No lock-in &bull; Dedicated support
                </p>
              </div>

              {/* Quick Share Widget */}
              <div className="p-5 rounded-2xl bg-white border border-black/8 shadow-2xs text-center">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">
                  Share This Insight
                </p>
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={handleShareWhatsApp}
                    className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 text-gray-700 transition-colors cursor-pointer"
                    title="WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={16} />
                  </button>
                  <button
                    onClick={handleShareLinkedIn}
                    className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 text-gray-700 transition-colors cursor-pointer"
                    title="LinkedIn"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon size={16} />
                  </button>
                  <button
                    onClick={handleShareTwitter}
                    className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 transition-colors cursor-pointer"
                    title="X / Twitter"
                    aria-label="Twitter"
                  >
                    <TwitterIcon size={15} />
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 transition-colors cursor-pointer"
                    title="Copy Link"
                    aria-label="Copy Link"
                  >
                    {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>

            </aside>

          </div>

        </div>

        {/* ============================================================== */}
        {/* RECOMMENDED INSIGHTS / RELATED POSTS GRID                      */}
        {/* ============================================================== */}
        <section className="bg-white/70 border-t border-black/8 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-1 block">
                  Keep Reading
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-charcoal)]">
                  Recommended Retail Insights
                </h3>
              </div>
              <Link 
                to="/blogs" 
                className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-[var(--color-primary)] hover:underline"
              >
                <span>View All Articles</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/blogs/${rp.slug}`}
                  className="group bg-white rounded-2xl border border-black/8 overflow-hidden shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                    <img
                      src={rp.img}
                      alt={rp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[var(--color-primary)] shadow-xs">
                      {rp.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-gray-500 mb-2 block">{rp.date}</span>
                      <h4 className="font-bold text-base text-[var(--color-charcoal)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 mb-2 leading-snug">
                        {rp.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {rp.excerpt}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[var(--color-primary)]">
                      <span>Read Playbook</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link 
                to="/blogs" 
                className="inline-flex items-center gap-1 text-sm font-bold text-[var(--color-primary)]"
              >
                <span>View All Articles</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
