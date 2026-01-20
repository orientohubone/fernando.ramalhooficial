import React from 'react';

interface LGPDProps {
  lang: 'PT' | 'EN';
  onClose: () => void;
}

const LGPD: React.FC<LGPDProps> = ({ lang, onClose }) => {
  const content = lang === 'PT' ? {
    title: 'LGPD - Lei Geral de Proteção de Dados',
    subtitle: 'Conformidade com a Lei nº 13.709/2018',
    sections: [
      {
        title: '1. O que é a LGPD',
        content: 'A Lei Geral de Proteção de Dados (LGPD) estabelece normas para o tratamento de dados pessoais, visando proteger os direitos fundamentais de liberdade e privacidade.'
      },
      {
        title: '2. Dados Pessoais que Tratamos',
        content: 'Tratamos dados pessoais fornecidos voluntariamente por você, como nome, e-mail, telefone e informações profissionais, necessários para prestação de nossos serviços.'
      },
      {
        title: '3. Base Legal para Tratamento',
        content: 'O tratamento de seus dados pessoais baseia-se principalmente no consentimento explícito e na necessidade de execução de contratos e serviços solicitados.'
      },
      {
        title: '4. Seus Direitos na LGPD',
        content: 'Você tem direito à confirmação da existência de tratamento, acesso aos dados, correção de informações incompletas, eliminação de dados, portabilidade e revogação do consentimento.'
      },
      {
        title: '5. Como Exercer seus Direitos',
        content: 'Para exercer seus direitos garantidos pela LGPD, entre em contato conosco através do e-mail fernando@orientohub.com.br com o assunto "LGPD - Direitos do Titular".'
      },
      {
        title: '6. Segurança e Privacidade',
        content: 'Adotamos medidas técnicas e organizacionais robustas para garantir a segurança de seus dados pessoais e prevenir vazamentos, acessos não autorizados e incidentes de segurança.'
      },
      {
        title: '7. Encarregado de Proteção de Dados',
        content: 'Nosso encarregado de proteção de dados (DPO) pode ser contatado para assuntos relacionados à LGPD através do e-mail fernando@orientohub.com.br'
      }
    ]
  } : {
    title: 'LGPD - General Data Protection Law',
    subtitle: 'Compliance with Law No. 13.709/2018',
    sections: [
      {
        title: '1. What is LGPD',
        content: 'The General Data Protection Law (LGPD) establishes rules for the processing of personal data, aiming to protect the fundamental rights of freedom and privacy.'
      },
      {
        title: '2. Personal Data We Process',
        content: 'We process personal data voluntarily provided by you, such as name, email, telephone, and professional information, necessary for providing our services.'
      },
      {
        title: '3. Legal Basis for Processing',
        content: 'The processing of your personal data is mainly based on explicit consent and the need to execute contracts and requested services.'
      },
      {
        title: '4. Your Rights under LGPD',
        content: 'You have the right to confirmation of data processing, access to data, correction of incomplete information, data elimination, portability, and revocation of consent.'
      },
      {
        title: '5. How to Exercise Your Rights',
        content: 'To exercise your rights guaranteed by LGPD, contact us at fernando@orientohub.com.br with the subject "LGPD - Data Subject Rights".'
      },
      {
        title: '6. Security and Privacy',
        content: 'We adopt robust technical and organizational measures to ensure the security of your personal data and prevent leaks, unauthorized access, and security incidents.'
      },
      {
        title: '7. Data Protection Officer',
        content: 'Our data protection officer (DPO) can be contacted for LGPD-related matters through fernando@orientohub.com.br'
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
              {lang === 'PT' ? 'LEI FEDERAL Nº 13.709/2018' : 'FEDERAL LAW NO. 13.709/2018'}
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
                  ? 'Esta política está em conformidade com a LGPD e pode ser atualizada periodicamente.'
                  : 'This policy is compliant with LGPD and may be updated periodically.'
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

export default LGPD;
