import React from 'react';
import { Sparkles, AlertCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

interface AIForecastSectionProps {
  onOrderClick?: () => void;
}

export function AIForecastSection({ onOrderClick }: AIForecastSectionProps) {
  return (
    <div className="bg-white border border-[#E5E2DD] rounded-3xl p-6 flex flex-col h-full hover:shadow-sm transition-shadow">
      {/* Header */}
      <div className="flex items-center gap-2 pb-5 border-b border-[#E5E2DD]/50">
        <span className="p-1.5 rounded-lg bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center shrink-0">
          <Sparkles className="h-4 w-4" />
        </span>
        <h3 className="text-lg font-bold text-[#1A1A1A]">AI Forecast Guidance</h3>
      </div>

      {/* Focus Alert Box */}
      <div className="flex-1 mt-5 flex flex-col gap-5 justify-between">
        <div className="space-y-4">
          <p className="text-xs font-semibold text-[#706E6B] uppercase tracking-wider">
            Critical stock alert
          </p>
          
          {/* Lavender Focus Card */}
          <div className="bg-[#F0F3FF] border border-[#C7D2FE] rounded-2xl p-5 relative overflow-hidden">
            {/* Sparkle background elements */}
            <div className="absolute right-0 top-0 translate-x-2 -translate-y-2 opacity-5">
              <Sparkles className="h-24 w-24 text-[#4F46E5]" />
            </div>

            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-xl bg-white overflow-hidden border border-[#C7D2FE] shrink-0">
                <img
                  src="/ab535969-817b-4993-8338-e2f262fbd8c8.jpg"
                  alt="Denim Jacket"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-extrabold text-[#1A1A1A] text-lg">Denim Jacket</h4>
                <p className="text-xs text-[#706E6B] uppercase tracking-wider mt-0.5">Classic Outerwear</p>
              </div>
            </div>

            {/* Projected Stockout Warning */}
            <div className="mt-5 flex items-center gap-2 text-[#DC2626] bg-red-50 border border-red-100 px-3.5 py-2.5 rounded-xl">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <p className="text-xs font-semibold leading-tight">
                Projected stockout: <span className="font-extrabold">Oct 24 (4 days)</span>
              </p>
            </div>

            {/* Grid Panel for metrics */}
            <div className="grid grid-cols-2 gap-4 mt-5 border-t border-[#C7D2FE]/60 pt-4">
              <div>
                <p className="text-[10px] text-[#706E6B] uppercase tracking-wider font-semibold">Recommended Qty</p>
                <p className="font-extrabold text-[#1A1A1A] text-base mt-1">150 units</p>
              </div>
              <div>
                <p className="text-[10px] text-[#706E6B] uppercase tracking-wider font-semibold">Confidence</p>
                <p className="font-extrabold text-[#16A34A] text-base mt-1">94% score</p>
              </div>
            </div>
          </div>

          {/* AI Insights brief */}
          <div className="p-4 bg-[#FAF8F5] border border-[#E5E2DD] rounded-xl text-xs text-[#706E6B] leading-relaxed">
            <span className="font-bold text-[#1A1A1A]">Forecast Insight:</span> High regional demand velocity in Boutique A and online shoppers is driving accelerated consumption of Medium sizes.
          </div>
        </div>

        {/* Footer Order Button */}
        <div className="pt-6 border-t border-[#E5E2DD]/50">
          <Button
            variant="outline"
            size="md"
            className="w-full text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#25090B]/5"
            onClick={onOrderClick}
            icon={<ShoppingBag className="h-3.5 w-3.5" />}
          >
            Create Purchase Order
          </Button>
        </div>
      </div>
    </div>
  );
}
