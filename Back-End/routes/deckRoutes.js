const express = require("express");

const router = express.Router();
const DeckController = require("../controllers/DeckController");

router.get("/decks", DeckController.getDecks);

module.exports = router;
