import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BrandPatternAtelier } from './BrandPattern';
import { submitNewsletter } from '../lib/supabase';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterNotice, setNewsletterNotice] = useState('');
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setIsSubmittingNewsletter(true);
    setNewsletterNotice('');
    try {
      const res = await submitNewsletter(newsletterEmail);
      setNewsletterNotice(res.message || 'Thank you for subscribing! You will receive our latest updates.');
      setNewsletterEmail('');
    } catch (err) {
      console.error('Newsletter error:', err);
      setNewsletterNotice('Unable to subscribe right now. Please try again.');
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  return (
    <footer className="bg-[#0A2F1D] text-white relative overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-0">
      {/* Landing Page Tailoring Background Pattern at 10% Opacity */}
      <BrandPatternAtelier mode="dark" opacity={0.10} size={420} />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Top Section - 4 Distinct Columns: Brand, Modules, Company & Access, and Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 mb-12 sm:mb-16">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-3 sm:col-span-2 space-y-4">
            <Link to="/" className="inline-block group">
              <img 
                src="/assets/logo.png" 
                alt="Scaleezy Logo" 
                width="200"
                height="32"
                decoding="async"
                className="h-[28px] sm:h-[34px] md:h-[36px] w-auto object-contain brightness-0 invert group-hover:opacity-85 transition-opacity" 
              />
            </Link>
            <p className="text-white/80 max-w-sm text-sm sm:text-base leading-relaxed">
              The intelligent operating system built specifically for boutiques and apparel brands. Stop guessing, start growing.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[var(--color-accent)] font-medium border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                Tailored for Retail & D2C
              </span>
            </div>
          </div>

          {/* Column 2: Modules (Separate Column with External Links) */}
          <div className="lg:col-span-3 col-span-1 space-y-4">
            <h4 className="font-bold text-[var(--color-accent)] uppercase tracking-wider text-xs">Modules</h4>
            <nav className="flex flex-col space-y-3">
              <a href="https://inventory.scaleezy.com/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors text-sm font-medium flex items-center justify-between group max-w-[200px]">
                <span>Inventory</span>
                <span className="text-xs text-white/50 group-hover:text-white">↗</span>
              </a>
              <a href="https://crm.scaleezy.com/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors text-sm font-medium flex items-center justify-between group max-w-[200px]">
                <span>CRM</span>
                <span className="text-xs text-white/50 group-hover:text-white">↗</span>
              </a>
              <a href="https://boutique.scaleezy.com/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors text-sm font-medium flex items-center justify-between group max-w-[200px]">
                <span>Boutique</span>
                <span className="text-xs text-white/50 group-hover:text-white">↗</span>
              </a>
              <a href="https://www.tryon2buy.com/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors text-sm font-medium flex items-center justify-between group max-w-[200px]">
                <span>TRYON2BUY</span>
                <span className="text-xs text-white/50 group-hover:text-white">↗</span>
              </a>
              <a href="https://marketing.scaleezy.com/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors text-sm font-medium flex items-center justify-between group max-w-[200px]">
                <span>Marketing</span>
                <span className="text-xs text-white/50 group-hover:text-white">↗</span>
              </a>
              <Link to="/modules" className="text-[var(--color-accent)] hover:underline transition-colors text-sm font-semibold pt-1">All 8 Modules →</Link>
            </nav>
          </div>

          {/* Column 3: Company & Request Access (Separate Column) */}
          <div className="lg:col-span-3 col-span-1 space-y-4">
            <h4 className="font-bold text-[var(--color-accent)] uppercase tracking-wider text-xs">Company & Access</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/about-scaleezy" className="text-white/85 hover:text-white transition-colors text-sm font-medium">About Us</Link>
              <Link to="/how-it-works" className="text-white/85 hover:text-white transition-colors text-sm font-medium">How it Works</Link>
              <Link to="/solutions" className="text-white/85 hover:text-white transition-colors text-sm font-medium">Solutions</Link>
              <Link to="/blogs" className="text-white/85 hover:text-white transition-colors text-sm font-medium">Blog</Link>
              <div className="pt-2 space-y-2 border-t border-white/10">
                <Link to="/request-access" className="text-[var(--color-accent)] hover:underline transition-colors text-sm font-semibold flex items-center gap-1.5">
                  <span>Request Access</span>
                  <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[var(--color-accent)]/20 text-[var(--color-accent)]">Onboarding</span>
                </Link>
                <Link to="/login" className="text-white/85 hover:text-white transition-colors text-sm font-medium block">Log in</Link>
              </div>
            </nav>
          </div>

          {/* Column 4: Dedicated Newsletter Column */}
          <div className="lg:col-span-3 sm:col-span-2 space-y-4">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-1">Stay Updated</span>
              <h4 className="font-bold text-white text-base">Newsletter</h4>
            </div>
            <p className="text-white/75 text-sm leading-relaxed">
              Get boutique retail growth guides, product updates, and fashion commerce insights delivered straight to your inbox.
            </p>
            
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full pl-4 pr-1.5 py-1.5 w-full group focus-within:border-[var(--color-accent)] transition-colors"
            >
              <input
                id="footer-newsletter-email"
                type="email"
                required
                autoComplete="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none w-full text-white placeholder-white/60 text-sm py-1"
              />
              <button 
                type="submit" 
                disabled={isSubmittingNewsletter}
                className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] flex items-center justify-center shrink-0 hover:bg-white hover:text-[var(--color-primary)] transition-all shadow-md active:scale-95 disabled:opacity-60 cursor-pointer" 
                aria-label="Subscribe to newsletter"
              >
                {isSubmittingNewsletter ? (
                  <span className="w-4 h-4 border-2 border-[var(--color-primary)]/30 border-t-[var(--color-primary)] rounded-full animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </form>
            <p role="status" className="text-xs text-white/90 min-h-4">{newsletterNotice}</p>
            <p className="text-[11px] text-white/50">Strictly no spam. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Middle Section: Socials & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-5 pb-2 border-t border-white/15 text-xs sm:text-sm text-white/80 gap-4 text-center sm:text-left">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors font-medium">Instagram</a>
            <a href="#" className="hover:text-white transition-colors font-medium">Twitter</a>
            <a href="#" className="hover:text-white transition-colors font-medium">LinkedIn</a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/75">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>&copy; {new Date().getFullYear()} Scaleezy.</span>
          </div>
        </div>
      </div>

      {/* Footer Panoramic Apparel Commerce Illustration (4K Ultra-HD) */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none mt-2 sm:mt-4">
        <img
          src="/assets/footer-banner-4k.png"
          alt="Scaleezy Connected Apparel Ecosystem Illustration"
          width={3320}
          height={1215}
          loading="lazy"
          decoding="async"
          className="w-full h-auto block opacity-10"
        />
      </div>
    </footer>
  );
}
