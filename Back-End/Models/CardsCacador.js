const {
  DataTypes,
} = require("sequelize");

const db = require("../db/conn");

const CardsCacador = db.define("CardsCacador", {

  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  mana: {
    type: DataTypes.INTEGER,
    require: true,
  },
  ataque: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  defesa: {
    type: DataTypes.INTEGER,
  },
  classe: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  efeito: {
    type: DataTypes.STRING,
  },
});

module.exports = CardsCacador;
