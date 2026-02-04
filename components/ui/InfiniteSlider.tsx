import React, { useRef, useEffect, useState } from 'react';

interface InfiniteSliderProps {
  children: React.ReactNode[];
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
  className?: string;
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  gap = 24,
  speed = 30,
  speedOnHover = 0,
  reverse = false,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="flex animate-scroll"
        style={{ 
          gap: `${gap}px`,
          animationDuration: `${60 / speed * 20}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
          animationPlayState: isHovered && speedOnHover < speed ? 'paused' : 'running'
        }}
      >
        {children}
        {children}
        {children}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-100% / 3), 0, 0);
          }
        }
        .animate-scroll {
          animation: scroll linear infinite;
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};
