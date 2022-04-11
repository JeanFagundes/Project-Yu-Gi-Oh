const fs = require("fs");

const i = 1;
const j = 0;
const deckCacador = [];
let carta;

if (!fs.existsSync("decks")) {
  fs.mkdirSync("decks");
  fs.mkdirSync("decks/cacador");
  fs.mkdirSync("decks/mago");
}

criarCartasCacador(i, j);

// função para criar as cartas
async function arrayDeck(carta) {
  deckCacador.push(carta);

  return deckCacador;
}

async function criarCartasCacador(i, j) {
  while (i < 4) {
    carta = getCartaLacaioCacador(j);

    carta.tipo = "fera";
    carta.classe = "lacaio";
    carta.id = i;

    // console.log(carta)
    console.log(carta.id);

    deckCacador.push(carta);

    const converterParaString = JSON.stringify(carta);
    console.log(converterParaString);

    try {
      console.log("entrou");
      fs.appendFileSync("decks/cacador/arraydecartas.json", converterParaString.concat(","));
    } catch (error) {
      console.log("entrou no erro");
      console.log(error);
    }

    const path = `decks/cacador/${carta.nome}.json`;
    criarCarta(carta, path);

    const path2 = `decks/cacador/${carta.nome}2.json`;

    carta.id += 1;

    // deckCacador.push(carta)

    criarCarta(carta, path2);
    i += 2, j++;
  }

  j = 0;
}

function getCartaLacaioCacador(j) {
  const javaliPedratrusco = [{
    nome: "Javali Pedratrusco",
    mana: 1,
    ataque: 1,
    defesa: 1,
    classe: "Lacaio",
    tipo: "Fera",
    descricao: "Investida",
  }];

  const crocoliscoDoRio = [{
    nome: "Crocolisco Do Rio",
    mana: 2,
    ataque: 2,
    defesa: 3,
    classe: "Lacaio",
    tipo: "Fera",
    descricao: "",
  }];

  const raptorDinossangue = [{
    nome: "Raptor Dinossangue",
    mana: 2,
    ataque: 3,
    defesa: 2,
    classe: "Lacaio",
    tipo: "Fera",
    descricao: "",
  }];

  const cacadoraDoUrzal = [{
    nome: "Cacadora Do Urzal",
    mana: 3,
    ataque: 2,
    defesa: 3,
    classe: "Lacaio",
    tipo: "Neutro",
    descricao: "Evoque um javali 1/1",
  }];

  const carabineiroDeAltaforja = [{
    nome: "Carabineiro De Altaforja",
    mana: 3,
    ataque: 2,
    defesa: 2,
    classe: "Lacaio",
    tipo: "Neutro",
    descricao: "Cause 1 de dano",
  }];

  const liderDoRaide = [{
    nome: "Lider Do Raide",
    mana: 3,
    ataque: 2,
    defesa: 3,
    classe: "Lacaio",
    tipo: "Neutro",
    descricao: "Seus outros lacario ganha +1 de ataque",
  }];

  const patriarcaCostalva = [{
    nome: "Patriarca Costalva",
    mana: 3,
    ataque: 1,
    defesa: 4,
    classe: "Lacaio",
    tipo: "Fera",
    descricao: "",
  }];

  const mestreDeMatilha = [{
    nome: "Mestre De Matilha",
    mana: 4,
    ataque: 4,
    defesa: 3,
    classe: "Lacaio",
    tipo: "Neutro",
    descricao: "Concede +2/+2 a uma fera aliada",
  }];

  const mordeliscaDoOasis = [{
    nome: "Mordelisca Do Oasis",
    mana: 4,
    ataque: 2,
    defesa: 7,
    classe: "Lacaio",
    tipo: "Fera",
    descricao: "",
  }];

  const comandoLancatroz = [{
    nome: "Comando Lancatroz",
    mana: 5,
    ataque: 4,
    defesa: 2,
    classe: "Lacaio",
    tipo: "Neutro",
    descricao: "cause 2 dano",
  }];

  const caoMagna = [{
    nome: "Cao Magna",
    mana: 7,
    ataque: 9,
    defesa: 5,
    classe: "Lacaio",
    tipo: "Fera",
    descricao: "",
  }];

  const cartasLacaio = [javaliPedratrusco, crocoliscoDoRio,
    raptorDinossangue, cacadoraDoUrzal, carabineiroDeAltaforja, liderDoRaide, patriarcaCostalva,
    mestreDeMatilha, mordeliscaDoOasis, comandoLancatroz, caoMagna,
  ];

  return cartasLacaio[j];
}

function getCartaArcanaCacador(j) {
  const ferirPresa = [{
    nome: "Ferir Presa",
    mana: 1,
    ataque: "",
    defesa: "",
    classe: "Arcana",
    tipo: "",
    descricao: "Causa 1 de dano, ",
  }];
  const tiroArcano = [{
    nome: "Tiro Arcano",
    mana: 1,
    ataque: "",
    defesa: "",
    classe: "Arcana",
    tipo: "",
    descricao: "Cause 2 de dano",
  }];
  const tiroMultiplo = [{
    nome: "Tiro Multiplo",
    mana: 4,
    ataque: "",
    defesa: "",
    classe: "Arcana",
    tipo: "",
    descricao: "Cause 3 de dano a dois lacaios diferentes",
  }];

  const rastreamento = [{
    nome: "Rastreamento",
    mana: 2,
    ataque: "",
    defesa: "",
    classe: "Arcana",
    tipo: "",
    descricao: "Compre 2 cartas",
  }];

  const cartasArcana = [ferirPresa, rastreamento, tiroArcano, tiroMultiplo];

  return cartasArcana[j];
}

function criarCartarGuerreiro(i, j) {

}

function criarCarta(carta, path) {
  const converterParaString = JSON.stringify(carta);

  fs.writeFileSync(path, converterParaString);
}
