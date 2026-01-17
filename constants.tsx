
import { HighlightColor, ListItem, Principle, CategoryGroup } from './types';
import { ALL_REPORTS } from './reportsData';

export const COLORS = {
  YELLOW: '#FFEE00',
  GREEN: '#58B573',
  DARK: '#050505',
  NEUTRAL: '#1A1A1A'
};

export type Language = 'PT' | 'EN';

export const TRANSLATIONS = {
  PT: {
    nav: { strategy: 'CAPACIDADES', philosophy: 'FILOSOFIA', contact: 'CONTATO', back: 'VOLTAR', about: 'SOBRE', reports: 'REPORTS 2026', creative: 'CRAFT' },
    hero: {
      line1: 'INOVAÇÃO',
      line2: 'ESTRATÉGICA',
      description: 'Arquiteto de lógica e inovação. Especialista em desenhar as fundações estratégicas que precedem e sustentam ecossistemas de alta performance.',
      focus: 'FOCO ATUAL'
    },
    reportsPage: {
      title: 'INTELLIGENCE',
      subtitle: 'HUB 2026',
      description: 'Análises proprietárias sobre a convergência entre tecnologia, economia e comportamento humano no território brasileiro.',
      ui: {
        summary: 'SUMÁRIO EXECUTIVO',
        methodology: 'METODOLOGIA DE INTELIGÊNCIA',
        analysis: 'ANÁLISE PRINCIPAL DE MERCADO',
        findings: 'PRINCIPAIS DESCOBERTAS',
        recommendations: 'CONCLUSÕES & RECOMENDAÇÕES',
        nextSteps: 'PRÓXIMOS PASSOS',
        references: 'REFERÊNCIAS & DADOS',
        backToHub: 'VOLTAR AO HUB',
        access: 'ACESSAR REPORT',
        truthIndex: 'VERACIDADE PROBABILÍSTICA',
        metricsTitle: 'INDICADORES DE PERFORMANCE',
        insightsTitle: 'DEEP INSIGHTS & PROJEÇÕES',
        sourcesTitle: 'FONTES & VERIFICAÇÃO'
      },
      categories: {
        all: 'TODOS',
        market: 'MERCADO & IA',
        algo: 'ALGORITMOS',
        data: 'DADOS',
        esg: 'SUSTENTABILIDADE',
        consumer: 'COMPORTAMENTO',
        finance: 'FINANÇAS',
        mobility: 'MOBILIDADE',
        health: 'SAÚDE',
        edu: 'EDUCAÇÃO',
        culture: 'CULTURA',
        exp: 'EXPERIMENTAL'
      },
      items: ALL_REPORTS
    },
    about: {
      title: 'O ARQUITETO',
      subtitle: 'Fernando Ramalho é a interseção entre o rigor analítico e a execução criativa.',
      manifesto: 'ESTRATÉGIA NÃO É SOBRE PREVER O FUTURO, MAS SOBRE ARQUITETAR A LÓGICA QUE O TORNA INEVITÁVEL. TRADUZO COMPLEXIDADE EM CLAREZA ABSOLUTA, DESENHANDO SISTEMAS ONDE A INOVAÇÃO DEIXA DE SER UMA APOSTA PARA SE TORNAR O NÚCLEO DE UMA VANTAGEM COMPETITIVA IMPLACÁVEL.',
      stats: [
        { label: 'VISÃO', value: 'ESTRATÉGICA' },
        { label: 'EXECUÇÃO', value: 'SISTÊMICA' },
        { label: 'ENTREGA', value: 'IMPACTO' }
      ],
      mantras: ['NÃO PARE', 'AVANCE', 'TERMINE'],
      bio: 'Desde 2019 criando soluções, estratégias e marcas que definem novos padrões de mercado. Minha prática une o rigor analítico à profundidade da psicologia de consumo, atuando como o núcleo lógico de ecossistemas que buscam não apenas escala, mas dominância através de inteligência aplicada.',
      ventureTitle: 'VENTURE ATIVA',
      creativeTitle: 'PORTFÓLIO CRIATIVO'
    },
    sections: {
      thesis: 'A TESE',
      stack: 'SISTEMAS & FERRAMENTAS',
      impact: 'IMPACTO & ESCALA'
    },
    categories: {
      vision: 'VISÃO & INTELIGÊNCIA',
      craft: 'CRAFT & CONSTRUÇÃO',
      market: 'AUTORIDADE & MERCADO'
    },
    capacities: {
      title: 'CAPACIDADES CENTRAIS',
      cognitive: { title: 'ARQUITETURA COGNITIVA', category: 'PERCEPTION', desc: 'Reorganização do campo mental onde decisões acontecem.', thesis: 'QUEM CONTROLA O CAMPO MENTAL CONTROLA O MERCADO.', impact: 'Marcas viram escolhas naturais antes da comparação.' },
      strategy: { title: 'ESTRATÉGIAS', category: 'VISION', desc: 'Desenho de manobras táticas e visão de longo prazo.', thesis: 'ESTRATÉGIA NÃO É UM PLANO, É uma posição de poder em constante mutação.', impact: 'Criação de fossos competitivos e aumento de LTV.' },
      innovation: { title: 'INOVAÇÃO', category: 'DISRUPTION', desc: 'Criação de novos paradigmas e produtos.', thesis: 'INOVAÇÃO REAL É INVISÍVEL ATÉ QUE SE TORNE INDISPENSÁVEL.', impact: 'Abertura de novos mercados e verticais.' },
      marketing: { title: 'MARKETING', category: 'NARRATIVE', desc: 'Posicionamento e construção de autoridade.', thesis: 'MARKETING É A TRADUÇÃO DA VERDADE DO PRODUTO PARA A LINGUAGEM DO DESEJO.', impact: 'Redução de CAC e construção de Brand Equity.' },
      paidMedia: { title: 'MÍDIA PAGA', category: 'PERFORMANCE', desc: 'Escalabilidade através de algoritmos.', thesis: 'MÍDIA PAGA É O COMBUSTÍVEL; O SYSTEM É O MOTOR.', impact: 'Escala exponencial de receita com ROI controlado.' },
      design: { title: 'DESIGN', category: 'SYSTEMS', desc: 'Interface onde a forma segue a intenção.', thesis: 'DESIGN SISTÊMICO ELIMINA FRICÇÃO E ACELERA A DECISÃO.', impact: 'Aumento de conversão e retenção emocional.' },
      ai: { title: 'IA', category: 'INTELLIGENCE', desc: 'Implementação de inteligência generativa.', thesis: 'IA NÃO SUBSTITUI O HUMANO, ELA AMPLIA A CAPACIDADE DE SÍNTESE E EXECUÇÃO.', impact: 'Ganho de 10x em velocidade operacional.' },
      vibeCoding: { title: 'VIBE CODING', category: 'VELOCITY', desc: 'Desenvolvimento ágil utilizando LLMs.', thesis: 'A BARREIRA ENTRE IDEIA E EXECUÇÃO FOI DESTRUÍDA PELA LINGUAGEM NATURAL.', impact: 'Deploy de protótipos funcionais em tempo recorde.' },
      brandReg: { title: 'MARCAS', category: 'EQUITY', desc: 'Proteção e valorização de marcas.', thesis: 'UMA MARCA SEM PROTEÇÃO É APENAS UM EMPRÉSTIMO DO MERCADO.', impact: 'Segurança jurídica e valorização de ativos.' },
      domain: { title: 'DOMÍNIO', category: 'PRESENCE', desc: 'Gerenciamento estratégico de propriedades digitais.', thesis: 'SEU DOMÍNIO É O ÚNICO TERRENO PROPRIETÁRIO NA INTERNET.', impact: 'Soberania digital e proteção de marca.' }
    },
    mindset: {
      title: 'MENTALIDADE OPERACIONAL',
      subtitle: 'DESIGN NÃO É COMO PARECE. ESTRATÉGIA NÃO É O QUE DIZEMOS. SUCESSO É O SUBPRODUTO DE SISTEMAS BEM CONSTRUÍDOS.',
      p1: { title: 'SISTEMAS SOBRE FUNCIONALIDADES', description: 'Funcionalidades resolvem problemas; sistemas resolvem padrões.' },
      p2: { title: 'CLAREZA SOBRE RUÍDO', description: 'A vantagem competitiva definitiva é a capacidade de simplificar a complexidade.' },
      p3: { title: 'CRESCIMENTO ATRAVÉS DE RESILIÊNCIA', description: 'Construir loops que compõem valor ao longo do tempo.' }
    },
    footer: {
      cta: 'VAMOS CONSTRUIR O QUE VEM A SEGUIR.',
      rights: '© 2024 / ENGENHARIA PARA IMPACTO'
    }
  },
  EN: {
    nav: { strategy: 'CAPACITIES', philosophy: 'PHILOSOPHY', contact: 'CONTACT', back: 'BACK', about: 'ABOUT', reports: 'REPORTS 2026', creative: 'CRAFT' },
    hero: {
      line1: 'STRATEGIC',
      line2: 'INNOVATION',
      description: 'Logic and Innovation Architect. Specialized in designing the strategic core that precedes and powers high-performance ecosystems.',
      focus: 'CURRENT FOCUS'
    },
    reportsPage: {
      title: 'INTELLIGENCE',
      subtitle: 'HUB 2026',
      description: 'Proprietary analyses on the convergence of technology, economy, and human behavior.',
      ui: {
        summary: 'EXECUTIVE SUMMARY',
        methodology: 'INTELLIGENCE METHODOLOGY',
        analysis: 'MARKET ANALYSIS',
        findings: 'KEY FINDINGS',
        recommendations: 'RECOMMENDATIONS',
        nextSteps: 'NEXT STEPS',
        references: 'REFERENCES',
        backToHub: 'BACK TO HUB',
        access: 'ACCESS REPORT',
        truthIndex: 'PROBABILISTIC TRUTH',
        metricsTitle: 'PERFORMANCE INDICATORS',
        insightsTitle: 'DEEP INSIGHTS',
        sourcesTitle: 'SOURCES'
      },
      categories: {
        all: 'ALL',
        market: 'MARKET & AI',
        algo: 'ALGORITHMS',
        data: 'DATA',
        esg: 'SUSTAINABILITY',
        consumer: 'BEHAVIOR',
        finance: 'FINANCE',
        mobility: 'MOBILITY',
        health: 'HEALTH',
        edu: 'EDUCATION',
        culture: 'CULTURA',
        exp: 'EXPERIMENTAL'
      },
      items: ALL_REPORTS
    },
    about: {
      title: 'THE ARCHITECT',
      subtitle: 'Fernando Ramalho is the intersection of analytical rigor and creative execution.',
      manifesto: 'STRATEGY IS NOT ABOUT PREDICTING THE FUTURE, BUT ABOUT ARCHITECTING THE LOGC THAT MAKES IT INEVITABLE. I TRANSLATE COMPLEXITY INTO ABSOLUTE CLARITY, DESIGNING SYSTEMS WHERE INNOVATION BECOMES THE CORE OF AN IMPLACABLE COMPETITIVE ADVANTAGE.',
      stats: [
        { label: 'VISION', value: 'STRATEGIC' },
        { label: 'EXECUTION', value: 'SYSTEMIC' },
        { label: 'DELIVERY', value: 'IMPACT' }
      ],
      mantras: ['DON\'T STOP', 'ADVANCE', 'FINISH'],
      bio: 'Since 2019 creating solutions, strategies, and brands that set new market standards. My practice bridges analytical rigor with consumer psychology, acting as the logical core for ecosystems seeking not just scale, but dominance through applied intelligence.',
      ventureTitle: 'ACTIVE VENTURE',
      creativeTitle: 'CREATIVE PORTFOLIO'
    },
    sections: {
      thesis: 'THE THESIS',
      stack: 'SYSTEMS & TOOLS',
      impact: 'IMPACT & SCALE'
    },
    categories: {
      vision: 'VISION & INTELLIGENCE',
      craft: 'CRAFT & CONSTRUCTION',
      market: 'AUTHORITY & MARKET'
    },
    capacities: {
      title: 'CORE CAPACITIES',
      cognitive: { title: 'COGNITIVE ARCHITECTURE', category: 'PERCEPTION', desc: 'Reorganization of the mental field where decisions happen.', thesis: 'WHOEVER CONTROLS THE MENTAL FIELD CONTROLS THE MARKET.', impact: 'Brands become natural choices before comparison.' },
      strategy: { title: 'STRATEGIES', category: 'VISION', desc: 'Designing tactical maneuvers and long-term vision.', thesis: 'STRATEGY IS NOT A PLAN, IT IS A SHIFTING POSITION OF POWER.', impact: 'Creation of competitive moats and LTV growth.' },
      innovation: { title: 'INNOVATION', category: 'DISRUPTION', desc: 'Creating new paradigms and products.', thesis: 'REAL INNOVATION IS INVISIBLE UNTIL IT BECOMES INDISPENSABLE.', impact: 'Opening new markets and verticals.' },
      marketing: { title: 'MARKETING', category: 'NARRATIVE', desc: 'Brand positioning and authority building.', thesis: 'MARKETING IS THE TRANSLATION OF PRODUCT TRUTH INTO THE LANGUAGE OF DESIRE.', impact: 'CAC reduction and Brand Equity building.' },
      paidMedia: { title: 'PAID MEDIA', category: 'PERFORMANCE', desc: 'Scalability through algorithms.', thesis: 'PAID MEDIA IS THE FUEL; THE SYSTEM IS THE ENGINE.', impact: 'Exponential revenue scale with controlled ROI.' },
      design: { title: 'DESIGN', category: 'SYSTEMS', desc: 'Interface where form follows intent.', thesis: 'SYSTEMIC DESIGN ELIMINATES FRICTION AND ACCELERATES DECISION-MAKING.', impact: 'Conversion increase and emotional retention.' },
      ai: { title: 'AI', category: 'INTELLIGENCE', desc: 'Implementing generative intelligence.', thesis: 'AI does not replace humans, it amplifies the capacity for synthesis and execution.', impact: '10x gain in operational speed.' },
      vibeCoding: { title: 'VIBE CODING', category: 'VELOCITY', desc: 'Agile development using LLMs.', thesis: 'THE BARRIER BETWEEN IDEA AND EXECUTION HAS BEEN DESTROYED BY NATURAL LANGUAGE.', impact: 'Deployment of functional prototypes in record time.' },
      brandReg: { title: 'BRANDS', category: 'EQUITY', desc: 'Brand protection and valuation.', thesis: 'A BRAND WITHOUT PROTECTION IS JUST A LOAN FROM THE MARKET.', impact: 'Legal security and asset valuation.' },
      domain: { title: 'DOMAINS', category: 'PRESENCE', desc: 'Strategic management of digital properties.', thesis: 'YOUR DOMAIN IS THE ONLY PROPRIETARY LAND ON THE INTERNET.', impact: 'Digital sovereignty and brand protection.' }
    },
    mindset: {
      title: 'OPERATIONAL MINDSET',
      subtitle: 'DESIGN ISN\'T HOW IT LOOKS. STRATEGY ISN\'T WHAT WE SAY. SUCCESS IS THE BYPRODUCT OF WELL-BUILT SYSTEMS.',
      p1: { title: 'SYSTEMS OVER FEATURES', description: 'Features solve problems; systems solve patterns.' },
      p2: { title: 'CLAREZA OVER NOISE', description: 'The ultimate competitive advantage is the ability to simplify complexity.' },
      p3: { title: 'GROWTH THROUGH RESILIENCE', description: 'Building resilient loops that compound value over time.' }
    },
    footer: {
      cta: 'LET\'S BUILD WHAT\'S NEXT.',
      rights: '© 2024 / ENGINEERED FOR IMPACT'
    }
  }
};

