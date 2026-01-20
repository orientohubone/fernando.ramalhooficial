import React from 'react';
import { Link } from 'react-router-dom';

interface PoliticaPrivacidadeProps {
  lang: 'PT' | 'EN';
  onClose: () => void;
}

const PoliticaPrivacidade: React.FC<PoliticaPrivacidadeProps> = ({ lang, onClose }) => {
  const content = lang === 'PT' ? {
    title: 'Política de Privacidade',
    subtitle: 'Última atualização: 20 de janeiro de 2026',
    sections: [
      {
        title: '1. Informações que Coletamos',
        content: 'Coletamos informações que você nos fornece diretamente, como nome, e-mail e informações de contato quando você entra em contato conosco através de nossos formulários ou serviços.'
      },
      {
        title: '2. Como Usamos Suas Informações',
        content: 'Utilizamos suas informações para responder às suas solicitações, fornecer nossos serviços, melhorar nossa plataforma e comunicar-nos com você sobre nossos produtos e serviços.'
      },
      {
        title: '3. Compartilhamento de Informações',
        content: 'Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.'
      },
      {
        title: '4. Segurança dos Dados',
        content: 'Implementamos medidas de segurança técnicas e administrativas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.'
      },
      {
        title: '5. Seus Direitos',
        content: 'Você tem o direito de acessar, corrigir, excluir ou limitar o processamento de suas informações pessoais, bem como o direito de portabilidade de dados.'
      },
      {
        title: '6. Contato',
        content: 'Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato conosco através do e-mail fernando@orientohub.com.br'
      }
    ]
  } : {
    title: 'Privacy Policy',
    subtitle: 'Last updated: January 20, 2026',
    sections: [
      {
        title: '1. Information We Collect',
        content: 'We collect information you provide directly to us, such as name, email, and contact information when you contact us through our forms or services.'
      },
      {
        title: '2. How We Use Your Information',
        content: 'We use your information to respond to your requests, provide our services, improve our platform, and communicate with you about our products and services.'
      },
      {
        title: '3. Information Sharing',
        content: 'We do not sell, rent, or share your personal information with third parties, except as necessary to provide our services or when required by law.'
      },
      {
        title: '4. Data Security',
        content: 'We implement technical and administrative security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
      },
      {
        title: '5. Your Rights',
        content: 'You have the right to access, correct, delete, or limit the processing of your personal information, as well as the right to data portability.'
      },
      {
        title: '6. Contact',
        content: 'To exercise your rights or ask questions about this policy, contact us at fernando@orientohub.com.br'
      }
    ]
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex flex-col">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-black/50 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#5AB473] rounded-full animate-pulse"></div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white">
              {content.title}
            </h1>
          </div>
          <button
            onClick={onClose}
            className="group relative w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-800 hover:border-[#5AB473] transition-all"
          >
            <span className="text-white group-hover:text-[#5AB473] transition-colors text-xl font-bold">×</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Subtitle with metadata */}
          <div className="mb-12 flex flex-col md:flex-row md:items-center gap-4">
            <p className="text-sm text-[#5AB473] font-medium">
              {content.subtitle}
            </p>
            <div className="hidden md:block w-1 h-1 bg-neutral-600 rounded-full"></div>
            <p className="text-xs text-neutral-500 uppercase tracking-[0.2em]">
              {lang === 'PT' ? 'INFORMAÇÃO LEGAL OBRIGATÓRIA' : 'MANDATORY LEGAL INFORMATION'}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {content.sections.map((section, index) => (
              <section key={index} className="relative">
                {/* Section number */}
                <div className="absolute -left-8 top-0 text-6xl font-black text-[#5AB473]/10">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="border-l border-neutral-800 pl-8">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-[#5AB473] font-black">//</span>
                    {section.title}
                  </h2>
                  <p className="text-neutral-300 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </section>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-neutral-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-neutral-500 text-center md:text-left">
                {lang === 'PT' 
                  ? 'Esta política pode ser atualizada periodicamente. Recomendamos revisá-la regularmente.'
                  : 'This policy may be updated periodically. We recommend reviewing it regularly.'
                }
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <span>© 2024</span>
                <span className="text-[#5AB473] font-black">FERNANDO RAMALHO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;
