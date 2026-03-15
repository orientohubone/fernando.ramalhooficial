import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ListItem } from '../types';
import { Language, TRANSLATIONS, getCategorizedPillars } from '../constants';
import { ArrowUpRight, Compass, Zap, Globe } from 'lucide-react';

interface ArsenalCardProps {
  item: ListItem;
  onClick: (item: ListItem) => void;
  index: number;
}

const getPillarStyle = (index: number) => {
  switch (index) {
    case 0: return { color: '#58B573', icon: <Compass size={18} /> }; // Visão
    case 1: return { color: '#FFEE00', icon: <Zap size={18} /> };     // Craft
    case 2: return { color: '#00D4FF', icon: <Globe size={18} /> };   // Mercado
    default: return { color: '#FFFFFF', icon: <Zap size={18} /> };
  }
};

const ArsenalCard: React.FC<ArsenalCardProps> = ({ item, onClick, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      onClick={() => onClick(item)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col py-6 cursor-pointer border-b border-white/[0.03] transition-colors duration-500"
    >
      {/* Principal Row */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-black text-neutral-800 group-hover:text-[#FFEE00] transition-colors duration-500">
            0{item.id}
          </span>
          <div className="flex flex-col">
            <h4 className="text-base md:text-lg font-black uppercase tracking-tight text-white/50 group-hover:text-white transition-all duration-500">
              {item.title}
            </h4>
            <motion.span
              initial={{ opacity: 0, x: -5 }}
              animate={isHovered ? { opacity: 0.4, x: 0 } : { opacity: 0, x: -5 }}
              className="text-[8px] font-black uppercase tracking-[0.4em] text-white"
            >
              {item.category}
            </motion.span>
          </div>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight size={16} className="text-[#FFEE00]" />
        </div>
      </div>

      {/* Thesis Expansion - Perfect Motion */}
      <motion.div
        initial={false}
        animate={{
          height: isHovered ? "auto" : 0,
          opacity: isHovered ? 1 : 0,
          marginTop: isHovered ? 12 : 0
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="overflow-hidden"
      >
        <p className="text-[11px] text-neutral-500 font-medium italic uppercase tracking-wider leading-relaxed max-w-xl pb-2 border-l-2 border-[#FFEE00]/20 pl-4">
          "{item.thesis}"
        </p>
      </motion.div>
    </motion.div>
  );
};

interface RollingListProps {
  lang: Language;
  onSelectItem: (item: ListItem) => void;
}

const RollingList: React.FC<RollingListProps> = ({ lang, onSelectItem }) => {
  const groups = getCategorizedPillars(lang);

  return (
    <section className="relative bg-[#050505] pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 lg:pb-20 overflow-hidden">
      {/* Background System */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[#58B573]/2 blur-[120px] rounded-full opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-50 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
        {/* Header Section */}
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#FFEE00]" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#FFEE00]">ARSENAL TÁTICO</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.8] text-white">
              SISTEMAS DE <br />
              <span className="text-neutral-500">DOMINÂNCIA</span>
            </h2>
          </div>

          <div className="hidden lg:block pb-5">
            <p className="text-[10px] text-right font-black uppercase tracking-[0.4em] text-neutral-600 leading-relaxed max-w-xs">
              Módulos estratégicos orquestrados para converter complexidade em vantagem competitiva absoluta.
            </p>
          </div>
        </header>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
          {groups.map((group, gIdx) => {
            const style = getPillarStyle(gIdx);
            return (
              <div key={group.name} className="flex flex-col gap-10">
                {/* Pillar Header */}
                <div className="relative group/pillar">
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{ color: style.color }} className="opacity-80">
                      {style.icon}
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-[9px] font-black text-white/20">0{gIdx + 1}</span>
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-white">
                        {group.name}
                      </h3>
                    </div>
                  </div>
                  <div
                    className="h-[1px] w-full bg-gradient-to-r transition-all duration-700"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${style.color}44, transparent)`
                    }}
                  />
                </div>

                {/* Pillar Items */}
                <div className="flex flex-col">
                  {group.items.map((item, iIdx) => (
                    <ArsenalCard
                      key={item.id}
                      item={item}
                      onClick={onSelectItem}
                      index={iIdx + (gIdx * 4)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <footer className="mt-32 pt-10 border-t border-white/[0.03] flex justify-between items-center opacity-30">
          <span className="text-[8px] font-black uppercase tracking-[0.5em] text-neutral-500">
            ENGINEERED FOR SCALABLE LOGIC
          </span>
          <div className="h-[1px] w-32 bg-white/10 hidden md:block"></div>
        </footer>
      </div>
    </section>
  );
};

export { RollingList };
