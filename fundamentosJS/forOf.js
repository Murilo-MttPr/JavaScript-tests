//Um tipo de laço 'for', chamado de 'For Of', que age em torno de valores, nao de indices

for (let letra of 'Cod3r') { //chamei de letra o parametro, que irá imprimir letra por letra do segundo parametro (veja o console)
    console.log(letra)
}

//

const assuntosEcma = ['map', 'set', 'promisse'];

for (let i in assuntosEcma) {
    console.log(i)
}