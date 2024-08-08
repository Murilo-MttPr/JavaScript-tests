//Closures são funções que capturam e lembram o escopo léxico no qual foram definidas, permitindo que acessem variáveis desse escopo mesmo após o escopo ter sido fechado.

function criarContador() {
    let contador = 0;
    return function() {
      contador += 1;
      return contador;
    };
  }
  
  const contador1 = criarContador(); // contador1 recebe a funcao original.
  console.log(contador1()); // 1 // Cada vez que ela é chamada, ela retorna oq foi definido em seu return: sua funcao interna
  console.log(contador1()); // 2 
  console.log(contador1()); // 3
  
  const contador2 = criarContador(); // contador2 tambem recebeu a funcao original
  console.log(contador2()); // 1 // Como ela foi chamada em outra variavel, e a mudança dos valores ocorreu em outra instancia, aqui ela continua retornando seu valor original como se fosse a primeira vez
  console.log(contador2()); // 2



  /////////////////////

  function saudacao() {
    let texto = "Olá!";
    return function() {
        console.log(texto);
    };
}

const cumprimentar = saudacao();
cumprimentar(); // "Olá!"