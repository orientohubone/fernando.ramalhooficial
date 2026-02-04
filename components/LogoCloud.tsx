import React from 'react';
import { InfiniteSlider } from './ui/InfiniteSlider';

// Simple cn function replacement
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
    <div
      {...props}
      className={cn(
        "overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] bg-[#58B573]/10 relative flex items-center justify-center",
        className
      )}
    >
      {/* Neon border beam effect - apenas nas bordas */}
      <div className="absolute inset-x-0 top-0 h-px">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#58B573] to-transparent opacity-80 animate-pulse shadow-[0_0_15px_rgba(88,181,115,0.8)]"></div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#58B573] to-transparent opacity-80 animate-pulse shadow-[0_0_15px_rgba(88,181,115,0.8)]"></div>
      </div>
      <div className="absolute inset-y-0 left-0 w-px">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-[#58B573] to-transparent opacity-60 animate-pulse shadow-[0_0_10px_rgba(88,181,115,0.5)]"></div>
      </div>
      <div className="absolute inset-y-0 right-0 w-px">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-[#58B573] to-transparent opacity-60 animate-pulse shadow-[0_0_10px_rgba(88,181,115,0.5)]"></div>
      </div>
      <InfiniteSlider gap={100} reverse speed={25} speedOnHover={10} className="w-full">
        {logos.map((logo) => (
          <div key={`logo-${logo.alt}`} className="flex-shrink-0">
            <img
              alt={logo.alt}
              className={`pointer-events-none opacity-70 hover:opacity-100 transition-opacity ${
                logo.alt === 'Cursor' || logo.alt === 'Replit' || logo.alt === 'OpenAI' || logo.alt === 'Claude'
                  ? 'brightness-0 invert'
                  : 'dark:brightness-0 dark:invert'
              } ${
                logo.alt === 'Claude'
                  ? 'h-10 md:h-12 lg:h-14'
                  : logo.alt === 'NeonDB'
                  ? 'h-8 md:h-10 lg:h-12' 
                  : logo.alt === 'Windsurf'
                  ? 'h-6 md:h-8 lg:h-10'
                  : logo.alt === 'Replit'
                  ? 'h-8 md:h-10 lg:h-12'
                  : logo.alt === 'Netlify'
                  ? 'h-6 md:h-8 lg:h-10'
                  : 'h-6 md:h-8 lg:h-10'
              }`}
              height={logo.height || "auto"}
              loading="lazy"
              src={logo.src}
              width={logo.width || "auto"}
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
