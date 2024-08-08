const soma = function(x, y){ //uma simples funcao anonima (sem nome)
    return x+y
}

imprimirResultado= function (a, b, operacao=soma){ //como embaixo nao passei o terceiro valor, operacao pegou o valor de soma!!
    console.log(operacao(a, b));
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y){  //funcao anonima diretamente no chamado de outra funcao!!
    return x-y
})

imprimirResultado(3, 4, (x, y)=> x*y) //possivel definir outra funcao dentro da chamada da funcao!! ARROW SEMPRE É ANONIMA

const pessoa= {             //Definindo uma funcao anonima dentro de uma string/objeto
    falar: function(){
        console.log('Ola')
    }
}
pessoa.falar()