import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'lime';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#25090B] text-white hover:bg-[#3D1417] focus-visible:ring-[#25090B]',
    secondary: 'bg-[#FAF8F5] text-[#1A1A1A] border border-[#E5E2DD] hover:bg-[#F2EFEA] focus-visible:ring-[#FAF8F5]',
    outline: 'bg-transparent text-[#1A1A1A] border border-[#1A1A1A]/20 hover:border-[#1A1A1A] hover:bg-[#1A1A1A]/5 focus-visible:ring-[#1A1A1A]',
    ghost: 'bg-transparent text-[#706E6B] hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 focus-visible:ring-[#706E6B]',
    lime: 'bg-[#C2FF3D] text-[#0F1913] hover:bg-[#b0f52b] focus-visible:ring-[#C2FF3D]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="shrink-0 flex items-center justify-center">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 flex items-center justify-center">{icon}</span>
      )}
    </button>
  );
}
