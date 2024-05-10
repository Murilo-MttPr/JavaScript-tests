//Exemplo de cadeia de prototipos (prototype chain)
Object.prototype.attr0 ='0' //Meio de adicionar um valor a um prototypo
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho= { __proto__: pai, attr3: 'C'}

console.log(filho.attr1) //Foi procurando, ate achar o valor em 'avo'
console.log(filho.attr2) //Igual o de cima, procurou no prototype
console.log(filho.attr0) //Adicionado attr0 na primeira linha

 Object.setPrototypeOf(objetoFilho, ObjetoPai)// Metodo para estabelecer uma funcao de prototipo entre dois objetos 
 