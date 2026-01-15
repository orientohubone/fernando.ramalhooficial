import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { RollingList } from './components/RollingList';
import StrategySection from './components/StrategySection';
import Footer from './components/Footer';
import CapacityDetail from './components/CapacityDetail';
import AboutView from './components/AboutView';
import ReportsView from './components/ReportsView';
import CognitiveArchitectureView from './components/CognitiveArchitectureView';
import WhatsAppButton from './components/WhatsAppButton';
import { Language } from './constants';
import { ListItem } from './types';

function App() {
  const [lang, setLang] = useState<Language>('PT');
  const [selectedCapacity, setSelectedCapacity] = useState<ListItem | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showReports, setShowReports] = useState(false);
  const [showCognitiveArchitecture, setShowCognitiveArchitecture] = useState(false);

  // Smooth scroll implementation for anchor links
  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.substring(1);
        
        // Se for o link de "about", prevenimos o scroll e mostramos a view
        if (id === 'about-trigger') {
          e.preventDefault();
          setShowAbout(true);
          return;
        }

        e.preventDefault();
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('click', handleScroll);
    return () => window.removeEventListener('click', handleScroll);
  }, []);

  // Handle capacity selection with special case for cognitive architecture
  const handleCapacitySelect = (item: ListItem) => {
    if (item.title === 'ARQUITETURA COGNITIVA' || item.title === 'COGNITIVE ARCHITECTURE') {
      setShowCognitiveArchitecture(true);
    } else {
      setSelectedCapacity(item);
    }
  };

  // Lock scroll when detail or about or reports or cognitive architecture is open
  useEffect(() => {
    if (selectedCapacity || showAbout || showReports || showCognitiveArchitecture) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedCapacity, showAbout, showReports, showCognitiveArchitecture]);

  const isAnyViewOpen = !!selectedCapacity || showAbout || showReports || showCognitiveArchitecture;

  return (
    <div className="relative bg-[#050505] text-white overflow-x-hidden selection:bg-[#FFEE00] selection:text-black">
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] z-50"></div>
      
      {!isAnyViewOpen && (
        <Header 
          lang={lang} 
          setLang={setLang} 
          onOpenReports={() => setShowReports(true)} 
        />
      )}
      
      <main className={isAnyViewOpen ? 'opacity-0 scale-95 transition-all duration-700 pointer-events-none' : 'opacity-100 scale-100 transition-all duration-700'}>
        <Hero lang={lang} />
        
        <div className="px-6 md:px-12 mb-20">
          <div className="h-[1px] w-full bg-neutral-900"></div>
        </div>

        <RollingList lang={lang} onSelectItem={handleCapacitySelect} />
        
        <StrategySection lang={lang} />
        
        <section className="py-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center gap-12 text-sm font-black uppercase tracking-[0.5em]">
            <span>Fortune 500</span>
            <span>Unicorn SaaS</span>
            <span>Seed Stars</span>
            <span>Global Growth</span>
          </div>
        </section>
      </main>
      
      {!isAnyViewOpen && <Footer lang={lang} />}

      {selectedCapacity && (
        <CapacityDetail 
          item={selectedCapacity} 
          lang={lang} 
          onClose={() => setSelectedCapacity(null)} 
        />
      )}

      {showAbout && (
        <AboutView 
          lang={lang} 
          onClose={() => setShowAbout(false)} 
        />
      )}

      {showReports && (
        <ReportsView 
          lang={lang} 
          onClose={() => setShowReports(false)} 
        />
      )}

      {showCognitiveArchitecture && (
        <CognitiveArchitectureView 
          lang={lang} 
          onClose={() => setShowCognitiveArchitecture(false)} 
        />
      )}

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
