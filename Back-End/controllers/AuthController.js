const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const modulosToken = require("../helpers/modulosToken");
const User = require("../Models/User");

module.exports = class UserController {
  static async registerUserPost(req, res) {
    const {
      email,
      login,
      password,
      confirmpassword,
    } = req.body;

    // validando se o usuario ja existe no Banco de dados
    const checkIfEmailExists = await User.findOne({
      where: {
        email,
      },
    });
    if (checkIfEmailExists) {
      return res.status(422).json({
        message: "Ja existe uma conta com esse email",
      });
    }

    // validando se o login ja está em uso
    const checkIfLoginExists = await User.findOne({
      where: {
        login,
      },
    });
    if (checkIfLoginExists) {
      return res.status(422).json({
        message: "Ja existe uma conta com esse login",
      });
    }

    // diversas validações dos campos de cadastro
    if (!validator.isEmail(email)) {
      return res.status(422).json({
        message: "Insira um email válido.",
      });
    }
    if (!validator.isLength(login, {
      min: 4,
      max: 12,
    })) {
      return res.status(422).json({
        message: "O login deve ter entre 4 a 12 caracteres",
      });
    }
    if (!validator.equals(password, confirmpassword)) {
      return res.status(422).json({
        message: "As senhas estão diferentes.",
      });
    }
    if (!validator.isLength(password, {
      min: 6,
      max: 15,
    })) {
      return res.status(422).json({
        message: "A senha deve conter entre 6 a 15 caracteres.",
      });
    }

    // criptografando a senha
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = {
      email,
      login,
      password: hashedPassword,
    };
    // tentando inserir o objeto no banco de dados.
    try {
      await User.create(user);

      return modulosToken.createUserToken(user, req, res);
    } catch (error) {
      return res.status(500).json({
        message: `Não foi possivel criar o usuario: ${error}`,
      });
    }
  }

  static async loginPost(req, res) {
    const {
      login,
      password,
    } = req.body;

    // procurar no banco de dados se o usuario existe
    const user = await User.findOne({
      where: {
        login,
      },
    });

    // se ele nao existir enviar uma mensagem de erro de login ou senha
    if (!user) {
      return res.status(422).json({
        message: "Usuario ou senha invalido",
      });
    }

    // verificando se o password bate com o hash no banco de dados
    const passwordMatch = bcrypt.compareSync(password, user.password);

    // se existir o usuario e a senha bater com o BD, logar com o usuario
    if (passwordMatch) {
      console.log("logado com sucesso.");
      return modulosToken.createUserToken(user, req, res);
    }
    // console.log(user , login)
    return res.status(422).json({
      message: "Usuario ou senha invalido",
    });
  }

  static async checkUser(req, res) {
    let currentUser;
    // verificando se o token veio pelo header
    if (req.headers.authorization) {
      // verificando se o token está correto
      const token = await modulosToken.getToken(req);
      const decoded = jwt.verify(token.authHeader, token.secret);

      // buscando o usuario no BD de acordo com o token informado,
      // Tambem exclui informação do password por meio de scope no model
      currentUser = await User.scope("withoutPassword").findByPk(decoded.id);
    } else {
      currentUser = null;
    }
    res.status(200).send(currentUser);
  }

  static async getUserById(req, res) {
    const { id } = req.params;
    const user = await User.scope("withoutPassword").findByPk(id);
    if (!user) {
      return res.status(422).json({
        message: "Usuario não encontrado",
      });
    }
    return res.status(200).json({
      user,
    });
  }

  static async editUser(req, res) {
    const edit = req.params.name;
    // buscar token do usuario
    const token = await modulosToken.getToken(req);

    // buscar o ID do usuario pelo Token
    const user = await modulosToken.getUserByToken(token);

    if (!user) {
      return res.status(422).json({
        message: "Usuario não encontrado",
      });
    }

    const {
      login,
      currentpassword,
      password,
      confirmpassword,
    } = req.body;

    // alterar login
    // se o parametro for para editar login
    if (edit === "login") {
      if (!validator.isLength(login, {
        min: 4,
        max: 12,
      })) {
        return res.status(422).json({
          message: "O login deve ter entre 4 a 12 caracteres",
        });
      }

      const checkIfLoginExists = await User.findOne({
        where: {
          login,
        },
      });
      if (checkIfLoginExists) {
        return res.status(422).json({
          message: "Ja existe uma conta com esse login",
        });
      }

      if (!validator.equals(password, confirmpassword)) {
        return res.status(422).json({
          message: "As senhas estão diferentes",
        });
      }

      const passwordMatch = bcrypt.compareSync(password, user.password);

      if (!passwordMatch) {
        return res.status(422).json({
          message: "Senha invalida, não podemos alterar o login",
        });
      }

      try {
        // atualizando no banco de dados o login

        await User.update({
          login,
        }, {
          where: {
            id: user.id,
          },
        });

        return res.status(200).json({
          message: "Login alterado com sucesso",
        });
      } catch (error) {
        return res.status(500).json({
          message: "Não foi possivel alterar o login",
          error: error.message,
        });
      }
    }

    // alterar senha
    if (edit === "password") {
      // verificando se a senha atual esta correta
      const currentPasswordMatch = bcrypt.compareSync(currentpassword, user.password);

      if (!currentPasswordMatch) {
        return res.status(422).json({
          message: "Senha atual incorreta",
        });
      }

      if (!validator.isLength(password, {
        min: 6,
        max: 15,
      })) {
        return res.status(422).json({
          message: "A senha deve conter entre 6 a 15 caracteres.",
        });
      }

      if (!validator.equals(password, confirmpassword)) {
        return res.status(422).json({
          message: "As senhas para alterar estão incorretas",
        });
      }

      // verificando se a senha para alterar está igual a atual
      if (bcrypt.compareSync(password, user.password)) {
        return res.status(422).json({
          message: "Senha para alterar está igual a atual, insira outra senha",
        });
      }

      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      try {
        // atualizando no banco de dados a senha
        await User.update({
          password: hashedPassword,
        }, {
          where: {
            id: user.id,
          },
        });

        return res.status(200).json({
          message: "Senha alterada com sucesso",
        });
      } catch (error) {
        return res.status(500).json({
          message: "Não foi possivel alterar a senha",
          error: error.message,
        });
      }
    }
    return res.status(200);
  }

  static async myStatistics(req, res) {
    // buscar token do usuario
    const token = await modulosToken.getToken(req);

    // buscar o ID do usuario pelo Token
    const user = await modulosToken.getUserByToken(token);

    // eslint-disable-next-line no-const-assign
    const user2 = await User.findOne({
      where: {
        id: user.id,
      },
      attributes: ["login", "vitoria", "derrota"],
    });

    res.status(200).json(user2);
  }

  static async ranking(req, res) {
    const rank = await User.findAll({
      attributes: ["login", "vitoria", "derrota"],
    }, {
      order: ["vitoria", "DESC"],
    });
    res.status(200).json(rank);
  }
};
