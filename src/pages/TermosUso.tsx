import React from 'react';

interface TermosUsoProps {
  lang: 'PT' | 'EN';
  onClose: () => void;
}

const TermosUso: React.FC<TermosUsoProps> = ({ lang, onClose }) => {
  const content = lang === 'PT' ? {
    title: 'Termos de Uso',
    subtitle: 'Última atualização: 20 de janeiro de 2026',
    sections: [
      {
        title: '1. Aceitação dos Termos',
        content: 'Ao acessar e utilizar nossos serviços, você concorda com estes Termos de Uso. Se não concordar, não utilize nossos serviços.'
      },
      {
        title: '2. Descrição dos Serviços',
        content: 'Oferecemos serviços de consultoria estratégica, implementação de IA, transformação digital e soluções de inovação para empresas.'
      },
      {
        title: '3. Responsabilidades do Usuário',
        content: 'Você é responsável por manter a confidencialidade de suas informações de acesso e por todas as atividades que ocorrem em sua conta.'
      },
      {
        title: '4. Propriedade Intelectual',
        content: 'Todo o conteúdo deste site, incluindo textos, imagens, logos e elementos de design, é de propriedade exclusiva da OrientoHub e está protegido por leis de direitos autorais.'
      },
      {
        title: '5. Limitação de Responsabilidade',
        content: 'Nossa responsabilidade está limitada ao valor dos serviços contratados. Não nos responsabilizamos por danos indiretos, incidentais ou consequentes.'
      },
      {
        title: '6. Cancelamento e Reembolso',
        content: 'Os termos de cancelamento e reembolso são definidos em contrato específico para cada serviço contratado.'
      },
      {
        title: '7. Lei Aplicável',
        content: 'Estes termos são regidos pelas leis do Brasil. Quaisquer disputas serão resolvidas nos tribunais brasileiros.'
      }
    ]
  } : {
    title: 'Terms of Use',
    subtitle: 'Last updated: January 20, 2026',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: 'By accessing and using our services, you agree to these Terms of Use. If you do not agree, do not use our services.'
      },
      {
        title: '2. Description of Services',
        content: 'We offer strategic consulting services, AI implementation, digital transformation, and innovation solutions for businesses.'
      },
      {
        title: '3. User Responsibilities',
        content: 'You are responsible for maintaining the confidentiality of your access information and for all activities that occur in your account.'
      },
      {
        title: '4. Intellectual Property',
        content: 'All content on this site, including texts, images, logos, and design elements, is the exclusive property of OrientoHub and is protected by copyright laws.'
      },
      {
        title: '5. Limitation of Liability',
        content: 'Our liability is limited to the value of contracted services. We are not responsible for indirect, incidental, or consequential damages.'
      },
      {
        title: '6. Cancellation and Refund',
        content: 'Cancellation and refund terms are defined in a specific contract for each contracted service.'
      },
      {
        title: '7. Applicable Law',
        content: 'These terms are governed by Brazilian laws. Any disputes will be resolved in Brazilian courts.'
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
              {lang === 'PT' ? 'TERMOS DE CONTRATO E USO' : 'CONTRACT AND USAGE TERMS'}
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
                  ? 'Estes termos podem ser atualizados periodicamente. Recomendamos revisá-los regularmente.'
                  : 'These terms may be updated periodically. We recommend reviewing them regularly.'
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

export default TermosUso;
