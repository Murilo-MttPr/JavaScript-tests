const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];
//Criado o array, usamos a ferramenta 'forEach' e passamos uma funcao para definir oque sera escrito
//o indice sempre sera o segundo parametro! é regra e ele sempre sera assim
//a funcao forEach tem 3 parametros. o primeiro sera o valor original, o segundo sera o indice e o terceiro sera o array completo
aprovados.forEach((nome, indice)=>{ 
    console.log(`${indice + 1}: ${nome}`);
});


//aqui criamos uma funcao e guardamos ela em uma variavel (exibirAprovados)
//apos, usamos forEach dando como parametros a variavel que tinha uma funcao como valor
const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados)

