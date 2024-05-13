const testeVar = [];

for (var i=0 ; i < 10 ; i++){
    teste.push(function(){
            console.log(i);
    })
}

teste[2](); //Imprime 10 pq é o valor de i ao final do For
teste[8](); //Imprime 10 pq é o valor de i ao final
/////////////////////////////////////
const testeLet = [];

for (let i=0 ; i < 10 ; i++){
    teste.push(function(){
            console.log(i);
    })
}

teste[2]();//Imprime exatamente o valor de i quando passou pela 3 vez no For
teste[8]();//Imprime exatamente o valor de i quando passou pela 9 vez no For