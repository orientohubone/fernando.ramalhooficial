import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermosUso: React.FC = () => {
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
            Termos de <br />
            <span className="text-[#FFEE00]">Uso</span>
          </h1>
          
          <p className="text-sm text-neutral-500">
            Última atualização: 20 de Janeiro de 2026
          </p>

          <div className="space-y-12 py-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Aceitação dos Termos</h2>
              <p className="text-neutral-300 leading-relaxed">
                Ao acessar e usar este site, você aceita estes Termos de Uso. Se não concordar, não utilize nossos serviços.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Descrição dos Serviços</h2>
              <p className="text-neutral-300 leading-relaxed">
                Oferecemos consultoria estratégica, capacidades especializadas em ecommerce, IA, marketing e relatórios de inteligência de mercado.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Responsabilidades do Usuário</h2>
              <p className="text-neutral-300 leading-relaxed">
                Você é responsável por fornecer informações verdadeiras, não usar o site para atividades ilegais e respeitar direitos de terceiros.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Propriedade Intelectual</h2>
              <p className="text-neutral-300 leading-relaxed">
                Todo conteúdo do site, incluindo textos, imagens e código, é protegido por direitos autorais e pertence a Fernando Ramalho.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Limitação de Responsabilidade</h2>
              <p className="text-neutral-300 leading-relaxed">
                Não nos responsabilizamos por danos diretos ou indiretos resultantes do uso ou incapacidade de uso de nossos serviços.
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

export default TermosUso;
