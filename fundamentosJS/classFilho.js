// Testes CLASS FILHO

class Carro{  //Declarado uma classe pai
    constructor(tpCarro, tpComb){ 
        this.tipo= tpCarro //1= passeio, 2= transporte, 3= combate
        this.qtdeComb= 100
        this.ligado= false
        this.tipoComb= tpComb //1= gasolina, 2= disel, 3= alcool
    }
    info(){ 
        console.log('Informacao basica: ')
        console.log(`Qtde Combustivel...: ${this.qtdeComb}%`)
        console.log('Ligado.............:', (this.ligado ? "Sim" : "Não"))
        console.log(`Tipo Combustivel...: ${this.tipoComb}`)
        if (this.tipo== 1){
            console.log("Tipo carro.........: Passeio")
        } else if (this.tipo== 2){
            console.log("Tipo carro.........: Transporte")
        } else {
            console.log("Tipo carro.........: Combate")
        }
        if (this.tipo==3){
            console.log("Segue abaixo as caracteristicas do carro de combate: ")
        }
        console.log()
    }
    set setLigado(t){
        this.ligado= t
    }
    get getLigado(){
        return this.ligado
    }    
    set setComb(v){ 
        this.qtdeComb= v
        console.log("Combustivel alterado. Valor: "+this.qtdeComb)
    }
    get getcomb(){ 
        return this.qtdeComb
    }
}


class CarroCombate extends Carro{ //Declarando uma classe filho
    constructor(calibre, blindagem){ //Dentro do constructor filho, instanciamos apenas os atributos pertinentes a essa classe filho
        super(3, 2) //Usando 'SUPER', acessamos os atributos da classe pai, ent dentro dele preenchemos com os valores pertinente aos atributos da classe pai
        this.qtdeMunicao= 1000
        this.calibre= calibre
        this.blindagem= blindagem
    }
    info(){ //Setar os atributos e o jeito que aparecera quando 'info' dessa classe filho for chamada
        super.info() //USAMOS 'SUPER' PARA ACESSAR OS ATRIBUTOS GLOBAIS DA CLASSE (OS DA CLASSE PAI)
        console.log('Caracteristicas: ')
        console.log("Quantidade municao.......:",this.qtdeMunicao)
        console.log("Calibre..................:",this.calibre)
        console.log("Blindagem................:",this.blindagem)
        console.log()
    }
}

class CarroTransporte extends Carro{ //Declarando a segunda classe filho (Use para comparar os exemplos)
    constructor(qtdeLugares, distancia){
        super(2, 3)
        this.lugares= qtdeLugares
        this.distancia= distancia
    }
    info(){
        super.info()
        console.log('Caracteristicas: ')
        console.log("Quantidade de lugares.......:", this.lugares)
        console.log("Distancia maxima alcancavel.:", this.distancia)
    }
}

let carro1 = new Carro(1, 1) //Criando um novo objeto da classe pai, com os valores de atributos pertinentes a ele
let combate1 = new CarroCombate(".50","6mm") //Setando um novo objeto filho, com os valores de atributos pertinentes a ele
let combate2 = new CarroCombate("7,62","S/ Blindagem")// Setando um segundo objeto da mesma classe filho ja existente
let transporte1 = new CarroTransporte("50", "500Km") //Setando um novo objeto da segunda classe filho

carro1.info()
combate1.info()
combate2.info()
transporte1.info()
 

        