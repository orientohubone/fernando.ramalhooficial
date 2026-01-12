
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
      {/* Navigation */}
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
              <ProfileImage className="aspect-[3/4] rounded-sm shadow-[0_0_80px_rgba(255,238,0,0.1)] border border-neutral-800" />
              
              <div className="mt-12 grid grid-cols-1 gap-4">
                {t.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-neutral-900 pb-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">{stat.label}</span>
                    <span className="text-xs font-black uppercase tracking-widest text-[#FFEE00]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-32">
            <header className="space-y-8">
              <h1 className="text-7xl md:text-[11rem] font-black leading-[0.8] tracking-tighter uppercase">
                {t.title.split(' ')[0]} <br />
                <span className="text-neutral-800 outline-text">{t.title.split(' ')[1] || ''}</span>
              </h1>
              
              <div className="flex flex-wrap gap-3">
                {(t as any).mantras?.map((m: string, i: number) => (
                  <span key={i} className="px-4 py-1.5 border border-[#FFEE00] text-[#FFEE00] text-[10px] font-black uppercase tracking-[0.3em]">
                    {m}
                  </span>
                ))}
              </div>

              <p className="text-2xl md:text-5xl font-bold uppercase tracking-tight text-neutral-400 max-w-2xl pt-4 leading-tight">
                {t.subtitle}
              </p>
            </header>

            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-16 bg-[#FFEE00]"></div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FFEE00]">Strategic Manifesto</h3>
              </div>
              <p className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-white">
                "{t.manifesto}"
              </p>
            </section>

            <section className="space-y-10">
              <h3 className="text-xs font-black uppercase tracking-[0.5em] text-neutral-600 border-b border-neutral-900 pb-6">Core Biography</h3>
              <div className="text-neutral-400 leading-relaxed text-2xl md:text-3xl font-medium max-w-3xl space-y-8">
                <p>{t.bio}</p>
              </div>
            </section>

            {/* CTA in About */}
            <section className="pt-24 border-t border-neutral-900">
               <a 
                href="mailto:contato@fernandoramalho.com.br"
                className="group block"
               >
                 <span className="block text-[11px] font-black uppercase tracking-[0.6em] text-neutral-600 mb-6 group-hover:text-[#FFEE00] transition-colors">Direct Inquiry</span>
                 <span className="text-2xl md:text-5xl font-black border-b-8 border-[#FFEE00] pb-4 group-hover:bg-[#FFEE00] group-hover:text-black transition-all inline-block">
                   contato@fernandoramalho.com.br
                 </span>
               </a>
            </section>
          </div>
        </div>
      </main>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px #222;
          color: transparent;
          transition: -webkit-text-stroke 0.5s ease;
        }
        .outline-text:hover {
          -webkit-text-stroke: 1px #FFEE00;
        }
      `}</style>
    </div>
  );
};

export default AboutView;
