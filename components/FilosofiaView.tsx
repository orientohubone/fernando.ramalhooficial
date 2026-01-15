import React, { useEffect } from 'react';
import { Language } from '../constants';
import BrandLogo from './BrandLogo';

interface FilosofiaViewProps {
  lang: Language;
  onClose: () => void;
}

const FilosofiaView: React.FC<FilosofiaViewProps> = ({ lang, onClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    { title: "CLAREZA", category: "Filosofia" },
    { title: "ESTRATÉGIA", category: "Pensamento" },
    { title: "SIMPLES", category: "Produto" },
    { title: "DADOS", category: "Análise" },
    { title: "PROPÓSITO", category: "Visão" },
    { title: "DIREÇÃO", category: "Futuro" },
  ];

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
        <header className="mb-16 md:mb-24 space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-8 md:w-12 bg-[#58B573]"></div>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-[#58B573]">FILOSOFIA</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.8]">
            MINHA <br />
            <span className="text-[#FFEE00]">FILOSOFIA</span>
          </h1>
        </header>

        {/* Introdução */}
        <section className="mb-20 space-y-8">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-200 leading-tight">
              Eu não acredito em improviso travestido de inovação.
              <span className="text-[#FFEE00]"> Acredito em clareza antes da velocidade.</span>
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed font-medium">
              Ao longo da minha trajetória, entendi que empresas, produtos e pessoas não quebram por falta de ideias, mas por falta de direção. Quando não existe visão, tudo vira execução cega. Quando não existe método, tudo vira esforço desperdiçado.
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed font-medium">
              Minha filosofia nasce desse ponto:
              <span className="text-white font-bold"> pensar antes de fazer, estruturar antes de escalar, entender antes de acelerar.</span>
            </p>
          </div>
        </section>

        {/* Pilares da Filosofia - Cards Minimalistas */}
        <section className="space-y-16">
          {items.map((item, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[8px] md:text-[10px] font-black font-mono text-neutral-700 tracking-[0.5em]">0{index + 1}</span>
                <div className="h-[1px] flex-1 bg-neutral-900" />
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-neutral-600">{item.category}</span>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 md:p-12 hover:bg-neutral-900/70 transition-all duration-300">
                <div className="flex items-start gap-6 space-y-8">
                  {/* Ícone Pulsante */}
                  <div className="flex-shrink-0">
                    {item.title === "CLAREZA" && (
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#FFEE00] rounded-full opacity-20 animate-ping"></div>
                        <div className="relative w-16 h-16 bg-[#FFEE00]/10 rounded-full flex items-center justify-center border-2 border-[#FFEE00]/30">
                          <svg className="w-8 h-8 text-[#FFEE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    {item.title === "ESTRATÉGIA" && (
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#58B573] rounded-full opacity-20 animate-ping"></div>
                        <div className="relative w-16 h-16 bg-[#58B573]/10 rounded-full flex items-center justify-center border-2 border-[#58B573]/30">
                          <svg className="w-8 h-8 text-[#58B573]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    {item.title === "SIMPLES" && (
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
                        <div className="relative w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center border-2 border-blue-500/30">
                          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    {item.title === "DADOS" && (
                      <div className="relative">
                        <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 animate-ping"></div>
                        <div className="relative w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center border-2 border-purple-500/30">
                          <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    {item.title === "PROPÓSITO" && (
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 animate-ping"></div>
                        <div className="relative w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center border-2 border-red-500/30">
                          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    {item.title === "DIREÇÃO" && (
                      <div className="relative">
                        <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20 animate-ping"></div>
                        <div className="relative w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center border-2 border-orange-500/30">
                          <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1 space-y-8">
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter transition-colors ${
                      item.title === "CLAREZA" ? "text-[#FFEE00] group-hover:text-yellow-300" :
                      item.title === "ESTRATÉGIA" ? "text-[#58B573] group-hover:text-green-300" :
                      item.title === "SIMPLES" ? "text-blue-500 group-hover:text-blue-300" :
                      item.title === "DADOS" ? "text-purple-500 group-hover:text-purple-300" :
                      item.title === "PROPÓSITO" ? "text-red-500 group-hover:text-red-300" :
                      item.title === "DIREÇÃO" ? "text-orange-500 group-hover:text-orange-300" :
                      "text-white"
                    }`}>
                      {item.title}
                    </h2>
                    
                    <div className="space-y-4 text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed font-medium">
                      {item.title === "CLAREZA" && (
                        <>
                          <p>Quanto mais eu estudo tecnologia, produto e neurociência, mais convicto fico de uma coisa: o simples não é raso, é refinado.</p>
                          <p>Sistemas complexos demais quebram pessoas. Processos confusos geram ruído. Produtos difíceis não escalam.</p>
                          <p>Minha busca constante é por soluções simples, mas profundamente pensadas. Simplicidade, para mim, é resultado de maturidade — não de preguiça.</p>
                        </>
                      )}
                      
                      {item.title === "ESTRATÉGIA" && (
                        <>
                          <p>Para mim, estratégia não é um slide bonito nem um framework preenchido por obrigação.</p>
                          <p><span className="text-white font-bold">Estratégia é um sistema vivo</span>, que conecta visão, dados, comportamento humano e execução.</p>
                          <p>É a capacidade de enxergar o todo antes de atuar no detalhe, tomar decisões com base em dados, não em ansiedade, criar narrativas que guiam pessoas, produtos e mercados.</p>
                          <p>Quando a estratégia é sólida, o crescimento deixa de ser sorte e passa a ser consequência.</p>
                        </>
                      )}
                      
                      {item.title === "SIMPLES" && (
                        <>
                          <p>Quanto mais eu estudo tecnologia, produto e neurociência, mais convicto fico de uma coisa: o simples não é raso, é refinado.</p>
                          <p>Sistemas complexos demais quebram pessoas. Processos confusos geram ruído. Produtos difíceis não escalam.</p>
                          <p>Minha busca constante é por soluções simples, mas profundamente pensadas. Simplicidade, para mim, é resultado de maturidade — não de preguiça.</p>
                        </>
                      )}
                      
                      {item.title === "DADOS" && (
                        <>
                          <p>Eu acredito profundamente em dados, métricas, estatística, IA e previsões. Mas também sei que nenhum dado existe fora do comportamento humano.</p>
                          <p>Por isso, minha atuação sempre cruza: análise racional, compreensão cognitiva, tomada de decisão consciente.</p>
                          <p><span className="text-white font-bold">Dados apontam caminhos. Pessoas percorrem esses caminhos.</span></p>
                          <p>Quando os dois não estão alinhados, o sistema falha.</p>
                        </>
                      )}
                      
                      {item.title === "PROPÓSITO" && (
                        <>
                          <p>Já vi empresas crescerem rápido e desmoronarem por dentro. Já vi equipes executarem muito e entenderem pouco. Já vi tecnologia avançada sendo usada sem consciência.</p>
                          <p>Minha filosofia rejeita crescimento vazio. Prefiro crescer com intenção, mesmo que mais devagar.</p>
                          <p><span className="text-white font-bold">Propósito, aqui, não é discurso emocional.</span> É saber por que aquilo existe, para quem existe e até onde faz sentido ir.</p>
                        </>
                      )}
                      
                      {item.title === "DIREÇÃO" && (
                        <>
                          <p>Vivemos uma era de excesso de estímulos, multitarefa, ansiedade e decisões reativas.</p>
                          <p>Nesse cenário, quem vence não é quem faz mais — é quem pensa melhor.</p>
                          <p>Minha filosofia é sobre isso: <span className="text-white font-bold">construir direção em meio ao caos, clareza em meio ao ruído, e sistemas que sustentem o futuro, não apenas o próximo mês.</span></p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Conclusão */}
        <section className="mt-32 pt-16 border-t border-neutral-900 text-center space-y-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-white">
            O futuro pertence a quem <span className="text-[#FFEE00]">constrói direção</span>
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed font-medium max-w-3xl mx-auto">
            Minha filosofia é sobre pensar melhor para construir melhor. 
            É sobre criar sistemas que sustentem o futuro, não apenas o próximo trimestre.
            É sobre clareza em meio ao caos e direção em meio ao ruído.
          </p>
        </section>
      </main>
    </div>
  );
};

export default FilosofiaView;
