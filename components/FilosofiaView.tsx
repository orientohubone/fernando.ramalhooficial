import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';
import { Eye, Shield, Layers, BarChart3, Target, Compass, ArrowRight, Quote } from 'lucide-react';

interface FilosofiaViewProps {
  lang: Language;
  onClose: () => void;
}

const FilosofiaView: React.FC<FilosofiaViewProps> = ({ lang, onClose }) => {
  const nav = TRANSLATIONS[lang].nav;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const principles = [
    {
      title: "CLAREZA",
      color: "#FFEE00",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      content: "Quanto mais eu estudo tecnologia, produto e neurociência, mais convicto fico de uma coisa: o simples não é raso, é refinado. Sistemas complexos demais quebram pessoas. Processos confusos geram ruído. Simplicidade, para mim, é resultado de maturidade — não de preguiça."
    },
    {
      title: "ESTRATÉGIA",
      color: "#58B573",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002 2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      content: "Para mim, estratégia não é um slide bonito. É um sistema vivo que conecta visão, dados e comportamento humano. É a capacidade de enxergar o todo antes de atuar no detalhe. Quando a estratégia é sólida, o crescimento deixa de ser sorte e passa a ser consequência."
    },
    {
      title: "SIMPLICIDADE",
      color: "#3B82F6",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      content: "Simplicidade não é ausência de complexidade, é domínio dela. É a capacidade de transformar o caótico em organizado. Simples é elegante. Simples é eficaz. Simples escala. Remover o desnecessário para revelar o essencial."
    },
    {
      title: "DADOS",
      color: "#A855F7",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      content: "Acredito em dados, métricas e IA. Mas sei que nenhum dado existe fora do comportamento humano. Minha atuação cruza análise racional e compreensão cognitiva. Dados apontam caminhos; pessoas percorrem esses caminhos."
    },
    {
      title: "PROPÓSITO",
      color: "#EF4444",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      content: "Empresas crescem rápido e desmoronam por dentro por falta de intenção. Minha filosofia rejeita o crescimento vazio. Propósito não é discurso emocional; é saber por que algo existe e para quem existe."
    },
    {
      title: "DIREÇÃO",
      color: "#F97316",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      ),
      content: "Nesta era de excesso de estímulos, quem vence não é quem faz mais — é quem pensa melhor. É sobre construir direção em meio ao caos e sistemas que sustentem o futuro, não apenas o próximo mês."
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
        <div className="absolute top-[30%] left-[-10%] w-[30%] h-[30%] bg-[#FFEE00]/3 blur-[100px] rounded-full opacity-30" />
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
          {/* Hero Meta */}
          <header className="max-w-4xl mb-24 space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#58B573]" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#58B573]">FILOSOFIA ESTRUTURAL</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase text-white">
              SISTEMAS <br />
              <span className="text-[#FFEE00]">SOBRE TÁTICAS</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed max-w-2xl">
              Eu não acredito em improviso travestido de inovação.
              <span className="text-white"> Acredito em clareza antes da velocidade.</span>
            </p>
          </header>

          {/* Core Thesis Card */}
          <section className="mb-32 p-10 md:p-16 rounded-[2.5rem] bg-neutral-900/30 border border-neutral-800/50 relative overflow-hidden group">
            <Quote className="absolute -bottom-8 -right-8 w-48 h-48 text-white/[0.02] group-hover:text-[#FFEE00]/[0.05] transition-colors duration-1000" />

            <div className="relative max-w-4xl space-y-12">
              <div className="flex items-center gap-3">
                <Target size={14} className="text-[#58B573]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">A TESE</span>
              </div>

              <div className="space-y-8">
                <p className="text-2xl md:text-4xl text-white font-bold leading-tight uppercase tracking-tight">
                  Empresas e produtos não quebram por falta de ideias, mas por falta de direção.
                </p>
                <div className="h-[1px] w-24 bg-[#58B573]" />
                <p className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed italic">
                  "Quando não existe visão, tudo vira execução cega. Quando não existe método, tudo vira esforço desperdiçado. Minha prática é sobre pensar antes de fazer e estruturar antes de escalar."
                </p>
              </div>
            </div>
          </section>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-black/60 border border-white/5 transition-all duration-500 flex flex-col gap-8 hover:bg-black/80"
                style={{ '--pillar-color': pillar.color, '--pillar-color-30': `${pillar.color}30` } as React.CSSProperties}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = pillar.color)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${pillar.color}1A`, color: pillar.color }}
                >
                  {pillar.icon}
                </div>

                <div className="space-y-4">
                  <h3
                    className="text-xl font-black uppercase tracking-widest"
                    style={{ color: pillar.color }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-400 font-medium leading-[1.6]">
                    {pillar.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          <footer className="mt-40 text-center space-y-12">
            <div className="inline-flex flex-col items-center gap-6">
              <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#FFEE00]" />
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white max-w-4xl leading-[0.9]">
                O futuro pertence a quem <span className="text-[#FFEE00]">constrói direção</span> em meio ao ruído.
              </h2>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-10 py-5 rounded-full bg-[#FFEE00] text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-colors"
            >
              RETORNAR À ESTRATÉGIA
            </motion.button>
          </footer>
        </main>

        <footer className="px-6 md:px-12 py-12 border-t border-white/5 opacity-40 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="text-[9px] font-black uppercase tracking-[0.5em] text-neutral-500">
              © 2025 FERNANDO RAMALHO. PHILOSOPHY & SYSTEMS.
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#FFEE00]">LOGIC IS INEVITABLE</span>
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default FilosofiaView;
