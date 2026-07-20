import React from 'react';

export type ActivityType = 'stock_in' | 'sale' | 'reserved' | 'stock_out' | 'adjustment';

interface ActivityRowProps {
  type: ActivityType;
  changeText: string;
  itemName: string;
  timeText: string;
}

export function ActivityRow({
  type,
  changeText,
  itemName,
  timeText
}: ActivityRowProps) {
  // Map activity type to color styles
  const typeConfigs: Record<ActivityType, { dotClass: string; label: string; textClass: string }> = {
    stock_in: {
      dotClass: 'bg-[#16A34A]',
      label: 'Stock In',
      textClass: 'text-[#16A34A]'
    },
    sale: {
      dotClass: 'bg-[#2563EB]',
      label: 'Sale (Web)',
      textClass: 'text-[#2563EB]'
    },
    reserved: {
      dotClass: 'bg-[#EA580C]',
      label: 'Reserved',
      textClass: 'text-[#EA580C]'
    },
    stock_out: {
      dotClass: 'bg-[#EF4444]',
      label: 'Stock Out',
      textClass: 'text-[#EF4444]'
    },
    adjustment: {
      dotClass: 'bg-[#706E6B]',
      label: 'Adjustment',
      textClass: 'text-[#706E6B]'
    }
  };

  const config = typeConfigs[type] || typeConfigs.adjustment;

  return (
    <div className="flex items-center justify-between py-3 border-b border-[#E5E2DD]/50 last:border-0 hover:bg-[#FAF8F5]/30 px-1 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        {/* Color Dot Status Indicator */}
        <span className={`h-2 w-2 rounded-full shrink-0 ${config.dotClass}`} aria-hidden="true" />
        
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#1A1A1A]">
            <span className={`font-extrabold ${config.textClass}`}>{config.label}</span> {changeText}
          </p>
          <p className="text-xs text-[#706E6B] truncate mt-0.5 max-w-[150px] sm:max-w-[200px]">
            {itemName}
          </p>
        </div>
      </div>

      <div className="shrink-0 text-right pl-3">
        <span className="text-xs font-medium text-[#706E6B]">
          {timeText}
        </span>
      </div>
    </div>
  );
}
