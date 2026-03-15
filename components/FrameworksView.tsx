import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Language, TRANSLATIONS, getFrameworks } from '../constants';
import BrandLogo from './BrandLogo';
import { Terminal, Database, Cpu, Zap, ArrowRight, Layers } from 'lucide-react';

interface FrameworksViewProps {
    lang: Language;
    onClose: () => void;
}

const FrameworksView: React.FC<FrameworksViewProps> = ({ lang, onClose }) => {
    const navigate = useNavigate();
    const t = TRANSLATIONS[lang] as any;
    const nav = TRANSLATIONS[lang].nav;

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

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

    const handleFrameworkClick = (frameworkKey: string) => {
        const allFrameworks = getFrameworks(lang).flatMap(group => group.items);
        const framework = allFrameworks.find(item => {
            const frameworkData = t.frameworks[frameworkKey as keyof typeof t.frameworks] as any;
            return frameworkData && item.title === frameworkData.title;
        });

        if (framework) {
            const slug = createSlug(framework.title);
            navigate(`/framework/${slug}`);
        }
    };

    const frameworks = [
        {
            key: 'vibeArc',
            color: '#FFEE00',
            icon: <Cpu size={24} />,
            data: t.frameworks.vibeArc
        },
        {
            key: 'backend',
            color: '#3B82F6',
            icon: <Database size={24} />,
            data: t.frameworks.backend
        },
        {
            key: 'apiInt',
            color: '#58B573',
            icon: <Terminal size={24} />,
            data: t.frameworks.apiInt
        },
        {
            key: 'deploy',
            color: '#FFEE00',
            icon: <Zap size={24} />,
            data: t.frameworks.deploy
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto overscroll-none"
        >
            {/* Top Fade Edge */}
            <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050505] to-transparent z-[120] pointer-events-none" />

            {/* Background Subtle Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#FFEE00]/5 blur-[120px] rounded-full opacity-50" />
                <div className="absolute bottom-[20%] left-[-10%] w-[30%] h-[30%] bg-[#FFEE00]/3 blur-[100px] rounded-full opacity-30" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-50 pointer-events-none" />
            </div>

            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Navigation */}
                <nav className="w-full px-6 py-6 md:px-12 flex justify-between items-center bg-transparent shrink-0">
                    <button
                        onClick={onClose}
                        className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors"
                    >
                        <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">{nav.back}</span>
                    </button>
                    <BrandLogo size="md" />
                </nav>

                <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pt-8 pb-32">
                    {/* Header */}
                    <header className="max-w-4xl mb-24 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-[#58B573]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#58B573]">ENGENHARIA ESTRUTURAL</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase text-white">
                            SISTEMAS <br />
                            <span className="text-[#FFEE00]">PROPRIETÁRIOS</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed max-w-3xl">
                            Metodologias exclusivas de building IA e engenharia cognitiva para escala exponencial e automação de alta performance.
                        </p>
                    </header>

                    {/* Grid de Frameworks */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {frameworks.map((fw, index) => (
                            <motion.div
                                key={fw.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleFrameworkClick(fw.key)}
                                className="group cursor-pointer p-7 rounded-[2rem] bg-black/60 border border-white/5 transition-all duration-500 relative overflow-hidden flex flex-col gap-6 hover:bg-black/80 h-full"
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${fw.color}4D`)}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
                            >
                                {/* Header do Card */}
                                <div className="flex justify-between items-start">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                        style={{ backgroundColor: `${fw.color}1A`, color: fw.color }}
                                    >
                                        {React.cloneElement(fw.icon as React.ReactElement, { size: 20 })}
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-neutral-500">{fw.data.category}</span>
                                    </div>
                                </div>

                                {/* Conteúdo */}
                                <div className="space-y-3">
                                    <h3 className="text-lg font-black uppercase tracking-tight text-white transition-colors leading-tight">
                                        {fw.data.title}
                                    </h3>
                                    <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                                        {fw.data.desc}
                                    </p>
                                </div>

                                {/* Tese e Footer */}
                                <div className="mt-auto space-y-4">
                                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] italic">
                                        <p className="text-[10px] text-neutral-500 leading-relaxed">
                                            "{fw.data.thesis}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 transition-transform group-hover:translate-x-1">
                                        <div
                                            className="text-[8px] font-black uppercase tracking-[0.3em]"
                                            style={{ color: fw.color }}
                                        >
                                            EXPLORAR
                                        </div>
                                        <ArrowRight size={10} style={{ color: fw.color }} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Closing Section */}
                    <footer className="mt-40 pt-20 border-t border-white/5 opacity-40">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
                            <div className="text-[9px] font-black uppercase tracking-[0.5em] text-neutral-500">
                                © 2025 FERNANDO RAMALHO. PROPRIETARY FRAMEWORKS & AI ARCO.
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#FFEE00]">SYSTEMS OVER TACTICS</span>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </motion.div>
    );
};

export default FrameworksView;
