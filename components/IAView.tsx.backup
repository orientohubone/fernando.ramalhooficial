import React, { useState, useEffect } from 'react';
import { Language } from '../constants';
import BrandLogo from './BrandLogo';

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

  const formatMessage = (text: string) => {
    // Converter markdown para HTML simples
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/(\d+\.\s)/g, '<br/>$1')
      .replace(/📊|🔍|🎯|⚡|🤖|💡|⚠️|❌|✅/g, (match) => `<span style="font-size: 1.2em;">${match}</span>`)
      .replace(/\n/g, '<br/>');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Navigation */}
      <nav className="sticky top-0 left-0 w-full z-[110] px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference">
        <button onClick={onClose} className="group flex items-center gap-4">
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">VOLTAR</span>
        </button>
        <BrandLogo size="md" />
      </nav>

      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-20 pb-40">
        {/* Header */}
        <header className="mb-8 md:mb-12 space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8 md:w-12 bg-[#FFEE00]"></div>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-[#FFEE00]">INTELIGÊNCIA ARTIFICIAL</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.8]">
            ORIENTOBOT <br />
            <span className="text-[#FFEE00]">IA</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-neutral-500 max-w-2xl font-medium tracking-tight">
            Agente estratégico para análise de mercado e identificação de oportunidades no Brasil.
          </p>
        </header>

        {/* Chat Interface */}
        <div className="bg-neutral-900/30 border border-neutral-800 rounded-lg overflow-hidden">
          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-[#FFEE00] text-black'
                      : 'bg-neutral-800 text-white'
                  }`}
                >
                  <div
                    className="text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                  />
                  <div className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-800 text-white px-4 py-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FFEE00] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#FFEE00] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-[#FFEE00] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <span className="text-sm ml-2">Analisando...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-neutral-800 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isConfigured ? "Pergunte sobre mercados, tendências ou estratégias..." : "Aguardando configuração da API..."}
                disabled={!isConfigured}
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFEE00] focus:ring-1 focus:ring-[#FFEE00]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSendMessage}
                disabled={!isConfigured || !inputValue.trim() || isLoading}
                className="px-6 py-3 bg-[#FFEE00] text-black font-black text-sm uppercase tracking-wider rounded-lg hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? '...' : 'ENVIAR'}
              </button>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-full">
            <div className={`w-2 h-2 rounded-full ${isConfigured ? 'bg-green-500' : 'bg-yellow-500'} ${isConfigured ? 'animate-pulse' : ''}`}></div>
            <span className="text-xs text-neutral-400">
              {isConfigured ? 'API Configurada' : 'API não configurada'}
            </span>
          </div>
        </div>

        {/* Instructions for admin */}
        {!isConfigured && (
          <div className="mt-8 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg">
            <h3 className="text-lg font-bold text-white mb-4">Para Administradores</h3>
            <div className="text-sm text-neutral-400 space-y-2">
              <p>Para configurar o OrientoBot:</p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Obtenha sua API Key do Google Gemini 3.0 Pro</li>
                <li>Adicione ao arquivo .env:</li>
                <code className="block bg-neutral-800 p-2 rounded text-xs mt-2">
                  VITE_GEMINI_API_KEY=sua-api-key-aqui
                </code>
                <li>Reinicie o servidor de desenvolvimento</li>
              </ol>
              <p className="mt-4 text-xs">
                Para obter sua API Key: <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-[#FFEE00] hover:text-yellow-300">Google AI Studio</a>
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default IAView;
