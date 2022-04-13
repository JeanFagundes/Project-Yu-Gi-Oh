const CardsCacador = require("../Models/CardsCacador");

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

  const cartasLacaio = [javaliPedratrusco, crocoliscoDoRio,
    raptorDinossangue, cacadoraDoUrzal, carabineiroDeAltaforja, liderDoRaide, patriarcaCostalva,
    mestreDeMatilha, mordeliscaDoOasis, comandoLancatroz, caoMagna, ferirPresa,
    rastreamento, tiroArcano, tiroMultiplo];

  return cartasLacaio;
}

async function createDeckCacador() {
  const checkIfExistsCards = await CardsCacador.findOne({
    where: {
      id: 30,
    },
  });

  if (checkIfExistsCards) {
    return;
  }

  try {
    const cartasLacaios = getCartasCacador();
    CardsCacador.bulkCreate(cartasLacaios);
    CardsCacador.bulkCreate(cartasLacaios);
  } catch (err) {
    console.log(err.message);
  }
}
createDeckCacador();
