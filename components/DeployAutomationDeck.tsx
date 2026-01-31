import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, FileDown, GitBranch, Rocket, Zap, Globe, Settings, CheckCircle, ExternalLink } from 'lucide-react';
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

const deployStepsPT: Slide[] = [
    {
        id: 1,
        title: "1. REPOSITÓRIO",
        subtitle: "Git como fonte da verdade",
        content: "Conecte seu repositório GitHub, GitLab ou Bitbucket. O deploy começa no momento do commit.",
        details: ["GitHub Integration", "GitLab Support", "Bitbucket Sync", "Branch Strategy"],
        icon: <GitBranch className="w-12 h-12" />,
        color: "#FFEE00"
    },
    {
        id: 2,
        title: "2. NETLIFY",
        subtitle: "Edge-first deployment platform",
        content: "Deploy instantâneo com CDN global, serverless functions e preview automático para cada PR.",
        details: ["Instant Rollback", "Edge Functions", "Split Testing", "Form Handling"],
        icon: <Rocket className="w-12 h-12" />,
        color: "#00D9FF"
    },
    {
        id: 3,
        title: "3. VERCEL",
        subtitle: "Otimizado para frameworks modernos",
        content: "Performance extrema com Edge Network, ISR (Incremental Static Regeneration) e Analytics integrado.",
        details: ["Next.js Native", "Edge Runtime", "Analytics", "Preview URLs"],
        icon: <Zap className="w-12 h-12" />,
        color: "#58B573"
    },
    {
        id: 4,
        title: "4. BUILD",
        subtitle: "Processo automatizado de compilação",
        content: "Detecção automática de framework, otimização de assets e build cache para deploys mais rápidos.",
        details: ["Auto Framework", "Build Cache", "Asset Optimization", "Env Variables"],
        icon: <Settings className="w-12 h-12" />,
        color: "#FFEE00"
    },
    {
        id: 5,
        title: "5. PREVIEW",
        subtitle: "Ambientes efêmeros por branch",
        content: "Cada Pull Request gera uma URL única de preview para validação antes do merge em produção.",
        details: ["PR Previews", "Branch Deploys", "Unique URLs", "Instant Feedback"],
        icon: <Globe className="w-12 h-12" />,
        color: "#00D9FF"
    },
    {
        id: 6,
        title: "6. PRODUCTION",
        subtitle: "Deploy atômico e instantâneo",
        content: "Atomic deploys garantem que o site nunca fica em estado inconsistente. Rollback em 1 clique.",
        details: ["Atomic Deploy", "Zero Downtime", "Instant Rollback", "CDN Purge"],
        icon: <CheckCircle className="w-12 h-12" />,
        color: "#58B573"
    },
    {
        id: 7,
        title: "7. MONITORAMENTO",
        subtitle: "Observabilidade em tempo real",
        content: "Logs de build, analytics de performance e alertas automáticos para erros em produção.",
        details: ["Build Logs", "Real-time Analytics", "Error Tracking", "Performance Metrics"],
        icon: <Settings className="w-12 h-12" />,
        color: "#FFEE00"
    },
    {
        id: 8,
        title: "VIBE CODING",
        subtitle: "Pronto para automatizar seus deploys?",
        content: "Transforme git push em produção instantânea. Deploy não deve ser complexo, deve ser invisível.",
        details: ["Git Push Deploy", "Zero Config", "Global CDN", "Auto Scale"],
        icon: <BrandLogo size="lg" className="opacity-100 mix-blend-difference" />,
        color: "#FFEE00",
        isCTA: true
    }
];

const DeployAutomationDeck: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const fullscreenRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % deployStepsPT.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + deployStepsPT.length) % deployStepsPT.length);
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

        for (let i = 0; i < deployStepsPT.length; i++) {
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
                if (i < deployStepsPT.length - 1) {
                    pdf.addPage();
                }
            }
        }

        pdf.save('Deploy_Automation.pdf');
        setCurrentSlide(originalSlide);
    };

    const slide = deployStepsPT[currentSlide];

    return (
        <div
            ref={fullscreenRef}
            className={`w-full bg-[#050505] flex flex-col transition-all duration-300 ${isFullscreen ? 'p-12' : 'p-4 md:p-8 rounded-3xl border border-neutral-800 shadow-2xl'}`}
        >
            <div className="flex justify-between items-center mb-8 px-4">
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: slide.color }}></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">DEPLOY AUTOMATION</span>
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
                                Entre em contato para automatizar seus deploys:
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
                                    <span className="text-[8px] md:text-xs font-black uppercase tracking-widest text-neutral-500">{detail}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-900">
                    <div className="h-full transition-all duration-700 ease-in-out"
                        style={{ width: `${((currentSlide + 1) / deployStepsPT.length) * 100}%`, backgroundColor: slide.color }}></div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-8 px-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600">
                    STEP {currentSlide + 1} / {deployStepsPT.length}
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

export default DeployAutomationDeck;
