const fs = require('fs');
const {json} = require('express/lib/response')
const { stringify } = require('querystring');
const express = require('express');

const app = express();

//importar rotas
const cardRoutes = require('./routes/cardRoutes');

//importas controllers
const DeckController = require('./controllers/DeckController')

//receber respostas do body
app.use(express.urlencoded({
    extended:true,
}))
app.use(express.json())



//routes
app.use('/',cardRoutes);

app.get('/',DeckController.showCard);




app.listen(3000, () =>{
    console.log('Rodando na porta 3000')
})
