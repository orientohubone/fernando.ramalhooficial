
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.strategy, href: "#work" },
    { label: t.about, href: "#about-trigger" },
    { label: t.reports, href: "#", onClick: onOpenReports },
    { label: t.creative, href: "https://www.behance.net/fernandoramalho1", external: true },
    { label: t.philosophy, href: "#about" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="flex justify-center">
        <nav
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-black/80 backdrop-blur-xl border-neutral-800/50 shadow-lg shadow-black/20"
              : "bg-black/40 backdrop-blur-xl border-white/10"
          }`}
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
              ) : item.onClick ? (
                <button
                  key={item.href}
                  onClick={item.onClick}
                  className="px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-neutral-400 hover:text-[#5AB473] transition-colors"
                >
                  {item.label}
                </button>
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
        <div className="md:hidden mt-2 mx-auto max-w-sm bg-black/90 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-4 shadow-xl">
          <nav className="flex flex-col gap-1">
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
              ) : item.onClick ? (
                <button
                  key={item.href}
                  onClick={() => { item.onClick?.(); setIsMobileMenuOpen(false); }}
                  className="px-4 py-3 rounded-xl text-sm font-black tracking-widest text-white hover:text-[#FFEE00] transition-colors text-left"
                >
                  {item.label}
                </button>
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
                onClick={() => setLang('PT')}
                className={`text-[9px] font-black px-3 py-1 rounded-full transition-all ${lang === 'PT' ? 'bg-[#5AB473] text-black' : 'text-neutral-500 hover:text-white'}`}
              >
                PT
              </button>
              <button 
                onClick={() => setLang('EN')}
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
