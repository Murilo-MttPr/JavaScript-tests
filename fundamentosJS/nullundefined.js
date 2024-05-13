let valor //valor nao inicializado (diferente de valor nao declarado, que seria uma variavel nao existente)
console.log(valor); //Como nao foi dado valor a ela, o valor vai ser undefined;

valor = null; //Agora foi inicializada, porem vazia (ausencia de valor)
console.log(valor);

const produto= {}

console.log(produto.preco)
console.log(produto);

produto.preco= 3.50;

console.log(produto)

//null = pode ser usado para zerar um valor, como se fosse usar o numero 0