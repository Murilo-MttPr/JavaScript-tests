console.log(Math.ceil(6.1)); //Math provê funcionalidades basicas matematicas, como ceil

const obj1= {} //criando um objeto
obj1.nome= 'Bola' //criando um atributo dentro do objeto
obj1['nome2']= 'bola2' //outro jeito de criar. É o mais recomendado
console.log(obj1.nome)


/////////////////



function Obj(nome){
    this.nome = nome //Um jeito de criar uma funcao publica, fica visivel pra fora
}

const obj2= new Obj('cadeira')
const obj3= new Obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)

// o ponto serve pra acessar um atributo onde estiver