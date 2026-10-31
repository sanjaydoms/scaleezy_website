import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BrandPatternAtelier } from './BrandPattern';

export default function Footer() {
  // No email service is connected yet, so a signup only shows a notice
  const [newsletterNotice, setNewsletterNotice] = useState('');

  return (
    <footer className="bg-[#0A2F1D] text-white relative overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-0">
      {/* Landing Page Tailoring Background Pattern at 10% Opacity */}
      <BrandPatternAtelier mode="dark" opacity={0.10} size={420} />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10 sm:mb-14">
          
          {/* Brand & Newsletter */}
          <div className="md:col-span-5 space-y-5 sm:space-y-6">
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
            
            <div className="pt-1 sm:pt-2">
              <label htmlFor="footer-newsletter-email" className="block text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-3">Join our newsletter</label>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterNotice('Newsletter signups open soon. Thanks for your interest!');
                }}
                className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full pl-4 pr-1.5 py-1.5 max-w-sm group focus-within:border-[var(--color-accent)] transition-colors"
              >
                <input
                  id="footer-newsletter-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-none outline-none w-full text-white placeholder-white/60 text-sm py-1"
                />
                <button type="submit" className="w-11 h-11 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] flex items-center justify-center shrink-0 hover:bg-white hover:text-[var(--color-primary)] transition-all shadow-md active:scale-95" aria-label="Subscribe to newsletter">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <p role="status" className="mt-2 text-sm text-white/85 min-h-5">{newsletterNotice}</p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-5">
              <h4 className="font-bold text-[var(--color-accent)] uppercase tracking-wider text-xs">Product</h4>
              <nav className="flex flex-col space-y-3 sm:space-y-3.5">
                <Link to="/modules" className="text-white/85 hover:text-white transition-colors text-sm font-medium">Inventory</Link>
                <Link to="/modules" className="text-white/85 hover:text-white transition-colors text-sm font-medium">CRM</Link>
                <Link to="/modules" className="text-white/85 hover:text-white transition-colors text-sm font-medium">Virtual Try-On</Link>
                <Link to="/modules" className="text-white/85 hover:text-white transition-colors text-sm font-medium">Marketing</Link>
              </nav>
            </div>
            
            <div className="space-y-4 sm:space-y-5">
              <h4 className="font-bold text-[var(--color-accent)] uppercase tracking-wider text-xs">Company</h4>
              <nav className="flex flex-col space-y-3 sm:space-y-3.5">
                <Link to="/about-scaleezy" className="text-white/85 hover:text-white transition-colors text-sm font-medium">About Us</Link>
                <Link to="/how-it-works" className="text-white/85 hover:text-white transition-colors text-sm font-medium">How it Works</Link>
                <Link to="/solutions" className="text-white/85 hover:text-white transition-colors text-sm font-medium">Solutions</Link>
                <Link to="/book-a-demo" className="text-white/85 hover:text-white transition-colors text-sm font-medium">Contact</Link>
              </nav>
            </div>

            <div className="space-y-4 sm:space-y-5 col-span-2 sm:col-span-1">
              <h4 className="font-bold text-[var(--color-accent)] uppercase tracking-wider text-xs">Resources</h4>
              <nav className="flex flex-col space-y-3 sm:space-y-3.5">
                <Link to="/blogs" className="text-white/85 hover:text-white transition-colors text-sm font-medium">Blog</Link>
                <a href="#" className="text-white/85 hover:text-white transition-colors text-sm font-medium">API Docs</a>
              </nav>
            </div>
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
