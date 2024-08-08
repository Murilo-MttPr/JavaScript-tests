//Usando a notacao literal:
const obj1 = {}
console.log(obj1);

//Object em JS (Object nesse exemplo é uma funcao, porem quando colocamos o new na frente, esse new transforma o object em um objeto ) //
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

//Funcao construtora:
function Produto(nome, preco, desc) {
    this.nome = nome //Lembrar: this transforma o o atributo universal e publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
console.log(p2.nome) //É acessivel
console.log(p2.preco)// Nao acessivel, pois nao esta em this

//funcao factory, literalmente uma funcao q retorna uma criacao de um objeto
function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Joao', 3000.00, 3)
console.log(f1.getSalario())