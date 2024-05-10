
const saudacao = 'Opa' //Contexto léxico 1 (local onde sua variavel foi definida dentro do codigo)

function exec(){
    const saudacao = 'Falaaa Barizon'; //Outro contexto, pois ela ta dentro de uma funcao
    return saudacao;
} 
console.log(saudacao)
console.log(exec());

const cliente = {
    nome: 'Murilo',
    idade: 25,
    peso: 83,
    endereco: {
        logradouro: 'Rua Kenia',
        numero: 29
    }
}

console.log(cliente)