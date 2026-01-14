
import React from 'react';
import { Language, TRANSLATIONS } from '../constants';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].hero;

  return (
    <section className="min-h-[85vh] flex flex-col justify-end px-6 md:px-12 pb-24 max-w-7xl mx-auto pt-40">
      <div className="space-y-4">
        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase">
          Build <br /> 
          <span className="text-[#FFEE00]">{t.line1}</span> <br /> 
          {t.line2}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <p className="text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed font-medium italic">
            {t.description}
          </p>
          <div className="flex flex-col justify-end items-start md:items-end">
             <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#58B573] animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#58B573]">{t.focus}</span>
             </div>
             <p className="text-sm font-black text-neutral-500 tracking-[0.2em] uppercase text-left md:text-right leading-relaxed">
               Lógica da inovação <br /> 
               Arquitetura estratégica
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
