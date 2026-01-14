
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
      <nav className="sticky top-0 left-0 w-full z-[110] px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference">
        <button onClick={onClose} className="group flex items-center gap-4">
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">{nav.back}</span>
        </button>
        <BrandLogo size="md" />
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-40">
              <ProfileImage className="aspect-[3/4] rounded-sm border border-neutral-900" />
              
              <div className="mt-12 grid grid-cols-1 gap-4">
                {t.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-neutral-900 pb-3">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-700">{stat.label}</span>
                    <span className="text-xs font-black tracking-widest text-neutral-400">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-24">
            <header className="space-y-8">
              <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase">
                {t.title.split(' ')[0]} <br />
                <span className="text-[#FFEE00]">{t.title.split(' ')[1] || ''}</span>
              </h1>
              
              <div className="flex flex-wrap gap-2">
                {(t as any).mantras?.map((m: string, i: number) => (
                  <span key={i} className="px-4 py-1 border border-neutral-800 text-neutral-500 text-[10px] font-black uppercase tracking-[0.3em] rounded-full">
                    {m}
                  </span>
                ))}
              </div>

              <p className="text-2xl md:text-3xl font-medium text-neutral-400 max-w-2xl pt-4 leading-relaxed italic">
                {t.subtitle}
              </p>
            </header>

            <section className="space-y-12 relative">
              <div className="absolute -top-12 -left-12 text-[#FFEE00] opacity-10 text-[12rem] font-black pointer-events-none">“</div>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#FFEE00]"></div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FFEE00]">Manifesto</h3>
              </div>
              
              <div className="space-y-8">
                {/* Palavra-chave 1 */}
                <div className="space-y-3">
                  <span className="inline-block px-4 py-2 bg-[#FFEE00] text-black text-sm font-black uppercase tracking-wider">
                    {lang === 'PT' ? 'ESTRATÉGIA' : 'STRATEGY'}
                  </span>
                  <p className="text-lg md:text-xl text-neutral-400 leading-relaxed pl-1">
                    {lang === 'PT' 
                      ? 'Não é sobre prever o futuro, mas sobre arquitetar a lógica que o torna inevitável.'
                      : 'Is not about predicting the future, but about architecting the logic that makes it inevitable.'}
                  </p>
                </div>

                {/* Palavra-chave 2 */}
                <div className="space-y-3">
                  <span className="inline-block px-4 py-2 bg-[#FFEE00] text-black text-sm font-black uppercase tracking-wider">
                    {lang === 'PT' ? 'COMPLEXIDADE' : 'COMPLEXITY'}
                  </span>
                  <p className="text-lg md:text-xl text-neutral-400 leading-relaxed pl-1">
                    {lang === 'PT' 
                      ? 'Traduzo em clareza absoluta, desenhando sistemas onde cada peça tem propósito.'
                      : 'I translate into absolute clarity, designing systems where every piece has purpose.'}
                  </p>
                </div>

                {/* Palavra-chave 3 */}
                <div className="space-y-3">
                  <span className="inline-block px-4 py-2 bg-[#FFEE00] text-black text-sm font-black uppercase tracking-wider">
                    {lang === 'PT' ? 'INOVAÇÃO' : 'INNOVATION'}
                  </span>
                  <p className="text-lg md:text-xl text-neutral-400 leading-relaxed pl-1">
                    {lang === 'PT' 
                      ? 'Deixa de ser uma aposta para se tornar o núcleo de uma vantagem competitiva implacável.'
                      : 'Becomes the core of an implacable competitive advantage, not a gamble.'}
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-700 border-b border-neutral-900 pb-4">BIOGRAFIA</h3>
              <div className="text-neutral-400 leading-relaxed text-xl md:text-2xl font-medium max-w-2xl space-y-12 italic">
                <p>{t.bio}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600">{(t as any).ventureTitle}</h4>
                    <a href="https://orientohub.com.br/" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
                      <span className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-[#FFEE00] transition-colors leading-none">Orientohub</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700 group-hover:text-white transition-colors">Founder & Strategist</span>
                    </a>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#58B573]">{(t as any).creativeTitle}</h4>
                    <a href="https://www.behance.net/fernandoramalho1" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
                      <span className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-[#58B573] transition-colors leading-none">Behance</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700 group-hover:text-white transition-colors">Case Studies & Craft</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-24 border-t border-neutral-900">
               <a href="mailto:fernando@orientohub.com.br" className="group block">
                 <span className="block text-[10px] font-black uppercase tracking-[0.6em] text-neutral-700 mb-4 group-hover:text-[#FFEE00] transition-colors">CONTATO DIRETO</span>
                 <span className="text-2xl md:text-4xl font-black border-b-2 border-[#FFEE00] pb-2 group-hover:bg-[#FFEE00] group-hover:text-black transition-all inline-block uppercase tracking-tighter">
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
