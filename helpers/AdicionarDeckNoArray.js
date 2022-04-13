const CardsCacador = require("../Models/CardsCacador");

async function criarArrayDeckCacador() {
  const arrayCacador = [];
  const cartasCacador = await CardsCacador.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] }, raw: true,
  });

  for (let i = 0; i < cartasCacador.length; i += 1) {
    arrayCacador.push(cartasCacador[i]);
  }

  return console.log(cartasCacador);
}
criarArrayDeckCacador();
