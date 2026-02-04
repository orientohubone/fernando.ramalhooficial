
import React, { useEffect } from 'react';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';
import ProfileImage from './ProfileImage';

interface AboutViewProps {
  lang: Language;
  onClose: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ lang, onClose }) => {
  const t = TRANSLATIONS[lang].about;
  const nav = TRANSLATIONS[lang].nav;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <nav className="sticky top-0 left-0 w-full z-[110] px-4 xs:px-6 py-6 xs:py-8 md:px-12 flex justify-between items-center mix-blend-difference">
        <button onClick={onClose} className="group flex items-center gap-2 xs:gap-3 xs:gap-4">
          <div className="w-5 xs:w-6 sm:w-8 h-[1px] bg-white group-hover:w-6 xs:group-hover:w-8 sm:group-hover:w-12 transition-all duration-300" />
          <span className="text-[7px] xs:text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em]">{nav.back}</span>
        </button>
        <BrandLogo size="md" />
      </nav>

      <main className="max-w-7xl mx-auto px-4 xs:px-6 md:px-12 pt-16 xs:pt-20 pb-32 xs:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xs:gap-16 lg:gap-24">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-20 xs:top-32 md:top-40">
              <ProfileImage className="aspect-[3/4] rounded-sm border border-neutral-900" />
              
              <div className="mt-8 xs:mt-12 grid grid-cols-1 gap-3 xs:gap-4">
                {t.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-neutral-900 pb-2 xs:pb-3">
                    <span className="text-[8px] xs:text-[9px] font-black uppercase tracking-[0.4em] text-neutral-700">{stat.label}</span>
                    <span className="text-[10px] xs:text-xs font-black tracking-widest text-neutral-400">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-16 xs:space-y-20 md:space-y-24">
            <header className="space-y-6 xs:space-y-8">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase">
                {t.title.split(' ')[0]} <br />
                <span className="text-[#FFEE00]">{t.title.split(' ')[1] || ''}</span>
              </h1>
              
              <div className="flex flex-wrap gap-1.5 xs:gap-2">
                {(t as any).mantras?.map((m: string, i: number) => (
                  <span key={i} className="px-3 xs:px-4 py-1 border border-neutral-800 text-neutral-500 text-[8px] xs:text-[10px] font-black uppercase tracking-[0.3em] rounded-full">
                    {m}
                  </span>
                ))}
              </div>

              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-medium text-neutral-400 max-w-2xl pt-3 xs:pt-4 leading-relaxed italic">
                {t.subtitle}
              </p>
            </header>

            <section className="space-y-8 xs:space-y-10 sm:space-y-12 relative">
              <div className="absolute -top-8 xs:-top-12 -left-8 xs:-left-12 text-[#FFEE00] opacity-10 text-[8rem] xs:text-[12rem] font-black pointer-events-none">"</div>
              <div className="flex items-center gap-3 xs:gap-4">
                <div className="h-[1px] w-8 xs:w-12 bg-[#FFEE00]"></div>
                <h3 className="text-[8px] xs:text-[10px] font-black uppercase tracking-[0.5em] text-[#FFEE00]">Manifesto</h3>
              </div>
              
              <div className="space-y-6 xs:space-y-8">
                {/* Palavra-chave 1 */}
                <div className="space-y-2 xs:space-y-3">
                  <span className="inline-block px-3 xs:px-4 py-1.5 xs:py-2 bg-[#FFEE00] text-black text-xs xs:text-sm font-black uppercase tracking-wider">
                    {lang === 'PT' ? 'ESTRATÉGIA' : 'STRATEGY'}
                  </span>
                  <p className="text-base xs:text-lg sm:text-xl text-neutral-400 leading-relaxed pl-0 xs:pl-1">
                    {lang === 'PT' 
                      ? 'Não é sobre prever o futuro, mas sobre arquitetar a lógica que o torna inevitável.'
                      : 'Is not about predicting the future, but about architecting the logic that makes it inevitable.'}
                  </p>
                </div>

                {/* Palavra-chave 2 */}
                <div className="space-y-2 xs:space-y-3">
                  <span className="inline-block px-3 xs:px-4 py-1.5 xs:py-2 bg-[#FFEE00] text-black text-xs xs:text-sm font-black uppercase tracking-wider">
                    {lang === 'PT' ? 'COMPLEXIDADE' : 'COMPLEXITY'}
                  </span>
                  <p className="text-base xs:text-lg sm:text-xl text-neutral-400 leading-relaxed pl-0 xs:pl-1">
                    {lang === 'PT' 
                      ? 'Traduzo em clareza absoluta, desenhando sistemas onde cada peça tem propósito.'
                      : 'I translate into absolute clarity, designing systems where every piece has purpose.'}
                  </p>
                </div>

                {/* Palavra-chave 3 */}
                <div className="space-y-2 xs:space-y-3">
                  <span className="inline-block px-3 xs:px-4 py-1.5 xs:py-2 bg-[#FFEE00] text-black text-xs xs:text-sm font-black uppercase tracking-wider">
                    {lang === 'PT' ? 'INOVAÇÃO' : 'INNOVATION'}
                  </span>
                  <p className="text-base xs:text-lg sm:text-xl text-neutral-400 leading-relaxed pl-0 xs:pl-1">
                    {lang === 'PT' 
                      ? 'Deixa de ser uma aposta para se tornar o núcleo de uma vantagem competitiva implacável.'
                      : 'Becomes the core of an implacable competitive advantage, not a gamble.'}
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-8 xs:space-y-10 sm:space-y-12">
              <div className="flex items-center gap-3 xs:gap-4">
                <div className="h-[1px] w-8 xs:w-12 bg-[#58B573]"></div>
                <h3 className="text-[8px] xs:text-[10px] font-black uppercase tracking-[0.5em] text-[#58B573]">Números que Falam por Si</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 xs:gap-8">
                <div className="text-center space-y-3 xs:space-y-4">
                  <div className="text-4xl xs:text-5xl sm:text-6xl font-black text-[#58B573] leading-none">+5M</div>
                  <div className="text-xs xs:text-sm font-black uppercase tracking-[0.3em] text-neutral-500">Alcance Gerado</div>
                </div>
                
                <div className="text-center space-y-3 xs:space-y-4">
                  <div className="text-4xl xs:text-5xl sm:text-6xl font-black text-[#FFEE00] leading-none">+R$1M</div>
                  <div className="text-xs xs:text-sm font-black uppercase tracking-[0.3em] text-neutral-500">Receita Gerada</div>
                </div>
                
                <div className="text-center space-y-3 xs:space-y-4">
                  <div className="text-4xl xs:text-5xl sm:text-6xl font-black text-[#FF6B6B] leading-none">+50</div>
                  <div className="text-xs xs:text-sm font-black uppercase tracking-[0.3em] text-neutral-500">Marcas Impactadas</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 xs:gap-8 pt-6 xs:pt-8 border-t border-neutral-900">
                <div className="flex items-center gap-2 xs:gap-3">
                  <div className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#58B573] leading-none">+R$100K</div>
                  <div className="text-xs xs:text-sm font-black uppercase tracking-[0.3em] text-neutral-500">em Ads Investidos</div>
                </div>
                
                <div className="hidden sm:block w-[1px] h-6 xs:h-8 bg-neutral-900"></div>
                
                <div className="flex items-center gap-2 xs:gap-3">
                  <div className="text-xs xs:text-sm font-black uppercase tracking-[0.3em] text-[#58B573]">Especialista em</div>
                  <div className="text-lg xs:text-xl sm:text-2xl font-black text-white">SaaS</div>
                </div>
              </div>
            </section>

            <section className="space-y-6 xs:space-y-8">
              <h3 className="text-[8px] xs:text-[10px] font-black uppercase tracking-[0.5em] text-neutral-700 border-b border-neutral-900 pb-3 xs:pb-4">BIOGRAFIA</h3>
              <div className="text-neutral-400 leading-relaxed text-lg xs:text-xl md:text-2xl font-medium max-w-2xl space-y-8 xs:space-y-12 italic">
                <p>{t.bio}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xs:gap-12">
                  <div className="space-y-4 xs:space-y-6">
                    <h4 className="text-[8px] xs:text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600">{(t as any).ventureTitle}</h4>
                    <a href="https://orientohub.com.br/" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
                      <span className="text-3xl xs:text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-[#FFEE00] transition-colors leading-none">Orientohub</span>
                      <span className="text-[8px] xs:text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700 group-hover:text-white transition-colors">Founder & Strategist</span>
                    </a>
                  </div>

                  <div className="space-y-4 xs:space-y-6">
                    <h4 className="text-[8px] xs:text-[10px] font-black uppercase tracking-[0.5em] text-[#58B573]">{(t as any).creativeTitle}</h4>
                    <a href="https://www.behance.net/fernandoramalho1" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
                      <span className="text-3xl xs:text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-[#58B573] transition-colors leading-none">Behance</span>
                      <span className="text-[8px] xs:text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700 group-hover:text-white transition-colors">Case Studies & Craft</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-16 xs:pt-20 sm:pt-24 border-t border-neutral-900">
               <a href="mailto:fernando@orientohub.com.br" className="group block break-words">
                 <span className="block text-[8px] xs:text-[10px] font-black uppercase tracking-[0.6em] text-neutral-700 mb-3 xs:mb-4 group-hover:text-[#FFEE00] transition-colors">CONTATO DIRETO</span>
                 <span className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-black border-b-2 border-[#FFEE00] pb-1 xs:pb-2 group-hover:bg-[#FFEE00] group-hover:text-black transition-all inline-block uppercase tracking-tighter break-words">
                   fernando@orientohub.com.br
                 </span>
               </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutView;
