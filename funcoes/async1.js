

setTimeout(()=> {   console.log('O tempo acabou!')}, 2000); 
//setTimeOut é uma ferramenta do JS que funciona como um cronometro. 
//dentro do setTimeOut eu fiz uma funcao arrow que no primeiro valor recebe um console.log
//e no segundo recebe o tempo que deve ser esperado para soltar o primeiro valor
//o tempo a ser esperado sempre vem no segundo valor



//outro exemplo da ferramenta sendo utilizada:
function horarioAtual() {
    let dataAtual = new Date(); //variável recebe a data atual
    let hora = dataAtual.toLocaleTimeString(); // variável recebe a data atual convertida para hora atual
    console.log(hora); //hora será mostrada no console
  }
  setTimeout(horarioAtual, 3000); //aqui definimos o setTimeOut fora da funcao, e dentro dele existem os dois valores a serem preenchidos
  //um é o nome da funcao qque estarmos chamando, e o segundo é o tempo q deve ser esperado para ai sim executar o primeiro valor, 
  //que no caso é chamar a funcao criada acima

  
  
  //outro exemplo de uma funcao async:

//setTimeout(  ()=>  console.log('FIM..')  ,   3   )

//console.log('Isso vai ser executado imediatamente ao play');
//console.log('Isso aqui tambem, mesmo estando apos a funcao acima');