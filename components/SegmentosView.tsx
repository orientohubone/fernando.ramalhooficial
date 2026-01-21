import React, { useEffect } from 'react';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';

interface SegmentosViewProps {
    lang: Language;
    onClose: () => void;
}

const SegmentosView: React.FC<SegmentosViewProps> = ({ lang, onClose }) => {
    const t = TRANSLATIONS[lang].nichos;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-700" aria-label="Segmentos Atendidos">
            {/* Navigation */}
            <nav className="sticky top-0 left-0 w-full z-[110] px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference" role="navigation">
                <button onClick={onClose} className="group flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" aria-hidden="true" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">{lang === 'PT' ? 'VOLTAR' : 'BACK'}</span>
                </button>
                <BrandLogo size="md" />
            </nav>

            <main className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-40">
                <header className="mb-16 md:mb-24 space-y-4 md:space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-8 md:w-12 bg-[#FFEE00]" aria-hidden="true"></div>
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-[#FFEE00]">{t.title}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8]">
                        {t.subtitle.split(' ')[0]} <br />
                        <span className="text-[#58B573] italic">{t.subtitle.split(' ')[1]}</span>
                    </h1>
                    <p className="text-base md:text-xl lg:text-2xl text-neutral-500 max-w-2xl font-medium tracking-tight">
                        {t.description}
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {t.items.map((nicho, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-neutral-900/30 border border-neutral-800/50 hover:border-[#FFEE00]/30 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Number background decoration */}
                            <span className="absolute -right-4 -bottom-8 text-[120px] font-black text-white/[0.02] group-hover:text-[#FFEE00]/[0.05] transition-colors duration-500 pointer-events-none">
                                {index + 1}
                            </span>

                            <div className="relative z-10 space-y-4">
                                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#58B573]">
                                    {nicho.category}
                                </span>
                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#FFEE00] transition-colors duration-300">
                                    {nicho.title}
                                </h3>
                                <div className="h-[1px] w-8 bg-neutral-800 group-hover:w-16 group-hover:bg-[#FFEE00] transition-all duration-500" />

                                <div className="mt-6 pt-6 border-t border-neutral-800/50">
                                    <div className="bg-white/[0.03] border-l-2 border-[#58B573] p-4 group-hover:bg-[#58B573]/10 transition-all duration-500 rounded-r-lg">
                                        <p className="text-neutral-400 text-xs md:text-sm leading-relaxed font-bold group-hover:text-white transition-colors duration-300">
                                            <span className="text-[#58B573] font-black uppercase tracking-[0.2em] block mb-2 text-[9px]">
                                                {lang === 'PT' ? 'CAPACIDADES APLICADAS' : 'APPLIED CAPABILITIES'}
                                            </span>
                                            {nicho.desc.includes(':') ? nicho.desc.split(':')[1].trim() : nicho.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing CTA */}
                <div className="mt-32 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                        {lang === 'PT' ? 'SEU SEGMENTO NÃO ESTÁ AQUI?' : 'YOUR SEGMENT IS NOT HERE?'}
                    </h2>
                    <p className="text-neutral-500 max-w-xl mx-auto text-sm md:text-base uppercase font-bold tracking-widest">
                        {lang === 'PT'
                            ? 'A lógica estratégica é universal. Vamos arquitetar sua dominância.'
                            : 'Strategic logic is universal. Let\'s architect your dominance.'}
                    </p>
                    <a
                        href="https://wa.me/5514998618547"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-12 py-6 bg-white text-black font-black text-sm uppercase tracking-[0.2em] hover:bg-[#FFEE00] transition-all duration-300"
                    >
                        {lang === 'PT' ? 'FALAR COM ESTRATEGISTA' : 'TALK TO STRATEGIST'}
                    </a>
                </div>
            </main>
        </section>
    );
};

export default SegmentosView;
