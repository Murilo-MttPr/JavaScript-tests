const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())

//Praticamente, usando a funcao 'require' e usando a sintaxe correta do './NOMEX', os arquivos sao requeridos dos modulos selecionados e consigo
//usar as variaveis, objetos ,... de outros modulos