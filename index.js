const fs = require('fs');
const {json} = require('express/lib/response')
const { stringify } = require('querystring');
const express = require('express');

const app = express();

const conn = require('./db/conn');

//models
const User = require('./models/User')

//importar rotas
const cardRoutes = require('./routes/deckRoutes');
const menuRoutes = require('./routes/menuRoutes')
const authRoutes = require('./routes/authRoutes')

//importas controllers
const DeckController = require('./controllers/DeckController')
const MenuController = require('./controllers/MenuController')
const AuthController = require('./controllers/AuthController')

//receber respostas do body
app.use(express.urlencoded({
    extended:true,
}))
app.use(express.json())

//routes
app.use('/',cardRoutes);
app.use('/', authRoutes)

//app.get('/',MenuController.showMenu);

conn
.sync()
  //.sync({alter : true})
  //.sync({force: true})
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
