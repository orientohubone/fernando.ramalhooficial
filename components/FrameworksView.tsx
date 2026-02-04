import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Language, TRANSLATIONS, getFrameworks } from '../constants';
import BrandLogo from './BrandLogo';

interface FrameworksViewProps {
    lang: Language;
    onClose: () => void;
}

const FrameworksView: React.FC<FrameworksViewProps> = ({ lang, onClose }) => {
    const navigate = useNavigate();
    const t = TRANSLATIONS[lang] as any;

    useEffect(() => {
        window.scrollTo(0, 0);
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

    return (
        <section className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-700" aria-label="Frameworks Proprietários">
            {/* Navigation */}
            <nav className="sticky top-0 left-0 w-full z-[110] px-4 xs:px-6 py-6 xs:py-8 md:px-12 flex justify-between items-center mix-blend-difference">
                <button onClick={onClose} className="group flex items-center gap-2 xs:gap-3 xs:gap-4">
                    <div className="w-5 xs:w-6 sm:w-8 h-[1px] bg-white group-hover:w-6 xs:group-hover:w-8 sm:group-hover:w-12 transition-all duration-300" aria-hidden="true" />
                    <span className="text-[7px] xs:text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em]">VOLTAR</span>
                </button>
                <BrandLogo size="md" />
            </nav>

            <main className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-40" role="main">
                <header className="mb-16 md:mb-24 space-y-4 md:space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-8 md:w-12 bg-[#FFEE00]" aria-hidden="true"></div>
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-[#FFEE00]">FRAMEWORKS</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8]">
                        SISTEMAS <br />
                        <span className="text-[#FFEE00]">PROPRIETÁRIOS</span>
                    </h1>
                    <p className="text-base md:text-xl lg:text-2xl text-neutral-500 max-w-2xl font-medium tracking-tight">
                        Metodologias exclusivas de building IA e engenharia cognitiva para escala exponencial.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* VIBE ARC BUILDER */}
                    <div
                        onClick={() => handleFrameworkClick('vibeArc')}
                        className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900/70 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#FFEE00]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFEE00]/20 transition-colors">
                                <svg className="w-6 h-6 text-[#FFEE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-[#FFEE00] transition-colors">{t.frameworks.vibeArc.title}</h3>
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.frameworks.vibeArc.category}</p>
                            </div>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            {t.frameworks.vibeArc.desc}
                        </p>
                        <div className="text-xs text-neutral-500 italic">
                            "{t.frameworks.vibeArc.thesis}"
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-[#FFEE00] text-[10px] font-black uppercase tracking-wider">
                            EXPLORAR
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>
                    </div>

                    {/* BACKEND SCALE STRATEGY */}
                    <div
                        onClick={() => handleFrameworkClick('backend')}
                        className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900/70 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#00D9FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D9FF]/20 transition-colors">
                                <svg className="w-6 h-6 text-[#00D9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V7M4 7h16M10 11v6m4-6v6" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-[#00D9FF] transition-colors">{t.frameworks.backend.title}</h3>
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.frameworks.backend.category}</p>
                            </div>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            {t.frameworks.backend.desc}
                        </p>
                        <div className="text-xs text-neutral-500 italic">
                            "{t.frameworks.backend.thesis}"
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-[#00D9FF] text-[10px] font-black uppercase tracking-wider">
                            EXPLORAR
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>
                    </div>

                    {/* API INTEGRATION INTELLIGENCE */}
                    <div
                        onClick={() => handleFrameworkClick('apiInt')}
                        className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900/70 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#58B573]/10 rounded-full flex items-center justify-center group-hover:bg-[#58B573]/20 transition-colors">
                                <svg className="w-6 h-6 text-[#58B573]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-[#58B573] transition-colors">{t.frameworks.apiInt.title}</h3>
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.frameworks.apiInt.category}</p>
                            </div>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            {t.frameworks.apiInt.desc}
                        </p>
                        <div className="text-xs text-neutral-500 italic">
                            "{t.frameworks.apiInt.thesis}"
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-[#58B573] text-[10px] font-black uppercase tracking-wider">
                            EXPLORAR
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>
                    </div>

                    {/* DEPLOY AUTOMATION */}
                    <div
                        onClick={() => handleFrameworkClick('deploy')}
                        className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900/70 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#FFEE00]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFEE00]/20 transition-colors">
                                <svg className="w-6 h-6 text-[#FFEE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-[#FFEE00] transition-colors">{t.frameworks.deploy.title}</h3>
                                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">{t.frameworks.deploy.category}</p>
                            </div>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            {t.frameworks.deploy.desc}
                        </p>
                        <div className="text-xs text-neutral-500 italic">
                            "{t.frameworks.deploy.thesis}"
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-[#FFEE00] text-[10px] font-black uppercase tracking-wider">
                            EXPLORAR
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default FrameworksView;
