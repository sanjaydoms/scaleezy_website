import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ProductRowProps {
  name: string;
  category: string;
  soldCount: string | number;
  imageUrl: string;
  onClick?: () => void;
}

export function ProductRow({
  name,
  category,
  soldCount,
  imageUrl,
  onClick
}: ProductRowProps) {
  return (
    <div
      onClick={onClick}
      className={`group flex items-center justify-between p-3.5 rounded-xl border border-transparent hover:border-[#E5E2DD] hover:bg-[#FAF8F5] transition-all duration-300 ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Product Thumbnail */}
        <div className="h-12 w-12 rounded-lg bg-gray-100 overflow-hidden border border-[#E5E2DD] shrink-0">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Product Info */}
        <div className="min-w-0">
          <h4 className="font-semibold text-sm text-[#1A1A1A] truncate group-hover:text-[#25090B] transition-colors">
            {name}
          </h4>
          <p className="text-xs text-[#706E6B] mt-0.5 uppercase tracking-wider">
            {category}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 pl-4 shrink-0">
        <div className="text-right">
          <p className="font-extrabold text-sm text-[#1A1A1A]">
            {soldCount}
          </p>
          <p className="text-[10px] text-[#706E6B] uppercase tracking-wide">
            sold this week
          </p>
        </div>
        <ChevronRight className="h-4 w-4 text-[#706E6B] group-hover:translate-x-0.5 group-hover:text-[#1A1A1A] transition-all duration-300" />
      </div>
    </div>
  );
}
