---
description: Documentação completa da lógica do componente CapacityDetail.tsx
---

# 📋 CapacityDetail.tsx - Documentação de Lógica

Este documento descreve toda a estrutura e lógica do componente `CapacityDetail.tsx`, localizado em `components/CapacityDetail.tsx`.

---

## 🏗️ Visão Geral

O `CapacityDetail` é o componente responsável por exibir os detalhes de cada **capacidade** do portfólio. Ele é renderizado quando o usuário clica em uma capacidade específica na página `/capacidades`.

**Arquivo:** `c:\fernando.ramalhooficial\components\CapacityDetail.tsx`  
**Total de linhas:** ~2648  

---

## 📥 Props do Componente

```typescript
interface CapacityDetailProps {
  item: ListItem;     // Dados da capacidade (id, title, description, thesis, impact, stack, etc.)
  lang: Language;     // Idioma atual ('PT' | 'EN')
  onClose: () => void; // Função para fechar o detalhe e voltar
}
```

---

## 🎨 Estados Internos

| Estado | Tipo | Descrição |
|--------|------|-----------|
| `showConditions` | boolean | Exibe modal de condições |
| `showFrameworkModal` | boolean | Modal do Framework Google Ads |
| `showMetaFrameworkModal` | boolean | Modal do Framework Meta Ads |
| `showTikTokFrameworkModal` | boolean | Modal do Framework TikTok Ads |
| `showLinkedInFrameworkModal` | boolean | Modal do Framework LinkedIn Ads |

---

## 🎯 Mapeamento de IDs das Capacidades

Cada capacidade tem um **ID único** que controla quais seções específicas são exibidas:

| ID | Capacidade | Slug da URL |
|----|------------|-------------|
| 1 | Arquitetura Cognitiva | `/capacidade/arquitetura-cognitiva` |
| 2 | Estratégias | `/capacidade/estrategias` |
| 3 | Inovação | `/capacidade/inovacao` |
| 4 | IA | `/capacidade/ia` |
| 5 | Design | `/capacidade/design` |
| 6 | Vibe Coding | `/capacidade/vibe-coding` |
| 7 | Marketing | `/capacidade/marketing` |
| 8 | Mídia Paga | `/capacidade/midia-paga` |
| 9 | Marcas | `/capacidade/marcas` |
| 10 | Domínio | `/capacidade/dominio` |
| 11 | Sites | `/capacidade/sites` |
| 12 | Ecommerce | `/capacidade/ecommerce` |

---

## 📐 Estrutura de Seções Condicionais

### Seções que aparecem em TODAS as capacidades:
- **Header (Nav)** - Botão voltar + Logo
- **Hero Section** - Imagem de fundo, título, descrição
- **Thesis Section** - A tese principal da capacidade
- **Stack Section** - Tecnologias/ferramentas utilizadas
- **Impact Section** - Impacto e escala
- **Philosophy Section** - Princípios filosóficos
- **Right Column** - Imagem visual + estatísticas

### Seções CONDICIONAIS por ID:

```
Linha ~189:  {item.id === 2 && (...)}   → ESTRATÉGIAS - Fluxo Estratégico
Linha ~250:  {item.id === 3 && (...)}   → INOVAÇÃO - Fluxo de Inovação
Linha ~311:  {item.id === 4 && (...)}   → IA - Fluxo de Implementação
Linha ~432:  {item.id === 5 && (...)}   → DESIGN - Fluxo de Design
Linha ~553:  {item.id === 6 && (...)}   → VIBE CODING - Fluxo de Vibe Coding
Linha ~674:  {item.id === 8 && (...)}   → MÍDIA PAGA - Fluxo de Mídia Paga
Linha ~735:  {item.id === 7 && (...)}   → MARKETING - Fluxo de Marketing
Linha ~856:  {item.id === 8 && (...)}   → MÍDIA PAGA - Seção de Frameworks (Google, Meta, TikTok, LinkedIn)
Linha ~1085: {item.id === 9 && (...)}   → MARCAS - Seção específica
Linha ~1320: {item.id === 10 && (...)}  → DOMÍNIO - Seção específica
Linha ~1441: {item.id === 11 && (...)}  → SITES - Fluxo de Sites
Linha ~1616: {showConditions && (...)}  → Modal de Condições (controlado por estado)
Linha ~1624: {showFrameworkModal && (...)} → Modal Google Ads Framework
Linha ~2316: {item.id === 12 && (...)}  → ECOMMERCE - Seção completa (Fluxo, Plataformas, Gateways, Recursos)
Linha ~2560: {item.id === 12 && (...)}  → ECOMMERCE FOOTER CTA - "Vamos Construir Sua Loja Virtual"
```

