import React, { useState } from 'react';

const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '5514998618547';
  const message = encodeURIComponent('Olá! Encontrei seu portfólio e gostaria de conversar sobre um projeto.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div 
      className="fixed bottom-6 right-6 z-[90]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block group"
        aria-label="Contato via WhatsApp"
      >
        <div className="relative">
          {/* Botão principal com animações melhoradas */}
          <div className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-500 hover:scale-110 group-hover:rotate-12 backdrop-blur-sm">
            {/* Animação de pulso melhorada */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-30 animation-delay-200"></div>
            
            {/* Ícone do WhatsApp com animação */}
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white relative z-10 transition-transform duration-300 group-hover:scale-110"
            >
              <path 
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" 
                fill="currentColor"
              />
            </svg>
          </div>
          
          {/* Toast melhorado */}
          <div className={`absolute bottom-full right-0 mb-4 transition-all duration-500 transform ${
            isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
          } pointer-events-none`}>
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-xl p-4 min-w-[280px] max-w-[320px]">
              {/* Header do toast */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-white">Fernando Ramalho</h4>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">Online</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400">
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              
              {/* Mensagem do toast */}
              <div className="space-y-2">
                <p className="text-sm text-gray-200 leading-relaxed">
                  🚀 Pronto para transformar sua ideia em realidade?
                </p>
                <p className="text-xs text-gray-400">
                  Respondo em minutos ⚡
                </p>
              </div>
              
              {/* Footer do toast */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-700/50">
                <span className="text-xs text-gray-500">Toque para conversar</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-[#25D366] font-medium">WhatsApp</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                    <path d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
              
              {/* Seta do toast */}
              <div className="absolute top-full right-6 -mt-1">
                <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-800"></div>
              </div>
            </div>
          </div>

          {/* Indicadores de status */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
