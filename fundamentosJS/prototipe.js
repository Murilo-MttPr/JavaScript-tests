
    Object.prototype

class Carro{ 
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
}
////////////////////////////////////////////////////////
    class CarroCombate extends Carro{
        constructor(calibre, blindagem){ 
            super(3, 2) 
            this.qtdeMunicao= 1000
            this.calibre= calibre
            this.blindagem= blindagem
        }
        info(){
            super.info() 
            console.log('Caracteristicas: ')
            console.log("Quantidade municao.......:",this.qtdeMunicao)
            console.log("Calibre..................:",this.calibre)
            console.log("Blindagem................:",this.blindagem)
            console.log()
        }
    }


let carro1 = new Carro(1, 1)
let combate1 = new CarroCombate(".50","6mm") 
let combate2 = new CarroCombate("7,62","S/ Blindagem")

carro1.info()
combate1.info()
combate2.info()
 
