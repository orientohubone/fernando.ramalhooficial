
import React from 'react';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';
import CommitsGrid from './CommitsGrid';

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
            <div className="flex flex-row items-baseline font-black uppercase tracking-[0.1em] text-[11px] md:text-xs opacity-50">
              <span className="text-white">
                FERNANDO
              </span>
              <span className="text-[#5AB473] mx-[1px]">.</span>
              <span className="text-neutral-500 opacity-70 group-hover:text-neutral-300 group-hover:opacity-100 transition-all duration-500">
                RAMALHO
              </span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-tight mt-2 uppercase">
              {t.cta.split(' ').slice(0, -1).join(' ')} <span className="text-[#5AB473] italic">{t.cta.split(' ').slice(-1)}</span>
            </h2>
            
            <div className="flex flex-wrap gap-8 items-center mt-2">
              <a href="mailto:fernandoluizsouzaramalho@gmail.com" className="text-base md:text-lg font-black uppercase tracking-widest border-b-2 border-[#5AB473] pb-1 hover:bg-[#5AB473] hover:text-black transition-all">
                fernandoluizsouzaramalho@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 items-start md:items-end">
            <div className="flex flex-wrap gap-6 items-center justify-start md:justify-end">
              <a href="https://orientohub.com.br/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5AB473] hover:text-white transition-colors">FOUNDER @ ORIENTOHUB</a>
              <div className="w-[1px] h-4 bg-neutral-800 hidden md:block" />
              <a href="https://www.behance.net/fernandoramalho1" target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-[0.3em] text-white hover:text-[#5AB473] transition-colors">Behance</a>
              <a href="https://www.linkedin.com/in/fernandolsr/" target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-600 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/fernando.ramalhooficial/" target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-600 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-600 hover:text-white transition-colors">X / Twitter</a>
            </div>
            <div className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-800 text-left md:text-right leading-loose">
              {t.rights} <br /> 
              SYSTEMS FOR DOMINANCE
            </div>
          </div>
        </div>
        
        {/* Brasil Attribution */}
        <div className="flex justify-center items-center gap-2 pt-8 border-t border-neutral-900/50">
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-800">
            feito no
          </span>
          <img 
            src="/bandeira-brasil.svg" 
            alt="Bandeira do Brasil" 
            className="w-6 h-4 object-contain"
          />
        </div>
        
        {/* Futuro Grid - Elemento de Atenção Final */}
        <div className="flex justify-center items-center pt-12 border-t border-neutral-900/50">
          <div className="flex flex-col items-center gap-6">
            <CommitsGrid text="O FUTURO COMEÇOU" />
            <p className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-800 text-center">
              A INOVAÇÃO NÃO ESPERA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
