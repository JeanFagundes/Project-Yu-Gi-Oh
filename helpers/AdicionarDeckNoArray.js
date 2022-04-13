const CardsCacador = require("../Models/CardsCacador");

async function criarArrayDeckCacador() {
  const arrayCacador = [];
  const cartasCacador = await CardsCacador.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] }, raw: true,
  });

  cartasCacador.forEach((element) => {
    arrayCacador.push(element);
  });

  return console.log(arrayCacador);
}

criarArrayDeckCacador();
