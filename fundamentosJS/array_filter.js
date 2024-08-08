


const produtos = [
    {nome: 'Copo de vidro', preco: 10, fragil: true},
    {nome: 'Copo de plastico', preco: 5, fragil: false}
]

//quero filtrar quais produtos sao frageis:

const produtosFrageis = (produto) => produto.fragil;

console.log(produtos.filter(produtosFrageis))

//Consigo tambem usar uma função dentro do metodo:

const trimestres = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
const ultimoTrimestre = trimestres.filter(function(element,index) { //O primeiro parametro sempre é os elementos da array original, o segundo sempre é o index
    return index > 8
})

console.log(ultimoTrimestre)
