// Script que roda o react-snap apenas fora da Vercel
// Em produção local, gera HTML estático para cada rota
// Na Vercel, pula silenciosamente (Puppeteer não funciona no build env da Vercel)

import { execSync } from 'child_process';

if (process.env.VERCEL) {
  console.log('ℹ️  Ambiente Vercel detectado — react-snap ignorado.');
  console.log('   Para gerar o pre-render, rode: npm run build localmente e faça deploy do dist/');
} else {
  console.log('🚀 Rodando react-snap (pre-render estático)...');
  execSync('react-snap', { stdio: 'inherit' });
}
