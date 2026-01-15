
import React, { useState, useEffect } from 'react';
import { Language, TRANSLATIONS } from '../constants';
import { ReportItem } from '../types';
import BrandLogo from './BrandLogo';
import ReportDetail from './ReportDetail';

interface ReportsViewProps {
  lang: Language;
  onClose: () => void;
}

const ReportsView: React.FC<ReportsViewProps> = ({ lang, onClose }) => {
  const t = TRANSLATIONS[lang].reportsPage;
  const nav = TRANSLATIONS[lang].nav;
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedReport, setSelectedReport] = useState<ReportItem | null>(null);

  useEffect(() => {
    if (!selectedReport) {
      window.scrollTo(0, 0);
    }
  }, [selectedReport]);

  const filteredItems = activeFilter === 'all' 
    ? t.items 
    : (t.items as ReportItem[]).filter(item => item.cat === activeFilter);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Navigation */}
      <nav className="sticky top-0 left-0 w-full z-[110] px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference">
        <button onClick={onClose} className="group flex items-center gap-4">
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">{nav.back}</span>
        </button>
        <BrandLogo size="md" />
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-40">
        <header className="mb-16 md:mb-24 space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8 md:w-12 bg-[#58B573]"></div>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-[#58B573]">Proprietary Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8]">
            {t.title} <br />
            <span className="text-[#FFEE00]">{t.subtitle}</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-neutral-500 max-w-2xl font-medium tracking-tight">
            {t.description}
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 md:mb-16 border-b border-neutral-900 pb-6 md:pb-8">
          {Object.entries(t.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-3 py-1.5 md:px-4 md:py-2 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] border transition-all duration-300 ${
                activeFilter === key 
                ? 'bg-[#FFEE00] border-[#FFEE00] text-black' 
                : 'bg-transparent border-neutral-800 text-neutral-500 hover:border-neutral-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
          {(filteredItems as ReportItem[]).map((report) => (
            <div 
              key={report.id} 
              onClick={() => setSelectedReport(report)}
              className="bg-[#050505] p-6 md:p-8 lg:p-10 flex flex-col justify-between group hover:bg-neutral-950 transition-colors duration-500 min-h-[280px] md:min-h-[320px] cursor-pointer"
            >
              <div className="space-y-4 md:space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-[6px] md:text-[8px] font-black font-mono text-neutral-700 tracking-[0.5em]">ID_{report.id}</span>
                  <div className="w-2 h-2 rounded-full bg-[#58B573] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg md:text-2xl font-black uppercase tracking-tight group-hover:text-[#FFEE00] transition-colors">
                  {report.title}
                </h3>
                <p className="text-neutral-500 text-xs md:text-sm leading-relaxed uppercase tracking-wider font-medium">
                  {report.desc}
                </p>
              </div>
              
              <div className="pt-4 md:pt-8 flex justify-between items-center">
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-neutral-800">
                  {t.categories[report.cat as keyof typeof t.categories]}
                </span>
                <button className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-all">
                  {t.ui.access}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Intelligence Footer */}
        <div className="mt-16 md:mt-24 pt-16 md:pt-24 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-end gap-8 md:gap-12">
           <div className="max-w-md">
             <h4 className="text-xs font-black uppercase tracking-[0.5em] text-neutral-600 mb-4">Methodology Note</h4>
             <p className="text-[8px] md:text-[10px] text-neutral-700 uppercase tracking-widest leading-relaxed">
               All reports are generated using proprietary heuristic models combining LLM-powered data synthesis, traditional financial analysis, and strategic pattern recognition.
             </p>
           </div>
           <div className="text-right">
              <span className="text-[6px] md:text-[8px] font-mono text-neutral-800 block mb-2 uppercase">Systems Status: ACTIVE</span>
              <span className="text-[6px] md:text-[8px] font-mono text-neutral-800 block uppercase">Last update: 2026_Q1_SYD</span>
           </div>
        </div>
      </main>

      {/* Immersive Detail View Overlay */}
      {selectedReport && (
        <ReportDetail 
          report={selectedReport} 
          lang={lang} 
          onClose={() => setSelectedReport(null)} 
        />
      )}
    </div>
  );
};

export default ReportsView;
