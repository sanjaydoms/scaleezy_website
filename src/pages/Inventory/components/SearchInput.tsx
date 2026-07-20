import React from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchChange?: (value: string) => void;
}

export function SearchInput({
  onSearchChange,
  className = '',
  placeholder = 'Search products, SKUs, or try-ons...',
  ...props
}: SearchInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  return (
    <div className={`relative flex items-center w-full max-w-md ${className}`}>
      <span className="absolute left-4 text-[#706E6B] flex items-center justify-center pointer-events-none">
        <Search className="h-4 w-4" strokeWidth={2} />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        className="w-full bg-[#FAF8F5] border border-[#E5E2DD] text-[#1A1A1A] placeholder-[#706E6B] text-sm pl-11 pr-5 py-2.5 rounded-full transition-all duration-300 focus:outline-none focus:border-[#25090B] focus:ring-1 focus:ring-[#25090B] focus:bg-white"
        {...props}
      />
    </div>
  );
}
