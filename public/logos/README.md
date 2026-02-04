# Logos para LogoCloud Component

Esta pasta contém os logos das empresas que serão exibidos no componente LogoCloud.

## Como usar:

1. Adicione os arquivos de logo nesta pasta (formato SVG preferencialmente)
2. Atualize o array de logos no AppRouter.tsx para usar os caminhos locais

## Exemplo de uso no AppRouter.tsx:

```tsx
<LogoCloud 
  logos={[
    { src: "/logos/supabase.svg", alt: "Supabase" },
    { src: "/logos/vercel.svg", alt: "Vercel" },
    { src: "/logos/github.svg", alt: "GitHub" },
    // ... outros logos
  ]}
/>
```

## Formato recomendado:
- Formato: SVG com fundo transparente
- Dimensão: Aproximadamente 120x40px
- Cor: Branco ou tons claros para funcionar bem no fundo verde translucido

## Logos sugeridos:
- supabase.svg
- vercel.svg
- netlify.svg
- neon.svg
- vscode.svg
- github.svg
- openai.svg
- cursor.svg
- claude.svg
- replit.svg
- windsurf.svg
- 21st.svg
- manus.svg
- lovable.svg
- bolt.svg
- base44.svg
