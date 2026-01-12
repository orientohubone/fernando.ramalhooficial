
import React, { useState, useEffect } from 'react';

interface ProfileImageProps {
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ className = "" }) => {
  // Lista exaustiva de caminhos baseada em diferentes comportamentos de servidores estáticos
  const paths = [
    '/images/fernando.png',          // Padrão Next.js/Vite (Root)
    'images/fernando.png',           // Relativo
    '/public/images/fernando.png',   // Caminho sugerido pelo usuário
    'public/images/fernando.png',    // Relativo public
    './images/fernando.png',         // Relativo explícito
    './public/images/fernando.png',  // Relativo public explícito
    '/fernando.png',                 // Raiz
    'fernando.png',                  // Relativo raiz
    '/images/fernando.PNG',          // Case-sensitive variation
    '/public/images/fernando.PNG'    // Case-sensitive variation
  ];

  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [status, setStatus] = useState<'searching' | 'success' | 'failed'>('searching');
  const [triedPaths, setTriedPaths] = useState<string[]>([]);

  // Tenta carregar o próximo caminho quando um falha
  const handleError = () => {
    const failedPath = paths[currentPathIndex];
    setTriedPaths(prev => [...prev, failedPath]);
    
    if (currentPathIndex < paths.length - 1) {
      setCurrentPathIndex(prev => prev + 1);
    } else {
      console.error("[System] All asset paths exhausted for fernando.png");
      setStatus('failed');
    }
  };

  const handleSuccess = () => {
    setStatus('success');
    console.log(`%c [System] Asset resolved: ${paths[currentPathIndex]} `, 'background: #FFEE00; color: #000; font-weight: bold;');
  };

  if (status === 'failed') {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#080808] border border-neutral-900 p-8 text-center ${className}`}>
        <div className="w-12 h-12 border border-[#FFEE00]/30 rounded-full flex items-center justify-center mb-6 animate-pulse">
          <span className="text-[#FFEE00] font-black">!</span>
        </div>
        
        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FFEE00] mb-2">Asset Resolution Error</h4>
        <p className="text-[9px] text-neutral-500 uppercase tracking-widest leading-relaxed max-w-[240px] mb-8">
          O sistema não conseguiu localizar "fernando.png". Verifique se o arquivo está exatamente em <span className="text-white">public/images/</span>.
        </p>

        <div className="w-full text-left bg-black p-4 border border-neutral-900 rounded-sm">
          <p className="text-[7px] font-black text-neutral-700 uppercase tracking-[0.2em] mb-3 border-b border-neutral-900 pb-2">Tentativas de busca:</p>
          <div className="space-y-1 max-h-[100px] overflow-y-auto custom-scrollbar">
            {triedPaths.map((path, i) => (
              <div key={i} className="flex items-center gap-2 opacity-40">
                <div className="w-1 h-1 bg-red-500 rounded-full" />
                <code className="text-[8px] text-neutral-500 font-mono truncate">{path}</code>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#FFEE00] rounded-full animate-pulse" />
              <code className="text-[8px] text-[#FFEE00] font-mono italic">Aguardando arquivo...</code>
            </div>
          </div>
        </div>

        <button 
          onClick={() => { setCurrentPathIndex(0); setStatus('searching'); setTriedPaths([]); }}
          className="mt-8 text-[9px] font-black text-[#FFEE00] uppercase tracking-widest border border-[#FFEE00]/20 px-4 py-2 hover:bg-[#FFEE00] hover:text-black transition-all"
        >
          Reiniciar Varredura
        </button>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-neutral-950 ${className}`}>
      {/* Background Pulse while searching */}
      {status === 'searching' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[10px] font-black text-neutral-800 uppercase tracking-[0.8em] animate-pulse">
            Searching Asset
          </div>
        </div>
      )}

      <img
        key={currentPathIndex} // Força re-render ao trocar de path
        src={paths[currentPathIndex]}
        alt="Fernando Ramalho"
        className={`w-full h-full object-cover transition-all duration-1000 ${status === 'success' ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
        onLoad={handleSuccess}
        onError={handleError}
      />

      {/* Editorial Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 border-[20px] border-black/5 pointer-events-none" />
      
      {/* Loading Bar at bottom */}
      {status === 'searching' && (
        <div className="absolute bottom-0 left-0 h-0.5 bg-[#FFEE00] transition-all duration-300" 
             style={{ width: `${((currentPathIndex + 1) / paths.length) * 100}%` }} 
        />
      )}
    </div>
  );
};

export default ProfileImage;
