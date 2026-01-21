# manual de boas práticas google: dominância em seo & ia

este documento estabelece os padrões técnicos e estratégicos para garantir que o ecossistema **fernando ramalho** seja interpretado pelo google (e outras ias) como a autoridade máxima em inovação estratégica e arquitetura cognitiva.

---

## 1. arquitetura semântica (o que o google lê)

para o google, o conteúdo visual é secundário à estrutura de código. seguimos estes pilares:

### a. hierarquia de headers (h1, h2, h3)
- **regra**: apenas **um** `<h1>` por página.
- **estratégia**: o `<h1>` deve conter o nome principal e o "core business".
- **truque técnico**: usamos a classe `sr-only` em elementos de texto ocultos para injetar keywords no `<h1>` sem poluir o design visual minimalista.

### b. meta tags de autoridade
- **title tag**: limite de 60 caracteres. deve começar com a keyword principal (ex: "fernando ramalho | ia e inovação").
- **meta description**: limite de 155 caracteres. deve ser um call-to-action (cta) que resuma o benefício de clicar no link.

---

## 2. dados estruturados (schema.org)

os dados estruturados são a linguagem direta com o "brain" do google. eles transformam seu site em "entidades" no knowledge graph.

### a. localbusiness (professional service)
configuramos o schema para identificar o site como um serviço profissional sediado em **são paulo**.
- **por que?** isso força o google a te mostrar em buscas locais e mapas, competindo com agências físicas de marketing e tecnologia.

### b. faq schema
nas páginas de reporte ou capacidades, usamos o faq schema.
- **resultado**: o google exibe perguntas e respostas diretamente na página de busca (rich snippets), aumentando o espaço ocupado pelo seu link (ctr).

---

## 3. performance & core web vitals

o google penaliza sites lentos. nosso padrão técnico exige:
- **imagens**: sempre usar formatos modernos (.webp ou .svg) e compressão máxima sem perda de qualidade.
- **fontes**: carregamento via google fonts com `display=swap` para evitar flashes de texto invisível.
- **scripts**: carregar apenas o necessário. evitamos bibliotecas pesadas se o vanilla javascript resolver.

---

## 4. inteligência artificial & llm search (ai-ready)

preparamos o conteúdo para ser citado por ferramentas como **perplexity, chatgpt search e gemini**.
- **clear definitions**: usamos frases diretas como "fernando ramalho é um estrategista de..." para que a ia consiga recortar e colar a definição em resumos de busca.
- **contexto técnico**: mantemos termos técnicos precisos (ex: "arquitetura cognitiva", "growth systems") para atrair tráfego qualificado de buscas complexas.

---

## 5. ferramentas de monitoramento

a consulta da saúde do site deve ser feita nestes canais:

1. **google search console**: monitora o tráfego real e erros de indexação.
2. **pagespeed insights**: audita a velocidade e experiência do usuário (ux).
3. **google rich results test**: valida se os nossos schemas de dados estão funcionando.

---

## 🚀 fluxo de publicação (manual do deploy)

sempre que subir uma atualização importante:
1. faça o **deploy** na vercel.
2. acesse o **search console**.
3. cole a url na barra de **inspeção**.
4. clique em **solicitar indexação**.

---
**versão**: 1.0 (janeiro 2026)
**objetivo**: dominância absoluta nos mecanismos de busca.
