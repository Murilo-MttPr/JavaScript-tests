//arrays sao basicamente objetos que organizam seus valores usando indices (tipo vetor)

const valores = [17 , 8.9 , 6.3 , 9.2];
const testeValores = [1, 2, 4, 5, 6, 3];
const testeTxt = ['1', '2', 'abacaxi', '4', '3']

console.log('Ola mundo') //console.log tem quebra de linha embutida
process.stdout.write("Ola mundo") //process.stdout.write nao tem quebra de linha embutida.Pra usar, deve-se usar \n ao final

console.log(valores[0], valores[3]);
console.log(valores[4]); //Imprime 'undefined' o valor inexistente caso nao tenha mais nenhum apos ele
console.log(valores) //imprime a array completa

valores[10]= 15;
console.log(valores); //os espaços sem valor, imprime na tela <empty itens> e depois o valor que existe
console.log(valores.length); //imprime a quantidade de valores existentes na array, incluindo os espaços vazios

valores.push( {id: 3}, false, null, 'teste' ); // push addiciona valoes na array a partir do ultimo valor existente
console.log(valores); //imprime em linhas separadas
console.log(valores.join(' - ')); //Imprime todos os espaços existentes na mesma linha, inclusive os vazios

console.log(valores.pop()); //Retira do array e imprime o ultimo valor (o que foi retirado)
console.log(valores);
delete valores[2]; //Deleta do array o valor da posição escolhida dentro dos colchetes

console.log(typeof(valores)); //Uma array é do tipo objeto

console.log(testeValores.sort());//ordenar os valores em ordem crescente
console.log(testeTxt.sort())

const numeros = [1, 2, 3, 4, 5];
let novoArray= numeros.map((dobro)=> {return dobro*2}) 
//map cria um novo array, e dentro dele eu uso a funcao que quiser, faço oque quero
//utilo pra gravar dados em um , deixar ele quieto e modificar os dados em outra variavel contendo esse array
console.log(novoArray)

//Consigo definir varias constantes usando array. Siga o exemplo:

const [item1, item2, item3] = ['camisa', 'calça', 'tenis'];
console.log(item1)// camisa
console.log(item2)// calça
console.log(item3)// tenis

