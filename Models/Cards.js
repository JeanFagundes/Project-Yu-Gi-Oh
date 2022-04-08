const {
    DataTypes
} = require('sequelize')

const db = require("../db/conn")

const Cards = db.define('Cards', {

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
    descricao: {
        type: DataTypes.STRING,
    },
},
);

module.exports = Cards;