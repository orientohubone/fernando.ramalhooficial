
import React from 'react';
import { Language, TRANSLATIONS, getPrinciples } from '../constants.tsx';

interface StrategySectionProps {
  lang: Language;
}

const StrategySection: React.FC<StrategySectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].mindset;
  const principles = getPrinciples(lang);

  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-40 bg-[#0A0A0A] border-y border-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-8">
            {t.title.split(' ')[0]} <br /> <span className="text-[#58B573]">{t.title.split(' ')[1]}</span>
          </h2>
          <p className="text-neutral-500 uppercase text-[10px] font-bold tracking-[0.3em] leading-loose whitespace-pre-line">
            {t.subtitle}
          </p>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {principles.map((principle, index) => (
            <div key={index} className="space-y-4 group">
              <div className="flex items-center gap-3">
                <span className="text-[#FFEE00] font-black text-xs">0{index + 1}</span>
                <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-[#FFEE00] transition-colors">
                  {principle.title}
                </h4>
              </div>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
