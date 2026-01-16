
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenReports?: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, onOpenReports }) => {
  const t = TRANSLATIONS[lang].nav;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Create language-specific URL
  const createLangUrl = (path: string): string => {
    return lang === 'EN' ? `/en${path}` : path;
  };

  // Handle language switch
  const handleLanguageSwitch = (newLang: Language) => {
    setLang(newLang);
    const currentPath = window.location.pathname;
    if (newLang === 'EN' && !currentPath.startsWith('/en')) {
      navigate(`/en${currentPath}`);
    } else if (newLang === 'PT' && currentPath.startsWith('/en')) {
      navigate(currentPath.replace('/en', ''));
    }
  };

  const navItems = [
    { label: t.strategy, href: "/capacidades" },
    { label: t.about, href: "/sobre" },
    { label: t.reports, href: "/relatorios" },
    { label: t.creative, href: "https://www.behance.net/fernandoramalho1", external: true },
    { label: t.philosophy, href: "/filosofia" },
    { label: t.contact, href: "/contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4" role="banner">
      <div className="flex justify-center">
        <nav
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-black/80 backdrop-blur-xl border-neutral-800/50 shadow-lg shadow-black/20"
              : "bg-black/40 backdrop-blur-md border-neutral-900/50"
          }`}
          role="navigation"
          aria-label="Navegação principal"
        >
          {/* Logo */}
          <a href="/" className="group py-2">
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 ml-6">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-neutral-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ) : item.href.startsWith('/') ? (
                <Link
                  key={item.href}
                  to={createLangUrl(item.href)}
                  className="px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-neutral-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-neutral-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-1 border border-neutral-800 rounded-full p-1 bg-black/50 backdrop-blur-md ml-4">
            <button 
              onClick={() => handleLanguageSwitch('PT')}
              className={`text-[9px] font-black px-2 py-0.5 rounded-full transition-all ${lang === 'PT' ? 'bg-[#5AB473] text-black' : 'text-neutral-500 hover:text-white'}`}
            >
              PT
            </button>
            <button 
              onClick={() => handleLanguageSwitch('EN')}
              className={`text-[9px] font-black px-2 py-0.5 rounded-full transition-all ${lang === 'EN' ? 'bg-[#5AB473] text-black' : 'text-neutral-500 hover:text-white'}`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white ml-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-sm bg-black/90 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-4 shadow-xl" role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <nav className="flex flex-col gap-1" role="navigation" aria-label="Menu mobile">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl text-sm font-black tracking-widest text-white hover:text-[#58B573] transition-colors"
                >
                  {item.label}
                </a>
              ) : item.href.startsWith('/') ? (
                <Link
                  key={item.href}
                  to={createLangUrl(item.href)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-black tracking-widest text-white hover:text-[#FFEE00] transition-colors text-left"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-black tracking-widest text-white hover:text-[#5AB473] transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex gap-1 border border-neutral-800 rounded-full p-1 bg-black/50 backdrop-blur-md mt-4 mx-auto">
              <button 
                onClick={() => handleLanguageSwitch('PT')}
                className={`text-[9px] font-black px-3 py-1 rounded-full transition-all ${lang === 'PT' ? 'bg-[#5AB473] text-black' : 'text-neutral-500 hover:text-white'}`}
              >
                PT
              </button>
              <button 
                onClick={() => handleLanguageSwitch('EN')}
                className={`text-[9px] font-black px-3 py-1 rounded-full transition-all ${lang === 'EN' ? 'bg-[#5AB473] text-black' : 'text-neutral-500 hover:text-white'}`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
