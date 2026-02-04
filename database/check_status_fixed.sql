-- Verificar status atual das políticas e permissões (versão corrigida)

-- 1. Verificar se RLS está ativo ou inativo
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE tablename = 'contacts';

-- 2. Verificar políticas existentes
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'contacts';

-- 3. Verificar permissões atuais
SELECT 
  table_name,
  privilege_type,
  grantee
FROM information_schema.role_table_grants 
WHERE table_name = 'contacts'
ORDER BY grantee, privilege_type;

-- 4. Verificar estrutura da tabela (alternativa ao \d)
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'contacts' 
  AND table_schema = 'public'
ORDER BY ordinal_position;

-- 5. Contar registros existentes
SELECT COUNT(*) as total_contacts FROM contacts;

-- 6. Verificar últimos registros (se houver)
SELECT 
  id,
  name,
  email,
  service,
  status,
  created_at
FROM contacts 
ORDER BY created_at DESC 
LIMIT 5;

-- 7. Testar permissão de inserção (descomente para testar)
-- INSERT INTO contacts (name, email, company, service, message)
-- VALUES ('Status Check', 'status@check.com', 'Test Company', 'arquitetura-cognitiva', 'Testando permissões atuais');

-- 8. Verificar se inseriu (descomente para testar)
-- SELECT * FROM contacts WHERE email = 'status@check.com';

-- 9. Limpar teste (descomente se necessário)
-- DELETE FROM contacts WHERE email = 'status@check.com';
