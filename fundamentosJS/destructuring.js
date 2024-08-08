const pessoa= { // {}, entao é um objeto
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


//Vamos a um exemplo de como utilizar o '...' para desestruturar, ou "desmontar" um array.
const [chaDeMorango,...outrosChas] = ['Morango', 'Camomila', 'Cidreira', 'Limao', 'Canela']; // A constante é um array de variaveis, onde os ... significa pegar todos os que estao para a direita e colocar na constante que defini o nome, no caso como 'outrosChas'
console.log(`O chá de ${chaDeMorango} é bom para saude`);
console.log(outrosChas)

//Vamos a um exemplo de como utilizar a ',' para pular ou desmontar array:
const [,,,frances,] = ['Italiano', 'Doce', 'De batata', 'Pao frances', 'integral']; // O uso da ',' pula os parametros respectivos passados na array
console.log(`${frances} é o melhor pao para comer com hotdog`)
