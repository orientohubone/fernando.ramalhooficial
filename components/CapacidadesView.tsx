import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Language, TRANSLATIONS, getCategorizedPillars } from '../constants';
import BrandLogo from './BrandLogo';

interface CapacidadesViewProps {
  lang: Language;
  onClose: () => void;
}

const CapacidadesView: React.FC<CapacidadesViewProps> = ({ lang, onClose }) => {
  const navigate = useNavigate();
  const t = TRANSLATIONS[lang];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Função para criar slug a partir do título (mesma lógica do AppRouter)
  const createSlug = (text: string): string => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleCapacityClick = (capacityKey: string) => {
    // Obter o item completo usando getCategorizedPillars
    const allCapacities = getCategorizedPillars(lang).flatMap(group => group.items);
    const capacity = allCapacities.find(item => {
      // Encontrar pelo título correspondente
      const capacityData = t.capacities[capacityKey as keyof typeof t.capacities] as any;
      return capacityData && item.title === capacityData.title;
    });

    if (capacity) {
      // Usar a mesma lógica do handleCapacitySelect do AppRouter
      if (capacity.title === 'ARQUITETURA COGNITIVA' || capacity.title === 'COGNITIVE ARCHITECTURE') {
        navigate('/arquitetura-cognitiva');
      } else if (capacity.title === 'IA' || capacity.title === 'AI') {
        navigate('/capacidade/ia');
      } else {
        // Criar slug e navegar para a rota do sistema original
        const slug = createSlug(capacity.title);
        navigate(`/capacidade/${slug}`);
      }
    } else {
      console.error(`Capacidade não encontrada: ${capacityKey}`);
    }
  };

  return (
    <section className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-700" aria-label="Capacidades e Serviços">
      {/* Navigation */}
      <nav className="sticky top-0 left-0 w-full z-[110] px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference" role="navigation" aria-label="Navegação principal">
        <button onClick={onClose} className="group flex items-center gap-4" aria-label="Voltar para página anterior">
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" aria-hidden="true" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">VOLTAR</span>
        </button>
        <BrandLogo size="md" />
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-40" role="main">
        <header className="mb-16 md:mb-24 space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8 md:w-12 bg-[#58B573]" aria-hidden="true"></div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ARQUITETURA COGNITIVA */}
          <div 
            onClick={() => handleCapacityClick('cognitive')}
            className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900/70 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#58B573]/10 rounded-full flex items-center justify-center group-hover:bg-[#58B573]/20 transition-colors">
                <svg className="w-6 h-6 text-[#58B573]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#58B573] transition-colors">{t.capacities.cognitive.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.capacities.cognitive.category}</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              {t.capacities.cognitive.desc}
            </p>
            <div className="text-xs text-neutral-500 italic">
              "{t.capacities.cognitive.thesis}"
            </div>
            <div className="mt-4 flex items-center gap-2 text-[#58B573] text-[10px] font-black uppercase tracking-wider">
              EXPLORAR
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* ESTRATÉGIAS */}
          <div 
            onClick={() => handleCapacityClick('strategy')}
            className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900/70 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FFEE00]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFEE00]/20 transition-colors">
                <svg className="w-6 h-6 text-[#FFEE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FFEE00] transition-colors">{t.capacities.strategy.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.capacities.strategy.category}</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              {t.capacities.strategy.desc}
            </p>
            <div className="text-xs text-neutral-500 italic">
              "{t.capacities.strategy.thesis}"
            </div>
            <div className="mt-4 flex items-center gap-2 text-[#FFEE00] text-[10px] font-black uppercase tracking-wider">
              EXPLORAR
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* INOVAÇÃO */}
          <div 
            onClick={() => handleCapacityClick('innovation')}
            className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900/70 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center group-hover:bg-[#FF6B6B]/20 transition-colors">
                <svg className="w-6 h-6 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B6B] transition-colors">{t.capacities.innovation.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.capacities.innovation.category}</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              {t.capacities.innovation.desc}
            </p>
            <div className="text-xs text-neutral-500 italic">
              "{t.capacities.innovation.thesis}"
            </div>
            <div className="mt-4 flex items-center gap-2 text-[#FF6B6B] text-[10px] font-black uppercase tracking-wider">
              EXPLORAR
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* MARKETING */}
          <div 
            onClick={() => handleCapacityClick('marketing')}
            className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900/70 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#4ECDC4]/10 rounded-full flex items-center justify-center group-hover:bg-[#4ECDC4]/20 transition-colors">
                <svg className="w-6 h-6 text-[#4ECDC4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#4ECDC4] transition-colors">{t.capacities.marketing.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.capacities.marketing.category}</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              {t.capacities.marketing.desc}
            </p>
            <div className="text-xs text-neutral-500 italic">
              "{t.capacities.marketing.thesis}"
            </div>
            <div className="mt-4 flex items-center gap-2 text-[#4ECDC4] text-[10px] font-black uppercase tracking-wider">
              EXPLORAR
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* MÍDIA PAGA */}
          <div 
            onClick={() => handleCapacityClick('paidMedia')}
            className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900/70 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#9B59B6]/10 rounded-full flex items-center justify-center group-hover:bg-[#9B59B6]/20 transition-colors">
                <svg className="w-6 h-6 text-[#9B59B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#9B59B6] transition-colors">{t.capacities.paidMedia.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.capacities.paidMedia.category}</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              {t.capacities.paidMedia.desc}
            </p>
            <div className="text-xs text-neutral-500 italic">
              "{t.capacities.paidMedia.thesis}"
            </div>
            <div className="mt-4 flex items-center gap-2 text-[#9B59B6] text-[10px] font-black uppercase tracking-wider">
              EXPLORAR
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* DESIGN */}
          <div 
            onClick={() => handleCapacityClick('design')}
            className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900/70 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#E67E22]/10 rounded-full flex items-center justify-center group-hover:bg-[#E67E22]/20 transition-colors">
                <svg className="w-6 h-6 text-[#E67E22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#E67E22] transition-colors">{t.capacities.design.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.capacities.design.category}</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              {t.capacities.design.desc}
            </p>
            <div className="text-xs text-neutral-500 italic">
              "{t.capacities.design.thesis}"
            </div>
            <div className="mt-4 flex items-center gap-2 text-[#E67E22] text-[10px] font-black uppercase tracking-wider">
              EXPLORAR
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* IA */}
          <div 
            onClick={() => handleCapacityClick('ai')}
            className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900/70 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FFEE00]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFEE00]/20 transition-colors">
                <svg className="w-6 h-6 text-[#FFEE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FFEE00] transition-colors">{t.capacities.ai.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.capacities.ai.category}</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              {t.capacities.ai.desc}
            </p>
            <div className="text-xs text-neutral-500 italic">
              "{t.capacities.ai.thesis}"
            </div>
            <div className="mt-4 flex items-center gap-2 text-[#FFEE00] text-[10px] font-black uppercase tracking-wider">
              EXPERIMENTAR
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* VIBE CODING */}
          <div 
            onClick={() => handleCapacityClick('vibeCoding')}
            className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900/70 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#00D9FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D9FF]/20 transition-colors">
                <svg className="w-6 h-6 text-[#00D9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00D9FF] transition-colors">{t.capacities.vibeCoding.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.capacities.vibeCoding.category}</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              {t.capacities.vibeCoding.desc}
            </p>
            <div className="text-xs text-neutral-500 italic">
              "{t.capacities.vibeCoding.thesis}"
            </div>
            <div className="mt-4 flex items-center gap-2 text-[#00D9FF] text-[10px] font-black uppercase tracking-wider">
              EXPLORAR
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* MARCAS */}
          <div 
            onClick={() => handleCapacityClick('brandReg')}
            className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900/70 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center group-hover:bg-[#FF6B6B]/20 transition-colors">
                <svg className="w-6 h-6 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B6B] transition-colors">{t.capacities.brandReg.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.capacities.brandReg.category}</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              {t.capacities.brandReg.desc}
            </p>
            <div className="text-xs text-neutral-500 italic">
              "{t.capacities.brandReg.thesis}"
            </div>
            <div className="mt-4 flex items-center gap-2 text-[#FF6B6B] text-[10px] font-black uppercase tracking-wider">
              EXPLORAR
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default CapacidadesView;
