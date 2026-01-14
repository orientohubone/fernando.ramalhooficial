
import { ReportItem } from './types';

export const ALL_REPORTS: ReportItem[] = [
  // ALGORITMOS & ONTOLOGIA (Novo)
  {
    id: 'A.1',
    cat: 'algo',
    title: 'Ontologia da Intenção',
    desc: 'Mapeando o "Porquê" em sistemas de decisão.',
    summary: 'A transição de algoritmos baseados em frequência para modelos baseados em significado ontológico profundo.',
    methodology: 'Engenharia de Ontologia aplicada a LLMs e grafos de conhecimento semântico.',
    analysis: 'Em 2026, a "Data Science" pura é considerada insuficiente. O foco migrou para a "Ontological Engineering". Sistemas agora não apenas processam "compras", mas compreendem a ontologia da "necessidade humana". Isso permite que agentes de IA operem com 95% menos erros de contexto, pois estão fundamentados em uma estrutura lógica que espelha as categorias universais da existência humana. A implementação de camadas ontológicas em sistemas ERP brasileiros permitiu uma economia de R$ 2 bi em logística preditiva.',
    findings: ['Redução de Hallucination: 95%', 'Eficiência de Contexto: +300%', 'Adoção Corporativa: 40%'],
    recommendations: 'Arquitetar schemas de dados baseados em ontologias de domínio, não apenas tabelas relacionais.',
    nextSteps: 'Migração de taxonomias estáticas para grafos ontológicos dinâmicos.',
    references: ['Stanford Encyclopedia: Ontological Engineering', 'MIT: Semantic Web 2026'],
    sources: [
      { label: 'Stanford Ontology Lab', url: 'https://plato.stanford.edu/entries/logic-ontology/' },
      { label: 'W3C Semantic Standards', url: 'https://www.w3.org/standards/semanticweb/' }
    ],
    truthScore: 99.2,
    metrics: [{ label: 'Semantic Accuracy', value: '98%', percentage: 98, trend: 'up' }],
    insightCards: [{ title: 'Meaning Moats', content: 'Empresas que detêm o "grafo de significado" do seu nicho serão as novas donas do mercado.' }]
  },
  {
    id: 'A.2',
    cat: 'algo',
    title: 'Semântica da Informação 2026',
    desc: 'O fim dos metadados burros.',
    summary: 'Como a informação auto-descritiva está eliminando a necessidade de indexação manual.',
    methodology: 'Análise de protocolos de informação líquida e orquestradores de semântica.',
    analysis: 'Arquivos e dados em 2026 possuem "consciência de contexto". Através de ontologias embutidas, a informação sabe o que é, para quem serve e qual sua relação hierárquica com outros dados. Isso gerou o conceito de "Informação Viva", onde sistemas se auto-organizam sem intervenção humana, baseando-se apenas na definição ontológica de seus componentes.',
    findings: ['Indexação Automática: 100%', 'Descoberta de Dados: Instantânea'],
    recommendations: 'Adotar padrões de dados auto-descritivos (JSON-LD 2.0).',
    nextSteps: 'Implementação de orquestradores semânticos de borda.',
    references: ['Oxford: Information Theory 2026'],
    sources: [{ label: 'Oxford Internet Institute', url: 'https://www.oii.ox.ac.uk' }],
    truthScore: 97.5
  },
  {
    id: 'A.3',
    cat: 'algo',
    title: 'Identidade Digital Ontológica',
    desc: 'O ser humano além do CPF.',
    summary: 'Modelagem de identidade baseada em traços de essência e comportamento verificável.',
    methodology: 'Cruzamento de dados biométricos, psicométricos e registros em blockchain.',
    analysis: 'A identidade em 2026 é fluida e multidimensional. A ontologia aplicada à identidade permite que o usuário prove "quem ele é" em termos de competências e intenções, sem revelar dados sensíveis. É a "Identidade de Essência", protegida por provas de conhecimento zero e estruturada em categorias de valor humano reconhecidas por algoritmos de governança global.',
    findings: ['Privacidade de Identidade: 100%', 'Verificação de Fraude: -98%'],
    recommendations: 'Integrar sistemas de autenticação com camadas de prova ontológica.',
    nextSteps: 'Lançamento do passaporte ontológico digital.',
    references: ['WEF: Digital Identity 2026'],
    sources: [{ label: 'WEF Identity Report', url: 'https://www.weforum.org/reports/digital-identity' }],
    truthScore: 95.8
  },
  {
    id: 'A.4',
    cat: 'algo',
    title: 'Grafos de Conhecimento Humano',
    desc: 'Conectando experiências, não apenas dados.',
    summary: 'A reconstrução da internet baseada em grafos de experiência e relações de valor.',
    methodology: 'Pesquisa em arquitetura de grafos neurais e semântica de redes sociais.',
    analysis: 'A web de 2026 não é uma rede de páginas, mas um grafo de experiências. A ontologia humana permite mapear como o conhecimento flui entre indivíduos, criando "Redes de Sabedoria" onde a relevância é determinada pela profundidade da conexão ontológica entre os nós, e não por algoritmos de engajamento vazio.',
    findings: ['Relevância de Busca: +500%', 'Filtro de Ruído: 90%'],
    recommendations: 'Abandonar métricas de vaidade em favor de métricas de profundidade de conexão.',
    nextSteps: 'Construção de grafos de conhecimento comunitários.',
    references: ['Google Research: Knowledge Graphs'],
    sources: [{ label: 'Google Discovery', url: 'https://research.google/pubs/knowledge-graph/' }],
    truthScore: 96.4
  },
  {
    id: 'A.5',
    cat: 'algo',
    title: 'Ética Ontológica Algorítmica',
    desc: 'Codificando valores em lógica pura.',
    summary: 'A implementação de "Guardrails de Valor" baseados em ontologias éticas universais.',
    methodology: 'Tradução de frameworks de ética (Kant, Mill, Aristóteles) para lógica proposicional e código.',
    analysis: 'Decisões autônomas de IA agora passam por um "Crivo Ontológico Ético". O algoritmo não avalia apenas o resultado estatístico, mas a conformidade com uma ontologia de valores pré-definida. Se uma ação fere a integridade da "categoria humana" definida no sistema, ela é vetada automaticamente por lógica, não por filtros superficiais.',
    findings: ['Bias Algorítmico: -75%', 'Segurança de Decisão: +200%'],
    recommendations: 'Incluir filósofos e ontologistas no design de sistemas críticos de decisão.',
    nextSteps: 'Certificação de "Ontologia Ética" para IAs corporativas.',
    references: ['IEEE: Ethical Design 2026'],
    sources: [{ label: 'IEEE Global Ethics', url: 'https://ethicsinaction.ieee.org' }],
    truthScore: 98.1
  },
  {
    id: 'A.6',
    cat: 'algo',
    title: 'Ontologia e Interfaces Cerebrais',
    desc: 'Traduzindo ondas neurais em conceitos.',
    summary: 'Como o mapeamento ontológico permite que BCIs compreendam intenções complexas.',
    methodology: 'Análise de sinais de EEG/BCI processados por camadas de mapeamento conceitual.',
    analysis: 'BCIs (Brain-Computer Interfaces) em 2026 não buscam apenas "cliques". Elas buscam "conceitos". A camada ontológica atua como o tradutor: ela recebe o padrão neural e o mapeia em uma ontologia de intenções, permitindo que um usuário "pense" uma estrutura complexa de informação e o computador a materialize instantaneamente, pois ambos compartilham o mesmo mapa ontológico.',
    findings: ['Velocidade de Pensamento-Ação: 10x', 'Acurácia de Intenção: 94%'],
    recommendations: 'Desenvolver drivers de BCI que utilizem ontologias de linguagem natural.',
    nextSteps: 'Primeira fase de testes de "Escrita de Intenção" pura.',
    references: ['Neuralink: Concept Mapping', 'Nature Neuroscience'],
    sources: [{ label: 'Nature Neuro', url: 'https://www.nature.com/neuro/' }],
    truthScore: 92.9
  },

  // MERCADO & IA (6 items)
  {
    id: 'M.1',
    cat: 'market',
    title: 'Sovereign AI: O Brasil como Hub de Dados',
    desc: 'O surgimento de clusters de computação soberana no Ceará.',
    summary: 'Em 2026, a soberania de dados tornou-se o principal ativo de defesa econômica do Brasil, impulsionada pela infraestrutura do Nordeste.',
    methodology: 'Análise de investimentos em infraestrutura de datacenters e cabos submarinos via Gartner e Aneel.',
    analysis: 'A análise central de 2026 revela um deslocamento massivo do processamento de IA para solo brasileiro. Com o custo da energia renovável em queda no Ceará, o Brasil tornou-se um porto seguro para datacenters de baixa latência. Observamos a verticalização radical: empresas brasileiras não utilizam mais modelos brutos, mas instâncias privadas de SLMs refinadas com RAG. Esta transição é impulsionada pela necessidade de conformidade com a LGPD e pela busca por redução drástica no custo de tokens. Projetamos que até o final de 2027, 60% do PIB digital brasileiro será otimizado por processos autônomos de IA.',
    findings: ['Adoção de Nuvens Soberanas: 72%', 'Redução de Custos de Inferência: 68%', 'Latência Fortaleza-Lisboa: <15ms'],
    recommendations: 'Priorizar a migração de workloads sensíveis para provedores locais com certificação de soberania.',
    nextSteps: 'Auditoria de datasets locais para fine-tuning de modelos verticais.',
    references: ['Gartner: Strategic Technology 2026', 'Aneel: Energy Outlook 2026'],
    sources: [
      { label: 'Gartner Research', url: 'https://www.gartner.com/en/information-technology/insights/top-technology-trends' },
      { label: 'Aneel Hub', url: 'https://www.gov.br/aneel' }
    ],
    truthScore: 98.4,
    metrics: [{ label: 'Local Adoption', value: '72%', percentage: 72, trend: 'up' }],
    insightCards: [{ title: 'Energy Moat', content: 'A matriz eólica do NE é o novo diferencial para LLMs.' }]
  },
  {
    id: 'M.2',
    cat: 'market',
    title: 'Agentes Autônomos de Negócios',
    desc: 'IA que decide e executa em nome da corporação.',
    summary: 'Transição do chat reativo para agentes com autonomia transacional integrada ao ERP.',
    methodology: 'Estudo de caso McKinsey sobre automação de back-office e fluxos de decisão algorítmica.',
    analysis: 'O suporte ao cliente em 2026 não é mais reativo. Agentes autônomos agora possuem permissão de execução, resolvendo problemas reais como estornos e logística reversa sem intervenção humana. Este deslocamento de Chat-first para Action-first reduziu o overhead operacional em 45%. A integração nativa com o PIX Automático permite que a IA liquide disputas financeiras instantaneamente.',
    findings: ['Sucesso em Execuções: 88%', 'Custo Operacional: -45%', 'Resolução em 1 clique: 90%'],
    recommendations: 'Estabelecer firewalls de governança para agentes com permissão financeira.',
    nextSteps: 'Beta test de agentes em fluxos de aprovação de crédito.',
    references: ['McKinsey: The State of AI 2026', 'Forrester: Agentic Workflows'],
    sources: [{ label: 'McKinsey Insights', url: 'https://www.mckinsey.com/featured-insights/artificial-intelligence' }],
    truthScore: 96.1
  },
  { id: 'M.3', cat: 'market', title: 'SLMs: Eficiência sobre Escala', desc: 'Modelos de 7B dominando o setor jurídico.', summary: 'Por que modelos pequenos e especializados vencem os gigantes em 90% dos casos.', methodology: 'Benchmark de precisão técnica vs custo de API.', analysis: 'A corrida por bilhões de parâmetros deu lugar à precisão vertical. No setor jurídico brasileiro, modelos de 7B parâmetros treinados em jurisprudência nacional superam o GPT-5 em acurácia de citação em 15%.', findings: ['Precisão Jurídica: 94%', 'Custo de Token: -90%'], recommendations: 'Trocar APIs generalistas por infraestrutura local de SLMs.', nextSteps: 'Fine-tuning de Llama 3 para conformidade LGPD.', references: ['CNJ: IA no Judiciário', 'Mistral AI Technical Blog'], truthScore: 97.2, sources: [{label: 'CNJ Data', url: 'https://www.cnj.jus.br'}] },
  { id: 'M.4', cat: 'market', title: 'Hardware de IA: O Chip Brasileiro', desc: 'Produção local de NPUs em Campinas.', summary: 'O Brasil inicia sua jornada na cadeia de semicondutores para IA.', methodology: 'Análise de patentes e incentivos do programa semicondutores.', analysis: 'Com incentivos governamentais, o polo de Campinas começou a produzir NPUs (Neural Processing Units) otimizadas para processamento de borda, reduzindo a dependência de importação de hardware em 30%.', findings: ['Produção Local: 1M chips/ano', 'Redução de Custo: 25%'], recommendations: 'Incentivar o uso de hardware nacional em infraestrutura pública.', nextSteps: 'Expansão da fábrica de wafers em SP.', references: ['MCTI Report 2026', 'ABINEE Statistics'], truthScore: 94.5, sources: [{label: 'MCTI BR', url: 'https://www.gov.br/mcti'}] },
  { id: 'M.5', cat: 'market', title: 'Cibersegurança Generativa', desc: 'Guerra de milissegundos entre LLMs.', summary: 'Como IAs defensivas predizem ataques zero-day.', methodology: 'Logs de ataques em tempo real e monitoramento de IAs guardiãs.', analysis: 'O phishing tornou-se impossível de detectar manualmente. Firewalls neurais agora analisam padrões de tráfego para bloquear ataques antes que eles ocorram, operando em milissegundos.', findings: ['Detecção de Ameaças: 99.9%', 'Tempo de Resposta: <1ms'], recommendations: 'Implementar Zero Trust assistido por IA.', nextSteps: 'Auditoria de agentes de defesa.', references: ['CrowdStrike Threat Report 2026'], truthScore: 99.1, sources: [{label: 'CrowdStrike', url: 'https://www.crowdstrike.com'}] },
  { id: 'M.6', cat: 'market', title: 'SaaS Headless: O Fim da UI', desc: 'Softwares que operam via intenção e API.', summary: 'O declínio das interfaces gráficas em favor de fluxos baseados em linguagem natural.', methodology: 'Análise de churn de dashboards tradicionais.', analysis: 'O usuário não quer mais ver painéis complexos. Ele quer perguntar ao sistema e obter a ação feita. O SaaS do futuro é uma API robusta com uma camada de inteligência de intenção.', findings: ['Adoção de Headless: 65%', 'Eficiência de Tarefas: 4x'], recommendations: 'Desenvolver para APIs antes de desenhar telas.', nextSteps: 'Migrar dashboards para interfaces de chat/voz.', references: ['Gartner: Future of SaaS'], truthScore: 93.8, sources: [{label: 'Gartner SaaS', url: 'https://www.gartner.com'}] },

  // DADOS & ESPORTES (6 items)
  {
    id: 'D.1',
    cat: 'data',
    title: 'Betting Integrity 2026',
    desc: 'Algoritmos caçando fraudes no futebol brasileiro.',
    summary: 'Regulação algorítmica total para garantir a integridade dos resultados esportivos.',
    methodology: 'Cruzamento de volumes de apostas e dados de telemetria de campo.',
    analysis: 'O mercado de apostas no Brasil atingiu a maturidade em 2026 com o sistema Grito de Alerta. IAs monitoram anomalias em mercados de escanteios e cartões, cruzando com o histórico financeiro dos envolvidos. A lavagem de dinheiro no esporte caiu 85% após a implementação de rastreamento via Drex.',
    findings: ['Detecção de Fraude: 99%', 'Redução de Lavagem: 85%'],
    recommendations: 'Casas de apostas devem integrar APIs de monitoramento federal.',
    nextSteps: 'Obrigatoriedade de KYC biométrico para apostadores.',
    references: ['Min. Fazenda: Apostas 2026', 'Sportradar Integrity Hub'],
    sources: [
      { label: 'Ministério da Fazenda', url: 'https://www.gov.br/fazenda' },
      { label: 'Sportradar', url: 'https://sportradar.com' }
    ],
    truthScore: 98.7
  },
  { id: 'D.2', cat: 'data', title: 'Performance Biométrica 360', desc: 'Previsão de lesões via gêmeos digitais.', summary: 'Sensores subcutâneos e IA reduzindo o tempo de DM nos clubes.', methodology: 'Análise de dados médicos de clubes da Série A.', analysis: 'O jogador em 2026 é monitorado em tempo real. Gêmeos digitais simulam o estresse muscular, avisando o treinador o momento exato de substituir o atleta para evitar lesões.', findings: ['Redução de Lesões: 40%', 'Disponibilidade de Elenco: 95%'], recommendations: 'Investir em infraestrutura de IoT no CT.', nextSteps: 'Padronização de dados médicos via blockchain.', references: ['FIFA Medical Journal 2026'], truthScore: 97.4, sources: [{label: 'FIFA Medical', url: 'https://www.fifa.com/medical'}] },
  { id: 'D.3', cat: 'data', title: 'Fan Token Utility', desc: 'Governança real para o torcedor.', summary: 'Do engajamento à decisão: o novo papel do sócio-torcedor digital.', methodology: 'Volume de transações e taxas de votação em DAOs de clubes.', analysis: 'Tokens não são mais ativos especulativos. Eles permitem votar no design do uniforme e acessar áreas exclusivas via AR no estádio.', findings: ['Faturamento Digital: +25%', 'Engajamento: +120%'], recommendations: 'Criar utilidade real e tangível para o token.', nextSteps: 'Integração de tokens com ingressos NFC.', references: ['Socios.com Annual Report'], truthScore: 94.2, sources: [{label: 'Socios Insights', url: 'https://www.socios.com'}] },
  { id: 'D.4', cat: 'data', title: 'Scouting Algorítmico 2.0', desc: 'IA achando joias em vídeos amadores.', summary: 'Democratização do recrutamento através de visão computacional.', methodology: 'Acurácia de modelos de análise de movimento em vídeos de celular.', analysis: 'Um garoto em uma favela pode ser descoberto por uma IA que analisa o vídeo de seu jogo amador, comparando-o com benchmarks de astros globais.', findings: ['Detecção de Talentos: +300%', 'Bias de Recrutamento: -90%'], recommendations: 'Clubes devem lançar plataformas de upload para talentos.', nextSteps: 'Lançamento do app "Dream Scouter".', references: ['Wyscout Analytics 2026'], truthScore: 95.8, sources: [{label: 'Wyscout', url: 'https://wyscout.com'}] },
  { id: 'D.5', cat: 'data', title: 'Broadcast Customizado', desc: 'Transmissões em AR com camadas de dados.', summary: 'O espectador decide quais dados quer ver sobrepostos ao jogo.', methodology: 'UX Research em transmissões de headsets de realidade mista.', analysis: 'Com óculos de AR, você vê a probabilidade de gol e a velocidade do chute em tempo real sobre a imagem do campo.', findings: ['Uso de Camadas AR: 45%', 'Retenção de Espectador: +25%'], recommendations: 'Oferecer pacotes de dados premium para transmissões.', nextSteps: 'Parceria com fabricantes de Smart Glasses.', references: ['Apple Vision Pro Sports Usage'], truthScore: 92.1, sources: [{label: 'Apple Tech', url: 'https://www.apple.com/apple-vision-pro/'}] },
  { id: 'D.6', cat: 'data', title: 'E-sports Analytics BR', desc: 'Brasil como cérebro global dos games.', summary: 'Análise de telemetria militar aplicada ao Valorant e CS.', methodology: 'Análise de 10k partidas profissionais.', analysis: 'Organizações brasileiras lideram o uso de análise de voz e estresse via wearables para otimizar a comunicação em jogo.', findings: ['Taxa de Vitória: +12%', 'Detecção de Estresse: 94%'], recommendations: 'Investir em psicólogos de dados para times de elite.', nextSteps: 'Lançar academia de analistas de E-sports.', references: ['Newzoo: E-sports 2026'], truthScore: 96.9, sources: [{label: 'Newzoo', url: 'https://newzoo.com'}] },

  // SUSTENTABILIDADE (6 items)
  {
    id: 'E.1',
    cat: 'esg',
    title: 'Crédito de Carbono 3.0',
    desc: 'Tokenização e liquidez no mercado verde.',
    summary: 'A Amazônia preservada como o ativo financeiro mais rentável do Brasil.',
    methodology: 'Monitoramento via satélite Sentinel e liquidação via Drex.',
    analysis: 'Em 2026, preservar a floresta é um negócio bilionário. Cada hectare gera tokens auditados por IA via satélite. Se houver desmatamento, o smart contract cancela o rendimento. Isso trouxe segurança para fundos globais investirem na economia da floresta em pé.',
    findings: ['Liquidez de Carbono: +400%', 'Acurácia de Satélite: 99.8%'],
    recommendations: 'Empresas devem migrar suas compensações para ativos tokenizados.',
    nextSteps: 'Lançamento da Bolsa de Ativos Ambientais na B3.',
    references: ['B3: Relatório de Sustentabilidade 2026', 'INPE: Prodes 2026'],
    sources: [
      { label: 'B3 Carbon', url: 'https://www.b3.com.br' },
      { label: 'INPE Brasil', url: 'https://www.gov.br/inpe' }
    ],
    truthScore: 98.7
  },
  { id: 'E.2', cat: 'esg', title: 'Hidrogênio Verde no Ceará', desc: 'Brasil como a nova Arábia Saudita de energia.', summary: 'Exportação de energia limpa em escala global via porto de Pecém.', methodology: 'Análise de capacidade de eletrólise e contratos de exportação.', analysis: 'O Ceará produz o hidrogênio mais barato do mundo usando energia eólica. A infraestrutura de amônia verde já abastece navios cargueiros europeus.', findings: ['Custo de Produção: $1.5/kg', 'Investimento Estrangeiro: $15B'], recommendations: 'Priorizar infraestrutura logística no Nordeste.', nextSteps: 'Inauguração da fase 2 do Hub de Pecém.', references: ['Bloomberg NEF 2026'], truthScore: 97.5, sources: [{label: 'Bloomberg NEF', url: 'https://about.bnef.com'}] },
  { id: 'E.3', cat: 'esg', title: 'Logística de Impacto Zero', desc: 'Eletrificação total da frota urbana.', summary: 'Fim do diesel em entregas de última milha nas capitais.', methodology: 'Taxas de renovação de frota e densidade de eletropostos.', analysis: 'Gigantes do e-commerce operam 100% de veículos elétricos em SP. O custo de manutenção caiu 45% e a poluição sonora desapareceu nos centros.', findings: ['Frota Elétrica Urbana: 60%', 'Economia de TCO: 45%'], recommendations: 'Incentivos fiscais para conversão de frotas pesadas.', nextSteps: 'Implementação de corredores elétricos interestaduais.', references: ['Fenabrave EV Report 2026'], truthScore: 95.9, sources: [{label: 'Fenabrave', url: 'https://www.fenabrave.org.br'}] },
  { id: 'E.4', cat: 'esg', title: 'Moda Circular e Blockchain', desc: 'Rastreabilidade total da fibra à loja.', summary: 'O fim do fast-fashion opaco através de passaportes digitais de produto.', methodology: 'Análise de supply chain via RFID e Ledger público.', analysis: 'O consumidor escaneia o QR Code e vê quanta água foi usada e se o algodão é orgânico. Marcas sem transparência perderam 30% do mercado Gen Z.', findings: ['Adoção de QR Passport: 40%', 'Valor de Revenda: +50%'], recommendations: 'Implementar rastreabilidade em toda a linha de produção.', nextSteps: 'Parceria com startups de reciclagem molecular.', references: ['Ellen MacArthur Found. 2026'], truthScore: 94.1, sources: [{label: 'Ellen MacArthur', url: 'https://ellenmacarthurfoundation.org'}] },
  { id: 'E.5', cat: 'esg', title: 'Bio-plásticos Amazônicos', desc: 'Substituindo o petróleo por resíduos de açaí.', summary: 'Biotecnologia transformando lixo orgânico em embalagens industriais.', methodology: 'Testes de biodegradação e escalabilidade industrial.', analysis: 'Startups do Norte criaram polímeros que desaparecem em 30 dias na terra. Grandes varejistas já substituíram 100% do plástico bolha por essa solução.', findings: ['Biodegradação: 100% em 30 dias', 'Custo: +10% vs plástico'], recommendations: 'Investir em usinas de processamento de biopolímeros no Norte.', nextSteps: 'Certificação Anvisa para contato com alimentos.', references: ['Embrapa: Biotecnologia 2026'], truthScore: 95.6, sources: [{label: 'Embrapa Bio', url: 'https://www.embrapa.br'}] },
  { id: 'E.6', cat: 'esg', title: 'Mineração Regenerativa', desc: 'Sensores IoT prevenindo Brumadinhos.', summary: 'O uso de fibra óptica e IA para garantir risco zero em barragens.', methodology: 'Monitoramento preditivo e análise de vibração de solo.', analysis: 'A mineração brasileira em 2026 é a mais segura do mundo. Sensores detectam movimentações milimétricas meses antes de uma falha.', findings: ['Risco de Desastre: -95%', 'Recuperação de Área: +200%'], recommendations: 'Automação total de sensores em barragens inativas.', nextSteps: 'Selo internacional de segurança mineral.', references: ['Vale: Relatório de Segurança 2026'], truthScore: 98.2, sources: [{label: 'Vale ESG', url: 'https://vale.com/esg'}] },

  // COMPORTAMENTO (6 items)
  {
    id: 'C.1',
    cat: 'consumer',
    title: 'A Morte do Algoritmo Genérico',
    desc: 'O fim dos feeds infinitos em 2026.',
    summary: 'Consumidores estão abandonando redes de massa por micro-comunidades curadas.',
    methodology: 'Estudo etnográfico digital e taxas de churn de grandes plataformas.',
    analysis: 'A fadiga de dopamina gerou o movimento "Oásis Digitais". As pessoas agora pagam para estar em grupos pequenos com curadoria humana. Marcas que focam em influenciadores gigantes estão perdendo para líderes de tribos de 5k pessoas engajadas.',
    findings: ['Churn de Redes Sociais: 25%', 'Conversão em Micro-comunidades: 8x'],
    recommendations: 'Criar espaços de marca fechados e exclusivos (Token-gated).',
    nextSteps: 'Lançar plataforma de comunidade proprietária.',
    references: ['WGSN: Future Consumer 2026', 'Pew Research'],
    sources: [
      { label: 'WGSN Trends', url: 'https://www.wgsn.com' },
      { label: 'Pew Research Center', url: 'https://www.pewresearch.org' }
    ],
    truthScore: 93.9
  },
  { id: 'C.2', cat: 'consumer', title: 'Economia da Solidão', desc: 'IA como companhia para idosos.', summary: 'Robôs empáticos combatendo o isolamento social de forma proativa.', methodology: 'Análise de engajamento em assistentes de voz com personas emocionais.', analysis: 'IAs agora lembram de histórias passadas e conversam com empatia. Este mercado de "Eldercare Tech" explodiu no Brasil, onde a solidão era um problema de saúde pública.', findings: ['Redução de Isolamento: 60%', 'Tamanho do Mercado: R$ 8B'], recommendations: 'Desenvolver vozes e personalidades focadas em acolhimento.', nextSteps: 'Parceria com planos de saúde para cobertura.', references: ['Nature Medicine: Aging 2026'], truthScore: 92.4, sources: [{label: 'Nature Journal', url: 'https://www.nature.com'}] },
  { id: 'C.3', cat: 'consumer', title: 'Minimalismo Digital Ativo', desc: 'O luxo de estar inacessível.', summary: 'Hotéis e resorts "Zero Signal" são o novo destino da classe criativa.', methodology: 'Taxas de reserva em hotéis de luxo com bloqueio de sinal.', analysis: 'Estar off-the-grid é o maior símbolo de status. Profissionais pagam caro para passar 48h sem notificações, focando em atividades manuais e sono profundo.', findings: ['Crescimento de Turismo de Detox: +120%', 'Premium de Preço: 50%'], recommendations: 'Criar modos "Deep Focus" em dispositivos e serviços.', nextSteps: 'Campanhas baseadas em "Momentos de Silêncio".', references: ['Travel Weekly 2026'], truthScore: 94.6, sources: [{label: 'Travel Weekly', url: 'https://www.travelweekly.com'}] },
  { id: 'C.4', cat: 'consumer', title: 'VTubers e Influência Sintética', desc: 'O fim da necessidade do rosto humano.', summary: 'Avatares digitais gerando bilhões em merchandising sem polêmicas.', methodology: 'Análise de engajamento de avatares vs influenciadores reais.', analysis: 'Na Gen Alpha, a autenticidade não exige carne e osso. Avatares controlados por IA ou humanos anônimos dominam as paradas de vendas.', findings: ['Engajamento de Avatares: +30%', 'Risco de Crise de Marca: 0%'], recommendations: 'Criar mascotes virtuais com personalidades complexas.', nextSteps: 'Integração de avatares em live commerce.', references: ['Anycolor Annual Report 2026'], truthScore: 93.1, sources: [{label: 'Anycolor', url: 'https://www.anycolor.co.jp/en'}] },
  { id: 'C.5', cat: 'consumer', title: 'Vida Gamificada', desc: 'XP e Níveis em tarefas mundanas.', summary: 'Trabalho e saúde transformados em RPGs para manter retenção.', methodology: 'Análise de retenção em apps de produtividade gamificados.', analysis: 'Ninguém mais faz nada sem ganhar pontos. Empresas usam avatars corporativos que sobem de nível conforme as entregas, aumentando a produtividade em 40%.', findings: ['Produtividade: +40%', 'Retenção em Apps: 90 dias'], recommendations: 'Implementar recompensas tangíveis ligadas ao progresso virtual.', nextSteps: 'Auditoria de saúde mental em sistemas de game-work.', references: ['Harvard Business Review: Gamification 2026'], truthScore: 94.8, sources: [{label: 'HBR Strategy', url: 'https://hbr.org'}] },
  { id: 'C.6', cat: 'consumer', title: 'Fadiga de Assinatura', desc: 'A volta do pague-por-uso.', summary: 'O colapso da recorrência mensal em favor de micro-pagamentos via PIX.', methodology: 'Análise de churn em serviços de streaming e SaaS.', analysis: 'As pessoas cansaram de 15 assinaturas. O modelo de pagar 10 centavos para ler um artigo ou assistir um vídeo dominou o varejo digital.', findings: ['Churn de Assinaturas: 35%', 'Crescimento de Micropagamentos: +500%'], recommendations: 'Oferecer passes diários ou cobrança granular.', nextSteps: 'Integração de checkout de 1 clique com PIX.', references: ['Zuora: Subscription Index 2026'], truthScore: 95.9, sources: [{label: 'Zuora Index', url: 'https://www.zuora.com/resource/subscription-economy-index/'}] },

  // MERCADO FINANCEIRO (6 items)
  {
    id: 'F.1',
    cat: 'finance',
    title: 'Real Estate Tokenization',
    desc: 'Comprando m² via Drex.',
    summary: 'Democratização do investimento imobiliário através de frações digitais líquidas.',
    methodology: 'Acompanhamento do piloto Drex e registros em cartórios digitais.',
    analysis: 'Investir em imóveis em 2026 não exige milhões. Você compra R$ 100 de um prédio na Faria Lima e o aluguel cai diariamente na sua carteira digital. A liquidez do mercado imobiliário explodiu 80% com essa mudança.',
    findings: ['Liquidez de Mercado: +80%', 'Custo de Transação: -90%'],
    recommendations: 'Incorporadoras devem tokenizar 100% dos ativos para atrair varejo.',
    nextSteps: 'Listagem de tokens imobiliários na B3.',
    references: ['BCB: Drex Pilot Report', 'FipeZap 2026'],
    sources: [
      { label: 'Banco Central BR', url: 'https://www.bcb.gov.br' },
      { label: 'FipeZap', url: 'https://www.fipe.org.br' }
    ],
    truthScore: 98.4
  },
  { id: 'F.2', cat: 'finance', title: 'Open Finance Fase Final', desc: 'Portabilidade algorítmica de crédito.', summary: 'IAs agora negociam as melhores taxas de juros autonomamente para o cliente.', methodology: 'Fluxos de migração de dívida via Open Finance.', analysis: 'Seu agente financeiro muda sua dívida de banco se encontrar uma taxa 0.1% menor, sem você precisar assinar nada. O banco virou uma commodity movida por dados.', findings: ['Portabilidade de Crédito: +150%', 'Spread Bancário: -12%'], recommendations: 'Focar em CX emocional para evitar o churn algorítmico.', nextSteps: 'Lançar agregador multi-banco com IA.', references: ['Febraban: Tecnologia Bancária 2026'], truthScore: 97.2, sources: [{label: 'Febraban', url: 'https://portal.febraban.org.br'}] },
  { id: 'F.3', cat: 'finance', title: 'DeFi Institucional', desc: 'Debêntures em Blockchain.', summary: 'Empresas captando recursos diretamente de investidores globais via protocolos descentralizados.', methodology: 'Análise de emissões via sandbox da CVM.', analysis: 'Uma empresa média de SC agora capta dívida em Berlim via DeFi regulado pela CVM. O intermediário sumiu e o custo de capital caiu 5%.', findings: ['Tempo de Emissão: 24h', 'Custo de Intermediação: -5%'], recommendations: 'Estruturar tesouraria para aceitar smart contracts.', nextSteps: 'Auditoria de contratos de emissão.', references: ['CVM: Sandbox Reports 2026'], truthScore: 96.5, sources: [{label: 'CVM Brasil', url: 'https://www.gov.br/cvm'}] },
  { id: 'F.4', cat: 'finance', title: 'Seguros Paramétricos', desc: 'Pagamento automático via IoT.', summary: 'Se chover demais, o seguro paga o agricultor antes dele sair de casa.', methodology: 'Análise de sinistros pagos via gatilhos de dados oraculares.', analysis: 'O seguro não depende mais de perito. Ele depende de dados de satélite. Se o índice climático for atingido, o pagamento é via PIX automático.', findings: ['Tempo de Payout: <5 min', 'Fraude em Sinistros: <1%'], recommendations: 'Migrar seguros rurais para modelos paramétricos.', nextSteps: 'Instalar oráculos de dados climáticos oficiais.', references: ['Susep: Anuário 2026'], truthScore: 95.1, sources: [{label: 'Susep Hub', url: 'https://www.gov.br/susep'}] },
  { id: 'F.6', cat: 'finance', title: 'VC Algorítmico', desc: 'IA decidindo o investimento.', summary: 'Fundos de Venture Capital que investem baseados em código e retenção, não em pitch.', methodology: 'Performance de fundos assistidos por IA.', analysis: 'O pitch deck morreu. Investidores agora conectam sua IA no Stripe da startup. Se o código é bom e a retenção cresce, o dinheiro cai na conta em 7 dias.', findings: ['Ciclo de Investimento: 1 semana', 'ROI de Fundos AI: +18%'], recommendations: 'Manter higiene total de dados financeiros para atrair capital.', nextSteps: 'Auditoria de métricas via plataforma Third-party.', references: ['Pitchbook: VC Outlook 2026'], truthScore: 93.7, sources: [{label: 'Pitchbook', url: 'https://pitchbook.com'}] },
  { id: 'F.5', cat: 'finance', title: 'Banking Invisível', desc: 'Conta integrada ao SO.', summary: 'A conta bancária como um utilitário de background, sem apps.', methodology: 'Adoção de pagamentos via assistentes de voz e óculos AR.', analysis: 'Você apenas diz "Pague o café" e a biometria faz o resto. O banco desapareceu como interface e virou infraestrutura.', findings: ['Uso de Apps Bancários: -40%', 'Segurança Biométrica: 99.9%'], recommendations: 'Abandonar a estratégia de app-first.', nextSteps: 'Integração com Apple/Google Wallet v2.', references: ['Accenture: Banking Future'], truthScore: 94.3, sources: [{label: 'Accenture Finance', url: 'https://www.accenture.com'}] },

  // MOBILIDADE (6 items)
  {
    id: 'MO.1',
    cat: 'mobility',
    title: 'Drones de Entrega em SP',
    desc: 'Céu de baixa altitude em operação.',
    summary: 'A malha aérea logística que removeu o delivery das ruas engarrafadas.',
    methodology: 'Acompanhamento de 500k entregas via drone em áreas urbanas densas.',
    analysis: 'O céu de SP em 2026 é uma rodovia. Drones autônomos entregam pacotes de até 2kg em 10 minutos. O custo por entrega caiu 70% comparado ao motoboy, com segurança de 99.99%.',
    findings: ['Tempo de Entrega: -70%', 'Pegada de Carbono: -85%'],
    recommendations: 'Incorporadoras devem instalar vertiportos em todos os novos prédios.',
    nextSteps: 'Regulação de ruído aéreo urbano junto à prefeitura.',
    references: ['ANAC: Drone Delivery Report 2026', 'iFood Labs'],
    sources: [
      { label: 'ANAC Brasil', url: 'https://www.gov.br/anac' },
      { label: 'iFood News', url: 'https://news.ifood.com.br' }
    ],
    truthScore: 94.2
  },
  { id: 'MO.2', cat: 'mobility', title: 'Ferrovias Inteligentes', desc: 'Renascimento via IoT.', summary: 'Monitoramento acústico de trilhos aumentando a capacidade de carga agrícola.', methodology: 'Telemetria em 2k km de malha ferroviária.', analysis: 'Locomotivas autônomas sincronizam velocidade para economizar 25% de energia. O frete ferroviário tornou o agro brasileiro imbatível.', findings: ['Custo de Frete: -20%', 'Downtime de Linha: -50%'], recommendations: 'Acelerar leilões de trechos ociosos.', nextSteps: 'Automação total de pátios de manobra.', references: ['ANTT: Ferrovia 2026'], truthScore: 95.8, sources: [{label: 'ANTT Hub', url: 'https://www.gov.br/antt'}] },
  { id: 'MO.3', cat: 'mobility', title: 'Assinatura de Veículos', desc: 'Fim da posse de carros.', summary: '60% da classe média urbana prefere flexibilidade a ativos depreciáveis.', methodology: 'Crescimento de contratos de locação de longo prazo.', analysis: 'Ter um carro é um fardo. Você assina o modelo conforme a necessidade, com manutenção e seguro geridos por IA.', findings: ['Crescimento de Assinaturas: +200%', 'Utilização de Veículo: +40%'], recommendations: 'Converter revendedores em centros de serviço e logística.', nextSteps: 'Parceria com plataformas de Car-as-a-Service.', references: ['Localiza: Market Report 2026'], truthScore: 96.1, sources: [{label: 'Localiza RI', url: 'https://ri.localiza.com'}] },
  { id: 'MO.4', cat: 'mobility', title: 'Mobilidade Fluvial Elétrica', desc: 'Recife e Belém sobre águas.', summary: 'Catamarãs elétricos autônomos revitalizando o transporte ribeirinho.', methodology: 'Eficiência de rotas fluviais vs terrestres.', analysis: 'Cidades ribeirinhas pararam de olhar apenas para as ruas. Barcos silenciosos e rápidos cruzam canais integrados ao bilhete único.', findings: ['Tempo de Trajeto: -40%', 'Poluição Sonora: -90%'], recommendations: 'Expandir terminais multimodais hídricos.', nextSteps: 'Implementação de balsas elétricas.', references: ['Waterways Hub 2026'], truthScore: 93.4, sources: [{label: 'Recife Mobility', url: 'https://www.recife.pe.gov.br'}] },
  { id: 'MO.5', cat: 'mobility', title: 'V2G: Carro como Bateria', desc: 'Vendendo energia para o grid.', summary: 'Veículos elétricos estabilizando a rede elétrica nas horas de pico.', methodology: 'Análise de balanço energético em condomínios comerciais.', analysis: 'Seu carro carrega com sol ao meio-dia e vende energia para o prédio à noite. O dono do EV ganha R$ 400/mês por "emprestar" sua bateria.', findings: ['Renda Domiciliar: R$ 400/mês', 'Estabilidade da Rede: +15%'], recommendations: 'Instalar carregadores bidirecionais em garagens.', nextSteps: 'Regulamentação tarifária junto à Aneel.', references: ['Aneel: V2G Pilot'], truthScore: 94.7, sources: [{label: 'Aneel News', url: 'https://www.gov.br/aneel'}] },
  { id: 'MO.6', cat: 'mobility', title: 'Teleféricos Sociais', desc: 'Vencendo a topografia das favelas.', summary: 'Integração de comunidades isoladas via mobilidade vertical de massa.', methodology: 'Impacto socioeconômico em áreas de difícil acesso.', analysis: 'O teleférico vence em 5 minutos o que o ônibus levava 1 hora. A empregabilidade nas comunidades cresceu 30% devido à redução do tempo de deslocamento.', findings: ['Taxa de Emprego: +30%', 'Tempo de Viagem: -50 min'], recommendations: 'Priorizar teleféricos em áreas de alta densidade e morros.', nextSteps: 'Integração de serviços públicos nos terminais.', references: ['Urban Lab SP'], truthScore: 95.3, sources: [{label: 'Urban Lab', url: 'https://www.prefeitura.sp.gov.br'}] },

  // SAÚDE (6 items)
  {
    id: 'H.1',
    cat: 'health',
    title: 'Genômica Popular',
    desc: 'DNA por R$ 100.',
    summary: 'Mapeamento genético integrado ao check-up básico para prevenção personalizada.',
    methodology: 'Custos de sequenciamento e impacto em diagnósticos precoces.',
    analysis: 'Em 2026, seu tratamento é baseado no seu DNA. O SUS economizou bilhões focando na prevenção de doenças que ainda não se manifestaram.',
    findings: ['Custo de Sequenciamento: <$20', 'Diagnóstico Precoce: +45%'],
    recommendations: 'Integrar dados genéticos anonimizados ao prontuário eletrônico nacional.',
    nextSteps: 'Plano nacional de genômica no SUS.',
    references: ['Min. Saúde: Genômica 2026', 'Illumina'],
    sources: [
      { label: 'Ministério da Saúde', url: 'https://www.gov.br/saude' },
      { label: 'Illumina Genomic', url: 'https://www.illumina.com' }
    ],
    truthScore: 97.9
  },
  { id: 'H.2', cat: 'health', title: 'Bio-hacking Corporativo', desc: 'Otimizando o foco dos líderes.', summary: 'Lideranças usam nootrópicos e luz infravermelha como KPI de performance.', methodology: 'Performance cognitiva assistida por wearables.', analysis: 'O sono e o foco são medidos em tempo real na Faria Lima. CEOs delegam decisões difíceis baseados em sua variabilidade cardíaca.', findings: ['Output Cognitivo: +25%', 'Burnout: -20%'], recommendations: 'Implementar programas de bio-hacking assistido em times de alta pressão.', nextSteps: 'Instalar pods de recuperação nos escritórios.', references: ['Whoop Performance Data 2026'], truthScore: 94.1, sources: [{label: 'Whoop Business', url: 'https://www.whoop.com'}] },
  { id: 'H.3', cat: 'health', title: 'Saúde Mental Sintética', desc: 'IA como primeira linha terapêutica.', summary: 'Bots empáticos realizando triagem e suporte 24/7 com alta resolutividade.', methodology: 'Taxas de engajamento e redução de sintomas em IAs de suporte.', analysis: 'Falar com um bot que não julga e tem memória perfeita é a porta de entrada para a terapia em 2026. A IA resolve 80% das crises de ansiedade leve.', findings: ['Engajamento: 10x maior que humano', 'Redução de Sintomas: 35%'], recommendations: 'Adotar triagem via IA para reduzir filas de espera.', nextSteps: 'Certificação de "AI Therapist" pela ANS.', references: ['WHO: Mental Health AI'], truthScore: 92.4, sources: [{label: 'WHO Health', url: 'https://www.who.int'}] },
  { id: 'H.4', cat: 'health', title: 'Telecirurgia 5G', desc: 'Médicos de SP operando em Manaus.', summary: 'Baixa latência permitindo que especialistas operem à distância via robótica.', methodology: 'Sucesso em procedimentos robóticos remotos.', analysis: 'O robô replica os movimentos do médico com precisão de mícron. A telecirurgia resolveu a falta de especialistas no interior do Amazonas.', findings: ['Taxa de Complicação: <0.5%', 'Acesso a Especialistas: +400%'], recommendations: 'Instalar centros robóticos em cidades polo do interior.', nextSteps: 'Homologação de redes 5G privadas para hospitais.', references: ['Hospital Albert Einstein: Telemedicina 2026'], truthScore: 96.8, sources: [{label: 'Albert Einstein', url: 'https://www.einstein.br'}] },
  { id: 'H.5', cat: 'health', title: 'Próteses Neurais (BCI)', desc: 'Controlando o mundo com o pensamento.', summary: 'Interfaces cérebro-máquina recuperando movimentos de pacientes com paralisia.', methodology: 'Precisão de controle neural e tempo de adaptação.', analysis: 'O pensamento vira ação. Pacientes digitam e controlam braços robóticos apenas pensando, com calibração via IA em 10 minutos.', findings: ['Precisão Neural: 98%', 'Tempo de Adaptação: 10 min'], recommendations: 'Fomentar P&D local em neurotecnologia não-invasiva.', nextSteps: 'Lançar kit de desenvolvimento para apps neurais.', references: ['Neuralink: Public Progress Report'], truthScore: 95.2, sources: [{label: 'Neuralink', url: 'https://neuralink.com'}] },
  { id: 'H.6', cat: 'health', title: 'Bio-impressão de Órgãos', desc: 'Fim das filas de transplante.', summary: 'Tecido renal e hepático impresso em 3D com células do próprio paciente.', methodology: 'Viabilidade de tecidos impressos em laboratório.', analysis: 'Pequenos patches de tecido impresso já reparam corações enfartados. O Brasil é o hub de turismo de saúde regenerativa pela alta expertise.', findings: ['Taxa de Rejeição: 0%', 'Crescimento de Mercado: +150%'], recommendations: 'Investir em bio-bancos de células tronco.', nextSteps: 'Primeiros testes em humanos para rins impressos.', references: ['Nature Biotechnology 2026'], truthScore: 97.1, sources: [{label: 'Nature Biotech', url: 'https://www.nature.com/nbt/'}] },

  // EDUCAÇÃO (6 items)
  {
    id: 'ED.1',
    cat: 'edu',
    title: 'Metaverso Educacional',
    desc: 'Laboratórios VR de baixo custo.',
    summary: 'A substituição de laboratórios físicos caros por ambientes virtuais de alta fidelidade.',
    methodology: 'Retenção de conteúdo em alunos usando VR vs método tradicional.',
    analysis: 'O aluno não lê sobre o sistema solar; ele viaja entre os planetas. Experimentos químicos perigosos são feitos sem riscos, aumentando a exploração sem medo.',
    findings: ['Retenção de Conteúdo: +90%', 'Engajamento: 100%'],
    recommendations: 'Distribuir headsets de baixo custo para escolas públicas.',
    nextSteps: 'Criação de currículo nacional em Realidade Virtual.',
    references: ['UNESCO: Education 2026', 'Meta Edu'],
    sources: [
      { label: 'UNESCO Data', url: 'https://www.unesco.org' },
      { label: 'Meta Quest Edu', url: 'https://www.meta.com/quest/education/' }
    ],
    truthScore: 93.8
  },
  { id: 'ED.2', cat: 'edu', title: 'Micro-degrees e Badges', desc: 'Fim do diploma de 4 anos.', summary: 'O mercado valorizando competências granulares validadas em blockchain.', methodology: 'Critérios de contratação em empresas tech.', analysis: 'O diploma é um Lego. Estudantes acumulam certificados de diferentes instituições ao longo da vida, validados por smart contracts.', findings: ['Velocidade de Contratação: +40%', 'Alinhamento de Skill: 95%'], recommendations: 'Criar programas de certificação rápida em skills críticas.', nextSteps: 'Integração de badges com recrutadoras.', references: ['LinkedIn Learning 2026'], truthScore: 95.7, sources: [{label: 'LinkedIn Edu', url: 'https://learning.linkedin.com'}] },
  { id: 'ED.3', cat: 'edu', title: 'Tutor de IA Privado', desc: 'Um professor para cada aluno.', summary: 'Personalização radical do ritmo de ensino conforme o perfil do estudante.', methodology: 'Evolução em matemática assistida por IA.', analysis: 'Se o aluno ama futebol, a IA explica álgebra usando estatísticas de gols. Ninguém mais fica para trás na sala de aula.', findings: ['Proficiência em Exatas: +35%', 'Velocidade de Aprendizado: 2x'], recommendations: 'Implementar IAs de acompanhamento pedagógico individual.', nextSteps: 'Datasets pedagógicos regionais.', references: ['Khan Academy BR 2026'], truthScore: 96.9, sources: [{label: 'Khan Academy', url: 'https://www.khanacademy.org'}] },
  { id: 'ED.4', cat: 'edu', title: 'Soft Skills Analytics', desc: 'Medindo empatia e liderança.', summary: 'O currículo socioemocional agora é quantificado para o mercado de trabalho.', methodology: 'Análise de colaboração em ferramentas digitais.', analysis: 'Através da interação em projetos, a IA identifica líderes naturais e mediadores, gerando um score de inteligência emocional para o currículo.', findings: ['Performance de Time: +30%', 'Turnover: -25%'], recommendations: 'Usar dados para formar times diversos nas escolas.', nextSteps: 'Certificação de QE validada.', references: ['Harvard Business Review 2026'], truthScore: 92.1, sources: [{label: 'HBR Business', url: 'https://hbr.org'}] },
  { id: 'ED.5', cat: 'edu', title: 'DAOs de Educação', desc: 'Escolas onde alunos são sócios.', summary: 'Comunidades de aprendizado descentralizadas onde o lucro volta para os membros.', methodology: 'Sustentabilidade de modelos de Income Share Agreement.', analysis: 'Você não paga mensalidade; você compra um token de governança. Ao ter sucesso no mercado, parte da sua renda financia novos alunos.', findings: ['Inadimplência: <5%', 'Lealdade de Comunidade: Altíssima'], recommendations: 'Explorar modelos de ISA via Web3.', nextSteps: 'Regulação de DAOs educacionais.', references: ['Web3 Edu Found.'], truthScore: 94.4, sources: [{label: 'Web3 Edu', url: 'https://w3e.xyz'}] },
  { id: 'ED.6', cat: 'edu', title: 'Neuro-Educação Ativa', desc: 'Aprendizado em estado de Flow.', summary: 'Uso de luz e som para otimizar a plasticidade neural durante o estudo.', methodology: 'Análise de EEG durante sessões de estudo controlado.', analysis: 'As salas usam luz azul para foco e frequências binaurais para induzir ondas Alfa, triplicando a velocidade de absorção de informações.', findings: ['Tempo de Foco: +45%', 'Ciclo de Aprendizado: -50%'], recommendations: 'Adaptar design de escolas para princípios neurocientíficos.', nextSteps: 'Lançar playlists de foco baseadas em neuro-feedback.', references: ['Stanford: Neuro-learning 2026'], truthScore: 93.3, sources: [{label: 'Stanford Bio', url: 'https://stanford.edu'}] },

  // CULTURA (6 items)
  {
    id: 'CU.1',
    cat: 'culture',
    title: 'Economia do Play-to-Earn',
    desc: 'Games como fonte de renda.',
    summary: 'A profissionalização do lazer: milhões de brasileiros vivendo de mundos virtuais.',
    methodology: 'Renda média de jogadores profissionais de ativos digitais.',
    analysis: 'Em 2026, jogar é um emprego sério. Milhões sustentam famílias minerando recursos raros em metaversos ou gerenciando propriedades digitais. A economia é real: o ouro do jogo vira Drex instantaneamente.',
    findings: ['Renda Média Mensal: R$ 3.500', 'Jogadores Ativos: 4M'],
    recommendations: 'Formalizar a proteção social para trabalhadores de ativos digitais.',
    nextSteps: 'Lançar fundos de investimento em guildas de jogos.',
    references: ['Roblox Corp Annual Report', 'Axie Infinity v3'],
    sources: [
      { label: 'Roblox Investor', url: 'https://ir.roblox.com' },
      { label: 'Axie Substack', url: 'https://substack.com/@axie' }
    ],
    truthScore: 95.1
  },
  { id: 'CU.2', cat: 'culture', title: 'Música Generativa BR', desc: 'Funk e Samba co-criados.', summary: 'IAs como membros da banda gerando sonoridades impossíveis para humanos.', methodology: 'Análise de lançamentos no Spotify BR.', analysis: 'O hit do carnaval em 2026 foi composto por humano e refinado por IA que analisou 50 anos de sucessos. Artistas vendem seus "timbres neurais" para fãs.', findings: ['Hits com IA: 25%', 'Receita de Royalties: +15%'], recommendations: 'Registrar timbres como propriedade intelectual digital.', nextSteps: 'Lançar primeira gravadora 100% generativa.', references: ['ECAD Digital Report 2026'], truthScore: 92.6, sources: [{label: 'ECAD News', url: 'https://www3.ecad.org.br'}] },
  { id: 'CU.3', cat: 'culture', title: 'Museus Híbridos', desc: 'Patrimônio que fala.', summary: 'A realidade aumentada transformando monumentos em experiências interativas infinitas.', methodology: 'Tempo de permanência em exposições AR vs tradicionais.', analysis: 'Entrar num museu é ver a história ganhar vida em 3D. O visitante completa missões históricas e ganha NFTs comemorativos.', findings: ['Visitação: +300%', 'Engajamento Jovem: +200%'], recommendations: 'Digitalizar acervos em volumetria 3D imediatamente.', nextSteps: 'Lançar metaverso dos museus brasileiros.', references: ['IPHAN: Digitalização 2026'], truthScore: 96.3, sources: [{label: 'IPHAN Brasil', url: 'https://www.gov.br/iphan'}] },
  { id: 'CU.4', cat: 'culture', title: 'Cinema em Tempo Real', desc: 'Filmes onde você é o diretor.', summary: 'Narrativas ramificadas por IA que ajustam o final conforme sua reação emocional.', methodology: 'Engajamento em plataformas de streaming interativo.', analysis: 'O filme não é mais linear. Se a IA detecta que você está triste, a história torna-se mais esperançosa em tempo real.', findings: ['Re-watch Rate: +400%', 'Engajamento: 5x maior'], recommendations: 'Investir em motores de renderização em tempo real (Unreal Engine).', nextSteps: 'Parceria com estúdios de games para narrativas híbridas.', references: ['Netflix: Interactive Strategy'], truthScore: 94.2, sources: [{label: 'Netflix Tech', url: 'https://research.netflix.com'}] },
  { id: 'CU.5', cat: 'culture', title: 'Gastronomia Sintética', desc: 'Carne cultivada na alta cozinha.', summary: 'Chefs brasileiros usando bio-impressoras para criar texturas e sabores inexistentes.', methodology: 'Aceitação de proteínas alternativas em restaurantes de luxo.', analysis: 'O prato assinado pode ser impresso com células de Wagyu sem abate. O luxo agora é definido pela precisão molecular e sustentabilidade.', findings: ['Aceitação de Mercado: 30%', 'Sustentabilidade: 10/10'], recommendations: 'Adotar proteínas cultivadas como diferencial de menu.', nextSteps: 'Certificação de segurança para alimentos sintéticos.', references: ['JBS Biotech Report 2026'], truthScore: 95.8, sources: [{label: 'JBS News', url: 'https://jbs.com.br'}] },
  { id: 'CU.6', cat: 'culture', title: 'Estádios Digitais', desc: '1 milhão no Allianz Parque.', summary: 'O estádio físico como servidor para uma multidão global no metaverso.', methodology: 'Receita de ingressos digitais vs físicos.', analysis: 'A torcida em casa usa óculos de AR para sentir o clima da arquibancada. A receita digital superou a bilheteria física pela primeira vez.', findings: ['Receita Digital: +50%', 'Alcance Global: 20x'], recommendations: 'Instalar câmeras 360 e volumétricas nos gramados.', nextSteps: 'Venda de passes de metaverso para a temporada.', references: ['FIFA: Metaverse Strategy 2026'], truthScore: 94.9, sources: [{label: 'FIFA Tech', url: 'https://www.fifa.com'}] },

  // EXPERIMENTAL (6 items)
  {
    id: 'X.1',
    cat: 'exp',
    title: 'Computação Quântica SP',
    desc: 'O primeiro nó quântico comercial.',
    summary: 'A quebra da criptografia clássica e a otimização de logística em milissegundos.',
    methodology: 'Performance de algoritmos em hardware quântico real.',
    analysis: 'O nó quântico de SP resolve problemas de rotas de entrega que levariam anos em computadores normais. A segurança digital migrou para protocolos pós-quânticos.',
    findings: ['Aceleração de Cálculo: 1M de vezes', 'Ganhos de Otimização: 15%'],
    recommendations: 'Empresas devem migrar sua segurança para chaves quânticas.',
    nextSteps: 'Treinamento de desenvolvedores em Python Quântico.',
    references: ['IBM Quantum Network', 'USP Physics'],
    sources: [
      { label: 'IBM Quantum', url: 'https://www.ibm.com/quantum' },
      { label: 'USP Física', url: 'https://portal.if.usp.br' }
    ],
    truthScore: 96.1
  },
  { id: 'X.2', cat: 'exp', title: 'Mineração de Asteroides', desc: 'Brasil em órbita baixa.', summary: 'Exploração espacial privada de recursos raros a partir de Alcântara.', methodology: 'Viabilidade econômica de missões de prospecção robótica.', analysis: 'O Brasil participa de consórcios para processar minerais em órbita. Alcântara tornou-se o porto logístico para a economia espacial.', findings: ['Custo de Lançamento: -60%', 'Uso de Alcântara: +500%'], recommendations: 'Fomentar startups de propulsão e logística espacial.', nextSteps: 'Leilão de slots de lançamento.', references: ['AEB: Espaço 2026', 'SpaceX'], truthScore: 88.5, sources: [{label: 'AEB Brasil', url: 'https://www.gov.br/aeb'}] },
  { id: 'X.3', cat: 'exp', title: 'Bio-Sintética Oceanográfica', desc: 'Bactérias limpando plásticos.', summary: 'Organismos modificados que digerem microplásticos de forma segura e inerte.', methodology: 'Resultados de testes em zonas oceânicas controladas.', analysis: 'Bactérias liberadas em zonas de lixo consomem o polímero e morrem após 30 dias via interruptor biológico programado.', findings: ['Redução de Plástico: 20%', 'Segurança Biológica: 100%'], recommendations: 'Apoiar startups de biotecnologia marinha.', nextSteps: 'Limpeza da foz do Rio Amazonas.', references: ['Oceanix Pilot 2026'], truthScore: 91.8, sources: [{label: 'Oceanix Hub', url: 'https://oceanixcity.com'}] },
  { id: 'X.4', cat: 'exp', title: 'Fusão Nuclear Piloto', desc: 'Energia infinita em Campinas.', summary: 'O Tokamak brasileiro mantendo o plasma estável e gerando energia líquida positiva.', methodology: 'Dados de contenção de plasma e balanço energético Q > 1.', analysis: 'O sol dentro do laboratório. Energia limpa, sem resíduos e quase gratuita no horizonte para a indústria nacional.', findings: ['Ganho de Energia (Q): 1.2', 'Estabilidade: 10 min'], recommendations: 'Manter financiamento estatal de longo prazo em fusão.', nextSteps: 'Construção da usina de 100MW.', references: ['ITER Progress 2026', 'CNPEM'], truthScore: 89.2, sources: [{label: 'ITER News', url: 'https://www.iter.org'}] },
  { id: 'X.5', cat: 'exp', title: 'Cidades Flutuantes', desc: 'Urbanismo resiliente no RJ.', summary: 'Bairros modulares que se adaptam à subida do mar de forma autossuficiente.', methodology: 'Engenharia naval e sustentabilidade habitacional.', analysis: 'No Rio, o mar sobe e a cidade flutua. Módulos autossuficientes em energia e água dessalinizada oferecem habitação resiliente.', findings: ['Resiliência de Maré: 100%', 'Autonomia Energética: 100%'], recommendations: 'Criar zonas econômicas especiais para habitação oceânica.', nextSteps: 'Inauguração do condomínio Marina 1.', references: ['UFRJ Engenharia Naval'], truthScore: 92.5, sources: [{label: 'UFRJ Hub', url: 'https://ufrj.br'}] },
  { id: 'X.6', cat: 'exp', title: 'Bio-Computação', desc: 'Processadores de tecido cerebral.', summary: 'O uso de organoides cerebrais para tarefas de IA ultra-eficientes energeticamente.', methodology: 'Eficiência energética vs GPUs tradicionais.', analysis: 'O silício encontrou seu rival. Chips biológicos aprendem 1.000x mais rápido consumindo apenas 20W, como um cérebro humano.', findings: ['Eficiência Energética: 1M vezes melhor', 'Velocidade de Treino: +500%'], recommendations: 'Estabelecer comitê de ética rigoroso para bio-computação.', nextSteps: 'Primeiro processador híbrido silício-biológico.', references: ['Nature: Bio-computing 2026', 'FinalSpark'], truthScore: 87.1, sources: [{label: 'FinalSpark', url: 'https://finalspark.com'}] }
];
