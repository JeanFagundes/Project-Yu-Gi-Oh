const express = require("express");

const app = express();

const conn = require("./db/conn");

// models
const cardsCacador = require("./models/CardsCacador");

// criação de cartas para o banco de Dados na primeira execução

// importar rotas
const cardRoutes = require("./routes/deckRoutes");
const authRoutes = require("./routes/authRoutes");

// importas controllers

// receber respostas do body
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// routes
app.use("/", cardRoutes);
app.use("/", authRoutes);

// app.get('/',MenuController.showMenu);

conn
 .sync()
  //.sync({ alter: true })
  // .sync({force: true})
  .then(() => {
    app.listen(3000);
    require('./helpers/adicionarCartasNoBD')
  })
  .catch((err) => console.log(err));