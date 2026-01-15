import React, { useState, useEffect } from 'react';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';
import { Zap, Brain, Shield, Waves, Eye } from 'lucide-react';

interface CognitiveArchitectureViewProps {
  lang: Language;
  onClose: () => void;
}

const CognitiveArchitectureView: React.FC<CognitiveArchitectureViewProps> = ({ lang, onClose }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    
    const container = document.getElementById('cognitive-architecture-container');
    const handleScroll = () => {
      if (!container) return;
      const totalHeight = container.scrollHeight - container.clientHeight;
      const progress = (container.scrollTop / totalHeight) * 100;
      setScrollProgress(progress);
    };

    container?.addEventListener('scroll', handleScroll);
    return () => {
      document.body.style.overflow = 'unset';
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const phases = [
    {
      title: "Quebra de Categoria",
      subtitle: "Descompressão Cognitiva",
      description: "Destruir o campo mental atual onde sua marca está aprisionada",
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
      color: "text-red-400"
    },
    {
      title: "Reescrita de Território", 
      subtitle: "Arquitetura do Campo Mental",
      description: "Criar um novo território de significado onde só sua marca faz sentido",
      icon: <Brain className="w-8 h-8 md:w-10 md:h-10" />,
      color: "text-yellow-400"
    },
    {
      title: "Segurança Cognitiva",
      subtitle: "Confiança Implícita",
      description: "Fazer o cérebro sentir que essa nova estrutura é segura e confiável",
      icon: <Shield className="w-8 h-8 md:w-10 md:h-10" />,
      color: "text-green-400"
    },
    {
      title: "Ativação Silenciosa",
      subtitle: "Instalação Mental",
      description: "Fazer o mercado internalizar o novo campo mental sem perceber",
      icon: <Waves className="w-8 h-8 md:w-10 md:h-10" />,
      color: "text-blue-400"
    },
    {
      title: "Domínio de Categoria",
      subtitle: "Referência Implícita",
      description: "Fazer sua marca virar referência implícita",
      icon: <Eye className="w-8 h-8 md:w-10 md:h-10" />,
      color: "text-purple-400"
    }
  ];

  const microTheses = [
    "Se o cliente precisa entender sua proposta, você já perdeu.",
    "Marcas não vendem valor. Vendem normalidade.",
    "A decisão acontece antes da comparação.",
    "Categoria é uma prisão mental.",
    "Quem controla o campo mental define o destino da compra.",
    "Ruído é o imposto de quem não controla significado.",
    "Branding não cria desejo. Cria segurança perceptiva.",
    "Comunicação é ruído sem arquitetura mental.",
    "Marcas fortes reorganizam territórios.",
    "Diferencial não é vantagem. É posição mental."
  ];

  const principles = [
    { concept: "Campo Mental", function: "Ambiente invisível onde a decisão acontece" },
    { concept: "Segurança Cognitiva", function: "Sensação implícita de 'escolha segura'" },
    { concept: "Normalidade", function: "Aquilo que parece óbvio vira padrão" },
    { concept: "Ruído", function: "Tudo que confunde, dilui ou enfraquece percepção" },
    { concept: "Categoria", function: "Prisão mental onde marcas competem" },
    { concept: "Reposicionamento", function: "Redesenho do campo perceptivo" }
  ];

  return (
    <div id="cognitive-architecture-container" className="fixed inset-0 z-[200] bg-black overflow-y-auto animate-in fade-in duration-500 selection:bg-[#FFEE00] selection:text-black scroll-smooth">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[220]">
        <div 
          className="h-full bg-[#58B573] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <nav className="sticky top-0 left-0 w-full z-[210] px-4 md:px-6 py-4 md:py-6 bg-black/95 backdrop-blur-xl border-b border-neutral-900 flex justify-between items-center">
        <button 
          onClick={onClose}
          className="flex items-center gap-2 md:gap-4 group"
        >
          <div className="w-4 md:w-6 h-[1px] bg-[#58B573] group-hover:w-6 md:group-hover:w-10 transition-all" />
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#58B573]">VOLTAR</span>
        </button>
        <BrandLogo size="md" />
      </nav>

      <article className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-32 md:pb-48">
        {/* Hero Section */}
        <header className="mb-20 md:mb-32 space-y-8 md:space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8 md:w-12 bg-[#58B573]"></div>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-[#58B573]">FRAMEWORK PROPRIETÁRIO</span>
            <span className="px-3 py-1 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] bg-[#FFEE00] text-black rounded-full">
              METODOLOGIA EXCLUSIVA
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.85]">
            Arquitetura <br />
            <span className="text-[#58B573] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Cognitiva</span> <br />
            de Categoria
          </h1>
          
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed font-medium italic border-l-4 border-[#58B573] pl-4 md:pl-8">
              A capacidade de reorganizar o campo mental onde decisões de mercado acontecem, 
              reescrevendo categorias, eliminando ruídos perceptivos e transformando marcas 
              em escolhas naturais antes da comparação.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#58B573]/10 to-transparent border-l-4 border-[#58B573] p-6 md:p-8">
            <p className="text-xl md:text-2xl font-black text-[#58B573] leading-tight">
              Marcas não competem.<br/>
              Elas operam dentro de campos perceptivos invisíveis.<br/>
              Quem controla esse campo, controla o mercado.
            </p>
          </div>
        </header>

        {/* Core Capability */}
        <section className="mb-20 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-8 md:mb-12">
            Minha <span className="text-[#58B573]">Capacidade Central</span>
          </h2>
          
          <div className="bg-neutral-950 border border-neutral-900 p-8 md:p-12">
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium mb-8">
              Eu não crio sistemas. Eu <span className="text-[#FFEE00] font-black">desenho Arquitetura de Negócio</span>.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-[#58B573] text-xl">→</span>
                <p className="text-neutral-400 text-base md:text-lg">
                  <span className="text-white font-bold">Reorganizar o campo mental</span> onde decisões acontecem
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#58B573] text-xl">→</span>
                <p className="text-neutral-400 text-base md:text-lg">
                  <span className="text-white font-bold">Redefinir categorias</span> em novos territórios de significado
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#58B573] text-xl">→</span>
                <p className="text-neutral-400 text-base md:text-lg">
                  <span className="text-white font-bold">Transformar resultados em inevitabilidades</span>
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#58B573] text-xl">→</span>
                <p className="text-neutral-400 text-base md:text-lg">
                  <span className="text-white font-bold">Criar estruturas que obrigam sistemas a existir</span>
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#58B573] text-xl">→</span>
                <p className="text-neutral-400 text-base md:text-lg">
                  <span className="text-white font-bold">Estabelecer soberania perceptiva e econômica</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Structural Principles */}
        <section className="mb-20 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-8 md:mb-12">
            Princípios <span className="text-[#FFEE00]">Estruturais</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900">
            {principles.map((principle, index) => (
              <div key={index} className="bg-neutral-950 p-6 md:p-8 group hover:bg-neutral-900 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg md:text-xl font-black text-white group-hover:text-[#FFEE00] transition-colors">
                    {principle.concept}
                  </h3>
                  <span className="text-[8px] font-mono text-neutral-600">0{index + 1}</span>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {principle.function}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Micro-Theses */}
        <section className="mb-20 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-8 md:mb-12">
            Micro-<span className="text-[#58B573]">Teses</span> Cognitivas
          </h2>
          
          <div className="space-y-4 md:space-y-6">
            {microTheses.map((thesis, index) => (
              <div key={index} className="flex gap-6 p-6 md:p-8 bg-neutral-950 border-l border-[#58B573] hover:bg-neutral-900 transition-colors group">
                <span className="text-[#58B573] font-black text-lg md:text-xl flex-shrink-0">
                  0{index + 1}
                </span>
                <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-medium group-hover:text-white transition-colors">
                  {thesis}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5 Phases Method */}
        <section className="mb-20 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-8 md:mb-12">
            Método — <span className="text-[#FFEE00]">5 Fases</span>
          </h2>
          
          <div className="space-y-8 md:space-y-12">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className={`border-l-4 ${index === activePhase ? 'border-[#58B573] bg-neutral-950' : 'border-neutral-800'} p-6 md:p-8 transition-all cursor-pointer group hover:bg-neutral-900`}
                onClick={() => setActivePhase(index)}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div id={`phase-icon-${index}`} className={`text-neutral-600 transform transition-all duration-300 hover:scale-110 group-hover:${phase.color} ${index === activePhase ? phase.color : ''}`}>
                    {phase.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 id={`phase-title-${index}`} className={`text-xl md:text-2xl font-black text-neutral-400 transition-colors duration-300 group-hover:${phase.color} ${index === activePhase ? phase.color : ''}`}>
                        {phase.title}
                      </h3>
                      <span className="text-[8px] font-mono text-neutral-600">FASE 0{index + 1}</span>
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base uppercase tracking-wider mb-4">
                      {phase.subtitle}
                    </p>
                    <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mb-20 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-8 md:mb-12">
            Proposta de <span className="text-[#58B573]">Valor</span>
          </h2>
          
          <div className="bg-gradient-to-br from-[#58B573]/10 to-[#FFEE00]/10 border border-[#58B573]/30 p-8 md:p-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-8">
              Eu não ajudo marcas a <span className="text-[#FFEE00]">venderem mais</span>.<br/>
              Eu faço marcas se tornarem <span className="text-[#58B573]">óbvias</span>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-lg font-black text-[#58B573] mb-4">O que gera:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="text-[#58B573]">→</span>
                    <span className="text-neutral-300">Referência implícita, não comparação</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#58B573]">→</span>
                    <span className="text-neutral-300">Segurança cognitiva como vantagem</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#58B573]">→</span>
                    <span className="text-neutral-300">Território de mercado próprio</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#58B573]">→</span>
                    <span className="text-neutral-300">Demanda por visão, não por serviço</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-black text-[#FFEE00] mb-4">Onde outros disputam:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="text-[#FFEE00]">→</span>
                    <span className="text-neutral-300">Preço</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#FFEE00]">→</span>
                    <span className="text-neutral-300">Tráfego</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#FFEE00]">→</span>
                    <span className="text-neutral-300">Visibilidade</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#FFEE00]">→</span>
                    <span className="text-neutral-300">Conversão</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Golden Rule */}
        <section className="mb-20 md:mb-32">
          <div className="text-center">
            <div className="inline-block">
              <h2 className="text-lg font-black uppercase tracking-[0.3em] text-neutral-600 mb-6">REGRA DE OURO</h2>
              <p className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
                Quem reorganiza percepção, não disputa atenção.<br/>
                <span className="text-[#58B573]">Domina mercados.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 md:mt-40 pt-16 md:pt-20 border-t border-neutral-900 flex flex-col items-center gap-8 md:gap-12 text-center">
           <button 
            onClick={onClose}
            className="text-2xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-[#58B573] hover:scale-105 transition-transform"
           >
             VOLTAR
           </button>
           <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src="/logofernando.png" alt="FERNANDO.RAMALHO" className="h-2" />
              <span className="text-[6px] md:text-[8px] font-mono text-neutral-800 uppercase tracking-[1em]">/ Arquiteto de Categoria 2026</span>
            </div>
            <span className="text-[6px] md:text-[8px] font-mono text-neutral-800 uppercase tracking-[0.5em]">Reorganizando percepção para dominar mercados</span>
           </div>
        </footer>
      </article>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#58B573]/5 blur-[120px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFEE00]/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
};

export default CognitiveArchitectureView;
