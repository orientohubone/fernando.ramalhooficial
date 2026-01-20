import React from 'react';
import { Language } from '../constants';

interface LegalViewProps {
  lang: Language;
  type: 'privacy' | 'terms' | 'lgpd' | 'cookies';
  onClose: () => void;
}

const LegalView: React.FC<LegalViewProps> = ({ lang, type, onClose }) => {
  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: lang === 'PT' ? 'Política de Privacidade' : 'Privacy Policy',
          lastUpdated: lang === 'PT' ? 'Última atualização: 20 de Janeiro de 2026' : 'Last updated: January 20, 2026',
          sections: [
            {
              title: lang === 'PT' ? '1. Informações Gerais' : '1. General Information',
              content: lang === 'PT' 
                ? 'Esta Política de Privacidade descreve como Fernando Ramalho coleta, usa e protege suas informações pessoais.'
                : 'This Privacy Policy describes how Fernando Ramalho collects, uses and protects your personal information.'
            },
            {
              title: lang === 'PT' ? '2. Informações Coletadas' : '2. Information Collected',
              content: lang === 'PT'
                ? 'Coletamos informações que você nos fornece diretamente e informações coletadas automaticamente.'
                : 'We collect information you provide directly and information collected automatically.'
            }
          ]
        };

      case 'terms':
        return {
          title: lang === 'PT' ? 'Termos de Uso' : 'Terms of Use',
          lastUpdated: lang === 'PT' ? 'Última atualização: 20 de Janeiro de 2026' : 'Last updated: January 20, 2026',
          sections: [
            {
              title: lang === 'PT' ? '1. Aceitação dos Termos' : '1. Acceptance of Terms',
              content: lang === 'PT'
                ? 'Ao acessar e usar este site, você aceita estes Termos de Uso.'
                : 'By accessing and using this site, you accept these Terms of Use.'
            }
          ]
        };

      case 'lgpd':
        return {
          title: lang === 'PT' ? 'LGPD - Lei Geral de Proteção de Dados' : 'LGPD - General Data Protection Law',
          lastUpdated: lang === 'PT' ? 'Última atualização: 20 de Janeiro de 2026' : 'Last updated: January 20, 2026',
          sections: [
            {
              title: lang === 'PT' ? '1. Aplicabilidade da LGPD' : '1. LGPD Applicability',
              content: lang === 'PT'
                ? 'Este site está em conformidade com a Lei Geral de Proteção de Dados Pessoais.'
                : 'This site complies with the General Personal Data Protection Law.'
            }
          ]
        };

      case 'cookies':
        return {
          title: lang === 'PT' ? 'Política de Cookies' : 'Cookie Policy',
          lastUpdated: lang === 'PT' ? 'Última atualização: 20 de Janeiro de 2026' : 'Last updated: January 20, 2026',
          sections: [
            {
              title: lang === 'PT' ? '1. O que são Cookies?' : '1. What are Cookies?',
              content: lang === 'PT'
                ? 'Cookies são pequenos arquivos de texto armazenados em seu dispositivo.'
                : 'Cookies are small text files stored on your device.'
            }
          ]
        };

      default:
        return null;
    }
  };

  const content = getContent();

  if (!content) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center">
        <div className="text-white text-center">
          <h1>Conteúdo não encontrado</h1>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-[#5AB473] rounded">
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto">
      {/* Navigation */}
      <div className="sticky top-0 left-0 w-full z-[110] px-6 py-8 md:px-12 flex justify-between items-center bg-[#050505] border-b border-neutral-900">
        <button onClick={onClose} className="group flex items-center gap-4">
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            {lang === 'PT' ? 'VOLTAR' : 'BACK'}
          </span>
        </button>
        <div className="text-white font-black text-xl">
          FERNANDO RAMALHO
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-24 pb-40">
        <header className="mb-16 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8 md:w-12 bg-[#58B573]" />
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-[#58B573]">
              {lang === 'PT' ? 'DOCUMENTO LEGAL' : 'LEGAL DOCUMENT'}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.8]">
            {content.title}
          </h1>
          <p className="text-sm text-neutral-500 font-medium">
            {content.lastUpdated}
          </p>
        </header>

        <div className="space-y-12">
          {content.sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {section.title}
              </h2>
              <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}

          {/* Contact Section */}
          <section className="mt-20 p-8 border border-neutral-800 rounded-xl bg-neutral-950/50">
            <h3 className="text-xl font-bold text-white mb-4">
              {lang === 'PT' ? 'Entre em Contato' : 'Contact Us'}
            </h3>
            <div className="space-y-3">
              <p className="text-neutral-300">
                <strong>{lang === 'PT' ? 'Email:' : 'Email:'}</strong> fernando@orientohub.com.br
              </p>
              <p className="text-neutral-300">
                <strong>{lang === 'PT' ? 'WhatsApp:' : 'WhatsApp:'}</strong> +55 14 99861-8547
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LegalView;
