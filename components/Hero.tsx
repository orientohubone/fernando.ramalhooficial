
import React from 'react';
import { Link } from 'react-router-dom';
import { Language, TRANSLATIONS } from '../constants';
import {
  BarChart2,
  Zap,
  Megaphone,
  CircleDollarSign,
  SwatchBook,
  Monitor,
  Code,
  ShieldCheck,
  Globe,
  Globe2,
  ShoppingBag,
  Code2,
  Layers
} from 'lucide-react';

const createSlug = (text: string): string =>
  text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const caps = TRANSLATIONS[lang].capacities;

  const rightColumnItems = [
    { id: 'strategy',   icon: BarChart2,        color: '#FFEE00', title: caps.strategy.title,   category: caps.strategy.category   },
    { id: 'innovation', icon: Zap,              color: '#FF3366', title: caps.innovation.title, category: caps.innovation.category },
    { id: 'marketing',  icon: Megaphone,        color: '#00FF66', title: caps.marketing.title,  category: caps.marketing.category  },
    { id: 'paidMedia',  icon: CircleDollarSign, color: '#9D4EDD', title: caps.paidMedia.title,  category: caps.paidMedia.category  },
    { id: 'design',     icon: SwatchBook,       color: '#FF9900', title: caps.design.title,     category: caps.design.category     },
    { id: 'ai',         icon: Monitor,          color: '#FFEE00', title: caps.ai.title,         category: caps.ai.category         },
    { id: 'vibeCoding', icon: Code,             color: '#00D4FF', title: caps.vibeCoding.title, category: caps.vibeCoding.category },
    { id: 'brandReg',   icon: ShieldCheck,      color: '#FF4D4D', title: caps.brandReg.title,  category: caps.brandReg.category   },
    { id: 'domain',     icon: Globe,            color: '#B185DB', title: caps.domain.title,    category: caps.domain.category     },
    { id: 'sites',      icon: Globe2,           color: '#00FF66', title: caps.sites.title,     category: caps.sites.category      },
    { id: 'ecommerce',  icon: ShoppingBag,      color: '#9D4EDD', title: caps.ecommerce.title, category: caps.ecommerce.category  },
  ];

  return (
    <section className="relative w-full bg-[#050505] overflow-hidden min-h-[95vh] flex flex-col pt-24 md:pt-24">
      {/* Container Principal Hero */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 mt-2 md:mt-4 flex flex-col lg:flex-row gap-16 lg:gap-0 items-center relative z-10">

        {/* Left Column: Concentric Circles + Titles */}
        <div className="relative flex flex-col justify-center items-center lg:items-start w-full lg:w-[45%] lg:min-h-[500px]">
          {/* Concentric Circles Background SVG */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] md:w-[150%] aspect-square pointer-events-none z-0">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="0.4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer ring */}
              <circle cx="50" cy="50" r="48" stroke="#00FF66" strokeWidth="0.12" filter="url(#glow)">
                <animate attributeName="stroke-opacity" values="0.08;0.45;0.08" dur="5s" repeatCount="indefinite" begin="0s"
                  calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
                <animate attributeName="r" values="47.5;48.5;47.5" dur="5s" repeatCount="indefinite" begin="0s"
                  calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
              </circle>

              {/* Second ring */}
              <circle cx="50" cy="50" r="41" stroke="#00FF66" strokeWidth="0.15" filter="url(#glow)">
                <animate attributeName="stroke-opacity" values="0.12;0.6;0.12" dur="5s" repeatCount="indefinite" begin="0.8s"
                  calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
                <animate attributeName="r" values="40.5;41.8;40.5" dur="5s" repeatCount="indefinite" begin="0.8s"
                  calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
              </circle>

              {/* Third ring */}
              <circle cx="50" cy="50" r="34" stroke="#00FF66" strokeWidth="0.18" filter="url(#glow)">
                <animate attributeName="stroke-opacity" values="0.18;0.75;0.18" dur="5s" repeatCount="indefinite" begin="1.6s"
                  calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
                <animate attributeName="r" values="33.5;35;33.5" dur="5s" repeatCount="indefinite" begin="1.6s"
                  calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
              </circle>

              {/* Inner ring - most intense */}
              <circle cx="50" cy="50" r="27" stroke="#00FF66" strokeWidth="0.22" filter="url(#glow)">
                <animate attributeName="stroke-opacity" values="0.25;1.0;0.25" dur="5s" repeatCount="indefinite" begin="2.4s"
                  calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
                <animate attributeName="r" values="26.5;28;26.5" dur="5s" repeatCount="indefinite" begin="2.4s"
                  calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
              </circle>
            </svg>
          </div>

          <div className="relative z-10 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="px-4 py-2 rounded-full border border-[#00FF66]/30 bg-[#00FF66]/5 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-white/80 flex items-center gap-2 backdrop-blur-sm uppercase">
                <Code2 size={12} className="text-[#00FF66]" strokeWidth={2.5} />
                {lang === 'EN' ? 'Vibe Coding' : 'Vibe Coding'}
              </div>
              <div className="px-4 py-2 rounded-full border border-[#00FF66]/30 bg-[#00FF66]/5 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-white/80 flex items-center gap-2 backdrop-blur-sm uppercase">
                <Layers size={12} className="text-[#00FF66]" strokeWidth={2.5} />
                {lang === 'EN' ? 'Digital Solutions' : 'Soluções digitais'}
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[7.5rem] xl:text-[9.5rem] font-black leading-[0.8] tracking-tighter bg-gradient-to-r from-[#65EFC1] to-[#009966] text-transparent bg-clip-text mb-3 lg:mb-4 w-full">
              Builder
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-medium max-w-[500px] leading-snug">
              {lang === 'EN' ? 'Strategic Innovation and Artificial Intelligence' : 'Inovação Estratégica e Inteligência Artificial'}
            </h2>

            {/* Badge Feito no Brasil */}
            <div className="mt-5 lg:mt-6">
              <div className="flex items-center gap-4 bg-[#0A0A0A] rounded-md px-5 py-2 inline-flex opacity-80 backdrop-blur-sm border border-neutral-900 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">
                  {lang === 'EN' ? 'MADE IN' : 'FEITO NO'}
                </span>
                <img
                  src="/bandeira-brasil.svg"
                  alt="Bandeira do Brasil"
                  className="w-5 h-5 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Capabilities Grid */}
        <div className="relative z-10 w-full lg:w-[55%] lg:pl-28 xl:pl-40 flex items-center justify-center lg:justify-end mt-16 lg:mt-0">
          <div className="w-full max-w-[550px]">
            {/* Label introdutório */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-[1px] bg-[#00FF66]/50"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00FF66]/70">
                {lang === 'EN' ? 'Core Capabilities' : 'Capacidades Centrais'}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:gap-y-8">
              {rightColumnItems.map((item, index) => {
                const Icon = item.icon;
                const slug = createSlug(item.title);
                const url = lang === 'EN' ? `/en/capacidade/${slug}` : `/capacidade/${slug}`;
                return (
                  <Link
                    to={url}
                    key={item.id}
                    className="flex items-center gap-4 lg:gap-5 group"
                  >
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/60 border border-neutral-800/80 flex flex-col items-center justify-center shrink-0 group-hover:bg-[#111] group-hover:border-neutral-700 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                      <Icon size={22} color={item.color} strokeWidth={2.5} className="opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg md:text-xl tracking-tight leading-none mb-2 group-hover:text-white/90 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-neutral-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                        {item.category}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
