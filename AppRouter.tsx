import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import { RollingList } from './components/RollingList';
import StrategySection from './components/StrategySection';
import Footer from './components/Footer';
import CapacityDetail from './components/CapacityDetail';
import ReportDetail from './components/ReportDetail';
import AboutView from './components/AboutView';
import ReportsView from './components/ReportsView';
import CapacidadesView from './components/CapacidadesView';
import ContatoView from './components/ContatoView';
import FilosofiaView from './components/FilosofiaView';
import CognitiveArchitectureView from './components/CognitiveArchitectureView';
import IAView from './components/IAView';
import WhatsAppButton from './components/WhatsAppButton';
import { Language, TRANSLATIONS, getCategorizedPillars } from './constants';
import { ALL_REPORTS } from './reportsData';
import { ListItem, ReportItem } from './types';

// Helper function to create language-specific URLs
const createLangUrl = (path: string, lang: Language): string => {
  if (lang === 'EN') {
    return `/en${path}`;
  }
  return path;
};

// Helper function to create URL-friendly slugs in Portuguese
const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Helper function to find capacity by slug
const findCapacityBySlug = (slug: string, lang: Language): ListItem | null => {
  const allCapacities = getCategorizedPillars(lang).flatMap(group => group.items);
  return allCapacities.find(item => createSlug(item.title) === slug) || null;
};

// Helper function to find report by slug
const findReportBySlug = (slug: string): ReportItem | null => {
  const reports = ALL_REPORTS as ReportItem[];
  return reports.find(report => createSlug(report.title) === slug) || null;
};

