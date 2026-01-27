# Guia Técnico para Implementação de Compartilhamento Social

A implementação de um mecanismo de compartilhamento social eficaz, especialmente com a exibição correta de miniaturas (thumbnails) no LinkedIn, exige a combinação de tags de metadados e scripts de compartilhamento.

## 1. Fluxo Técnico para Compartilhamento e Thumbnail no LinkedIn

O segredo para garantir que o LinkedIn (e outras redes sociais como Facebook e X/Twitter) exiba a imagem e o texto corretos reside no uso do **Protocolo Open Graph (OG)**.

### A. Configuração Essencial: Tags Open Graph

Para cada página de conteúdo (artigo, report, etc.) que você deseja compartilhar, as seguintes tags de metadados devem ser inseridas dinamicamente dentro da seção `<head>` do HTML:

| Tag Open Graph | Descrição | Exemplo de Conteúdo Dinâmico |
| :--- | :--- | :--- |
| `og:title` | O título do conteúdo a ser compartilhado. | `Artigo 1: Arquitetura Cognitiva` |
| `og:description` | Uma breve descrição do conteúdo (máx. 200 caracteres). | `Mapeando o campo mental onde as decisões de alto impacto acontecem.` |
| `og:image` | **Obrigatório para a miniatura.** URL absoluta da imagem (mínimo 1200x627 pixels, formato JPG ou PNG). | `https://fernandoramalhobuilder.com.br/assets/img/thumb-artigo1.jpg` |
| `og:url` | A URL canônica da página. | `https://fernandoramalhobuilder.com.br/artigo/arquitetura-cognitiva` |
| `og:type` | O tipo de conteúdo (geralmente `article` ou `website`). | `article` |

**Ação Crítica:** A tag `og:image` deve ser uma URL **absoluta** e a imagem deve estar hospedada em seu servidor. O LinkedIn fará a leitura desta tag para gerar a miniatura.

### B. Mecanismos de Compartilhamento (HTML/JavaScript)

O bloco de botões de compartilhamento pode ser implementado com a seguinte lógica:

| Ação | Implementação | Observações |
| :--- | :--- | :--- |
| **Copiar Link** | JavaScript usando a API `navigator.clipboard.writeText(url)`. | Fornece feedback visual ao usuário (ex: "Link Copiado!"). |
| **Enviar por Email** | Link `mailto:` com parâmetros `subject` e `body`. | `mailto:?subject=[Título do Artigo]&body=[Descrição do Artigo] [URL do Artigo]` |
| **Compartilhar no LinkedIn** | URL de compartilhamento direto. | `https://www.linkedin.com/shareArticle?mini=true&url=[URL]&title=[TÍTULO]` |

## 2. Prompt Otimizado para IDE Windsurf

Use o seguinte prompt para solicitar à sua IDE Windsurf que gere o código necessário. O prompt é dividido em duas partes: **Metadados (Back-end/CMS)** e **Botões (Front-end)**.

---

### Prompt para Windsurf IDE

```
# Objetivo: Implementar um bloco de compartilhamento social e as tags Open Graph necessárias para o LinkedIn.

## 1. Geração de Metadados (Para o Template da Página de Conteúdo)

Gere o código HTML para as tags Open Graph e Twitter Card, que devem ser inseridas dinamicamente no <head> de cada página de conteúdo (ex: Reports, Artigos).

O código deve ser um template, onde os valores entre colchetes `[ ]` representam variáveis dinâmicas do CMS/Back-end.

**Tags Requeridas:**
- `og:title`, `og:description`, `og:image`, `og:url`, `og:type` (para Open Graph)
- `twitter:card`, `twitter:site`, `twitter:title`, `twitter:description`, `twitter:image` (para compatibilidade com X/Twitter)

## 2. Geração do Bloco de Botões de Compartilhamento (Front-end)

Gere o código HTML, CSS (minimalista, seguindo o estilo dark/minimalista do site) e JavaScript para um bloco de compartilhamento.

**Botões Requeridos:**
1. **Copiar Link:** Botão com ícone de link/corrente. Deve usar JavaScript para copiar a URL atual para a área de transferência e exibir uma mensagem de sucesso temporária.
2. **Compartilhar no LinkedIn:** Botão com ícone do LinkedIn. Deve abrir a URL de compartilhamento do LinkedIn em uma nova janela.
3. **Enviar por Email:** Botão com ícone de envelope. Deve abrir o cliente de e-mail com o assunto e corpo pré-preenchidos.

**Requisitos de Estilo:**
- O bloco deve ser responsivo e discreto.
- Use ícones SVG ou Font Awesome (se já estiver no projeto).
- O CSS deve usar a paleta de cores do site (Preto, Branco, Verde Neon).
```

---

## 3. Etapas de Validação

Após a implementação do código gerado pela Windsurf, siga estas etapas:

1.  **Teste de Conteúdo:** Publique um novo artigo ou report com as tags Open Graph preenchidas.
2.  **Teste de Thumbnail:** Use o **Post Inspector do LinkedIn** (ferramenta de depuração) para verificar se a rede social está lendo corretamente a tag `og:image` e exibindo a miniatura desejada.
3.  **Teste de Botões:** Clique em cada botão para garantir que o link seja copiado, o e-mail seja aberto e a janela de compartilhamento do LinkedIn seja exibida corretamente.

Este fluxo garante que a sua presença digital seja não apenas técnica, mas também visualmente alinhada com a sua marca de alto impacto.
