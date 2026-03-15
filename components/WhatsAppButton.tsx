import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '5514998618547';
  const message = encodeURIComponent('Olá! Encontrei seu portfólio e gostaria de conversar sobre um projeto.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[95]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
        aria-label="Contato via WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          {/* Main Floating Button */}
          <motion.div
            animate={isHovered ? { scale: 1.1, rotate: 12 } : { scale: 1, rotate: 0 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] relative z-20 overflow-hidden group"
          >
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white drop-shadow-md"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"
                fill="currentColor"
              />
            </svg>
          </motion.div>

          {/* Status Indicators */}
          <div className="absolute top-0 right-0 z-30 flex items-center justify-center translate-x-1 -translate-y-1">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white shadow-sm"></span>
            </span>
          </div>

          {/* Chat Bubble / Toast */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10, x: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10, x: -10 }}
                transition={{ duration: 0.3, ease: 'backOut' }}
                className="absolute bottom-full right-0 mb-5 z-10 w-[300px]"
              >
                <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                  {/* Glass Header */}
                  <div className="p-4 bg-white/5 border-b border-white/5 flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/20 bg-neutral-800">
                        <img
                          src="/fernando.png"
                          alt="Fernando Ramalho"
                          className="w-full h-full object-cover object-[center_20%]"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-black" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">Fernando Ramalho</h4>
                      <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest">Disponível agora</p>
                    </div>
                  </div>

                  {/* Message Body */}
                  <div className="p-5">
                    <div className="bg-white/10 rounded-2xl p-4 rounded-tl-none relative mb-2">
                      <p className="text-sm text-neutral-200 leading-relaxed font-medium">
                        Olá! 👋 Sou o Fernando. Como posso ajudar na sua jornada de inovação hoje?
                      </p>
                      <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-white/10 border-l-[10px] border-l-transparent" />
                    </div>
                    <p className="text-[10px] text-neutral-500 font-medium px-1">
                      Tempo médio de resposta: <span className="text-neutral-300">5 min ⚡</span>
                    </p>
                  </div>

                  {/* Action Bar */}
                  <div className="px-5 py-4 bg-[#25D366]/5 flex items-center justify-between group/action">
                    <span className="text-[10px] text-neutral-400 font-black uppercase tracking-widest">Abrir conversa</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="bg-[#25D366] p-1.5 rounded-full"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Pointer */}
                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-black/80 rotate-45 border-r border-b border-white/10" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
