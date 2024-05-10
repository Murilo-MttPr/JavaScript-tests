const moduloA = require('../../moduloA')
console.log(moduloA.ola)

/*aqui nós acessamos uma funcao que está dentro do moduloA, que esta dentro da pasta NODE, 
sendo que estamos dentro da pastaB, que esta dentro da pastaA, que esta dentro da pasta NODE
isso mostra , como podemos ver no require usado acima, como podemos acesar algo de outro modulo
usando ../ nos saimos de uma pasta (no caso , saimos da pastaB, ai usamos o ../ novamente para sair da pastaA)
nesse momento estamos dentro da pasta NODE, e como é nela que esta o moduloA, ja podemos chamar a funcao que existe naquele moduloA*/
