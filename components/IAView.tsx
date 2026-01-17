import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../constants';
import BrandLogo from './BrandLogo';
import {
  Send,
  Trash2,
  Copy,
  Check,
  Sparkles,
  BarChart3,
  Search,
  Target,
  Zap,
  Info,
  ChevronRight,
  MessageSquare,
  ShieldCheck,
  Cpu
} from 'lucide-react';

interface IAViewProps {
  lang: Language;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const IAView: React.FC<IAViewProps> = ({ lang, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '🤖 **OrientoBot - Strategic Intelligence Agent**\n\nOlá! Sou seu agente de inteligência estratégica especializado no mercado brasileiro. Posso analisar setores, identificar tendências e fornecer insights acionáveis.\n\n**Como posso ajudar você hoje?**\n\n💡 *Exemplos:*\n- "Como está o mercado de fintechs no Brasil?"\n- "Quais as tendências em IA para saúde?"\n- "Oportunidades em energia renovável?"\n- "Future do agritech brasileiro?"',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Verificar se a API Key está configurada no ambiente
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    setIsConfigured(!!apiKey && apiKey !== 'sua-chave-aqui');
  }, []);

  const generateResponse = async (query: string): Promise<string> => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    console.log('API Key encontrada:', !!apiKey);
    console.log('API Key começa com:', apiKey?.substring(0, 10) + '...');

    if (!apiKey || apiKey === 'sua-chave-aqui') {
      return '⚠️ **API Key não configurada**\n\nPara usar o OrientoBot, o administrador precisa configurar a API Key do Google Gemini 3.0 Pro nas variáveis de ambiente.\n\nEntre em contato com o suporte para ativar esta funcionalidade.';
    }

    // Lista de modelos Gemini mais recentes para tentar em ordem
    const models = [
      'gemini-2.5-pro',
      'gemini-2.5-flash',
      'gemini-3-pro-preview',
      'gemini-3-flash-preview',
      'gemini-2.0-flash',
      'gemini-2.0-flash-lite',
      'gemini-flash-latest',
      'gemini-pro-latest',
      'gemini-2.5-flash-preview-09-2025',
      'gemini-2.5-flash-lite',
      'gemini-2.0-flash-exp'
    ];

    let lastError = null;

