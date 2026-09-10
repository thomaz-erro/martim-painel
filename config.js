/* MARTIM — Painel de disponibilidade
   Configuração local. Este arquivo NÃO é sobrescrito quando o painel (index.html) é atualizado:
   tudo que estiver aqui vale sobre os padrões do painel. Apague uma linha para voltar ao padrão. */
window.MARTIM_CONFIG = {

  // fonte dos dados — Google Sheets API (leitura direta da aba DADOS)
  // 1. Cole a sua chave de API no lugar de COLE-A-CHAVE-AQUI (Google Cloud Console > Credenciais)
  // 2. A planilha precisa estar compartilhada como "Qualquer pessoa com o link: Leitor"
  arquivo: 'https://sheets.googleapis.com/v4/spreadsheets/19mFKxCQSPo4fzVdHsuoQQDaKjgLlv8FrdBJFqHuMPo8/values/DADOS?key=AIzaSyBQxgrArm3n6-DBFO_0N9bAse2DW1qwxwM',

  // alternativa anterior, via Apps Script (mais lenta, não precisa de chave):
  // arquivo: 'https://script.google.com/macros/s/AKfycbw1tM-C-xwrXolul-5A4lsgk3DlS4qdavubNF_ruRitz9SrjCQh-PF3Ke2kftTBwHqE/exec',

  // painel de LED com pixel pitch grosso (P2.5 ou mais): textos maiores e contorno mais grosso.
  // Com P1 não é necessário; deixe false para seguir o desenho exato do Figma.
  modoLed: false,

  // tema inicial: 'black' (fundo preto) ou 'off' (fundo creme). O botão no canto da tela troca e guarda a escolha no navegador.
  tema: 'black',

  // relê a fonte a cada N segundos (2 s é seguro com a Sheets API; com o Apps Script use 15)
  recarregarCadaSeg: 2,

  // status da planilha → como a sala aparece no painel:
  //   statusDisponivel → cor da tipologia; statusBloqueada → cinza "Bloqueada"; qualquer outro → amarelo "Vendida"
  statusDisponivel: ['livre'],
  statusBloqueada: ['bloqueada','bloqueado'],

  // vista de cada final (só precisa listar o que quiser mudar)
  vistas: {
    1:'Galeria', 2:'Galeria', 3:'Galeria/The One', 4:'The One/Cassiano',
    5:'Cassiano', 6:'Cassiano', 7:'Cassiano', 8:'Cassiano', 9:'Cassiano/R. Acalmada',
    10:'R. Acalmada/Parque', 11:'Rua Acalmada', 12:'Acalmada/Parque',
    13:'Parque/Galeria', 14:'Galeria'
  },

  // salas com floreira (asterisco no número). Deixe comentado para usar a lista padrão do painel.
  // salasComFloreira: [2401, 2403, 2404],

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
