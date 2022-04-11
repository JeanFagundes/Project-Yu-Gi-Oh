const jwt = require("jsonwebtoken");
const User = require("../Models/User");

// palavra chave para criar o token
const secret = "my_secret";

module.exports = {

  async createUserToken(user, req, res) {
    const token = jwt.sign({
      login: user.login,
      id: user.id,
    }, secret, {
      expiresIn: 86400,
    });

    res.status(200).json({
      message: "token criado para o usuario",
      token,
      userId: user.id,
    });
  },

  async getToken(req) {
    const authHeader = req.headers.authorization;
    const data = {
      authHeader,
      secret,
    };
    return data;
  },

  async getUserByToken(res, token) {
    // se nao for enviado token
    if (!token) {
      return res.status(401).json({ message: "Acesso negado!" });
    }

    const decoded = jwt.verify(token.authHeader, token.secret);

    const userId = decoded.id;

    console.log(token.authHeader, " + ", token.secret, " + ", userId);

    const user = await User.findByPk(userId);

    return user;
  },
};
