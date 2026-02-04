# 🤖 AGENTS.MD - Contexto Completo do Projeto

## 📋 Visão Geral

**Nome do Projeto**: Fernando Ramalho Portfolio / OrientoHub  
**Domínio**: https://fernandoramalhobuilder.com.br  
**Tipo**: Site institucional/portfólio com funcionalidades de IA  
**Stack Principal**: React 18 + TypeScript + Vite + TailwindCSS  

---

## 🏗️ Arquitetura do Projeto

### Stack Tecnológica

| Categoria | Tecnologia | Versão |
|-----------|------------|--------|
| **Framework** | React | 18.3.1 |
| **Build Tool** | Vite | 6.2.0 |
| **Linguagem** | TypeScript | 5.8.2 |
| **Estilização** | TailwindCSS | 4.1.18 |
| **Roteamento** | React Router DOM | 6.30.0 |
| **Backend** | Supabase | 2.94.0 |
| **IA** | Google Gemini API | 3.0 Pro |
| **Ícones** | Lucide React | 0.562.0 |
| **SEO** | React Helmet Async | 2.0.5 |
| **Carrossel** | Embla Carousel | 8.6.0 |
| **PDF** | jsPDF + html2canvas | 4.0.0 / 1.4.1 |

### Estrutura de Diretórios

```
c:\fernando.ramalhooficial\
├── components/              # 48 componentes React
│   ├── ui/                  # Componentes de UI reutilizáveis
│   ├── IAView.tsx           # Chat com IA (Builder.ia)
│   ├── CapacityDetail.tsx   # Detalhes das capacidades
│   ├── ReportsView.tsx      # Intelligence Hub
│   ├── Header.tsx           # Navegação principal
│   ├── Footer.tsx           # Rodapé com sitemap
│   └── ...                  # Outros componentes
├── src/
│   ├── pages/               # Páginas legais (LGPD, Privacidade, etc.)
│   └── Frameworks/          # Frameworks proprietários
├── lib/
│   └── supabase.ts          # Cliente Supabase
├── public/                  # Assets estáticos
├── docs/                    # Documentação e PDFs
├── ARQUITETURA COGNITIVA DE CATEGORIA/  # Framework proprietário
├── relatorios/              # Relatórios em HTML
├── AppRouter.tsx            # Roteamento principal
├── constants.tsx            # Traduções e constantes
├── reportsData.ts           # Dados dos relatórios
├── types.ts                 # Tipos TypeScript
└── vite.config.ts           # Configuração Vite
```

---

## 🎯 Propósito do Projeto

### Sobre Fernando Ramalho
- **Especialidade**: Inovação Estratégica, Arquitetura Cognitiva, IA
- **Localização**: São Paulo, Brasil
- **Contato**: +55 14 99861-8547 | fernando@orientohub.com.br
- **LinkedIn**: /in/fernandolsr
- **Instagram**: @fernando.ramalhooficial

### Proposta de Valor
> "Arquitetando a lógica que torna o crescimento inevitável através da convergência entre Inteligência Humana e IA Generativa."

---

## 🔧 Funcionalidades Principais

### 1. **Capacidades (Serviços)**
12 capacidades oferecidas:
- Arquitetura Cognitiva
- Estratégias
- Inovação
- Marketing
- Mídia Paga
- Design
- IA
- Vibe Coding
- Marcas (Registro INPI)
- Domínio
- Sites
- Ecommerce

### 2. **Intelligence Hub (Relatórios)**
Relatórios estratégicos em categorias:
- Mercado & IA
- Algoritmos
- Dados
- Sustentabilidade
- Comportamento
- Finanças
- Mobilidade
- Saúde
- Educação
- Cultura
- Experimental
- SaaS 2026

### 3. **Builder.ia (Chat com IA)**
Sistema de chat com múltiplas personas:
- **Estrategista**: Análise de mercado e ROI
- **Inovador**: Disrupção e novos modelos
- **Criativo**: Design, Branding e UX
- **Pesquisador**: Curadoria acadêmica

Modelos disponíveis:
- Gemini 3 Flash (Preview)
- Gemini 3 Pro (Preview)
- Gemini 2.0 Flash

### 4. **Frameworks Proprietários**
- **Vibe Arc Builder**: Método de building IA
- **Backend Scale Strategy**: Infraestrutura escalável
- **API Integration Intelligence**: Integração via IA
- **Deploy Automation**: CI/CD automatizado

### 5. **Arquitetura Cognitiva de Categoria™**
Framework proprietário para:
- Reorganização do campo mental
- Reescrita de categorias de mercado
- Construção de segurança cognitiva
- Dominância de categoria

---

## 🌐 Rotas do Sistema

### Português (PT)
| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | Home | Página inicial |
| `/sobre` | AboutView | Sobre Fernando |
| `/capacidades` | CapacidadesView | Lista de serviços |
| `/capacidade/:slug` | CapacityDetail | Detalhe do serviço |
| `/relatorios` | ReportsView | Intelligence Hub |
| `/relatorio/:slug` | ReportDetail | Detalhe do relatório |
| `/frameworks` | FrameworksView | Frameworks proprietários |
| `/framework/:slug` | FrameworkDetail | Detalhe do framework |
| `/contato` | ContatoView | Formulário de contato |
| `/filosofia` | FilosofiaView | Filosofia e princípios |
| `/arquitetura-cognitiva` | CognitiveArchitectureView | Framework cognitivo |
| `/segmentos` | SegmentosView | Segmentos atendidos |
| `/politica-de-privacidade` | PoliticaPrivacidade | Política de privacidade |
| `/termos-de-uso` | TermosUso | Termos de uso |
| `/lgpd` | LGPD | Conformidade LGPD |
| `/politica-de-cookies` | PoliticaCookies | Política de cookies |

