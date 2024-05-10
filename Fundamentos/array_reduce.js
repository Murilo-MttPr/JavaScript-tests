const notas = [5.7, 8.3, 9.4, 4.6];

const resultado = notas.reduce((acumuladora, atual) =>{
    return acumuladora+atual;
})

console.log(resultado) //o resultado é a soma de todos os valores

//oque acontece: ele começa no indice 0 e vai passando indice por indice, fazendo oque defini na funcao
//o reduce é um FOR, ent ele vai passar em TODOS os valores da array
//nesse exemplo, o resultado da soma do primeiro return foi 5.7 + 8.3
//quando subiu para rolar novamente o reduce, a variavel acumuladora tinha o valor da soma anterior e o atual, o valor do terceiro valor da array
//o acumuladora é a variavel que ACUMULA os resultados da funcao