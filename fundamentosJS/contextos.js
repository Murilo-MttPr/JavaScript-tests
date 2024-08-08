
const saudacao = 'Opa' //Contexto léxico 1 (local onde sua variavel foi definida dentro do codigo)

function exec(){
    const saudacao = 'Falaaa Barizon'; //Outro contexto, pois ela ta dentro de uma funcao
    return saudacao;
} 
console.log(saudacao)
console.log(exec());

