
import React, { useEffect } from 'react';
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
  const colorHex = item.color === HighlightColor.YELLOW ? '#FFEE00' : '#58B573';

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
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20">
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
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20">
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
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20">
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
                      <div className="w-12 h-12 rounded-full bg-[#FFEE00]/10 border-2 border-[#FFEE00] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FFEE00]">1</span>
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
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20">
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
                      <div className="w-12 h-12 rounded-full bg-[#FFEE00]/10 border-2 border-[#FFEE00] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FFEE00]">2</span>
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
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20">
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
                      <div className="w-12 h-12 rounded-full bg-[#FFEE00]/10 border-2 border-[#FFEE00] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FFEE00]">3</span>
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
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20">
                          {lang === 'PT' ? '4-6 semanas' : '4-6 weeks'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'DESENVOLVIMENTO' : 'DEVELOPMENT'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Summary */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#FFEE00]/5 to-transparent border-l-4 border-[#FFEE00]">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#FFEE00] mb-3">
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
                      <div className="w-12 h-12 rounded-full bg-[#FFEE00]/10 border-2 border-[#FFEE00] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FFEE00]">1</span>
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
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20">
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
                      <div className="w-12 h-12 rounded-full bg-[#FFEE00]/10 border-2 border-[#FFEE00] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FFEE00]">2</span>
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
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20">
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
                      <div className="w-12 h-12 rounded-full bg-[#FFEE00]/10 border-2 border-[#FFEE00] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FFEE00]">3</span>
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
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20">
                          {lang === 'PT' ? '2-3 dias' : '2-3 days'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'DEPLOY' : 'DEPLOY'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Summary */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#FFEE00]/5 to-transparent border-l-4 border-[#FFEE00]">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#FFEE00] mb-3">
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
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Depósito do Pedido' : 'Application Filing'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Elaboração e protocolo do pedido de registro com especificação correta de classes e produtos/serviços.'
                          : 'Preparation and filing of registration application with correct specification of classes and products/services.'}
                      </p>
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
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-black uppercase text-white">
                        {lang === 'PT' ? 'Concessão e Certificado' : 'Grant and Certificate'}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {lang === 'PT'
                          ? 'Emissão do certificado de registro e início da vigência de proteção por 10 anos (renovável).'
                          : 'Issuance of registration certificate and beginning of 10-year protection period (renewable).'}
                      </p>
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
                      <div className="w-12 h-12 rounded-full bg-[#FFEE00]/10 border-2 border-[#FFEE00] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FFEE00]">1</span>
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
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20">
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
                      <div className="w-12 h-12 rounded-full bg-[#FFEE00]/10 border-2 border-[#FFEE00] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FFEE00]">2</span>
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
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20">
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
                      <div className="w-12 h-12 rounded-full bg-[#FFEE00]/10 border-2 border-[#FFEE00] flex items-center justify-center">
                        <span className="text-xl font-black text-[#FFEE00]">3</span>
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
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-[#FFEE00]/10 text-[#FFEE00] border border-[#FFEE00]/20">
                          {lang === 'PT' ? '1 dia' : '1 day'}
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-neutral-800 text-neutral-400">
                          {lang === 'PT' ? 'RECORDS' : 'RECORDS'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Summary */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#FFEE00]/5 to-transparent border-l-4 border-[#FFEE00]">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#FFEE00] mb-3">
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
                    {item.id <= 3 ? '10+' : '5+'}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600">
                    {lang === 'PT' ? 'ANOS EXP.' : 'YEARS EXP.'}
                  </span>
                </div>
                <div className="p-6 border border-neutral-900 bg-neutral-950/50 text-center">
                  <span className="block text-3xl font-black" style={{ color: colorHex }}>
                    {item.id <= 4 ? '50+' : '30+'}
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <button
            onClick={onClose}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter hover:text-[#FFEE00] transition-colors"
          >
            {nav.back}
          </button>
          <div className="h-[2px] flex-1 bg-neutral-900 mx-12 hidden md:block" />
          <div className="flex items-center gap-2">
            <img src="/logofernando.png" alt="FERNANDO.RAMALHO" className="h-3" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-neutral-600">
              / SYSTEMS FOR DOMINANCE
            </span>
          </div>
        </div>
      </footer >
    </div >
  );
};

export default CapacityDetail;
