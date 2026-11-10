// =====================================================================
// DADOS DA CLÍNICA — edite só este arquivo para cada cliente.
// Mantenha as aspas e as vírgulas. Campos vazios ("") somem do site.
// =====================================================================
window.DADOS = {
  // true = prévia de demonstração (faixa no topo). Mude para false quando o cliente fechar.
  previa: true,
  autorPrevia: "Fellipe Tereska",

  nome: "Clínica Bella Pele",
  slogan: "Estética facial e corporal no centro de Londrina",
  descricao: "Tratamentos faciais e corporais com avaliação individual, protocolos personalizados e um ambiente pensado para o seu conforto.",
  cidade: "Londrina",
  bairro: "Centro",
  endereco: "R. Exemplo, 123 - Centro, Londrina - PR",

  // Só números, com DDD. Ex.: "43999990000"
  whatsapp: "43999990000",
  telefoneExibicao: "(43) 99999-0000",
  instagram: "bellapele.londrina", // sem @
  horario: [
    "Segunda a sexta: 9h às 19h",
    "Sábado: 9h às 13h"
  ],

  // Avaliações reais do Google (copie do perfil). Deixe nota "" para esconder.
  google: { nota: "5,0", avaliacoes: 42 },

  // Cor principal (hex). Use uma cor da identidade da clínica.
  corPrimaria: "#9b4d64",

  // Fotos: deixe "" até o cliente mandar. Coloque os arquivos na pasta "fotos".
  fotos: {
    destaque: "",   // ex.: "fotos/recepcao.jpg"
    sobre: ""       // ex.: "fotos/profissional.jpg"
  },

  procedimentos: [
    { nome: "Limpeza de pele", texto: "Remove impurezas e cravos e prepara a pele para outros tratamentos." },
    { nome: "Harmonização facial", texto: "Procedimentos para realçar traços com naturalidade, após avaliação." },
    { nome: "Drenagem linfática", texto: "Massagem que estimula a circulação e ajuda a reduzir o inchaço." },
    { nome: "Peeling", texto: "Renovação da pele para manchas, textura e marcas de acne." },
    { nome: "Criolipólise", texto: "Tratamento corporal para gordura localizada, sem cortes." },
    { nome: "Depilação a laser", texto: "Redução dos pelos com sessões rápidas e acompanhamento." }
  ],

  diferenciais: [
    { titulo: "Avaliação individual", texto: "Cada protocolo começa com uma conversa sobre o que você busca." },
    { titulo: "Equipe qualificada", texto: "Profissionais habilitados e em atualização constante." },
    { titulo: "Ambiente acolhedor", texto: "Um espaço tranquilo, limpo e reservado." }
  ],

  sobre: {
    titulo: "Sobre a clínica",
    texto: "Aqui vai um texto curto sobre a história da clínica, quem atende e como é o atendimento. Peça ao cliente no onboarding.",
    // Responsável técnica: nome e registro no conselho (exigido para médicos e recomendado para todos)
    responsavel: "",   // ex.: "Dra. Ana Souza"
    registro: ""       // ex.: "CRBM 0000" / "CRM-PR 00000"
  },

  perguntas: [
    { p: "Como faço para agendar?", r: "Pelo WhatsApp, no botão desta página. Respondemos em horário comercial." },
    { p: "Preciso de avaliação antes do procedimento?", r: "Sim. A avaliação define o protocolo mais indicado para você." },
    { p: "Quais formas de pagamento vocês aceitam?", r: "Pix, cartão de crédito e débito." }
  ]
};
