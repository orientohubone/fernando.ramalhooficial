
import React from 'react';
import { ListItem, HighlightColor } from '../types';
import { Language, TRANSLATIONS, getCategorizedPillars } from '../constants.tsx';

interface RollingTextItemProps {
  item: ListItem;
  onClick: (item: ListItem) => void;
}

const RollingTextItem: React.FC<RollingTextItemProps> = ({ item, onClick }) => {
  const colorClass = item.color === HighlightColor.YELLOW ? "text-[#FFEE00]" : "text-[#58B573]";
  const overlayClass = item.color === HighlightColor.YELLOW ? "bg-[#FFEE00]/10" : "bg-[#58B573]/10";

  return (
    <div 
      onClick={() => onClick(item)}
      className="group relative w-full cursor-pointer border-b border-neutral-900 py-8 md:py-12 overflow-visible"
    >
      <div className="relative overflow-hidden h-[45px] md:h-20">
        <div className="transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] group-hover:-translate-y-1/2">
          <div className="h-[45px] md:h-20 flex items-center">
            <h2 className="text-3xl md:text-7xl font-black text-white uppercase tracking-tighter transition-all duration-500 group-hover:opacity-20">
              {item.title}
            </h2>
          </div>
          <div className="h-[45px] md:h-20 flex items-center">
            <h2 className={`text-3xl md:text-7xl font-black uppercase tracking-tighter italic ${colorClass}`}>
              {item.title}
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-0 md:absolute md:top-1/2 md:left-[55%] md:-translate-y-1/2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:group-hover:translate-x-4 max-w-xs">
        <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-medium">
          {item.description}
        </p>
      </div>

      <span className="absolute top-10 right-0 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700 transition-all duration-500 group-hover:text-white group-hover:opacity-0 hidden md:block">
        {item.category}
      </span>

      <div className="pointer-events-none absolute right-12 top-1/2 z-20 h-40 w-64 -translate-y-1/2 overflow-hidden rounded-sm shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 scale-75 rotate-12 translate-x-20 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:translate-x-0 hidden lg:block">
        <div className="relative h-full w-full">
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 scale-110 group-hover:scale-100"
          />
          <div className={`absolute inset-0 ${overlayClass} mix-blend-overlay`} />
        </div>
      </div>
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

  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-40 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-24">
          <div className="h-[1px] w-12 bg-[#FFEE00]"></div>
          <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[#FFEE00]">
            {t.title}
          </h3>
        </div>

        <div className="space-y-32">
          {groups.map((group, gIdx) => (
            <div key={group.name} className="relative">
              <div className="mb-8 flex items-baseline justify-between">
                <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-neutral-500">
                   0{gIdx + 1} — {group.name}
                </h4>
              </div>
              <div className="flex flex-col border-t border-neutral-900">
                {group.items.map((item) => (
                  <RollingTextItem key={item.id} item={item} onClick={onSelectItem} />
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
