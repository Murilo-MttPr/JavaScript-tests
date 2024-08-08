//Factory é uma funcao para criar objetos. Vide exemplos:

function criarProduto(nome, preco){
    return {
        nome: nome,
        preco: preco
    }
}

console.log(criarProduto('celular', 1000))
console.log(criarProduto('Pc', 3000))