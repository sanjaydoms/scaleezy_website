import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogs } from '../data/blogs';
import Footer from './Footer';
import usePageMeta from './usePageMeta';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogs.find(b => b.slug === slug || b.slug === '/blog/' + slug || '/blog/' + b.slug === slug);
  usePageMeta(post ? `${post.title} | Scaleezy` : 'Post not found | Scaleezy', post?.excerpt);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col pt-20 bg-[var(--color-warm-white)]">
        <div className="flex-grow flex items-center justify-center flex-col text-center px-6">
          <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Post not found</h1>
          <p className="mb-8 text-gray-700">The blog post you are looking for does not exist.</p>
          <Link to="/blogs" className="text-[var(--color-primary)] hover:text-emerald-700 underline font-bold">← Back to Blogs</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.img],
    "datePublished": new Date(post.date).toISOString(),
    "author": [{
        "@type": "Organization",
        "name": "Scaleezy",
        "url": "https://www.scaleezy.com"
    }]
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
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] pt-20 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}
      <main className="flex-grow">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
          <Link to="/blogs" className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]/80 hover:text-[var(--color-primary)] transition-colors mb-6 sm:mb-10 inline-block">
            ← Back to Insights
          </Link>
          
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-[var(--color-primary)] mb-4 sm:mb-6">
            <span>{post.category}</span>
            <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full"></span>
            <span className="text-gray-600">{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-primary)] mb-6 sm:mb-10 leading-[1.12] text-balance">
            {post.title}
          </h1>

          <div className="w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-gray-200 mb-8 sm:mb-16 rounded-2xl sm:rounded-3xl shadow-xl border border-black/8">
            <img 
              src={post.img} 
              alt={post.title} 
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="overflow-x-auto w-full">
            <div className="prose prose-base sm:prose-lg max-w-none prose-headings:text-[var(--color-primary)] prose-p:text-gray-800 prose-li:text-gray-800 prose-a:text-emerald-700 hover:prose-a:text-[var(--color-primary)] prose-a:underline prose-a:font-bold prose-strong:text-[var(--color-primary)] prose-table:w-full prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:p-2.5 sm:prose-th:p-3 prose-th:bg-gray-100 prose-td:border prose-td:border-gray-300 prose-td:p-2 sm:prose-td:p-3 text-sm sm:text-base">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
