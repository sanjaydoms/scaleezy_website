import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, FileText, X, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { Sidebar } from './sections/Sidebar';
import { Header } from './sections/Header';
import { MetricsSection } from './sections/MetricsSection';
import { FastMoversSection } from './sections/FastMoversSection';
import { AIForecastSection } from './sections/AIForecastSection';
import { RecentActivitySection } from './sections/RecentActivitySection';
import { Button } from './components/Button';
import { Reveal, EASE } from '../../components/motion';

export function InventoryPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('inventory-dashboard');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Modals / Overlays state
  const [activeModal, setActiveModal] = useState<'intake' | 'product' | 'order' | null>(null);

  // Helper to show a simple premium toast
  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleAction = (actionName: string) => {
    triggerToast(`${actionName} action triggered successfully.`);
  };

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveModal(null);
    triggerToast('Stock intake registered and logs updated.');
  };

  const handleAddProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveModal(null);
    triggerToast('New style successfully added to catalog.');
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveModal(null);
    triggerToast('AI-recommended Purchase Order dispatched.');
  };

  return (
    <div className="flex min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans antialiased overflow-x-hidden">
      {/* Sidebar Navigation */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeItem={activeTab}
        onSelectSubitem={(id) => {
          setActiveTab(id);
          triggerToast(`Navigated to ${id.replace(/-/g, ' ')}`);
        }}
      />

      {/* Main Dashboard Body */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <Header
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          onSearchChange={(val) => setSearchQuery(val)}
        />

        {/* Dashboard Content */}
        <main className="flex-1 p-6 md:p-8 space-y-8 max-w-[1600px] w-full mx-auto pb-16">
          
          {/* Page Title & primary header actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Reveal y={15}>
              <div>
                <h1 className="font-serif-display text-3xl sm:text-4xl tracking-tight text-[#1A1A1A]">
                  Inventory Overview
                </h1>
                <p className="text-sm text-[#706E6B] mt-1">
                  Real-time stock levels, operations, and AI restock guidelines.
                </p>
              </div>
            </Reveal>

            {/* Action buttons with maroon brand color */}
            <Reveal y={15} delay={0.05}>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setActiveModal('intake')}
                  icon={<FileText className="h-4 w-4" />}
                >
                  Stock Intake
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setActiveModal('product')}
                  icon={<Plus className="h-4 w-4" />}
                >
                  Add Product
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Metrics scorecard grid */}
          <Reveal y={20} delay={0.1}>
            <MetricsSection onCardClick={(metricId) => triggerToast(`Clicked ${metricId} card details.`)} />
          </Reveal>

          {/* Main Dashboard Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* Column 1: Fast Movers */}
            <Reveal y={25} delay={0.15} className="h-full">
              <FastMoversSection 
                searchQuery={searchQuery}
                onViewAllClick={() => handleAction('View All Fast Movers')}
              />
            </Reveal>

            {/* Column 2: AI Forecast */}
            <Reveal y={25} delay={0.2} className="h-full">
              <AIForecastSection 
                onOrderClick={() => setActiveModal('order')}
              />
            </Reveal>

            {/* Column 3: Recent Activity */}
            <Reveal y={25} delay={0.25} className="h-full">
              <RecentActivitySection 
                onViewAllLogsClick={() => handleAction('View All Activities')}
              />
            </Reveal>

          </div>
        </main>
      </div>

      {/* Floating Interactive Toast feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0D1712] text-[#FAF8F5] px-4.5 py-3 rounded-xl border border-white/10 shadow-2xl"
          >
            <span className="flex h-5 w-5 rounded-full bg-[#C2FF3D] text-[#0F1913] items-center justify-center shrink-0">
              <Check className="h-3 w-3" strokeWidth={2.5} />
            </span>
            <span className="text-sm font-medium">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals & Slide-overs */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-[#0F1913]/60 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative bg-white border border-[#E5E2DD] rounded-3xl w-full max-w-md p-6 overflow-hidden shadow-2xl z-10"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-[#1A1A1A]/5 text-[#706E6B] hover:text-[#1A1A1A] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Intake Modal */}
              {activeModal === 'intake' && (
                <form onSubmit={handleIntakeSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-[#1A1A1A] flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#25090B]" />
                    Register Stock Intake
                  </h3>
                  <p className="text-xs text-[#706E6B]">
                    Select destination location and SKU details to update live stock count.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-1">Location</label>
                      <select className="w-full bg-[#FAF8F5] border border-[#E5E2DD] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#25090B]">
                        <option>Main Warehouse</option>
                        <option>Boutique A</option>
                        <option>Boutique B</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-1">Style Selection</label>
                      <select className="w-full bg-[#FAF8F5] border border-[#E5E2DD] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#25090B]">
                        <option>Linen Wide-Leg Pants</option>
                        <option>Classic Cotton T-Shirt</option>
                        <option>Denim Jacket</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-1">Quantity (Units)</label>
                      <input
                        type="number"
                        defaultValue="50"
                        min="1"
                        required
                        className="w-full bg-[#FAF8F5] border border-[#E5E2DD] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#25090B]"
                      />
                    </div>
                  </div>
                  <div className="pt-4 flex items-center gap-3">
                    <Button variant="outline" type="button" className="w-full text-xs font-semibold uppercase" onClick={() => setActiveModal(null)}>
                      Cancel
                    </Button>
                    <Button variant="primary" type="submit" className="w-full text-xs font-semibold uppercase">
                      Confirm Intake
                    </Button>
                  </div>
                </form>
              )}

              {/* Add Product Modal */}
              {activeModal === 'product' && (
                <form onSubmit={handleAddProductSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-[#1A1A1A] flex items-center gap-2">
                    <Plus className="h-5 w-5 text-[#25090B]" />
                    Add Style to Catalog
                  </h3>
                  <p className="text-xs text-[#706E6B]">
                    Define basic attributes for the new apparel line to generate default SKUs.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-1">Product Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Silk Shirt"
                        required
                        className="w-full bg-[#FAF8F5] border border-[#E5E2DD] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#25090B]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-1">Category</label>
                        <select className="w-full bg-[#FAF8F5] border border-[#E5E2DD] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#25090B]">
                          <option>T-Shirts</option>
                          <option>Bottoms</option>
                          <option>Knitwear</option>
                          <option>Dresses</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-1">Initial Price</label>
                        <input
                          type="text"
                          placeholder="$95.00"
                          required
                          className="w-full bg-[#FAF8F5] border border-[#E5E2DD] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#25090B]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center gap-3">
                    <Button variant="outline" type="button" className="w-full text-xs font-semibold uppercase" onClick={() => setActiveModal(null)}>
                      Cancel
                    </Button>
                    <Button variant="primary" type="submit" className="w-full text-xs font-semibold uppercase">
                      Create Product
                    </Button>
                  </div>
                </form>
              )}

              {/* PO Restock Modal */}
              {activeModal === 'order' && (
                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-[#1A1A1A] flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-[#4F46E5]" />
                    AI Recommended Purchase Order
                  </h3>
                  <p className="text-xs text-[#706E6B]">
                    Review details before sending purchase request to supplier to cover stockout risk.
                  </p>
                  
                  <div className="p-4 bg-[#F0F3FF] border border-[#C7D2FE] rounded-2xl space-y-3 mt-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#706E6B]">Product:</span>
                      <span className="font-bold text-[#1A1A1A]">Denim Jacket</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#706E6B]">Recommended Quantity:</span>
                      <span className="font-bold text-[#1A1A1A]">150 units</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#706E6B]">Forecast Confidence:</span>
                      <span className="font-bold text-[#16A34A]">94% Accuracy Score</span>
                    </div>
                    <div className="flex justify-between border-t border-[#C7D2FE]/60 pt-2 font-bold text-sm">
                      <span>Total Estimated Cost:</span>
                      <span className="text-[#1A1A1A]">$5,250.00</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-3">
                    <Button variant="outline" type="button" className="w-full text-xs font-semibold uppercase" onClick={() => setActiveModal(null)}>
                      Reject
                    </Button>
                    <Button variant="primary" type="submit" className="w-full text-xs font-semibold uppercase flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] focus-visible:ring-[#4F46E5]">
                      <Sparkles className="h-3.5 w-3.5" />
                      Dispath Order
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
