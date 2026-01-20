import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEOMeta from './components/SEOMeta';
import StructuredData from './components/StructuredData';
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
import BackToTop from './components/BackToTop';
import LegalView from './components/LegalView';
import PoliticaPrivacidade from './src/pages/PoliticaPrivacidade';
import TermosUso from './src/pages/TermosUso';
import LGPD from './src/pages/LGPD';
import PoliticaCookies from './src/pages/PoliticaCookies';
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

// Helper function to generate SEO metadata
const generateSEOMetadata = (pathname: string, lang: Language, selectedCapacity?: any, selectedReport?: any) => {
  const baseUrl = 'https://fernandoramalho.vercel.app';
  const cleanPath = pathname.replace('/en', '');
  
  // Default metadata
  let title = '';
  let description = '';
  let keywords = '';
  let canonical = pathname;
  let structuredData: any = null;
  
  if (cleanPath === '/' || cleanPath === '') {
    title = lang === 'EN' ? 'Home - Strategic Innovation & AI Solutions' : 'Home - Inovação Estratégica e Soluções de IA';
    description = lang === 'EN' 
      ? 'OrientoHub specializes in cognitive architecture, AI implementation, digital transformation, and strategic innovation for businesses seeking competitive advantage.'
      : 'OrientoHub é especializada em arquitetura cognitiva, implementação de IA, transformação digital e inovação estratégica para empresas que buscam vantagem competitiva.';
    keywords = lang === 'EN' 
      ? 'AI, artificial intelligence, cognitive architecture, digital transformation, innovation, strategy, machine learning, business intelligence'
      : 'IA, inteligência artificial, arquitetura cognitiva, transformação digital, inovação, estratégia, machine learning, inteligência de negócios';
    
    structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "OrientoHub",
      "url": baseUrl,
      "description": description,
      "sameAs": [
        "https://linkedin.com/company/orientohub",
        "https://twitter.com/orientohub"
      ]
    };
  } else if (cleanPath === '/capacidades') {
    title = lang === 'EN' ? 'Our Capabilities - Strategic Services' : 'Nossas Capacidades - Serviços Estratégicos';
    description = lang === 'EN'
      ? 'Explore our comprehensive capabilities: Strategy, Innovation, AI, Design, Vibe Coding, Marketing, Paid Media, and Brand Registration.'
      : 'Explore nossas capacidades completas: Estratégia, Inovação, IA, Design, Vibe Coding, Marketing, Mídia Paga e Registro de Marcas.';
    keywords = lang === 'EN'
      ? 'business strategy, innovation, AI services, design thinking, marketing, paid media, brand registration'
      : 'estratégia empresarial, inovação, serviços de IA, design thinking, marketing, mídia paga, registro de marcas';
  } else if (cleanPath.startsWith('/capacidade/') && selectedCapacity) {
    const capacityTitle = selectedCapacity.title;
    const capacityDesc = selectedCapacity.desc;
    
    title = `${capacityTitle} - ${lang === 'EN' ? 'Strategic Service' : 'Serviço Estratégico'}`;
    description = capacityDesc;
    keywords = `${capacityTitle}, ${lang === 'EN' ? 'strategic consulting, business solutions' : 'consultoria estratégica, soluções de negócio'}`;
    
    structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": capacityTitle,
      "description": capacityDesc,
      "provider": {
        "@type": "Organization",
        "name": "OrientoHub",
        "url": baseUrl
      }
    };
  } else if (cleanPath === '/sobre') {
    title = lang === 'EN' ? 'About Us - Innovation Leaders' : 'Sobre Nós - Líderes em Inovação';
    description = lang === 'EN'
      ? 'Learn about OrientoHub\'s mission to transform businesses through strategic innovation and cutting-edge AI solutions.'
      : 'Conheça a missão da OrientoHub de transformar negócios através de inovação estratégica e soluções de IA de ponta.';
    keywords = lang === 'EN'
      ? 'about orientohub, company profile, innovation leadership, AI expertise'
      : 'sobre orientohub, perfil da empresa, liderança em inovação, expertise em IA';
  } else if (cleanPath === '/relatorios') {
    title = lang === 'EN' ? 'Reports & Insights' : 'Relatórios e Insights';
    description = lang === 'EN'
      ? 'Access our comprehensive reports on market trends, innovation strategies, and AI implementation insights.'
      : 'Acesse nossos relatórios completos sobre tendências de mercado, estratégias de inovação e insights de implementação de IA.';
    keywords = lang === 'EN'
      ? 'business reports, market analysis, innovation insights, AI trends'
      : 'relatórios empresariais, análise de mercado, insights de inovação, tendências de IA';
  } else if (cleanPath === '/contato') {
    title = lang === 'EN' ? 'Contact Us - Start Your Transformation' : 'Contato - Comece sua Transformação';
    description = lang === 'EN'
      ? 'Get in touch with OrientoHub to discuss how our strategic innovation and AI solutions can transform your business.'
      : 'Entre em contato com a OrientoHub para discutir como nossas soluções de inovação estratégica e IA podem transformar seu negócio.';
    keywords = lang === 'EN'
      ? 'contact orientohub, business consultation, AI implementation, strategic partnership'
      : 'contato orientohub, consultoria empresarial, implementação de IA, parceria estratégica';
  } else if (cleanPath === '/filosofia') {
    title = lang === 'EN' ? 'Our Philosophy - Strategic Innovation Principles' : 'Nossa Filosofia - Princípios de Inovação Estratégica';
    description = lang === 'EN'
      ? 'Discover OrientoHub\'s core philosophy: systems over tactics, value composition, and fundamental truths in business transformation.'
      : 'Conheça a filosofia central da OrientoHub: sistemas sobre táticas, composição de valor e verdades fundamentais na transformação de negócios.';
    keywords = lang === 'EN'
      ? 'business philosophy, innovation principles, strategic thinking, systems thinking'
      : 'filosofia empresarial, princípios de inovação, pensamento estratégico, pensamento sistêmico';
  } else if (cleanPath === '/arquitetura-cognitiva') {
    title = lang === 'EN' ? 'Cognitive Architecture - Advanced AI Systems' : 'Arquitetura Cognitiva - Sistemas de IA Avançados';
    description = lang === 'EN'
      ? 'Explore our cognitive architecture solutions: advanced AI systems designed for complex problem-solving and business intelligence.'
      : 'Explore nossas soluções de arquitetura cognitiva: sistemas de IA avançados projetados para resolução complexa de problemas e inteligência de negócios.';
    keywords = lang === 'EN'
      ? 'cognitive architecture, advanced AI, business intelligence, problem-solving systems'
      : 'arquitetura cognitiva, IA avançada, inteligência de negócios, sistemas de resolução de problemas';
  } else if (cleanPath === '/ia') {
    title = lang === 'EN' ? 'AI Solutions - Intelligent Automation' : 'Soluções de IA - Automação Inteligente';
    description = lang === 'EN'
      ? 'Experience our AI solutions through interactive chat. Discover how artificial intelligence can transform your business operations.'
      : 'Experimente nossas soluções de IA através de chat interativo. Descubra como a inteligência artificial pode transformar suas operações de negócios.';
    keywords = lang === 'EN'
      ? 'AI solutions, artificial intelligence, business automation, intelligent systems'
      : 'soluções de IA, inteligência artificial, automação empresarial, sistemas inteligentes';
  }
  
  return {
    title,
    description,
    keywords,
    canonical,
    structuredData,
    lang
  };
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
  
  // Generate SEO metadata
  const seoMetadata = generateSEOMetadata(location.pathname, lang, selectedCapacity, selectedReport);

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
    } else if (cleanPath === '/politica-de-privacidade' || cleanPath === '/termos-de-uso' || cleanPath === '/lgpd' || cleanPath === '/politica-de-cookies') {
      // Legal pages - handled by route
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
    <HelmetProvider>
      <SEOMeta 
        title={seoMetadata.title}
        description={seoMetadata.description}
        keywords={seoMetadata.keywords}
        canonical={seoMetadata.canonical}
        lang={seoMetadata.lang}
        structuredData={seoMetadata.structuredData}
      />
      
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
        {/* Default route - main content */}
        <Route path="/" element={null} />
        
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

        {/* Legal Pages */}
        <Route path="/politica-de-privacidade" element={
          <PoliticaPrivacidade 
            lang="PT"
            onClose={() => navigate('/')} 
          />
        } />
        
        <Route path="/termos-de-uso" element={
          <TermosUso 
            lang="PT"
            onClose={() => navigate('/')} 
          />
        } />
        
        <Route path="/lgpd" element={
          <LGPD 
            lang="PT"
            onClose={() => navigate('/')} 
          />
        } />
        
        <Route path="/politica-de-cookies" element={
          <PoliticaCookies 
            lang="PT"
            onClose={() => navigate('/')} 
          />
        } />

        {/* English Legal Pages */}
        <Route path="/en/privacy-policy" element={
          <PoliticaPrivacidade 
            lang="EN"
            onClose={() => navigate('/en')} 
          />
        } />
        
        <Route path="/en/terms-of-use" element={
          <TermosUso 
            lang="EN"
            onClose={() => navigate('/en')} 
          />
        } />
        
        <Route path="/en/lgpd" element={
          <LGPD 
            lang="EN"
            onClose={() => navigate('/en')} 
          />
        } />
        
        <Route path="/en/cookie-policy" element={
          <PoliticaCookies 
            lang="EN"
            onClose={() => navigate('/en')} 
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
      
      {/* Back to Top Button - show on all pages */}
      <BackToTop />
      </div>
    </HelmetProvider>
  );
};

export default AppRouter;
