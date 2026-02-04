-- Configuração simples sem RLS para tabela contacts
-- Para uso sem autenticação Supabase

-- 1. Remover RLS se estiver habilitado
ALTER TABLE contacts DISABLE ROW LEVEL SECURITY;

-- 2. Dar permissão pública para todas as operações
-- Isso permite que qualquer pessoa (anon) possa:
-- - Inserir contatos (formulário)
-- - Ler contatos (se precisar)
-- - Atualizar contatos
-- - Excluir contatos

GRANT ALL ON contacts TO anon;
GRANT ALL ON contacts TO authenticated;

-- 3. Verificar permissões
SELECT 
  table_name,
  privilege_type,
  grantee
FROM information_schema.role_table_grants 
WHERE table_name = 'contacts';

-- 4. Teste de inserção (descomente para testar)
-- INSERT INTO contacts (name, email, company, service, message)
-- VALUES ('Teste', 'teste@email.com', 'Empresa Teste', 'arquitetura-cognitiva', 'Mensagem de teste');

-- 5. Verificar se o registro foi inserido
-- SELECT * FROM contacts ORDER BY created_at DESC LIMIT 1;

-- 6. Limpar dados de teste (descomente se necessário)
-- DELETE FROM contacts WHERE email = 'teste@email.com';

-- ATENÇÃO: Esta configuração permite acesso público completo à tabela.
-- Use apenas para desenvolvimento ou se não tiver dados sensíveis.
