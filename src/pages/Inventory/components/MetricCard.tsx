import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  variant?: 'default' | 'alert';
  onClick?: () => void;
}

export function MetricCard({
  label,
  value,
  icon,
  variant = 'default',
  onClick
}: MetricCardProps) {
  const isAlert = variant === 'alert';
  
  const cardStyles = isAlert
    ? 'bg-[#FFF2F2] border border-[#FCA5A5] text-[#DC2626]'
    : 'bg-white border border-[#E5E2DD] text-[#1A1A1A] hover:shadow-md hover:border-[#1A1A1A]/10';

  const labelStyles = isAlert
    ? 'text-[#DC2626]/75'
    : 'text-[#706E6B]';

  const iconStyles = isAlert
    ? 'bg-[#FEE2E2] text-[#DC2626]'
    : 'bg-[#FAF8F5] text-[#1A1A1A]';

  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col p-6 rounded-2xl transition-all duration-300 ${cardStyles} ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-start justify-between w-full">
        {/* Icon container */}
        <div className={`flex items-center justify-center h-10 w-10 rounded-xl ${iconStyles}`}>
          {icon}
        </div>
        
        {/* Link Arrow in top right */}
        <button 
          aria-label={`View detailed ${label}`}
          className={`p-1 rounded-full transition-colors ${
            isAlert 
              ? 'hover:bg-[#FEE2E2] text-[#DC2626]' 
              : 'hover:bg-[#FAF8F5] text-[#706E6B] hover:text-[#1A1A1A]'
          }`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-5">
        <p className={`text-xs font-semibold uppercase tracking-wider ${labelStyles}`}>
          {label}
        </p>
        <p className="font-sans font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">
          {value}
        </p>
      </div>
    </div>
  );
}
