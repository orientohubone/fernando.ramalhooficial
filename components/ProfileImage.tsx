
import React, { useState, useEffect } from 'react';

interface ProfileImageProps {
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ className = "" }) => {
  // Caminhos prováveis em ambientes estáticos e servidores web
  const paths = [
    '/fernando.PNG',              // Raiz absoluta com nome correto
    'fernando.PNG',              // Raiz com nome correto
    '/fernando.png',             // Raiz absoluta
    'fernando.png',              // Raiz
    'images/fernando.PNG',       // Subpasta com nome correto
    '/images/fernando.PNG',      // Subpasta absoluta com nome correto
    'images/fernando.png',       // Subpasta
    '/images/fernando.png',      // Subpasta absoluta
    'public/fernando.PNG',       // Direto public com nome correto
    'public/images/fernando.PNG', // Completo com nome correto
    'Fernando.png'               // Case name
  ];

  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<'loading' | 'success' | 'fallback'>('loading');

  const handleNext = () => {
    if (index < paths.length - 1) {
      setIndex(prev => prev + 1);
    } else {
      setStatus('fallback');
      console.warn("[ProfileImage] Todos os caminhos de asset local falharam. Ativando visual de reserva editorial.");
    }
  };

  if (status === 'fallback') {
    return (
      <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-neutral-800 ${className}`}>
        {/* Placeholder High-End em vez de imagem quebrada */}
        <div className="relative w-full h-full flex items-center justify-center group overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,238,0,0.05)_0%,_transparent_70%)]" />
          <div className="text-center z-10 transition-transform duration-700 group-hover:scale-110">
            <h3 className="text-[#FFEE00] font-black text-6xl md:text-8xl tracking-tighter mb-2 opacity-20">FR</h3>
            <div className="h-[1px] w-8 bg-[#FFEE00]/30 mx-auto" />
          </div>
          
          {/* Grayscale overlay visual */}
          <div className="absolute inset-0 bg-neutral-900/40 mix-blend-overlay" />
          <div className="absolute inset-x-0 bottom-8 text-center">
             <span className="text-[8px] font-black uppercase tracking-[0.6em] text-neutral-600">Product Architect</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-neutral-950 ${className}`}>
      {status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
           <div className="w-8 h-[1px] bg-[#FFEE00]/20 animate-pulse" />
        </div>
      )}

      <img
        src={paths[index]}
        alt="Fernando Ramalho"
        className={`w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ${status === 'success' ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setStatus('success')}
        onError={handleNext}
      />

      {/* Overlays de estilo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 border border-white/5 pointer-events-none" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
};

export default ProfileImage;
