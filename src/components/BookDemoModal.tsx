import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Sparkles, Loader2 } from 'lucide-react';

export function BookDemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    volume: '< 100',
    message: ''
  });

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        volume: '< 100',
        message: ''
      });
    };
    window.addEventListener('open-book-demo', handleOpen);
    return () => window.removeEventListener('open-book-demo', handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsLoading(true);
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#0F3D2E]/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-[32px] border border-[#0F3D2E]/10 bg-[#F5F2EC] p-6 md:p-10 shadow-2xl text-forest"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-forest/5 text-forest/70 hover:bg-forest/10 hover:text-forest transition-colors duration-300"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSuccess ? (
              <div>
                {/* Header */}
                <div className="mb-8">
                  <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-3.5 py-1 text-[10px] text-lime-dark bg-cream-warm/20 uppercase tracking-widest font-semibold">
                    <Sparkles className="h-3 w-3" /> Book a Demo
                  </span>
                  <h3 className="font-serif-display mt-4 text-3xl font-semibold leading-tight text-[#0F3D2E] md:text-4xl">
                    Experience Scaleezy
                  </h3>
                  <p className="mt-2 text-sm text-forest/70">
                    See how our all-in-one platform can streamline your operations, personalise shopping, and unlock growth.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-forest/70 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-forest/10 bg-white/70 px-4 py-3 text-sm text-forest placeholder-forest/30 focus:border-lime focus:bg-white focus:outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-forest/70 mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-forest/10 bg-white/70 px-4 py-3 text-sm text-forest placeholder-forest/30 focus:border-lime focus:bg-white focus:outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-forest/70 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Apparel"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-xl border border-forest/10 bg-white/70 px-4 py-3 text-sm text-forest placeholder-forest/30 focus:border-lime focus:bg-white focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-forest/70 mb-1.5">
                      Monthly Order Volume
                    </label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full rounded-xl border border-forest/10 bg-white/70 px-4 py-3 text-sm text-forest focus:border-lime focus:bg-white focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="< 100">Less than 100 orders</option>
                      <option value="100 - 1,000">100 - 1,000 orders</option>
                      <option value="1,000 - 5,000">1,000 - 5,000 orders</option>
                      <option value="5,000+">More than 5,000 orders</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-forest/70 mb-1.5">
                      Tell us about your requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What bottlenecks are you looking to solve?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-forest/10 bg-white/70 px-4 py-3 text-sm text-forest placeholder-forest/30 focus:border-lime focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group mt-2 w-full flex items-center justify-center gap-2 rounded-xl bg-forest py-4 text-sm font-semibold text-cream hover:bg-forest-deep transition-all duration-300 disabled:opacity-85"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin text-cream" />
                    ) : (
                      <>
                        Book My Demo Session
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime/20 text-[#0F3D2E] mb-6">
                  <CheckCircle2 className="h-10 w-10 text-lime-dark" />
                </div>
                <h3 className="font-serif-display text-3xl font-semibold text-[#0F3D2E] leading-tight">
                  Demo request received!
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest/70">
                  Thank you for reaching out, <span className="font-semibold text-forest">{formData.name}</span>. We've sent a confirmation email to <span className="font-semibold text-forest">{formData.email}</span>. Our experts will be in touch within 24 hours to schedule your personalized tour.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 rounded-xl bg-forest px-8 py-3.5 text-sm font-semibold text-cream hover:bg-forest-deep transition-all duration-300 shadow-lg"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Utility function to trigger the modal globally
export function triggerBookDemo() {
  window.dispatchEvent(new CustomEvent('open-book-demo'));
}
