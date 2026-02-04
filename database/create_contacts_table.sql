-- Tabela de Contatos
-- Para armazenar mensagens do formulário de contato

CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  service VARCHAR(100),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_contacts_service ON contacts(service);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contacts_updated_at 
    BEFORE UPDATE ON contacts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- comentários
COMMENT ON TABLE contacts IS 'Tabela para armazenar mensagens de contato do formulário';
COMMENT ON COLUMN contacts.id IS 'ID único do contato';
COMMENT ON COLUMN contacts.name IS 'Nome completo do contato';
COMMENT ON COLUMN contacts.email IS 'Email do contato';
COMMENT ON COLUMN contacts.company IS 'Empresa do contato (opcional)';
COMMENT ON COLUMN contacts.service IS 'Serviço de interesse';
COMMENT ON COLUMN contacts.message IS 'Mensagem detalhada';
COMMENT ON COLUMN contacts.status IS 'Status do contato: pending, contacted, converted, closed';
COMMENT ON COLUMN contacts.created_at IS 'Data de criação do registro';
COMMENT ON COLUMN contacts.updated_at IS 'Data da última atualização';

-- Políticas de RLS (Row Level Security) - opcional
-- Descomente se precisar de segurança adicional
-- ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserções públicas
-- CREATE POLICY "Allow public insert" ON contacts
--   FOR INSERT WITH CHECK (true);

-- Política para permitir leituras apenas para usuários autenticados
-- CREATE POLICY "Allow authenticated read" ON contacts
--   FOR SELECT USING (auth.role() = 'authenticated');

-- Exemplos de queries úteis:

-- 1. Buscar contatos recentes
-- SELECT * FROM contacts ORDER BY created_at DESC LIMIT 10;

-- 2. Buscar contatos por serviço
-- SELECT * FROM contacts WHERE service = 'arquitetura-cognitiva';

-- 3. Estatísticas por serviço
-- SELECT service, COUNT(*) as total FROM contacts GROUP BY service ORDER BY total DESC;

-- 4. Contatos por status
-- SELECT status, COUNT(*) as total FROM contacts GROUP BY status;

-- 5. Contatos do último mês
-- SELECT * FROM contacts WHERE created_at >= NOW() - INTERVAL '30 days';
