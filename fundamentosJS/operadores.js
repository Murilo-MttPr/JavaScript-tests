let X = 1; // = é atributivo
let Y = '1';
console.log(Y == X); //== é comparativo, tipo boolean, se eles sao iguais.
console.log(Y === X); //=== seria um comparativo mais fiel, testa ate se o tipo é o mesmo. continua sendo tipo boolean o resultado. X= numero, Y= string
console.log(Y != X);// != é um 'diferente', mesmo esquema do ==
console.log(Y !== X);// !== é o 'comparativo mais fiel', testa ate o tipo

// os < , > , <= , >= sao auto explicativos

// ou = ||
// e = &&

///////////////////OPERADORES TERCIARIOS

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //Nesse exemplo, usamos uma funcao para retornar true ou false o resultado doq pedimos;
console.log(resultado(7.1));

const status = nota >= 7 ? 'Aprovado' : 'Reprovado' //Mesmo exemplo, porem diretamente em uma varialvel
console.log(status);