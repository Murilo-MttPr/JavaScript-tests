const pessoa= {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa)); //O metodo .keys pega todas as chaves do objeto
//Lembre: Um objeto é a juncao de chaves e valores

console.log(Object.values(pessoa));//O metodo .values pega todos os valores existentes no objeto

console.log(Object.entries(pessoa));//O metodo .entries pega as chaves com seus respectivos valores


//Há como definir uma propriedade para um objeto usando a funcao .defineProperty:
Object.defineProperty(pessoa, 'dataNascimento', { //Criando a nova propriedade
    enumerable: true, //Se vai aparecer quando for chamada em .keys (Se podera ser numerada)
    writable: false, //Definindo q nao sera sobrescrita/modificada (tipo .freeze)
    value: '01/01/2023' //Definindo o valor da nova propriedade
})

console.log(pessoa.dataNascimento) //Testando a chamada dela
console.log(Object.keys(pessoa))//Chamando .keys para mostrar q ela esta sendo listada (por conta de ter definido isso na criacao dela)

//Object.assing: 

const dest= { a : 1 }
const obj1= { b : 2 }
const obj2= { c : 3 , a : 4 } //repare que a variavel A ja tem valor no objeto 'dest'
const obj= Object.assign(dest, obj1, obj2) //Usando .assing, o primeiro objeto listado recebe os atributos e objetos (valor e chave).Valores sao sobrescritos
console.log(obj)
