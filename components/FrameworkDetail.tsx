import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItem, HighlightColor } from '../types';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';
import VibeArcBuilderDeck from './VibeArcBuilderDeck';

interface FrameworkDetailProps {
    item: ListItem;
    lang: Language;
    onClose: () => void;
}

const FrameworkDetail: React.FC<FrameworkDetailProps> = ({ item, lang, onClose }) => {
    const t = (TRANSLATIONS[lang] as any).sections;
    const nav = TRANSLATIONS[lang].nav;
    const colorHex = '#FFEE00';
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isVibeArc = item.title === 'Vibe Arc Builder';

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
                                FRAMEWORK / 0{item.id}
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">

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
                    </div>
                </div>

                {/* Interactive Method Deck */}
                {isVibeArc && (
                    <section className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-[#FFEE00]" />
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FFEE00]">
                                {lang === 'PT' ? 'MÉTODO VIBE CODING' : 'VIBE CODING METHOD'}
                            </h3>
                        </div>
                        <VibeArcBuilderDeck />
                    </section>
                )}
            </main>
        </div>
    );
};
export default FrameworkDetail;
