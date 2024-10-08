// Criar de forma literal:
function fun1(){ }

//Armazenar em uma variacel:
const fun2 = function (){ } //Só dar de valor a variavel

// Armazenar dentro de um array:
const array = [function(a, b) {return a+b }] //Poderia chamar as outras funcoes ja criadas dentro de um array
console.log(array[0](2,3))

//Armazenar dentro de um objeto: 
const obj = {}
obj.falar = function (){return 'Opa'}
console.log(obj.falar())

//Passar funcao como parametro para outra funcao: 
function run(fun){
    fun()
}
run(function(){ console.log('Executando....')})

//Uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4);
//ou:
const cincoMais= soma(2,3);
cincoMais(4);