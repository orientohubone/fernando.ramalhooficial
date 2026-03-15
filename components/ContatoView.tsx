import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../constants';
import BrandLogo from './BrandLogo';
import { supabase } from '../lib/supabase';
import {
  X,
  Send,
  MessageSquare,
  Mail,
  Linkedin,
  Figma,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

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
    // Prevent scrolling of underlying body
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
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

      // Auto-reset status after 5s
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      id: 'whatsapp',
      icon: MessageSquare,
      title: 'WhatsApp',
      subtitle: lang === 'EN' ? 'Fastest response' : 'Resposta mais rápida',
      value: '+55 14 99861-8547',
      link: 'https://wa.me/5514998618547',
      color: '#25D366'
    },
    {
      id: 'email',
      icon: Mail,
      title: 'Email',
      subtitle: lang === 'EN' ? 'Formal proposals' : 'Propostas formais',
      value: 'fernando@orientohub.com.br',
      link: 'mailto:fernando@orientohub.com.br',
      color: '#FFEE00'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: lang === 'EN' ? 'Professional networking' : 'Networking profissional',
      value: '/in/fernandolsr',
      link: 'https://linkedin.com/in/fernandolsr',
      color: '#0077B5'
    },
    {
      id: 'behance',
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z" />
        </svg>
      ),
      title: 'Behance',
      subtitle: lang === 'EN' ? 'Creative portfolio' : 'Portfólio criativo',
      value: '/fernandoramalho1',
      link: 'https://www.behance.net/fernandoramalho1',
      color: '#FF5733'
    }
  ];

  const serviceOptions = [
    { value: 'arquitetura-cognitiva', label: lang === 'PT' ? 'Arquitetura Cognitiva' : 'Cognitive Architecture' },
    { value: 'estrategia', label: lang === 'PT' ? 'Estratégias' : 'Strategies' },
    { value: 'inovacao', label: lang === 'PT' ? 'Inovação' : 'Innovation' },
    { value: 'marketing', label: lang === 'PT' ? 'Marketing' : 'Marketing' },
    { value: 'ia', label: lang === 'PT' ? 'Inteligência Artificial' : 'Artificial Intelligence' },
    { value: 'vibe-coding', label: 'Vibe Coding' },
    { value: 'design', label: 'Design & Branding' },
    { value: 'ecommerce', label: 'Ecommerce' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto overscroll-none"
    >
      {/* Top Fade Edge */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-[120] pointer-events-none" />
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-[#65EFC1]/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.02, 0.08, 0.02],
            x: [0, -40, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[20%] w-[60%] h-[60%] bg-[#009966]/5 blur-[120px] rounded-full"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] contrast-150 brightness-50 pointer-events-none" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="w-full px-6 py-8 md:px-12 flex justify-between items-center bg-transparent">
          <motion.button
            whileHover={{ x: -10 }}
            onClick={onClose}
            className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors"
          >
            <div className="w-8 h-[1px] bg-current transition-all group-hover:w-12" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">
              {lang === 'PT' ? 'VOLTAR' : 'BACK'}
            </span>
          </motion.button>

          <div className="hidden sm:block">
            <BrandLogo size="md" />
          </div>

          <motion.button
            whileHover={{ rotate: 90 }}
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <X size={20} className="text-white" />
          </motion.button>
        </nav>

        <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pt-12 pb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left Content: Narrative */}
            <div className="space-y-12">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-[#65EFC1]/10 border border-[#65EFC1]/30"
                >
                  <div className="w-2 h-2 rounded-full bg-[#65EFC1] animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#65EFC1]">
                    {lang === 'PT' ? 'SISTEMAS PARA DOMINÂNCIA' : 'SYSTEMS FOR DOMINANCE'}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-white"
                >
                  VAMOS <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#65EFC1] to-[#009966]">BUILDAR</span> <br />
                  O FUTURO.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed font-medium"
                >
                  {lang === 'PT'
                    ? 'Transformamos visão em infraestrutura digital. Do código à estratégia, do design à IA - estamos prontos para sua ideia mais ambiciosa.'
                    : 'We turn vision into digital infrastructure. From code to strategy, design to AI - we are ready for your most ambitious idea.'}
                </motion.p>
              </div>

              {/* Contact Grid Card-style */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={method.id}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (idx * 0.1) }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/[0.07] hover:border-white/20 transition-all group"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-[#050505] border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                          <Icon size={20} style={{ color: method.color }} />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-sm">{method.title}</h3>
                          <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mt-1">{method.subtitle}</p>
                          <p className="text-sm text-neutral-300 mt-2 font-medium truncate">{method.value}</p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Availability Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="p-8 rounded-[2.5rem] bg-gradient-to-br from-neutral-900/50 to-neutral-900/10 border border-white/5 backdrop-blur-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-4">
                    <img src="/fernando.png" className="w-12 h-12 rounded-full border-2 border-[#050505] object-cover object-[center_20%]" alt="FP" />
                    <div className="w-12 h-12 rounded-full bg-neutral-800 border-2 border-[#050505] flex items-center justify-center text-[10px] font-bold text-white">
                      +AI
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-tight">{lang === 'PT' ? 'Fale diretamente comigo' : 'Speak directly with me'}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] text-green-500 font-black uppercase tracking-widest">Online & {lang === 'PT' ? 'Disponível' : 'Available'}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                  {lang === 'PT'
                    ? 'Respondo propostas de projetos estratégicos em até 30 minutos via WhatsApp.'
                    : 'I respond to strategic project proposals within 30 minutes via WhatsApp.'}
                </p>
              </motion.div>
            </div>

            {/* Right Side: High-end Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#65EFC1]/10 via-transparent to-[#009966]/5 blur-3xl opacity-20 pointer-events-none" />

              <div className="relative bg-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-2xl shadow-2xl">
                <div className="mb-10 text-center lg:text-left">
                  <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
                    {lang === 'PT' ? 'ENVIAR BRIEFING' : 'SEND BRIEFING'}
                  </h2>
                  <p className="text-sm text-neutral-500 font-medium mt-2">
                    {lang === 'PT' ? 'Campos marcados com * são essenciais.' : 'Fields marked with * are essential.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="group space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 group-focus-within:text-[#65EFC1] transition-colors">
                      {lang === 'PT' ? 'Nome Completo *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder={lang === 'PT' ? 'Ex: João da Silva' : 'Ex: John Doe'}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-neutral-700 outline-none focus:border-[#65EFC1]/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>

                  {/* Email & Service Grid */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="group space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 group-focus-within:text-[#009966] transition-colors">
                        {lang === 'PT' ? 'Seu Melhor Email *' : 'Best Email *'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="contato@empresa.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-neutral-700 outline-none focus:border-[#009966]/50 focus:bg-white/[0.05] transition-all"
                      />
                    </div>
                    <div className="group space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 group-focus-within:text-[#65EFC1] transition-colors">
                        {lang === 'PT' ? 'Interesse' : 'Interest'}
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-neutral-700 outline-none focus:border-[#65EFC1]/50 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0A0A0A]">{lang === 'PT' ? 'Selecione um serviço' : 'Select a service'}</option>
                        {serviceOptions.map(opt => (
                          <option key={opt.value} value={opt.value} className="bg-[#0A0A0A]">{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Area */}
                  <div className="group space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 group-focus-within:text-[#009966] transition-colors">
                      {lang === 'PT' ? 'Fale sobre o projeto *' : 'Tell about the project *'}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder={lang === 'PT' ? 'Qual é seu objetivo principal?' : 'What is your main goal?'}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-4 text-white placeholder-neutral-700 outline-none focus:border-[#009966]/50 focus:bg-white/[0.05] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full relative group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#65EFC1] to-[#009966] transition-all group-hover:scale-110" />
                      <div className="relative px-8 py-5 flex items-center justify-center gap-3 text-black font-black uppercase tracking-[0.2em] text-xs">
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                            {lang === 'PT' ? 'ENVIANDO...' : 'SENDING...'}
                          </>
                        ) : (
                          <>
                            {lang === 'PT' ? 'ENVIAR AGORA' : 'SEND NOW'}
                            <Send size={16} />
                          </>
                        )}
                      </div>
                    </motion.button>
                  </div>

                  {/* Status Messages */}
                  <AnimatePresence mode="wait">
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 justify-center p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400"
                      >
                        <CheckCircle2 size={18} />
                        <span className="text-xs font-bold uppercase tracking-wider">
                          {lang === 'PT' ? 'Mensagem enviada!' : 'Message sent!'}
                        </span>
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 justify-center p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400"
                      >
                        <AlertCircle size={18} />
                        <span className="text-xs font-bold uppercase tracking-wider">
                          {lang === 'PT' ? 'Erro no envio.' : 'Sending error.'}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>

          </div>
        </main>

        <footer className="px-6 md:px-12 py-12 border-t border-white/5 opacity-40">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="text-[9px] font-black uppercase tracking-[0.5em] text-neutral-500">
              © 2025 FERNANDO RAMALHO. {lang === 'PT' ? 'TODOS OS DIREITOS RESERVADOS' : 'ALL RIGHTS RESERVED'}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-neutral-500">MADE IN</span>
              <img src="/bandeira-brasil.svg" alt="BR" className="w-5 h-3 object-contain" />
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default ContatoView;
