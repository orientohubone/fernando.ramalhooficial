import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  color: string;
  description?: string;
}

interface CategoryCarouselProps {
  categories: Category[];
  lang: 'PT' | 'EN';
  onCategoryClick?: (category: Category) => void;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ 
  categories, 
  lang, 
  onCategoryClick 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      // Para o auto-scroll se tiver algo zoomed ou se estiver em hover
      if (!isHovered && !isZoomed) {
        setCurrentIndex((prev) => (prev + 1) % categories.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [categories.length, isHovered, isZoomed]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const handleCategoryClick = (category: Category) => {
    // Se já está zoomed, remove o zoom
    if (isZoomed === category.id) {
      setIsZoomed(null);
    } else {
      // Se não está zoomed, aplica o zoom e move para centro
      setIsZoomed(category.id);
      
      // Encontrar o índice da categoria clicada
      const categoryIndex = categories.findIndex(cat => cat.id === category.id);
      if (categoryIndex !== -1) {
        // Ajustar currentIndex para que a categoria clicada fique no centro
        // Como getVisibleCategories mostra currentIndex como centro, basta setar o índice diretamente
        setCurrentIndex(categoryIndex);
      }
    }
    
    onCategoryClick?.(category);
  };

  const getVisibleCategories = () => {
    const visible = [];
    const total = categories.length;
    const visibleCount = Math.min(5, total);
    const halfVisible = Math.floor(visibleCount / 2);
    
    // Criar array simétrico ao redor do currentIndex
    // currentIndex deve ficar exatamente no centro (posição halfVisible)
    for (let i = 0; i < visibleCount; i++) {
      const offset = i - halfVisible; // -2, -1, 0, 1, 2 para 5 itens
      const index = (currentIndex + offset + total) % total;
      visible.push({ ...categories[index], index: i });
    }
    
    return visible;
  };

  
  return (
    <div className="relative w-full py-12 overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      
      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-neutral-900/80 border border-neutral-800 rounded-full hover:bg-neutral-800 transition-all duration-300"
      >
        <ChevronLeft className="w-4 h-4 text-white" />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-neutral-900/80 border border-neutral-800 rounded-full hover:bg-neutral-800 transition-all duration-300"
      >
        <ChevronRight className="w-4 h-4 text-white" />
      </button>

      {/* Carousel container */}
      <div 
        ref={carouselRef}
        className="relative flex items-center justify-center gap-8 px-20"
        onMouseLeave={() => setIsHovered(null)}
      >
        {getVisibleCategories().map((category, position) => {
          const visibleCount = Math.min(5, categories.length);
          const centerPosition = Math.floor(visibleCount / 2);
          const isCenter = position === centerPosition;
          const isHoveredCategory = isHovered === category.id;
          const isZoomedCategory = isZoomed === category.id;
          
          // Calculate scale and opacity based on distance from center
          const distanceFromCenter = Math.abs(position - centerPosition);
          const baseScale = isCenter ? 1 : 0.85 - (distanceFromCenter * 0.1);
          const scale = isZoomedCategory ? 1.25 : (isHoveredCategory ? 1.1 : baseScale);
          const opacity = isCenter ? 1 : 0.7 - (distanceFromCenter * 0.1);
          const zIndex = isZoomedCategory ? 100 : (categories.length - distanceFromCenter);
          
          return (
            <div
              key={category.id}
              className={`
                relative transition-all duration-700 ease-out cursor-pointer
              `}
              style={{
                transform: `scale(${scale})`,
                opacity: isZoomedCategory ? 1 : opacity,
                zIndex: zIndex,
                transformOrigin: 'center'
              }}
              onMouseEnter={() => !isZoomedCategory && setIsHovered(category.id)}
              onMouseLeave={() => !isZoomedCategory && setIsHovered(null)}
              onClick={() => handleCategoryClick(category)}
            >
              {/* Category card */}
              <div 
                className={`
                  relative px-8 py-6 rounded-2xl border backdrop-blur-sm transition-all duration-700
                  ${isCenter 
                    ? 'bg-neutral-900/90 border-neutral-800 shadow-xl' 
                    : 'bg-neutral-900/60 border-neutral-900/50'
                  }
                  ${isHoveredCategory && !isZoomedCategory ? 'border-[#58B573] shadow-[#58B573]/10' : ''}
                  ${isZoomedCategory ? 'border-[#FFEE00] shadow-[#FFEE00]/15' : ''}
                `}
              >
                {/* Glow effect */}
                <div 
                  className={`
                    absolute inset-0 rounded-2xl transition-opacity duration-700
                    ${(isHoveredCategory && !isZoomedCategory) || isZoomedCategory ? 'opacity-100' : 'opacity-0'}
                  `}
                  style={{
                    background: `linear-gradient(135deg, ${isZoomedCategory ? '#FFEE00' : category.color}10, ${isZoomedCategory ? '#FFEE00' : category.color}05)`,
                    filter: 'blur(12px)'
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div 
                    className={`
                      text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2 transition-all duration-700
                      ${isCenter ? 'text-white' : 'text-neutral-600'}
                      ${(isHoveredCategory && !isZoomedCategory) || isZoomedCategory ? 'text-white' : ''}
                    `}
                    style={{ color: (isHoveredCategory && !isZoomedCategory) ? category.color : isZoomedCategory ? '#FFEE00' : undefined }}
                  >
                    {category.name}
                  </div>
                  
                  {category.description && (
                    <p className={`
                      text-xs md:text-sm text-neutral-500 transition-all duration-700
                      ${isHoveredCategory ? 'text-neutral-300' : ''}
                    `}>
                      {category.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Progress indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {categories.map((_, index) => (
          <div
            key={index}
            className={`
              h-1 rounded-full transition-all duration-700
              ${index === currentIndex ? 'w-8 bg-[#58B573]' : 'w-1 bg-neutral-800'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
