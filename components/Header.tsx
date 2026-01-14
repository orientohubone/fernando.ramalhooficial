
import React from 'react';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenReports?: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, onOpenReports }) => {
  const t = TRANSLATIONS[lang].nav;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center">
      <a href="/" className="group py-2">
        <BrandLogo size="md" />
      </a>
      
      <div className="flex items-center gap-4 md:gap-12">
        <div className="hidden md:flex gap-8 text-[10px] font-black tracking-widest text-neutral-400">
          <a href="#work" className="hover:text-white transition-colors">{t.strategy}</a>
          <a href="#about-trigger" className="hover:text-white transition-colors">{t.about}</a>
          <button onClick={onOpenReports} className="hover:text-[#5AB473] transition-colors">{t.reports}</button>
          <a href="https://www.behance.net/fernandoramalho1" target="_blank" rel="noopener noreferrer" className="hover:text-[#58B573] transition-colors uppercase">{t.creative}</a>
          <a href="#about" className="hover:text-white transition-colors">{t.philosophy}</a>
          <a href="#contact" className="hover:text-white transition-colors">{t.contact}</a>
        </div>

        {/* Language Switcher */}
        <div className="flex gap-1 border border-neutral-800 rounded-full p-1 bg-black/50 backdrop-blur-md">
          <button 
            onClick={() => setLang('PT')}
            className={`text-[9px] font-black px-2 py-0.5 rounded-full transition-all ${lang === 'PT' ? 'bg-[#5AB473] text-black' : 'text-neutral-500 hover:text-white'}`}
          >
            PT
          </button>
          <button 
            onClick={() => setLang('EN')}
            className={`text-[9px] font-black px-2 py-0.5 rounded-full transition-all ${lang === 'EN' ? 'bg-[#5AB473] text-black' : 'text-neutral-500 hover:text-white'}`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
