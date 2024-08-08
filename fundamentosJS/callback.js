const notas = [7.7, 6.5, 4.6, 3.5, 9];

//Sem callback

const notasBaixas= [];
for( let i in notas){
    if (notas[i]<7){
        notasBaixas.push(notas[i]); //Push puxa as informacoes q derem true na logica para a nova array
    }
}
console.log(notasBaixas)

//Com callback:

const notasBaixas2= notas.filter(function (notas){
    return notas<7
})
console.log(notasBaixas2)

// Mais limpo ainda, usando arrow:

const notasBaixas3= notas.filter(notas => notas<7)
console.log(notasBaixas3)