export const getCategorizedPillars = (lang: Language): CategoryGroup[] => {
  const t = TRANSLATIONS[lang].capacities;
  const cats = TRANSLATIONS[lang].categories;

  const stackMap: Record<string, string[]> = {
    'ARQUITETURA COGNITIVA': ['CAMPO MENTAL', 'SEGURANÇA COGNITIVA', 'NORMALIDADE'],
    'COGNITIVE ARCHITECTURE': ['MENTAL FIELD', 'COGNITIVE SECURITY', 'NORMALITY'],
    'ESTRATÉGIAS': ['GAME THEORY', 'VALUE CHAIN', 'SWOT 2.0'],
    'STRATEGIES': ['GAME THEORY', 'VALUE CHAIN', 'SWOT 2.0'],
    'IA': ['OPENAI', 'ANTHROPIC', 'LANGCHAIN'],
    'AI': ['OPENAI', 'ANTHROPIC', 'LANGCHAIN'],
    'DESIGN': ['FIGMA', 'SYSTEMIC UI', 'TOKENS', 'PHOTOSHOP', 'ILLUSTRATOR', 'AXION UI'],
    'VIBE CODING': ['LOVABLE', 'CLAUDE', 'REPLIT', 'GOOGLE AI STUDIO', 'APIS', '21ST.DEV', 'ANTIGRAVITY', 'WINDSURF', 'VSCODE', 'SUPABASE', 'NEON', 'NETLIFY'],
    'DOMÍNIO': ['CLOUDFLARE', 'REGISTRO.BR', 'ROUTE53', 'GODADDY'],
    'DOMAINS': ['CLOUDFLARE', 'REGISTRO.BR', 'ROUTE53', 'GODADDY']
  };

  const createItem = (key: string, id: number, color: HighlightColor, src: string): ListItem => {
    const item = t[key as keyof typeof t] as any;
    return {
      id,
      title: item.title,
      category: item.category,
      src,
      alt: item.title,
      color,
      description: item.desc,
      thesis: item.thesis,
      impact: item.impact,
      stack: stackMap[item.title] || ['CUSTOM FRAMEWORKS']
    };
  };

  return [
    {
      name: cats.vision,
      items: [
        createItem('cognitive', 1, HighlightColor.GREEN, "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80"),
        createItem('strategy', 2, HighlightColor.YELLOW, "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"),
        createItem('innovation', 3, HighlightColor.YELLOW, "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&q=80"),
        createItem('ai', 4, HighlightColor.GREEN, "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80")
      ]
    },
    {
      name: cats.craft,
      items: [
        createItem('design', 5, HighlightColor.GREEN, "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&q=80"),
        createItem('vibeCoding', 6, HighlightColor.YELLOW, "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80")
      ]
    },
    {
      name: cats.market,
      items: [
        createItem('marketing', 7, HighlightColor.GREEN, "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200&q=80"),
        createItem('paidMedia', 8, HighlightColor.YELLOW, "https://images.unsplash.com/photo-1551288049-bbda48658a7d?w=1200&q=80"),
        createItem('brandReg', 9, HighlightColor.GREEN, "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"),
        createItem('domain', 10, HighlightColor.YELLOW, "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&q=80")
      ]
    }
  ];
};

export const getPrinciples = (lang: Language): Principle[] => {
  const t = TRANSLATIONS[lang].mindset;
  return [t.p1, t.p2, t.p3];
};
