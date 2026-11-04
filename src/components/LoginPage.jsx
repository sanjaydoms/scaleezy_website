import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Mail, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import usePageMeta from './usePageMeta';
import { BrandPatternAtelier } from './BrandPattern';

export default function LoginPage() {
  usePageMeta("Sign In to Scaleezy — Fashion Retail Operating System", "Log in to your Scaleezy boutique workspace to manage inventory, CRM, POS billing, and virtual try-ons.");

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim() || !password.trim()) {
      setErrorMessage('Please enter both your work email and password.');
      return;
    }

    setIsSubmitting(true);
    // Simulate authentication check / demo handling
    setTimeout(() => {
      setIsSubmitting(false);
      // For demonstration in preview mode, show friendly notification or redirect
      setErrorMessage('Scaleezy multi-tenant workspaces are accessed via your custom domain (e.g. yourbrand.scaleezy.com). If you are a new store, please request platform access.');
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] text-[var(--color-charcoal)] flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 relative overflow-hidden">
      <BrandPatternAtelier opacity={0.08} size={380} />

      <div className="max-w-md w-full mx-auto relative z-10 my-auto">
        
        {/* Top Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <img
              src="/assets/logo.png"
              alt="Scaleezy"
              width="180"
              height="30"
              className="h-8 w-auto mx-auto object-contain"
            />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-primary)] mb-2">
            Sign in to your workspace
          </h1>
          <p className="text-sm text-gray-700">
            Enter your credentials to access your store's dashboard
          </p>
        </div>

        {/* Card Form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-7 sm:p-9 rounded-3xl border border-black/10 shadow-xl"
        >
          {errorMessage && (
            <div role="alert" className="mb-5 p-3.5 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs sm:text-sm leading-relaxed">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            
            <div className="space-y-1.5">
              <label htmlFor="login-email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                Work Email
              </label>
              <div className="relative">
                <input
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@yourboutique.com"
                  className="w-full h-12 pl-10 pr-4 text-sm bg-white border border-black/20 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 outline-none transition-all"
                />
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black/40" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="login-password" className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Password
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    setErrorMessage('Please contact your store administrator or email support@scaleezy.com to reset your workspace password.');
                  }}
                  className="text-xs text-emerald-800 hover:underline font-medium"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full h-12 pl-10 pr-10 text-sm bg-white border border-black/20 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 outline-none transition-all"
                />
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black/40" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-black/40 hover:text-black"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                />
                <span>Remember this device</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-dark w-full justify-center mt-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* New to Scaleezy banner */}
          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs sm:text-sm text-gray-600 mb-3">
              Don't have a Scaleezy store workspace yet?
            </p>
            <Link
              to="/request-access"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-50 text-[var(--color-primary)] font-semibold text-sm hover:bg-emerald-100 transition-colors border border-emerald-700/25 shadow-xs"
            >
              <span>Request Platform Access</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

        {/* Security Assurance */}
        <div className="mt-6 text-center text-xs text-gray-600 flex items-center justify-center gap-2">
          <ShieldCheck size={14} className="text-emerald-700" />
          <span>256-bit encrypted enterprise cloud infrastructure</span>
        </div>
      </div>

      {/* Mini Footer */}
      <div className="max-w-md w-full mx-auto text-center text-xs text-gray-500 pt-6">
        <span>© {new Date().getFullYear()} Scaleezy. Need assistance? </span>
        <a href="mailto:support@scaleezy.com" className="text-[var(--color-primary)] font-medium hover:underline">
          Contact Support
        </a>
      </div>
    </div>
  );
}
