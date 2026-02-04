
import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    xs: 'h-1.5 w-auto',
    sm: 'h-2 w-auto',
    md: 'h-4 w-auto',
    lg: 'h-6 w-auto'
  };

  return (
    <img 
      src="/logofernando.png" 
      alt="FERNANDO.RAMALHO" 
      className={`${sizes[size]} ${className}`}
    />
  );
};

export default BrandLogo;