const AppRouter: React.FC = () => {
  const [lang, setLang] = useState<Language>('PT');
  const [selectedCapacity, setSelectedCapacity] = useState<ListItem | null>(null);
  const [selectedReport, setSelectedReport] = useState<ReportItem | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Parse URL and load content
  useEffect(() => {
    const path = location.pathname;
    
    // Detect language from URL path
    let detectedLang: Language = 'PT';
    let cleanPath = path;
    
    if (path.startsWith('/en/')) {
      detectedLang = 'EN';
      cleanPath = path.replace('/en', '');
    } else if (path === '/en') {
      detectedLang = 'EN';
      cleanPath = '/';
    }
    
    setLang(detectedLang);

    // Handle different routes
    if (cleanPath.startsWith('/capacidade/')) {
      const capacitySlug = cleanPath.split('/')[2];
      const capacity = findCapacityBySlug(capacitySlug, detectedLang);
      
      if (capacity) {
        if (capacity.title === 'ARQUITETURA COGNITIVA' || capacity.title === 'COGNITIVE ARCHITECTURE') {
          navigate(createLangUrl('/arquitetura-cognitiva', detectedLang), { replace: true });
        } else {
          setSelectedCapacity(capacity);
        }
      }
    } else if (cleanPath.startsWith('/relatorio/')) {
      const reportSlug = cleanPath.split('/')[2];
      const report = findReportBySlug(reportSlug);
      setSelectedReport(report);
    } else if (cleanPath === '/sobre') {
      // About page - handled by route
    } else if (cleanPath === '/relatorios') {
      // Reports list - clear selected report
      setSelectedReport(null);
    } else if (cleanPath === '/capacidades') {
      // Capacidades page - handled by route
    } else if (cleanPath === '/contato') {
      // Contact page - handled by route
    } else if (cleanPath === '/filosofia') {
      // Filosofia page - handled by route
    } else if (cleanPath === '/arquitetura-cognitiva') {
      // Cognitive architecture - handled by route
    } else if (cleanPath === '/ia') {
      // IA page - handled by route
    } else if (cleanPath !== '/') {
      // Redirect to home if invalid path
      navigate(createLangUrl('/', detectedLang), { replace: true });
    }
  }, [location.pathname, navigate]);

  // Handle capacity selection
  const handleCapacitySelect = (item: ListItem) => {
    if (item.title === 'ARQUITETURA COGNITIVA' || item.title === 'COGNITIVE ARCHITECTURE') {
      navigate(createLangUrl('/arquitetura-cognitiva', lang));
    } else {
      const slug = createSlug(item.title);
      navigate(createLangUrl(`/capacidade/${slug}`, lang));
    }
  };

  // Handle report selection
  const handleReportSelect = (report: ReportItem) => {
    const slug = createSlug(report.title);
    navigate(createLangUrl(`/relatorio/${slug}`, lang));
  };

  // Lock scroll when on detail pages
  useEffect(() => {
    const isDetailPage = location.pathname !== '/' && location.pathname !== '/en' && location.pathname !== '/en/';
    if (isDetailPage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [location]);

  const isHomePage = location.pathname === '/' || location.pathname === '/en' || location.pathname === '/en/';

  return (
    <div className="relative bg-[#050505] text-white overflow-x-hidden selection:bg-[#FFEE00] selection:text-black">
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] z-50"></div>
      
      {isHomePage && (
        <Header 
          lang={lang} 
          setLang={setLang} 
          onOpenReports={() => navigate('/relatorios')} 
        />
      )}
      
      <main className={!isHomePage ? 'opacity-0 scale-95 transition-all duration-700 pointer-events-none' : 'opacity-100 scale-100 transition-all duration-700'}>
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

        <Footer lang={lang} />
      </main>

      <Routes>
        {/* English routes */}
        <Route path="/en" element={null} />
        <Route path="/en/" element={null} />
        <Route path="/en/sobre" element={
          <AboutView 
            lang="EN" 
            onClose={() => navigate('/en')} 
          />
        } />
        <Route path="/en/relatorios" element={
          <ReportsView 
            lang="EN" 
            onClose={() => navigate('/en')} 
            onReportSelect={handleReportSelect}
          />
        } />
        <Route path="/en/capacidades" element={
          <CapacidadesView 
            lang="EN" 
            onClose={() => navigate('/en')} 
          />
        } />
        <Route path="/en/contato" element={
          <ContatoView 
            lang="EN" 
            onClose={() => navigate('/en')} 
          />
        } />
        <Route path="/en/capacidade/:slug" element={
          selectedCapacity && (
            <CapacityDetail 
              item={selectedCapacity} 
              lang="EN" 
              onClose={() => navigate('/en/capacidades')} 
            />
          )
        } />
        <Route path="/en/relatorio/:slug" element={
          selectedReport && (
            <ReportDetail 
              report={selectedReport} 
              lang="EN" 
              onClose={() => navigate('/en/relatorios')} 
            />
          )
        } />
        <Route path="/en/filosofia" element={
          <FilosofiaView 
            lang="EN" 
            onClose={() => navigate('/en')} 
          />
        } />
        <Route path="/en/arquitetura-cognitiva" element={
          <CognitiveArchitectureView 
            lang="EN" 
            onClose={() => navigate('/en')} 
          />
        } />
        <Route path="/en/ia" element={
          <IAView 
            lang="EN" 
            onClose={() => navigate('/en')} 
          />
        } />
        
        {/* Portuguese routes */}
        <Route path="/capacidade/:slug" element={
          selectedCapacity && (
            <CapacityDetail 
              item={selectedCapacity} 
              lang={lang} 
              onClose={() => navigate('/')} 
            />
          )
        } />
        
        <Route path="/sobre" element={
          <AboutView 
            lang={lang} 
            onClose={() => navigate('/')} 
          />
        } />
        
        <Route path="/relatorios" element={
          <ReportsView 
            lang={lang} 
            onClose={() => navigate('/')} 
            onReportSelect={handleReportSelect}
          />
        } />
        
        <Route path="/capacidades" element={
          <CapacidadesView 
            lang={lang} 
            onClose={() => navigate('/')} 
          />
        } />
        
        <Route path="/contato" element={
          <ContatoView 
            lang={lang} 
            onClose={() => navigate('/')} 
          />
        } />
        
        <Route path="/filosofia" element={
          <FilosofiaView 
            lang={lang} 
            onClose={() => navigate('/')} 
          />
        } />
        
        <Route path="/capacidade/ia" element={
          <IAView 
            lang={lang} 
            onClose={() => navigate('/')} 
          />
        } />
        
        <Route path="/relatorio/:slug" element={
          selectedReport && (
            <ReportDetail 
              report={selectedReport} 
              lang={lang} 
              onClose={() => navigate('/relatorios')} 
            />
          )
        } />
        
        <Route path="/arquitetura-cognitiva" element={
          <CognitiveArchitectureView 
            lang={lang} 
            onClose={() => navigate('/')} 
          />
        } />
      </Routes>

      {/* WhatsApp Button - only show on home page */}
      {isHomePage && <WhatsAppButton />}
    </div>
  );
};

export default AppRouter;
