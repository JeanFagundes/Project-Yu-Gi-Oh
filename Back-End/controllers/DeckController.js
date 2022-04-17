const getDeck = require("../helpers/AdicionarDecksNoArray");

module.exports = class DeckController {
  static async getDecks(req, res) {
    const deckCacador = await getDeck.arrayCacador;
    const deckGuerreiro = await getDeck.arrayGuerreiro;

    return res.status(200).json({ deckCacador, deckGuerreiro });
  }
};
