const produtos = [
    {nome: 'Copo de vidro', preco: 10, fragil: true},
    {nome: 'Copo de plastico', preco: 5, fragil: false}
]


//quero filtrar quais produtos sao frageis:

const fragil = (produto) => produto.fragil;

console.log(produtos.filter(fragil))

//quero filtrar qual é mais barato que 8$:

const barato = (produto) => produto.preco <= 8;

console.log(produtos.filter(barato))