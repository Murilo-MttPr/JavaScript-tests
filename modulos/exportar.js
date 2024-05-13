console.log(module.exports) //repare que ele entrega {} vazias
console.log(module.exports === this) // = true
console.log(module.exports === exports) // = true

this.a= 1 //o 'a' é visivel fora do arquivo
exports.b= 2 // o 'b' tambem é visivel fora do arquivo
module.exports.c=3 // o 'c' tambem é visivel fora do arquivo
// todas essas maneiras definem oque pode ser importado do modulo


/*ATENCAO:
o mais importante dos tres modos é o 'module.exports'
imagine ele como sendo um objeto vazio, entao ao imprimir ele antes de qualquer coisa, vemos que ele responde {}
entao repare nos exemplos abaixo :*/

exports = null
console.log(module.exports) // mesmo dando ao exports um novo valor (null), ele responde o valor dado inicialmente

//se quiser mudar o valor, deve-se OBRIGATORIAMENTE usar o 'module.exports'