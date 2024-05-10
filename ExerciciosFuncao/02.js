let tipo

function triangulos(a,b,c){
    if (a == b && b == c){
        tipo= 'Equilatero';
    } else if ( a == b || b == c || a == c){
        tipo= 'Isoceles'
    } else {
        tipo= 'Escaleno'
    }
}

triangulos(1, 2, 2);
console.log("Tipo do triangulo: ", tipo);