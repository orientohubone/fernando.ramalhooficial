# Debug Open Graph - LinkedIn

## URL Testada
https://fernandoramalhobuilder.com.br/relatorio/oportunidades-saas-na-america-latina

## Verificação Manual

### 1. Arquivo do Report
- **Arquivo:** `latam-market-opportunities.md`
- **ID:** S.6
- **Título:** "Oportunidades SaaS na América Latina"
- **Descrição:** "Mercados emergentes como catalisador de inovação SaaS."

### 2. Imagem OG
- **Arquivo:** `/og-reports/S.6.jpg`
- **Tamanho:** 75,935 bytes (75KB)
- **Dimensões esperadas:** 1200x630px

### 3. Metadados Esperados
```html
<meta property="og:type" content="article" />
<meta property="og:url" content="https://fernandoramalhobuilder.com.br/relatorio/oportunidades-saas-na-america-latina" />
<meta property="og:title" content="Oportunidades SaaS na América Latina | Intelligence Hub" />
<meta property="og:description" content="Mercados emergentes como catalisador de inovação SaaS." />
<meta property="og:image" content="https://fernandoramalhobuilder.com.br/og-reports/S.6.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="pt_BR" />
```

## Possíveis Problemas

### 1. Cache do LinkedIn
- LinkedIn pode levar até 30 minutos para atualizar
- Use "Scrape Again" no Post Inspector para forçar atualização

### 2. Primeira Vez
- Se for a primeira vez que o domínio é compartilhado, pode levar mais tempo

### 3. Formato da Imagem
- Verificar se a imagem está realmente em formato JPG
- Dimensões corretas (1200x630px)

### 4. Acessibilidade da Imagem
- Verificar se a imagem está acessível publicamente
- Testar: https://fernandoramalhobuilder.com.br/og-reports/S.6.jpg

## Soluções

### Solução 1: Forçar Cache
1. Acesse: https://www.linkedin.com/post-inspector/
2. Insira a URL
3. Clique em "Inspect"
4. Se aparecer imagem antiga, clique em "Scrape Again"

### Solução 2: Verificar HTML
1. Abra a página no navegador
2. View Page Source
3. Procure pelas tags og:image
4. Verifique se está apontando para S.6.jpg

### Solução 3: Testar com Ferramenta Externa
1. Facebook Debugger: https://developers.facebook.com/tools/debug/
2. Cole a URL
3. Veja se a imagem aparece corretamente

### Solução 4: Adicionar Timestamp (se necessário)
Se o cache for muito persistente, podemos adicionar um timestamp:
```javascript
ogImage = `/og-reports/${reportId}.jpg?v=${Date.now()}`;
```

## Status Atual
- ✅ Imagem S.6.jpg existe (75KB)
- ✅ AppRouter.tsx configurado para .jpg
- ✅ Metadados Open Graph implementados
- ❓ LinkedIn ainda não exibindo thumbnail (provável cache)

## Próximos Passos
1. Testar no Post Inspector do LinkedIn
2. Usar "Scrape Again" para forçar atualização
3. Se persistir, verificar se imagem está acessível publicamente
4. Considerar adicionar timestamp para quebrar cache
