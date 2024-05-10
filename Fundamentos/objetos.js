const prod1= {}; //prod1 é um objeto que foi criado sem valor (visto as {} sem nada dentro)
prod1.nome= 'Celular UL'; //e apos isso, fui incluindo valores dentro do objeto
prod1.preco= 4998.90; //cada valor com seu nome (.preco, .nome, ...)

console.log("Produto 1: ",prod1)

//Outro jeito de criar um objeto: 

const prod2= {
    nome: 'Celular SM', //Nao esqueça da virgula!!!
    preco: 4789.99
}

// Dentro de um objeto, posso fazer outros objetos: 

const prod3= {
    nome: 'Celular XS',
    preco: 5689.90,
    acessorios: {
        capinha: {
            cor1: 'azul',
            cor2: 'verde'
        }
    }
}
console.log("Produto 2: ",prod2);
console.log("Produto 3: ",prod3);