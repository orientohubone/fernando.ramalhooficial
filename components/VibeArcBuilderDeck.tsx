import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, FileDown, Rocket, Lightbulb, Cpu, Eye, Palette, Wrench, Send, Zap, Github, Terminal, ExternalLink } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import BrandLogo from './BrandLogo';

interface Slide {
    id: number;
    title: string | React.ReactNode;
    subtitle: string;
    content: string;
    details: string[];
    icon: React.ReactNode;
    color: string;
    isCTA?: boolean;
}

const stepsPT: Slide[] = [
    {
        id: 1,
        title: "1. IDEAÇÃO",
        subtitle: "Formulação da ideia via prompt",
        content: "Antes de qualquer código, a ideia é escrita descrevendo o problema, contexto e resultado esperado.",
        details: ["Problema a resolver", "Contexto de uso", "Resultado esperado", "Restrições"],
        icon: <Lightbulb className="w-12 h-12" />,
        color: "#FFEE00"
    },
    {
        id: 2,
        title: "2. STACK",
        subtitle: "Escolha consciente tecnológica",
        content: "Seleção de frameworks baseada em escopo, escalabilidade e performance esperada.",
        details: ["Escopo da aplicação", "Escalabilidade", "Performance", "Experiência de dev"],
        icon: <Cpu className="w-12 h-12" />,
        color: "#58B573"
    },
    {
        id: 3,
        title: "3. PESQUISA",
        subtitle: "Referências em UI e Componentes",
        content: "Identificação de padrões consolidados e boas decisões de usabilidade para o repertório.",
        details: ["Padrões consolidados", "Usabilidade", "Design Systems", "Repertório"],
        icon: <Eye className="w-12 h-12" />,
        color: "#00D9FF"
    },
    {
        id: 4,
        title: "4. ANCORAGEM",
        subtitle: "Injeção de micro-componente",
        content: "Uso de um componente simples como referência visual e estrutural para a IA.",
        details: ["Cards", "Botões", "Layout simples", "Ponto de ancoragem"],
        icon: <Zap className="w-12 h-12" />,
        color: "#FF6B6B"
    },
    {
        id: 5,
        title: "5. ESTILO",
        subtitle: "Definição da Visual Identity",
        content: "Coerência visual baseada na finalidade, segmento de mercado e tipo de usuário.",
        details: ["Tipografia", "Espaçamento", "Cores", "Hierarquia"],
        icon: <Palette className="w-12 h-12" />,
        color: "#FFEE00"
    },
    {
        id: 6,
        title: "6. AMBIENTE",
        subtitle: "Seleção da ferramenta de construção",
        content: "Escolha entre Lovable, Base44, Replit ou Bolt baseada em controle e velocidade.",
        details: ["Complexidade", "Controle", "Velocidade", "Integração"],
        icon: <Wrench className="w-12 h-12" />,
        color: "#58B573"
    },
    {
        id: 7,
        title: "7. GENERATION",
        subtitle: "Injeção de prompt e materialização",
        content: "Input do prompt completo para gerar a estrutura inicial e componentes base.",
        details: ["Estrutura inicial", "Componentes base", "Organização", "Direção"],
        icon: <Send className="w-12 h-12" />,
        color: "#00D9FF"
    },
    {
        id: 8,
        title: "8. ITERAÇÃO",
        subtitle: "Refinamento progressivo guiado",
        content: "Ciclos de ajuste em layout, comportamento e lógica guiados pela intenção original.",
        details: ["Ajustes de layout", "Comportamento", "Lógica funcional", "Decisão"],
        icon: <Zap className="w-12 h-12" />,
        color: "#FF6B6B"
    },
    {
        id: 9,
        title: "9. ATIVO",
        subtitle: "Versionamento e Repositório GitHub",
        content: "Criação de repositório para histórico de evolução e base para escala.",
        details: ["Histórico", "Controle de versão", "Colaboração", "Ativo Digital"],
        icon: <Github className="w-12 h-12" />,
        color: "#FFEE00"
    },
    {
        id: 10,
        title: "10. ASSISTÊNCIA",
        subtitle: "Desenvolvimento Assistido (Windsurf)",
        content: "Transição para ambientes como Windsurf para controle total e refinamento profundo.",
        details: ["Ajustes finos", "Gestão de assets", "Variáveis", "Arquitetura"],
        icon: <Terminal className="w-12 h-12" />,
        color: "#58B573"
    },
    {
        id: 11,
        title: "11. BACKEND",
        subtitle: "Definição de Infra e Banco de Dados",
        content: "Escolha estratégica de infraestrutura serverless ou edge baseada em custo-benefício e escalabilidade.",
        details: ["Supabase", "Neon / PostgreSQL", "Firebase", "Auth & Storage"],
        icon: <Cpu className="w-12 h-12" />,
        color: "#FFEE00"
    },
    {
        id: 12,
        title: "VIBE CODING",
        subtitle: "Pronto para escalar sua ideia?",
        content: "Transforme sua visão em sistemas inteligentes e produtos digitais de alta performance.",
        details: ["Estratégia", "Design", "Tecnologia", "Inteligência"],
        icon: <BrandLogo size="lg" className="opacity-100 mix-blend-difference" />,
        color: "#FFEE00",
        isCTA: true
    }
];

