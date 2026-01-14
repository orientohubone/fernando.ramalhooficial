
import React from 'react';
import { Language, TRANSLATIONS, getPrinciples } from '../constants';

interface StrategySectionProps {
  lang: Language;
}

const StrategySection: React.FC<StrategySectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].mindset;
  const principles = getPrinciples(lang);

  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-32 bg-[#0A0A0A] border-y border-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
            {t.title.split(' ')[0]} <br /> <span className="text-[#58B573] italic">{t.title.split(' ')[1]}</span>
          </h2>
          <p className="text-neutral-500 text-xs font-black uppercase tracking-widest leading-relaxed max-w-xs">
            {t.subtitle}
          </p>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          {principles.map((principle, index) => (
            <div key={index} className="space-y-4 group">
              <div className="flex items-center gap-4">
                <span className="text-neutral-800 font-black text-xs">0{index + 1}</span>
                <h4 className="text-xl font-black uppercase tracking-tight group-hover:text-[#FFEE00] transition-colors">
                  {principle.title}
                </h4>
              </div>
              <p className="text-neutral-500 leading-relaxed text-sm font-medium italic">
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
