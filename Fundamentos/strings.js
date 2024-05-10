const string = `cod3r`;

console.log(string.charAt(4)); //Imprime o caracter do indice escolhido
console.log(string.charAt(5)); //No caso do indice escolhido nao ter caractere, imprime espaço vazio
console.log(string.charCodeAt(3)); //Mostra o codigo do caractere no 'Unicode'
console.log(string.indexOf("3")); //Pesquisa se o valor escolhido existe no codigo e imprime em qual local ele está

console.log(string.substring(1)); //Imprime a partir do indice escolhido
console.log(string.substring(0 , 3)); //Escolhe qual indice começa a imprimir e a partir dele, quantos ira imprimir

console.log('String '.concat(string).concat("!")); //Concatenação, pode ser feita com '+'
console.log(string.replace(3, 'e')); //Pega o caractere do indice escolhido e troca pelo caractere que estiver dentro do ''

console.log("Ana, Maria, Pedro".split(',')); //Cria uma 'Array' a partir do texto, escolhendo qual vai ser o separador do texto que sera usado para dividir
console.log(join)

///

console.log("1+1="+(1+1));//Um jeito de concatenar dentro da string
console.log(`1+1=${1+1}`);//Outro jeito de concatenar dentro da string

//

const up = texto => texto.toUpperCase(); //Uma função para deixar as letras maiusculas
console.log(`Ei... ${up('cuidado')}!`) // Se for chamar uma função, utilizar a craze ` 