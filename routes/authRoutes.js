const express = require('express');
const router = express.Router();
const AuthController = require("../controllers/AuthController")

//router.get('/' , DeckController.showCard)

//rota para registrar usuario
router.post('/register' , AuthController.registerUserPost)

router.post('/login' , AuthController.loginPost)


module.exports = router;