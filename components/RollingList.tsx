
import React, { useState } from 'react';
import { ListItem, HighlightColor } from '../types';
import { Language, TRANSLATIONS, getCategorizedPillars } from '../constants.tsx';

interface RollingTextItemProps {
  item: ListItem;
  onHover: (item: ListItem | null) => void;
  onClick: (item: ListItem) => void;
}

const RollingTextItem: React.FC<RollingTextItemProps> = ({ item, onHover, onClick }) => {
  const colorClass = item.color === HighlightColor.YELLOW ? "text-[#FFEE00]" : "text-[#58B573]";

  return (
    <div 
      onMouseEnter={() => onHover(item)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(item)}
      className="group relative w-full cursor-pointer border-b border-neutral-900/50 py-8 md:py-12 overflow-visible z-10"
    >
      <div className="relative overflow-hidden h-[50px] md:h-24">
        <div className="transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] group-hover:-translate-y-1/2">
          <div className="h-[50px] md:h-24 flex items-center">
            <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter transition-all duration-500 group-hover:opacity-10 group-hover:blur-sm">
              {item.title}
            </h2>
          </div>
          <div className="h-[50px] md:h-24 flex items-center">
            <h2 className={`text-4xl md:text-8xl font-black tracking-tighter uppercase italic ${colorClass} drop-shadow-[0_0_30px_rgba(255,238,0,0.2)]`}>
              {item.title}
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-0 md:absolute md:top-1/2 md:left-[60%] md:-translate-y-1/2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:group-hover:translate-x-4 max-w-sm pointer-events-none">
        <p className="text-sm text-neutral-400 leading-relaxed font-bold uppercase tracking-wider">
          {item.description}
        </p>
      </div>

      <span className="absolute top-10 right-0 text-[10px] font-black uppercase tracking-[0.5em] text-neutral-800 transition-all duration-500 group-hover:text-white/20 hidden md:block">
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
    <section id="work" className="relative px-6 md:px-12 py-24 md:py-32 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute inset-0 transition-all duration-1000 ease-out scale-105 ${hoveredItem ? 'opacity-10' : 'opacity-0'}`}>
          {hoveredItem && (
            <img src={hoveredItem.src} alt="" className="w-full h-full object-cover grayscale" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="flex items-center gap-4 mb-24">
          <div className="h-[2px] w-12 bg-[#FFEE00]"></div>
          <h3 className="text-[12px] font-black uppercase tracking-[0.6em] text-[#FFEE00]">
            {t.title}
          </h3>
        </div>

        <div className="space-y-32">
          {groups.map((group, gIdx) => (
            <div key={group.name} className="relative">
              <div className="mb-8 flex items-baseline justify-between border-b-2 border-neutral-900 pb-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.8em] text-neutral-600">
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
