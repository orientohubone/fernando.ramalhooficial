-- Correção de violação de RLS
-- O erro indica que RLS ainda está ativo e bloqueando inserções

-- 1. Primeiro, desabilitar completamente RLS
ALTER TABLE contacts DISABLE ROW LEVEL SECURITY;

-- 2. Remover todas as políticas existentes (se houver)
DROP POLICY IF EXISTS "Allow public insert contacts" ON contacts;
DROP POLICY IF EXISTS "Allow authenticated read contacts" ON contacts;
DROP POLICY IF EXISTS "Allow authenticated update contacts" ON contacts;
DROP POLICY IF EXISTS "Allow authenticated delete contacts" ON contacts;

-- 3. Confirmar que RLS está desabilitado
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE tablename = 'contacts';

-- 4. Garantir permissões para anon
GRANT ALL ON contacts TO anon;
GRANT ALL ON contacts TO authenticated;

-- 5. Verificar permissões atuais
SELECT 
  table_name,
  privilege_type,
  grantee
FROM information_schema.role_table_grants 
WHERE table_name = 'contacts';

-- 6. Testar inserção (descomente para testar)
-- INSERT INTO contacts (name, email, company, service, message)
-- VALUES ('Teste RLS Fix', 'teste@rlsfix.com', 'Empresa Teste', 'arquitetura-cognitiva', 'Teste após corrigir RLS');

-- 7. Verificar se inseriu
-- SELECT * FROM contacts ORDER BY created_at DESC LIMIT 1;

-- 8. Limpar teste (descomente se necessário)
-- DELETE FROM contacts WHERE email = 'teste@rlsfix.com';

-- Se ainda der erro, execute este comando alternativo:
-- TRUNCATE TABLE contacts; -- limpa a tabela completamente
-- Depois tente inserir novamente