const VibeArcBuilderDeck: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const fullscreenRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % stepsPT.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + stepsPT.length) % stepsPT.length);
    };

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            fullscreenRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    // Listen for fullscreen change (e.g. Esc key)
    useEffect(() => {
        const handleFSChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFSChange);
        return () => document.removeEventListener('fullscreenchange', handleFSChange);
    }, []);

    const generatePDF = async () => {
        const pdf = new jsPDF('l', 'px', [1920, 1080]);
        const originalSlide = currentSlide;

        for (let i = 0; i < stepsPT.length; i++) {
            setCurrentSlide(i);
            await new Promise(resolve => setTimeout(resolve, 800));

            if (contentRef.current) {
                const canvas = await html2canvas(contentRef.current, {
                    scale: 3,
                    useCORS: true,
                    backgroundColor: '#050505',
                    logging: false,
                    allowTaint: false
                });
                const imgData = canvas.toDataURL('image/png');
                pdf.addImage(imgData, 'PNG', 0, 0, 1920, 1080, undefined, 'FAST');
                if (i < stepsPT.length - 1) {
                    pdf.addPage();
                }
            }
        }

        pdf.save('VibeArcBuilder_Method.pdf');
        setCurrentSlide(originalSlide);
    };

    const slide = stepsPT[currentSlide];

    return (
        <div
            ref={fullscreenRef}
            className={`w-full bg-[#050505] flex flex-col transition-all duration-300 ${isFullscreen ? 'p-12' : 'p-4 md:p-8 rounded-3xl border border-neutral-800 shadow-2xl'}`}
        >
            {/* Deck Header */}
            <div className="flex justify-between items-center mb-8 px-4">
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#FFEE00] animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">METHODOLOGY DECK</span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={generatePDF}
                        className="p-2 text-neutral-500 hover:text-[#FFEE00] hover:bg-neutral-900 rounded-lg transition-all"
                        title="Download PDF"
                    >
                        <FileDown className="w-5 h-5" />
                    </button>
                    <button
                        onClick={toggleFullscreen}
                        className="p-2 text-neutral-500 hover:text-[#FFEE00] hover:bg-neutral-900 rounded-lg transition-all"
                    >
                        {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Main Slide Area */}
            <div
                ref={contentRef}
                className="relative aspect-video w-full bg-[#080808] rounded-2xl border border-neutral-900 overflow-hidden flex flex-col md:flex-row flex-1"
            >
                {/* Left Side: Icon & Title */}
                <div className="w-full md:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-neutral-900 relative">
                    <div
                        className={slide.isCTA
                            ? "mb-6 md:mb-8 transition-all duration-500 shrink-0"
                            : "mb-6 md:mb-8 w-12 h-12 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0"
                        }
                        style={slide.isCTA ? {} : { backgroundColor: `${slide.color}15`, color: slide.color }}
                    >
                        {slide.icon}
                    </div>
                    <h2 className="text-xl md:text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-4 text-white">
                        {slide.title}
                    </h2>
                    <p className="text-[10px] md:text-base lg:text-lg font-black uppercase tracking-[0.2em]" style={{ color: slide.color }}>
                        {slide.subtitle}
                    </p>
                </div>

                {/* Right Side: Content & Details */}
                <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center bg-neutral-950/30">
                    <p className="text-lg md:text-3xl text-neutral-300 font-medium leading-relaxed mb-8 md:mb-12">
                        {slide.content}
                    </p>

                    {slide.isCTA ? (
                        <div className="space-y-6">
                            <p className="text-base md:text-xl text-neutral-400 font-medium">
                                Entre em contato para escalar sua ideia:
                            </p>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFEE00]"></div>
                                    <span className="text-sm md:text-lg font-black text-white">fernandoramalhobuilder.com.br</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFEE00]"></div>
                                    <span className="text-sm md:text-lg font-black text-white">fernando@orientohub.com.br</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4">
                            {slide.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: slide.color }}></div>
                                    <span className="text-[8px] md:text-xs font-black uppercase tracking-widest text-neutral-500">
                                        {detail}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-900">
                    <div
                        className="h-full transition-all duration-700 ease-in-out"
                        style={{
                            width: `${((currentSlide + 1) / stepsPT.length) * 100}%`,
                            backgroundColor: slide.color
                        }}
                    ></div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center mt-8 px-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600">
                    STEP {currentSlide + 1} / {stepsPT.length}
                </div>
                <div className="flex items-center gap-6">
                    <button
                        onClick={prevSlide}
                        className="p-3 md:p-4 rounded-full border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-500 transition-all hover:scale-110 active:scale-95"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 md:p-4 rounded-full bg-white text-black hover:bg-[#FFEE00] transition-all hover:scale-110 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VibeArcBuilderDeck;
