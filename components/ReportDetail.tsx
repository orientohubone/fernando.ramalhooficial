import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Language, TRANSLATIONS } from '../constants';
import { ReportItem } from '../types';
import BrandLogo from './BrandLogo';

interface ReportDetailProps {
  report: ReportItem;
  lang: Language;
  onClose: () => void;
}

const ReportDetail: React.FC<ReportDetailProps> = ({ report, lang, onClose }) => {
  const navigate = useNavigate();
  const t = TRANSLATIONS[lang].reportsPage.ui;
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleBackToHub = () => {
    // Navigate back to reports list
    navigate(lang === 'EN' ? '/en/relatorios' : '/relatorios');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    
    const container = document.getElementById('report-detail-container');
    const handleScroll = () => {
      if (!container) return;
      const totalHeight = container.scrollHeight - container.clientHeight;
      const progress = (container.scrollTop / totalHeight) * 100;
      setScrollProgress(progress);
    };

    container?.addEventListener('scroll', handleScroll);
    return () => {
      document.body.style.overflow = 'unset';
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="report-detail-container" className="fixed inset-0 z-[200] bg-black overflow-y-auto animate-in fade-in duration-500 selection:bg-[#FFEE00] selection:text-black scroll-smooth">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[220]">
        <div 
          className="h-full bg-[#FFEE00] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header Fixo de Leitura */}
      <nav className="sticky top-0 left-0 w-full z-[210] px-4 md:px-6 py-4 md:py-6 bg-black/95 backdrop-blur-xl border-b border-neutral-900 flex justify-between items-center">
        <button 
          onClick={handleBackToHub}
          className="flex items-center gap-2 md:gap-4 group"
        >
          <div className="w-4 md:w-6 h-[1px] bg-[#FFEE00] group-hover:w-6 md:group-hover:w-10 transition-all" />
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#FFEE00]">{t.backToHub}</span>
        </button>
        <div className="hidden md:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[7px] font-mono text-neutral-600 uppercase tracking-widest mb-1">{t.truthIndex}</span>
            <div className="flex items-center gap-2">
               <span className="text-xs font-black text-[#58B573] font-mono">{report.truthScore}%</span>
               <div className="w-20 md:w-24 h-[3px] bg-neutral-900 overflow-hidden">
                <div 
                  className="h-full bg-[#58B573] transition-all duration-1000"
                  style={{ width: `${report.truthScore}%` }}
                />
               </div>
            </div>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-32 md:pb-48">
        {/* Identidade do Report */}
        <header className="mb-16 md:mb-24 space-y-6 md:space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-[8px] md:text-[10px] font-black font-mono text-neutral-800 tracking-[0.6em]">DEEP_INTELLIGENCE_FILE</span>
            <div className="h-[1px] flex-1 bg-neutral-900" />
            <span className="text-[8px] md:text-[10px] font-black font-mono text-neutral-800 uppercase tracking-[0.6em]">{report.id}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-tight italic">
            {report.title}
          </h1>
          
          <p className="text-lg md:text-2xl lg:text-3xl font-medium text-neutral-400 tracking-tight leading-relaxed border-l-4 border-[#FFEE00] pl-4 md:pl-8">
            {report.desc}
          </p>
        </header>

        {/* Dashboard de Métricas Inicial */}
        {report.metrics && report.metrics.length > 0 && (
          <section className="mb-20 md:mb-32">
            <h3 className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600 mb-6 md:mb-10">{t.metricsTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {report.metrics.map((metric, i) => (
                <div key={i} className="bg-neutral-950 p-4 md:p-8 border border-neutral-900 hover:border-[#FFEE00]/30 transition-colors group">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[8px] md:text-[10px] font-black text-neutral-500 uppercase tracking-widest">{metric.label}</span>
                    <span className={`text-lg md:text-xl font-black ${metric.trend === 'up' ? 'text-[#58B573]' : 'text-red-500'}`}>
                      {metric.value}
                    </span>
                  </div>
                  <div className="w-full h-[2px] bg-neutral-900 overflow-hidden">
                    <div 
                      className="h-full bg-[#FFEE00] transition-all duration-1000 group-hover:bg-white"
                      style={{ width: `${metric.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Conteúdo Principal */}
        <div className="space-y-20 md:space-y-32">
          {/* Executive Summary */}
          <section className="space-y-6 md:space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[#FFEE00] border-b border-neutral-900 pb-4">{t.summary}</h3>
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-200 leading-relaxed font-semibold italic text-justify [text-justify:inter-word] [hyphens:auto] tracking-tight">
              {report.summary}
            </p>
          </section>

          {/* Analysis - Deep Long-form Content */}
          <section className="space-y-8 md:space-y-12">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-neutral-600 border-b border-neutral-900 pb-4">{t.analysis}</h3>
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed font-medium text-justify [text-justify:inter-word] [hyphens:auto] space-y-6 md:space-y-10">
                {report.analysis.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "first-letter:text-4xl md:first-letter:text-6xl first-letter:font-black first-letter:text-[#FFEE00] first-letter:mr-2 md:first-letter:mr-4 first-letter:float-left first-letter:leading-none" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Insight Cards */}
          {report.insightCards && report.insightCards.length > 0 && (
            <section className="space-y-8 md:space-y-12">
              <h3 className="text-xs font-black uppercase tracking-[0.5em] text-white border-b border-neutral-900 pb-4">{t.insightsTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900 overflow-hidden rounded-sm">
                {report.insightCards.map((card, i) => (
                  <div key={i} className="bg-neutral-950 p-6 md:p-10 hover:bg-[#FFEE00]/5 transition-colors group">
                    <span className="text-[8px] font-black font-mono text-[#FFEE00] tracking-[0.4em] mb-4 block">INSIGHT_0{i+1}</span>
                    <h4 className="text-lg md:text-xl font-black uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform">{card.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed font-medium text-justify">{card.content}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Findings */}
          <section className="space-y-8 md:space-y-12">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[#58B573] border-b border-neutral-900 pb-4">{t.findings}</h3>
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {report.findings.map((finding, i) => (
                <div key={i} className="flex gap-4 md:gap-8 p-6 md:p-10 bg-neutral-950 border-l border-[#58B573] group hover:bg-neutral-900 transition-colors">
                  <span className="text-xs font-black text-[#58B573] font-mono">0{i+1}</span>
                  <p className="text-base md:text-lg lg:text-xl font-black uppercase tracking-tight text-white leading-tight">{finding}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Research Sources & Links */}
          {report.sources && report.sources.length > 0 && (
            <section className="space-y-6 md:space-y-8 bg-neutral-950 p-6 md:p-10 border border-neutral-900">
              <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[#FFEE00] mb-6">{t.sourcesTitle}</h3>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {report.sources.map((source, i) => (
                  <a 
                    key={i} 
                    href={source.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-neutral-900 border border-neutral-800 hover:border-[#FFEE00] hover:text-[#FFEE00] transition-all group"
                  >
                    <span className="text-[8px] md:text-[10px] font-black font-mono text-neutral-600 group-hover:text-[#FFEE00]">SOURCE_0{i+1}</span>
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">{source.label}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Methodology */}
          <section className="space-y-6 md:space-y-8 bg-neutral-950 p-6 md:p-10 border border-neutral-900">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-black uppercase tracking-[0.5em] text-neutral-600">{t.methodology}</h3>
              <div className="px-3 py-1 bg-[#58B573]/10 text-[#58B573] text-[8px] font-black uppercase tracking-widest rounded-full">Algoritmo Verificado</div>
            </div>
            <p className="text-xs md:text-sm text-neutral-500 leading-relaxed font-medium font-mono text-justify uppercase [word-spacing:0.2em]">
              {report.methodology}
            </p>
          </section>

          {/* Recommendations & Next Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <section className="space-y-4 md:space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.5em] text-neutral-600 border-b border-neutral-900 pb-4">{t.recommendations}</h3>
              <p className="text-base md:text-lg text-neutral-300 font-bold leading-relaxed italic border-l-2 border-[#FFEE00] pl-4 md:pl-6 text-justify">
                {report.recommendations}
              </p>
            </section>
            <section className="space-y-4 md:space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.5em] text-neutral-600 border-b border-neutral-900 pb-4">{t.nextSteps}</h3>
              <p className="text-base md:text-lg text-neutral-300 font-bold leading-relaxed italic border-l-2 border-neutral-700 pl-4 md:pl-6 text-justify">
                {report.nextSteps}
              </p>
            </section>
          </div>
        </div>

        {/* Footer Detail */}
        <footer className="mt-24 md:mt-40 pt-16 md:pt-20 border-t border-neutral-900 flex flex-col items-center gap-8 md:gap-12 text-center">
           <button 
            onClick={handleBackToHub}
            className="text-2xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-[#FFEE00] hover:scale-105 transition-transform"
           >
             {t.backToHub}
           </button>
           <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src="/logofernando.png" alt="FERNANDO.RAMALHO" className="h-2" />
              <span className="text-[6px] md:text-[8px] font-mono text-neutral-800 uppercase tracking-[1em]">/ Systems Architect 2026</span>
            </div>
            <span className="text-[6px] md:text-[8px] font-mono text-neutral-800 uppercase tracking-[0.5em]">Strategically Engineered for Global Dominance</span>
           </div>
        </footer>
      </article>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFEE00]/5 blur-[120px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#58B573]/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
};

export default ReportDetail;
