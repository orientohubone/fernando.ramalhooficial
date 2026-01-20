import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 group"
      aria-label="Voltar ao topo"
    >
      <div className="flex items-center gap-3 px-6 py-3 bg-[#050505] border border-neutral-800 rounded-full hover:bg-neutral-900 transition-all duration-300 hover:scale-105 hover:shadow-[#5AB473]/20 hover:shadow-lg">
        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#5AB473] group-hover:text-white transition-colors">
          VOLTAR AO TOPO
        </span>
        <div className="w-8 h-8 bg-[#5AB473]/10 rounded-full flex items-center justify-center group-hover:bg-[#5AB473] transition-all duration-300">
          <svg 
            className="w-4 h-4 text-[#5AB473] group-hover:text-black transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default BackToTop;
