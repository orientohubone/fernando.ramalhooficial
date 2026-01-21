
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItem, HighlightColor } from '../types';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';

interface CapacityDetailProps {
  item: ListItem;
  lang: Language;
  onClose: () => void;
}

const CapacityDetail: React.FC<CapacityDetailProps> = ({ item, lang, onClose }) => {
  const t = TRANSLATIONS[lang].sections;
  const nav = TRANSLATIONS[lang].nav;
  const colorHex = item.color === HighlightColor.YELLOW ? 'rgb(155, 89, 182)' : '#58B573';
  const [showConditions, setShowConditions] = useState(false);
  const [showFrameworkModal, setShowFrameworkModal] = useState(false);
  const [showMetaFrameworkModal, setShowMetaFrameworkModal] = useState(false);
  const [showTikTokFrameworkModal, setShowTikTokFrameworkModal] = useState(false);
  const [showLinkedInFrameworkModal, setShowLinkedInFrameworkModal] = useState(false);
  const [showDesignSystemModal, setShowDesignSystemModal] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleBackToCapacities = () => {
    navigate(lang === 'EN' ? '/en/capacidades' : '/capacidades');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto selection:bg-[#FFEE00] selection:text-black animate-in fade-in duration-500">
      {/* Detail Header */}
      <nav className="sticky top-0 left-0 w-full z-[110] px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference">
        <button onClick={onClose} className="group flex items-center gap-4">
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">{nav.back}</span>
        </button>
        <BrandLogo size="md" />
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover opacity-20 grayscale scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px]" style={{ backgroundColor: colorHex }} />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                CAPACITY / 0{item.id}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
              {item.title}<span style={{ color: colorHex }}>.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 font-medium max-w-2xl leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Thesis Section - Full Width */}
        <section className="mb-32 relative">
          <div className="absolute -top-8 -left-4 text-[8rem] md:text-[12rem] font-black opacity-5 pointer-events-none" style={{ color: colorHex }}>"</div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12" style={{ backgroundColor: colorHex }} />
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em]" style={{ color: colorHex }}>{t.thesis}</h3>
          </div>
          <p className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-4xl">
            {item.thesis}
          </p>
        </section>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left Column - Stack & Impact */}
          <div className="lg:col-span-7 space-y-20">

            {/* Stack Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-neutral-700" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.stack}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.stack?.map((s, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-4 p-4 border border-neutral-900 hover:border-neutral-700 transition-all duration-300 bg-neutral-950/50"
                  >
                    <div
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: colorHex }}
                    />
                    <span className="text-sm font-black uppercase tracking-[0.15em] text-white group-hover:text-neutral-300 transition-colors">
                      {s}
                      {s === 'AXION UI' && (
                        <span className="ml-2 text-[8px] px-1.5 py-0.5 border border-neutral-700 rounded bg-neutral-900 text-neutral-400 font-medium tracking-normal normal-case">
                          {lang === 'PT' ? 'em breve no npm' : 'coming soon to npm'}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-neutral-700" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.impact}</h3>
              </div>
              <div className="p-8 border-l-4" style={{ borderColor: colorHex, backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <p className="text-xl md:text-2xl text-neutral-300 font-medium leading-relaxed">
                  {item.impact}
                </p>
              </div>
            </section>

            {/* Philosophy Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-neutral-700" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                  {lang === 'PT' ? 'FILOSOFIA' : 'PHILOSOPHY'}
                </h3>
              </div>
              <div className="p-8 bg-neutral-950/50 border border-neutral-900">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: colorHex }}></div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-wider text-white mb-2">
                        {lang === 'PT' ? 'PRIMEIRO PRINCÍPIO' : 'FIRST PRINCIPLE'}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Cada capacidade começa com uma verdade fundamental que não pode ser reduzida.'
                          : 'Each capacity begins with a fundamental truth that cannot be reduced.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: colorHex }}></div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-wider text-white mb-2">
                        {lang === 'PT' ? 'SISTEMAS SOBRE TÁTICAS' : 'SYSTEMS OVER TACTICS'}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Construímos frameworks que geram resultados consistentes versus ações isoladas.'
                          : 'We build frameworks that generate consistent results versus isolated actions.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: colorHex }}></div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-wider text-white mb-2">
                        {lang === 'PT' ? 'COMPOSIÇÃO DE VALOR' : 'VALUE COMPOSITION'}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'O valor é criado através da sobreposição inteligente de múltiplas capacidades.'
                          : 'Value is created through intelligent overlap of multiple capacities.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategy Development Process Flow - Only for STRATEGY item */}
            {item.id === 2 && (
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-neutral-700" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                    {lang === 'PT' ? 'FLUXO ESTRATÉGICO' : 'STRATEGY FLOW'}
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-neutral-950 border border-neutral-900">
                    <h4 className="text-lg font-black uppercase text-white mb-4">
                      {lang === 'PT' ? 'FASE 1: DIAGNÓSTICO ESTRATÉGICO' : 'PHASE 1: STRATEGIC DIAGNOSIS'}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                      {lang === 'PT'
                        ? 'Análise completa do cenário competitivo, identificação de oportunidades e mapeamento de posicionamento atual.'
                        : 'Complete competitive scenario analysis, opportunity identification and current positioning mapping.'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                        {lang === 'PT' ? '2-4 SEMANAS' : '2-4 WEEKS'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-neutral-950 border border-neutral-900">
                    <h4 className="text-lg font-black uppercase text-white mb-4">
                      {lang === 'PT' ? 'FASE 2: DESENHO DA MANOBRA' : 'PHASE 2: MANEUVER DESIGN'}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                      {lang === 'PT'
                        ? 'Criação de movimentos táticos, definição de vantagens competitivas e estabelecimento de marcos estratégicos.'
                        : 'Creation of tactical movements, competitive advantage definition and strategic milestone establishment.'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                        {lang === 'PT' ? '3-6 SEMANAS' : '3-6 WEEKS'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-neutral-950 border border-neutral-900">
                    <h4 className="text-lg font-black uppercase text-white mb-4">
                      {lang === 'PT' ? 'FASE 3: IMPLEMENTAÇÃO E MONITORAMENTO' : 'PHASE 3: IMPLEMENTATION & MONITORING'}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                      {lang === 'PT'
                        ? 'Execução das iniciativas estratégicas com acompanhamento contínuo de KPIs e ajustes dinâmicos.'
                        : 'Execution of strategic initiatives with continuous KPI monitoring and dynamic adjustments.'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                        {lang === 'PT' ? '8-12 SEMANAS' : '8-12 WEEKS'}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Innovation Process Flow - Only for INNOVATION item */}
            {item.id === 3 && (
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-neutral-700" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                    {lang === 'PT' ? 'FLUXO DE INOVAÇÃO' : 'INNOVATION FLOW'}
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-neutral-950 border border-neutral-900">
                    <h4 className="text-lg font-black uppercase text-white mb-4">
                      {lang === 'PT' ? 'DESCOBERTA E INSIGHT' : 'DISCOVERY & INSIGHT'}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                      {lang === 'PT'
                        ? 'Pesquisa de necessidades latentes, análise de tendências e identificação de oportunidades de ruptura.'
                        : 'Latent needs research, trend analysis and disruption opportunity identification.'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] border border-[#FF6B6B]/20">
                        {lang === 'PT' ? '3-4 SEMANAS' : '3-4 WEEKS'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-neutral-950 border border-neutral-900">
                    <h4 className="text-lg font-black uppercase text-white mb-4">
                      {lang === 'PT' ? 'PROTOTIPAÇÃO RÁPIDA' : 'RAPID PROTOTYPING'}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                      {lang === 'PT'
                        ? 'Desenvolvimento de MVPs, testes com usuários e iterações baseadas em feedback real.'
                        : 'MVP development, user testing and iterations based on real feedback.'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] border border-[#FF6B6B]/20">
                        {lang === 'PT' ? '4-6 SEMANAS' : '4-6 WEEKS'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-neutral-950 border border-neutral-900">
                    <h4 className="text-lg font-black uppercase text-white mb-4">
                      {lang === 'PT' ? 'ESCALA E IMPLEMENTAÇÃO' : 'SCALE & IMPLEMENTATION'}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                      {lang === 'PT'
                        ? 'Validação de modelo de negócio, preparação para escala e lançamento no mercado.'
                        : 'Business model validation, scale preparation and market launch.'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] border border-[#FF6B6B]/20">
                        {lang === 'PT' ? '6-10 SEMANAS' : '6-10 WEEKS'}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* AI Implementation Process Flow - Only for AI item */}
            {item.id === 4 && (
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-neutral-700" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                    {lang === 'PT' ? 'FLUXO DE IMPLEMENTAÇÃO' : 'IMPLEMENTATION FLOW'}
                  </h3>
                </div>
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[rgb(155,89,182)]/10 border-2 border-[rgb(155,89,182)] flex items-center justify-center">
                        <span className="text-xl font-black text-[rgb(155,89,182)]">1</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Análise de Casos de Uso' : 'Use Case Analysis'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Identificação de processos que podem ser otimizados com IA e cálculo de ROI potencial.'
                          : 'Identification of processes that can be optimized with AI and potential ROI calculation.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                          {lang === 'PT' ? '1-2 semanas' : '1-2 weeks'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'ANÁLISE' : 'ANALYSIS'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[rgb(155,89,182)]/10 border-2 border-[rgb(155,89,182)] flex items-center justify-center">
                        <span className="text-xl font-black text-[rgb(155,89,182)]">2</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Seleção de Modelos' : 'Model Selection'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Escolha dos modelos de IA adequados e preparação dos dados para treinamento.'
                          : 'Selection of suitable AI models and data preparation for training.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                          {lang === 'PT' ? '2-3 semanas' : '2-3 weeks'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'MODELAGEM' : 'MODELING'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[rgb(155,89,182)]/10 border-2 border-[rgb(155,89,182)] flex items-center justify-center">
                        <span className="text-xl font-black text-[rgb(155,89,182)]">3</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Implementação' : 'Implementation'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Desenvolvimento e integração das soluções de IA nos sistemas existentes.'
                          : 'Development and integration of AI solutions into existing systems.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                          {lang === 'PT' ? '4-6 semanas' : '4-6 weeks'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'DESENVOLVIMENTO' : 'DEVELOPMENT'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Summary */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-[rgb(155,89,182)]/5 to-transparent border-l-4 border-[rgb(155,89,182)]">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[rgb(155,89,182)] mb-3">
                      {lang === 'PT' ? 'TIMELINE ESTIMADO' : 'ESTIMATED TIMELINE'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <span className="block text-lg font-black text-white">1-2</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'SEMANAS' : 'WEEKS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">2-3</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'SEMANAS' : 'WEEKS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">4-6</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'SEMANAS' : 'WEEKS'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Design System Process Flow - Only for DESIGN item */}
            {item.id === 5 && (
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-neutral-700" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                    {lang === 'PT' ? 'FLUXO DE DESIGN' : 'DESIGN FLOW'}
                  </h3>
                </div>
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#E67E22]/10 border-2 border-[#E67E22] flex items-center justify-center">
                        <span className="text-xl font-black text-[#E67E22]">1</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Research & Discovery' : 'Research & Discovery'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Análise de usuários, competitors e definição de requisitos do sistema.'
                          : 'User analysis, competitor research and system requirements definition.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#E67E22]/10 text-[#E67E22] border border-[#E67E22]/20">
                          {lang === 'PT' ? '2-3 semanas' : '2-3 weeks'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'PESQUISA' : 'RESEARCH'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#E67E22]/10 border-2 border-[#E67E22] flex items-center justify-center">
                        <span className="text-xl font-black text-[#E67E22]">2</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Design System' : 'Design System'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Criação de tokens, componentes e guias de estilo consistentes.'
                          : 'Creation of tokens, components and consistent style guides.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#E67E22]/10 text-[#E67E22] border border-[#E67E22]/20">
                          {lang === 'PT' ? '3-4 semanas' : '3-4 weeks'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'SISTEMA' : 'SYSTEM'}
                        </span>
                        <button
                          onClick={() => setShowDesignSystemModal(true)}
                          className="text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-[#E67E22] text-black rounded-full hover:bg-[#E67E22]/80 transition-all duration-300"
                        >
                          {lang === 'PT' ? 'VER EXEMPLO' : 'SEE EXAMPLE'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#E67E22]/10 border-2 border-[#E67E22] flex items-center justify-center">
                        <span className="text-xl font-black text-[#E67E22]">3</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'UI/UX Implementation' : 'UI/UX Implementation'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Aplicação do design system nas interfaces e validação com usuários.'
                          : 'Application of design system in interfaces and user validation.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#E67E22]/10 text-[#E67E22] border border-[#E67E22]/20">
                          {lang === 'PT' ? '4-6 semanas' : '4-6 weeks'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'IMPLEMENTAÇÃO' : 'IMPLEMENTATION'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Summary */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#E67E22]/5 to-transparent border-l-4 border-[#E67E22]">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#E67E22] mb-3">
                      {lang === 'PT' ? 'TIMELINE ESTIMADO' : 'ESTIMATED TIMELINE'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <span className="block text-lg font-black text-white">2-3</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'SEMANAS' : 'WEEKS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">3-4</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'SEMANAS' : 'WEEKS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">4-6</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'SEMANAS' : 'WEEKS'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Vibe Coding Process Flow - Only for VIBE CODING item */}
            {item.id === 6 && (
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-neutral-700" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                    {lang === 'PT' ? 'FLUXO DE VIBE CODING' : 'VIBE CODING FLOW'}
                  </h3>
                </div>
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[rgb(155,89,182)]/10 border-2 border-[rgb(155,89,182)] flex items-center justify-center">
                        <span className="text-xl font-black text-[rgb(155,89,182)]">1</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Ideação & Prompting' : 'Ideation & Prompting'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Definição ultrarrápida de escopo e arquitetura através de linguagem natural e prompts estruturados.'
                          : 'Ultra-fast scope and architecture definition through natural language and structured prompts.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                          {lang === 'PT' ? '1-2 dias' : '1-2 days'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'ESCOPO' : 'SCOPE'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[rgb(155,89,182)]/10 border-2 border-[rgb(155,89,182)] flex items-center justify-center">
                        <span className="text-xl font-black text-[rgb(155,89,182)]">2</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Geração Acelerada' : 'Accelerated Generation'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Desenvolvimento do core da aplicação utilizando LLMs avançados para gerar código limpo e funcional.'
                          : 'Core application development using advanced LLMs to generate clean and functional code.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                          {lang === 'PT' ? '3-5 dias' : '3-5 days'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'CODING' : 'CODING'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[rgb(155,89,182)]/10 border-2 border-[rgb(155,89,182)] flex items-center justify-center">
                        <span className="text-xl font-black text-[rgb(155,89,182)]">3</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Refinamento & Deploy' : 'Refinement & Deploy'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Ajustes finos de UX/UI, integração de APIs e deploy automatizado para produção.'
                          : 'Fine UX/UI tuning, API integration and automated production deployment.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                          {lang === 'PT' ? '2-3 dias' : '2-3 days'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'DEPLOY' : 'DEPLOY'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Summary */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-[rgb(155,89,182)]/5 to-transparent border-l-4 border-[rgb(155,89,182)]">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[rgb(155,89,182)] mb-3">
                      {lang === 'PT' ? 'TIMELINE ESTIMADO' : 'ESTIMATED TIMELINE'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <span className="block text-lg font-black text-white">1-2</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'DIAS' : 'DAYS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">3-5</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'DIAS' : 'DAYS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">1-2</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'SEMANAS' : 'WEEKS'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Paid Media Process Flow - Only for PAID MEDIA item */}
            {item.id === 8 && (
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-neutral-700" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                    {lang === 'PT' ? 'FLUXO DE MÍDIA PAGA' : 'PAID MEDIA FLOW'}
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-neutral-950 border border-neutral-900">
                    <h4 className="text-lg font-black uppercase text-white mb-4">
                      {lang === 'PT' ? 'ESTRUTURAÇÃO DE CAMpanhas' : 'CAMPAIGN STRUCTURING'}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                      {lang === 'PT'
                        ? 'Definição de objetivos, seleção de canais, configuração de pixels e preparação de criativos.'
                        : 'Objective definition, channel selection, pixel setup and creative preparation.'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#9B59B6]/10 text-[#9B59B6] border border-[#9B59B6]/20">
                        {lang === 'PT' ? '1-2 SEMANAS' : '1-2 WEEKS'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-neutral-950 border border-neutral-900">
                    <h4 className="text-lg font-black uppercase text-white mb-4">
                      {lang === 'PT' ? 'LANÇAMENTO E OTIMIZAÇÃO' : 'LAUNCH & OPTIMIZATION'}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                      {lang === 'PT'
                        ? 'Ativação das campanhas, monitoramento em tempo real e ajustes baseados em performance inicial.'
                        : 'Campaign activation, real-time monitoring and initial performance-based adjustments.'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#9B59B6]/10 text-[#9B59B6] border border-[#9B59B6]/20">
                        {lang === 'PT' ? '2-4 SEMANAS' : '2-4 WEEKS'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-neutral-950 border border-neutral-900">
                    <h4 className="text-lg font-black uppercase text-white mb-4">
                      {lang === 'PT' ? 'ESCALA E AUTOMAÇÃO' : 'SCALE & AUTOMATION'}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                      {lang === 'PT'
                        ? 'Expansão de budget otimizado, implementação de regras automáticas e scaling de resultados.'
                        : 'Optimized budget expansion, automatic rules implementation and results scaling.'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#9B59B6]/10 text-[#9B59B6] border border-[#9B59B6]/20">
                        {lang === 'PT' ? '4-8 SEMANAS' : '4-8 WEEKS'}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Marketing Strategy Process Flow - Only for MARKETING item */}
            {item.id === 7 && (
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-neutral-700" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                    {lang === 'PT' ? 'FLUXO DE MARKETING' : 'MARKETING FLOW'}
                  </h3>
                </div>
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#4ECDC4]/10 border-2 border-[#4ECDC4] flex items-center justify-center">
                        <span className="text-xl font-black text-[#4ECDC4]">1</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Análise de Mercado' : 'Market Analysis'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Pesquisa de mercado, análise competitiva e definição de posicionamento.'
                          : 'Market research, competitive analysis and positioning definition.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#4ECDC4]/10 text-[#4ECDC4] border border-[#4ECDC4]/20">
                          {lang === 'PT' ? '2-3 semanas' : '2-3 weeks'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'ANÁLISE' : 'ANALYSIS'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#4ECDC4]/10 border-2 border-[#4ECDC4] flex items-center justify-center">
                        <span className="text-xl font-black text-[#4ECDC4]">2</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Estratégia de Conteúdo' : 'Content Strategy'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Desenvolvimento de messaging, personas e calendarização de conteúdo.'
                          : 'Development of messaging, personas and content calendaring.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#4ECDC4]/10 text-[#4ECDC4] border border-[#4ECDC4]/20">
                          {lang === 'PT' ? '3-4 semanas' : '3-4 weeks'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'ESTRATÉGIA' : 'STRATEGY'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#4ECDC4]/10 border-2 border-[#4ECDC4] flex items-center justify-center">
                        <span className="text-xl font-black text-[#4ECDC4]">3</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Execução & Otimização' : 'Execution & Optimization'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Lançamento das campanhas e monitoramento contínuo de performance.'
                          : 'Campaign launch and continuous performance monitoring.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#4ECDC4]/10 text-[#4ECDC4] border border-[#4ECDC4]/20">
                          {lang === 'PT' ? '4-8 semanas' : '4-8 weeks'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'EXECUÇÃO' : 'EXECUTION'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Summary */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#4ECDC4]/5 to-transparent border-l-4 border-[#4ECDC4]">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#4ECDC4] mb-3">
                      {lang === 'PT' ? 'TIMELINE ESTIMADO' : 'ESTIMATED TIMELINE'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <span className="block text-lg font-black text-white">2-3</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'SEMANAS' : 'WEEKS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">3-4</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'SEMANAS' : 'WEEKS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">4-8</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'SEMANAS' : 'WEEKS'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Ad Platforms - Only for PAID MEDIA item */}
            {item.id === 8 && (
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-neutral-700" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                    {lang === 'PT' ? 'PLATAFORMAS DE ANÚNCIOS' : 'AD PLATFORMS'}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Google Ads */}
                  <div className="group relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/50 hover:border-[rgb(155,89,182)]/30 transition-all duration-500 rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(155,89,182,0.15)] hover:shadow-[rgb(155,89,182)]/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgb(155,89,182)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[rgb(155,89,182)]/20 to-[rgb(155,89,182)]/5 rounded-2xl flex items-center justify-center group-hover:from-[rgb(155,89,182)]/30 group-hover:to-[rgb(155,89,182)]/10 transition-all duration-500 group-hover:scale-110">
                          <svg className="w-8 h-8 text-[rgb(155,89,182)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                          </svg>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-black text-white group-hover:text-[rgb(155,89,182)] transition-colors duration-300">
                            Google
                          </div>
                          <div className="text-lg font-black text-[rgb(155,89,182)]">
                            Ads
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="inline-block px-3 py-1 bg-[rgb(155,89,182)]/10 border border-[rgb(155,89,182)]/20 rounded-full">
                          <span className="text-xs font-black text-[rgb(155,89,182)] uppercase tracking-[0.3em]">
                            {lang === 'PT' ? 'Pesquisa' : 'Search'}
                          </span>
                        </div>

                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {lang === 'PT'
                            ? 'Rede de pesquisa e display do Google com alcance global e segmentação avançada.'
                            : 'Google search and display network with global reach and advanced targeting.'}
                        </p>

                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-neutral-800/50 text-[10px] font-black text-neutral-400 rounded border border-neutral-700/50">
                            Search & Display
                          </span>
                          <span className="px-2 py-1 bg-neutral-800/50 text-[10px] font-black text-neutral-400 rounded border border-neutral-700/50">
                            YouTube
                          </span>
                        </div>

                        <button
                          onClick={() => setShowFrameworkModal(true)}
                          className="w-full mt-4 px-4 py-3 bg-[rgb(155,89,182)]/10 border border-[rgb(155,89,182)]/20 text-[rgb(155,89,182)] font-black text-sm uppercase tracking-[0.2em] rounded-lg hover:bg-[rgb(155,89,182)]/20 transition-all duration-300"
                        >
                          {lang === 'PT' ? 'Acesse a estrutura framework' : 'Access framework structure'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Meta Ads */}
                  <div className="group relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/50 hover:border-[rgb(155,89,182)]/30 transition-all duration-500 rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(155,89,182,0.15)] hover:shadow-[rgb(155,89,182)]/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgb(155,89,182)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[rgb(155,89,182)]/20 to-[rgb(155,89,182)]/5 rounded-2xl flex items-center justify-center group-hover:from-[rgb(155,89,182)]/30 group-hover:to-[rgb(155,89,182)]/10 transition-all duration-500 group-hover:scale-110">
                          <svg className="w-8 h-8 text-[rgb(155,89,182)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-black text-white group-hover:text-[rgb(155,89,182)] transition-colors duration-300">
                            Meta
                          </div>
                          <div className="text-lg font-black text-[rgb(155,89,182)]">
                            Ads
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="inline-block px-3 py-1 bg-[rgb(155,89,182)]/10 border border-[rgb(155,89,182)]/20 rounded-full">
                          <span className="text-xs font-black text-[rgb(155,89,182)] uppercase tracking-[0.3em]">
                            {lang === 'PT' ? 'Social' : 'Social'}
                          </span>
                        </div>

                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {lang === 'PT'
                            ? 'Facebook e Instagram com segmentação demográfica e interesse avançados.'
                            : 'Facebook and Instagram with advanced demographic and interest targeting.'}
                        </p>

                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-neutral-800/50 text-[10px] font-black text-neutral-400 rounded border border-neutral-700/50">
                            Facebook
                          </span>
                          <span className="px-2 py-1 bg-neutral-800/50 text-[10px] font-black text-neutral-400 rounded border border-neutral-700/50">
                            Instagram
                          </span>
                        </div>

                        <button
                          onClick={() => setShowMetaFrameworkModal(true)}
                          className="w-full mt-4 px-4 py-3 bg-[rgb(155,89,182)]/10 border border-[rgb(155,89,182)]/20 text-[rgb(155,89,182)] font-black text-sm uppercase tracking-[0.2em] rounded-lg hover:bg-[rgb(155,89,182)]/20 transition-all duration-300"
                        >
                          {lang === 'PT' ? 'Acesse a estrutura framework' : 'Access framework structure'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* TikTok Ads */}
                  <div className="group relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/50 hover:border-[rgb(155,89,182)]/30 transition-all duration-500 rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(155,89,182,0.15)] hover:shadow-[rgb(155,89,182)]/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgb(155,89,182)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[rgb(155,89,182)]/20 to-[rgb(155,89,182)]/5 rounded-2xl flex items-center justify-center group-hover:from-[rgb(155,89,182)]/30 group-hover:to-[rgb(155,89,182)]/10 transition-all duration-500 group-hover:scale-110">
                          <svg className="w-8 h-8 text-[rgb(155,89,182)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.84.01 5.68-.02 8.51-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.36-4.08-1.1-2.03-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                          </svg>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-black text-white group-hover:text-[rgb(155,89,182)] transition-colors duration-300">
                            TikTok
                          </div>
                          <div className="text-lg font-black text-[rgb(155,89,182)]">
                            Ads
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="inline-block px-3 py-1 bg-[rgb(155,89,182)]/10 border border-[rgb(155,89,182)]/20 rounded-full">
                          <span className="text-xs font-black text-[rgb(155,89,182)] uppercase tracking-[0.3em]">
                            {lang === 'PT' ? 'Vídeo' : 'Video'}
                          </span>
                        </div>

                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {lang === 'PT'
                            ? 'Plataforma de vídeo curto com público jovem e formato imersivo.'
                            : 'Short video platform with young audience and immersive format.'}
                        </p>

                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-neutral-800/50 text-[10px] font-black text-neutral-400 rounded border border-neutral-700/50">
                            Short Video
                          </span>
                          <span className="px-2 py-1 bg-neutral-800/50 text-[10px] font-black text-neutral-400 rounded border border-neutral-700/50">
                            Gen Z
                          </span>
                        </div>

                        <button
                          onClick={() => setShowTikTokFrameworkModal(true)}
                          className="w-full mt-4 px-4 py-3 bg-[rgb(155,89,182)]/10 border border-[rgb(155,89,182)]/20 text-[rgb(155,89,182)] font-black text-sm uppercase tracking-[0.2em] rounded-lg hover:bg-[rgb(155,89,182)]/20 transition-all duration-300"
                        >
                          {lang === 'PT' ? 'Acesse a estrutura framework' : 'Access framework structure'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Ads */}
                  <div className="group relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/50 hover:border-[rgb(155,89,182)]/30 transition-all duration-500 rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(155,89,182,0.15)] hover:shadow-[rgb(155,89,182)]/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgb(155,89,182)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[rgb(155,89,182)]/20 to-[rgb(155,89,182)]/5 rounded-2xl flex items-center justify-center group-hover:from-[rgb(155,89,182)]/30 group-hover:to-[rgb(155,89,182)]/10 transition-all duration-500 group-hover:scale-110">
                          <svg className="w-8 h-8 text-[rgb(155,89,182)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-black text-white group-hover:text-[rgb(155,89,182)] transition-colors duration-300">
                            LinkedIn
                          </div>
                          <div className="text-lg font-black text-[rgb(155,89,182)]">
                            Ads
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="inline-block px-3 py-1 bg-[rgb(155,89,182)]/10 border border-[rgb(155,89,182)]/20 rounded-full">
                          <span className="text-xs font-black text-[rgb(155,89,182)] uppercase tracking-[0.3em]">
                            {lang === 'PT' ? 'Profissional' : 'Professional'}
                          </span>
                        </div>

                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {lang === 'PT'
                            ? 'Rede profissional com segmentação por cargo, empresa e indústria.'
                            : 'Professional network with targeting by job title, company and industry.'}
                        </p>

                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-neutral-800/50 text-[10px] font-black text-neutral-400 rounded border border-neutral-700/50">
                            B2B
                          </span>
                          <span className="px-2 py-1 bg-neutral-800/50 text-[10px] font-black text-neutral-400 rounded border border-neutral-700/50">
                            Corporate
                          </span>
                        </div>

                        <button
                          onClick={() => setShowLinkedInFrameworkModal(true)}
                          className="w-full mt-4 px-4 py-3 bg-[rgb(155,89,182)]/10 border border-[rgb(155,89,182)]/20 text-[rgb(155,89,182)] font-black text-sm uppercase tracking-[0.2em] rounded-lg hover:bg-[rgb(155,89,182)]/20 transition-all duration-300"
                        >
                          {lang === 'PT' ? 'Acesse a estrutura framework' : 'Access framework structure'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Brand Registration Process Flow - Only for MARCAS item */}
            {item.id === 9 && (
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-neutral-700" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                    {lang === 'PT' ? 'FLUXO DE REGISTRO' : 'REGISTRATION FLOW'}
                  </h3>
                </div>
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/10 border-2 border-[#FF6B6B] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FF6B6B]">1</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Busca de Viabilidade' : 'Viability Search'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Análise completa de anterioridades e conflitos com marcas registradas no INPI e bases internacionais.'
                          : 'Complete analysis of prior rights and conflicts with trademarks registered at INPI and international databases.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] border border-[#FF6B6B]/20">
                          {lang === 'PT' ? '2-3 dias' : '2-3 days'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'INPI' : 'INPI'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/10 border-2 border-[#FF6B6B] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FF6B6B]">2</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Depósito do Pedido' : 'Application Filing'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Elaboração e protocolo do pedido de registro com especificação correta de classes e produtos/serviços.'
                          : 'Preparation and filing of registration application with correct specification of classes and products/services.'}
                      </p>

                      {/* Taxa Information */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <div className="px-3 py-1 bg-[#FF6B6B]/10 border border-[#FF6B6B]/20 rounded-full">
                            <span className="text-sm font-black text-[#FF6B6B]">R$210,00</span>
                          </div>
                          <span className="text-xs text-neutral-500">
                            {lang === 'PT' ? 'Taxa INPI via GRU' : 'INPI fee via GRU'}
                          </span>
                        </div>

                        <button
                          onClick={() => setShowConditions(!showConditions)}
                          className="text-xs text-[#FF6B6B] hover:text-[#FF8B8B] transition-colors underline font-black uppercase tracking-[0.2em]"
                        >
                          {lang === 'PT' ? 'Ver condições' : 'See conditions'}
                        </button>
                      </div>

                      {/* Condicões (Hidden by default, shown on click) */}
                      {showConditions && (
                        <div className="space-y-3 p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg text-xs text-neutral-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                          <h5 className="text-sm font-black text-[#FF6B6B] uppercase tracking-[0.2em] mb-2">
                            {lang === 'PT' ? 'Retribuição com desconto:' : 'Discounted fee:'}
                          </h5>
                          <p>
                            {lang === 'PT'
                              ? 'Redução de 50% no valor de retribuição a ser obtida por: pessoas naturais (somente se não detiverem participação em empresa do ramo a que pertence o item a ser registrado, desde que a empresa, por si, não tenha já direito ao desconto); microempresas, microempreendedor individual e empresas de pequeno porte, assim definidas na Lei Complementar nº 123, de 14 de dezembro de 2006; empresas simples de inovação, assim definidas na Lei Complementar 167/2019; instituições científicas, tecnológicas e de Inovação - ICT, conforme Lei nº 10.973, de 2 de dezembro de 2004; entidades sem fins lucrativos, bem como órgãos públicos. No caso de cotitularidade, o desconto só deve ser aplicado se todos os depositantes fizerem jus ao desconto. O desconto não incide sobre todos os códigos. Para pessoas físicas hipossuficientes e pessoas com deficiência (PcD) será oferecido desconto de 100% aplicável nos serviços de entrada elegíveis (códigos 200; 389; 394; 100; 400; 401; 402; 403; 404; 406; 425; 426; 427; 428; 430; 433; 434; 435) e para os demais serviços elegíveis, aplicação de 50% de desconto, conforme estabelecido para grupos.'
                              : '50% reduction in fee for: natural persons (only if they do not hold participation in companies in the sector to which the item to be registered belongs, provided that the company itself does not already have the right to the discount); microenterprises, individual microentrepreneurs and small businesses, as defined in Complementary Law No. 123, of December 14, 2006; simple innovation companies, as defined in Complementary Law 167/2019; scientific, technological and innovation institutions - ICT, according to Law No. 10.973, of December 2, 2004; non-profit entities, as well as public bodies. In case of co-ownership, the discount should only be applied if all depositors are entitled to the discount. The discount does not apply to all codes. For low-income natural persons and persons with disabilities (PwD), a 100% discount will be offered applicable to eligible entry services (codes 200; 389; 394; 100; 400; 401; 402; 403; 404; 406; 425; 426; 427; 428; 430; 433; 434; 435) and for other eligible services, 50% discount application, as established for groups.'
                            }
                          </p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] border border-[#FF6B6B]/20">
                          {lang === 'PT' ? '1 dia' : '1 day'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'Protocolo' : 'Protocol'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/10 border-2 border-[#FF6B6B] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FF6B6B]">3</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Exame de Mérito' : 'Merit Examination'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Análise técnica pelo INPI verificando requisitos formais e substanciais para concessão do registro.'
                          : 'Technical analysis by INPI verifying formal and substantive requirements for grant of registration.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] border border-[#FF6B6B]/20">
                          {lang === 'PT' ? '6-12 meses' : '6-12 months'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'Análise' : 'Analysis'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/10 border-2 border-[#FF6B6B] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FF6B6B]">4</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Publicação e Oposição' : 'Publication and Opposition'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Edital de publicação na RPI para que terceiros possam apresentar oposições em até 60 dias.'
                          : 'Publication notice in RPI allowing third parties to file oppositions within 60 days.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] border border-[#FF6B6B]/20">
                          {lang === 'PT' ? '60 dias' : '60 days'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'RPI' : 'RPI'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/10 border-2 border-[#FF6B6B] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FF6B6B]">5</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Concessão e Certificado' : 'Grant and Certificate'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Emissão do certificado de registro e início da vigência de proteção por 10 anos (renovável).'
                          : 'Issuance of registration certificate and beginning of 10-year protection period (renewable).'}
                      </p>

                      {/* Taxa Information */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <div className="px-3 py-1 bg-[#FF6B6B]/10 border border-[#FF6B6B]/20 rounded-full">
                            <span className="text-sm font-black text-[#FF6B6B]">R$375,00</span>
                          </div>
                          <span className="text-xs text-neutral-500">
                            {lang === 'PT' ? 'Taxa INPI via GRU' : 'INPI fee via GRU'}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] border border-[#FF6B6B]/20">
                          {lang === 'PT' ? '10 anos' : '10 years'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'Vigência' : 'Validity'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Summary */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#FF6B6B]/5 to-transparent border-l-4 border-[#FF6B6B]">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#FF6B6B] mb-3">
                      {lang === 'PT' ? 'TIMELINE ESTIMADO' : 'ESTIMATED TIMELINE'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                      <div>
                        <span className="block text-lg font-black text-white">2-3</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'DIAS' : 'DAYS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">1</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'DIA' : 'DAY'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">6-12</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'MESES' : 'MONTHS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">60</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'DIAS' : 'DAYS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">10</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'ANOS' : 'YEARS'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Domain Process Flow - Only for DOMAIN item */}
            {item.id === 10 && (
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-neutral-700" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                    {lang === 'PT' ? 'FLUXO DE PROPRIEDADE DIGITAL' : 'DIGITAL PROPERTY FLOW'}
                  </h3>
                </div>
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[rgb(155,89,182)]/10 border-2 border-[rgb(155,89,182)] flex items-center justify-center">
                        <span className="text-xl font-black text-[rgb(155,89,182)]">1</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Busca e Registro' : 'Search & Registration'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Verificação de disponibilidade e aquisição de domínios estratégicos (.com, .br, .io).'
                          : 'Availability check and acquisition of strategic domains (.com, .br, .io).'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                          {lang === 'PT' ? '1 dia' : '1 day'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'REGISTRO' : 'REGISTRY'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[rgb(155,89,182)]/10 border-2 border-[rgb(155,89,182)] flex items-center justify-center">
                        <span className="text-xl font-black text-[rgb(155,89,182)]">2</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Configuração DNS' : 'DNS Configuration'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Configuração de nameservers, propagação e segurança via Cloudflare.'
                          : 'Nameserver configuration, propagation, and security via Cloudflare.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                          {lang === 'PT' ? '1-2 dias' : '1-2 days'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'INFRA' : 'INFRA'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[rgb(155,89,182)]/10 border-2 border-[rgb(155,89,182)] flex items-center justify-center">
                        <span className="text-xl font-black text-[rgb(155,89,182)]">3</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Entradas e Apontamentos' : 'Records & Pointing'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Configuração de registros A, CNAME, MX e TXT para site e e-mail.'
                          : 'Configuration of A, CNAME, MX, and TXT records for website and email.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                          {lang === 'PT' ? '1 dia' : '1 day'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'RECORDS' : 'RECORDS'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Summary */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-[rgb(155,89,182)]/5 to-transparent border-l-4 border-[rgb(155,89,182)]">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[rgb(155,89,182)] mb-3">
                      {lang === 'PT' ? 'TIMELINE ESTIMADO' : 'ESTIMATED TIMELINE'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <span className="block text-lg font-black text-white">1</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'DIA' : 'DAY'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">1-2</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'DIAS' : 'DAYS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">1</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'DIA' : 'DAY'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Sites Process Flow - Only for SITES item */}
            {item.id === 11 && (
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-neutral-700" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                    {lang === 'PT' ? 'FLUXO DE DESENVOLVIMENTO' : 'DEVELOPMENT FLOW'}
                  </h3>
                </div>
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#58B573]/10 border-2 border-[#58B573] flex items-center justify-center">
                        <span className="text-xl font-black text-[#58B573]">1</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Estratégia & Briefing' : 'Strategy & Briefing'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Mapeamento de objetivos, público-alvo e jornada do usuário.'
                          : 'Mapping objectives, target audience, and user journey.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#58B573]/10 text-[#58B573] border border-[#58B573]/20">
                          {lang === 'PT' ? '1-2 dias' : '1-2 days'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'PLANEJAMENTO' : 'PLANNING'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#58B573]/10 border-2 border-[#58B573] flex items-center justify-center">
                        <span className="text-xl font-black text-[#58B573]">2</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Design & UX' : 'Design & UX'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Criação de wireframes, mockups e protótipos interativos.'
                          : 'Creation of wireframes, mockups, and interactive prototypes.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#58B573]/10 text-[#58B573] border border-[#58B573]/20">
                          {lang === 'PT' ? '3-5 dias' : '3-5 days'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'DESIGN' : 'DESIGN'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#58B573]/10 border-2 border-[#58B573] flex items-center justify-center">
                        <span className="text-xl font-black text-[#58B573]">3</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Desenvolvimento' : 'Development'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Implementação frontend, backend e integração com APIs.'
                          : 'Frontend implementation, backend, and API integration.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#58B573]/10 text-[#58B573] border border-[#58B573]/20">
                          {lang === 'PT' ? '1-2 semanas' : '1-2 weeks'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'CODING' : 'CODING'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-6 p-6 bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#58B573]/10 border-2 border-[#58B573] flex items-center justify-center">
                        <span className="text-xl font-black text-[#58B573]">4</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Lançamento & Otimização' : 'Launch & Optimization'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Deploy, configuração de SEO e monitoramento de performance.'
                          : 'Deploy, SEO configuration, and performance monitoring.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#58B573]/10 text-[#58B573] border border-[#58B573]/20">
                          {lang === 'PT' ? '2-3 dias' : '2-3 days'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'DEPLOY' : 'DEPLOY'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Summary */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#58B573]/5 to-transparent border-l-4 border-[#58B573]">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#58B573] mb-3">
                      {lang === 'PT' ? 'TIMELINE ESTIMADO' : 'ESTIMATED TIMELINE'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <span className="block text-lg font-black text-white">1-2</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'DIAS' : 'DAYS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">3-5</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'DIAS' : 'DAYS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">1-2</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'SEMANAS' : 'WEEKS'}
                        </span>
                      </div>
                      <div>
                        <span className="block text-lg font-black text-white">2-3</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          {lang === 'PT' ? 'DIAS' : 'DAYS'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Visual & Stats */}
          <div className="lg:col-span-5 space-y-12">
            <div className="sticky top-32 space-y-12">
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 group border border-neutral-900">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                <div
                  className="absolute bottom-0 left-0 w-full h-1"
                  style={{ backgroundColor: colorHex }}
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 border border-neutral-900 bg-neutral-950/50 text-center">
                  <span className="block text-3xl font-black" style={{ color: colorHex }}>
                    {item.id <= 3 ? '10+' : item.id === 11 ? '8+' : '5+'}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600">
                    {lang === 'PT' ? 'ANOS EXP.' : 'YEARS EXP.'}
                  </span>
                </div>
                <div className="p-6 border border-neutral-900 bg-neutral-950/50 text-center">
                  <span className="block text-3xl font-black" style={{ color: colorHex }}>
                    {item.id <= 4 ? '50+' : item.id === 11 ? '40+' : '30+'}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600">
                    {lang === 'PT' ? 'PROJETOS' : 'PROJECTS'}
                  </span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="flex items-center justify-center">
                <span
                  className="px-6 py-3 text-[10px] font-black uppercase tracking-[0.4em] border"
                  style={{ borderColor: colorHex, color: colorHex }}
                >
                  {item.category}
                </span>
              </div>
            </div>
          </div>
        </div >
      </main >

      {/* Footer-like CTA */}
      < footer className="border-t border-neutral-900 px-6 md:px-12 py-20 bg-[#080808]" >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* CTA Principal */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                {lang === 'PT' ? 'PARE DE PERDER TEMPO' : 'STOP WASTING TIME'}
              </h2>
              <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto">
                {lang === 'PT'
                  ? `Seus concorrentes estão acelerando. Você está esperando o quê?`
                  : `Your competitors are accelerating. What are you waiting for?`
                }
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a
                href="https://wa.me/5514998618547?text=Olá! Vi a página de ${item.title.toLowerCase()} e quero acelerar meus resultados no mercado digital."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-12 py-6 bg-[#25D366] hover:bg-[#128C7E] text-black font-black text-lg uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[#25D366]/50 shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {lang === 'PT' ? 'ACELERAR AGORA' : 'ACCELERATE NOW'}
                </span>
              </a>

              <button
                onClick={handleBackToCapacities}
                className="px-8 py-4 border border-neutral-700 text-neutral-400 font-black text-sm uppercase tracking-wider rounded-full hover:border-neutral-500 hover:text-white transition-all duration-300"
              >
                {nav.back}
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 text-neutral-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em]">
                  {lang === 'PT' ? 'Resposta em 5min' : 'Response in 5min'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em]">
                  {lang === 'PT' ? 'Sem compromisso' : 'No commitment'}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Original */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-neutral-900">
            <div className="flex items-center gap-2">
              <img src="/logofernando.png" alt="FERNANDO.RAMALHO" className="h-3" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-neutral-600">
                / SYSTEMS FOR DOMINANCE
              </span>
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700">
              {lang === 'PT' ? 'O FUTURO NÃO ESPERA' : 'THE FUTURE DOESN\'T WAIT'}
            </div>
          </div>
        </div>
      </footer >

      {/* Framework Modal */}
      {showFrameworkModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-800">
              <h3 className="text-xl font-black text-white">
                {lang === 'PT' ? 'Estrutura Framework Google Ads' : 'Google Ads Framework Structure'}
              </h3>
              <button
                onClick={() => setShowFrameworkModal(false)}
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content - Framework Structure */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                {/* Campanha */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Campanha</h4>
                      <p className="text-sm text-neutral-400">Nível estratégico principal</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Objetivo: Vendas, Leads, Tráfego</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Orçamento diário/mensal</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Estratégia de lances</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Redes: Search, Display, YouTube</span>
                    </div>
                  </div>
                </div>

                {/* Grupo de Anúncios */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Grupo de Anúncios</h4>
                      <p className="text-sm text-neutral-400">Segmentação temática</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Palavras-chave (negativas e positivas)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Segmentação: Local, dispositivo, idioma</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Públicos-alvo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Lances específicos do grupo</span>
                    </div>
                  </div>
                </div>

                {/* Anúncios */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Anúncios</h4>
                      <p className="text-sm text-neutral-400">Criatividade e copy</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Títulos (até 30 caracteres)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Descrições (até 90 caracteres)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Extensões: Sitelink, Callout, Structured Snippets</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Assets: Imagens, vídeos, logotipos</span>
                    </div>
                  </div>
                </div>

                {/* Otimização */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Otimização</h4>
                      <p className="text-sm text-neutral-400">Métricas e melhorias</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Quality Score (Índice de Qualidade)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">CTR, CPC, CPA, ROAS</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">A/B testing de anúncios</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Relatórios e análises</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Meta Ads Framework Modal */}
      {showMetaFrameworkModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between p-6 border-b border-neutral-800">
              <h3 className="text-xl font-black text-white">
                {lang === 'PT' ? 'Estrutura Framework Meta Ads' : 'Meta Ads Framework Structure'}
              </h3>
              <button
                onClick={() => setShowMetaFrameworkModal(false)}
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                {/* Campanha */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Campanha</h4>
                      <p className="text-sm text-neutral-400">Nível estratégico principal</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Objetivo: Vendas, Leads, Tráfego, Engajamento</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Orçamento e cronograma</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Advantage+ (IA automática)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">A/B testing de campanha</span>
                    </div>
                  </div>
                </div>

                {/* Conjunto de Anúncios */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Conjunto de Anúncios</h4>
                      <p className="text-sm text-neutral-400">Segmentação e delivery</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Públicos: Custom, Lookalike, Saved</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Segmentação demográfica e geográfica</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Posicionamentos: Feed, Stories, Reels</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Otimização de delivery</span>
                    </div>
                  </div>
                </div>

                {/* Anúncios */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Anúncios</h4>
                      <p className="text-sm text-neutral-400">Formatos e criatividade</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Image, Video, Carousel, Collection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Títulos e textos primários/secundários</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Headlines: até 5 opções</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">CTA buttons personalizáveis</span>
                    </div>
                  </div>
                </div>

                {/* Pixel e Conversões */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Pixel e Conversões</h4>
                      <p className="text-sm text-neutral-400">Mensuração e otimização</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Meta Pixel para tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Conversions API (server-side)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Eventos customizados</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Atribuição e LTV</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TikTok Ads Framework Modal */}
      {showTikTokFrameworkModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between p-6 border-b border-neutral-800">
              <h3 className="text-xl font-black text-white">
                {lang === 'PT' ? 'Estrutura Framework TikTok Ads' : 'TikTok Ads Framework Structure'}
              </h3>
              <button
                onClick={() => setShowTikTokFrameworkModal(false)}
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                {/* Campanha */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Campanha</h4>
                      <p className="text-sm text-neutral-400">Objetivo e budget</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Objetivo: Conversions, Traffic, Reach</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Budget: Daily ou Lifetime</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Pacing: Standard ou Accelerated</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Campaign Budget Optimization (CBO)</span>
                    </div>
                  </div>
                </div>

                {/* Grupo de Anúncios */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Grupo de Anúncios</h4>
                      <p className="text-sm text-neutral-400">Segmentação e placement</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Públicos: Interest, Behavior, Custom</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Demographics: Age, Gender, Location</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Device: iOS, Android, All</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Placement: TikTok, News Feed, Pangle</span>
                    </div>
                  </div>
                </div>

                {/* Anúncios */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Anúncios</h4>
                      <p className="text-sm text-neutral-400">Formatos virais</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">In-Feed Ads (9:16 ou 1:1)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">TopView, Brand Takeover</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Branded Hashtag Challenge</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Spark Ads (conteúdo orgânico)</span>
                    </div>
                  </div>
                </div>

                {/* Criatividade e Trends */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Criatividade e Trends</h4>
                      <p className="text-sm text-neutral-400">Estratégia de conteúdo</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Músicas trending e sons populares</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Efeitos e filtros nativos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Hashtags e challenges</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Duetos e Stitches</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LinkedIn Ads Framework Modal */}
      {showLinkedInFrameworkModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between p-6 border-b border-neutral-800">
              <h3 className="text-xl font-black text-white">
                {lang === 'PT' ? 'Estrutura Framework LinkedIn Ads' : 'LinkedIn Ads Framework Structure'}
              </h3>
              <button
                onClick={() => setShowLinkedInFrameworkModal(false)}
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                {/* Campanha */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Campanha</h4>
                      <p className="text-sm text-neutral-400">Objetivo B2B</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Objetivo: Brand Awareness, Leads, Conversions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Budget: CPC, CPM, CPA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Schedule e pacing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Campaign Group (organização)</span>
                    </div>
                  </div>
                </div>

                {/* Grupo de Anúncios */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Grupo de Anúncios</h4>
                      <p className="text-sm text-neutral-400">Segmentação profissional</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Job Title, Seniority, Function</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Company Size, Industry, Revenue</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Skills, Education, Certifications</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Matched Audiences (retargeting)</span>
                    </div>
                  </div>
                </div>

                {/* Anúncios */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Anúncios</h4>
                      <p className="text-sm text-neutral-400">Formatos profissionais</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Single Image Ad</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Carousel Ad (até 10 cards)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Video Ad (15s - 30min)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Document Ad (PDF lead gen)</span>
                    </div>
                  </div>
                </div>

                {/* Lead Gen e Conversões */}
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Lead Gen e Conversões</h4>
                      <p className="text-sm text-neutral-400">Geração de negócios</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">LinkedIn Lead Gen Forms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Website Conversions (Insight Tag)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">CRM Integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Account-Based Marketing (ABM)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Design System Example Modal */}
      {showDesignSystemModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between p-6 border-b border-neutral-800">
              <h3 className="text-xl font-black text-white">
                {lang === 'PT' ? 'Estrutura de um Design System' : 'Design System Structure'}
              </h3>
              <button
                onClick={() => setShowDesignSystemModal(false)}
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Tooltip Toast */}
              {activeTooltip && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[300] animate-in slide-in-from-bottom-4 fade-in duration-300">
                  <div className="bg-[#E67E22] text-black px-6 py-4 rounded-xl shadow-2xl max-w-md">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">
                        {activeTooltip === 1 && '🎨'}
                        {activeTooltip === 2 && '🧩'}
                        {activeTooltip === 3 && '📐'}
                        {activeTooltip === 4 && '📚'}
                      </span>
                      <div>
                        <h5 className="font-black text-sm mb-1">
                          {activeTooltip === 1 && (lang === 'PT' ? 'Foundation / Tokens' : 'Foundation / Tokens')}
                          {activeTooltip === 2 && (lang === 'PT' ? 'Components' : 'Components')}
                          {activeTooltip === 3 && (lang === 'PT' ? 'Patterns & Templates' : 'Patterns & Templates')}
                          {activeTooltip === 4 && (lang === 'PT' ? 'Documentation' : 'Documentation')}
                        </h5>
                        <p className="text-xs leading-relaxed opacity-90">
                          {activeTooltip === 1 && (lang === 'PT'
                            ? 'Os tokens são as variáveis fundamentais do seu design: cores, tipografia, espaçamentos e bordas. Eles garantem consistência visual em todo o produto e facilitam mudanças globais.'
                            : 'Tokens are the fundamental variables of your design: colors, typography, spacing, and borders. They ensure visual consistency across the product and enable global changes.')}
                          {activeTooltip === 2 && (lang === 'PT'
                            ? 'Componentes são blocos de interface reutilizáveis como botões, inputs e cards. Construídos sobre os tokens, eles aceleram o desenvolvimento e mantêm a UI consistente.'
                            : 'Components are reusable interface blocks like buttons, inputs, and cards. Built on tokens, they speed up development and keep the UI consistent.')}
                          {activeTooltip === 3 && (lang === 'PT'
                            ? 'Patterns são combinações de componentes que resolvem problemas comuns de UX, como formulários e navegação. Templates são layouts de página prontos para uso.'
                            : 'Patterns are component combinations that solve common UX problems, like forms and navigation. Templates are ready-to-use page layouts.')}
                          {activeTooltip === 4 && (lang === 'PT'
                            ? 'A documentação é essencial para escalar o design system. Inclui guias de uso, princípios de marca, regras de acessibilidade e especificações responsive.'
                            : 'Documentation is essential to scale the design system. It includes usage guides, brand principles, accessibility rules, and responsive specifications.')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-8">
                {/* Foundation / Tokens */}
                <div
                  className="space-y-4 p-4 -m-4 rounded-xl transition-all duration-300 hover:bg-neutral-800/30 cursor-pointer"
                  onMouseEnter={() => setActiveTooltip(1)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E67E22]/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-black text-[#E67E22]">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">FOUNDATION / TOKENS</h4>
                      <p className="text-xs text-neutral-400">{lang === 'PT' ? 'Base do sistema • Passe o mouse para detalhes' : 'System base • Hover for details'}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                      <div className="flex gap-2 mb-2">
                        <div className="w-6 h-6 rounded bg-[#FFEE00]"></div>
                        <div className="w-6 h-6 rounded bg-[#58B573]"></div>
                        <div className="w-6 h-6 rounded bg-[#E67E22]"></div>
                      </div>
                      <span className="text-xs font-bold text-white">Colors</span>
                      <p className="text-[10px] text-neutral-500">Primary, Secondary, Accent</p>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                      <div className="space-y-1 mb-2">
                        <div className="text-lg font-black text-white leading-none">Aa</div>
                        <div className="text-sm font-medium text-neutral-400 leading-none">Aa</div>
                      </div>
                      <span className="text-xs font-bold text-white">Typography</span>
                      <p className="text-[10px] text-neutral-500">Font family, sizes, weights</p>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                      <div className="flex gap-1 mb-2">
                        <div className="w-2 h-4 bg-neutral-600 rounded-sm"></div>
                        <div className="w-4 h-4 bg-neutral-600 rounded-sm"></div>
                        <div className="w-6 h-4 bg-neutral-600 rounded-sm"></div>
                      </div>
                      <span className="text-xs font-bold text-white">Spacing</span>
                      <p className="text-[10px] text-neutral-500">4px, 8px, 16px, 24px...</p>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                      <div className="flex gap-1 mb-2">
                        <div className="w-4 h-4 bg-neutral-600 rounded-sm"></div>
                        <div className="w-4 h-4 bg-neutral-600 rounded-md"></div>
                        <div className="w-4 h-4 bg-neutral-600 rounded-full"></div>
                      </div>
                      <span className="text-xs font-bold text-white">Radius</span>
                      <p className="text-[10px] text-neutral-500">Sharp, Rounded, Pill</p>
                    </div>
                  </div>
                </div>

                {/* Components */}
                <div
                  className="space-y-4 p-4 -m-4 rounded-xl transition-all duration-300 hover:bg-neutral-800/30 cursor-pointer"
                  onMouseEnter={() => setActiveTooltip(2)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E67E22]/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-black text-[#E67E22]">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">COMPONENTS</h4>
                      <p className="text-xs text-neutral-400">{lang === 'PT' ? 'Blocos reutilizáveis • Passe o mouse para detalhes' : 'Reusable blocks • Hover for details'}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 space-y-2">
                      <span className="text-xs font-bold text-white">Buttons</span>
                      <div className="flex flex-wrap gap-2">
                        <button className="px-3 py-1 bg-[#E67E22] text-black text-[10px] font-bold rounded-full">Primary</button>
                        <button className="px-3 py-1 border border-neutral-600 text-white text-[10px] font-bold rounded-full">Secondary</button>
                      </div>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 space-y-2">
                      <span className="text-xs font-bold text-white">Inputs</span>
                      <input type="text" placeholder="Input text..." className="w-full px-3 py-1 bg-neutral-800 border border-neutral-700 rounded text-[10px] text-white placeholder-neutral-500" readOnly />
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 space-y-2">
                      <span className="text-xs font-bold text-white">Cards</span>
                      <div className="bg-neutral-800 border border-neutral-700 rounded p-2">
                        <div className="w-full h-4 bg-neutral-700 rounded mb-1"></div>
                        <div className="w-2/3 h-2 bg-neutral-600 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 space-y-2">
                      <span className="text-xs font-bold text-white">Badges</span>
                      <div className="flex gap-1">
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-[8px] font-bold rounded">Active</span>
                        <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-[8px] font-bold rounded">Pending</span>
                      </div>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 space-y-2">
                      <span className="text-xs font-bold text-white">Navigation</span>
                      <div className="flex gap-2">
                        <div className="w-4 h-4 bg-neutral-600 rounded"></div>
                        <div className="w-12 h-4 bg-neutral-700 rounded"></div>
                        <div className="w-8 h-4 bg-neutral-700 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 space-y-2">
                      <span className="text-xs font-bold text-white">Modals</span>
                      <div className="bg-neutral-800 border border-neutral-700 rounded p-2">
                        <div className="w-8 h-1 bg-neutral-600 rounded mb-1"></div>
                        <div className="w-full h-3 bg-neutral-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Patterns */}
                <div
                  className="space-y-4 p-4 -m-4 rounded-xl transition-all duration-300 hover:bg-neutral-800/30 cursor-pointer"
                  onMouseEnter={() => setActiveTooltip(3)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E67E22]/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-black text-[#E67E22]">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">PATTERNS & TEMPLATES</h4>
                      <p className="text-xs text-neutral-400">{lang === 'PT' ? 'Layouts e fluxos • Passe o mouse para detalhes' : 'Layouts and flows • Hover for details'}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                      <span className="text-xs font-bold text-white mb-2 block">Page Layout</span>
                      <div className="bg-neutral-800 rounded p-2 space-y-1">
                        <div className="h-3 bg-neutral-700 rounded"></div>
                        <div className="flex gap-1">
                          <div className="w-1/4 h-16 bg-neutral-700 rounded"></div>
                          <div className="w-3/4 h-16 bg-neutral-600 rounded"></div>
                        </div>
                        <div className="h-2 bg-neutral-700 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                      <span className="text-xs font-bold text-white mb-2 block">Form Pattern</span>
                      <div className="bg-neutral-800 rounded p-2 space-y-1">
                        <div className="h-2 w-1/3 bg-neutral-600 rounded"></div>
                        <div className="h-4 bg-neutral-700 rounded"></div>
                        <div className="h-2 w-1/3 bg-neutral-600 rounded"></div>
                        <div className="h-4 bg-neutral-700 rounded"></div>
                        <div className="h-4 w-1/4 bg-[#E67E22]/50 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documentation */}
                <div
                  className="space-y-4 p-4 -m-4 rounded-xl transition-all duration-300 hover:bg-neutral-800/30 cursor-pointer"
                  onMouseEnter={() => setActiveTooltip(4)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E67E22]/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-black text-[#E67E22]">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">DOCUMENTATION</h4>
                      <p className="text-xs text-neutral-400">{lang === 'PT' ? 'Guias e regras • Passe o mouse para detalhes' : 'Guides and rules • Hover for details'}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { icon: '📖', title: 'Usage Guidelines', desc: lang === 'PT' ? 'Como usar cada componente' : 'How to use each component' },
                      { icon: '🎨', title: 'Brand Guidelines', desc: lang === 'PT' ? 'Identidade visual' : 'Visual identity' },
                      { icon: '♿', title: 'Accessibility', desc: 'WCAG 2.1 AA' },
                      { icon: '📱', title: 'Responsive', desc: 'Mobile, Tablet, Desktop' }
                    ].map((docItem, i) => (
                      <div key={i} className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">{docItem.icon}</div>
                        <span className="text-xs font-bold text-white block">{docItem.title}</span>
                        <p className="text-[10px] text-neutral-500">{docItem.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ecommerce Process Flow - Only for ECOMMERCE item */}
      {item.id === 12 && (
        <main className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="space-y-16">
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-neutral-700" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                  {lang === 'PT' ? 'FLUXO DE ECOMMERCE' : 'ECOMMERCE FLOW'}
                </h3>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-neutral-950 border border-neutral-900">
                  <h4 className="text-lg font-black uppercase text-white mb-4">
                    {lang === 'PT' ? 'FASE 1: PLANEJAMENTO E ESTRUTURAÇÃO' : 'PHASE 1: PLANNING & STRUCTURE'}
                  </h4>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                    {lang === 'PT'
                      ? 'Definição da plataforma, modelo de negócio, catálogo de produtos e estratégia de precificação.'
                      : 'Platform definition, business model, product catalog and pricing strategy.'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                      {lang === 'PT' ? '1-2 SEMANAS' : '1-2 WEEKS'}
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-neutral-950 border border-neutral-900">
                  <h4 className="text-lg font-black uppercase text-white mb-4">
                    {lang === 'PT' ? 'FASE 2: DESENVOLVIMENTO E CONFIGURAÇÃO' : 'PHASE 2: DEVELOPMENT & CONFIGURATION'}
                  </h4>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                    {lang === 'PT'
                      ? 'Criação da loja virtual, configuração de produtos, integração de gateways de pagamento e frete.'
                      : 'Virtual store creation, product setup, payment gateway and shipping integration.'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                      {lang === 'PT' ? '2-4 SEMANAS' : '2-4 WEEKS'}
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-neutral-950 border border-neutral-900">
                  <h4 className="text-lg font-black uppercase text-white mb-4">
                    {lang === 'PT' ? 'FASE 3: OTIMIMIZAÇÃO E LANÇAMENTO' : 'PHASE 3: OPTIMIZATION & LAUNCH'}
                  </h4>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                    {lang === 'PT'
                      ? 'Testes, otimização de conversão, configuração de banners e lançamento da loja.'
                      : 'Testing, conversion optimization, banner setup and store launch.'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[rgb(155,89,182)]/10 text-[rgb(155,89,182)] border border-[rgb(155,89,182)]/20">
                      {lang === 'PT' ? '1-2 SEMANAS' : '1-2 WEEKS'}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-neutral-700" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                  {lang === 'PT' ? 'PLATAFORMAS PARCEIRAS' : 'PARTNER PLATFORMS'}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">T</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Tray Ecommerce</h4>
                      <p className="text-sm text-neutral-400">Plataforma líder no Brasil</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Mais de 100 mil lojas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Integrações nativas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Suporte especializado</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-800">
                    <a
                      href="https://www.tray.com.br/parceria/ORIENTOHUB/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(155,89,182)] hover:bg-[rgb(155,89,182)]/90 text-black font-black text-xs uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[rgb(155,89,182)]/50"
                    >
                      <span>{lang === 'PT' ? 'CONTRATAR TRAY' : 'HIRE TRAY'}</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">N</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Nuvemshop</h4>
                      <p className="text-sm text-neutral-400">Crescimento acelerado</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Fácil utilização</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Planos acessíveis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Marketplace integrado</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-800">
                    <a
                      href="https://www.nuvemshop.com.br/partners/orientohub-solues-empresariais"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(155,89,182)] hover:bg-[rgb(155,89,182)]/90 text-black font-black text-xs uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[rgb(155,89,182)]/50"
                    >
                      <span>{lang === 'PT' ? 'CONTRATAR NUVEMSHOP' : 'HIRE NUVEMSHOP'}</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-neutral-700" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                  {lang === 'PT' ? 'GATEWAYS DE PAGAMENTO' : 'PAYMENT GATEWAYS'}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Asaas', 'Mercado Pago', 'Pagar.me',
                  'PayPal', 'PicPay', 'PagBank'
                ].map((gateway, index) => (
                  <div key={index} className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[rgb(155,89,182)]/20 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-black text-[rgb(155,89,182)]">{gateway[0]}</span>
                      </div>
                      <div>
                        <h5 className="text-sm font-black text-white">{gateway}</h5>
                        <p className="text-xs text-neutral-400">
                          {lang === 'PT' ? 'Integração completa' : 'Full integration'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-neutral-700" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                  {lang === 'PT' ? 'RECURSOS AVANÇADOS' : 'ADVANCED FEATURES'}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">🎨</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Banners Personalizados</h4>
                      <p className="text-sm text-neutral-400">Design impactante</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Banners responsivos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Animações e transições</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">A/B testing integrado</span>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg font-black text-[rgb(155,89,182)]">🚚</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Configuração de Frete</h4>
                      <p className="text-sm text-neutral-400">Logística otimizada</p>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Múltiplos transportadoras</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Cálculo automático</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[rgb(155,89,182)] rounded-full"></div>
                      <span className="text-sm text-neutral-300">Frete grátis condicional</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      )}

      {/* Footer-like CTA - Only for ECOMMERCE */}
      {item.id === 12 && (
        <footer className="border-t border-neutral-900 px-6 md:px-12 py-20 bg-[#080808]">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* CTA Principal */}
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                {lang === 'PT' ? 'VAMOS CONSTRUIR' : 'LET\'S BUILD'}
                <br />
                <span style={{ color: colorHex }}>
                  {lang === 'PT' ? 'SUA LOJA VIRTUAL' : 'YOUR ONLINE STORE'}
                </span>
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                {lang === 'PT'
                  ? 'Transforme suas ideias em uma máquina de vendas automatizada e escalável.'
                  : 'Transform your ideas into an automated and scalable sales machine.'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="https://wa.me/5514998618547?text=Olá! Vi a página de Ecommerce e quero criar minha loja virtual."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-12 py-6 bg-[#25D366] hover:bg-[#128C7E] text-black font-black text-lg uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[#25D366]/50 shadow-2xl"
                >
                  <span className="relative z-10">
                    {lang === 'PT' ? 'COMEÇAR AGORA' : 'START NOW'}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <button
                  onClick={() => navigate(lang === 'EN' ? '/en/capacidades' : '/capacidades')}
                  className="px-12 py-6 border border-neutral-700 text-white font-black text-lg uppercase tracking-wider rounded-full transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-900"
                >
                  {lang === 'PT' ? 'VER CAPACIDADES' : 'SEE CAPABILITIES'}
                </button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-black text-[rgb(155,89,182)]">🚀</span>
                </div>
                <h4 className="text-lg font-black text-white">
                  {lang === 'PT' ? 'LANÇAMENTO RÁPIDO' : 'QUICK LAUNCH'}
                </h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'PT'
                    ? 'Sua loja no ar em até 4 semanas com todas as integrações.'
                    : 'Your store live in up to 4 weeks with all integrations.'}
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-black text-[rgb(155,89,182)]">💳</span>
                </div>
                <h4 className="text-lg font-black text-white">
                  {lang === 'PT' ? 'PAGAMENTOS 100%' : '100% PAYMENTS'}
                </h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'PT'
                    ? 'Todos os principais gateways do mercado brasileiro integrados.'
                    : 'All major Brazilian market payment gateways integrated.'}
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-[rgb(155,89,182)]/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-black text-[rgb(155,89,182)]">📈</span>
                </div>
                <h4 className="text-lg font-black text-white">
                  {lang === 'PT' ? 'CONVERSÃO OTIMIZADA' : 'OPTIMIZED CONVERSION'}
                </h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'PT'
                    ? 'Taxa de conversão até 3x maior com nossas estratégias.'
                    : 'Conversion rate up to 3x higher with our strategies.'}
                </p>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default CapacityDetail;
