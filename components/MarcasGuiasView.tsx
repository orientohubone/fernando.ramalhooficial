import React, { useEffect, useState } from 'react';
import { Language, TRANSLATIONS } from '../constants';
import BrandLogo from './BrandLogo';
import { supabase } from '../lib/supabase';
import { Upload, FileCheck, X, Image, File, CheckCircle, AlertCircle, Info, FileText, QrCode, Receipt, CreditCard } from 'lucide-react';

interface MarcasGuiasViewProps {
  lang: Language;
  onClose: () => void;
}

const MarcasGuiasView: React.FC<MarcasGuiasViewProps> = ({ lang, onClose }) => {
  const t = TRANSLATIONS[lang].about;
  const nav = TRANSLATIONS[lang].nav;
  
  const [formData, setFormData] = useState({
    nomeCliente: '',
    email: '',
    telefone: '',
    tipoPessoa: 'fisica',
    nomeMarca: '',
    classe: '',
    servico: '',
    cpf: '',
    rg: '',
    cnpj: '',
    nomeAdministrador: '',
    rgAdministrador: '',
    cpfAdministrador: '',
    logoFile: null as File | null,
    aceitaTermos: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedService, setSelectedService] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'classe') {
      setSelectedClass(value);
    }
    if (field === 'servico') {
      setSelectedService(value);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'application/illustrator', 'application/postscript'];
      
      if (allowedTypes.includes(file.type) || file.name.match(/\.(png|jpg|jpeg|svg|ai|eps)$/i)) {
        handleInputChange('logoFile', file);
      } else {
        setSubmitMessage(lang === 'PT' 
          ? 'Formato de arquivo não suportado. Use PNG, JPG, SVG, AI ou EPS.' 
          : 'Unsupported file format. Use PNG, JPG, SVG, AI or EPS.');
      }
    }
  };

  const getClassDescription = (classCode: string, language: Language) => {
    const descriptions: Record<string, { pt: string; en: string }> = {
      '01': {
        pt: 'Substâncias químicas destinadas à indústria, às ciências, à fotografia, assim como à agricultura, à horticultura e à silvicultura; resinas artificiais não-processadas, matérias plásticas não processadas; adubo; composições extintoras de fogo; preparações para temperar e soldar; substâncias químicas destinadas a conservar alimentos; substâncias tanantes; substâncias adesivas destinados à indústria.',
        en: 'Chemical products for industrial, scientific and photographic use, as well as for agriculture, horticulture and forestry; unprocessed artificial resins, unprocessed plastics; manures; fire extinguishing compositions; tempering and soldering preparations; chemical substances for preserving foodstuffs; tanning substances; adhesive substances for industry.'
      },
      '02': {
        pt: 'Tintas, vernizes, lacas; preservativos contra oxidação e contra deterioração da madeira; matérias tintoriais; mordentes; resinas naturais em estado bruto; metais em folhas e em pó para pintores, decoradores, impressores e artistas.',
        en: 'Paints, varnishes, lacquers; preservatives against rust and against deterioration of wood; colorants; mordants; raw natural resins; metals in foil and powder form for painters, decorators, printers and artists.'
      },
      '03': {
        pt: 'Preparações para branquear e outras substâncias para uso em lavanderia; produtos para limpar, polir e decapar; produtos abrasivos; sabões; perfumaria, óleos essenciais, cosméticos, loções para os cabelos; dentifrícios.',
        en: 'Bleaching preparations and other substances for laundry use; cleaning, polishing, scouring and abrasive preparations; soaps; perfumery, essential oils, cosmetics, hair lotions; dentifrices.'
      },
      '04': {
        pt: 'Graxas e óleos industriais; lubrificantes; produtos para absorver, molhar e ligar pó; combustíveis (incluindo gasolina para motores) e materiais para iluminação; velas e pavios para iluminação.',
        en: 'Industrial oils and greases; lubricants; dust absorbing, wetting and binding compositions; fuels and illuminants; candles and wicks for lighting.'
      },
      '05': {
        pt: 'Preparações farmacêuticas e veterinárias; preparações higiênicas para uso medicinal; substâncias dietéticas adaptadas para uso medicinal, alimentos para bebês; emplastros, materiais para curativos; material para obturações dentárias, cera dentária; desinfetantes; preparações para destruição de vermes; fungicidas, herbicidas.',
        en: 'Pharmaceutical and veterinary preparations; sanitary preparations for medical use; dietetic substances adapted for medical use, food for babies; plasters, materials for dressings; material for tooth fillings, dental wax; disinfectants; preparations for destroying vermin; fungicides, herbicides.'
      },
      '06': {
        pt: 'Metais comuns e suas ligas; materiais de metal para construção; construções transportáveis de metal; materiais de metal para vias férreas; cabos e fios de metal comum não elétricos; serralharia, pequenos artigos de ferragem; canos e tubos de metal; cofres; produtos de metal comum não incluídos em outras classes; minérios.',
        en: 'Common metals and their alloys; metal building materials; transportable buildings of metal; metal materials for railway tracks; non-electric cables and wires of common metal; ironmongery, small items of metal hardware; pipes and tubes of metal; safes; goods of common metal not included in other classes; ores.'
      },
      '07': {
        pt: 'Máquinas e ferramentas mecânicas; motores (exceto para veículos terrestres); e engates de máquinas e componentes de transmissão (exceto para veículos terrestres); instrumentos agrícolas não manuais; chocadeiras.',
        en: 'Machines and machine tools; motors and engines (except for land vehicles); machine coupling and transmission components (except for land vehicles); agricultural implements other than hand-operated; incubators for eggs.'
      },
      '08': {
        pt: 'Ferramentas e instrumentos manuais (propulsão muscular); cutelaria; armas brancas; aparelhos de barbear.',
        en: 'Hand tools and implements (hand-operated); cutlery; side arms; razors.'
      },
      '09': {
        pt: 'Aparelhos e instrumentos científicos, náuticos, geodésicos, fotográficos, cinematográficos, ópticos, de pesagem, de medição, de sinalização, de controle (inspeção), de salvamento e de ensino; aparelhos e instrumentos para conduzir, interromper, transformar, acumular, regular ou controlar eletricidade; aparelhos para registrar, transmitir ou reproduzir som ou imagens; suporte de registro magnético, discos acústicos; máquinas distribuidoras automáticas e mecanismos para aparelhos operados com moedas; caixas registradoras, máquinas de calcular, equipamento de processamento de dados e computadores; aparelhos extintores de incêndio.',
        en: 'Scientific, nautical, surveying, photographic, cinematographic, optical, weighing, measuring, signalling, checking (supervision), life-saving and teaching apparatus and instruments; apparatus and instruments for conducting, switching, transforming, accumulating, regulating or controlling electricity; apparatus for recording, transmission or reproduction of sound or images; magnetic data carriers, recording discs; automatic vending machines and mechanisms for coin-operated apparatus; cash registers, calculating machines, data processing equipment and computers; fire-extinguishing apparatus.'
      },
      '10': {
        pt: 'Aparelhos e instrumentos cirúrgicos, médicos, odontológicos e veterinários, membros, olhos e dentes artificiais; artigos ortopédicos; material de sutura.',
        en: 'Surgical, medical, dental and veterinary apparatus and instruments, artificial limbs, eyes and teeth; orthopaedic articles; suture materials.'
      },
      '11': {
        pt: 'Aparelhos para iluminação, aquecimento, produção de vapor, cozinhar, refrigeração, secagem, ventilação, fornecimento de água e para fins sanitários.',
        en: 'Apparatus for lighting, heating, steam generating, cooking, refrigerating, drying, ventilating, water supply and sanitary purposes.'
      },
      '12': {
        pt: 'Veículos; aparelhos para locomoção por terra, ar ou água.',
        en: 'Vehicles; apparatus for locomotion by land, air or water.'
      },
      '13': {
        pt: 'Armas de fogo; munições e projéteis; explosivos; fogos de artifício.',
        en: 'Firearms; ammunition and projectiles; explosives; fireworks.'
      },
      '14': {
        pt: 'Metais preciosos e suas ligas e produtos nessas matérias ou folheados, não incluídos em outras classes; jóias, bijuteria, pedras preciosas; relojoaria e instrumentos cronométricos.',
        en: 'Precious metals and their alloys and goods in precious metals or coated therewith, not included in other classes; jewellery, precious stones; horological and chronometric instruments.'
      },
      '15': {
        pt: 'Instrumentos musicais.',
        en: 'Musical instruments.'
      },
      '16': {
        pt: 'Papel, papelão e produtos feitos desses materiais e não incluídos em outras classes; material impresso; artigos para encadernação; fotografias; papelaria; adesivos para papelaria ou uso doméstico; materiais para artistas; pincéis; máquinas de escrever e material de escritório (exceto móveis); material de instrução e didático (exceto aparelhos); matérias plásticas para embalagem (não incluídas em outras classes); caracteres de imprensa; clichês.',
        en: 'Paper, cardboard and goods made from these materials, not included in other classes; printed matter; bookbinding material; photographs; stationery; adhesives for stationery or household purposes; artists\' materials; paint brushes; typewriters and office requisites (except furniture); instructional and teaching material (except apparatus); plastic materials for packaging (not included in other classes); printers\' type; printing blocks.'
      },
      '17': {
        pt: 'Borracha, guta-percha, goma, amianto, mica e produtos feitos com estes materiais e não incluídos em outras classes; produtos em matérias plásticas semiprocessadas; materiais para calafetar, vedar e isolar; canos flexíveis, não metálicos.',
        en: 'Rubber, gutta-percha, gum, asbestos, mica and goods made from these materials and not included in other classes; plastics in extruded form for use in manufacture; packing, stopping and insulating materials; flexible pipes, not of metal.'
      },
      '18': {
        pt: 'Couro e imitações de couros, produtos nessas matérias não incluídos em outras classes; peles de animais; malas e bolsas de viagem; guarda-chuvas, guarda-sóis e bengalas; chicotes, arreios e selaria.',
        en: 'Leather and imitations of leather, and goods made of these materials and not included in other classes; animal skins, hides; trunks and travelling bags; umbrellas, parasols and walking sticks; whips, harness and saddlery.'
      },
      '19': {
        pt: 'Materiais de construção (não metálicos); canos rígidos não metálicos para construção; asfalto, piche e betume; construções transportáveis não metálicas; monumentos não metálicos.',
        en: 'Building materials (non-metallic); non-metallic rigid pipes for building; asphalt, pitch and bitumen; transportable buildings, not of metal; monuments, not of metal.'
      },
      '20': {
        pt: 'Móveis, espelhos, molduras; produtos (não incluídos em outras classes), de madeira, cortiça, junco, cana, vime, chifre, marfim, osso, barbatana de baleia, concha, tartaruga, âmbar, madrepérola, espuma-do-mar e sucedâneos de todas estas matérias ou de matérias plásticas.',
        en: 'Furniture, mirrors, picture frames; goods (not included in other classes) of wood, cork, reed, cane, wicker, horn, bone, ivory, whalebone, shell, amber, mother-of-pearl, meerschaum and substitutes for all these materials, or of plastics.'
      },
      '21': {
        pt: 'Utensílios e recipientes para a casa ou cozinha (não de metal precioso ou folheado); pentes e esponjas; escovas (exceto para pintura); materiais para fabricação de escovas; materiais de limpeza; palha de aço; vidro não trabalhado ou semitrabalhado (exceto para construção); artigos de vidro, porcelana e louça de faiança não incluídos em outras classes.',
        en: 'Household or kitchen utensils and containers (not of precious metal or coated therewith); combs and sponges; brushes (except paint brushes); brush-making materials; articles for cleaning purposes; steelwool; unworked or semi-worked glass (except glass used in building); glassware, porcelain and earthenware not included in other classes.'
      },
      '22': {
        pt: 'Cordas, fios, redes, tendas, toldos, oleados, velas, sacos, sacolas (não incluídos em outras classes); matérias de enchimento (exceto borrachas e plásticos); matérias têxteis fibrosas em bruto.',
        en: 'Ropes, strings, nets, tents, awnings, tarpaulins, sails, sacks and bags (not included in other classes); padding and stuffing materials (except rubber or plastics); raw fibrous textile materials.'
      },
      '23': {
        pt: 'Fios para uso têxtil.',
        en: 'Yarns and threads, for textile use.'
      },
      '24': {
        pt: 'Tecidos e produtos têxteis, não incluídos em outras classes; coberturas de cama e mesa.',
        en: 'Textiles and textile goods, not included in other classes; bed and table coverings.'
      },
      '25': {
        pt: 'Vestuário, calçados e chapelaria.',
        en: 'Clothing, footwear, headgear.'
      },
      '26': {
        pt: 'Rendas e bordados, fitas e laços; botões, colchetes e ilhós, alfinetes e agulhas; flores artificiais.',
        en: 'Lace and embroidery, ribbons and braid; buttons, hooks and eyes, pins and needles; artificial flowers.'
      },
      '27': {
        pt: 'Carpetes, tapetes, capachos e esteiras, linóleo e outros revestimentos de assoalhos; colgaduras que não sejam em matérias têxteis.',
        en: 'Carpets, rugs, mats and matting, linoleum and other materials for covering existing floors; wall hangings (non-textile).'
      },
      '28': {
        pt: 'Jogos e brinquedos; artigos para ginástica e esporte não incluídos em outras classes; decorações para árvores de Natal.',
        en: 'Games and playthings; gymnastic and sporting articles not included in other classes; decorations for Christmas trees.'
      },
      '29': {
        pt: 'Carne, peixe, aves e caça; extratos de carne; frutas, legumes e verduras em conserva, secos e cozidos; geléias, doces e compotas; ovos, leite e laticínio; óleos e gorduras comestíveis.',
        en: 'Meat, fish, poultry and game; meat extracts; preserved, dried and cooked fruits and vegetables; jellies, jams, compotes; eggs, milk and milk products; edible oils and fats.'
      },
      '30': {
        pt: 'Café, chá, cacau, açúcar, arroz, tapioca, sagu, sucedâneos de café; farinhas e preparações feitas de cereais, pão, massas e confeitos, sorvetes; mel, xarope de melaço; lêvedo, fermento em pó; sal, mostarda; vinagre, molhos (condimentos); especiarias; gelo.',
        en: 'Coffee, tea, cocoa, sugar, rice, tapioca, sago, coffee substitutes; flour and preparations made from cereals, bread, pastry and confectionery, ices; honey, treacle; yeast, baking-powder; salt, mustard; vinegar, sauces (condiments); spices; ice.'
      },
      '31': {
        pt: 'Produtos agrícolas, hortícolas, florestais e grãos não incluídos em outras classes; animais vivos; frutas, legumes e verduras frescos; sementes, plantas e flores naturais; alimentos para animais, malte.',
        en: 'Agricultural, horticultural and forestry products and grains not included in other classes; live animals; fresh fruits and vegetables; seeds, natural plants and flowers; foodstuffs for animals, malt.'
      },
      '32': {
        pt: 'Cervejas; águas minerais e gasosas e outras bebidas não alcoólicas; bebidas de frutas e sucos de fruta; xaropes e outras preparações para fabricar bebidas.',
        en: 'Beers; mineral and aerated waters and other non-alcoholic drinks; fruit drinks and fruit juices; syrups and other preparations for making beverages.'
      },
      '33': {
        pt: 'Bebidas alcoólicas (exceto cervejas).',
        en: 'Alcoholic beverages (except beers).'
      },
      '34': {
        pt: 'Tabaco; artigos para fumantes; fósforos.',
        en: 'Tobacco; smokers\' articles; matches.'
      },
      '35': {
        pt: 'Propaganda; gestão de negócios; administração de negócios; funções de escritório.',
        en: 'Advertising; business management; business administration; office functions.'
      },
      '36': {
        pt: 'Seguros; negócios financeiros; negócios monetários; negócios imobiliários.',
        en: 'Insurance; financial affairs; monetary affairs; real estate affairs.'
      },
      '37': {
        pt: 'Construção civil; reparos; serviços de instalação.',
        en: 'Building construction; repair; installation services.'
      },
      '38': {
        pt: 'Telecomunicações.',
        en: 'Telecommunications.'
      },
      '39': {
        pt: 'Transporte; embalagem e armazenagem de produtos; organização de viagens.',
        en: 'Transport; packaging and storage of goods; travel arrangement.'
      },
      '40': {
        pt: 'Tratamento de materiais.',
        en: 'Treatment of materials.'
      },
      '41': {
        pt: 'Educação, provimento de treinamento; entretenimento; atividades desportivas e culturais.',
        en: 'Education; providing of training; entertainment; sporting and cultural activities.'
      },
      '42': {
        pt: 'Serviços científicos e tecnológicos, pesquisa e desenho relacionados a estes; serviços de análise industrial e pesquisa; concepção, projeto e desenvolvimento de hardware e software de computador.',
        en: 'Scientific and technological services and related research and design; industrial analysis and research services; design and development of computer hardware and software.'
      },
      '43': {
        pt: 'Serviços de fornecimento de comida e bebida; acomodações temporárias.',
        en: 'Services for providing food and drink; temporary accommodation.'
      },
      '44': {
        pt: 'Serviços médicos; serviços veterinários; serviços de higiene e beleza para seres humanos ou animais; serviços de agricultura, de horticultura e de silvicultura.',
        en: 'Medical services; veterinary services; hygienic and beauty care for human beings or animals; agriculture, horticulture and forestry services.'
      },
      '45': {
        pt: 'Serviços jurídicos; serviços pessoais e sociais prestados por terceiros, para satisfazer necessidades de indivíduos; serviços de segurança para proteção de bens e pessoas.',
        en: 'Legal services; security services for the protection of property and individuals; personal and social services rendered by others to meet the needs of individuals.'
      }
    };

    const description = descriptions[classCode];
    return description ? (language === 'PT' ? description.pt : description.en) : '';
  };

  const getServiceDescription = (serviceCode: string, language: Language) => {
    const services: Record<string, { pt: string; en: string; price: string; discount?: string }> = {
      '389': {
        pt: 'Registro com especificação pré-aprovada\n\n**VANTAGENS:**\n• Processo rápido (2-3 meses)\n• Menor custo (R$ 880)\n• Menor chance de exigências\n• Aprovação simplificada\n\n**DESVANTAGENS:**\n• Requer especificação precisa\n• Menos flexibilidade na descrição\n• Exige conhecimento técnico\n\n**RECOMENDADO PARA:**\n• Empresas que conhecem bem sua classe\n• Marcas com produtos/serviços bem definidos\n• Quem busca rapidez e economia\n• Negócios tradicionais estabelecidos\n\n**COMO OBTER:**\n1. Consulte a Tabela de Classes do INPI\n2. Use termos padronizados\n3. Siga nomenclatura oficial\n4. Evite termos genéricos\n\n**IMPORTANTE SOBRE DESCONTOS:**\n• 50% para: MEI, ME, EPP, ICTs, entidades sem fins lucrativos\n• 100% para: Pessoas físicas hipossuficientes e PcD\n• Desconto não se aplica a todos os códigos\n• Cotitularidade: todos devem ter direito ao desconto',
        en: 'Pre-approved specification registration\n\n**ADVANTAGES:**\n• Fast process (2-3 months)\n• Lower cost (R$ 880)\n• Less chance of requirements\n• Simplified approval\n\n**DISADVANTAGES:**\n• Requires precise specification\n• Less flexibility in description\n• Demands technical knowledge\n\n**RECOMMENDED FOR:**\n• Companies that know their class well\n• Brands with well-defined products/services\n• Those seeking speed and economy\n• Traditional established businesses\n\n**HOW TO OBTAIN:**\n1. Consult INPI Class Table\n2. Use standardized terms\n3. Follow official nomenclature\n4. Avoid generic terms\n\n**IMPORTANT ABOUT DISCOUNTS:**\n• 50% for: Individual microentrepreneurs, micro/small businesses, ICTs, non-profits\n• 100% for: Low-income individuals and people with disabilities\n• Discount does not apply to all codes\n• Joint ownership: all must be eligible for discount',
        price: 'R$ 880,00',
        discount: 'R$ 440,00'
      },
      '394': {
        pt: 'Registro com livre preenchimento\n\n**VANTAGENS:**\n• Total flexibilidade na descrição\n• Ideal para negócios inovadores\n• Permite termos personalizados\n• Adequado para modelos complexos\n\n**DESVANTAGENS:**\n• Processo mais longo (6-12 meses)\n• Maior custo (R$ 1.720)\n• Maior chance de exigências\n• Análise mais rigorosa\n\n**RECOMENDADO PARA:**\n• Startups e negócios inovadores\n• Marcas com produtos/serviços únicos\n• Quem não se encaixa em categorias tradicionais\n• Empresas com modelos complexos\n• Quem precisa descrever conceitos novos\n\n**IDEAL PARA:**\n• Tecnologia e inovação\n• Conceitos disruptivos\n• Modelos de negócio originais\n\n**IMPORTANTE SOBRE DESCONTOS:**\n• 50% para: MEI, ME, EPP, ICTs, entidades sem fins lucrativos\n• 100% para: Pessoas físicas hipossuficientes e PcD\n• Desconto não se aplica a todos os códigos\n• Cotitularidade: todos devem ter direito ao desconto',
        en: 'Free specification registration\n\n**ADVANTAGES:**\n• Total flexibility in description\n• Ideal for innovative businesses\n• Allows customized terms\n• Suitable for complex models\n\n**DISADVANTAGES:**\n• Longer process (6-12 months)\n• Higher cost (R$ 1.720)\n• Higher chance of requirements\n• More rigorous analysis\n\n**RECOMMENDED FOR:**\n• Startups and innovative businesses\n• Brands with unique products/services\n• Those who dont fit traditional categories\n• Companies with complex models\n• Who need to describe new concepts\n\n**IDEAL FOR:**\n• Technology and innovation\n• Disruptive concepts\n• Original business models\n\n**IMPORTANT ABOUT DISCOUNTS:**\n• 50% for: Individual microentrepreneurs, micro/small businesses, ICTs, non-profits\n• 100% for: Low-income individuals and people with disabilities\n• Discount does not apply to all codes\n• Joint ownership: all must be eligible for discount',
        price: 'R$ 1.720,00',
        discount: 'R$ 860,00'
      },
      '3001': {
        pt: 'Divisão de processo',
        en: 'Process division',
        price: 'R$ 870,00'
      },
      '338': {
        pt: 'Cumprimento de exigência decorrente de exame formal em pedido de registro',
        en: 'Compliance with requirement from formal examination of registration request',
        price: 'R$ 180,00',
        discount: 'R$ 90,00'
      },
      '382': {
        pt: 'Cumprimento de exigência decorrente de exame de conformidade em petição',
        en: 'Compliance with requirement from conformity examination of petition',
        price: 'R$ 180,00',
        discount: 'R$ 90,00'
      },
      '381': {
        pt: 'Apresentação de documentos',
        en: 'Document presentation',
        price: 'R$ 100,00'
      },
      '332': {
        pt: 'Oposição - valor por classe',
        en: 'Opposition - per class',
        price: 'R$ 520,00',
        discount: 'R$ 260,00'
      },
      '3022': {
        pt: 'Oposição com restrição de alegações, limitadas à proteção de marca registrada de terceiro (art. 124, inciso XIX da LPI) por classe',
        en: 'Opposition with restricted allegations, limited to third-party registered trademark protection (art. 124, item XIX of LPI) per class',
        price: 'R$ 360,00',
        discount: 'R$ 180,00'
      },
      '3020': {
        pt: 'Trâmite prioritário de marcas por motivo estratégico ou de política pública',
        en: 'Priority processing of trademarks for strategic or public policy reasons',
        price: 'R$ 890,00',
        discount: 'R$ 445,00'
      },
      '3019': {
        pt: 'Trâmite prioritário de marcas com direito à gratuidade',
        en: 'Priority processing of trademarks with right to fee waiver',
        price: 'R$ 0,00'
      },
      '3021': {
        pt: 'Apresentação de documentos para comprovação de distintividade adquirida',
        en: 'Document presentation for proof of acquired distinctiveness',
        price: 'R$ 4.700,00'
      },
      '339': {
        pt: 'Manifestação',
        en: 'Manifestation',
        price: 'R$ 180,00',
        discount: 'R$ 90,00'
      },
      '340': {
        pt: 'Cumprimento de exigência',
        en: 'Compliance with requirement',
        price: 'R$ 180,00',
        discount: 'R$ 90,00'
      },
      '379': {
        pt: 'Aditamento à petição',
        en: 'Addition to petition',
        price: 'R$ 100,00'
      },
      '386': {
        pt: 'Reivindicação suplementar de prioridade',
        en: 'Supplementary priority claim',
        price: 'R$ 100,00'
      },
      '372': {
        pt: 'Primeiro decênio de vigência de registro de marca e expedição de certificado de registro - retribuição paga no prazo ordinário - valor por classe',
        en: 'First decade of trademark registration validity and certificate issuance - ordinary deadline payment - per class',
        price: 'R$ 0,00',
        discount: 'R$ 0,00'
      },
      '373': {
        pt: 'Primeiro decênio de vigência de registro de marca e expedição de certificado de registro - retribuição paga no prazo extraordinário - valor por classe',
        en: 'First decade of trademark registration validity and certificate issuance - extraordinary deadline payment - per class',
        price: 'R$ 0,00',
        discount: 'R$ 0,00'
      },
      '374': {
        pt: 'Prorrogação de registro de marca e expedição de certificado de registro - retribuição paga no prazo ordinário - valor por classe',
        en: 'Trademark registration renewal and certificate issuance - ordinary deadline payment - per class',
        price: 'R$ 1.000,00',
        discount: 'R$ 500,00'
      },
      '375': {
        pt: 'Prorrogação de registro de marca e expedição de certificado de registro - retribuição paga no prazo extraordinário - valor por classe',
        en: 'Trademark registration renewal and certificate issuance - extraordinary deadline payment - per class',
        price: 'R$ 2.000,00',
        discount: 'R$ 1.000,00'
      },
      '333': {
        pt: 'Recurso de marcas (exceto contra indeferimento de pedido de registro de marca) - Primeiro processo',
        en: 'Trademark appeal (except against registration request denial) - First process',
        price: 'R$ 700,00',
        discount: 'R$ 350,00'
      },
      '3000': {
        pt: 'Recurso contra indeferimento de pedido de registro de marca - valor por classe',
        en: 'Appeal against registration request denial - per class',
        price: 'R$ 700,00',
        discount: 'R$ 350,00'
      },
      '3015': {
        pt: 'Contrarrazões ao recurso/nulidade',
        en: 'Counter-arguments to appeal/nullity',
        price: 'R$ 180,00',
        discount: 'R$ 90,00'
      },
      '376': {
        pt: 'Manifestação sobre parecer proferido em grau de recurso',
        en: 'Manifestation on opinion issued at appeal level',
        price: 'R$ 0,00'
      },
      '3016': {
        pt: 'Cumprimento de exigência em grau de recurso/ nulidade',
        en: 'Compliance with requirement at appeal/nullity level',
        price: 'R$ 180,00',
        discount: 'R$ 90,00'
      },
      '336': {
        pt: 'Nulidade administrativa de registro de marca - valor por classe',
        en: 'Administrative nullity of trademark registration - per class',
        price: 'R$ 850,00',
        discount: 'R$ 425,00'
      },
      '337': {
        pt: 'Caducidade - valor por classe',
        en: 'Lapse - per class',
        price: 'R$ 590,00',
        discount: 'R$ 295,00'
      },
      '348': {
        pt: 'Alteração de nome, sede e/ou endereço',
        en: 'Change of name, headquarters and/or address',
        price: 'R$ 50,00'
      },
      '380': {
        pt: 'Anotação de limitação ou ônus - Primeiro processo',
        en: 'Annotation of limitation or encumbrance - First process',
        price: 'R$ 100,00'
      },
      '349': {
        pt: 'Anotação de transferência de titular - Processo adicional (desde que o conjunto de cessionários e o conjunto de cedentes sejam os mesmos)',
        en: 'Annotation of ownership transfer - Additional process (provided the set of assignees and the set of assignors are the same)',
        price: 'R$ 90,00'
      },
      '3002': {
        pt: 'Anotação de transferência parcial de titular com divisão de processo',
        en: 'Annotation of partial ownership transfer with process division',
        price: 'R$ 1.050,00'
      },
      '378': {
        pt: 'Correção de dados no processo devido à falha do interessado',
        en: 'Correction of data in process due to interested party failure',
        price: 'R$ 70,00'
      },
      '366': {
        pt: 'Retificação por erro de publicação na Revista da Propriedade Industrial (RPI)',
        en: 'Correction for publication error in Industrial Property Magazine (RPI)',
        price: 'R$ 0,00'
      },
      '385': {
        pt: 'Nomeação, destituição ou substituição de procurador',
        en: 'Appointment, removal or replacement of representative',
        price: 'R$ 90,00'
      },
      '387': {
        pt: 'Renúncia a mandato de procurador',
        en: 'Renunciation of representative mandate',
        price: 'R$ 90,00'
      },
      '383': {
        pt: 'Desistência de pedido de registro',
        en: 'Withdrawal of registration request',
        price: 'R$ 0,00'
      },
      '384': {
        pt: 'Desistência de petição',
        en: 'Withdrawal of petition',
        price: 'R$ 0,00'
      },
      '388': {
        pt: 'Renúncia a registro de marca',
        en: 'Renunciation of trademark registration',
        price: 'R$ 0,00'
      },
      '3017': {
        pt: 'Desistência parcial de pedido de registro',
        en: 'Partial withdrawal of registration request',
        price: 'R$ 170,00'
      },
      '3018': {
        pt: 'Renúncia parcial a registro de marca',
        en: 'Partial renunciation of trademark registration',
        price: 'R$ 170,00'
      },
      '342': {
        pt: 'Pedido de devolução de prazo por falha do INPI',
        en: 'Request for deadline return due to INPI failure',
        price: 'R$ 0,00'
      },
      '341': {
        pt: 'Pedido de devolução de prazo por impedimento do interessado',
        en: 'Request for deadline return due to interested party impediment',
        price: 'R$ 100,00'
      },
      '350': {
        pt: 'Certidão de atos relativos ao processo (dispensado de petição)',
        en: 'Certificate of acts related to process (petition exempt)',
        price: 'R$ 90,00'
      },
      '352': {
        pt: 'Cópia oficial para efeito de reivindicação de prioridade unionista - Por meio eletrônico',
        en: 'Official copy for unionist priority claim purposes - Electronic means',
        price: 'R$ 90,00'
      },
      '824': {
        pt: 'Cópia digital',
        en: 'Digital copy',
        price: 'R$ 10,00'
      },
      '351': {
        pt: 'Expedição de segunda via de certificado de registro de marca (dispensado de petição)',
        en: 'Issuance of second copy of trademark registration certificate (petition exempt)',
        price: 'R$ 140,00'
      },
      '357': {
        pt: 'Consulta à comissão de classificação de produtos e serviços - Até 5 (cinco) produtos ou serviços',
        en: 'Query to product and service classification commission - Up to 5 products or services',
        price: 'R$ 170,00'
      },
      '393': {
        pt: 'Pedido de reconhecimento de alto renome',
        en: 'Request for high renown recognition',
        price: 'R$ 37.580,00'
      },
      '362': {
        pt: 'Recurso com fundamento em alto renome',
        en: 'Appeal based on high renown',
        price: 'R$ 2.350,00'
      },
      '3004': {
        pt: 'Certificação de pedido internacional para transmissão à Secretaria Internacional (Artigo 2 - Protocolo de Madri) - valor por classe',
        en: 'International request certification for transmission to International Secretariat (Article 2 - Madrid Protocol) - per class',
        price: 'R$ 280,00'
      },
      '3005': {
        pt: 'Correção de inconsistências em certificação de pedido internacional (Regra 9 - Regulamento do Protocolo de Madri)',
        en: 'Correction of inconsistencies in international request certification (Rule 9 - Madrid Protocol Regulation)',
        price: 'R$ 280,00'
      },
      '3006': {
        pt: 'Manifestação sobre irregularidade em pedido internacional comunicada pela Secretaria Internacional (Regras 11, 12 e 13 - Regulamento do Protocolo de Madri)',
        en: 'Manifestation on irregularity in international request communicated by International Secretariat (Rules 11, 12 and 13 - Madrid Protocol Regulation)',
        price: 'R$ 280,00'
      },
      '3007': {
        pt: 'Validação e transmissão de solicitação de transferência de Inscrição Internacional à Secretaria Internacional (Artigo 9 - Protocolo de Madri)',
        en: 'Validation and transmission of International Registration transfer request to International Secretariat (Article 9 - Madrid Protocol)',
        price: 'R$ 180,00'
      },
      '3008': {
        pt: 'Transformação de designação recebida em pedido nacional, decorrente de cancelamento da Inscrição Internacional (Artigo 9quinquies - Protocolo de Madri)',
        en: 'Transformation of received designation into national request, resulting from International Registration cancellation (Article 9quinquies - Madrid Protocol)',
        price: 'R$ 510,00'
      },
      '3009': {
        pt: 'Anotação de substituição de registro nacional em designação recebida (Artigo 4bis - Protocolo de Madri)',
        en: 'Annotation of national registration replacement in received designation (Article 4bis - Madrid Protocol)',
        price: 'R$ 510,00'
      },
      '3010': {
        pt: 'Correção de dados em pedido internacional devido a falhas na certificação (Regra 28 - Regulamento do Protocolo de Madri)',
        en: 'Correction of data in international request due to certification failures (Rule 28 - Madrid Protocol Regulation)',
        price: 'R$ 0,00'
      },
      '3011': {
        pt: 'Designação recebida (Artigo 3ter - Protocolo de Madri) - valor por classe',
        en: 'Received designation (Article 3ter - Madrid Protocol) - per class',
        price: 'R$ 1.720,00'
      },
      '3012': {
        pt: 'Concessão de registro e expedição de certificado (Artigo 8(7) a ii - Protocolo de Madri e Regra 34 (3) - Regulamento do Protocolo de Madri) - valor por classe',
        en: 'Registration grant and certificate issuance (Article 8(7) a ii - Madrid Protocol and Rule 34 (3) - Madrid Protocol Regulation) - per class',
        price: 'R$ 0,00'
      },
      '3013': {
        pt: 'Prorrogação (Artigos 7 e 8(7)a ii - Protocolo de Madri e Regra 30 - Regulamento do Protocolo de Madri) - valor por classe',
        en: 'Renewal (Articles 7 and 8(7)a ii - Madrid Protocol and Rule 30 - Madrid Protocol Regulation) - per class',
        price: 'R$ 1.000,00'
      },
      '3014': {
        pt: 'Designação recebida, concessão de registro e expedição de certificado (Artigo 8(7) - Protocolo de Madri)',
        en: 'Received designation, registration grant and certificate issuance (Article 8(7) - Madrid Protocol)',
        price: 'R$ 1.720,00'
      }
    };

    const service = services[serviceCode];
    return service ? service : null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus(null);

    // Validação básica
    const requiredFields = ['nomeCliente', 'email', 'telefone', 'nomeMarca', 'classe', 'servico'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      setSubmitStatus('error');
      setSubmitMessage(lang === 'PT' 
        ? 'Por favor, preencha todos os campos obrigatórios marcados com *.'
        : 'Please fill in all required fields marked with *.');
      setIsSubmitting(false);
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setSubmitMessage(lang === 'PT' 
        ? 'Por favor, insira um endereço de e-mail válido.'
        : 'Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Validação de termos
    if (!formData.aceitaTermos) {
      setSubmitStatus('error');
      setSubmitMessage(lang === 'PT' 
        ? 'Você precisa aceitar os termos e condições para continuar.'
        : 'You must accept the terms and conditions to continue.');
      setIsSubmitting(false);
      return;
    }

    // Validação específica por tipo de pessoa
    if (formData.tipoPessoa === 'fisica') {
      if (!formData.cpf || !formData.rg) {
        setSubmitStatus('error');
        setSubmitMessage(lang === 'PT' 
          ? 'Para pessoa física, CPF e RG são obrigatórios.'
          : 'For individual, CPF and RG are required.');
        setIsSubmitting(false);
        return;
      }
    } else {
      if (!formData.cnpj || !formData.rgAdministrador || !formData.cpfAdministrador) {
        setSubmitStatus('error');
        setSubmitMessage(lang === 'PT' 
          ? 'Para pessoa jurídica, CNPJ, RG e CPF do administrador são obrigatórios.'
          : 'For company, CNPJ, administrator RG and CPF are required.');
        setIsSubmitting(false);
        return;
      }
    }

    try {
      // Upload do arquivo se existir
      let logoUrl = null;
      if (formData.logoFile) {
        const fileExt = formData.logoFile.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('logos')
          .upload(fileName, formData.logoFile);

        if (uploadError) {
          console.error('Upload error:', uploadError);
          throw new Error(lang === 'PT' 
            ? 'Erro ao fazer upload do arquivo. Tente novamente.' 
            : 'Error uploading file. Please try again.');
        }

        const { data: urlData } = supabase.storage
          .from('logos')
          .getPublicUrl(fileName);
        
        logoUrl = urlData.publicUrl;
      }

      // Inserção direta sem autenticação (usando política pública)
      const { error } = await supabase
        .from('marcas_guias')
        .insert([
          {
            nome_cliente: formData.nomeCliente,
            email: formData.email,
            telefone: formData.telefone,
            tipo_pessoa: formData.tipoPessoa,
            nome_marca: formData.nomeMarca,
            classe: formData.classe,
            cpf: formData.cpf || null,
            rg: formData.rg || null,
            cnpj: formData.cnpj || null,
            rg_administrador: formData.rgAdministrador || null,
            cpf_administrador: formData.cpfAdministrador || null,
            logo_url: logoUrl,
            logo_name: formData.logoFile?.name || null,
            aceita_termos: formData.aceitaTermos,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Insert error:', error);
        throw error;
      }

      setSubmitStatus('success');
      setSubmitMessage(lang === 'PT' 
        ? 'Obrigado! Recebemos sua solicitação com sucesso. Nossa equipe irá analisar suas informações e entraremos em contato em breve com as próximas etapas.'
        : 'Thank you! We have successfully received your request. Our team will review your information and contact you soon with the next steps.');
      
      // Reset form
      setFormData({
        nomeCliente: '',
        email: '',
        telefone: '',
        tipoPessoa: 'fisica',
        nomeMarca: '',
        classe: '',
        cpf: '',
        rg: '',
        cnpj: '',
        rgAdministrador: '',
        cpfAdministrador: '',
        logoFile: null,
        aceitaTermos: false
      });

    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setSubmitMessage(lang === 'PT' 
        ? 'Ocorreu um erro ao enviar sua solicitação. Por favor, analise todos os campos e arquivos enviados e tente novamente. Se o problema persistir, entre em contato conosco.'
        : 'An error occurred while submitting your request. Please review all fields and uploaded files and try again. If the problem persists, contact us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <nav className="sticky top-0 left-0 w-full z-[110] px-4 xs:px-6 py-6 xs:py-8 md:px-12 flex justify-between items-center mix-blend-difference">
        <button onClick={onClose} className="group flex items-center gap-2 xs:gap-3 xs:gap-4">
          <div className="w-5 xs:w-6 sm:w-8 h-[1px] bg-white group-hover:w-6 xs:group-hover:w-8 sm:group-hover:w-12 transition-all duration-300" />
          <span className="text-[7px] xs:text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em]">{nav.back}</span>
        </button>
        <BrandLogo size="md" />
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-40">
        <div className="space-y-16">
          {/* Header */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-neutral-700" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
                {lang === 'PT' ? 'GUIAS INPI' : 'INPI GUIDES'}
              </h3>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase text-white leading-tight">
              {lang === 'PT' 
                ? 'Guia de Fechamento de Arquivo de Logotipo' 
                : 'Logo File Closing Guide'}
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl">
              {lang === 'PT'
                ? 'Guia para submissão ao INPI conforme as normas vigentes para registro de marcas.'
                : 'Guide for INPI submission according to current trademark registration regulations.'}
            </p>
          </section>

          {/* Logo Requirements Section */}
          <section className="space-y-8">
            <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-8">
                {lang === 'PT' ? 'Requisitos do Logotipo' : 'Logo Requirements'}
              </h2>
              
              <div className="space-y-8">
                {/* Technical Specifications */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    {lang === 'PT' ? 'Especificações Técnicas' : 'Technical Specifications'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-neutral-900 rounded-lg p-6">
                      <h4 className="font-medium text-yellow-500 mb-3">
                        {lang === 'PT' ? 'Formato' : 'Format'}
                      </h4>
                      <ul className="space-y-2 text-neutral-300 text-sm">
                        <li>• PNG (recomendado)</li>
                        <li>• JPG/JPEG</li>
                        <li>• SVG (vetorial)</li>
                        <li>• AI ou EPS (vetorial)</li>
                      </ul>
                    </div>
                    <div className="bg-neutral-900 rounded-lg p-6">
                      <h4 className="font-medium text-yellow-500 mb-3">
                        {lang === 'PT' ? 'Resolução' : 'Resolution'}
                      </h4>
                      <ul className="space-y-2 text-neutral-300 text-sm">
                        <li>• Mínimo 300 DPI</li>
                        <li>• 1200x1200px (mínimo)</li>
                        <li>• Alta qualidade</li>
                        <li>• Sem compressão excessiva</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Design Guidelines */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    {lang === 'PT' ? 'Diretrizes de Design' : 'Design Guidelines'}
                  </h3>
                  <div className="bg-neutral-900 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-medium text-green-500 mb-3">
                          ✓ {lang === 'PT' ? 'Aceitável' : 'Acceptable'}
                        </h4>
                        <ul className="space-y-2 text-neutral-300 text-sm">
                          <li>• {lang === 'PT' ? 'Marcas originais e distintas' : 'Original and distinctive marks'}</li>
                          <li>• {lang === 'PT' ? 'Cores bem definidas' : 'Well-defined colors'}</li>
                          <li>• {lang === 'PT' ? 'Formas claras e legíveis' : 'Clear and readable shapes'}</li>
                          <li>• {lang === 'PT' ? 'Sem elementos genéricos' : 'No generic elements'}</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-500 mb-3">
                          ✗ {lang === 'PT' ? 'Não Aceitável' : 'Not Acceptable'}
                        </h4>
                        <ul className="space-y-2 text-neutral-300 text-sm">
                          <li>• {lang === 'PT' ? 'Nomes genéricos' : 'Generic names'}</li>
                          <li>• {lang === 'PT' ? 'Símbolos comuns' : 'Common symbols'}</li>
                          <li>• {lang === 'PT' ? 'Cores exclusivas INPI' : 'Exclusive INPI colors'}</li>
                          <li>• {lang === 'PT' ? 'Elementos ofensivos' : 'Offensive elements'}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Logo Example */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    {lang === 'PT' ? 'Exemplo de Logotipo Aprovado' : 'Approved Logo Example'}
                  </h3>
                  <div className="bg-neutral-900 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <img 
                          src="/EXEMPLO-LOGO.png" 
                          alt={lang === 'PT' ? 'Exemplo de logotipo' : 'Logo example'}
                          className="w-80 h-80 object-contain rounded-lg bg-white p-6"
                        />
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-medium text-yellow-500">
                          {lang === 'PT' ? 'Características deste Exemplo:' : 'Characteristics of this Example:'}
                        </h4>
                        <ul className="space-y-2 text-neutral-300 text-sm">
                          <li>• {lang === 'PT' ? 'Design original e memorável' : 'Original and memorable design'}</li>
                          <li>• {lang === 'PT' ? 'Cores bem definidas e contrastantes' : 'Well-defined and contrasting colors'}</li>
                          <li>• {lang === 'PT' ? 'Formas claras e reconhecíveis' : 'Clear and recognizable shapes'}</li>
                          <li>• {lang === 'PT' ? 'Alta resolução e qualidade' : 'High resolution and quality'}</li>
                          <li>• {lang === 'PT' ? 'Sem elementos genéricos ou comuns' : 'No generic or common elements'}</li>
                          <li>• {lang === 'PT' ? 'Proporções equilibradas e profissionais' : 'Balanced and professional proportions'}</li>
                        </ul>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                          <p className="text-green-400 text-sm font-medium">
                            ✓ {lang === 'PT' ? 'Este formato atende todos os requisitos do INPI' : 'This format meets all INPI requirements'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Closing Process */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    {lang === 'PT' ? 'Processo de Fechamento' : 'Closing Process'}
                  </h3>
                  <div className="bg-neutral-900 rounded-lg p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">1</div>
                        <div>
                          <h4 className="font-medium text-white mb-1">
                            {lang === 'PT' ? 'Análise Preliminar' : 'Preliminary Analysis'}
                          </h4>
                          <p className="text-neutral-300 text-sm">
                            {lang === 'PT' ? 'Verificação de conflitos e viabilidade de registro' : 'Conflict checking and registration feasibility'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">2</div>
                        <div>
                          <h4 className="font-medium text-white mb-1">
                            {lang === 'PT' ? 'Preparação dos Documentos' : 'Document Preparation'}
                          </h4>
                          <p className="text-neutral-300 text-sm">
                            {lang === 'PT' ? 'Organização de todos os documentos necessários' : 'Organization of all necessary documents'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">3</div>
                        <div>
                          <h4 className="font-medium text-white mb-1">
                            {lang === 'PT' ? 'Depósito do Pedido' : 'Application Filing'}
                          </h4>
                          <p className="text-neutral-300 text-sm">
                            {lang === 'PT' ? 'Submissão formal ao INPI com pagamento da GRU' : 'Formal submission to INPI with GRU payment'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">4</div>
                        <div>
                          <h4 className="font-medium text-white mb-1">
                            {lang === 'PT' ? 'Acompanhamento' : 'Follow-up'}
                          </h4>
                          <p className="text-neutral-300 text-sm">
                            {lang === 'PT' ? 'Monitoramento do processo até a concessão' : 'Process monitoring until grant'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="space-y-8">
            <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-8">
                {lang === 'PT' ? 'Formulário de Solicitação' : 'Request Form'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dados do Cliente */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-white">
                    {lang === 'PT' ? 'Dados do Cliente' : 'Client Information'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <label className="text-lg font-semibold text-white">
                        {lang === 'PT' ? 'Nome Completo' : 'Full Name'} *
                      </label>
                      <input
                        type="text"
                        value={formData.nomeCliente}
                        onChange={(e) => handleInputChange('nomeCliente', e.target.value)}
                        className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-yellow-500 focus:outline-none transition-colors"
                        placeholder={lang === 'PT' ? 'Digite seu nome completo' : 'Enter your full name'}
                        required
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-lg font-semibold text-white">
                        {lang === 'PT' ? 'E-mail' : 'Email'} *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-yellow-500 focus:outline-none transition-colors"
                        placeholder={lang === 'PT' ? 'seu@email.com' : 'your@email.com'}
                        required
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-lg font-semibold text-white">
                        {lang === 'PT' ? 'Telefone' : 'Phone'} *
                      </label>
                      <input
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-yellow-500 focus:outline-none transition-colors"
                        placeholder={lang === 'PT' ? '(00) 00000-0000' : '(00) 00000-0000'}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Tipo de Pessoa */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    {lang === 'PT' ? 'Tipo de Requerente' : 'Applicant Type'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => handleInputChange('tipoPessoa', 'fisica')}
                      className={`p-6 border-2 rounded-lg transition-all ${
                        formData.tipoPessoa === 'fisica'
                          ? 'border-yellow-500 bg-yellow-500/10'
                          : 'border-neutral-800 hover:border-neutral-600'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">👤</div>
                        <span className="text-white font-medium">
                          {lang === 'PT' ? 'Pessoa Física' : 'Individual'}
                        </span>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('tipoPessoa', 'juridica')}
                      className={`p-6 border-2 rounded-lg transition-all ${
                        formData.tipoPessoa === 'juridica'
                          ? 'border-yellow-500 bg-yellow-500/10'
                          : 'border-neutral-800 hover:border-neutral-600'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">🏢</div>
                        <span className="text-white font-medium">
                          {lang === 'PT' ? 'Pessoa Jurídica' : 'Company'}
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Nome da Marca */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-white">
                    {lang === 'PT' ? 'Nome da Marca' : 'Brand Name'} *
                  </label>
                  <input
                    type="text"
                    value={formData.nomeMarca}
                    onChange={(e) => handleInputChange('nomeMarca', e.target.value)}
                    className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder={lang === 'PT' ? 'Digite o nome da sua marca' : 'Enter your brand name'}
                    required
                  />
                </div>

                {/* Classe */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-white">
                    {lang === 'PT' ? 'Classe Nice' : 'Nice Class'} *
                  </label>
                  <select 
                    value={formData.classe}
                    onChange={(e) => handleInputChange('classe', e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    required
                  >
                    <option value="">
                      {lang === 'PT' ? 'Selecione uma classe' : 'Select a class'}
                    </option>
                    <optgroup label={lang === 'PT' ? 'PRODUTOS' : 'PRODUCTS'}>
                      <option value="01">01 - {lang === 'PT' ? 'Substâncias químicas' : 'Chemical substances'}</option>
                      <option value="02">02 - {lang === 'PT' ? 'Tintas, vernizes' : 'Paints, varnishes'}</option>
                      <option value="03">03 - {lang === 'PT' ? 'Produtos de limpeza, cosméticos' : 'Cleaning products, cosmetics'}</option>
                      <option value="04">04 - {lang === 'PT' ? 'Graxas, óleos industriais' : 'Industrial greases, oils'}</option>
                      <option value="05">05 - {lang === 'PT' ? 'Produtos farmacêuticos' : 'Pharmaceutical products'}</option>
                      <option value="06">06 - {lang === 'PT' ? 'Metais comuns' : 'Common metals'}</option>
                      <option value="07">07 - {lang === 'PT' ? 'Máquinas e ferramentas' : 'Machines and tools'}</option>
                      <option value="08">08 - {lang === 'PT' ? 'Ferramentas manuais' : 'Hand tools'}</option>
                      <option value="09">09 - {lang === 'PT' ? 'Aparelhos científicos' : 'Scientific apparatus'}</option>
                      <option value="10">10 - {lang === 'PT' ? 'Aparelhos médicos' : 'Medical apparatus'}</option>
                      <option value="11">11 - {lang === 'PT' ? 'Aparelhos de iluminação' : 'Lighting apparatus'}</option>
                      <option value="12">12 - {lang === 'PT' ? 'Veículos' : 'Vehicles'}</option>
                      <option value="13">13 - {lang === 'PT' ? 'Armas de fogo' : 'Firearms'}</option>
                      <option value="14">14 - {lang === 'PT' ? 'Metais preciosos' : 'Precious metals'}</option>
                      <option value="15">15 - {lang === 'PT' ? 'Instrumentos musicais' : 'Musical instruments'}</option>
                      <option value="16">16 - {lang === 'PT' ? 'Papel, papelão' : 'Paper, cardboard'}</option>
                      <option value="17">17 - {lang === 'PT' ? 'Borracha, plásticos' : 'Rubber, plastics'}</option>
                      <option value="18">18 - {lang === 'PT' ? 'Couro, malas' : 'Leather, luggage'}</option>
                      <option value="19">19 - {lang === 'PT' ? 'Materiais de construção' : 'Building materials'}</option>
                      <option value="20">20 - {lang === 'PT' ? 'Móveis' : 'Furniture'}</option>
                      <option value="21">21 - {lang === 'PT' ? 'Utensílios domésticos' : 'Household utensils'}</option>
                      <option value="22">22 - {lang === 'PT' ? 'Cordas, fios' : 'Ropes, strings'}</option>
                      <option value="23">23 - {lang === 'PT' ? 'Fios têxteis' : 'Textile threads'}</option>
                      <option value="24">24 - {lang === 'PT' ? 'Tecidos' : 'Textiles'}</option>
                      <option value="25">25 - {lang === 'PT' ? 'Vestuário, calçados' : 'Clothing, footwear'}</option>
                      <option value="26">26 - {lang === 'PT' ? 'Rendas, botões' : 'Lace, buttons'}</option>
                      <option value="27">27 - {lang === 'PT' ? 'Carpetes, tapetes' : 'Carpets, rugs'}</option>
                      <option value="28">28 - {lang === 'PT' ? 'Jogos, brinquedos' : 'Games, toys'}</option>
                      <option value="29">29 - {lang === 'PT' ? 'Alimentos' : 'Foodstuffs'}</option>
                      <option value="30">30 - {lang === 'PT' ? 'Café, chá, açúcar' : 'Coffee, tea, sugar'}</option>
                      <option value="31">31 - {lang === 'PT' ? 'Produtos agrícolas' : 'Agricultural products'}</option>
                      <option value="32">32 - {lang === 'PT' ? 'Bebidas não alcoólicas' : 'Non-alcoholic beverages'}</option>
                      <option value="33">33 - {lang === 'PT' ? 'Bebidas alcoólicas' : 'Alcoholic beverages'}</option>
                      <option value="34">34 - {lang === 'PT' ? 'Tabaco' : 'Tobacco'}</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'SERVIÇOS' : 'SERVICES'}>
                      <option value="35">35 - {lang === 'PT' ? 'Propaganda, gestão' : 'Advertising, management'}</option>
                      <option value="36">36 - {lang === 'PT' ? 'Seguros, finanças' : 'Insurance, finance'}</option>
                      <option value="37">37 - {lang === 'PT' ? 'Construção civil' : 'Construction'}</option>
                      <option value="38">38 - {lang === 'PT' ? 'Telecomunicações' : 'Telecommunications'}</option>
                      <option value="39">39 - {lang === 'PT' ? 'Transporte, viagens' : 'Transport, travel'}</option>
                      <option value="40">40 - {lang === 'PT' ? 'Tratamento de materiais' : 'Materials treatment'}</option>
                      <option value="41">41 - {lang === 'PT' ? 'Educação, entretenimento' : 'Education, entertainment'}</option>
                      <option value="42">42 - {lang === 'PT' ? 'Serviços tecnológicos' : 'Technological services'}</option>
                      <option value="43">43 - {lang === 'PT' ? 'Comida, bebida, hospedagem' : 'Food, beverage, lodging'}</option>
                      <option value="44">44 - {lang === 'PT' ? 'Serviços médicos' : 'Medical services'}</option>
                      <option value="45">45 - {lang === 'PT' ? 'Serviços jurídicos' : 'Legal services'}</option>
                    </optgroup>
                  </select>
                </div>

                {/* Class Description */}
                {selectedClass && (
                  <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700">
                    <div className="flex items-start space-x-3">
                      <Info className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-yellow-500 mb-2">
                          {lang === 'PT' ? 'Detalhes da Classe' : 'Class Details'}
                        </h4>
                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {getClassDescription(selectedClass, lang)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Serviço INPI */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-white">
                    {lang === 'PT' ? 'Serviço INPI' : 'INPI Service'} *
                  </label>
                  <select 
                    value={formData.servico}
                    onChange={(e) => handleInputChange('servico', e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    required
                  >
                    <option value="">
                      {lang === 'PT' ? 'Selecione um serviço' : 'Select a service'}
                    </option>
                    <optgroup label={lang === 'PT' ? 'PEDIDO DE REGISTRO' : 'REGISTRATION REQUEST'}>
                      <option value="389">389 - {lang === 'PT' ? 'Registro com especificação pré-aprovada (Rápido)' : 'Pre-approved specification registration (Fast)'} - R$ 880,00</option>
                      <option value="394">394 - {lang === 'PT' ? 'Registro com livre preenchimento (Completo)' : 'Free specification registration (Complete)'} - R$ 1.720,00</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'SERVIÇOS ADICIONAIS' : 'ADDITIONAL SERVICES'}>
                      <option value="3001">3001 - {lang === 'PT' ? 'Divisão de processo' : 'Process division'} - R$ 870,00</option>
                      <option value="338">338 - {lang === 'PT' ? 'Cumprimento de exigência decorrente de exame formal em pedido de registro' : 'Compliance with requirement from formal examination of registration request'} - R$ 180,00</option>
                      <option value="382">382 - {lang === 'PT' ? 'Cumprimento de exigência decorrente de exame de conformidade em petição' : 'Compliance with requirement from conformity examination of petition'} - R$ 180,00</option>
                      <option value="381">381 - {lang === 'PT' ? 'Apresentação de documentos' : 'Document presentation'} - R$ 100,00</option>
                      <option value="332">332 - {lang === 'PT' ? 'Oposição - valor por classe' : 'Opposition - per class'} - R$ 520,00</option>
                      <option value="3022">3022 - {lang === 'PT' ? 'Oposição com restrição de alegações' : 'Opposition with restricted allegations'} - R$ 360,00</option>
                      <option value="3020">3020 - {lang === 'PT' ? 'Trâmite prioritário de marcas por motivo estratégico' : 'Priority processing of trademarks for strategic reasons'} - R$ 890,00</option>
                      <option value="3019">3019 - {lang === 'PT' ? 'Trâmite prioritário de marcas com direito à gratuidade' : 'Priority processing of trademarks with right to fee waiver'} - R$ 0,00</option>
                      <option value="3021">3021 - {lang === 'PT' ? 'Apresentação de documentos para comprovação de distintividade adquirida' : 'Document presentation for proof of acquired distinctiveness'} - R$ 4.700,00</option>
                      <option value="339">339 - {lang === 'PT' ? 'Manifestação' : 'Manifestation'} - R$ 180,00</option>
                      <option value="340">340 - {lang === 'PT' ? 'Cumprimento de exigência' : 'Compliance with requirement'} - R$ 180,00</option>
                      <option value="379">379 - {lang === 'PT' ? 'Aditamento à petição' : 'Addition to petition'} - R$ 100,00</option>
                      <option value="386">386 - {lang === 'PT' ? 'Reivindicação suplementar de prioridade' : 'Supplementary priority claim'} - R$ 100,00</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'CONCESSÃO E PRORROGAÇÃO' : 'GRANT AND RENEWAL'}>
                      <option value="372">372 - {lang === 'PT' ? 'Primeiro decênio - prazo ordinário' : 'First decade - ordinary deadline'} - R$ 0,00</option>
                      <option value="373">373 - {lang === 'PT' ? 'Primeiro decênio - prazo extraordinário' : 'First decade - extraordinary deadline'} - R$ 0,00</option>
                      <option value="374">374 - {lang === 'PT' ? 'Prorrogação - prazo ordinário' : 'Renewal - ordinary deadline'} - R$ 1.000,00</option>
                      <option value="375">375 - {lang === 'PT' ? 'Prorrogação - prazo extraordinário' : 'Renewal - extraordinary deadline'} - R$ 2.000,00</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'RECURSO' : 'APPEAL'}>
                      <option value="333">333 - {lang === 'PT' ? 'Recurso de marcas - Primeiro processo' : 'Trademark appeal - First process'} - R$ 700,00</option>
                      <option value="3000">3000 - {lang === 'PT' ? 'Recurso contra indeferimento de pedido de registro' : 'Appeal against registration request denial'} - R$ 700,00</option>
                      <option value="3015">3015 - {lang === 'PT' ? 'Contrarrazões ao recurso/nulidade' : 'Counter-arguments to appeal/nullity'} - R$ 180,00</option>
                      <option value="376">376 - {lang === 'PT' ? 'Manifestação sobre parecer proferido em grau de recurso' : 'Manifestation on opinion issued at appeal level'} - R$ 0,00</option>
                      <option value="3016">3016 - {lang === 'PT' ? 'Cumprimento de exigência em grau de recurso/nulidade' : 'Compliance with requirement at appeal/nullity level'} - R$ 180,00</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'NULIDADE ADMINISTRATIVA' : 'ADMINISTRATIVE NULLITY'}>
                      <option value="336">336 - {lang === 'PT' ? 'Nulidade administrativa de registro de marca' : 'Administrative nullity of trademark registration'} - R$ 850,00</option>
                      <option value="3015">3015 - {lang === 'PT' ? 'Contrarrazões ao recurso/nulidade' : 'Counter-arguments to appeal/nullity'} - R$ 180,00</option>
                      <option value="3016">3016 - {lang === 'PT' ? 'Cumprimento de exigência em grau de recurso/nulidade' : 'Compliance with requirement at appeal/nullity level'} - R$ 180,00</option>
                      <option value="382">382 - {lang === 'PT' ? 'Cumprimento de exigência decorrente de exame de conformidade em petição' : 'Compliance with requirement from conformity examination of petition'} - R$ 180,00</option>
                      <option value="379">379 - {lang === 'PT' ? 'Aditamento à petição' : 'Addition to petition'} - R$ 100,00</option>
                      <option value="381">381 - {lang === 'PT' ? 'Apresentação de documentos' : 'Document presentation'} - R$ 100,00</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'CADUCIDADE' : 'LAPSE'}>
                      <option value="337">337 - {lang === 'PT' ? 'Caducidade - valor por classe' : 'Lapse - per class'} - R$ 590,00</option>
                      <option value="339">339 - {lang === 'PT' ? 'Manifestação' : 'Manifestation'} - R$ 180,00</option>
                      <option value="340">340 - {lang === 'PT' ? 'Cumprimento de exigência' : 'Compliance with requirement'} - R$ 180,00</option>
                      <option value="382">382 - {lang === 'PT' ? 'Cumprimento de exigência decorrente de exame de conformidade em petição' : 'Compliance with requirement from conformity examination of petition'} - R$ 180,00</option>
                      <option value="379">379 - {lang === 'PT' ? 'Aditamento à petição' : 'Addition to petition'} - R$ 100,00</option>
                      <option value="381">381 - {lang === 'PT' ? 'Apresentação de documentos' : 'Document presentation'} - R$ 100,00</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'TRANSFERÊNCIAS E ALTERAÇÕES' : 'TRANSFERS AND CHANGES'}>
                      <option value="348">348 - {lang === 'PT' ? 'Alteração de nome, sede e/ou endereço' : 'Change of name, headquarters and/or address'} - R$ 50,00</option>
                      <option value="380">380 - {lang === 'PT' ? 'Anotação de limitação ou ônus - Primeiro processo' : 'Annotation of limitation or encumbrance - First process'} - R$ 100,00</option>
                      <option value="349">349 - {lang === 'PT' ? 'Anotação de transferência de titular - Processo adicional' : 'Annotation of ownership transfer - Additional process'} - R$ 90,00</option>
                      <option value="3002">3002 - {lang === 'PT' ? 'Anotação de transferência parcial de titular com divisão de processo' : 'Annotation of partial ownership transfer with process division'} - R$ 1.050,00</option>
                      <option value="378">378 - {lang === 'PT' ? 'Correção de dados no processo devido à falha do interessado' : 'Correction of data in process due to interested party failure'} - R$ 70,00</option>
                      <option value="366">366 - {lang === 'PT' ? 'Retificação por erro de publicação na RPI' : 'Correction for publication error in RPI'} - R$ 0,00</option>
                      <option value="379">379 - {lang === 'PT' ? 'Aditamento à petição' : 'Addition to petition'} - R$ 100,00</option>
                      <option value="381">381 - {lang === 'PT' ? 'Apresentação de documentos' : 'Document presentation'} - R$ 100,00</option>
                      <option value="340">340 - {lang === 'PT' ? 'Cumprimento de exigência' : 'Compliance with requirement'} - R$ 180,00</option>
                      <option value="382">382 - {lang === 'PT' ? 'Cumprimento de exigência decorrente de exame de conformidade em petição' : 'Compliance with requirement from conformity examination of petition'} - R$ 180,00</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'PROCURADOR' : 'REPRESENTATIVE'}>
                      <option value="385">385 - {lang === 'PT' ? 'Nomeação, destituição ou substituição de procurador' : 'Appointment, removal or replacement of representative'} - R$ 90,00</option>
                      <option value="387">387 - {lang === 'PT' ? 'Renúncia a mandato de procurador' : 'Renunciation of representative mandate'} - R$ 90,00</option>
                      <option value="381">381 - {lang === 'PT' ? 'Apresentação de documentos' : 'Document presentation'} - R$ 100,00</option>
                      <option value="340">340 - {lang === 'PT' ? 'Cumprimento de exigência' : 'Compliance with requirement'} - R$ 180,00</option>
                      <option value="382">382 - {lang === 'PT' ? 'Cumprimento de exigência decorrente de exame de conformidade em petição' : 'Compliance with requirement from conformity examination of petition'} - R$ 180,00</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'DESISTÊNCIAS E RENÚNCIA' : 'WITHDRAWALS AND RENUNCIATION'}>
                      <option value="383">383 - {lang === 'PT' ? 'Desistência de pedido de registro' : 'Withdrawal of registration request'} - R$ 0,00</option>
                      <option value="384">384 - {lang === 'PT' ? 'Desistência de petição' : 'Withdrawal of petition'} - R$ 0,00</option>
                      <option value="388">388 - {lang === 'PT' ? 'Renúncia a registro de marca' : 'Renunciation of trademark registration'} - R$ 0,00</option>
                      <option value="3017">3017 - {lang === 'PT' ? 'Desistência parcial de pedido de registro' : 'Partial withdrawal of registration request'} - R$ 170,00</option>
                      <option value="3018">3018 - {lang === 'PT' ? 'Renúncia parcial a registro de marca' : 'Partial renunciation of trademark registration'} - R$ 170,00</option>
                      <option value="379">379 - {lang === 'PT' ? 'Aditamento à petição' : 'Addition to petition'} - R$ 100,00</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'DEVOLUÇÃO DE PRAZO' : 'DEADLINE RETURN'}>
                      <option value="342">342 - {lang === 'PT' ? 'Pedido de devolução de prazo por falha do INPI' : 'Request for deadline return due to INPI failure'} - R$ 0,00</option>
                      <option value="341">341 - {lang === 'PT' ? 'Pedido de devolução de prazo por impedimento do interessado' : 'Request for deadline return due to interested party impediment'} - R$ 100,00</option>
                      <option value="340">340 - {lang === 'PT' ? 'Cumprimento de exigência' : 'Compliance with requirement'} - R$ 180,00</option>
                      <option value="382">382 - {lang === 'PT' ? 'Cumprimento de exigência decorrente de exame de conformidade em petição' : 'Compliance with requirement from conformity examination of petition'} - R$ 180,00</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'CERTIDÕES E CÓPIAS' : 'CERTIFICATES AND COPIES'}>
                      <option value="350">350 - {lang === 'PT' ? 'Certidão de atos relativos ao processo' : 'Certificate of acts related to process'} - R$ 90,00</option>
                      <option value="352">352 - {lang === 'PT' ? 'Cópia oficial para efeito de reivindicação de prioridade' : 'Official copy for unionist priority claim'} - R$ 90,00</option>
                      <option value="824">824 - {lang === 'PT' ? 'Cópia digital' : 'Digital copy'} - R$ 10,00</option>
                      <option value="351">351 - {lang === 'PT' ? 'Expedição de segunda via de certificado de registro' : 'Issuance of second copy of certificate'} - R$ 140,00</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'CONSULTAS' : 'QUERIES'}>
                      <option value="357">357 - {lang === 'PT' ? 'Consulta à comissão de classificação - Até 5 produtos' : 'Query to classification commission - Up to 5 products'} - R$ 170,00</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'ALTO RENOME' : 'HIGH RENOWN'}>
                      <option value="393">393 - {lang === 'PT' ? 'Pedido de reconhecimento de alto renome' : 'Request for high renown recognition'} - R$ 37.580,00</option>
                      <option value="362">362 - {lang === 'PT' ? 'Recurso com fundamento em alto renome' : 'Appeal based on high renown'} - R$ 2.350,00</option>
                      <option value="3015">3015 - {lang === 'PT' ? 'Contrarrazões ao recurso/nulidade' : 'Counter-arguments to appeal/nullity'} - R$ 180,00</option>
                      <option value="3016">3016 - {lang === 'PT' ? 'Cumprimento de exigência em grau de recurso/nulidade' : 'Compliance with requirement at appeal/nullity level'} - R$ 180,00</option>
                      <option value="340">340 - {lang === 'PT' ? 'Cumprimento de exigência' : 'Compliance with requirement'} - R$ 180,00</option>
                      <option value="379">379 - {lang === 'PT' ? 'Aditamento à petição' : 'Addition to petition'} - R$ 100,00</option>
                      <option value="381">381 - {lang === 'PT' ? 'Apresentação de documentos' : 'Document presentation'} - R$ 100,00</option>
                      <option value="382">382 - {lang === 'PT' ? 'Cumprimento de exigência decorrente de exame de conformidade em petição' : 'Compliance with requirement from conformity examination of petition'} - R$ 180,00</option>
                    </optgroup>
                    <optgroup label={lang === 'PT' ? 'PROTOCOLO DE MADRI' : 'MADRID PROTOCOL'}>
                      <option value="3004">3004 - {lang === 'PT' ? 'Certificação de pedido internacional' : 'International request certification'} - R$ 280,00</option>
                      <option value="3005">3005 - {lang === 'PT' ? 'Correção de inconsistências em certificação' : 'Correction of inconsistencies in certification'} - R$ 280,00</option>
                      <option value="3006">3006 - {lang === 'PT' ? 'Manifestação sobre irregularidade em pedido internacional' : 'Manifestation on irregularity in international request'} - R$ 280,00</option>
                      <option value="3007">3007 - {lang === 'PT' ? 'Validação e transmissão de solicitação de transferência' : 'Validation and transmission of transfer request'} - R$ 180,00</option>
                      <option value="3008">3008 - {lang === 'PT' ? 'Transformação de designação recebida em pedido nacional' : 'Transformation of received designation into national request'} - R$ 510,00</option>
                      <option value="3009">3009 - {lang === 'PT' ? 'Anotação de substituição de registro nacional' : 'Annotation of national registration replacement'} - R$ 510,00</option>
                      <option value="3010">3010 - {lang === 'PT' ? 'Correção de dados em pedido internacional' : 'Correction of data in international request'} - R$ 0,00</option>
                      <option value="3011">3011 - {lang === 'PT' ? 'Designação recebida' : 'Received designation'} - R$ 1.720,00</option>
                      <option value="3012">3012 - {lang === 'PT' ? 'Concessão de registro e expedição de certificado' : 'Registration grant and certificate issuance'} - R$ 0,00</option>
                      <option value="3013">3013 - {lang === 'PT' ? 'Prorrogação' : 'Renewal'} - R$ 1.000,00</option>
                      <option value="3014">3014 - {lang === 'PT' ? 'Designação recebida, concessão de registro e certificado' : 'Received designation, registration grant and certificate'} - R$ 1.720,00</option>
                    </optgroup>
                  </select>
                </div>

                {/* Service Description */}
                {selectedService && (
                  <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700">
                    <div className="flex items-start space-x-3">
                      <Info className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-yellow-500 mb-2">
                          {lang === 'PT' ? 'Detalhes do Serviço' : 'Service Details'}
                        </h4>
                        <div 
                          className="text-sm text-neutral-300 leading-relaxed mb-3"
                          dangerouslySetInnerHTML={{
                            __html: getServiceDescription(selectedService, lang)?.[lang === 'PT' ? 'pt' : 'en']?.replace(/\*\*(.*?)\*\*/g, '<span class="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 font-semibold rounded text-xs mr-1">$1</span>')?.replace(/\n/g, '<br />') || ''
                          }}
                        />
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-semibold text-neutral-400">
                              {lang === 'PT' ? 'Valor:' : 'Price:'}
                            </span>
                            <span className="text-sm font-bold text-green-400">
                              {getServiceDescription(selectedService, lang)?.price}
                            </span>
                          </div>
                          {getServiceDescription(selectedService, lang)?.discount && (
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-semibold text-neutral-400">
                                {lang === 'PT' ? 'c/ desconto:' : 'w/ discount:'}
                              </span>
                              <span className="text-sm font-bold text-blue-400">
                                {getServiceDescription(selectedService, lang)?.discount}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Resumo da Contratação */}
                {selectedService && (
                  <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 md:p-8 border-2 border-yellow-500/30">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-black" />
                      </div>
                      <h3 className="text-xl font-black uppercase text-white">
                        {lang === 'PT' ? 'Resumo da Contratação' : 'Contract Summary'}
                      </h3>
                    </div>

                    {/* Valores */}
                    <div className="space-y-4 mb-6">
                      {/* Taxa INPI */}
                      <div className="bg-neutral-800/50 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-sm font-semibold text-neutral-300 mb-1">
                              {lang === 'PT' ? 'Taxa INPI (Serviço Selecionado)' : 'INPI Fee (Selected Service)'}
                            </h4>
                            <p className="text-xs text-neutral-500">
                              {lang === 'PT' ? 'Código ' : 'Code '}{selectedService}
                            </p>
                          </div>
                          <div className="text-right">
                            {getServiceDescription(selectedService, lang)?.discount ? (
                              <>
                                <p className="text-sm text-neutral-500 line-through">
                                  {getServiceDescription(selectedService, lang)?.price}
                                </p>
                                <p className="text-lg font-bold text-blue-400">
                                  {getServiceDescription(selectedService, lang)?.discount}
                                </p>
                                <p className="text-xs text-blue-400">
                                  {lang === 'PT' ? '(com desconto aplicável)' : '(with applicable discount)'}
                                </p>
                              </>
                            ) : (
                              <p className="text-lg font-bold text-green-400">
                                {getServiceDescription(selectedService, lang)?.price}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Honorários */}
                      <div className="bg-neutral-800/50 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-sm font-semibold text-neutral-300 mb-1">
                              {lang === 'PT' ? 'Honorários Profissionais' : 'Professional Fees'}
                            </h4>
                            <p className="text-xs text-neutral-500">
                              {lang === 'PT' ? 'Assessoria completa no processo' : 'Complete process advisory'}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-yellow-400">
                              R$ 780,00
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-bold text-white">
                            {lang === 'PT' ? 'TOTAL ESTIMADO' : 'ESTIMATED TOTAL'}
                          </h4>
                          <p className="text-2xl font-black text-yellow-400">
                            {(() => {
                              const serviceData = getServiceDescription(selectedService, lang);
                              const inpiValue = serviceData?.discount 
                                ? parseFloat(serviceData.discount.replace('R$ ', '').replace('.', '').replace(',', '.'))
                                : parseFloat((serviceData?.price || 'R$ 0,00').replace('R$ ', '').replace('.', '').replace(',', '.'));
                              const honorarios = 780;
                              const total = inpiValue + honorarios;
                              return `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                            })()}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Formas de Pagamento */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                        {lang === 'PT' ? 'Formas de Pagamento' : 'Payment Methods'}
                      </h4>
                      
                      {/* Taxa INPI - GRU */}
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <AlertCircle className="w-4 h-4 text-red-400" />
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-red-400 mb-1">
                              {lang === 'PT' ? 'Taxa INPI' : 'INPI Fee'}
                            </h5>
                            <p className="text-xs text-neutral-300 leading-relaxed">
                              {lang === 'PT' 
                                ? 'O pagamento da taxa INPI deve ser realizado pelo cliente diretamente via GRU (Guia de Recolhimento da União). Enviaremos as instruções e o boleto GRU após a confirmação do pedido.'
                                : 'The INPI fee must be paid by the client directly via GRU (Federal Collection Guide). We will send the instructions and GRU slip after order confirmation.'}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Honorários - Múltiplas opções */}
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-sm font-semibold text-green-400 mb-2">
                              {lang === 'PT' ? 'Honorários Profissionais (R$ 780,00)' : 'Professional Fees (R$ 780.00)'}
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              <div className="bg-neutral-900/30 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 text-center hover:bg-neutral-900/40 hover:border-green-500/50 transition-all duration-300">
                                <div className="flex justify-center mb-3">
                                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                                    <QrCode className="w-6 h-6 text-green-400" />
                                  </div>
                                </div>
                                <p className="text-sm font-semibold text-white mb-1">PIX</p>
                                <p className="text-xs text-neutral-400">
                                  {lang === 'PT' ? 'À vista' : 'Instant'}
                                </p>
                              </div>
                              <div className="bg-neutral-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 text-center hover:bg-neutral-900/40 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex justify-center mb-3">
                                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                                    <Receipt className="w-6 h-6 text-blue-400" />
                                  </div>
                                </div>
                                <p className="text-sm font-semibold text-white mb-1">
                                  {lang === 'PT' ? 'Boleto' : 'Bank Slip'}
                                </p>
                                <p className="text-xs text-neutral-400">
                                  {lang === 'PT' ? 'À vista' : 'Instant'}
                                </p>
                              </div>
                              <div className="bg-neutral-900/30 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-4 text-center hover:bg-neutral-900/40 hover:border-yellow-500/50 transition-all duration-300">
                                <div className="flex justify-center mb-3">
                                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                                    <CreditCard className="w-6 h-6 text-yellow-400" />
                                  </div>
                                </div>
                                <p className="text-sm font-semibold text-white mb-1">
                                  {lang === 'PT' ? 'Cartão' : 'Card'}
                                </p>
                                <p className="text-xs text-neutral-400">
                                  {lang === 'PT' ? 'Até 5x sem juros' : 'Up to 5x interest-free'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Nota */}
                    <div className="mt-4 pt-4 border-t border-neutral-800">
                      <p className="text-[10px] text-neutral-500 leading-relaxed">
                        {lang === 'PT' 
                          ? '* Os valores com desconto aplicam-se a: MEI, ME, EPP, ICTs, entidades sem fins lucrativos (50%) e pessoas físicas hipossuficientes ou PcD (100%). Verifique sua elegibilidade.'
                          : '* Discounted values apply to: Individual microentrepreneurs, micro/small businesses, ICTs, non-profits (50%) and low-income individuals or people with disabilities (100%). Check your eligibility.'}
                      </p>
                    </div>
                  </div>
                )}

                {/* Campos Pessoa Física */}
                {formData.tipoPessoa === 'fisica' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <label className="text-lg font-semibold text-white">
                        {lang === 'PT' ? 'CPF' : 'CPF'} *
                      </label>
                      <input
                        type="text"
                        value={formData.cpf}
                        onChange={(e) => handleInputChange('cpf', e.target.value)}
                        className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-yellow-500 focus:outline-none transition-colors"
                        placeholder="000.000.000-00"
                        required
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-lg font-semibold text-white">
                        {lang === 'PT' ? 'RG' : 'RG'} *
                      </label>
                      <input
                        type="text"
                        value={formData.rg}
                        onChange={(e) => handleInputChange('rg', e.target.value)}
                        className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-yellow-500 focus:outline-none transition-colors"
                        placeholder="Número do RG"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Campos Pessoa Jurídica */}
                {formData.tipoPessoa === 'juridica' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <label className="text-lg font-semibold text-white">
                        {lang === 'PT' ? 'CNPJ' : 'CNPJ'} *
                      </label>
                      <input
                        type="text"
                        value={formData.cnpj}
                        onChange={(e) => handleInputChange('cnpj', e.target.value)}
                        className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-yellow-500 focus:outline-none transition-colors"
                        placeholder="00.000.000/0000-00"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <label className="text-lg font-semibold text-white">
                          {lang === 'PT' ? 'RG do Administrador' : 'Administrator RG'} *
                        </label>
                        <input
                          type="text"
                          value={formData.rgAdministrador}
                          onChange={(e) => handleInputChange('rgAdministrador', e.target.value)}
                          className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-yellow-500 focus:outline-none transition-colors"
                          placeholder="RG do administrador"
                          required
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-lg font-semibold text-white">
                          {lang === 'PT' ? 'CPF do Administrador' : 'Administrator CPF'} *
                        </label>
                        <input
                          type="text"
                          value={formData.cpfAdministrador}
                          onChange={(e) => handleInputChange('cpfAdministrador', e.target.value)}
                          className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:border-yellow-500 focus:outline-none transition-colors"
                          placeholder="CPF do administrador"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Upload */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-white">
                    {lang === 'PT' ? 'Logomarca' : 'Logo'} ({lang === 'PT' ? 'opcional' : 'optional'})
                  </label>
                  
                  {/* Template Preview */}
                  <div className="bg-neutral-800 rounded-lg p-4">
                    <div className="text-center">
                      <h4 className="text-sm font-medium text-yellow-500 mb-3">
                        {lang === 'PT' ? 'Template de Referência' : 'Reference Template'}
                      </h4>
                      <div className="bg-neutral-900 rounded-lg p-4">
                        <div className="w-16 h-16 mx-auto mb-3 bg-yellow-500/20 rounded-full flex items-center justify-center">
                          <Image className="w-8 h-8 text-yellow-500" />
                        </div>
                        <p className="text-sm text-neutral-300 mb-2">
                          {lang === 'PT' ? 'Template de Logotipo' : 'Logo Template'}
                        </p>
                        <p className="text-xs text-neutral-400 mb-4">
                          {lang === 'PT' 
                            ? 'Use este template como referência para o tamanho e proporção ideais do seu logotipo.'
                            : 'Use this template as reference for the ideal size and proportions of your logo.'}
                        </p>
                        <a
                          href="https://www.canva.com/design/DAHASQkPDIg/HADT3C_c-KyzztHV_7rtJw/edit?utm_content=DAHASQkPDIg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-black text-sm font-medium rounded-lg hover:bg-yellow-400 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>{lang === 'PT' ? 'Abrir Template no Canva' : 'Open Template in Canva'}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                      isDragging 
                        ? 'border-yellow-500 bg-yellow-500/5' 
                        : 'border-neutral-700'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      id="logo-upload"
                      accept=".png,.jpg,.jpeg,.svg,.ai,.eps"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleInputChange('logoFile', file);
                        }
                      }}
                    />
                    
                    {formData.logoFile ? (
                      <div className="space-y-4">
                        <div className="flex justify-center mb-4">
                          <div className="relative">
                            <FileCheck className="w-16 h-16 text-green-500" />
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <Image className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                        <p className="text-green-400 font-medium text-center">
                          {lang === 'PT' ? 'Arquivo selecionado:' : 'File selected:'}
                        </p>
                        <div className="bg-neutral-800 rounded-lg p-3 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <File className="w-4 h-4 text-neutral-400" />
                              <p className="text-neutral-300 text-sm font-medium truncate max-w-[200px]">
                                {formData.logoFile.name}
                              </p>
                            </div>
                            <button 
                              type="button"
                              onClick={() => handleInputChange('logoFile', null)}
                              className="p-1 hover:bg-neutral-700 rounded transition-colors"
                            >
                              <X className="w-4 h-4 text-red-400" />
                            </button>
                          </div>
                          <p className="text-neutral-500 text-xs">
                            {(formData.logoFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex justify-center mb-4">
                          <div className={`p-4 rounded-full transition-all ${
                            isDragging 
                              ? 'bg-yellow-500/20 border-2 border-yellow-500' 
                              : 'bg-neutral-800 border-2 border-neutral-700'
                          }`}>
                            <Upload className={`w-12 h-12 transition-colors ${
                              isDragging ? 'text-yellow-500' : 'text-neutral-400'
                            }`} />
                          </div>
                        </div>
                        <p className="text-neutral-400 mb-2 text-center">
                          {isDragging 
                            ? (lang === 'PT' ? 'Solte o arquivo aqui' : 'Drop file here')
                            : (lang === 'PT' ? 'Arraste o arquivo ou clique para selecionar' : 'Drag file or click to select')
                          }
                        </p>
                        <p className="text-sm text-neutral-500 text-center">
                          {lang === 'PT' ? 'Formatos: PNG, JPG, SVG, AI, EPS (máx 5MB)' : 'Formats: PNG, JPG, SVG, AI, EPS (max 5MB)'}
                        </p>
                        <button 
                          type="button"
                          onClick={() => document.getElementById('logo-upload')?.click()}
                          className="mx-auto flex items-center space-x-2 px-6 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-400 transition-colors"
                        >
                          <Upload className="w-4 h-4" />
                          <span>{lang === 'PT' ? 'Selecionar Arquivo' : 'Select File'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Termos */}
                <div className="space-y-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.aceitaTermos}
                      onChange={(e) => handleInputChange('aceitaTermos', e.target.checked)}
                      className="mt-1 w-5 h-5 text-yellow-500 bg-neutral-900 border-neutral-700 rounded focus:ring-yellow-500 focus:ring-2"
                      required
                    />
                    <span className="text-sm text-neutral-300">
                      {lang === 'PT'
                        ? 'Li e aceito os termos e condições, declarando que todas as informações fornecidas são verdadeiras.'
                        : 'I have read and accept the terms and conditions, declaring that all provided information is true.'}
                    </span>
                  </label>
                </div>

                {/* Botões */}
                <div className="flex justify-center space-x-4 pt-8">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitMessage('');
                      setSubmitStatus(null);
                      onClose();
                    }}
                    className="px-8 py-3 bg-neutral-700 text-white font-semibold rounded-lg hover:bg-neutral-600 transition-colors"
                  >
                    {lang === 'PT' ? 'Voltar' : 'Back'}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting 
                      ? (lang === 'PT' ? 'Enviando...' : 'Sending...')
                      : (lang === 'PT' ? 'Enviar Formulário' : 'Submit Form')
                    }
                  </button>
                </div>

                {/* Submit Message */}
                {submitMessage && (
                  <div className={`p-6 rounded-lg border-2 ${
                    submitStatus === 'success'
                      ? 'bg-green-500/10 border-green-500/20'
                      : 'bg-red-500/10 border-red-500/20'
                  }`}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {submitStatus === 'success' ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <AlertCircle className="w-6 h-6 text-red-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold mb-2 ${
                          submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {submitStatus === 'success' 
                            ? (lang === 'PT' ? 'Solicitação Enviada com Sucesso!' : 'Request Submitted Successfully!')
                            : (lang === 'PT' ? 'Erro na Envio' : 'Submission Error')
                          }
                        </h4>
                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {submitMessage}
                        </p>
                        
                        {submitStatus === 'success' && (
                          <div className="mt-4 p-4 bg-neutral-800 rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                              <Info className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm font-medium text-yellow-500">
                                {lang === 'PT' ? 'Próximos Passos:' : 'Next Steps:'}
                              </span>
                            </div>
                            <ul className="text-xs text-neutral-400 space-y-1">
                              <li>• {lang === 'PT' ? 'Análise inicial da sua solicitação (24-48h)' : 'Initial request review (24-48h)'}</li>
                              <li>• {lang === 'PT' ? 'Verificação de disponibilidade da marca' : 'Brand availability verification'}</li>
                              <li>• {lang === 'PT' ? 'Contato via e-mail com orientações' : 'Contact via email with instructions'}</li>
                              <li>• {lang === 'PT' ? 'Início do processo de registro' : 'Start of registration process'}</li>
                            </ul>
                          </div>
                        )}
                        
                        {submitStatus === 'error' && (
                          <div className="mt-4 p-4 bg-neutral-800 rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                              <Info className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm font-medium text-yellow-500">
                                {lang === 'PT' ? 'Verifique:' : 'Please check:'}
                              </span>
                            </div>
                            <ul className="text-xs text-neutral-400 space-y-1">
                              <li>• {lang === 'PT' ? 'Todos os campos obrigatórios (*)' : 'All required fields (*)'}</li>
                              <li>• {lang === 'PT' ? 'Validade do endereço de e-mail' : 'Email address validity'}</li>
                              <li>• {lang === 'PT' ? 'Documentos conforme tipo de pessoa' : 'Documents according to person type'}</li>
                              <li>• {lang === 'PT' ? 'Termos e condições aceitos' : 'Terms and conditions accepted'}</li>
                            </ul>
                          </div>
                        )}

                        {/* Botão para fechar mensagem */}
                        <div className="mt-4 flex justify-center">
                          <button
                            type="button"
                            onClick={() => {
                              setSubmitMessage('');
                              setSubmitStatus(null);
                            }}
                            className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-lg hover:bg-neutral-600 transition-colors"
                          >
                            {lang === 'PT' ? 'Fechar Mensagem' : 'Close Message'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </section>

          {/* Info Section */}
          <section className="space-y-8">
            <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-8">
                {lang === 'PT' ? 'Informações Importantes' : 'Important Information'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    {lang === 'PT' ? 'Documentos Necessários' : 'Required Documents'}
                  </h3>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• {lang === 'PT' ? 'CPF ou CNPJ' : 'CPF or CNPJ'}</li>
                    <li>• {lang === 'PT' ? 'Documento de identidade' : 'ID document'}</li>
                    <li>• {lang === 'PT' ? 'Comprovante de atividade' : 'Proof of activity'}</li>
                    <li>• {lang === 'PT' ? 'Logomarca em alta resolução' : 'High-resolution logo'}</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    {lang === 'PT' ? 'Processo' : 'Process'}
                  </h3>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• {lang === 'PT' ? 'Validade de 10 anos' : '10-year validity'}</li>
                    <li>• {lang === 'PT' ? 'Renovável' : 'Renewable'}</li>
                    <li>• {lang === 'PT' ? 'Proteção em todo território nacional' : 'National protection'}</li>
                    <li>• {lang === 'PT' ? 'Conforme Lei 9.279/96' : 'According to Law 9.279/96'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MarcasGuiasView;
