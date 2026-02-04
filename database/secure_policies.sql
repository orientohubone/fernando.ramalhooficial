-- Políticas Seguras e Permissivas para tabela contacts
-- Configuração ideal: segurança + funcionalidade

-- 1. Habilitar RLS com políticas adequadas
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- 2. Remover políticas antigas (se existirem)
DROP POLICY IF EXISTS "Allow public insert contacts" ON contacts;
DROP POLICY IF EXISTS "Allow authenticated read contacts" ON contacts;
DROP POLICY IF EXISTS "Allow authenticated update contacts" ON contacts;
DROP POLICY IF EXISTS "Allow authenticated delete contacts" ON contacts;

-- 3. Política para inserções públicas (formulário)
CREATE POLICY "Enable public insert for contacts" ON contacts
  FOR INSERT WITH CHECK (true);

-- 4. Política para leitura apenas para usuários autenticados
CREATE POLICY "Enable authenticated read for contacts" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');

-- 5. Política para update/delete apenas autenticados
CREATE POLICY "Enable authenticated update for contacts" ON contacts
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable authenticated delete for contacts" ON contacts
  FOR DELETE USING (auth.role() = 'authenticated');

-- 6. Garantir permissões base
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT ALL ON contacts TO anon;
GRANT ALL ON contacts TO authenticated;

-- 7. Verificar configuração final
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE tablename = 'contacts';

SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd
FROM pg_policies 
WHERE tablename = 'contacts';

SELECT 
  table_name,
  privilege_type,
  grantee
FROM information_schema.role_table_grants 
WHERE table_name = 'contacts';

-- 8. Teste de inserção (descomente para testar)
-- INSERT INTO contacts (name, email, company, service, message)
-- VALUES ('Secure Policy Test', 'secure@test.com', 'Test Company', 'arquitetura-cognitiva', 'Testando políticas seguras');

-- 9. Verificar inserção (descomente para testar)
-- SELECT * FROM contacts WHERE email = 'secure@test.com';

-- 10. Limpar teste (descomente se necessário)
-- DELETE FROM contacts WHERE email = 'secure@test.com';

-- RESUMO DA CONFIGURAÇÃO:
-- ✅ RLS ATIVO (segurança)
-- ✅ Inserção pública (formulário funciona)
-- ✅ Leitura apenas autenticada (proteção de dados)
-- ✅ Update/delete apenas autenticados (controle total)
-- ✅ Permissões adequadas para anon e authenticated
