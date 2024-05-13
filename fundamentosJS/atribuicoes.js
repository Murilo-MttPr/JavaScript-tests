const a = 7 //nao esta comparando, esta atribuindo
let b = 3

b += a // isso é uma atribuicao aditiva. Nao é trocar o valor de B para o valor de A, mas sim ADICIONAR ao valor de B o valor de A
console.log(b); // (b= 3, a=7 , logo, B agora é 10)

b -+ 4 //b= b-4
console.log(b);

b*=2 //b= b*2
b/+2 //b= b/2
b%=2 //b= b%2