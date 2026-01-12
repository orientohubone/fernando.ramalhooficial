
import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'text-[10px]',
    md: 'text-[11px] md:text-xs',
    lg: 'text-2xl md:text-4xl'
  };

  return (
    <div className={`flex flex-row items-baseline font-black uppercase tracking-[0.1em] ${sizes[size]} ${className}`}>
      <span className="text-white">
        FERNANDO
      </span>
      <span className="text-[#FFEE00] mx-[1px]">.</span>
      <span className="text-neutral-500 opacity-70 group-hover:text-neutral-300 group-hover:opacity-100 transition-all duration-500">
        RAMALHO
      </span>
    </div>
  );
};

export default BrandLogo;
