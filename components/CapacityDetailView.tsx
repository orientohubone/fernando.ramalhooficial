import React, { useEffect } from 'react';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';

interface CapacityDetailViewProps {
  lang: Language;
  onClose: () => void;
  capacityKey: string;
}

const CapacityDetailView: React.FC<CapacityDetailViewProps> = ({ lang, onClose, capacityKey }) => {
  const t = TRANSLATIONS[lang];
  
  // Mapeamento de capacityKey para as chaves corretas no objeto capacities
  const capacityKeyMap: Record<string, keyof typeof t.capacities> = {
    'estrategias': 'strategy',
    'inovacao': 'innovation',
    'marketing': 'marketing',
    'midia-paga': 'paidMedia',
    'design': 'design',
    'vibe-coding': 'vibeCoding',
    'marcas': 'brandReg'
  };
  
  const actualKey = capacityKeyMap[capacityKey] || capacityKey as keyof typeof t.capacities;
  const capacity = t.capacities[actualKey];
  
  console.log('CapacityDetailView Debug:', {
    capacityKey,
    actualKey,
    capacity: capacity ? 'found' : 'not found',
    availableKeys: Object.keys(t.capacities)
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!capacity) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
        <nav className="sticky top-0 left-0 w-full z-[110] px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference">
          <button onClick={onClose} className="group flex items-center gap-4">
            <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">VOLTAR</span>
          </button>
          <BrandLogo size="md" />
        </nav>

        <main className="max-w-4xl mx-auto px-6 md:px-12 pt-20 pb-40">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-white mb-4">Capacidade não encontrada</h1>
            <p className="text-neutral-400">A capacidade solicitada não existe.</p>
            <button 
              onClick={onClose}
              className="mt-8 px-6 py-3 bg-[#58B573] text-black font-black text-sm uppercase tracking-wider rounded-full hover:bg-[#4a9d62] transition-colors"
            >
              VOLTAR
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Navigation */}
      <nav className="sticky top-0 left-0 w-full z-[110] px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference">
        <button onClick={onClose} className="group flex items-center gap-4">
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">VOLTAR</span>
        </button>
        <BrandLogo size="md" />
      </nav>

      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-20 pb-40">
        {/* Header */}
        <header className="mb-12 md:mb-16 space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8 md:w-12 bg-[#FFEE00]"></div>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-[#FFEE00]">{capacity.category}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.8]">
            {capacity.title}
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-neutral-500 max-w-2xl font-medium tracking-tight">
            {capacity.desc}
          </p>
        </header>

        {/* Content */}
        <div className="space-y-12">
          {/* Thesis */}
          <section className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Tese Central</h2>
            <blockquote className="text-xl text-[#FFEE00] font-medium italic">
              "{capacity.thesis}"
            </blockquote>
          </section>

          {/* Impact */}
          <section className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Impacto</h2>
            <p className="text-neutral-300 text-lg leading-relaxed">
              {capacity.impact}
            </p>
          </section>

          {/* Coming Soon */}
          <section className="text-center py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#FFEE00]/10 border border-[#FFEE00]/30 rounded-full">
              <div className="w-2 h-2 bg-[#FFEE00] rounded-full animate-pulse"></div>
              <span className="text-[#FFEE00] text-sm font-black uppercase tracking-wider">EM DESENVOLVIMENTO</span>
            </div>
            <p className="text-neutral-400 mt-6 max-w-2xl mx-auto">
              Esta capacidade está sendo desenvolvida com foco em resultados excepcionais. 
              Em breve teremos conteúdo detalhado, estudos de caso e implementações práticas.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center">
            <button 
              onClick={onClose}
              className="px-8 py-4 bg-[#58B573] text-black font-black text-sm uppercase tracking-wider rounded-full hover:bg-[#4a9d62] transition-colors"
            >
              VOLTAR PARA CAPACIDADES
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CapacityDetailView;
