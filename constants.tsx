
import { HighlightColor, ListItem, Principle } from './types';

export const COLORS = {
  YELLOW: '#FFEE00',
  GREEN: '#58B573',
  DARK: '#050505',
  NEUTRAL: '#1A1A1A'
};

export type Language = 'PT' | 'EN';

export interface CategoryGroup {
  name: string;
  items: ListItem[];
}

export const TRANSLATIONS = {
  PT: {
    nav: { strategy: 'Capacidades', philosophy: 'Filosofia', contact: 'Direto', back: 'Voltar', about: 'Sobre' },
    hero: {
      line1: 'Sistemas',
      line2: 'de Futuro',
      description: 'Estrategista de produto e growth especializado em transformar visão bruta em ecossistemas de alta performance.',
      focus: 'Foco Atual'
    },
    about: {
      title: 'O Arquiteto',
      subtitle: 'Fernando Ramalho é a interseção entre o rigor analítico e a execução criativa.',
      manifesto: 'Estratégia não é sobre o que você faz, é sobre o que você deixa de fazer para dominar o que resta. Eu não construo apenas produtos; eu projeto máquinas de crescimento que se auto-otimizam.',
      stats: [
        { label: 'Visão', value: 'Estratégica' },
        { label: 'Execução', value: 'Sistêmica' },
        { label: 'Entrega', value: 'Impacto' }
      ],
      mantras: ['Não Pare', 'Avance', 'Termine'],
      bio: 'Com mais de uma década atuando no núcleo de operações de growth e produto, Fernando desenvolveu uma metodologia que une Ciência de Dados a Psicologia de Consumo. Atua como um catalisador para empresas que buscam não apenas escala, mas dominância de mercado.'
    },
    sections: {
      thesis: 'A Tese',
      stack: 'Sistemas & Ferramentas',
      impact: 'Impacto & Escala'
    },
    categories: {
      vision: 'Visão & Inteligência',
      craft: 'Craft & Construção',
      market: 'Autoridade & Mercado'
    },
    capacities: {
      title: 'Capacidades Centrais',
      strategy: { title: 'Estratégias', category: 'Vision', desc: 'Desenho de manobras táticas e visão de longo prazo.', thesis: 'Estratégia não é um plano, é uma posição de poder em constante mutação.', impact: 'Criação de fossos competitivos e aumento de LTV.' },
      innovation: { title: 'Inovação', category: 'Disruption', desc: 'Criação de novos paradigmas e produtos.', thesis: 'Inovação real é invisível até que se torne indispensável.', impact: 'Abertura de novos mercados e verticais.' },
      marketing: { title: 'Marketing', category: 'Narrative', desc: 'Posicionamento e construção de autoridade.', thesis: 'Marketing é a tradução da verdade do produto para a linguagem do desejo.', impact: 'Redução de CAC e construção de Brand Equity.' },
      paidMedia: { title: 'Mídia Paga', category: 'Performance', desc: 'Escalabilidade através de algoritmos.', thesis: 'Mídia paga é o combustível; o sistema é o motor.', impact: 'Escala exponencial de receita com ROI controlado.' },
      design: { title: 'Design', category: 'Systems', desc: 'Interface onde a forma segue a intenção.', thesis: 'Design sistêmico elimina fricção e acelera a decisão.', impact: 'Aumento de conversão e retenção emocional.' },
      ai: { title: 'IA', category: 'Intelligence', desc: 'Implementação de inteligência generativa.', thesis: 'IA não substitui o humano, ela amplia a capacidade de síntese e execução.', impact: 'Ganho de 10x em velocidade operacional.' },
      vibeCoding: { title: 'Vibe Coding', category: 'Velocity', desc: 'Desenvolvimento ágil utilizando LLMs.', thesis: 'A barreira entre ideia e execução foi destruída pela linguagem natural.', impact: 'Deploy de protótipos funcionais em tempo recorde.' },
      brandReg: { title: 'Registro de Marca', category: 'Equity', desc: 'Proteção de ativos intelectuais.', thesis: 'Uma marca sem proteção é apenas um empréstimo do mercado.', impact: 'Segurança jurídica e valorização de ativos.' }
    },
    mindset: {
      title: 'Mentalidade Operacional',
      subtitle: 'Design não é como parece. \nEstratégia não é o que dizemos. \nSucesso é o subproduto de \nsistemas bem construídos.',
      p1: { title: 'Sistemas sobre Funcionalidades', description: 'Funcionalidades resolvem problemas; sistemas resolvem padrões.' },
      p2: { title: 'Clareza sobre Ruído', description: 'A vantagem competitiva definitiva é a capacidade de simplificar a complexidade.' },
      p3: { title: 'Crescimento através de Resiliência', description: 'Construir loops que compõem valor ao longo do tempo.' }
    },
    footer: {
      cta: 'Vamos construir o que vem a seguir.',
      rights: '© 2024 / Engenharia para Impacto'
    }
  },
  EN: {
    nav: { strategy: 'Capacities', philosophy: 'Philosophy', contact: 'Direct', back: 'Back', about: 'About' },
    hero: {
      line1: 'Future',
      line2: 'Systems',
      description: 'Product & growth strategist specialized in transforming raw vision into high-performance ecosystems.',
      focus: 'Current Focus'
    },
    about: {
      title: 'The Architect',
      subtitle: 'Fernando Ramalho is the intersection of analytical rigor and creative execution.',
      manifesto: 'Strategy is not about what you do, it is about what you stop doing to dominate what remains. I don’t just build products; I design growth engines that self-optimize.',
      stats: [
        { label: 'Vision', value: 'Strategic' },
        { label: 'Execution', value: 'Systemic' },
        { label: 'Delivery', value: 'Impact' }
      ],
      mantras: ['Don\'t Stop', 'Advance', 'Finish'],
      bio: 'With over a decade operating at the core of growth and product operations, Fernando has developed a methodology that bridges Data Science and Consumer Psychology.'
    },
    sections: {
      thesis: 'The Thesis',
      stack: 'Systems & Tools',
      impact: 'Impact & Scale'
    },
    categories: {
      vision: 'Vision & Intelligence',
      craft: 'Craft & Construction',
      market: 'Authority & Market'
    },
    capacities: {
      title: 'Core Capacities',
      strategy: { title: 'Strategies', category: 'Vision', desc: 'Designing tactical maneuvers and long-term vision.', thesis: 'Strategy is not a plan, it is a shifting position of power.', impact: 'Creation of competitive moats and LTV growth.' },
      innovation: { title: 'Innovation', category: 'Disruption', desc: 'Creating new paradigms and products.', thesis: 'Real innovation is invisible until it becomes indispensable.', impact: 'Opening new markets and verticals.' },
      marketing: { title: 'Marketing', category: 'Narrative', desc: 'Brand positioning and authority building.', thesis: 'Marketing is the translation of product truth into the language of desire.', impact: 'CAC reduction and Brand Equity building.' },
      paidMedia: { title: 'Paid Media', category: 'Performance', desc: 'Scalability through algorithms.', thesis: 'Paid media is the fuel; the system is the engine.', impact: 'Exponential revenue scale with controlled ROI.' },
      design: { title: 'Design', category: 'Systems', desc: 'Interface where form follows intent.', thesis: 'Systemic design eliminates friction and accelerates decision-making.', impact: 'Conversion increase and emotional retention.' },
      ai: { title: 'AI', category: 'Intelligence', desc: 'Implementing generative intelligence.', thesis: 'AI does not replace humans, it amplifies the capacity for synthesis and execution.', impact: '10x gain in operational speed.' },
      vibeCoding: { title: 'Vibe Coding', category: 'Velocity', desc: 'Agile development using LLMs.', thesis: 'The barrier between idea and execution has been destroyed by natural language.', impact: 'Deployment of functional prototypes in record time.' },
      brandReg: { title: 'Brand Equity', category: 'Equity', desc: 'Protecting intellectual assets.', thesis: 'A brand without protection is just a loan from the market.', impact: 'Legal security and asset valuation.' }
    },
    mindset: {
      title: 'Operational Mindset',
      subtitle: 'Design isn\'t how it looks. \nStrategy isn\'t what we say. \nSuccess is the byproduct of \nwell-built systems.',
      p1: { title: 'Systems over Features', description: 'Features solve problems; systems solve patterns.' },
      p2: { title: 'Clarity over Noise', description: 'The ultimate competitive advantage is the ability to simplify complexity.' },
      p3: { title: 'Growth through Resilience', description: 'Building resilient loops that compound value over time.' }
    },
    footer: {
      cta: 'Let\'s build what\'s next.',
      rights: '© 2024 / Engineered for Impact'
    }
  }
};

