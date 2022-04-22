const express = require("express");

const app = express();

const conn = require("./db/conn");

// models
require("./models/CardsCacador");
require("./models/CardsGuerreiro");

// importar rotas
const cardRoutes = require("./routes/deckRoutes");
const authRoutes = require("./routes/authRoutes");

// importas controllers
require("./controllers/AuthController");

// receber respostas do body
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// routes
app.use("/", cardRoutes);
app.use("/", authRoutes);

// app.get('/',MenuController.showMenu);

conn
  .sync()
  // .sync({ alter: true })
  // .sync({force: true})
  .then(() => {
    app.listen(3000);
    // criação de cartas para o banco de Dados na primeira execução
    require("./helpers/adicionarCartasNoBD");
  })
  .catch((err) => console.log(err));
