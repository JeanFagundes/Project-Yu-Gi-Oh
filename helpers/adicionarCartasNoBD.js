// classe criada para adicionar cartas de todos os decks no banco de dados
// para quem for iniciar o programa pela primeira vez

const CardsCacador = require("../Models/CardsCacador");
const CardsGuerreiro = require("../Models/CardsGuerreiro");

function getCartasCacador() {
  const javaliPedratrusco = {
    nome: "Javali Pedratrusco",
    mana: 1,
    ataque: 1,
    defesa: 1,
    classe: "Lacaio",
    tipo: "Fera",
    efeito: "Investida",
  };

  const crocoliscoDoRio = {
    nome: "Crocolisco Do Rio",
    mana: 2,
    ataque: 2,
    defesa: 3,
    classe: "Lacaio",
    tipo: "Fera",
    efeito: null,
  };

  const raptorDinossangue = {
    nome: "Raptor Dinossangue",
    mana: 2,
    ataque: 3,
    defesa: 2,
    classe: "Lacaio",
    tipo: "Fera",
    efeito: null,
  };

  const cacadoraDoUrzal = {
    nome: "Cacadora Do Urzal",
    mana: 3,
    ataque: 2,
    defesa: 3,
    classe: "Lacaio",
    tipo: "Neutro",
    efeito: "Evoque um javali 1/1",
  };

  const carabineiroDeAltaforja = {
    nome: "Carabineiro De Altaforja",
    mana: 3,
    ataque: 2,
    defesa: 2,
    classe: "Lacaio",
    tipo: "Neutro",
    efeito: "Cause 1 de dano",
  };

  const liderDoRaide = {
    nome: "Lider Do Raide",
    mana: 3,
    ataque: 2,
    defesa: 3,
    classe: "Lacaio",
    tipo: "Neutro",
    efeito: "Seus outros lacario ganha +1 de ataque",
  };

  const patriarcaCostalva = {
    nome: "Patriarca Costalva",
    mana: 3,
    ataque: 1,
    defesa: 4,
    classe: "Lacaio",
    tipo: "Fera",
    efeito: null,
  };

  const mestreDeMatilha = {
    nome: "Mestre De Matilha",
    mana: 4,
    ataque: 4,
    defesa: 3,
    classe: "Lacaio",
    tipo: "Neutro",
    efeito: "Concede +2/+2 a uma fera aliada",
  };

  const mordeliscaDoOasis = {
    nome: "Mordelisca Do Oasis",
    mana: 4,
    ataque: 2,
    defesa: 7,
    classe: "Lacaio",
    tipo: "Fera",
    efeito: null,
  };

  const comandoLancatroz = {
    nome: "Comando Lancatroz",
    mana: 5,
    ataque: 4,
    defesa: 2,
    classe: "Lacaio",
    tipo: "Neutro",
    efeito: "cause 2 dano",
  };

  const caoMagna = {
    nome: "Cao Magna",
    mana: 7,
    ataque: 9,
    defesa: 5,
    classe: "Lacaio",
    tipo: "Fera",
    efeito: null,
  };

  const ferirPresa = {
    nome: "Ferir Presa",
    mana: 1,
    ataque: null,
    defesa: null,
    classe: "Arcana",
    tipo: "Arcana",
    efeito: "Causa 1 de dano, ",
  };
  const tiroArcano = {
    nome: "Tiro Arcano",
    mana: 1,
    ataque: null,
    defesa: null,
    classe: "Arcana",
    tipo: "Arcana",
    efeito: "Cause 2 de dano",
  };
  const tiroMultiplo = {
    nome: "Tiro Multiplo",
    mana: 4,
    ataque: null,
    defesa: null,
    classe: "Arcana",
    tipo: "Arcana",
    efeito: "Cause 3 de dano a dois lacaios diferentes",
  };

  const rastreamento = {
    nome: "Rastreamento",
    mana: 2,
    ataque: null,
    defesa: null,
    classe: "Arcana",
    tipo: "Arcana",
    efeito: "Compre 2 cartas",
  };

  const deckCacador = [
    javaliPedratrusco,
    crocoliscoDoRio,
    raptorDinossangue,
    cacadoraDoUrzal,
    carabineiroDeAltaforja,
    liderDoRaide,
    patriarcaCostalva,
    mestreDeMatilha,
    mordeliscaDoOasis,
    comandoLancatroz,
    caoMagna,
    ferirPresa,
    rastreamento,
    tiroArcano,
    tiroMultiplo,
  ];

  return deckCacador;
}

