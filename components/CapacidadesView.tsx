import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Language, TRANSLATIONS, getCategorizedPillars } from '../constants';
import BrandLogo from './BrandLogo';
import {
  Brain,
  Target,
  Zap,
  Megaphone,
  DollarSign,
  PenTool,
  Cpu,
  Code,
  ShieldCheck,
  Globe,
  Layout,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

interface CapacidadesViewProps {
  lang: Language;
  onClose: () => void;
}

const CapacidadesView: React.FC<CapacidadesViewProps> = ({ lang, onClose }) => {
  const navigate = useNavigate();
  const t = TRANSLATIONS[lang];
  const nav = TRANSLATIONS[lang].nav;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
    const allCapacities = getCategorizedPillars(lang).flatMap(group => group.items);
    const capacity = allCapacities.find(item => {
      const capacityData = t.capacities[capacityKey as keyof typeof t.capacities] as any;
      return capacityData && item.title === capacityData.title;
    });

    if (capacity) {
      if (capacity.title === 'ARQUITETURA COGNITIVA' || capacity.title === 'COGNITIVE ARCHITECTURE') {
        navigate('/arquitetura-cognitiva');
      } else if (capacity.title === 'IA' || capacity.title === 'AI') {
        navigate('/capacidade/ia');
      } else {
        const slug = createSlug(capacity.title);
        navigate(`/capacidade/${slug}`);
      }
    }
  };

  const capacityItems = [
    {
      key: 'cognitive',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: '#58B573'
    },
    {
      key: 'strategy',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: '#FFEE00'
    },
    {
      key: 'innovation',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: '#FF6B6B'
    },
    {
      key: 'marketing',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      color: '#4ECDC4'
    },
    {
      key: 'paidMedia',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: '#9B59B6'
    },
    {
      key: 'design',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: '#E67E22'
    },
    {
      key: 'ai',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: '#FFEE00'
    },
    {
      key: 'vibeCoding',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: '#00D9FF'
    },
    {
      key: 'brandReg',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: '#FF6B6B'
    },
    {
      key: 'domain',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: '#9B59B6'
    },
    {
      key: 'sites',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: '#58B573'
    },
    {
      key: 'ecommerce',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: '#9B59B6'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto overscroll-none"
    >
      {/* Top Fade Edge */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050505] to-transparent z-[120] pointer-events-none" />

      {/* Background Subtle Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#FFEE00]/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[20%] left-[-10%] w-[30%] h-[30%] bg-[#FFEE00]/3 blur-[100px] rounded-full opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-50 pointer-events-none" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="w-full px-6 py-6 md:px-12 flex justify-between items-center bg-transparent shrink-0">
          <button
            onClick={onClose}
            className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors"
          >
            <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">{nav.back}</span>
          </button>
          <BrandLogo size="md" />
        </nav>

        <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pt-8 pb-32">
          {/* Header */}
          <header className="max-w-4xl mb-24 space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#58B573]" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#58B573]">ARSENAL ESTRATÉGICO</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase text-white">
              CAPACIDADES <br />
              <span className="text-[#FFEE00]">CENTRAIS</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed max-w-3xl">
              Arquitetura de negócio, inovação estratégica e execução sistêmica para dominar mercados através de inteligência aplicada.
            </p>
          </header>

          {/* Grid de Capacidades */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capacityItems.map((item, index) => {
              const data = t.capacities[item.key as keyof typeof t.capacities] as any;
              if (!data) return null;

              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleCapacityClick(item.key)}
                  className="group cursor-pointer p-7 rounded-[2rem] bg-black/60 border border-white/5 transition-all duration-500 relative overflow-hidden flex flex-col gap-6 hover:bg-black/80 h-full"
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${item.color}4D`)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
                >
                  {/* Header do Card */}
                  <div className="flex justify-between items-start">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}1A`, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-neutral-500">{data.category}</span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-black uppercase tracking-tight text-white transition-colors leading-tight">
                      {data.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                      {data.desc}
                    </p>
                  </div>

                  {/* Tese e Footer */}
                  <div className="mt-auto space-y-4">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] italic">
                      <p className="text-[10px] text-neutral-500 leading-relaxed">
                        "{data.thesis}"
                      </p>
                    </div>

                    <div className="flex items-center gap-2 transition-transform group-hover:translate-x-1">
                      <div
                        className="text-[8px] font-black uppercase tracking-[0.3em]"
                        style={{ color: item.color }}
                      >
                        EXPLORAR
                      </div>
                      <ArrowRight size={10} style={{ color: item.color }} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Closing Footer */}
          <footer className="mt-40 pt-20 border-t border-white/5 opacity-40">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
              <div className="text-[9px] font-black uppercase tracking-[0.5em] text-neutral-500">
                © 2025 FERNANDO RAMALHO. STRATEGIC CAPABILITIES & SYSTEMS.
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#FFEE00]">ENGINEERED FOR DOMINANCE</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </motion.div>
  );
};

export default CapacidadesView;
