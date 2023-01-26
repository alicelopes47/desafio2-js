//1
const message = () => {
    console.log('Mensagem no console.')
}

message()

//2
let nome = 'Alice'
const nameMessage = (nome) => {
    console.log(`meu nome é ${nome}`)
}

nameMessage(nome) // ou
nameMessage('Alice')

//3 
let idade = 23
let musical = 'tecnho'

const setId = (name, idade, musical) => {

    console.log(`Sou a ${name}, tenho ${idade} anos e gosto de ${musical}`)
}

setId(nome, idade, musical) //ou
setId('Alice', 23, 'Rock')

//4
let filme = 'climax'
let musica = 'arca'

const pleasure = (filme, musica) => {
    console.log(`gosto de ${filme}, e escuto ${musica}`)
}

pleasure(filme, musica) //ou
pleasure('midsommar', 'crystal castles')

//5 
const calculatesTriple = (num) => {
    return num * 3
}

console.log(calculatesTriple(2))
console.log(calculatesTriple(5))
console.log(calculatesTriple(12))

//6 
let variavel = true

const checkVariable = (variavel) => {
    if(variavel == true) {
        return 'variavel verdadeira'
    } else { 
        return 'varivael falsa'
    }
}

console.log(checkVariable(variavel)) //ou
console.log(checkVariable(false))
console.log(checkVariable(true))