//Fora de funcões:
console.log('Fora de funcoes: ');
console.log(this === global); //false
console.log(this === exports); //true

//Dentro de funções normais:

function thisPauNoCu(){
    console.log('Em uma funcao normal: ');
    console.log(this === global);//True
    console.log(this === exports);//False
}
thisPauNoCu(); //Chamando a funcao

//Dentro de uma arrow:

const thisDoCaralho=()=>{
    console.log('Em uma arrow: ');
    console.log(this ===global);//false
    console.log(this === exports);//true
}
thisDoCaralho();