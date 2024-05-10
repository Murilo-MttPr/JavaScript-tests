//Todo objeto aponta para um protorype
//Todos tem uma referencia para um protoripo propriamente dito
//Logo, assim q se acessa varios objetos... (herança)

const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__) //Mostra de qual propotype é o objeto
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

