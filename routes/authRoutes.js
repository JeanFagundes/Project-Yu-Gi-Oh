const express = require('express');
const router = express.Router();
const AuthController = require("../controllers/AuthController")

//router.get('/' , DeckController.showCard)
router.post('/register' , AuthController.registerUserPost)



module.exports = router;