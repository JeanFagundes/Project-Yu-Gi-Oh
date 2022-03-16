//const card = require('../decks/yugi')
const fs = require('fs')
const { json } = require('express/lib/response');
const { stringify } = require('querystring');

module.exports = class DeckController {
    
static showCard(req,res){

const data = fs.readFileSync(`decks/yugi/magoNegro.json`, 'utf-8')
const card = JSON.parse(data)

console.log(card)

res.json(card)
}

}