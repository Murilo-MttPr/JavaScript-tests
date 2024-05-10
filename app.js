let prompt = require('prompt-sync')();
/////////////////////////////////////////////

setTimeout(()=> {   console.log('O tempo acabou!')}, 2000); //em micro segundos
//setTimeOut é uma ferramenta do JS que funciona como um cronometro. 
//dentro do setTimeOut eu fiz uma funcao arrow que no primeiro valor recebe um console.log
//e no segundo recebe o tempo que deve ser esperado para soltar o primeiro valor
//o tempo a ser esperado sempre vem no segundo valor

// Ferramenta pra executar sua funcao a cada X segundos (o 1000 sao micro segundos)
setInterval(() => { 
  console.log('segundo')
}, 1000);


//outro exemplo da ferramenta sendo utilizada:
function horarioAtual() {
    let dataAtual = new Date(); //variável recebe a data atual
    let hora = dataAtual.toLocaleTimeString(); // variável recebe a data atual convertida para string
    console.log(hora); //hora será mostrada no console
  }
  setTimeout(horarioAtual, 3000); //aqui definimos o setTimeOut fora da funcao, e dentro dele existem os dois valores a serem preenchidos
  //um é o nome da funcao qque estarmos chamando, e o segundo é o tempo q deve ser esperado para ai sim executar o primeiro valor, 
  //que no caso é chamar a funcao criada acima