import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lime' | 'dark' | 'outline' | 'warning';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'lime',
  size = 'sm',
  className = '',
}) => {
  const sizeClasses = size === 'sm' ? 'text-[11px] px-2.5 py-0.5' : 'text-xs px-3 py-1';

  const variantClasses = {
    lime: 'bg-brand-lime/15 text-brand-lime border border-brand-lime/30 font-semibold',
    dark: 'bg-white/10 text-slate-300 border border-white/10 font-medium',
    outline: 'bg-transparent text-slate-300 border border-white/20 font-medium',
    warning: 'bg-amber-500/15 text-amber-400 border border-amber-500/30 font-medium'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full uppercase tracking-wider ${sizeClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
