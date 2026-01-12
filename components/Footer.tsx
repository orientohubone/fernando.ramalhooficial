
import React from 'react';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer id="contact" className="px-6 md:px-12 py-32 bg-[#050505] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="max-w-3xl flex flex-col gap-8">
            <BrandLogo size="lg" className="tracking-[0.2em]" />
            
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-tight mt-4">
              {t.cta.split(' ').slice(0, -1).join(' ')} <span className="text-[#FFEE00]">{t.cta.split(' ').slice(-1)}</span>
            </h2>
            
            <div className="flex flex-wrap gap-8 items-center mt-4">
              <a href="mailto:contato@fernandoramalho.com.br" className="text-lg md:text-xl font-black border-b-2 border-[#FFEE00] pb-1 hover:bg-[#FFEE00] hover:text-black transition-all duration-300">
                contato@fernandoramalho.com.br
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-8 items-start md:items-end">
            <div className="flex gap-8 items-center">
              <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-colors">Instagram</a>
            </div>
            <div className="text-[9px] font-black uppercase tracking-[0.5em] text-neutral-800 text-right leading-loose">
              {t.rights} <br /> 
              SYSTEMS FOR DOMINANCE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