---

## 🛒 Seção Especial: ECOMMERCE (ID = 12)

A página de eCommerce tem **conteúdo exclusivo** que não aparece nas outras capacidades:

### Dentro do bloco `{item.id === 12 && (...)}` (Linha ~2316):
1. **Fluxo de Ecommerce** - 3 fases (Planejamento, Desenvolvimento, Otimização)
2. **Plataformas Parceiras** - Tray Ecommerce, Nuvemshop (com links de afiliado)
3. **Gateways de Pagamento** - Asaas, Mercado Pago, Pagar.me, PayPal, PicPay, PagBank
4. **Recursos Avançados** - Banners Personalizados, Configuração de Frete

### Footer CTA Exclusivo (Linha ~2560):
```jsx
{item.id === 12 && (
  <footer className="...">
    {/* CTA: "Vamos Construir Sua Loja Virtual" */}
    {/* Quick Info: Lançamento Rápido, Pagamentos 100%, Conversão Otimizada */}
  </footer>
)}
```

⚠️ **IMPORTANTE:** Este footer CTA só deve aparecer na página de eCommerce!

---

## 🎨 Cores Dinâmicas

A cor de destaque é definida dinamicamente baseada na propriedade `item.color`:

```typescript
const colorHex = item.color === HighlightColor.YELLOW 
  ? 'rgb(155, 89, 182)'  // Roxo
  : '#58B573';           // Verde
```

---

## 🔗 Modais de Framework (Mídia Paga)

Controlados pelos estados `showFrameworkModal`, `showMetaFrameworkModal`, `showTikTokFrameworkModal`, `showLinkedInFrameworkModal`:

- **Google Ads Framework** - Estrutura de campanhas, grupos, anúncios
- **Meta Ads Framework** - Campanhas, conjuntos, anúncios, pixel
- **TikTok Ads Framework** - Campanhas virais, trends
- **LinkedIn Ads Framework** - B2B, segmentação profissional

---

## 📝 Checklist de Manutenção

Ao modificar este arquivo, verifique:

- [ ] As condicionais `{item.id === X && (...)}` estão corretas
- [ ] Novos blocos condicionais estão fechados corretamente com `)}` 
- [ ] O footer CTA do eCommerce está dentro de `{item.id === 12 && (...)}`
- [ ] Modais têm seus estados de controle correspondentes
- [ ] Textos estão traduzidos (verificar `lang === 'PT' ? ... : ...`)
- [ ] Links externos têm `target="_blank"` e `rel="noopener noreferrer"`

---

## 🚀 Adicionando Nova Capacidade

Para adicionar uma nova capacidade com conteúdo exclusivo:

1. Adicionar a capacidade em `constants.tsx` com um novo ID
2. Criar a seção condicional em `CapacityDetail.tsx`:
   ```jsx
   {item.id === NEW_ID && (
     <section>
       {/* Conteúdo exclusivo */}
     </section>
   )}
   ```
3. Posicionar antes do fechamento `</main>` ou após, dependendo do layout desejado

---

## 📁 Arquivos Relacionados

- `constants.tsx` - Definição das capacidades e traduções
- `types.ts` - Tipos TypeScript (ListItem, HighlightColor, etc.)
- `AppRouter.tsx` - Configuração de rotas
- `BrandLogo.tsx` - Componente do logo

---

*Última atualização: 2026-01-20*
