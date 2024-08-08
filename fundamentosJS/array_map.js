//map é um FOR com proposito de transformar cada elemento e gravar em um novo array do msm tamanho


//map recebe uma funcao onde o parametro sempre É os valores da array original
const numeros= [1, 2, 3, 4, 5]; //array original
let resultado = numeros.map((element=>{  //element é o parametro, que tem o valor do array original (no caso, o 'nums' do nums.map)
   return element*2 
} ) );

console.log(resultado);

