import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';
import ProfileImage from './ProfileImage';
import { ArrowRight, Quote, Zap, Target, Award, Globe, MessageSquare, Briefcase } from 'lucide-react';

interface AboutViewProps {
  lang: Language;
  onClose: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ lang, onClose }) => {
  const t = TRANSLATIONS[lang].about;
  const nav = TRANSLATIONS[lang].nav;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
        <div className="absolute bottom-[20%] left-[-5%] w-[30%] h-[30%] bg-[#FFEE00]/3 blur-[100px] rounded-full opacity-30" />
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

        <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pt-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left Column: Image & Status */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative group"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 p-2">
                  <ProfileImage className="w-full aspect-[4/5] rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>

                {/* Status Badge */}
                <div className="mt-6 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-4">
                  {t.stats.map((stat, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-neutral-500">{stat.label}</span>
                      <span className="text-[10px] font-black tracking-widest text-[#FFEE00] uppercase font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Panel */}
                <div className="mt-6 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-6">
                  <div className="flex items-center gap-3">
                    <Briefcase size={12} className="text-[#FFEE00]" />
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white">STACK TECNOLÓGICA</span>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { src: "/logos/supabase.svg", alt: "Supabase" },
                      { src: "/logos/vercel.svg", alt: "Vercel" },
                      { src: "/logos/openai.svg", alt: "OpenAI" },
                      { src: "/logos/claude.svg", alt: "Claude" },
                      { src: "/logos/windsurf.svg", alt: "Windsurf" },
                      { src: "/logos/cursor.svg", alt: "Cursor" },
                      { src: "/logos/replit.svg", alt: "Replit" },
                      { src: "/logos/github.svg", alt: "GitHub" },
                      { src: "/logos/vscode.svg", alt: "VSCode" },
                      { src: "/logos/netlify.svg", alt: "Netlify" },
                      { src: "/logos/neon.svg", alt: "NeonDB" },
                      { src: "/logos/firecrawl-light-wordmark.svg", alt: "Firecrawl" },
                    ].map((logo, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 group/logo hover:border-[#FFEE00]/30 hover:bg-white/10 transition-all"
                        title={logo.alt}
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="w-full h-full object-contain opacity-50 grayscale brightness-[2] group-hover/logo:opacity-100 group-hover/logo:grayscale-0 group-hover/logo:brightness-100 transition-all duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <p className="text-[10px] text-neutral-500 font-medium leading-relaxed italic">
                      "Infraestrutura baseada em agentes autônomos e arquiteturas distribuídas."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 space-y-16">

              {/* Header */}
              <header className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-[#FFEE00]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#FFEE00]">BIO CORPORATIVA</span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase text-white">
                  {t.title.split(' ')[0]} <br />
                  <span className="text-[#FFEE00]">{t.title.split(' ').slice(1).join(' ')}</span>
                </h1>

                <p className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed max-w-xl">
                  {t.subtitle}
                </p>
              </header>

              {/* Manifesto Section (Restored Pillars) */}
              <section className="p-8 md:p-12 rounded-3xl bg-neutral-900/30 border border-neutral-800/50 relative overflow-hidden group">
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/[0.02] group-hover:text-[#FFEE00]/[0.05] transition-colors" />

                <div className="relative space-y-12">
                  <div className="flex items-center gap-3">
                    <Target size={14} className="text-[#FFEE00]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">MANIFESTO ESTRATÉGICO</span>
                  </div>

                  <div className="grid gap-12">
                    {/* Strategy */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Zap size={14} className="text-[#FFEE00]" />
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-white">ESTRATÉGIA</span>
                      </div>
                      <p className="text-lg md:text-xl text-neutral-200 font-medium leading-relaxed">
                        Não é sobre prever o futuro, mas sobre arquitetar a lógica que o torna inevitável.
                      </p>
                    </div>

                    {/* Complexity */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Briefcase size={14} className="text-[#FFEE00]" />
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-white">COMPLEXIDADE</span>
                      </div>
                      <p className="text-lg md:text-xl text-neutral-200 font-medium leading-relaxed">
                        Traduzo em clareza absoluta, desenhando sistemas onde cada peça tem propósito.
                      </p>
                    </div>

                    {/* Innovation */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Award size={14} className="text-[#FFEE00]" />
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-white">INOVAÇÃO</span>
                      </div>
                      <p className="text-lg md:text-xl text-neutral-200 font-medium leading-relaxed">
                        Deixa de ser uma aposta para se tornar o núcleo de uma vantagem competitiva implacável.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Metrics (Restored original values) */}
              <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { val: '+5M', label: 'Alcance Gerado' },
                  { val: '+R$1M', label: 'Receita Gerada' },
                  { val: '+50', label: 'Marcas Impactadas' }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 text-center">
                    <div className="text-3xl font-black text-white">{item.val}</div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-neutral-500 mt-1">{item.label}</div>
                  </div>
                ))}
              </section>

              {/* Bio Text */}
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-neutral-800" />
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-500">RESUMO EXECUTIVO</span>
                </div>
                <p className="text-lg md:text-xl text-neutral-400 font-medium leading-[1.6]">
                  {t.bio}
                </p>
              </section>

              {/* Ventures & Contact (Restored Behance) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <a
                  href="https://orientohub.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-[#FFEE00]/30 transition-all group"
                >
                  <Globe size={20} className="text-[#FFEE00] mb-4" />
                  <p className="text-xs font-black uppercase tracking-widest text-[#FFEE00] mb-1">Empresa</p>
                  <h4 className="text-lg font-black text-white uppercase group-hover:translate-x-1 transition-transform">Orientohub</h4>
                </a>

                <a
                  href="https://www.behance.net/fernandoramalho1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-[#FFEE00]/30 transition-all group"
                >
                  <Briefcase size={20} className="text-[#FFEE00] mb-4" />
                  <p className="text-xs font-black uppercase tracking-widest text-[#FFEE00] mb-1">Portfólio</p>
                  <h4 className="text-lg font-black text-white uppercase group-hover:translate-x-1 transition-transform">Behance</h4>
                </a>
              </div>

              {/* Contact Button */}
              <div className="pt-4">
                <a
                  href="mailto:fernando@orientohub.com.br"
                  className="w-full p-6 rounded-2xl bg-[#FFEE00] border border-[#FFEE00] hover:bg-white hover:border-white transition-all group flex items-center justify-between"
                >
                  <div className="flex flex-col">
                    <p className="text-xs font-black uppercase tracking-widest text-black/60 mb-1">Contato Direto</p>
                    <h4 className="text-lg md:text-xl font-black text-black uppercase">Falar com Fernando</h4>
                  </div>
                  <MessageSquare size={24} className="text-black" />
                </a>
              </div>

            </div>
          </div>
        </main>

        <footer className="px-6 md:px-12 py-8 border-t border-white/5 opacity-40 shrink-0 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-[8px] font-black uppercase tracking-[0.5em] text-neutral-500 text-center sm:text-left">
              © 2025 FERNANDO RAMALHO. {lang === 'PT' ? 'TODOS OS DIREITOS RESERVADOS' : 'ALL RIGHTS RESERVED'}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-black uppercase tracking-[0.5em] text-neutral-500">POWERED BY</span>
              <div className="w-1 h-1 rounded-full bg-[#FFEE00]" />
              <span className="text-[8px] font-black uppercase tracking-[0.5em] text-[#FFEE00]">STRATEGY</span>
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default AboutView;
