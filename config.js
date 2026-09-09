/* MARTIM — Painel de disponibilidade
   Configuração local. Este arquivo NÃO é sobrescrito quando o painel (index.html) é atualizado:
   tudo que estiver aqui vale sobre os padrões do painel. Apague uma linha para voltar ao padrão. */
window.MARTIM_CONFIG = {

  // fonte dos dados: URL do app da web do Apps Script (termina em /exec)
  arquivo: 'https://script.google.com/macros/s/AKfycbw1tM-C-xwrXolul-5A4lsgk3DlS4qdavubNF_ruRitz9SrjCQh-PF3Ke2kftTBwHqE/exec',

  // painel de LED com pixel pitch grosso (P2.5 ou mais): textos maiores e contorno mais grosso.
  // Com P1 não é necessário; deixe false para seguir o desenho exato do Figma.
  modoLed: false,

  // tema inicial: 'black' (fundo preto) ou 'off' (fundo creme). O botão no canto da tela troca e guarda a escolha no navegador.
  tema: 'black',

  // relê a fonte a cada N segundos
  recarregarCadaSeg: 15,

  // status da planilha que aparecem como "Disponível"; todos os outros aparecem como "Reservada"
  statusDisponivel: ['livre'],

  // vista de cada final (só precisa listar o que quiser mudar)
  vistas: {
    1:'Boulevard', 2:'Boulevard', 3:'Esquina Boulevard/The One', 4:'Esquina The One/Cassiano',
    5:'Cassiano', 6:'Cassiano', 7:'Cassiano', 8:'Cassiano', 9:'Esquina Cassiano/R. Acalmada',
    10:'Esquina R. Acalmada/Parque', 11:'Rua Acalmada', 12:'Esquina Acalmada/Parque',
    13:'Esquina Parque/Boulevard', 14:'Boulevard'
  },

  // nomes das áreas condominiais por andar
  areasComunsNomes: {
    7: 'Gourmet, Mirador Gourmet e Salas de reunião',
    2: 'Lounge, Salas Multiuso e Praça Cererê'
  },

  // fonte do projeto: coloque os arquivos na pasta fonts/ e descomente
  // fontes: [
  //   { peso: 400, arquivo: 'fonts/ArticulatCF-Regular.woff2' },
  //   { peso: 600, arquivo: 'fonts/ArticulatCF-DemiBold.woff2' },
  //   { peso: 800, arquivo: 'fonts/ArticulatCF-ExtraBold.woff2' },
  // ],
};
