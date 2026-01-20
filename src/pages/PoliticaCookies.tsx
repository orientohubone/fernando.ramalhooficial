import React from 'react';

interface PoliticaCookiesProps {
  lang: 'PT' | 'EN';
  onClose: () => void;
}

const PoliticaCookies: React.FC<PoliticaCookiesProps> = ({ lang, onClose }) => {
  const content = lang === 'PT' ? {
    title: 'Política de Cookies',
    subtitle: 'Última atualização: 20 de janeiro de 2026',
    sections: [
      {
        title: '1. O que são Cookies',
        content: 'Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site. Eles nos ajudam a melhorar sua experiência de navegação.'
      },
      {
        title: '2. Como Usamos Cookies',
        content: 'Utilizamos cookies essenciais para o funcionamento do site, cookies de análise para entender como nossos visitantes interagem com o conteúdo, e cookies de preferência para lembrar suas configurações.'
      },
      {
        title: '3. Tipos de Cookies Utilizados',
        content: 'Cookies essenciais: necessários para o funcionamento básico do site. Cookies de análise: nos ajudam a melhorar nosso conteúdo. Cookies de preferência: lembram suas escolhas de idioma e outras configurações.'
      },
      {
        title: '4. Cookies de Terceiros',
        content: 'Podemos usar serviços de terceiros que utilizam cookies, como ferramentas de análise e redes sociais. Estes cookies estão sujeitos às políticas de privacidade de seus respectivos provedores.'
      },
      {
        title: '5. Gerenciamento de Cookies',
        content: 'Você pode configurar seu navegador para recusar cookies ou para alertá-lo quando cookies estão sendo enviados. No entanto, desativar cookies pode afetar a funcionalidade do site.'
      },
      {
        title: '6. Atualizações desta Política',
        content: 'Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas ou por requisitos legais. Recomendamos revisá-la regularmente.'
      }
    ]
  } : {
    title: 'Cookie Policy',
    subtitle: 'Last updated: January 20, 2026',
    sections: [
      {
        title: '1. What are Cookies',
        content: 'Cookies are small text files stored on your device when you visit our website. They help us improve your browsing experience.'
      },
      {
        title: '2. How We Use Cookies',
        content: 'We use essential cookies for website functionality, analytics cookies to understand how visitors interact with our content, and preference cookies to remember your settings.'
      },
      {
        title: '3. Types of Cookies Used',
        content: 'Essential cookies: necessary for basic website functionality. Analytics cookies: help us improve our content. Preference cookies: remember your language choices and other settings.'
      },
      {
        title: '4. Third-Party Cookies',
        content: 'We may use third-party services that use cookies, such as analytics tools and social media. These cookies are subject to their providers\' privacy policies.'
      },
      {
        title: '5. Cookie Management',
        content: 'You can configure your browser to refuse cookies or to alert you when cookies are being sent. However, disabling cookies may affect website functionality.'
      },
      {
        title: '6. Policy Updates',
        content: 'We may update this policy periodically to reflect changes in our practices or legal requirements. We recommend reviewing it regularly.'
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
              {lang === 'PT' ? 'GERENCIAMENTO DE DADOS E PRIVACIDADE' : 'DATA AND PRIVACY MANAGEMENT'}
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
                  ? 'Para mais informações sobre cookies ou para exercer suas opções, entre em contato conosco.'
                  : 'For more information about cookies or to exercise your options, contact us.'
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

export default PoliticaCookies;
