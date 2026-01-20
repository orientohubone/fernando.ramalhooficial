
import React from 'react';
import { Link } from 'react-router-dom';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';
import CommitsGrid from './CommitsGrid';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer id="contact" className="px-6 md:px-12 py-24 bg-[#050505] border-t border-neutral-900" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="max-w-2xl flex flex-col gap-6">

            <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-tight mt-2 uppercase">
              {t.cta.split(' ').slice(0, -1).join(' ')} <span className="text-[#5AB473] italic">{t.cta.split(' ').slice(-1)}</span>
            </h2>

            <address className="flex flex-wrap gap-8 items-center mt-2 not-italic">
              <a href="mailto:fernando@orientohub.com.br" className="text-base md:text-lg font-black uppercase tracking-widest border-b-2 border-[#5AB473] pb-1 hover:bg-[#5AB473] hover:text-black transition-all">
                fernando@orientohub.com.br
              </a>
            </address>
          </div>

          <div className="flex flex-col gap-6 items-start md:items-end">
            <nav className="flex flex-wrap gap-6 items-center justify-start md:justify-end" role="navigation" aria-label="Redes sociais e links">
              <a href="https://orientohub.com.br/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5AB473] hover:text-white transition-colors">FOUNDER @ ORIENTOHUB</a>
              <div className="w-[1px] h-4 bg-neutral-800 hidden md:block" aria-hidden="true" />
              <a href="https://www.behance.net/fernandoramalho1" target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-[0.3em] text-white hover:text-[#5AB473] transition-colors">Behance</a>
              <a href="https://www.linkedin.com/in/fernandolsr/" target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-600 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/fernando.ramalhooficial/" target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-600 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-600 hover:text-white transition-colors">X / Twitter</a>
            </nav>
            <div className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-600 text-left md:text-right leading-loose">
              {t.rights} <br />
              SYSTEMS FOR DOMINANCE
            </div>
            <img
              src="/logofernando.png"
              alt="FERNANDO.RAMALHO"
              className="h-3 w-auto"
            />
          </div>
        </section>

        {/* Sitemap Section */}
        <section className="border-t border-neutral-900/50 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            
            {/* CAPACIDADES */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#5AB473] mb-6">
                {lang === 'PT' ? 'CAPACIDADES' : 'CAPABILITIES'}
              </h3>
              <nav className="space-y-3" role="navigation" aria-label="Capacidades e serviços">
                <Link to={lang === 'EN' ? '/en/capacidades' : '/capacidades'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'Todas as Capacidades' : 'All Capabilities'}
                </Link>
                <Link to={lang === 'EN' ? '/en/capacidade/ecommerce' : '/capacidade/ecommerce'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  Ecommerce
                </Link>
                <Link to={lang === 'EN' ? '/en/capacidade/ia' : '/capacidade/ia'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'IA' : 'AI'}
                </Link>
                <Link to={lang === 'EN' ? '/en/arquitetura-cognitiva' : '/arquitetura-cognitiva'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'Arquitetura Cognitiva' : 'Cognitive Architecture'}
                </Link>
                <Link to={lang === 'EN' ? '/en/capacidade/marketing' : '/capacidade/marketing'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  Marketing
                </Link>
              </nav>
            </div>

            {/* RELATÓRIOS */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#5AB473] mb-6">
                {lang === 'PT' ? 'RELATÓRIOS' : 'REPORTS'}
              </h3>
              <nav className="space-y-3" role="navigation" aria-label="Relatórios e inteligência">
                <Link to={lang === 'EN' ? '/en/relatorios' : '/relatorios'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'Todos os Relatórios' : 'All Reports'}
                </Link>
                <Link to={lang === 'EN' ? '/en/relatorios' : '/relatorios'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  SAAS 2026
                </Link>
                <Link to={lang === 'EN' ? '/en/relatorios' : '/relatorios'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'Mercado & IA' : 'Market & AI'}
                </Link>
                <Link to={lang === 'EN' ? '/en/relatorios' : '/relatorios'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'Algoritmos' : 'Algorithms'}
                </Link>
                <Link to={lang === 'EN' ? '/en/relatorios' : '/relatorios'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'Educação' : 'Education'}
                </Link>
              </nav>
            </div>

            {/* EMPRESA */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#5AB473] mb-6">
                {lang === 'PT' ? 'EMPRESA' : 'COMPANY'}
              </h3>
              <nav className="space-y-3" role="navigation" aria-label="Informações da empresa">
                <Link to={lang === 'EN' ? '/en/about' : '/sobre'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'Sobre Fernando' : 'About Fernando'}
                </Link>
                <Link to={lang === 'EN' ? '/en/filosofia' : '/filosofia'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'Filosofia' : 'Philosophy'}
                </Link>
                <Link to={lang === 'EN' ? '/en/contato' : '/contato'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'Contato' : 'Contact'}
                </Link>
                <a href="https://orientohub.com.br/" target="_blank" rel="noopener noreferrer" className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  OrientoHub
                </a>
                <a href="https://wa.me/5514998618547" target="_blank" rel="noopener noreferrer" className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'WhatsApp' : 'WhatsApp'}
                </a>
              </nav>
            </div>

            {/* LEGAL */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#5AB473] mb-6">
                {lang === 'PT' ? 'LEGAL' : 'LEGAL'}
              </h3>
              <nav className="space-y-3" role="navigation" aria-label="Informações legais">
                <Link to={lang === 'EN' ? '/en/privacy-policy' : '/politica-de-privacidade'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'Política de Privacidade' : 'Privacy Policy'}
                </Link>
                <Link to={lang === 'EN' ? '/en/terms-of-use' : '/termos-de-uso'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'Termos de Uso' : 'Terms of Use'}
                </Link>
                <Link to={lang === 'EN' ? '/en/lgpd' : '/lgpd'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  LGPD
                </Link>
                <Link to={lang === 'EN' ? '/en/cookie-policy' : '/politica-de-cookies'} className="block text-sm text-neutral-400 hover:text-white transition-colors">
                  {lang === 'PT' ? 'Política de Cookies' : 'Cookie Policy'}
                </Link>
              </nav>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center gap-2 pt-8 border-t border-neutral-900/50">
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-600">
            feito no
          </span>
          <img
            src="/bandeira-brasil.svg"
            alt="Bandeira do Brasil"
            className="w-6 h-4 object-contain"
          />
        </section>

        <section className="flex justify-center items-center pt-8 border-t border-neutral-900/50">
          <div className="text-[8px] font-black uppercase tracking-[0.4em] text-neutral-600 text-center">
            © 2024 FERNANDO RAMALHO. {lang === 'PT' ? 'TODOS OS DIREITOS RESERVADOS' : 'ALL RIGHTS RESERVED'}
          </div>
        </section>

        <section className="relative flex justify-center items-center pt-12 border-t border-neutral-900/50">
          {/* Glow Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[100%] bg-[#5AB473]/10 blur-[100px] rounded-full"></div>
          </div>

          <div className="relative flex flex-col items-center gap-8">
            <CommitsGrid text="O FUTURO COMEÇOU" />
            <p className="text-[9px] font-black uppercase tracking-[0.6em] text-neutral-400 text-center animate-pulse">
              A INOVAÇÃO NÃO ESPERA
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
