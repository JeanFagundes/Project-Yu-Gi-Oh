const User = require('../Models/User')
const fs = require('fs')


module.exports = class MenuController {

        static async showMenu(req, res) {

                const data = fs.readFileSync(`decks/yugi/magoNegro.json`, 'utf-8')
                const card = JSON.parse(data)

                console.log(card)

                res.send(card)
        }

}