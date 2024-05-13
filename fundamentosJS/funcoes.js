
//Exemplos de função//

console.log(typeof Object); //Object é uma funcao!!

class produto {}
console.log(typeof produto);// Qualquer classe tambem é uma funcao

//
//Funcao sem retorno
//

function imprimirSoma(a, b) { //o nome das variaveis vao dentro, e nao é para declarar essa variavel antes
        console.log(a+b) 
    } 
        
imprimirSoma(2, 3); //Dei valor as variaveis da funcao, e a soma que pedi dentro dela usou os valores passados
imprimirSoma(2); //a funcao tem dois valores e a soma dentro dela tambem. chamar a funcao sem ter os dois valores nessa conta, da NaN


////////////////////////////////////
function soma(a, b=8){
    return a + b
}

    soma(2, 3); // como foi uma funcao com retorno, ela nao pode ser impressa assim, apenas com o console.log
    console.log(soma(2, 3)); 
    console.log(soma(2)); // como um dos valores ja veio declarado (b= 8),a conta usou ele e imprimiu a funcao completa 


/////////////////////////////// 
console.log("ARMAZENANDO UMA FUNCAO EM UMA VARIAVElL"); //TODA VARIAVEL DECLARADA DENTRO DE UMA FUNCAO, SÓ PODERA SER CHAMADA DENTRO DO SCOPO DELA!!!

const testeFuncao= function(a, b){
    console.log(a + b)
}

testeFuncao(2, 3);

////////////////Outro tipo de declarar funcao. ARROW

const teste = (a, b) => {  /////////////// o simbolo => é uma abreviacao para 'function'
    return a+b
}
console.log(teste(2, 5));


//////////////para funcao de apenas uma linha:

const funtest= (a, b) => a+b
console.log(funtest(6, 6))