import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../constants';

interface NotFoundProps {
  lang?: Language;
}

const NotFound: React.FC<NotFoundProps> = ({ lang = 'PT' }) => {
  const isEN = lang === 'EN';
  
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] z-0"></div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#58B573]/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 text-center max-w-2xl">
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-900 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[150px] md:text-[200px] font-black text-[#58B573] opacity-20 blur-xl leading-none">
              404
            </span>
          </div>
        </div>
        
        {/* Message */}
        <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
          {isEN ? 'Page Not Found' : 'Página Não Encontrada'}
        </h1>
        
        <p className="text-neutral-400 text-sm md:text-base mb-8 max-w-md mx-auto">
          {isEN 
            ? 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'
            : 'A página que você procura pode ter sido removida, teve seu nome alterado, ou está temporariamente indisponível.'
          }
        </p>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={isEN ? '/en' : '/'}
            className="px-8 py-4 bg-[#58B573] text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-[#4a9d62] transition-all shadow-[0_0_30px_rgba(88,181,115,0.3)] hover:shadow-[0_0_40px_rgba(88,181,115,0.5)]"
          >
            {isEN ? 'Back to Home' : 'Voltar ao Início'}
          </Link>
          
          <Link
            to={isEN ? '/en/contato' : '/contato'}
            className="px-8 py-4 bg-transparent border-2 border-neutral-700 text-white font-black text-xs uppercase tracking-widest rounded-full hover:border-[#58B573] hover:text-[#58B573] transition-all"
          >
            {isEN ? 'Contact Us' : 'Fale Conosco'}
          </Link>
        </div>
        
        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <p className="text-neutral-500 text-xs uppercase tracking-widest mb-6">
            {isEN ? 'Popular Pages' : 'Páginas Populares'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={isEN ? '/en/capacidades' : '/capacidades'} className="text-neutral-400 hover:text-[#58B573] text-sm transition-colors">
              {isEN ? 'Capabilities' : 'Capacidades'}
            </Link>
            <span className="text-neutral-700">•</span>
            <Link to={isEN ? '/en/relatorios' : '/relatorios'} className="text-neutral-400 hover:text-[#58B573] text-sm transition-colors">
              Intelligence Hub
            </Link>
            <span className="text-neutral-700">•</span>
            <Link to={isEN ? '/en/sobre' : '/sobre'} className="text-neutral-400 hover:text-[#58B573] text-sm transition-colors">
              {isEN ? 'About' : 'Sobre'}
            </Link>
            <span className="text-neutral-700">•</span>
            <Link to={isEN ? '/en/frameworks' : '/frameworks'} className="text-neutral-400 hover:text-[#58B573] text-sm transition-colors">
              Frameworks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
