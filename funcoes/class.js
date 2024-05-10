// Testes CLASS

class Carro{  //Declarado uma classe
    constructor(cor, modelo, marca){ //instancia os atributos da class (constructor é um metodo)
        this.comb= 10
        this.cor= cor
        this.modelo= modelo
        this.marca= marca
    }
    info(){ //metodo info, para definir oque aparecera quando 'info' for chamado
        console.log(`Combustivel..........: ${this.comb}`)
        console.log(`Cor..........: ${this.cor}`)
        console.log(`Modelo..........: ${this.modelo}`)
        console.log(`Marca..........: ${this.marca}`)
    }
    set setComb(v){ // METODO SET. Usado para definir um novo valor a um objeto (observar em baixo a chamada da "alteracao")
        this.comb= v
        console.log("Combustivel alterado. Valor: "+this.comb)
    }
    get getcomb(){ // METODO GET
        return this.comb
    }
}

//Instanciar um novo objeto dentro da classe:
    let carro1 = new Carro("Prata", "Punto", "Fiat") 

//Metodo utilizado para atribuir outro valor a algum atributo (SET)
    carro1.setComb= 50 
    
//Metodo utilizado para chamar uma informacao sobre algo dentro da classe (GET) Obs: Deve ser setado o GET no atributo solicitado dentro da classe
    console.log(carro1.getcomb)

//Metodo de chamar as informacoes sobre algum objeto (Deve ser setado na classe quais informacoes aparecerao)
    carro1.info() 

        