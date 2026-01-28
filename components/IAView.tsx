'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Plus, Lightbulb, Paperclip, Image, FileCode,
  ChevronDown, Check, Sparkles, Zap, Brain, Bolt, Github,
  SendHorizontal, Search, Trash2, Copy, X, Info, BarChart3,
  Download, Share2, Clipboard, FileText, Code2, Globe,
  AlertTriangle
} from 'lucide-react';
import { Language } from '../constants';

// --- TYPES ---
interface Model {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  apiModel: string;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface IAViewProps {
  lang: Language;
  onClose: () => void;
}

// --- CONSTANTS ---
interface Persona {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  systemPrompt: string;
  color: string;
}

const PERSONAS: Persona[] = [
  {
    id: 'strategic',
    name: 'Estrategista',
    description: 'Análise de mercado e inteligência competitiva',
    icon: <BarChart3 className="size-4" />,
    color: 'text-[#FFEE00]',
    systemPrompt: `Você é o ESTRATEGISTA do Builder.ia. Seu foco é ROI, dominância de mercado e análise de dados.
    METODOLOGIA:
    Sempre estruture sua resposta em:
    1. 📊 Contexto Atual
    2. 🔍 Sinais Críticos
    3. 🎯 Oportunidades
    4. ⚡ Recomendações`
  },
  {
    id: 'innovator',
    name: 'Inovador',
    description: 'Novos modelos de negócio e disrupção',
    icon: <Lightbulb className="size-4" />,
    color: 'text-orange-400',
    systemPrompt: `Você é o INOVADOR do Builder.ia. Focado em disrupção, arquitetura cognitiva e oceanos azuis.
    ESTRUTURA:
    1. 🚀 Visão de Futuro (Next 2-5 years)
    2. 💡 Conceitos Disruptivos / Modelos de Negócio
    3. 🛠 Roadmap de Implementação`
  },
  {
    id: 'creative',
    name: 'Criativo',
    description: 'Design, Branding e Experiência do Usuário',
    icon: <Sparkles className="size-4" />,
    color: 'text-purple-400',
    systemPrompt: `Você é o CRIATIVO do Builder.ia. Focado em estética premium, Vibe Coding e diferenciação visual/emocional.
    ESTRUTURA:
    1. 🎨 Narrativa Conceitual
    2. ✨ Elementos de Experiência (UX/Fron-end)
    3. 💎 Diretrizes de Vibe & Branding`
  },
  {
    id: 'researcher',
    name: 'Pesquisador',
    description: 'Curadoria acadêmica e rigor científico',
    icon: <Brain className="size-4" />,
    color: 'text-blue-400',
    systemPrompt: `Você é o PESQUISADOR do Builder.ia. Sua missão é rigor acadêmico e curadoria de fontes de alto nível.
    ESTRUTURA:
    1. 📑 Resumo de Pesquisa
    2. 🔍 Fontes e Literatura (Usando a base de curadoria acadêmica)
    3. 🛠 Metodologia Sugerida`
  }
];

const MODELS: Model[] = [
  { id: 'gemini-3-flash', name: 'Gemini 3 Flash (Preview)', description: 'Next Generation Intelligence', icon: <Zap className="size-4 text-blue-400" />, badge: 'Recommended', apiModel: 'gemini-3-flash-preview' },
  { id: 'gemini-3-pro', name: 'Gemini 3 Pro (Preview)', description: 'Advanced Capabilities', icon: <Sparkles className="size-4 text-purple-400" />, badge: 'Experimental', apiModel: 'gemini-3-pro-preview' },
  { id: 'gemini-2-flash', name: 'Gemini 2.0 Flash', description: 'Fast & Stable', icon: <Bolt className="size-4 text-emerald-400" />, apiModel: 'gemini-2.0-flash' }
];

const FALLBACK_MODELS = [
  'gemini-3-flash-preview',
  'gemini-3-pro-preview',
  'gemini-2.5-flash',
  'gemini-2.0-flash',
  'gemini-1.5-flash-latest',
  'gemini-1.5-pro-latest'
];

const ACADEMIC_SOURCES_CONTEXT = `
FONTES DE CONSULTA ACADÊMICA DISPONÍVEIS:
- Multidisciplinares: CORE, Zenodo, OpenAIRE, Internet Archive, ScienceOpen.
- Preprints/Áreas: arXiv (Física/Mat), Bio Rxiv, PsyArXiv, SSRN (Sociais), PubMed.
- Ferramentas: Semantic Scholar, PaperPanda, ResearchGate.
- Regionais: SciELO, Redalyc, DOAJ.
`;

// --- UI COMPONENTS ---

function PersonaSelector({ selectedPersona, onPersonaChange }: {
  selectedPersona: Persona
  onPersonaChange: (persona: Persona) => void
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border border-white/10 hover:bg-white/5 active:scale-95 ${isOpen ? 'bg-white/10' : 'bg-black/20'}`}
      >
        <span className={selectedPersona.color}>{selectedPersona.icon}</span>
        <span className="text-white/80">{selectedPersona.name}</span>
        <ChevronDown className={`size-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute bottom-full left-0 mb-2 z-50 min-w-[260px] bg-black/80 backdrop-blur-3xl border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200 ring-1 ring-white/5">
            <div className="p-1.5">
              <div className="px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#5a5a5f]">
                Agente Ativo
              </div>
              {PERSONAS.map((persona) => (
                <button
                  key={persona.id}
                  onClick={() => {
                    onPersonaChange(persona);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-150 ${selectedPersona.id === persona.id ? 'bg-white/10 text-white' : 'text-[#a0a0a5] hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <div className={`flex-shrink-0 ${persona.color}`}>{persona.icon}</div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-bold block">{persona.name}</span>
                    <span className="text-[10px] text-neutral-500 leading-tight block mt-0.5">{persona.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function ModelSelector({ selectedModel, onModelChange }: {
  selectedModel: Model
  onModelChange: (model: Model) => void
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 text-[#8a8a8f] hover:text-white hover:bg-white/5 active:scale-95"
      >
        {selectedModel.icon}
        <span>{selectedModel.name}</span>
        <ChevronDown className={`size-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute bottom-full left-0 mb-2 z-50 min-w-[220px] bg-black/80 backdrop-blur-3xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200 ring-1 ring-white/5">
            <div className="p-1.5">
              <div className="px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#5a5a5f]">
                Núcleo de Inteligência
              </div>
              {MODELS.map((model) => (
                <button
                  key={model.id}
                  onClick={() => {
                    onModelChange(model);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-left transition-all duration-150 ${selectedModel.id === model.id ? 'bg-white/10 text-white' : 'text-[#a0a0a5] hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <div className="flex-shrink-0">{model.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{model.name}</span>
                      {model.badge && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${model.badge === 'Experimental' || model.badge === 'Recommended' ? 'bg-blue-500/20 text-blue-300' : 'bg-purple-500/20 text-purple-300'
                          }`}>
                          {model.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#6a6a6f]">{model.description}</span>
                  </div>
                  {selectedModel.id === model.id && <Check className="size-4 text-blue-400 flex-shrink-0" />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M8 24C10.208 24 12 22.208 12 20V16H8C5.792 16 4 17.792 4 20C4 22.208 5.792 24 8 24Z" fill="currentColor" />
      <path d="M4 12C4 9.792 5.792 8 8 8H12V16H8C5.792 16 4 14.208 4 12Z" fill="currentColor" />
      <path d="M4 4C4 1.792 5.792 0 8 0H12V8H8C5.792 8 4 6.208 4 4Z" fill="currentColor" />
      <path d="M12 0H16C18.208 0 20 1.792 20 4C20 6.208 18.208 8 16 8H12V0Z" fill="currentColor" />
      <path d="M20 12C20 14.208 18.208 16 16 16C13.792 16 12 12C12 12 13.792 8 16 8C18.208 8 20 9.792 20 12Z" fill="currentColor" />
    </svg>
  );
}

function RayBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 bg-[#050505]" />
      {/* Brand Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div
        className="absolute left-1/2 -translate-x-1/2 w-[4000px] h-[1800px] sm:w-[6000px]"
        style={{
          background: `radial-gradient(circle at center 800px, rgba(255, 238, 0, 0.15) 0%, rgba(88, 181, 115, 0.05) 15%, transparent 25%)`
        }}
      />

      <div
        className="absolute top-[175px] left-1/2 w-[1600px] h-[1600px] sm:top-1/2 sm:w-[3043px] sm:h-[2865px]"
        style={{ transform: 'translate(-50%) rotate(180deg)' }}
      >
        <div className="absolute w-full h-full rounded-full -mt-[13px]" style={{ background: 'radial-gradient(43.89% 25.74% at 50.02% 97.24%, #0a0a0a 0%, #050505 100%)', border: '16px solid rgba(255, 238, 0, 0.05)', transform: 'rotate(180deg)', zIndex: 5 }} />
        <div className="absolute w-full h-full rounded-full bg-transparent -mt-[11px]" style={{ border: '23px solid rgba(88, 181, 115, 0.03)', transform: 'rotate(180deg)', zIndex: 4 }} />
        <div className="absolute w-full h-full rounded-full bg-transparent" style={{ border: '20px solid rgba(255, 238, 0, 0.02)', boxShadow: '0 -15px 40px rgba(255, 238, 0, 0.05)', transform: 'rotate(180deg)', zIndex: 1 }} />
      </div>
    </div>
  );
}

function AnnouncementBadge({ text, href = "#" }: { text: string; href?: string }) {
  const content = (
    <>
      <span className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none opacity-70 mix-blend-overlay" style={{ background: 'radial-gradient(ellipse at center top, rgba(255, 255, 255, 0.15) 0%, transparent 70%)' }} />
      <span className="absolute -top-px left-1/2 -translate-x-1/2 h-[2px] w-[100px] opacity-60" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255, 238, 0, 0.8) 20%, rgba(88, 181, 115, 0.8) 50%, rgba(255, 238, 0, 0.8) 80%, transparent 100%)', filter: 'blur(0.5px)' }} />
      <Bolt className="size-4 relative z-10 text-[#FFEE00]" />
      <span className="relative z-10 text-white font-black uppercase tracking-widest text-[10px]">{text}</span>
    </>
  );

  const className = "relative inline-flex items-center gap-2 px-5 py-2 min-h-[40px] rounded-full text-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer";
  const style = {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    backdropFilter: 'blur(20px) saturate(140%)',
    boxShadow: 'inset 0 1px rgba(255,255,255,0.2), inset 0 -1px rgba(0,0,0,0.1), 0 8px 32px -8px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.08)'
  };

  return href !== '#' ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>{content}</a>
  ) : (
    <button className={className} style={style}>{content}</button>
  );
}

// --- MAIN IA VIEW COMPONENT ---

const IAView: React.FC<IAViewProps> = ({ lang, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [attachments, setAttachments] = useState<{ id: string; name: string; type: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<Model>(MODELS[0]);
  const [selectedPersona, setSelectedPersona] = useState<Persona>(PERSONAS[0]);
  const [isConfigured, setIsConfigured] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    setIsConfigured(!!apiKey && apiKey !== 'sua-chave-aqui');
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [inputValue]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const generateResponse = async (query: string): Promise<string> => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey || apiKey === 'sua-chave-aqui') {
      return '⚠️ **API Key não configurada**\n\nAdicione VITE_GEMINI_API_KEY ao seu arquivo .env.';
    }

    // List of models to try starting from user selection
    const modelsToTry = [selectedModel.apiModel, ...FALLBACK_MODELS.filter(m => m !== selectedModel.apiModel)];

    const finalPrompt = `
      ${selectedPersona.systemPrompt}
      ${ACADEMIC_SOURCES_CONTEXT}
      
      CONTEXTO GLOBAL: Você tem acesso ao conhecimento das fontes citadas acima para enriquecer suas análises.
      
      PERGUNTA DO USUÁRIO: ${query}
    `;

    // Create new abort controller for this request
    const controller = new AbortController();
    abortControllerRef.current = controller;

    for (const modelId of modelsToTry) {
      try {
        console.log(`Tentando núcleo: ${modelId} com agente: ${selectedPersona.id}`);
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify({
            contents: [{
              parts: [{ text: finalPrompt }]
            }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
          })
        });

        if (response.ok) {
          const data = await response.json();
          if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
            abortControllerRef.current = null;
            return data.candidates[0].content.parts[0].text;
          }
        }

        if (response.status === 429) {
          console.warn(`Rate limit no modelo ${modelId}, tentando próximo...`);
          continue;
        }

        if (response.status === 404) {
          console.warn(`Modelo ${modelId} indisponível, tentando próximo...`);
          continue;
        }
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.log('Pesquisa interrompida pelo usuário.');
          return '⚠️ *Pesquisa interrompida.*';
        }
        console.error(`Erro no núcleo ${modelId}:`, error);
        continue;
      }
    }

    abortControllerRef.current = null;
    return `❌ **Falha de Conexão**\n\nNão foi possível processar sua solicitação com nenhum dos núcleos de inteligência disponíveis.`;
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copiado para a área de transferência!');
  };

  const downloadFile = (content: string, fileName: string, contentType: string) => {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  };

  const handleExportMessage = (text: string, format: 'md' | 'txt') => {
    const fileName = `builder-ia-response-${Date.now()}.${format}`;
    downloadFile(text, fileName, 'text/plain');
  };

  const handleExportSession = (format: 'md' | 'html' | 'txt') => {
    if (messages.length === 0) return;

    let content = "";
    const timestamp = new Date().toLocaleString();

    if (format === 'html') {
      content = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <title>Relatório Estratégico Builder.ia - ${timestamp}</title>
          <style>
            :root { --brand: #FFEE00; --bg: #0a0a0a; --text: #e5e5e5; }
            body { font-family: 'Inter', -apple-system, sans-serif; line-height: 1.6; color: var(--text); background: var(--bg); max-width: 850px; margin: 0 auto; padding: 40px 20px; }
            .report-header { border-bottom: 2px solid var(--brand); padding-bottom: 20px; margin-bottom: 40px; text-align: center; }
            h1.title { color: var(--brand); text-transform: uppercase; letter-spacing: -1px; margin: 0; font-size: 32px; font-weight: 900; }
            .meta { font-size: 12px; color: #666; margin-top: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
            .message { margin-bottom: 40px; padding: 25px; border-radius: 16px; position: relative; }
            .user-msg { border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.02); }
            .bot-msg { border: 1px solid rgba(255,238,0,0.1); background: rgba(255,238,0,0.02); border-left: 4px solid var(--brand); }
            .sender-label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px; display: block; color: #888; }
            .bot-msg .sender-label { color: var(--brand); }
            h1, h2, h3 { color: white; margin-top: 1.5em; font-weight: 900; text-transform: uppercase; }
            h3 { display: flex; align-items: center; gap: 10px; font-size: 18px; }
            strong { color: white; font-weight: 800; }
            pre { background: #000; padding: 20px; border-radius: 12px; border: 1px solid #333; overflow-x: auto; color: #58B573; font-family: monospace; font-size: 13px; margin: 20px 0; }
            ul, ol { padding-left: 20px; margin-bottom: 20px; }
            li { margin-bottom: 8px; color: #ccc; }
            p { margin-bottom: 16px; }
            code { background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; color: var(--brand); font-family: monospace; }
          </style>
        </head>
        <body>
          <div class="report-header">
            <h1 class="title">Builder.ia</h1>
            <div class="meta">Relatório Estratégico • Gerado em ${timestamp}</div>
          </div>`;

      messages.forEach(m => {
        content += `<div class="message ${m.sender}-msg">
          <span class="sender-label">${m.sender === 'user' ? 'Pesquisador / Fernando Ramalho' : 'Builder.ia Intelligence'}</span>
          <div class="msg-content">${formatMessage(m.text)}</div>
        </div>`;
      });
      content += "</body></html>";
    } else {
      content = `# Relatório Estratégico Builder.ia\nData: ${timestamp}\n\n`;
      messages.forEach(m => {
        content += `### ${m.sender === 'user' ? 'Pesquisador' : 'Builder.ia'}\n${m.text}\n\n---\n\n`;
      });
    }

    const extension = format === 'txt' ? 'txt' : format;
    downloadFile(content, `builder-sessao-${Date.now()}.${extension}`, format === 'html' ? 'text/html' : 'text/markdown');
  };

  const handleSendMessage = async (textOverride?: string) => {
    const text = textOverride || inputValue;
    if (!text.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setAttachments([]); // Clear attachments after sending
    setIsLoading(true);

    const attachmentNames = attachments.map((a: { name: string }) => a.name).join(', ');
    const promptWithAttachments = attachmentNames
      ? `[Anexos: ${attachmentNames}]\n\n${text}`
      : text;

    const botResponse = await generateResponse(promptWithAttachments);

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessage = (text: string) => {
    let html = text
      // Bloqueio de Código (Multilinear)
      .replace(/```([\s\S]*?)```/g, (_, code) => `<pre class="bg-black/80 p-4 rounded-xl my-6 overflow-x-auto border border-white/10 font-mono text-[13px] text-emerald-400 shadow-2xl ring-1 ring-white/5 line-relaxed">${code.trim()}</pre>`)

      // Cabeçalhos (Hierarquia Estratégica)
      .replace(/^### (.*$)/gim, '<h3 class="text-white font-black text-lg mt-6 mb-2 uppercase tracking-tighter flex items-center gap-2"><span class="size-1.5 bg-[#FFEE00] rounded-full"></span>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-white font-black text-xl mt-8 mb-4 uppercase tracking-tighter border-b border-white/10 pb-2">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-[#FFEE00] font-black text-2xl mt-10 mb-6 uppercase tracking-tighter">$1</h1>')

      // Negrito e Itálico (Ênfase Builder)
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-neutral-400 italic font-medium">$1</em>')

      // Código Inline
      .replace(/`(.*?)`/g, '<code class="bg-white/10 px-1.5 py-0.5 rounded font-mono text-[12px] text-[#FFEE00] border border-white/5">$1</code>')

      // Listas (Estruturação de Dados)
      .replace(/^\s*-\s+(.*$)/gim, '<li class="ml-4 list-disc text-neutral-300 pl-2 mb-1">$1</li>')
      .replace(/^\s*\*\s+(.*$)/gim, '<li class="ml-4 list-disc text-neutral-300 pl-2 mb-1">$1</li>')
      .replace(/^\s*\d\.\s+(.*$)/gim, '<li class="ml-4 list-decimal text-neutral-300 pl-2 mb-1">$1</li>');

    // Ajuste de parágrafos e quebras
    return html.split('\n').map(line => {
      if (line.startsWith('<h') || line.startsWith('<li') || line.startsWith('<pre')) return line;
      return line.trim() ? `<p class="mb-4">${line}</p>` : '';
    }).join('');
  };

  const abortControllerRef = useRef<AbortController | null>(null);

  const handleStopGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsLoading(false);
  };

  const handleNewChat = () => {
    if (messages.length > 0) {
      setShowResetConfirm(true);
    }
  };

  const confirmReset = () => {
    setMessages([]);
    setInputValue('');
    handleStopGeneration();
    setShowResetConfirm(false);
  };

  const handleCloseRequest = () => {
    if (messages.length > 0) {
      setShowCloseConfirm(true);
    } else {
      onClose();
    }
  };

  const handleImport = (service: string) => {
    const prompts: Record<string, string> = {
      figma: "Analise este design do Figma e sugira uma arquitetura de componentes React premium: [URL do Protótipo]",
      github: "Explore este repositório e sugira melhorias na lógica de arquitetura e performance: [URL do Repo]"
    };
    handleSendMessage(prompts[service]);
  };

  const handlePlan = () => {
    if (!inputValue.trim()) {
      setInputValue("Elabore um plano estratégico completo para o seguinte projeto: ");
      textareaRef.current?.focus();
    } else {
      handleSendMessage(`[MODO PLANEJAMENTO] Elabore um plano de execução detalhado com fases, KPIs e stack tecnológica para: ${inputValue}`);
    }
  };

  const handleAttach = (type: string) => {
    // Configurar o input baseado no tipo
    if (fileInputRef.current) {
      if (type === 'img') fileInputRef.current.accept = 'image/*';
      else if (type === 'pdf') fileInputRef.current.accept = '.pdf';
      else fileInputRef.current.accept = '.ts,.tsx,.js,.jsx,.json,.txt';

      fileInputRef.current.click();
    }
    setShowAttachMenu(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newAttachments = Array.from(files).map((file: any) => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type
      }));
      setAttachments(prev => [...prev, ...newAttachments]);
    }
    // Resetar o input para permitir selecionar o mesmo arquivo novamente
    e.target.value = '';
  };

  const removeAttachment = (id: string) => {
    setAttachments(prev => prev.filter(a => a.id !== id));
  };

  const isInitialState = messages.length === 0;

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] text-white flex flex-col items-center overflow-hidden font-sans">
      {isInitialState && <RayBackground />}

      {/* Floating UI Support */}
      <div className="absolute top-6 left-6 z-[120]">
        <button onClick={handleCloseRequest} className="group flex items-center gap-2 text-[#8a8a8f] hover:text-white transition-all bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-xl">
          <X className="size-4" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] hidden sm:inline text-neutral-500 group-hover:text-white transition-colors">Build Down</span>
        </button>
      </div>

      <div className="absolute top-6 right-6 z-[120] flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/5 rounded-full shadow-xl">
          <div className={`size-1.5 rounded-full ${isConfigured ? 'bg-[#58B573] animate-pulse' : 'bg-red-500'}`} />
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
            {isConfigured ? 'System Ready' : 'Offline'}
          </span>
          <Zap className="size-3 text-[#FFEE00]" />
        </div>
      </div>

      {/* Content Area */}
      <div className={`flex-1 w-full overflow-y-auto relative z-10 transition-all duration-700 ${isInitialState ? 'flex flex-col items-center justify-center p-4 pt-32 md:pt-40' : 'px-4 md:px-0 pt-24'}`}>

        {isInitialState ? (
          <div className="w-full max-w-[800px] flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-700">
            <div className="mb-8">
              <AnnouncementBadge text="Builder.ia Intelligence V3.0" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase leading-none">
              O que vamos <br />
              <span className="text-[#FFEE00] italic px-4 inline-block">Buildar</span> hoje?
            </h1>

            <p className="text-base md:text-lg text-neutral-500 mb-12 max-w-2xl font-medium tracking-wide">
              Estratégia, Inovação e Inteligência Acadêmica. <br />
              <span className="text-neutral-600 uppercase text-[10px] font-black tracking-[0.4em]">Sistemas de Dominância • Fernando Ramalho</span>
            </p>

            {/* Initial Chat Input wrapper */}
            <div className="w-full max-w-[680px]">
              <ChatInputLayout
                value={inputValue}
                onChange={setInputValue}
                onSend={handleSendMessage}
                onKeyDown={handleKeyDown}
                selectedModel={selectedModel}
                onModelChange={setSelectedModel}
                selectedPersona={selectedPersona}
                onPersonaChange={setSelectedPersona}
                handlePlan={handlePlan}
                handleAttach={handleAttach}
                handleStop={handleStopGeneration}
                handleReset={handleNewChat}
                handleExport={handleExportSession}
                attachments={attachments}
                removeAttachment={removeAttachment}
                isLoading={isLoading}
                showReset={!isInitialState}
              />
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {[
                "Tendências de IA no Brasil",
                "Metodologias Ágeis Acadêmicas",
                "Cidades Inteligentes e Futuro",
                "Arquitetura Cognitiva de Dados"
              ].map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(suggestion)}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-neutral-400 hover:text-white transition-all active:scale-95"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <div className="mt-16 flex items-center gap-4 text-neutral-600">
              <span className="text-xs uppercase tracking-[0.3em] font-black">ou importe de</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleImport('figma')}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 bg-black hover:border-[#FFEE00]/40 hover:text-white transition-all active:scale-95"
                >
                  <FigmaIcon className="size-3 text-[#FFEE00]" /> Figma
                </button>
                <button
                  onClick={() => handleImport('github')}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 bg-black hover:border-[#58B573]/40 hover:text-white transition-all active:scale-95"
                >
                  <Github className="size-3 text-[#58B573]" /> GitHub
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-[800px] mx-auto py-12 pb-32 space-y-8">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-5 duration-500`}>
                <div className="flex items-center gap-2 mb-2 px-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                  {msg.sender === 'bot' ? <span className={selectedPersona.color}>{selectedPersona.icon}</span> : null}
                  {msg.sender === 'user' ? 'Você' : `Builder.ia ${selectedPersona.name}`}
                </div>

                <div className={`relative group max-w-full md:max-w-[90%] p-6 rounded-2xl leading-relaxed text-sm ${msg.sender === 'user'
                  ? 'bg-[#FFEE00] text-black font-bold shadow-[0_8px_30px_rgba(255,238,0,0.15)]'
                  : 'bg-[#121212] text-neutral-200 border border-white/5'
                  }`}>
                  <div
                    className="prose prose-invert prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                  />

                  {msg.sender === 'bot' && (
                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-all">
                      <button
                        onClick={() => handleCopy(msg.text)}
                        title="Copiar"
                        className="p-1.5 rounded-lg bg-black/40 text-neutral-500 hover:text-white hover:bg-black/60 transition-all"
                      >
                        <Copy className="size-3.5" />
                      </button>
                      <button
                        onClick={() => handleExportMessage(msg.text, 'md')}
                        title="Salvar Markdown"
                        className="p-1.5 rounded-lg bg-black/40 text-neutral-500 hover:text-white hover:bg-black/60 transition-all"
                      >
                        <Download className="size-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex flex-col items-start animate-pulse">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#58B573] mb-4 px-2">PROCESSANDO LÓGICA ESTRATÉGICA...</div>
                <div className="bg-[#121212] border border-white/5 px-6 py-4 rounded-2xl flex gap-1.5">
                  <div className="size-1.5 bg-[#FFEE00] rounded-full animate-bounce" />
                  <div className="size-1.5 bg-[#58B573] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="size-1.5 bg-[#FFEE00] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Floating Chat Input (Permanent when messages exist) */}
      {!isInitialState && (
        <div className="w-full h-auto p-4 md:p-8 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent sticky bottom-0 z-[130]">
          <div className="max-w-[680px] mx-auto">
            <ChatInputLayout
              value={inputValue}
              onChange={setInputValue}
              onSend={handleSendMessage}
              onKeyDown={handleKeyDown}
              selectedModel={selectedModel}
              onModelChange={setSelectedModel}
              selectedPersona={selectedPersona}
              onPersonaChange={setSelectedPersona}
              handlePlan={handlePlan}
              handleAttach={handleAttach}
              handleStop={handleStopGeneration}
              handleReset={handleNewChat}
              handleExport={handleExportSession}
              attachments={attachments}
              removeAttachment={removeAttachment}
              isLoading={isLoading}
              showReset={true}
            />
          </div>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        multiple
      />

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="max-w-sm w-full p-8 bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] text-center space-y-6 ring-1 ring-white/10 animate-in zoom-in-95 duration-300">
            <div className="size-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto border border-red-500/20">
              <AlertTriangle className="text-red-500" size={32} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Resetar Contexto?</h2>
              <p className="text-xs text-neutral-500 leading-relaxed font-bold uppercase tracking-wider">Isso apagará todo o histórico da sessão atual e reiniciará os agentes.</p>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#8a8a8f] hover:text-white hover:bg-white/5 transition-all border border-white/10"
              >
                Cancelar
              </button>
              <button
                onClick={confirmReset}
                className="flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest bg-red-500 hover:bg-red-600 text-white transition-all shadow-[0_4px_20px_rgba(239,68,68,0.2)]"
              >
                Resetar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Close Confirmation Modal */}
      {showCloseConfirm && (
        <div className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="max-w-sm w-full p-8 bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] text-center space-y-6 ring-1 ring-white/10 animate-in zoom-in-95 duration-300">
            <div className="size-16 bg-[#FFEE00]/10 rounded-full flex items-center justify-center mx-auto border border-[#FFEE00]/20">
              <Info className="text-[#FFEE00]" size={32} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Encerrar Sessão?</h2>
              <p className="text-xs text-neutral-500 leading-relaxed font-bold uppercase tracking-wider">
                Ao sair, todo o progresso desta construção será perdido. <br />
                <span className="text-[#FFEE00]/70">Salve sua conversa antes caso queira.</span>
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowCloseConfirm(false)}
                className="flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#8a8a8f] hover:text-white hover:bg-white/5 transition-all border border-white/10"
              >
                Voltar
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest bg-white text-black hover:bg-neutral-200 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}

      {/* API Key Modal Fallback */}
      {!isConfigured && (
        <div className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="max-w-md w-full p-8 bg-[#1a1a1e] border border-white/10 rounded-3xl shadow-2xl text-center space-y-6">
            <div className="size-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto border border-red-500/20">
              <Info className="text-red-500" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-white">Núcleo Desconectado</h2>
            <p className="text-sm text-neutral-400">A API Key do Google Gemini não foi detectada.</p>
            <div className="p-4 bg-black/30 rounded-xl font-mono text-[10px] text-emerald-400">
              VITE_GEMINI_API_KEY=sua_chave
            </div>
            <button
              onClick={onClose}
              className="w-full py-3 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-all"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- REUSABLE CHAT INPUT LAYOUT ---

function ChatInputLayout({
  value, onChange, onSend, onKeyDown,
  selectedModel, onModelChange,
  selectedPersona, onPersonaChange,
  handlePlan, handleAttach, handleStop,
  handleReset, handleExport,
  attachments = [], removeAttachment,
  isLoading, showReset
}: any) {
  const [showAttach, setShowAttach] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="relative w-full">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
      <div className="relative rounded-2xl bg-[#1e1e22] ring-1 ring-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <div className="relative">
          {/* Attachment Chips */}
          {attachments.length > 0 && (
            <div className="flex flex-wrap gap-2 px-5 pt-3">
              {attachments.map((file: any) => (
                <div key={file.id} className="flex items-center gap-2 px-2 py-1 bg-white/5 border border-white/10 rounded-lg group animate-in fade-in zoom-in-95">
                  {file.type.includes('image') ? <Image className="size-3 text-[#FFEE00]" /> : <FileCode className="size-3 text-[#58B573]" />}
                  <span className="text-[10px] font-medium text-neutral-400 max-w-[120px] truncate">{file.name}</span>
                  <button
                    onClick={() => removeAttachment(file.id)}
                    className="size-4 flex items-center justify-center rounded-full hover:bg-red-500/20 text-neutral-600 hover:text-red-500 transition-all"
                  >
                    <X className="size-2.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Qual o tema da sua pesquisa?"
            className="w-full resize-none bg-transparent text-[15px] text-white placeholder-neutral-600 px-5 pt-4 pb-3 focus:outline-none min-h-[60px] max-h-[200px]"
          />
        </div>

        <div className="flex items-center justify-between px-3 pb-3 pt-1">
          <div className="flex items-center gap-1">
            <div className="relative">
              <button
                onClick={() => setShowAttach(!showAttach)}
                className="size-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all shadow-inner"
              >
                <Plus className={`size-4 transition-transform duration-200 ${showAttach ? 'rotate-45' : ''}`} />
              </button>

              {showAttach && (
                <>
                  <div className="fixed inset-0 z-40 pointer-events-auto" onClick={() => setShowAttach(false)} />
                  <div className="absolute bottom-full left-0 mb-2 z-50 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-xl p-1.5 min-w-[160px] shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 ring-1 ring-white/5">
                    {[
                      { id: 'pdf', icon: <Paperclip className="size-4" />, label: 'Anexar PDF' },
                      { id: 'img', icon: <Image className="size-4 text-[#FFEE00]" />, label: 'Imagem' },
                      { id: 'code', icon: <FileCode className="size-4 text-[#58B573]" />, label: 'Snippet' }
                    ].map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleAttach(item.id)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white transition-all text-left"
                      >
                        {item.icon} <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {showReset && (
              <div className="flex items-center gap-0.5 ml-1 mr-1">
                <button
                  onClick={handleReset}
                  title="Reset Context"
                  className="size-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-red-500/10 text-neutral-500 hover:text-red-400 transition-all"
                >
                  <Trash2 className="size-3.5" />
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowExportMenu(!showExportMenu)}
                    title="Export Session"
                    className={`size-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#FFEE00]/10 text-neutral-500 hover:text-[#FFEE00] transition-all ${showExportMenu ? 'text-[#FFEE00] bg-[#FFEE00]/5' : ''}`}
                  >
                    <Download className="size-3.5" />
                  </button>

                  {showExportMenu && (
                    <>
                      <div className="fixed inset-0 z-40 pointer-events-auto" onClick={() => setShowExportMenu(false)} />
                      <div className="absolute bottom-full left-0 mb-2 z-50 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-xl p-1.5 min-w-[170px] shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 ring-1 ring-white/5">
                        {[
                          { id: 'md', label: 'Export as Markdown', icon: <FileText className="size-3.5" /> },
                          { id: 'html', label: 'Export as WEB PAGE', icon: <Globe className="size-3.5" /> },
                          { id: 'txt', label: 'Export as PLAIN TXT', icon: <Clipboard className="size-3.5" /> }
                        ].map(opt => (
                          <button
                            key={opt.id}
                            onClick={() => {
                              handleExport(opt.id as any);
                              setShowExportMenu(false);
                            }}
                            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-neutral-400 hover:text-white hover:bg-white/5 transition-all"
                          >
                            {opt.icon} <span className="text-[9px] font-black uppercase tracking-widest">{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
            <ModelSelector selectedModel={selectedModel} onModelChange={onModelChange} />
            <div className="h-4 w-[1px] bg-white/10 mx-1 hidden sm:block" />
            <PersonaSelector selectedPersona={selectedPersona} onPersonaChange={onPersonaChange} />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePlan}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-black uppercase tracking-widest text-neutral-500 hover:text-[#FFEE00] hover:bg-[#FFEE00]/5 transition-all"
            >
              <Lightbulb className="size-4" />
              <span className="hidden sm:inline">Planejar</span>
            </button>

            {isLoading ? (
              <button
                onClick={handleStop}
                className="flex items-center gap-2 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest bg-red-500/20 hover:bg-red-500/30 text-red-500 border border-red-500/50 transition-all active:scale-95 animate-pulse"
              >
                <span>Parar</span>
                <div className="size-2 bg-red-500 rounded-sm animate-spin" />
              </button>
            ) : (
              <button
                onClick={() => onSend()}
                disabled={!value.trim()}
                className="flex items-center gap-2 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest bg-[#FFEE00] hover:bg-[#fff033] text-black transition-all disabled:opacity-30 active:scale-95 shadow-[0_4px_20px_rgba(255,238,0,0.2)]"
              >
                <span className="hidden sm:inline">Buildar</span>
                <SendHorizontal className="size-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IAView;