function getCartasGuerreiro() {
  const executar = {
    nome: "Executar",
    mana: 1,
    ataque: null,
    defesa: null,
    classe: "Arcana",
    tipo: "Arcana",
    efeito: "Destrua um lacaio inimigo que tenha recebido dano",
  };
  const gnomoLeproso = {
    nome: "Gnomo Leproso",
    mana: 1,
    ataque: 2,
    defesa: 1,
    classe: "Lacaio",
    tipo: "Neutro",
    efeito: "Cause 2 de dano ao herói inimigo",
  };
  const guerrobo = {
    nome: "Guerrobo",
    mana: 1,
    ataque: 1,
    defesa: 3,
    classe: "Lacaio",
    tipo: "Mecanoide",
    efeito: "Ganha +1 de ataque se estiver ferido",
  };
  const redemoinho = {
    nome: "Redemoinho",
    mana: 1,
    ataque: null,
    defesa: null,
    classe: "Arcana",
    tipo: "Arcana",
    efeito: "Cause 1 de dano a todos os lacaios em campo",
  };
  const alvoroco = {
    nome: "alvoroço",
    mana: 2,
    ataque: null,
    defesa: null,
    classe: "Arcana",
    tipo: "Arcana",
    efeito: "Concede +3/+3 a um lacaio ferido",
  };
  const cutilada = {
    nome: "Cutilada",
    mana: 2,
    ataque: null,
    defesa: null,
    classe: "Arcana",
    tipo: "Arcana",
    efeito: "Cause 2 de dano a 2 lacaios inimigos",
  };
  const engenheiraNovata = {
    nome: "Engenheira Novata",
    mana: 2,
    ataque: 1,
    defesa: 1,
    classe: "Lacaio",
    tipo: "Neutro",
    efeito: "Compre 1 carta",
  };
  const cavalgaLobo = {
    nome: "Cavalga Lobo",
    mana: 3,
    ataque: 3,
    defesa: 1,
    classe: "Lacaio",
    tipo: "Neutro",
    efeito: "Investida",
  };
  const clerigaDoSolPartido = {
    nome: "Cleriga Do Sol Partido",
    mana: 3,
    ataque: 3,
    defesa: 2,
    classe: "Lacaio",
    tipo: "Neutro",
    efeito: "Conceda +1/+1 a um lacaio aliado",
  };
  const investida = {
    nome: "Investida",
    mana: 3,
    ataque: null,
    defesa: null,
    classe: "Arcana",
    tipo: "Arcana",
    efeito: "Concede +2 de ataque e investida a um lacaio",
  };
  const levantarEscudo = {
    nome: "Levantar Escudo",
    mana: 3,
    ataque: null,
    defesa: null,
    classe: "Arcana",
    tipo: "Arcana",
    efeito: "Recebe 5 de vida, compre uma carta",
  };
  const liderDoRaida = {
    nome: "Lider Do Raida",
    mana: 3,
    ataque: 2,
    defesa: 3,
    classe: "Lacaio",
    tipo: "Neutro",
    efeito: "Seus lacaios ganham 1 de ataque",
  };
  const eliteKorKron = {
    nome: "Elite Kor'Kron",
    mana: 4,
    ataque: 4,
    defesa: 3,
    classe: "Lacaio",
    tipo: "Neutro",
    efeito: "Investida",
  };
  const golpeMortal = {
    nome: "Golpe Mortal",
    mana: 4,
    ataque: null,
    defesa: null,
    classe: "Arcana",
    tipo: "Arcana",
    efeito: "Cause 4 de dano. Se seu herói tiver menos de 12 de vida cause 6 de dano",
  };
  const damaEscudeira = {
    nome: "Dama Escudeira",
    mana: 5,
    ataque: 5,
    defesa: 5,
    classe: "Lacaio",
    tipo: "Neutro",
    efeito: "Receba 5 de vida",
  };

  const deckGuerreiro = [
    damaEscudeira,
    executar,
    gnomoLeproso,
    guerrobo,
    redemoinho,
    alvoroco,
    cutilada,
    engenheiraNovata,
    cavalgaLobo,
    clerigaDoSolPartido,
    investida,
    levantarEscudo,
    liderDoRaida,
    eliteKorKron,
    golpeMortal,
  ];

  return deckGuerreiro;
}

async function createDecks() {
  // Adicionando no BD as cartas caso não tenha
  const checkIfExistsCardsCacador = await CardsCacador.findByPk(1);
  const checkIfExistsCardsGuerreiro = await CardsGuerreiro.findByPk(1);

  if (checkIfExistsCardsCacador !== null && checkIfExistsCardsGuerreiro !== null) {
    return;
  }

  try {
    // criar deck de Cacador com as cartas duplicadas
    const deckCacador = getCartasCacador();
    await CardsCacador.bulkCreate(deckCacador);

    // criar deck de guerreiro com as cartas duplicadas
    const deckGuerreiro = getCartasGuerreiro();
    await CardsGuerreiro.bulkCreate(deckGuerreiro);
  } catch (err) {
    console.log(err.message);
  }
}

createDecks();
