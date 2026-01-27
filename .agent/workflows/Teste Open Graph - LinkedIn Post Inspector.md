# Teste Open Graph - LinkedIn Post Inspector

## Procedimento de Validação

### URLs para Testar:

1. **Intelligence Hub (Lista):**
   - URL: `https://fernandoramalhobuilder.com.br/relatorios`
   - og:image: `/og-intelligence-hub.jpg`
   - og:type: `website`

2. **Report Individual (Exemplo):**
   - URL: `https://fernandoramalhobuilder.com.br/relatorio/saas-ai-native`
   - og:image: `/og-reports/S.1.jpg`
   - og:type: `article`

### Ferramenta de Teste:
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/

### Tags Open Graph Implementadas:

#### Para Intelligence Hub:
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://fernandoramalhobuilder.com.br/relatorios" />
<meta property="og:title" content="Intelligence Hub: Strategic Reports & AI Insights | Fernando Ramalho" />
<meta property="og:description" content="Access deep market analysis, AI trends, and strategic insights to dominate your niche. Proprietary intelligence reports on technology and business innovation." />
<meta property="og:image" content="https://fernandoramalhobuilder.com.br/og-intelligence-hub.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="pt_BR" />
```

#### Para Reports Individuais:
```html
<meta property="og:type" content="article" />
<meta property="og:url" content="https://fernandoramalhobuilder.com.br/relatorio/saas-ai-native" />
<meta property="og:title" content="AI-Native SaaS Revolution | Intelligence Hub" />
<meta property="og:description" content="A transformação de software em inteligência operacional." />
<meta property="og:image" content="https://fernandoramalhobuilder.com.br/og-reports/S.1.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="pt_BR" />
```

### Checklist de Validação:

#### ✅ Implementação Técnica:
- [x] Tags Open Graph dinâmicas no SEOMeta.tsx
- [x] Metadados específicos por página
- [x] Thumbnails individuais para reports
- [x] og:type correto (website vs article)
- [x] Dimensões de imagem (1200x630)
- [x] Locale configurado (pt_BR/en_US)

#### 🔄 Testes Manuais:
- [ ] Testar URL principal no Post Inspector
- [ ] Testar URL de report individual no Post Inspector
- [ ] Validar exibição de imagem
- [ ] Validar título e descrição
- [ ] Testar compartilhamento real no LinkedIn
- [ ] Verificar cache do LinkedIn (pode levar 30min)

### Resultados Esperados:

1. **Thumbnail Correto:** Imagem específica deve aparecer
2. **Título Dinâmico:** Título do report ou "Intelligence Hub"
3. **Descrição Relevante:** Descrição específica do conteúdo
4. **Tipo Correto:** "website" para lista, "article" para reports

### Troubleshooting:

#### Se imagem não aparecer:
- Verificar se arquivo existe em `/public/og-reports/`
- Confirmar dimensões 1200x630 pixels
- Limpar cache do LinkedIn com "Scrape Again"

#### Se título/descrição errados:
- Verificar metadados no AppRouter.tsx
- Confirmar selectedReport está sendo passado
- Testar com diferentes reports

### Status da Implementação:
- **Código:** ✅ 100% implementado
- **Teste:** 🔄 Aguardando validação manual
- **Produção:** ✅ Pronto para uso

---

**Data:** 27/01/2026
**Responsável:** Implementação concluída, teste pendente
