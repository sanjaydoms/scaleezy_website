import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BrandPatternAtelier } from './BrandPattern';
import { submitNewsletter } from '../lib/supabase';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function XTwitterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

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
    <footer className="bg-[#1C421D] text-white relative overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-0">
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
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[var(--color-accent)] font-medium border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                Tailored for Retail & D2C
              </span>
            </div>
            {/* Social Profile Badges */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.instagram.com/scaleeasy_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] text-white/90 flex items-center justify-center transition-all border border-white/15 hover:scale-105 active:scale-95"
                title="Scaleezy on Instagram"
                aria-label="Follow Scaleezy on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@Scaleeasyofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF0000] hover:text-white text-white/90 flex items-center justify-center transition-all border border-white/15 hover:scale-105 active:scale-95"
                title="Scaleezy on YouTube"
                aria-label="Subscribe to Scaleezy on YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/scaleeasy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black text-white/90 flex items-center justify-center transition-all border border-white/15 hover:scale-105 active:scale-95"
                title="Scaleezy on X (formerly Twitter)"
                aria-label="Follow Scaleezy on X"
              >
                <XTwitterIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Modules (Separate Column with Live & Upcoming Status) */}
          <div className="lg:col-span-3 col-span-1 space-y-4">
            <h4 className="font-bold text-[var(--color-accent)] uppercase tracking-wider text-xs">Modules</h4>
            <nav className="flex flex-col space-y-3">
              <a href="https://inventory.scaleezy.com/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors text-sm font-medium flex items-center justify-between group max-w-[200px]">
                <span>Inventory</span>
                <span className="text-xs text-white/50 group-hover:text-white">↗</span>
              </a>
              <a href="https://boutique.scaleezy.com/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors text-sm font-medium flex items-center justify-between group max-w-[200px]">
                <span>Boutique POS</span>
                <span className="text-xs text-white/50 group-hover:text-white">↗</span>
              </a>
              <a href="https://www.tryon2buy.com/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors text-sm font-medium flex items-center justify-between group max-w-[200px]">
                <span>Tryon2buy</span>
                <span className="text-xs text-white/50 group-hover:text-white">↗</span>
              </a>
              <a href="https://marketing.scaleezy.com/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors text-sm font-medium flex items-center justify-between group max-w-[200px]">
                <span>Marketing</span>
                <span className="text-xs text-white/50 group-hover:text-white">↗</span>
              </a>
              <Link to="/modules/crm" className="text-white/75 hover:text-white transition-colors text-sm font-medium flex items-center justify-between group max-w-[200px]">
                <span>CRM</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-400 text-black leading-none">Soon</span>
              </Link>
              <Link to="/modules" className="text-[var(--color-accent)] hover:underline transition-colors text-sm font-semibold pt-1">All 9 Modules →</Link>
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
          <div className="flex items-center gap-5 sm:gap-6">
            <a 
              href="https://www.instagram.com/scaleeasy_official/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[var(--color-accent)] transition-colors font-medium flex items-center gap-1.5"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.youtube.com/@Scaleeasyofficial" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[var(--color-accent)] transition-colors font-medium flex items-center gap-1.5"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>YouTube</span>
            </a>
            <a 
              href="https://x.com/scaleeasy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[var(--color-accent)] transition-colors font-medium flex items-center gap-1.5"
            >
              <XTwitterIcon className="w-3.5 h-3.5" />
              <span>X (Twitter)</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/75">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
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
