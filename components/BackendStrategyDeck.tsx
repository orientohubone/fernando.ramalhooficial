import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, FileDown, Database, Zap, Shield, Globe, BarChart3, Cloud, Layers, ExternalLink } from 'lucide-react';
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

const backendStepsPT: Slide[] = [
    {
        id: 1,
        title: "1. FUNDAÇÃO",
        subtitle: "O Backend como ativo estratégico",
        content: "A infraestrutura não é apenas código, é o limite da sua escalabilidade. Definir a base certa hoje evita o débito técnico de amanhã.",
        details: ["Escalabilidade", "Custo-Benefício", "Performance", "Segurança"],
        icon: <Layers className="w-12 h-12" />,
        color: "#00D9FF"
    },
    {
        id: 2,
        title: "2. SUPABASE",
        subtitle: "A alternativa Open Source ao Firebase",
        content: "Baseado em PostgreSQL, oferece Auth, Realtime, Storage e Edge Functions em um pacote unificado e previsível.",
        details: ["Predictable Pricing", "Full Postgres access", "Built-in Auth", "Real-time engine"],
        icon: <Database className="w-12 h-12" />,
        color: "#58B573"
    },
    {
        id: 3,
        title: "3. NEON DB",
        subtitle: "PostgreSQL Serverless e Elasticidade",
        content: "Separação total entre compute e storage. Escala para zero quando não usado, reduzindo custos drasticamente em AI e Dev environments.",
        details: ["Scale to zero", "Instant Branching", "Performance Edge", "Postgres Native"],
        icon: <Zap className="w-12 h-12" />,
        color: "#FFEE00"
    },
    {
        id: 4,
        title: "4. FIREBASE",
        subtitle: "O Ecossistema Real-time do Google",
        content: "Ideal para prototipagem ultra-rápida e mobile, mas requer cuidado com a escala de preços no plano Blaze.",
        details: ["NoSQL Flexibility", "Google Integration", "Edge Presence", "Fast Prototyping"],
        icon: <Cloud className="w-12 h-12" />,
        color: "#FF6B6B"
    },
    {
        id: 5,
        title: "5. ECONOMIA",
        subtitle: "Comparativo de Custo e Benefício",
        content: "Neon reduziu preços de storage em 80% em 2025. Supabase mantém $25 fixo. Firebase é pay-as-you-go puro.",
        details: ["Predictability vs Usage", "Free Tier limits", "Egress costs", "Compute credits"],
        icon: <BarChart3 className="w-12 h-12" />,
        color: "#00D9FF"
    },
    {
        id: 6,
        title: "6. ESCALA",
        subtitle: "Arquitetura para Milhões de Usuários",
        content: "Connection pooling, Read Replicas e sharding. A escolha depende da complexidade das suas queries relacionais.",
        details: ["Horizonal Scaling", "Connection Pooling", "Edge Functions", "Global Latency"],
        icon: <Globe className="w-12 h-12" />,
        color: "#58B573"
    },
    {
        id: 7,
        title: "7. SEGURANÇA",
        subtitle: "Compliance e Governança de Dados",
        content: "RLS (Row Level Security) nativo no Postgres é a barreira definitiva para proteger dados de usuários em multi-tenant SaaS.",
        details: ["RLS Policies", "SOC2 / HIPAA", "Encryption at rest", "Auth Guard"],
        icon: <Shield className="w-12 h-12" />,
        color: "#FFEE00"
    },
    {
        id: 8,
        title: "VIBE CODING",
        subtitle: "Pronto para escalar sua infra?",
        content: "Construa backends que não quebram e não custam o que não deveriam. Arquitetura inteligente é eficiência financeira.",
        details: ["Scale Strategy", "Cost Control", "Cloud Native", "AI Ready"],
        icon: <BrandLogo size="lg" className="opacity-100 mix-blend-difference" />,
        color: "#00D9FF",
        isCTA: true
    }
];

const BackendStrategyDeck: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const fullscreenRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % backendStepsPT.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + backendStepsPT.length) % backendStepsPT.length);
    };

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

        for (let i = 0; i < backendStepsPT.length; i++) {
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
                if (i < backendStepsPT.length - 1) {
                    pdf.addPage();
                }
            }
        }

        pdf.save('Backend_Scale_Strategy.pdf');
        setCurrentSlide(originalSlide);
    };

    const slide = backendStepsPT[currentSlide];

    return (
        <div
            ref={fullscreenRef}
            className={`w-full bg-[#050505] flex flex-col transition-all duration-300 ${isFullscreen ? 'p-12' : 'p-4 md:p-8 rounded-3xl border border-neutral-800 shadow-2xl'}`}
        >
            <div className="flex justify-between items-center mb-8 px-4">
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: slide.color }}></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">BACKEND ECOSYSTEM</span>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={generatePDF} className="p-2 text-neutral-500 hover:text-white transition-all">
                        <FileDown className="w-5 h-5" />
                    </button>
                    <button onClick={toggleFullscreen} className="p-2 text-neutral-500 hover:text-white transition-all">
                        {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            <div ref={contentRef} className="relative aspect-video w-full bg-[#080808] rounded-2xl border border-neutral-900 overflow-hidden flex flex-col md:flex-row flex-1">
                <div className="w-full md:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-neutral-900 relative">
                    <div className={slide.isCTA ? "mb-6" : "mb-6 w-12 h-12 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-500"}
                        style={slide.isCTA ? {} : { backgroundColor: `${slide.color}15`, color: slide.color }}>
                        {slide.icon}
                    </div>
                    <h2 className="text-xl md:text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-4 text-white">
                        {slide.title}
                    </h2>
                    <p className="text-[10px] md:text-base lg:text-lg font-black uppercase tracking-[0.2em]" style={{ color: slide.color }}>
                        {slide.subtitle}
                    </p>
                </div>

                <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center bg-neutral-950/30">
                    <p className="text-lg md:text-3xl text-neutral-300 font-medium leading-relaxed mb-8 md:mb-12">
                        {slide.content}
                    </p>

                    {slide.isCTA ? (
                        <div className="space-y-6">
                            <p className="text-base md:text-xl text-neutral-400 font-medium">
                                Entre em contato para escalar sua infra:
                            </p>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]"></div>
                                    <span className="text-sm md:text-lg font-black text-white">fernandoramalhobuilder.com.br</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]"></div>
                                    <span className="text-sm md:text-lg font-black text-white">fernando@orientohub.com.br</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4">
                            {slide.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: slide.color }}></div>
                                    <span className="text-[8px] md:text-xs font-black uppercase tracking-widest text-neutral-500">{detail}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-900">
                    <div className="h-full transition-all duration-700 ease-in-out"
                        style={{ width: `${((currentSlide + 1) / backendStepsPT.length) * 100}%`, backgroundColor: slide.color }}></div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-8 px-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600">
                    SLIDE {currentSlide + 1} / {backendStepsPT.length}
                </div>
                <div className="flex items-center gap-6">
                    <button onClick={prevSlide} className="p-3 md:p-4 rounded-full border border-neutral-800 text-neutral-500 hover:text-white transition-all">
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button onClick={nextSlide} className="p-3 md:p-4 rounded-full bg-white text-black hover:bg-neutral-200 transition-all shadow-xl">
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BackendStrategyDeck;
