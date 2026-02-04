export interface FAQItem {
  question: string;
  answer: string;
}

export interface CapacityFAQ {
  [key: string]: FAQItem[];
}

export const CAPACITY_FAQS: CapacityFAQ = {
  // Arquitetura Cognitiva
  cognitive: [
    {
      question: "O que é arquitetura cognitiva e como ela beneficia meu negócio?",
      answer: "Arquitetura cognitiva é a estruturação de sistemas de pensamento e decisão que permitem ao negócio operar com clareza estratégica. Ela organiza como sua empresa processa informações, toma decisões e responde ao mercado, resultando em 300% mais eficiência operacional e redução de 95% em erros de contexto."
    },
    {
      question: "Como a arquitetura cognitiva cria dominância de mercado?",
      answer: "Arquitetura cognitiva cria dominância através de 4 pilares: (1) Reorganização do campo mental do mercado, (2) Arquitetura de categoria, (3) Segurança cognitiva, (4) Execução implacável. Isso posiciona sua marca como escolha natural antes mesmo da comparação com concorrentes."
    },
    {
      question: "Quais são os benefícios mensuráveis da arquitetura cognitiva?",
      answer: "Benefícios diretos: (1) Redução de 95% em erros de decisão, (2) Aumento de 300% em eficiência operacional, (3) Melhoria de 200% em alinhamento estratégico, (4) Redução de 60% em tempo de ciclo de decisão."
    },
    {
      question: "Como começar a implementar arquitetura cognitiva na minha empresa?",
      answer: "Começamos com diagnóstico cognitivo (2 semanas) para mapear o campo mental atual, seguido por redesign dos processos de decisão (4-6 semanas) e implementação progressiva (8-12 semanas). Cada fase gera valor imediato e mensurações claras."
    }
  ],

  // Estratégia
  strategy: [
    {
      question: "O que é estratégia de dominância e como funciona?",
      answer: "Estratégia de dominância é o design de posicionamentos de poder que tornam sua liderança inevitável. Não é sobre prever o futuro, mas arquitetar a lógica que torna certos resultados inevitáveis. Isso cria moats competitivos insuperáveis."
    },
    {
      question: "Como vocês criam estratégias que realmente funcionam?",
      answer: "Construímos estratégias baseadas em 3 fundamentos: (1) Psicologia comportamental do seu público, (2) Análise preditiva de mercado, (3) Arquitetura de mensagem. Isso cria campanhas que não apenas vendem, mas constroem relacionamento duradouro com o cliente."
    },
    {
      question: "Qual o ROI esperado com consultoria estratégica?",
      answer: "Nossos clientes relatam ROI médio de 300% no primeiro ano. Isso inclui aumento de receita (40-60%), redução de custos (25-35%), e melhoria de eficiência operacional (50-70%). Cada projeto tem métricas específicas definidas no início."
    },
    {
      question: "Vocês atendem empresas de que portes?",
      answer: "Atendemos desde startups em scale-up até Fortune 500. Nossa metodologia é adaptável: startups focam em growth e product-market fit, enquanto corporações focam em transformação digital e inovação sistêmica."
    }
  ],

  // Inovação
  inovacao: [
    {
      question: "Como vocês criam sistemas de dominância de mercado?",
      answer: "Construímos sistemas de dominância através de 4 pilares: (1) Reorganização do campo mental do mercado, (2) Arquitetura de categoria, (3) Segurança cognitiva, (4) Execução implacável. Isso cria barreiras de entrada insuperáveis e posiciona sua empresa como líder inevitável."
    },
    {
      question: "O que é inovação disruptiva vs incremental?",
      answer: "Inovação disruptiva cria novos mercados e torna obsoletos os existentes (ex: Uber vs táxis). Inovação incremental melhora produtos existentes (ex: melhorias no mesmo produto). Nós focamos em disruptiva, que gera 10x mais valor e cria moats competitivos duradouros."
    },
    {
      question: "Como identificar oportunidades de inovação no meu negócio?",
      answer: "Usamos nossa metodologia proprietária de mapeamento de lacunas cognitivas. Analisamos: (1) Dores não atendidas, (2) Ineficiências sistêmicas, (3) Mudanças comportamentais, (4) Tecnologias emergentes. Isso revela oportunidades que seus concorrentes não enxergam."
    },
    {
      question: "Qual o primeiro passo para inovar?",
      answer: "Começamos com um Innovation Sprint de 2 semanas: diagnóstico do ecossistema, identificação de oportunidades, e protótipo rápido da solução mais promissora. Isso gera valor imediato e valida o approach antes de investimento maior."
    }
  ],

  // IA
  ia: [
    {
      question: "Que tipos de soluções de IA vocês implementam?",
      answer: "Implementamos IA em 3 camadas: (1) IA Operacional (automação de processos), (2) IA Analítica (insights e previsões), (3) IA Generativa (conteúdo e interação). Cada camada tem ROI específico e implementação progressiva para minimizar riscos."
    },
    {
      question: "Como garantir que a IA não cometa erros (hallucinations)?",
      answer: "Usamos arquitetura de IA com 95% menos hallucinations através de: (1) Ontologia de domínio, (2) Grounding em dados reais, (3) Validadores lógicos, (4) Human-in-the-loop estratégico. Isso garante confiabilidade para aplicações críticas."
    },
    {
      question: "Quanto custa implementar IA?",
      answer: "Projetos de IA variam de R$50k a R$500k dependendo da complexidade. Começamos com MVPs de R$50-100k para validar valor antes de escalar. O payback geralmente ocorre em 6-12 meses através de automação e eficiência."
    },
    {
      question: "Meus dados estão seguros com IA?",
      answer: "Sim. Usamos: (1) Criptografia end-to-end, (2) Processamento em ambiente isolado, (3) Conformidade LGPD, (4) Auditoria completa. Seus dados nunca são usados para treinar modelos públicos e permanecem 100% sob seu controle."
    }
  ],

  // Design
  design: [
    {
      question: "Qual a diferença entre design visual e design sistêmico?",
      answer: "Design visual foca na aparência (cores, tipografia). Design sistêmico cria ecossistemas inteiros de experiência: desde a identidade visual até a jornada do usuário, sistemas de componentes, e governança de design. Isso gera consistência e escala impossíveis com design pontual."
    },
    {
      question: "Como o design impacta o ROI do negócio?",
      answer: "Design de qualidade gera ROI direto: (1) +200% conversão, (2) -40% churn, (3) +60% engajamento, (4) -50% custos de suporte. Empresas design-led superam o mercado em 219% segundo estudo da McKinsey."
    },
    {
      question: "Vocês criam identidades visuais completas?",
      answer: "Sim. Desenvolvemos ecossistemas de marca: (1) Arquitetura de marca, (2) Identidade visual, (3) Sistema tipográfico, (4) Paleta de cores, (5) Guidelines completas, (6) Assets digitais e físicos. Tudo pensado para escala e consistência."
    },
    {
      question: "Como medir o sucesso do design?",
      answer: "Usamos métricas claras: (1) Taxa de conversão, (2) Tempo de engajamento, (3) Net Promoter Score, (4) Consistência visual, (5) Eficiência de produção. Cada projeto tem KPIs específicos alinhados aos objetivos de negócio."
    }
  ],

  // Marketing
  marketing: [
    {
      question: "Como vocês criam estratégias de marketing que funcionam?",
      answer: "Construímos estratégias baseadas em 3 fundamentos: (1) Psicologia comportamental do seu público, (2) Análise preditiva de mercado, (3) Arquitetura de mensagem. Isso cria campanhas que não apenas vendem, mas constroem relacionamento duradouro com o cliente."
    },
    {
      question: "Qual o ROI médio de marketing digital?",
      answer: "Nossos clientes alcançam ROI de 5:1 a 10:1 em marketing digital. Isso inclui: (1) 300% mais leads qualificados, (2) 60% redução CAC, (3) 250% aumento LTV. Cada canal tem métricas específicas e otimização contínua."
    },
    {
      question: "Vocês trabalham com quais canais de marketing?",
      answer: "Operamos em ecossistema completo: (1) Search (SEO/SEM), (2) Social Media, (3) Content Marketing, (4) Email Marketing, (5) Influencers, (6) Performance Marketing. A estratégia integra os canais certos para seu público e objetivo."
    },
    {
      question: "Como saber se o marketing está funcionando?",
      answer: "Implementamos dashboard em tempo real com: (1) CPA/CPC, (2) Conversion Rate, (3) ROAS, (4) Engagement Metrics, (5) Brand Lift. Reuniões semanais de otimização garantem resultados contínuos."
    }
  ],

  // Mídia Paga
  midiaPaga: [
    {
      question: "Qual a diferença entre mídia paga e orgânica?",
      answer: "Mídia paga gera resultados imediatos através de anúncios (Google Ads, Meta Ads). Orgânica constrói autoridade longa-prazo (SEO, conteúdo). A estratégia ideal integra ambas: paga para escala rápida, orgânica para sustentabilidade e redução de custos."
    },
    {
      question: "Quanto investir em mídia paga?",
      answer: "Recomendamos começar com 5-10% da receita para empresas estabelecidas, ou 15-20% para growth. O importante é: (1) Testar e aprender, (2) Escalar o que funciona, (3) Otimizar continuamente. Começamos com budgets de teste de R$5-10k/mês."
    },
    {
      question: "Como evitar desperdício em mídia paga?",
      answer: "Usamos sistema de precisão: (1) Segmentação comportamental, (2) Lookalikes avançados, (3) Creative testing sistemático, (4) Bid automation, (5) Attribution modeling. Isso reduz desperdício em 70% e aumenta ROAS em 300%."
    },
    {
      question: "Quais plataformas de mídia paga vocês usam?",
      answer: "Operamos em ecossistema completo: Google Ads (Search/Display/YouTube), Meta Ads (Facebook/Instagram), LinkedIn Ads, TikTok Ads, Programatic, e marketplaces específicos. A escolha depende do seu público e objetivo."
    }
  ],

  // Vibe Coding
  'vibe-coding': [
    {
      question: "O que é Vibe Coding?",
      answer: "Vibe Coding é nossa metodologia proprietária de desenvolvimento acelerado usando IA. Combinamos: (1) AI-assisted coding, (2) Low-code/no-code, (3) Component libraries, (4) Automated testing. Isso reduz development time em 80% mantendo qualidade enterprise."
    },
    {
      question: "Como Vibe Coding acelera o desenvolvimento?",
      answer: "Aceleramos através de: (1) Geração de código por IA, (2) Reutilização inteligente de componentes, (3) Deploy automation, (4) Continuous integration. Projetos que levariam 6 meses ficam prontos em 6 semanas sem sacrificar qualidade."
    },
    {
      question: "O código gerado por IA é seguro?",
      answer: "Sim. Temos processo rigoroso: (1) Code review humano, (2) Security scanning automatizado, (3) Testing extensivo, (4) Documentation completa. O código IA é assistência, não substituição total do engenheiro."
    },
    {
      question: "Que tipo de projetos vocês desenvolvem com Vibe Coding?",
      answer: "Desenvolvemos: (1) Web applications, (2) Mobile apps, (3) APIs e microservices, (4) Dashboards, (5) E-commerce, (6) SaaS platforms. A metodologia se adapta a qualquer stack tecnológica."
    }
  ],

  // Marcas
  marcas: [
    {
      question: "Por que registrar minha marca é importante?",
      answer: "Registro de marca cria ativo intangível valioso: (1) Protege contra cópias, (2) Permite monetização (licenciamento), (3) Aumenta valuation da empresa, (4) Facilita expansão. Marcas fortes valem até 30% do valuation de empresas."
    },
    {
      question: "Quanto tempo leva para registrar uma marca no INPI?",
      answer: "O processo leva 18-24 meses em média. Fases: (1) Depósito (1 mês), (2) Exame formal (6-12 meses), (3) Publicação (2 meses), (4) Concessão (6-12 meses). Começamos com busca de viabilidade para garantir sucesso."
    },
    {
      question: "Quanto custa registrar uma marca?",
      answer: "Custos variam: (1) INPI: R$355-655 por classe, (2) Honorários advocatícios: R$3-8k, (3) Oposição/defesa: variável. Investimento total típico: R$5-15k por marca. ROI vem através de proteção e valorização do ativo."
    },
    {
      question: "Vocês ajudam com marcas internacionais?",
      answer: "Sim. Operamos em: (1) Madrid Protocol (150+ países), (2) USPTO (EUA), (3) EUIPO (Europa), (4) INPI (Brasil). Estratégia coordenada garante proteção global consistente com seus planos de expansão."
    }
  ],

  // Domínio
  dominio: [
    {
      question: "Qual a importância de um bom domínio?",
      answer: "Domínio é seu endereço digital principal. Impacta: (1) Brand recognition, (2) SEO rankings, (3) Credibilidade, (4) Marketing effectiveness. Domínios premium podem valer 6-7 dígitos e são ativos estratégicos."
    },
    {
      question: "Como escolher o melhor domínio?",
      answer: "Critérios essenciais: (1) Curto e memorável, (2) Fácil de soletrar, (3) .com preferencialmente, (4) Sem hífens/números, (5) Disponível em social media. Fazemos análise de disponibilidade e estratégia de portfólio."
    },
    {
      question: "Vocês negociam aquisição de domínios premium?",
      answer: "Sim. Temos expertise em: (1) Valuation de domínios, (2) Negociação com proprietários, (3) Transferência segura, (4) Estratégia de portfólio. Já negociamos domínios de 5 a 6 dígitos para clientes."
    },
    {
      question: "Como proteger meu portfólio de domínios?",
      answer: "Implementamos estratégia completa: (1) Registro em múltiplas TLDs, (2) Domínios de proteção (typosquatting), (3) Auto-renewal, (4) Monitoring, (5) Brand enforcement. Isso evita cybersquatting e confusão de marca."
    }
  ],

  // Sites
  sites: [
    {
      question: "O que torna um site eficaz para negócios?",
      answer: "Sites eficazes convertem visitantes em clientes através de: (1) Design persuasivo, (2) Experiência fluida, (3) Conteúdo relevante, (4) CTAs estratégicos, (5) Performance otimizada. Nossos sites convertem 3-5x acima da média do mercado."
    },
    {
      question: "Quanto tempo leva para desenvolver um site profissional?",
      answer: "Sites corporativos: 4-8 semanas. E-commerce: 8-12 semanas. SaaS: 12-20 semanas. Processo: (1) Discovery (1 semana), (2) Design (2-3 semanas), (3) Development (2-6 semanas), (4) Testing & Launch (1 semana)."
    },
    {
      question: "Vocês usam WordPress ou desenvolvimento customizado?",
      answer: "Ambos. WordPress para conteúdo e sites institucionais (rápido e econômico). Customizado para SaaS, e-commerce complexo, e performance crítica. Escolhemos a melhor tecnologia para seus objetivos e orçamento."
    },
    {
      question: "Como garantem que meu site ranqueia no Google?",
      answer: "Implementamos SEO técnico e conteúdo: (1) Site architecture otimizada, (2) Performance Core Web Vitals, (3) Schema markup, (4) Content strategy, (5) Link building. Nossos sites alcançam top 3 rankings em 6-12 meses."
    }
  ],

  // Ecommerce
  ecommerce: [
    {
      question: "Qual plataforma de ecommerce vocês recomendam?",
      answer: "Depende do volume e complexidade: (1) Shopify/Rappi para iniciantes, (2) Vtex/Nuvemshop para médio porte, (3) Customizado para grande porte. Analisamos seu volume, produtos, e integrações necessárias para recomendar a melhor solução."
    },
    {
      question: "Quanto custa montar uma loja virtual?",
      answer: "Varia muito: Loja básica: R$10-30k. Loja profissional: R$30-100k. Enterprise: R$100k+. Inclui: (1) Plataforma, (2) Design, (3) Desenvolvimento, (4) Integrações, (5) Treinamento. ROI geralmente em 6-18 meses."
    },
    {
      question: "Como aumentar a taxa de conversão em ecommerce?",
      answer: "Usamos metodologia testada: (1) Otimização de checkout (reduz abandono 40%), (2) Product pages persuasivas (+25% conversão), (3) Trust signals (+30% confiança), (4) Personalização (+40% AOV), (5) Retargeting (+150% recuperação)."
    },
    {
      question: "Vocês integram com marketplaces?",
      answer: "Sim. Integramos com: (1) Mercado Livre, (2) Amazon, (3) Magazine Luiza, (4) Americanas, (5) Via. Sincronizamos: estoque, pedidos, preços, e analytics. Isso multiplica canais de venda em 3-5x sem esforço manual."
    }
  ]
};

