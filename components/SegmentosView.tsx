import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';
import {
    ArrowRight,
    Target,
    MessageSquare,
    Calculator,
    ShoppingBag,
    Home,
    Users,
    User,
    Cpu,
    Hammer,
    Briefcase,
    Truck,
    BookOpen,
    LineChart,
    GraduationCap,
    Utensils,
    Tv,
    TrendingUp
} from 'lucide-react';

interface SegmentosViewProps {
    lang: Language;
    onClose: () => void;
}

const SegmentosView: React.FC<SegmentosViewProps> = ({ lang, onClose }) => {
    const t = TRANSLATIONS[lang].nichos;
    const nav = TRANSLATIONS[lang].nav;

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Mapeamento de categorias para ícones
    const getIcon = (category: string) => {
        const iconSize = 14;
        const icons: Record<string, React.ReactNode> = {
            'FINANCE': <Calculator size={iconSize} />,
            'RETAIL': <ShoppingBag size={iconSize} />,
            'REAL ESTATE': <Home size={iconSize} />,
            'COMMUNITY': <Users size={iconSize} />,
            'PERSONAL BRAND': <User size={iconSize} />,
            'SaaS/TECH': <Cpu size={iconSize} />,
            'CRAFT': <Hammer size={iconSize} />,
            'B2B': <Briefcase size={iconSize} />,
            'LOGISTICS': <Truck size={iconSize} />,
            'EDUCATION': <BookOpen size={iconSize} />,
            'CONSULTING': <LineChart size={iconSize} />,
            'ACADEMIC': <GraduationCap size={iconSize} />,
            'FOOD': <Utensils size={iconSize} />,
            'MEDIA': <Tv size={iconSize} />,
            'MANAGEMENT': <TrendingUp size={iconSize} />
        };
        return icons[category] || <Target size={iconSize} />;
    };

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
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#58B573]">MAPEAMENTO DE MERCADO</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase text-white">
                            {t.subtitle.split(' ')[0]} <br />
                            <span className="text-[#FFEE00]">{t.subtitle.split(' ').slice(1).join(' ')}</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed max-w-3xl">
                            {t.description}
                        </p>
                    </header>

                    {/* Grid de Segmentos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t.items.map((nicho, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group p-8 rounded-[2rem] bg-black/60 border border-white/5 transition-all duration-500 relative overflow-hidden flex flex-col justify-between aspect-[4/3] md:aspect-square hover:bg-black/80"
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#FFEE004D')}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
                            >
                                {/* Index Decoration */}
                                <span className="absolute -right-4 -bottom-4 text-[120px] font-black text-white/[0.02] group-hover:text-[#FFEE00]/[0.05] transition-colors duration-700 pointer-events-none font-mono">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>

                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="text-[#58B573]">
                                            {getIcon(nicho.category)}
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#58B573]">
                                            {nicho.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:text-[#FFEE00] transition-colors duration-300 leading-none">
                                        {nicho.title}
                                    </h3>
                                </div>

                                <div className="relative z-10 mt-auto">
                                    <div className="h-[1px] w-8 bg-neutral-800 group-hover:w-full group-hover:bg-[#FFEE00]/30 transition-all duration-700 mb-6" />

                                    <div className="space-y-3">
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#58B573]">
                                            {lang === 'PT' ? 'CAPACIDADES APLICADAS' : 'APPLIED CAPABILITIES'}
                                        </span>
                                        <p className="text-sm md:text-base text-neutral-400 font-medium leading-relaxed group-hover:text-neutral-200 transition-colors">
                                            {nicho.desc.includes(':') ? nicho.desc.split(':')[1].trim() : nicho.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Closing CTA */}
                    <section className="mt-40 text-center space-y-12">
                        <div className="inline-flex flex-col items-center gap-6">
                            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#58B573]" />
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white max-w-4xl leading-[0.9]">
                                Sua indústria <span className="text-[#FFEE00]">não é o limite</span>. <br />
                                A lógica estratégica é universal.
                            </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="https://wa.me/5514998618547"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 rounded-full bg-[#FFEE00] text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all flex items-center justify-center gap-3"
                            >
                                <MessageSquare size={16} />
                                {lang === 'PT' ? 'FALAR COM ESTRATEGISTA' : 'TALK TO STRATEGIST'}
                            </a>

                            <button
                                onClick={onClose}
                                className="px-10 py-5 rounded-full bg-transparent border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all"
                            >
                                {nav.back}
                            </button>
                        </div>
                    </section>
                </main>

                <footer className="px-6 md:px-12 py-12 border-t border-white/5 opacity-40 mt-auto">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
                        <div className="text-[9px] font-black uppercase tracking-[0.5em] text-neutral-500">
                            © 2025 FERNANDO RAMALHO. SEGMENTS & MARKET INTELLIGENCE.
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#FFEE00]">STRATEGIC DOMINANCE</span>
                        </div>
                    </div>
                </footer>
            </div>
        </motion.div>
    );
};

export default SegmentosView;
