import React, { useEffect, useState } from 'react';
import { Language } from '../constants';
import BrandLogo from './BrandLogo';
import { supabase } from '../lib/supabase';

interface ContatoViewProps {
  lang: Language;
  onClose: () => void;
}

const ContatoView: React.FC<ContatoViewProps> = ({ lang, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message,
            service: formData.service,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        service: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Navigation */}
      <nav className="sticky top-0 left-0 w-full z-[110] px-4 xs:px-6 py-6 xs:py-8 md:px-12 flex justify-between items-center mix-blend-difference">
        <button onClick={onClose} className="group flex items-center gap-2 xs:gap-3 xs:gap-4">
          <div className="w-5 xs:w-6 sm:w-8 h-[1px] bg-white group-hover:w-6 xs:group-hover:w-8 sm:group-hover:w-12 transition-all duration-300" />
          <span className="text-[7px] xs:text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em]">VOLTAR</span>
        </button>
        <BrandLogo size="md" />
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-40">
        <header className="mb-16 md:mb-24 space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8 md:w-12 bg-[#58B573]"></div>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-[#58B573]">CONTATO</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8]">
            ENTRE EM <br />
            <span className="text-[#FFEE00]">CONTATO</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-neutral-500 max-w-2xl font-medium tracking-tight">
            Vamos construir o próximo ecossistema de mercado juntos.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Formulário de Contato */}
          <section className="space-y-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">
                Envie sua <span className="text-[#58B573]">mensagem</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                Preencha o formulário abaixo e retornarei o mais breve possível.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#58B573] focus:bg-neutral-900/70 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#58B573] focus:bg-neutral-900/70 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#58B573] focus:bg-neutral-900/70 transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-300 mb-2">
                    Serviço de Interesse
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      placeholder="Selecione um serviço"
                      readOnly
                      className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-[#58B573] focus:bg-neutral-900/70 transition-colors cursor-pointer pr-10"
                      onClick={(event) => {
                        const dropdown = document.createElement('div');
                        dropdown.className = 'absolute top-full left-0 w-full bg-neutral-900 border border-neutral-800 rounded-lg mt-1 z-50 max-h-48 overflow-y-auto';
                        dropdown.innerHTML = `
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="">Selecione um serviço</div>
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="arquitetura-cognitiva">Arquitetura Cognitiva</div>
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="estrategia">Estratégias</div>
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="inovacao">Inovação</div>
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="marketing">Marketing</div>
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="midia-paga">Mídia Paga</div>
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="design">Design</div>
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="ia">IA</div>
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="vibe-coding">Vibe Coding</div>
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="marcas">Marcas</div>
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="dominio">Domínios</div>
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="sites">Sites</div>
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="ecommerce">Ecommerce</div>
                          <div class="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white" data-value="outro">Outro</div>
                        `;
                        
                        dropdown.addEventListener('click', (e) => {
                          const target = e.target as HTMLElement;
                          if (target.dataset.value) {
                            setFormData(prev => ({ ...prev, service: target.dataset.value || '' }));
                            document.querySelector('[name="service"]')?.setAttribute('value', target.dataset.value || '');
                            dropdown.remove();
                          }
                        });
                        
                        // Remove dropdown when clicking outside
                        setTimeout(() => {
                          document.addEventListener('click', function removeDropdown(e) {
                            if (!dropdown.contains(e.target as Node)) {
                              dropdown.remove();
                              document.removeEventListener('click', removeDropdown);
                            }
                          });
                        }, 100);
                        
                        event.currentTarget.parentElement?.appendChild(dropdown);
                      }}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-[#58B573]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#58B573] focus:bg-neutral-900/70 transition-colors resize-none"
                  placeholder="Descreva seu projeto ou necessidade..."
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-[#58B573] text-black font-black text-sm uppercase tracking-[0.2em] hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium">Mensagem enviada com sucesso!</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm font-medium">Erro ao enviar. Tente novamente.</span>
                  </div>
                )}
              </div>
            </form>
          </section>

          {/* Informações de Contato */}
          <section className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">
                Ou entre em <span className="text-[#58B573]">contato direto</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                Prefere contato direto? Aqui estão todas as formas de me encontrar.
              </p>
            </div>

            <div className="space-y-8">
              {/* WhatsApp */}
              <div className="group flex items-center gap-6 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:bg-neutral-900/70 transition-all">
                <div className="w-12 h-12 bg-[#58B573]/10 rounded-full flex items-center justify-center group-hover:bg-[#58B573]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#58B573]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197 0-.395.059-.612.18-.22.122-.436.297-.647.461-.125.095-.258.199-.4.312-.312.277-.646.447-.997.447-.345 0-.673-.165-.997-.447-.244-.186-.48-.393-.707-.617-.227-.224-.454-.457-.673-.697-.248-.277-.473-.568-.675-.87-.192-.29-.347-.596-.464-.914-.117-.319-.176-.654-.176-1.005 0-.345.055-.68.165-1.005.11-.325.275-.63.494-.914.22-.285.48-.535.778-.75.298-.215.635-.388 1.01-.519.375-.13.787-.195 1.236-.195.449 0 .861.065 1.236.195.375.13.712.304 1.01.519.298.215.558.465.778.75.219.284.384.59.494.914.11.325.165.66.165 1.005 0 .351-.059.686-.176 1.005-.117.318-.272.624-.464.914-.202.302-.427.593-.675.87-.219.24-.445.473-.673.697-.227.224-.463.431-.707.617-.324.282-.652.447-.997.447-.351 0-.685-.17-.997-.447-.351-.277-.685-.547-.997-.812-.312-.265-.646-.536-.997-.812-.351-.277-.685-.547-.997-.812-.312-.265-.646-.536-.997-.812-.351-.277-.685-.547-.997-.812z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">WhatsApp</h3>
                  <p className="text-neutral-400 text-sm">Resposta mais rápida</p>
                  <a 
                    href="https://wa.me/5514998618547"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58B573] hover:text-green-400 transition-colors text-sm font-medium"
                  >
                    +55 14 99861-8547
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-center gap-6 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:bg-neutral-900/70 transition-all">
                <div className="w-12 h-12 bg-[#FFEE00]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFEE00]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#FFEE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <p className="text-neutral-400 text-sm">Para propostas formais</p>
                  <a 
                    href="mailto:fernando@orientohub.com.br"
                    className="text-[#FFEE00] hover:text-yellow-300 transition-colors text-sm font-medium"
                  >
                    fernando@orientohub.com.br
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="group flex items-center gap-6 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:bg-neutral-900/70 transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
                  <p className="text-neutral-400 text-sm">Networking profissional</p>
                  <a 
                    href="https://linkedin.com/in/fernandolsr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    /in/fernandolsr
                  </a>
                </div>
              </div>

              {/* Behance */}
              <div className="group flex items-center gap-6 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:bg-neutral-900/70 transition-all">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3h-7v-6h8c.51 0 .975-.369 1.053-.897.064-.437-.07-.936-.504-1.254-.434-.317-.918-.479-1.449-.479h-7.1v-6h6.6c3.072 0 4.659 1.703 5.101 3 .209.613.274 1.254.209 1.897z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Behance</h3>
                  <p className="text-neutral-400 text-sm">Portfólio criativo</p>
                  <a 
                    href="https://www.behance.net/fernandoramalho1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-400 transition-colors text-sm font-medium"
                  >
                    /fernandoramalho1
                  </a>
                </div>
              </div>
            </div>

            {/* Tempo de Resposta */}
            <div className="mt-12 p-6 bg-gradient-to-r from-[#FFEE00]/10 to-[#58B573]/10 border border-neutral-800 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-[#FFEE00] rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FFEE00]">Tempo de resposta</span>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                WhatsApp: <span className="text-white font-medium">até 30 minutos</span><br/>
                Email: <span className="text-white font-medium">até 24 horas</span><br/>
                Redes sociais: <span className="text-white font-medium">até 48 horas</span>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContatoView;
