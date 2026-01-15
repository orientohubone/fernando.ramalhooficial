import React, { useEffect } from 'react';
import { Language } from '../constants';
import BrandLogo from './BrandLogo';

interface CapacidadesViewProps {
  lang: Language;
  onClose: () => void;
}

const CapacidadesView: React.FC<CapacidadesViewProps> = ({ lang, onClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-40">
        <header className="mb-16 md:mb-24 space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8 md:w-12 bg-[#58B573]"></div>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-[#58B573]">CAPACIDADES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8]">
            CAPACIDADES <br />
            <span className="text-[#FFEE00]">CENTRAIS</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-neutral-500 max-w-2xl font-medium tracking-tight">
            Arquitetura de negócio, inovação estratégica e execução sistêmica para dominar mercados.
          </p>
        </header>

        <div className="text-center py-20">
          <p className="text-neutral-400 text-lg">
            Esta página está em desenvolvimento. 
            <br />
            Voltando para a página principal...
          </p>
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
};

export default CapacidadesView;
