import React from 'react';
import { motion } from 'framer-motion';
import { Language, TRANSLATIONS, getPrinciples } from '../constants';

interface StrategySectionProps {
  lang: Language;
}

const StrategySection: React.FC<StrategySectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].mindset;
  const principles = getPrinciples(lang);

  return (
    <section className="relative px-6 md:px-12 pt-12 md:pt-16 lg:pt-20 pb-24 md:pb-32 lg:pb-40 bg-[#050505] overflow-hidden">
      {/* Subtle Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.4] contrast-150 brightness-50" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">

        {/* Left Column: Monumental Branding */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full lg:sticky lg:top-32">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#FFEE00]" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#FFEE00]">OPERATIONAL CORE</span>
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.75] text-white">
              SISTEMA <br />
              <span className="text-neutral-600">MENTAL</span>
            </h2>
            <div className="pt-8 max-w-sm">
              <p className="text-neutral-400 text-xs md:text-sm font-black uppercase tracking-[0.2em] leading-relaxed">
                {t.subtitle}
              </p>
            </div>
          </div>

          <div className="hidden lg:block mt-24 opacity-20">
            <div className="flex items-center gap-6 text-[9px] font-mono tracking-[0.4em] text-white uppercase">
              <span>STATUS: ACTIVE</span>
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
              <span>CORE_TYPE: LOGIC_MANIFESTO</span>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural List */}
        <div className="lg:col-span-7 flex flex-col">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="group relative pt-12 pb-16 border-b border-white/[0.05] last:border-0"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
                {/* Number Accent */}
                <div className="flex-shrink-0">
                  <span className="text-4xl md:text-5xl font-black font-mono text-neutral-800 group-hover:text-[#58B573] transition-colors duration-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90 group-hover:text-white transition-colors duration-500 leading-tight">
                    {principle.title}
                  </h4>
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-medium italic max-w-xl group-hover:text-neutral-300 transition-colors duration-500">
                    {principle.description}
                  </p>
                </div>
              </div>

              {/* Interaction Accent */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#58B573]/40 to-transparent transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
