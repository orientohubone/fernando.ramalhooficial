
import React, { useState } from 'react';
import { ListItem, HighlightColor } from '../types';
import { Language, TRANSLATIONS, getCategorizedPillars } from '../constants';

interface RollingTextItemProps {
  item: ListItem;
  onHover: (item: ListItem | null) => void;
  onClick: (item: ListItem) => void;
}

const RollingTextItem: React.FC<RollingTextItemProps> = ({ item, onHover, onClick }) => {
  const colorClass = item.color === HighlightColor.YELLOW ? "text-[#FFEE00]" : "text-[#58B573]";
  
  // Tratamento especial para "ARQUITETURA COGNITIVA"
  const isCognitiveArchitecture = item.title === 'ARQUITETURA COGNITIVA' || item.title === 'COGNITIVE ARCHITECTURE';
  const displayTitle = isCognitiveArchitecture 
    ? item.title.includes('ARQUITETURA') 
      ? ['ARQUITETURA', 'COGNITIVA'] 
      : ['COGNITIVE', 'ARCHITECTURE']
    : [item.title];

  return (
    <div 
      onMouseEnter={() => onHover(item)}
      onClick={() => onClick(item)}
      className="group relative w-full cursor-pointer border-b border-neutral-900/50 py-4 md:py-6 lg:py-10 overflow-visible z-10"
    >
      {/* Container fixo para o corte de overflow */}
      <div className="relative overflow-hidden h-[45px] xs:h-[50px] sm:h-[55px] md:h-[65px] lg:h-32">
        {/* Div que desliza - não deve ter h-full para não achatar os filhos */}
        <div className="transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] group-hover:-translate-y-1/2">
          {/* Linha 1: Texto Branco - Altura deve casar com o pai */}
          <div className="h-[45px] xs:h-[50px] sm:h-[55px] md:h-[65px] lg:h-32 flex items-center">
            <div className="flex items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4">
              {isCognitiveArchitecture && (
                <span className="px-1.5 py-0.5 text-[5px] xs:text-[6px] sm:text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] bg-[#FFEE00] text-black rounded-full">
                  NOVO
                </span>
              )}
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none transition-all duration-500 group-hover:opacity-10 group-hover:blur-sm">
                {isCognitiveArchitecture ? (
                  <div className="flex flex-col leading-tight">
                    <span className="block">{displayTitle[0]}</span>
                    <span className="text-[#58B573]">{displayTitle[1]}</span>
                  </div>
                ) : (
                  item.title
                )}
              </h2>
            </div>
          </div>
          {/* Linha 2: Texto Colorido - Altura deve casar com o pai */}
          <div className="h-[45px] xs:h-[50px] sm:h-[55px] md:h-[65px] lg:h-32 flex items-center">
            <div className="flex items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4">
              {isCognitiveArchitecture && (
                <span className="px-1.5 py-0.5 text-[5px] xs:text-[6px] sm:text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] bg-[#58B573] text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  EXCLUSIVO
                </span>
              )}
              <h2 className={`text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-6xl font-black tracking-tighter uppercase italic leading-none ${colorClass} drop-shadow-[0_0_30px_rgba(255,238,0,0.2)]`}>
                {isCognitiveArchitecture ? (
                  <div className="flex flex-col leading-tight">
                    <span className="block">{displayTitle[0]}</span>
                    <span>{displayTitle[1]}</span>
                  </div>
                ) : (
                  item.title
                )}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Descrição que aparece lateralmente no desktop - sempre visível no mobile */}
      <div className="mt-3 md:mt-0 md:absolute md:top-1/2 md:left-[60%] md:-translate-y-1/2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:group-hover:translate-x-4 max-w-sm pointer-events-none md:pointer-events-auto">
        <p className="text-[10px] xs:text-xs sm:text-sm text-neutral-400 leading-relaxed font-bold uppercase tracking-wider">
          {item.description}
        </p>
      </div>

      <span className="absolute top-4 xs:top-5 sm:top-6 md:top-10 right-0 text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-neutral-800 transition-all duration-500 group-hover:text-white/20">
        {item.category}
      </span>
    </div>
  );
}

interface RollingListProps {
  lang: Language;
  onSelectItem: (item: ListItem) => void;
}

const RollingList: React.FC<RollingListProps> = ({ lang, onSelectItem }) => {
  const t = TRANSLATIONS[lang].capacities;
  const groups = getCategorizedPillars(lang);
  const [hoveredItem, setHoveredItem] = useState<ListItem | null>(null);

  return (
    <section id="work" className="relative px-4 xs:px-6 sm:px-8 md:px-12 py-12 xs:py-14 sm:py-16 md:py-24 lg:py-32 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute inset-0 transition-all duration-1000 ease-out scale-105 ${hoveredItem ? 'opacity-10' : 'opacity-0'}`}>
          {hoveredItem && (
            <img src={hoveredItem.src} alt="" className="w-full h-full object-cover grayscale" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="flex items-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 mb-12 xs:mb-14 sm:mb-16 md:mb-24">
          <div className="h-[1.5px] xs:h-[2px] sm:h-[2px] md:h-[2px] w-6 xs:w-8 sm:w-10 md:w-12 bg-[#FFEE00]"></div>
          <h3 className="text-[8px] xs:text-[10px] sm:text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] text-[#FFEE00]">
            {t.title}
          </h3>
        </div>

        <div className="space-y-12 xs:space-y-14 sm:space-y-16 md:space-y-24 lg:space-y-32">
          {groups.map((group, gIdx) => (
            <div key={group.name} className="relative">
              <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-8 flex items-baseline justify-between border-b-2 border-neutral-900 pb-3 xs:pb-4">
                <h4 className="text-[6px] xs:text-[8px] sm:text-[8px] md:text-[10px] font-black uppercase tracking-[0.8em] text-neutral-600">
                   {gIdx + 1} // {group.name}
                </h4>
              </div>
              <div className="flex flex-col">
                {group.items.map((item) => (
                  <RollingTextItem 
                    key={item.id} 
                    item={item} 
                    onHover={setHoveredItem}
                    onClick={onSelectItem} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { RollingList };
