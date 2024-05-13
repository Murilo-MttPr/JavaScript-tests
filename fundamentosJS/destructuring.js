const pessoa= {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'rua tal',
        numero: 1
    }
}

const {nome,idade} = pessoa
console.log(nome,idade)

//nesse exemplo, é um novo modo de tirar atributos de um objeto de mandeira simplificada
// faz por exemplo, o atributo virar um tipo de variavel, q chamando, imprime o valor do atributo dentro do objeto

const {nome: n, idade: i}= pessoa;
console.log(n,i)

//mesma coisa, porem mais organizado ja q tirei do objeto o atributo dando um nome diferente(pra nao baguncar as coisas)

const {endereco: {logradouro, numero}}= pessoa //jeito de puxar um atributo mais fundo dentro do objeto
console.log(logradouro, numero)
