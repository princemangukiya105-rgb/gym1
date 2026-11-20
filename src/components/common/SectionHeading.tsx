import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
  alignment?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  highlight,
  alignment = 'center',
  className = '',
}) => {
  const alignClass = alignment === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass} ${className} mb-12 md:mb-16`}>
      {kicker && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-bold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse"></span>
          {kicker}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight uppercase leading-[1.1] text-white">
        {title}{' '}
        {highlight && (
          <span className="text-brand-lime underline decoration-brand-lime/30 decoration-wavy decoration-2 underline-offset-8">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
