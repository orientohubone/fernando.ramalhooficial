
import React from 'react';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer id="contact" className="px-6 md:px-12 py-24 bg-[#050505] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="max-w-2xl flex flex-col gap-6">
            <BrandLogo size="md" className="opacity-50" />
            
            <h2 className="text-2xl md:text-4xl font-light tracking-tight leading-tight mt-2">
              {t.cta.split(' ').slice(0, -1).join(' ')} <span className="text-[#FFEE00] font-medium italic">{t.cta.split(' ').slice(-1)}</span>
            </h2>
            
            <div className="flex flex-wrap gap-8 items-center mt-2">
              <a href="mailto:contato@fernandoramalho.com.br" className="text-base md:text-lg font-medium border-b border-[#FFEE00] pb-1 hover:bg-[#FFEE00] hover:text-black transition-all">
                contato@fernandoramalho.com.br
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 items-start md:items-end">
            <div className="flex gap-6 items-center">
              <a href="#" className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-600 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-600 hover:text-white transition-colors">X / Twitter</a>
            </div>
            <div className="text-[8px] font-medium uppercase tracking-[0.4em] text-neutral-800 text-right leading-loose">
              {t.rights} <br /> 
              Systems for Dominance
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
