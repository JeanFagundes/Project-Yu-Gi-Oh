const fs = require('fs');
let path = ''
let i = 0
let cont = false

let ferirPresa = [{
    id: 0,
    nome: 'Ferir Presa',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let javaliPedratrusco = [{
    id: 0,
    nome: 'Javali Pedratrusco',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let rastreamento = [{
    id: 0,
    nome: 'Rastreamento',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let tiroArcano = [{
    id: 0,
    nome: 'Tiro Arcano',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let crocoliscoDoRio = [{
    id: 0,
    nome: 'Crocolisco Do Rio',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let raptorDinossangue = [{
    id: 0,
    nome: 'Raptor Dinossangue',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let cacadoraDoUrzal = [{
    id: 0,
    nome: 'Cacadora Do Urzal',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let carabineiroDeAltaforja = [{
    id: 0,
    nome: 'Carabineiro De Altaforja',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let liderDoRaide = [{
    id: 0,
    nome: 'Lider Do Raide',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let patriarcaCostalva = [{
    id: 0,
    nome: 'Patriarca Costalva',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let mestreDeMatilha = [{
    id: 0,
    nome: 'Mestre De Matilha',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let mordeliscaDoOasis = [{
    id: 0,
    nome: 'Mordelisca Do Oasis',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let tiroMultiplo = [{
    id: 0,
    nome: 'Tiro Multiplo',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let comandoLancatroz = [{
    id: 0,
    nome: 'Comando Lancatroz',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let caoMagna = [{
    id: 0,
    nome: 'Cao Magna',
    mana: 0,
    ataque: 0,
    defesa: 0,
    classe: '',
    tipo: '',
    descricao: ''
}]

let cartasLacaio = [javaliPedratrusco, crocoliscoDoRio, 
raptorDinossangue, cacadoraDoUrzal, carabineiroDeAltaforja, liderDoRaide, patriarcaCostalva,
mestreDeMatilha, mordeliscaDoOasis, comandoLancatroz, caoMagna]

console.log(cartasLacaio)

let cartasArcana = [ferirPresa, rastreamento, tiroArcano, tiroMultiplo]

if (!fs.existsSync('decks')) {
    fs.mkdirSync('decks')
    fs.mkdirSync('decks/cacador')
    fs.mkdirSync('decks/mago')
}

 while(i < 11){

    let carta = cartasLacaio[i]

    carta[0].tipo = 'fera'
    carta[0].classe = 'lacaio'

    path = `decks/cacador/${carta[0].nome}.json`
    
     if (checarCarta(carta, path))

    console.log(i)

     i++
    
    }
     

async function checarCarta(carta, path) {
    
    criarConta(carta, path)

    if(!fs.existsSync(`decks/cacador/${carta[0].nome}2.json`)){

        path = `decks/cacador/${carta[0].nome}2.json`
        carta[0].tipo = 'fera'
        carta[0].classe = 'lacaio'

        criarConta(carta, path)
    }

return
}

function criarConta(carta, path) {
     
    let converterParaString = JSON.stringify(carta)

    fs.writeFileSync(path, converterParaString)

    return
}