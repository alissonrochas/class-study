class formaDeBolo{
    constructor(saborMassa, saborRecheio){
        this.saborMassa = saborMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`um delicioso bolo de ${this.saborMassa} com recheio de ${this.saborRecheio}`)
    }

    assar(){
        console.log(`bolo assando de ${this.saborMassa}}`)
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")

boloFesta.escrever()
boloPremium.assar()