import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#08090A] active:scale-[0.98] select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 font-extrabold',
  };

  const variantStyles = {
    primary: 'bg-brand-lime text-black hover:bg-[#BEEC00] hover:shadow-[0_0_24px_rgba(212,255,0,0.4)] focus:ring-brand-lime shadow-sm',
    secondary: 'bg-[#181B22] text-white hover:bg-[#222630] border border-white/10 hover:border-brand-lime/40 focus:ring-white/20',
    outline: 'bg-transparent text-white border-2 border-white/25 hover:border-brand-lime hover:text-brand-lime focus:ring-brand-lime',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20BD5A] hover:shadow-[0_0_24px_rgba(37,211,102,0.4)] focus:ring-[#25D366]',
    ghost: 'bg-transparent text-slate-300 hover:text-brand-lime hover:bg-white/5 focus:ring-brand-lime'
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${disabledStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};
