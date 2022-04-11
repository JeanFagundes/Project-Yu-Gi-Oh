const express = require("express");

const app = express();

const conn = require("./db/conn");

// models

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
  // .sync({alter : true})
  // .sync({force: true})
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
