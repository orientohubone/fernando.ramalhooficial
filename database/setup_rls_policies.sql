-- Configurar RLS (Row Level Security) para tabela contacts
-- Execute este script após criar a tabela contacts

-- 1. Habilitar RLS na tabela contacts
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- 2. Criar política para permitir inserções públicas (qualquer pessoa pode enviar contato)
CREATE POLICY "Allow public insert contacts" ON contacts
  FOR INSERT WITH CHECK (true);

-- 3. Criar política para permitir leituras apenas para usuários autenticados
-- (apenas você pode ver os contatos no dashboard do Supabase)
CREATE POLICY "Allow authenticated read contacts" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');

-- 4. Criar política para permitir updates apenas para usuários autenticados
-- (apenas você pode atualizar o status dos contatos)
CREATE POLICY "Allow authenticated update contacts" ON contacts
  FOR UPDATE USING (auth.role() = 'authenticated');

-- 5. Criar política para permitir deletes apenas para usuários autenticados
-- (apenas você pode excluir contatos)
CREATE POLICY "Allow authenticated delete contacts" ON contacts
  FOR DELETE USING (auth.role() = 'authenticated');

-- Verificar se as políticas foram criadas corretamente
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

-- Teste de inserção (descomente para testar)
-- INSERT INTO contacts (name, email, company, service, message)
-- VALUES ('Teste', 'teste@email.com', 'Empresa Teste', 'arquitetura-cognitiva', 'Mensagem de teste');

-- Verificar se o registro foi inserido
-- SELECT * FROM contacts ORDER BY created_at DESC LIMIT 1;
