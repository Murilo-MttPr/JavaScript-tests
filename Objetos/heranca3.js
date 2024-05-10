const pai = {nome: 'Murilo', corCabelo: 'Castanho'}; //Declaracao de um objeto

const filha = Object.create(pai); //Criando um objeto (filha) usando os atributos de 'pai' usando object.create
filha.nome= 'Isa'; //Dando um novo nome do atributo 'nome' para o segundo objeto
//porem, atributos que nao forem trocados os valores, o valor mantem o mesmo do objeto pai
console.log(filha.corCabelo);


//Dentro da criacao de um objeto, consigo definir algumas regras, valores e atributos:

const filho = Object.create(pai, {
    nome: {value: 'oliruM' , corCabelo: 'Castanho claro', writable: false }
}) //Definimos valores e uma regra de que nao é trocavel os valores
console.log(filho.nome)
filho.nome = 'Motta' //Tentando dar outro nome
console.log(filho.nome) //Vendo que nao mudou