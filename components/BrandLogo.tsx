
import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'h-2 w-auto',
    md: 'h-3 w-auto',
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
