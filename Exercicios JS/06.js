function inverso (valor){
    if (typeof valor === 'number'){
        return -valor
    } else if (typeof valor === 'boolean'){
        return !valor
    } else {
        return `Valor nao esperado, do tipo string`
    }
}

let numero = -600;
let inverso1 = inverso(numero);
console.log(inverso1);

let booleano = true;
let inverso2 = inverso(booleano);
//console.log(inverso2);

//console.log(inverso('programacao'))
