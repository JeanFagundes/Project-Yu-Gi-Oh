const {
    DataTypes
} = require('sequelize')

const db = require("../db/conn")

const User = db.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    vitoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    derrota: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }, 
}, {
    scopes: {
        withoutPassword: {
          attributes: { exclude: ['password'] },
        }
      }
});

module.exports = User;