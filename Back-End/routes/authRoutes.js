const express = require("express");

const router = express.Router();
const AuthController = require("../controllers/AuthController");
const middlewares = require("../helpers/middlewares");

// router.get('/' , DeckController.showCard)

// rota para registrar usuario
router.post("/register", AuthController.registerUserPost);

router.post("/login", AuthController.loginPost);

router.get("/checkuser", AuthController.checkUser);

// params deve ser login ou senha ${{escolha do usuario}}
router.patch("/edit/:name", middlewares.checkToken, AuthController.editUser);

// rota para pegar o ranking de quem tem mais vitorias
router.get("/ranking", AuthController.ranking);

// rota para pegar as estatisticas do usuario

router.get("/myStatistics", middlewares.checkToken, AuthController.myStatistics);

router.get("/:id", AuthController.getUserById);
// rota para pegar id do usuario

module.exports = router;
