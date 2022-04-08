const fs = require('fs');

let i = 1,
    j = 0
let deckCacador = []
let carta;


if (!fs.existsSync('decks')) {
    fs.mkdirSync('decks')
    fs.mkdirSync('decks/cacador')
    fs.mkdirSync('decks/mago')
}

criarCartasCacador(i, j)

//função para criar as cartas
async function arrayDeck(carta) {

    deckCacador.push(carta)

    return deckCacador
}



async function criarCartasCacador(i, j) {

    while (i < 4) {

        carta = getCartaLacaioCacador(j)

        
        carta.tipo = "fera"
        carta.classe = 'lacaio'
        carta.id = i
        
        //console.log(carta)
        console.log(carta.id)

        deckCacador.push(carta)

        let converterParaString = JSON.stringify(carta)
        console.log(converterParaString)
        
             try {
                 console.log('entrou')
                fs.appendFileSync('decks/cacador/arraydecartas.json', converterParaString.concat(','))         
             } catch (error) {
                 console.log('entrou no erro')
                 console.log(error)
             }   
        
                                 
        let path = `decks/cacador/${carta.nome}.json`
        criarCarta(carta, path)
        
        let path2 = `decks/cacador/${carta.nome}2.json`
        
        carta.id +=1

        //deckCacador.push(carta)

        criarCarta(carta, path2)
        i += 2, j++

    }

    j = 0

}

function getCartaLacaioCacador(j) {

    let javaliPedratrusco = [{
        nome: 'Javali Pedratrusco',
        mana: 1,
        ataque: 1,
        defesa: 1,
        classe: 'Lacaio',
        tipo: 'Fera',
        descricao: 'Investida'
    }]

    let crocoliscoDoRio = [{
        nome: 'Crocolisco Do Rio',
        mana: 2,
        ataque: 2,
        defesa: 3,
        classe: 'Lacaio',
        tipo: 'Fera',
        descricao: ''
    }]

    let raptorDinossangue = [{
        nome: 'Raptor Dinossangue',
        mana: 2,
        ataque: 3,
        defesa: 2,
        classe: 'Lacaio',
        tipo: 'Fera',
        descricao: ''
    }]

    let cacadoraDoUrzal = [{
        nome: 'Cacadora Do Urzal',
        mana: 3,
        ataque: 2,
        defesa: 3,
        classe: 'Lacaio',
        tipo: 'Neutro',
        descricao: 'Evoque um javali 1/1'
    }]

    let carabineiroDeAltaforja = [{
        nome: 'Carabineiro De Altaforja',
        mana: 3,
        ataque: 2,
        defesa: 2,
        classe: 'Lacaio',
        tipo: 'Neutro',
        descricao: 'Cause 1 de dano'
    }]

    let liderDoRaide = [{
        nome: 'Lider Do Raide',
        mana: 3,
        ataque: 2,
        defesa: 3,
        classe: 'Lacaio',
        tipo: 'Neutro',
        descricao: 'Seus outros lacario ganha +1 de ataque'
    }]

    let patriarcaCostalva = [{
        nome: 'Patriarca Costalva',
        mana: 3,
        ataque: 1,
        defesa: 4,
        classe: 'Lacaio',
        tipo: 'Fera',
        descricao: ''
    }]

    let mestreDeMatilha = [{
        nome: 'Mestre De Matilha',
        mana: 4,
        ataque: 4,
        defesa: 3,
        classe: 'Lacaio',
        tipo: 'Neutro',
        descricao: 'Concede +2/+2 a uma fera aliada'
    }]

    let mordeliscaDoOasis = [{
        nome: 'Mordelisca Do Oasis',
        mana: 4,
        ataque: 2,
        defesa: 7,
        classe: 'Lacaio',
        tipo: 'Fera',
        descricao: ''
    }]

    let comandoLancatroz = [{
        nome: 'Comando Lancatroz',
        mana: 5,
        ataque: 4,
        defesa: 2,
        classe: 'Lacaio',
        tipo: 'Neutro',
        descricao: 'cause 2 dano'
    }]

    let caoMagna = [{
        nome: 'Cao Magna',
        mana: 7,
        ataque: 9,
        defesa: 5,
        classe: 'Lacaio',
        tipo: 'Fera',
        descricao: ''
    }]

    const cartasLacaio = [javaliPedratrusco, crocoliscoDoRio,
        raptorDinossangue, cacadoraDoUrzal, carabineiroDeAltaforja, liderDoRaide, patriarcaCostalva,
        mestreDeMatilha, mordeliscaDoOasis, comandoLancatroz, caoMagna
    ]

    return cartasLacaio[j];

}

function getCartaArcanaCacador(j) {

    let ferirPresa = [{
        nome: 'Ferir Presa',
        mana: 1,
        ataque: '',
        defesa: '',
        classe: 'Arcana',
        tipo: '',
        descricao: 'Causa 1 de dano, '
    }]
    let tiroArcano = [{
        nome: 'Tiro Arcano',
        mana: 1,
        ataque: '',
        defesa: '',
        classe: 'Arcana',
        tipo: '',
        descricao: 'Cause 2 de dano'
    }]
    let tiroMultiplo = [{
        nome: 'Tiro Multiplo',
        mana: 4,
        ataque: '',
        defesa: '',
        classe: 'Arcana',
        tipo: '',
        descricao: 'Cause 3 de dano a dois lacaios diferentes'
    }]

    let rastreamento = [{
        nome: 'Rastreamento',
        mana: 2,
        ataque: '',
        defesa: '',
        classe: 'Arcana',
        tipo: '',
        descricao: 'Compre 2 cartas'
    }]

    let cartasArcana = [ferirPresa, rastreamento, tiroArcano, tiroMultiplo]

    return cartasArcana[j];

}

function criarCartarGuerreiro(i, j) {
    
}

function criarCarta(carta, path) {

    let converterParaString = JSON.stringify(carta)

    fs.writeFileSync(path, converterParaString)

    return
}
