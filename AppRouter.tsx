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
import SegmentosView from './components/SegmentosView';
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
  const baseUrl = 'https://fernandoramalhobuilder.com.br';
  const cleanPath = pathname.replace('/en', '');

  // Default metadata
  let title = '';
  let description = '';
  let keywords = '';
  let canonical = pathname;
  let structuredData: any = null;
  let ogImage = '/og-image.jpg';
  let ogType = 'website';

  if (cleanPath === '/' || cleanPath === '') {
    title = lang === 'EN' ? 'Fernando Ramalho - Strategic Innovation & AI Solutions in São Paulo' : 'Fernando Ramalho - Inovação Estratégica e Soluções de IA em São Paulo';
    description = lang === 'EN'
      ? 'Fernando Ramalho specializes in cognitive architecture, AI implementation, digital transformation, and strategic innovation. Building systems of dominance for business leaders.'
      : 'Fernando Ramalho é especialista em arquitetura cognitiva, implementação de IA, transformação digital e inovação estratégica. Construindo sistemas de dominância para líderes de negócios em São Paulo.';
    keywords = lang === 'EN'
      ? 'Fernando Ramalho, AI strategist, cognitive architecture, digital transformation São Paulo, innovation strategy, strategic consulting, AI solutions Brazil'
      : 'Fernando Ramalho, estrategista de IA, arquitetura cognitiva, transformação digital São Paulo, agência de inovação, consultoria estratégica, soluções de inteligência artificial';

    structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Fernando Ramalho | Inovação Estratégica & IA",
      "url": baseUrl,
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -23.5614,
        "longitude": -46.6559
      },
      "sameAs": [
        "https://linkedin.com/in/fernandolsr/",
        "https://www.instagram.com/fernando.ramalhooficial/",
        "https://www.behance.net/fernandoramalho1"
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

    title = `${capacityTitle} | Fernando Ramalho - ${lang === 'EN' ? 'Digital Innovation' : 'Inovação Digital'}`;
    description = `${capacityDesc} Especialista em transformar negócios através de ${capacityTitle.toLowerCase()} com foco em resultados e performance.`;
    keywords = `${capacityTitle}, Fernando Ramalho, ${lang === 'EN' ? 'strategic consulting, growth, performance marketing, business innovation' : 'consultoria estratégica, growth, marketing de performance, inovação empresarial'}`;

    structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": capacityTitle,
      "description": capacityDesc,
      "provider": {
        "@type": "ProfessionalService",
        "name": "Fernando Ramalho",
        "url": baseUrl
      },
      "areaServed": "BR"
    };
  } else if (cleanPath === '/sobre') {
    title = lang === 'EN' ? 'About Fernando Ramalho - Innovation Strategist' : 'Sobre Fernando Ramalho - Estrategista de Inovação';
    description = lang === 'EN'
      ? 'Meet Fernando Ramalho, a specialist in AI systems and strategic innovation with over 15 years of experience transforming businesses.'
      : 'Conheça Fernando Ramalho, especialista em sistemas de IA e inovação estratégica com mais de 15 anos de experiência transformando negócios.';
    keywords = lang === 'EN'
      ? 'Fernando Ramalho, innovation strategist, AI consultant, business transformation expert'
      : 'Fernando Ramalho, estrategista de inovação, consultor de IA, especialista em transformação digital';
  } else if (cleanPath === '/relatorios') {
    title = lang === 'EN' ? 'Intelligence Hub: Strategic Reports & AI Insights' : 'Intelligence Hub: Relatórios Estratégicos e Insights de IA';
    description = lang === 'EN'
      ? 'Access deep market analysis, AI trends, and strategic insights to dominate your niche. Proprietary intelligence reports on technology and business innovation.'
      : 'Acesse análises profundas de mercado, tendências de IA e insights estratégicos para dominar seu nicho. Relatórios de inteligência proprietária sobre tecnologia e inovação nos negócios.';
    keywords = lang === 'EN'
      ? 'intelligence hub, market reports, AI trends 2026, strategic intelligence, cognitive architecture, business innovation'
      : 'intelligence hub, relatórios de mercado, tendências de IA 2026, inteligência estratégica, arquitetura cognitiva, inovação empresarial';
    ogImage = '/og-intelligence-hub.jpg?v=202601271525';
    ogType = 'website';
  } else if (cleanPath.startsWith('/relatorio/')) {
    // Generate dynamic Open Graph for individual reports
    const reportSlug = cleanPath.split('/')[2];
    const report = findReportBySlug(reportSlug);
    
    if (report) {
      const reportTitle = report.title;
      const reportDesc = report.desc;
      const reportId = report.id;
      
      title = `${reportTitle} | Intelligence Hub`;
      description = reportDesc;
      keywords = `${reportTitle}, intelligence hub, strategic report, ${lang === 'EN' ? 'AI insights, market analysis' : 'insights de IA, análise de mercado'}`;
      ogImage = `/og-reports/${reportId}.jpg?v=202601271525`;
      ogType = 'article';
    } else {
      // Fallback if report not found
      title = lang === 'EN' ? 'Report Not Found | Intelligence Hub' : 'Relatório Não Encontrado | Intelligence Hub';
      description = lang === 'EN' ? 'The requested report was not found.' : 'O relatório solicitado não foi encontrado.';
      keywords = 'intelligence hub, report not found';
      ogImage = '/og-intelligence-hub.jpg?v=202601271525';
      ogType = 'website';
    }
  } else if (cleanPath === '/contato') {
    title = lang === 'EN' ? 'Contact Fernando Ramalho - Strategic Consulting' : 'Contato Fernando Ramalho - Consultoria Estratégica';
    description = lang === 'EN'
      ? 'Book a consultation with Fernando Ramalho for AI implementation and high-level strategic innovation.'
      : 'Agende uma consultoria com Fernando Ramalho para implementação de IA e inovação estratégica de alto nível.';
    keywords = lang === 'EN'
      ? 'contact fernando ramalho, business consultation, AI advisory'
      : 'contato fernando ramalho, consultoria empresarial, assessoria de IA';
  } else if (cleanPath === '/filosofia') {
    title = lang === 'EN' ? 'Philosophy - Systems Over Tactics' : 'Filosofia - Sistemas sobre Táticas';
    description = lang === 'EN'
      ? 'Discover the principles that guide our strategic innovation: fundamental truths and the search for absolute dominance.'
      : 'Descubra os princípios que guiam nossa inovação estratégica: verdades fundamentais e a busca por dominância absoluta.';
    keywords = lang === 'EN'
      ? 'strategic philosophy, systems thinking, business principles'
      : 'filosofia estratégica, pensamento sistêmico, princípios de negócios';
  } else if (cleanPath === '/arquitetura-cognitiva') {
    title = lang === 'EN' ? 'Cognitive Architecture - Proprietary AI Systems' : 'Arquitetura Cognitiva - Sistemas de IA Proprietários';
    description = lang === 'EN'
      ? 'Proprietary cognitive architecture for intelligent business automation and complex decision-making.'
      : 'Arquitetura cognitiva proprietária para automação inteligente de negócios e tomada de decisão complexa.';
    keywords = lang === 'EN'
      ? 'cognitive architecture, advanced AI, decision intelligence'
      : 'arquitetura cognitiva, IA avançada, inteligência de decisão';
  } else if (cleanPath === '/ia') {
    title = lang === 'EN' ? 'AI Solutions - Intelligent Automation' : 'Soluções de IA - Automação Inteligente';
    description = lang === 'EN'
      ? 'Experience our AI solutions through interactive chat. Discover how artificial intelligence can transform your business operations.'
      : 'Experimente nossas soluções de IA através de chat interativo. Descubra como a inteligência artificial pode transformar suas operações de negócios.';
    keywords = lang === 'EN'
      ? 'AI solutions, artificial intelligence, business automation, intelligent systems'
      : 'soluções de IA, inteligência artificial, automação empresarial, sistemas inteligentes';
  } else if (cleanPath === '/segmentos') {
    title = lang === 'EN' ? 'Industries & Segments - Strategic Innovation' : 'Segmentos Atendidos - Inovação Estratégica';
    description = lang === 'EN'
      ? 'Multisector experience: real estate, tech, retail, and more. See how we apply strategic logic across different industries.'
      : 'Experiência multissetorial: imobiliário, tecnologia, varejo e mais. Veja como aplicamos lógica estratégica em diferentes indústrias.';
    keywords = lang === 'EN'
      ? 'industry experience, business segments, retail innovation, tech consulting, real estate marketing'
      : 'experiência multissetorial, segmentos de mercado, inovação no varejo, consultoria tech, marketing imobiliário';
  }

  return {
    title,
    description,
    keywords,
    canonical,
    structuredData,
    lang,
    ogImage,
    ogType
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
    } else if (cleanPath === '/segmentos') {
      // Segmentos page - handled by route
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
        ogImage={seoMetadata.ogImage}
        ogType={seoMetadata.ogType}
        lang={seoMetadata.lang}
        structuredData={seoMetadata.structuredData}
      />

      {/* Renderiza o Structured Data dinâmico baseado na rota */}
      {isHomePage ? (
        <StructuredData type="LocalBusiness" lang={lang} />
      ) : selectedCapacity ? (
        <StructuredData type="Service" item={selectedCapacity} lang={lang} />
      ) : (
        <StructuredData type="Organization" lang={lang} />
      )}

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
          <Route path="/en/segmentos" element={
            <SegmentosView
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
                onClose={() => navigate('/capacidades')}
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

          <Route path="/segmentos" element={
            <SegmentosView
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