### Inglês (EN)
Todas as rotas acima com prefixo `/en/`

---

## 🔐 Variáveis de Ambiente

```env
# Google Gemini API
VITE_GEMINI_API_KEY=your-gemini-api-key-here

# Supabase
VITE_SUPABASE_URL=your-supabase-url-here
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here

# App Config
VITE_APP_NAME=OrientoHub
VITE_APP_VERSION=1.0.0
```

---

## 🎨 Design System

### Cores Principais
```typescript
COLORS = {
  YELLOW: '#FFEE00',  // Destaque principal
  GREEN: '#58B573',   // Secundário
  DARK: '#050505',    // Background
  NEUTRAL: '#1A1A1A'  // Elementos neutros
}
```

### Tipografia
- **Fonte**: Inter (400, 700, 900)
- **Estilo**: Editorial, high-density, uppercase para títulos

### Padrões de UI
- Background escuro (#050505)
- Textura sutil de asfalto
- Seleção de texto amarela
- Scrollbar customizada
- Animações suaves (fade-in, slide-in)

---

## 📊 Tipos TypeScript Principais

```typescript
// Item de lista/capacidade
interface ListItem {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
  color: HighlightColor;
  description: string;
  thesis?: string;
  stack?: string[];
  impact?: string;
}

// Relatório
interface ReportItem {
  id: string;
  cat: string;
  title: string;
  desc: string;
  summary: string;
  methodology: string;
  analysis: string;
  findings: string[];
  recommendations: string;
  nextSteps: string;
  references: string[];
  sources?: ReportSource[];
  truthScore: number;
  metrics?: ReportMetric[];
  insightCards?: InsightCard[];
  ogImage?: string;
}
```

---

## 🚀 Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install
# ou com legacy peer deps
npm install --legacy-peer-deps

# Desenvolvimento
npm run dev          # Porta 3000

# Build
npm run build

# Preview
npm run preview
```

---

## 🔗 Integrações Externas

### APIs
- **Google Gemini**: Chat com IA
- **Supabase**: Backend/Database

### Parcerias Ecommerce
- **Tray**: https://www.tray.com.br/parceria/ORIENTOHUB/
- **Nuvemshop**: https://www.nuvemshop.com.br/partners/orientohub-solues-empresariais

### Redes Sociais
- LinkedIn: /in/fernandolsr
- Instagram: @fernando.ramalhooficial
- Behance: /fernandoramalho1
- WhatsApp: +55 14 99861-8547

---

## 📝 Convenções de Código

### Componentes React
- Functional components com hooks
- TypeScript para tipagem
- Props interfaces definidas
- Suporte bilíngue (PT/EN) via prop `lang`

### Estilização
- TailwindCSS inline
- Classes responsivas (mobile-first)
- Animações via keyframes customizados

### Roteamento
- React Router DOM v6
- Slugs gerados via `createSlug()`
- URLs amigáveis em português

---

## 🎯 SEO & Performance

### Meta Tags Dinâmicas
- Títulos únicos por página
- Descriptions otimizadas
- Keywords relevantes
- Open Graph images
- Canonical URLs

### Structured Data
- LocalBusiness (home)
- Service (capacidades)
- Organization (geral)

### Otimizações
- Lazy loading de imagens
- Code splitting por rota
- Minificação via Vite

---

## 📚 Documentação Relacionada

| Arquivo | Descrição |
|---------|-----------|
| `ORIENTOBOT_SETUP.md` | Configuração do chat IA |
| `IMPLEMENTACAO_ECOMMERCE_SITEMAP_2026.md` | Implementação de ecommerce |
| `ARQUITETURA COGNITIVA DE CATEGORIA/` | Framework proprietário |
| `docs/linkedin-frameworks-captions.md` | Conteúdo para LinkedIn |

---

## 🔄 Deploy

### Plataforma
- **Vercel** (configurado via `vercel.json`)

### Configuração
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 🧠 Contexto para Agentes de IA

### Ao trabalhar neste projeto, considere:

1. **Bilinguismo**: Todo conteúdo deve suportar PT e EN
2. **Design Premium**: Estética editorial, minimalista, high-end
3. **SEO First**: Todas as páginas devem ser otimizadas
4. **Performance**: Código limpo e otimizado
5. **Acessibilidade**: Navegação clara e intuitiva
6. **Mobile First**: Responsividade é prioridade

### Padrões de nomenclatura:
- Componentes: PascalCase (`CapacityDetail.tsx`)
- Funções: camelCase (`createSlug()`)
- Constantes: UPPER_SNAKE_CASE (`COLORS`)
- Tipos: PascalCase (`ListItem`)

### Ao adicionar novas capacidades:
1. Adicionar em `constants.tsx` (PT e EN)
2. Criar conteúdo em `CapacityDetail.tsx`
3. Adicionar card em `CapacidadesView.tsx`
4. Atualizar sitemap no `Footer.tsx`

### Ao adicionar novos relatórios:
1. Adicionar em `reportsData.ts`
2. Criar OG image em `/public/og-reports/`
3. Verificar categoria em `constants.tsx`

---

**Última atualização**: Fevereiro 2026  
**Mantido por**: Fernando Ramalho / Cascade AI
