import React from 'react';
import { useNavigate } from 'react-router-dom';

const PoliticaCookies: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 px-6 py-8 md:px-12 bg-black/90 backdrop-blur border-b border-neutral-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-4"
          >
            <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">VOLTAR</span>
          </button>
          <div className="text-white font-black text-xl">FERNANDO RAMALHO</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-24">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-[#58B573]" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#58B573]">
              DOCUMENTO LEGAL
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.8]">
            Política de <br />
            <span className="text-[#FFEE00]">Cookies</span>
          </h1>
          
          <p className="text-sm text-neutral-500">
            Última atualização: 20 de Janeiro de 2026
          </p>

          <div className="space-y-12 py-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. O que são Cookies?</h2>
              <p className="text-neutral-300 leading-relaxed">
                Cookies são pequenos arquivos de texto armazenados em seu dispositivo que contêm informações para melhorar sua experiência de navegação.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Cookies que Usamos</h2>
              <p className="text-neutral-300 leading-relaxed">
                Cookies essenciais (necessários), cookies de desempenho (analytics), cookies de funcionalidade (preferências) e cookies de marketing (personalização).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Gerenciamento de Cookies</h2>
              <p className="text-neutral-300 leading-relaxed">
                Você pode gerenciar cookies através das configurações do seu navegador. Desativar cookies essenciais pode afetar funcionalidades do site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Cookies de Terceiros</h2>
              <p className="text-neutral-300 leading-relaxed">
                Utilizamos Google Analytics para análise de tráfego. Esses serviços têm suas próprias políticas de privacidade.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Atualizações desta Política</h2>
              <p className="text-neutral-300 leading-relaxed">
                Podemos atualizar esta política periodicamente. Alterações significativas serão comunicadas proativamente.
              </p>
            </section>
          </div>

          {/* Contact Section */}
          <section className="mt-20 p-8 border border-neutral-800 rounded-xl bg-neutral-950/50">
            <h3 className="text-xl font-bold text-white mb-4">Entre em Contato</h3>
            <div className="space-y-3">
              <p className="text-neutral-300">
                <strong>Email:</strong> fernando@orientohub.com.br
              </p>
              <p className="text-neutral-300">
                <strong>WhatsApp:</strong> +55 14 99861-8547
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PoliticaCookies;