    for (const model of models) {
      try {
        console.log(`Tentando modelo: ${model}`);

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `Você é o OrientoBot, um agente de inteligência estratégica especializado no mercado brasileiro.

PERSONALIDADE:
- Analítico e preciso
- Baseado em dados
- Focado em insights acionáveis
- Linguagem profissional mas acessível

CAPACIDADES:
1. Análise de mercado setorial
2. Identificação de tendências
3. Mapeamento competitivo
4. Sugestões estratégicas

METODOLOGIA:
Sempre estruture sua resposta em:
1. 📊 Contexto Atual
2. 🔍 Sinais Críticos
3. 🎯 Oportunidades
4. ⚡ Recomendações

Pergunta do usuário: ${query}

Responda em português, de forma completa e detalhada, usando markdown para formatação.`
              }]
            }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 4096,
            }
          })
        });

        console.log(`Status da resposta (${model}):`, response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Erro no modelo ${model}:`, response.status, errorText);
          lastError = { status: response.status, message: errorText };
          continue; // Tentar próximo modelo
        }

        const data = await response.json();
        console.log(`Dados da resposta (${model}):`, data);

        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
          console.log(`✅ Modelo ${model} funcionou!`);
          return data.candidates[0].content.parts[0].text;
        } else {
          console.error(`Estrutura inválida no modelo ${model}:`, data);
          lastError = { message: `Estrutura inválida no modelo ${model}` };
          continue;
        }
      } catch (error) {
        console.error(`Erro no modelo ${model}:`, error);
        lastError = error;
        continue;
      }
    }

    // Se nenhum modelo funcionou, tentar listar modelos disponíveis
    try {
      console.log('Tentando listar modelos disponíveis...');
      const listResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);

      if (listResponse.ok) {
        const modelsData = await listResponse.json();
        console.log('Modelos disponíveis:', modelsData);

        const availableModels = modelsData.models
          .filter((model: any) => model.supportedGenerationMethods?.includes('generateContent'))
          .map((model: any) => model.name.split('/').pop())
          .join(', ');

        return `❌ **Nenhum modelo testado funcionou**\n\n**Modelos disponíveis para generateContent:**\n${availableModels || 'Nenhum encontrado'}\n\n**Tentamos:** ${models.join(', ')}\n\n**Último erro:** ${lastError?.message || 'Desconhecido'}\n\nVerifique sua API Key e permissões.`;
      }
    } catch (listError) {
      console.error('Erro ao listar modelos:', listError);
    }

    // Se nenhum modelo funcionou
    return `❌ **Nenhum modelo Gemini disponível**\n\nTentamos os modelos: ${models.join(', ')}\n\nÚltimo erro: ${lastError?.message || 'Desconhecido'}\n\nVerifique sua API Key e permissões.`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const botResponse = await generateResponse(inputValue);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };


  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleCopyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
    // Poderia adicionar um toast aqui se houvesse um componente disponível
  };

  const handleClearChat = () => {
    if (window.confirm('Deseja limpar todo o histórico da conversa?')) {
      setMessages([messages[0]]);
    }
  };

  const quickActions = [
    { label: 'Análise de Mercado', query: 'Faça uma análise estratégica do mercado de tecnologia no Brasil em 2026.' },
    { label: 'Tendências IA', query: 'Quais as principais tendências de IA Generativa para o setor financeiro brasileiro?' },
    { label: 'Oportunidades ESG', query: 'Identifique oportunidades de inovação em sustentabilidade (ESG) para o varejo.' },
    { label: 'Mapeamento Competitivo', query: 'Como realizar um mapeamento competitivo eficiente usando inteligência artificial?' }
  ];

  const formatMessage = (text: string) => {
    // Processamento mais robusto para seções estratégicas
    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-neutral-400 italic">$1</em>')
      .replace(/\n/g, '<br/>');

    // Estilização de seções específicas com ícones e containers
    const sections = [
      { key: '📊 Contexto Atual', icon: '<span class="text-[#FFEE00] mr-2">📊</span>', class: 'bg-neutral-800/40 border-l-2 border-[#FFEE00] p-3 md:p-4 my-4 rounded-r-lg' },
      { key: '🔍 Sinais Críticos', icon: '<span class="text-[#58B573] mr-2">🔍</span>', class: 'bg-neutral-800/40 border-l-2 border-[#58B573] p-3 md:p-4 my-4 rounded-r-lg' },
      { key: '🎯 Oportunidades', icon: '<span class="text-[#FFEE00] mr-2">🎯</span>', class: 'bg-neutral-800/40 border-l-2 border-[#FFEE00] p-3 md:p-4 my-4 rounded-r-lg' },
      { key: '⚡ Recomendações', icon: '<span class="text-[#58B573] mr-2">⚡</span>', class: 'bg-[#58B573]/10 border-l-2 border-[#58B573] p-3 md:p-4 my-4 rounded-r-lg' }
    ];

    sections.forEach(section => {
      const regex = new RegExp(section.key, 'g');
      formatted = formatted.replace(regex, `<div class="${section.class}"><div class="flex items-center font-black uppercase tracking-widest text-[10px] mb-2">${section.icon} ${section.key.split(' ')[1]} ${section.key.split(' ')[2] || ''}</div>`);
    });

    // Fechar as divs de seção (heurística simples: se abriu uma seção, fecha antes da próxima ou no fim)
    // Nota: Isso é uma simplificação, em um cenário real usaríamos um parser markdown real.

    return formatted;
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-hidden flex flex-col animate-in fade-in duration-700">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FFEE00]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#58B573]/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      {/* Navigation */}
      <nav className="relative w-full z-[110] px-4 md:px-12 py-4 md:py-6 flex justify-between items-center border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <button onClick={onClose} className="group flex items-center gap-4">
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 group-hover:text-white transition-colors">VOLTAR</span>
        </button>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <div className={`w-2 h-2 rounded-full ${isConfigured ? 'bg-[#58B573] animate-pulse' : 'bg-red-500'}`}></div>
            <span className="text-[9px] font-black uppercase tracking-widest text-white/50">
              {isConfigured ? 'SISTEMA ONLINE' : 'SISTEMA OFFLINE'}
            </span>
          </div>
          <BrandLogo size="md" />
        </div>
      </nav>

      <main className="flex-1 flex overflow-hidden relative z-10">
        {/* Sidebar - Desktop Only */}
        <aside className="hidden lg:flex w-80 flex-col border-r border-white/5 p-8 space-y-8 bg-black/20">
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FFEE00]">CAPACIDADES IA</h3>
            <div className="space-y-3">
              {[
                { icon: <BarChart3 size={14} />, label: 'Análise Setorial' },
                { icon: <Search size={14} />, label: 'Mapeamento de Tendências' },
                { icon: <Target size={14} />, label: 'Inteligência Competitiva' },
                { icon: <Cpu size={14} />, label: 'Arquitetura de Dados' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group cursor-default">
                  <div className="text-[#58B573] group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/5">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#58B573]">STATUS ESTRATÉGICO</h3>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-black text-neutral-500 uppercase">Precisão</span>
                <span className="text-[10px] font-black text-[#FFEE00]">98.4%</span>
              </div>
              <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#FFEE00] w-[98%]"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-black text-neutral-500 uppercase">Latência</span>
                <span className="text-[10px] font-black text-[#58B573]">240ms</span>
              </div>
              <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#58B573] w-[15%]"></div>
              </div>
            </div>
          </div>

          <div className="mt-auto p-4 bg-[#FFEE00]/5 rounded-xl border border-[#FFEE00]/10">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck size={14} className="text-[#FFEE00]" />
              <span className="text-[10px] font-black text-[#FFEE00] uppercase tracking-wider">Segurança</span>
            </div>
            <p className="text-[9px] text-neutral-500 leading-relaxed font-medium">
              Dados processados via infraestrutura criptografada Google Cloud.
            </p>
          </div>
        </aside>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-black/10">
          {/* Header Mobile/Compact */}
          <div className="p-4 md:p-10 pb-2 md:pb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#FFEE00]"></div>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-[#FFEE00]">STRATEGIC AGENT</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
              ORIENTOBOT <span className="text-[#FFEE00]">3.0</span>
            </h1>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto px-4 md:px-10 space-y-8 pb-10 scrollbar-thin scrollbar-thumb-white/5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}
              >
                <div className="flex items-center gap-2 mb-2 px-2">
                  <span className="text-[8px] font-black uppercase tracking-widest text-neutral-600">
                    {message.sender === 'user' ? 'VOCÊ' : 'ORIENTOBOT'}
                  </span>
                  <span className="text-[8px] text-neutral-800 font-medium">
                    {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                <div className="relative group max-w-full md:max-w-[85%]">
                  <div
                    className={`px-4 md:px-6 py-5 rounded-2xl text-sm leading-relaxed shadow-xl ${message.sender === 'user'
                      ? 'bg-[#FFEE00] text-black rounded-tr-none font-medium'
                      : 'bg-neutral-900/80 backdrop-blur-md text-neutral-200 rounded-tl-none border border-white/5'
                      }`}
                  >
                    <div
                      className="prose prose-invert prose-sm max-w-none break-words"
                      dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                    />
                  </div>

                  {message.sender === 'bot' && (
                    <button
                      onClick={() => handleCopyMessage(message.text)}
                      className="absolute top-2 right-[-40px] p-2 text-neutral-600 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      title="Copiar resposta"
                    >
                      <Copy size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex flex-col items-start animate-pulse">
                <div className="flex items-center gap-2 mb-2 px-2">
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#58B573]">PROCESSANDO INSIGHTS</span>
                </div>
                <div className="bg-neutral-900/50 border border-white/5 px-6 py-4 rounded-2xl rounded-tl-none">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-[#58B573] rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-[#58B573] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-[#58B573] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Aguardando resposta do núcleo estratégico...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions & Input Area */}
          <div className="p-6 md:p-10 pt-0 bg-gradient-to-t from-black via-black/80 to-transparent">
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mb-6">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInputValue(action.query);
                    // Opcional: enviar automaticamente
                  }}
                  className="px-4 py-2 bg-white/5 hover:bg-[#FFEE00]/10 border border-white/10 hover:border-[#FFEE00]/30 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-[#FFEE00] transition-all flex items-center gap-2 group"
                >
                  <Sparkles size={12} className="group-hover:animate-spin" />
                  {action.label}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFEE00]/20 to-[#58B573]/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex flex-col sm:flex-row gap-3 p-2 bg-neutral-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl focus-within:border-[#FFEE00]/50 transition-all shadow-2xl">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={isConfigured ? "Descreva seu desafio estratégico ou peça uma análise..." : "Aguardando configuração do núcleo..."}
                  disabled={!isConfigured}
                  className="flex-1 px-6 py-4 bg-transparent text-white placeholder-neutral-600 focus:outline-none text-sm font-medium"
                />
                <div className="flex items-center gap-2 px-2">
                  <button
                    onClick={handleClearChat}
                    className="p-4 text-neutral-600 hover:text-red-500 transition-colors"
                    title="Limpar conversa"
                  >
                    <Trash2 size={20} />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={!isConfigured || !inputValue.trim() || isLoading}
                    className="flex items-center gap-3 px-8 py-4 bg-[#FFEE00] text-black font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-yellow-300 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#FFEE00]/10"
                  >
                    {isLoading ? '...' : (
                      <>
                        ENVIAR
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <p className="text-[9px] font-black text-neutral-700 uppercase tracking-[0.4em]">
                OrientoBot v3.0 // Strategic Intelligence Core // Fernando Ramalho
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Admin Instructions Overlay - Only if not configured */}
      {!isConfigured && (
        <div className="absolute inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="max-w-md w-full p-8 bg-neutral-900 border border-white/10 rounded-3xl shadow-2xl space-y-6">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto border border-red-500/20">
              <Info className="text-red-500" size={32} />
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Núcleo Desconectado</h2>
              <p className="text-sm text-neutral-500 font-medium">A API Key do Google Gemini não foi detectada no ambiente.</p>
            </div>
            <div className="p-6 bg-black/40 rounded-2xl border border-white/5 space-y-4">
              <p className="text-xs font-black uppercase tracking-widest text-[#FFEE00]">Configuração Necessária:</p>
              <code className="block p-3 bg-black rounded-lg text-[10px] text-[#58B573] font-mono border border-white/5">
                VITE_GEMINI_API_KEY=sua_chave_aqui
              </code>
              <p className="text-[10px] text-neutral-600 leading-relaxed italic">
                Adicione a chave ao seu arquivo .env e reinicie o servidor de desenvolvimento para ativar o OrientoBot.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-colors"
            >
              ENTENDIDO
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IAView;
