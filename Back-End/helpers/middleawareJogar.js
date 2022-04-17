// middleware para o usuario decidir se vai jogar como anonimo ou criar uma container

const jwt = require("jsonwebtoken");
const modulosToken = require("./modulosToken");

module.exports = {

  async checkToken(req, res, next) {
    const params = req.params.nome;

    if (!req.headers.authorization && params === "criarConta") {
      return res.status(200).json({
        message: "redirecionar para criação de conta",
      });
    }

    const token = await modulosToken.getToken(req);

    // verificando se existe o token
    if (!token) {
      return res.status(200).json({
        message: "Login expirado, redirecionar para a pagina de login",
      });
    }
    // verificando se está correto e seguindo para a rota
    try {
      const verified = jwt.verify(token.authHeader, token.secret);
      req.user = verified;
      return next();
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        message: "token invalido",
      });
    }
  },
};
