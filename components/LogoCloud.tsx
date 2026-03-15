import React from 'react';
import { InfiniteSlider } from './ui/InfiniteSlider';

const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div className="px-6 md:px-12 w-full max-w-7xl mx-auto py-12">
      <div
        {...props}
        className={cn(
          "relative overflow-hidden py-10 px-4 rounded-2xl border border-white/[0.03] bg-[#0A0A0A] group/cloud transition-all duration-700 hover:border-[#58B573]/50",
          "shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(88,181,115,0.05)]",
          className
        )}
      >
        {/* Architectural Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        {/* Edge Masking - Improved for smooth transition */}
        <div className="absolute inset-x-0 inset-y-0 z-10 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        />

        {/* Top/Bottom Divider Accents */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <InfiniteSlider gap={80} reverse speed={20} speedOnHover={5} className="w-full relative z-0">
          {logos.map((logo) => (
            <div key={`logo-${logo.alt}`} className="flex items-center justify-center min-w-[120px]">
              <img
                alt={logo.alt}
                className={cn(
                  "brightness-0 invert opacity-30 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-700 h-6 md:h-8 lg:h-9 object-contain pointer-events-none",
                  logo.alt === 'Claude' && 'h-9 md:h-11 lg:h-12',
                  logo.alt === 'NeonDB' && 'h-7 md:h-9 lg:h-10'
                )}
                loading="lazy"
                src={logo.src}
              />
            </div>
          ))}
        </InfiniteSlider>

        {/* Corner Accents - Strategic Detail */}
        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 rounded-tl-sm"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20 rounded-tr-sm"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20 rounded-bl-sm"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 rounded-br-sm"></div>
      </div>
    </div>
  );
}
