
import React from 'react';
import { Language, TRANSLATIONS } from '../constants';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].hero;

  return (
    <section className="min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-24 max-w-7xl mx-auto pt-40">
      <div className="space-y-4">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase">
          Build <br /> 
          <span className="text-[#FFEE00]">{t.line1}</span> <br /> 
          {t.line2}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <p className="text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-col justify-end items-start md:items-end">
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#58B573] mb-2">{t.focus}</span>
             <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider text-left md:text-right">
               Scalable SaaS Architecture <br /> 
               Algorithmic Growth Models
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
