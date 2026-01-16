
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
    <footer id="contact" className="px-6 md:px-12 py-24 bg-[#050505] border-t border-neutral-900" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="max-w-2xl flex flex-col gap-6">
            
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-tight mt-2 uppercase">
              {t.cta.split(' ').slice(0, -1).join(' ')} <span className="text-[#5AB473] italic">{t.cta.split(' ').slice(-1)}</span>
            </h2>
            
            <address className="flex flex-wrap gap-8 items-center mt-2 not-italic">
              <a href="mailto:fernando@orientohub.com.br" className="text-base md:text-lg font-black uppercase tracking-widest border-b-2 border-[#5AB473] pb-1 hover:bg-[#5AB473] hover:text-black transition-all">
                fernando@orientohub.com.br
              </a>
            </address>
          </div>
          
          <div className="flex flex-col gap-6 items-start md:items-end">
            <nav className="flex flex-wrap gap-6 items-center justify-start md:justify-end" role="navigation" aria-label="Redes sociais e links">
              <a href="https://orientohub.com.br/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5AB473] hover:text-white transition-colors">FOUNDER @ ORIENTOHUB</a>
              <div className="w-[1px] h-4 bg-neutral-800 hidden md:block" aria-hidden="true" />
              <a href="https://www.behance.net/fernandoramalho1" target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-[0.3em] text-white hover:text-[#5AB473] transition-colors">Behance</a>
              <a href="https://www.linkedin.com/in/fernandolsr/" target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-600 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/fernando.ramalhooficial/" target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-600 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-600 hover:text-white transition-colors">X / Twitter</a>
            </nav>
            <div className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-800 text-left md:text-right leading-loose">
              {t.rights} <br /> 
              SYSTEMS FOR DOMINANCE
            </div>
            <img 
              src="/logofernando.png" 
              alt="FERNANDO.RAMALHO" 
              className="h-3 w-auto"
            />
          </div>
        </section>
        
        <section className="flex justify-center items-center gap-2 pt-8 border-t border-neutral-900/50">
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-800">
            feito no
          </span>
          <img 
            src="/bandeira-brasil.svg" 
            alt="Bandeira do Brasil" 
            className="w-6 h-4 object-contain"
          />
        </section>
        
        <section className="flex justify-center items-center pt-12 border-t border-neutral-900/50">
          <div className="flex flex-col items-center gap-6">
            <CommitsGrid text="O FUTURO COMEÇOU" />
            <p className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-800 text-center">
              A INOVAÇÃO NÃO ESPERA
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