export const getCategorizedPillars = (lang: Language): CategoryGroup[] => {
  const t = TRANSLATIONS[lang].capacities;
  const cats = TRANSLATIONS[lang].categories;
  
  const stackMap: Record<string, string[]> = {
    'Estratégias': ['Game Theory', 'Value Chain Analysis', 'SWOT 2.0'],
    'Strategies': ['Game Theory', 'Value Chain Analysis', 'SWOT 2.0'],
    'IA': ['OpenAI API', 'Anthropic', 'LangChain', 'Custom GPTs'],
    'AI': ['OpenAI API', 'Anthropic', 'LangChain', 'Custom GPTs'],
    'Design': ['Figma', 'Systemic UI', 'Prototyping', 'Design Tokens'],
    'Vibe Coding': ['Cursor', 'Bolt.new', 'v0.dev', 'LLM Engineering']
  };

  const createItem = (key: keyof typeof t, id: number, color: HighlightColor, src: string): ListItem => {
    const item = t[key] as any;
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
      stack: stackMap[item.title] || ['Custom Frameworks', 'Proprietary Systems']
    };
  };

  return [
    {
      name: cats.vision,
      items: [
        createItem('strategy', 1, HighlightColor.YELLOW, "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"),
        createItem('innovation', 2, HighlightColor.YELLOW, "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&q=80"),
        createItem('ai', 3, HighlightColor.GREEN, "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80")
      ]
    },
    {
      name: cats.craft,
      items: [
        createItem('design', 4, HighlightColor.GREEN, "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&q=80"),
        createItem('vibeCoding', 5, HighlightColor.YELLOW, "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80")
      ]
    },
    {
      name: cats.market,
      items: [
        createItem('marketing', 6, HighlightColor.GREEN, "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200&q=80"),
        createItem('paidMedia', 7, HighlightColor.YELLOW, "https://images.unsplash.com/photo-1551288049-bbda48658a7d?w=1200&q=80"),
        createItem('brandReg', 8, HighlightColor.GREEN, "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80")
      ]
    }
  ];
};

export const getPrinciples = (lang: Language): Principle[] => {
  const t = TRANSLATIONS[lang].mindset;
  return [t.p1, t.p2, t.p3];
};
