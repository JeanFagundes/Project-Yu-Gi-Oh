// futuramente criar algumas validações para escolher o deck que o usuario selecionar

const CardsCacador = require("../Models/CardsCacador");
const CardsGuerreiro = require("../Models/CardsGuerreiro");

async function criarArrayDeckCacador() {
  // puxando do banco de dados o deck de cacador e alocando em um array
  const arrayCacador = [];
  const cartasCacador = await CardsCacador.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] }, raw: true,
  });
  // fazendo 2 'push' para ter 30 cartas no deck, sendo 2 cartas iguais
  cartasCacador.forEach((element) => {
    arrayCacador.push(element);
    arrayCacador.push(element);
  });

  return arrayCacador;
}

async function criarArrayDeckGuerreiro() {
  // puxando do banco de dados o deck de guerreiro e alocando em um array
  const arrayGuerreiro = [];
  const cartasGuerreiro = await CardsGuerreiro.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] }, raw: true,
  });
  // fazendo 2 'push' para ter 30 cartas no deck, sendo 2 cartas iguais
  cartasGuerreiro.forEach((element) => {
    arrayGuerreiro.push(element);
    arrayGuerreiro.push(element);
  });
  return arrayGuerreiro;
}

const arrayCacador = criarArrayDeckCacador();
const arrayGuerreiro = criarArrayDeckGuerreiro();

module.exports = {
  arrayCacador,
  arrayGuerreiro,
};
