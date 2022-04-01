const fs = require('fs');
let i = 1,
    j = 0

if (!fs.existsSync('decks')) {
    fs.mkdirSync('decks')
    fs.mkdirSync('decks/cacador')
    fs.mkdirSync('decks/mago')
}

criarCartasCacador(i , j)

//função para criar as cartas
function criarCartasCacador(i , j) {
    while (i < 23) {

        let carta = getCartaLacaioCacador(j)
    
        carta[0].tipo = 'fera'
        carta[0].classe = 'lacaio'
        carta[0].id = i
    
        let path = `decks/cacador/${carta[0].nome}.json`
        criarCarta(carta, path)
    
        let path2 = `decks/cacador/${carta[0].nome}2.json`
        carta[0].id = i + 1
    
        criarCarta(carta, path2)
        i += 2, j++
    }
    j=0
    while (i < 31) { 
        let carta = getCartaArcanaCacador(j)
    
        carta[0].tipo = ''
        carta[0].classe = 'Arcana'
        carta[0].id = i
    
        path = `decks/cacador/${carta[0].nome}.json`
        criarCarta(carta, path)
    
        path2 = `decks/cacador/${carta[0].nome}2.json`
        carta[0].id = i+1
        criarCarta(carta, path2)

        i += 2, j++
    }
    return
}

function getCartaLacaioCacador(j) {

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
        mestreDeMatilha, mordeliscaDoOasis, comandoLancatroz, caoMagna
    ]

    return cartasLacaio[j];

}

function getCartaArcanaCacador(j) {
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

    let cartasArcana = [ferirPresa, rastreamento, tiroArcano, tiroMultiplo]

    return cartasArcana[j];
    
}

function criarCartarGuerreiro(i , j ){

}

function criarCarta(carta, path) {

    let converterParaString = JSON.stringify(carta)

    fs.writeFileSync(path, converterParaString)

    // fs.writeFileSync(path2, converterParaString)

    return
}


// function checarCarta(carta, path) {


//     if(!fs.existsSync(`decks/cacador/${carta[0].nome}2.json`)){

//         path = `decks/cacador/${carta[0].nome}2.json`
//         carta[0].tipo = 'fera'
//         carta[0].classe = 'lacaio'

//     }

// return
// }