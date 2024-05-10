//map é um FOR com proposito de transformar cada elemento e gravar em um novo array do msm tamanho
const nums= [1, 2, 3, 4, 5];

//map recebe uma funcao onde o parametro É os valores da array original
let resultado = nums.map((e=>{ 
   return e*2 
} ) );

console.log(resultado);

//EXEMPLO 2\\

const soma10 = e => e+10; //Uma funcao que soma o elemento por 10;
const triplo = e => e*3; //Uma funcao que pega o elemento e faz x3;

resultado = nums.map(soma10);

console.log(resultado);