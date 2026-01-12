
import React, { useEffect } from 'react';
import { ListItem, HighlightColor } from '../types';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';

interface CapacityDetailProps {
  item: ListItem;
  lang: Language;
  onClose: () => void;
}

const CapacityDetail: React.FC<CapacityDetailProps> = ({ item, lang, onClose }) => {
  const t = TRANSLATIONS[lang].sections;
  const nav = TRANSLATIONS[lang].nav;
  const colorHex = item.color === HighlightColor.YELLOW ? '#FFEE00' : '#58B573';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto selection:bg-[#FFEE00] selection:text-black animate-in fade-in duration-500">
      {/* Detail Header */}
      <nav className="sticky top-0 left-0 w-full z-[110] px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference">
        <button onClick={onClose} className="group flex items-center gap-4">
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">{nav.back}</span>
        </button>
        <BrandLogo size="md" />
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-24">
            <header className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                Capacity / 0{item.id}
              </span>
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
                {item.title}<span style={{ color: colorHex }}>.</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 font-medium max-w-xl italic">
                {item.description}
              </p>
            </header>

            <section className="space-y-8">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-600 border-b border-neutral-900 pb-4">{t.thesis}</h3>
              <p className="text-2xl md:text-4xl font-bold leading-tight uppercase tracking-tight">
                {item.thesis}
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-600 border-b border-neutral-900 pb-4">{t.stack}</h3>
                <ul className="space-y-2">
                  {item.stack?.map((s, i) => (
                    <li key={i} className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#FFEE00]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-600 border-b border-neutral-900 pb-4">{t.impact}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  {item.impact}
                </p>
              </div>
            </section>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 sticky top-40 hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 group">
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div 
                className="absolute bottom-0 left-0 w-full h-1" 
                style={{ backgroundColor: colorHex }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer-like CTA */}
      <footer className="border-t border-neutral-900 px-6 md:px-12 py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <button 
            onClick={onClose}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-[#FFEE00] transition-colors"
           >
             {nav.back}
           </button>
           <div className="h-[1px] flex-1 bg-neutral-900 mx-12 hidden md:block" />
           <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-600">
             Fernando Ramalho / Systems for Dominance
           </p>
        </div>
      </footer>
    </div>
  );
};

export default CapacityDetail;