// Helper function to get FAQ by capacity slug
export const getFAQByCapacity = (capacitySlug: string): FAQItem[] => {
  return CAPACITY_FAQS[capacitySlug] || [];
};

// Helper function to get FAQ by capacity title (match by title)
export const getFAQByTitle = (title: string): FAQItem[] => {
  const titleMap: { [key: string]: string } = {
    'COGNITIVE ARCHITECTURE': 'cognitive',
    'ARQUITETURA COGNITIVA': 'cognitive',
    'STRATEGIES': 'strategy',
    'ESTRATÉGIA': 'strategy',
    'STRATEGY': 'strategy',
    'INOVAÇÃO': 'inovacao',
    'INNOVATION': 'inovacao',
    'IA': 'ia',
    'AI': 'ia',
    'DESIGN': 'design',
    'MARKETING': 'marketing',
    'MÍDIA PAGA': 'midiaPaga',
    'PAID MEDIA': 'midiaPaga',
    'VIBE CODING': 'vibe-coding',
    'MARCAS': 'marcas',
    'BRANDS': 'marcas',
    'DOMÍNIO': 'dominio',
    'DOMAIN': 'dominio',
    'SITES': 'sites',
    'WEBSITES': 'sites',
    'ECOMMERCE': 'ecommerce',
    'E-COMMERCE': 'ecommerce'
  };
  
  const slug = titleMap[title.toUpperCase()];
  return slug ? CAPACITY_FAQS[slug] : [];
};
