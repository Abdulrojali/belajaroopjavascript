class animal{
    constructor(name){
        this.name=name
    }
    suara(){
        console.log(`suara ${this.name}`)
    }
}

class animals extends animal{
    constructor(name,kecepatan,berat){
        super(name)
        this.kecepatan=kecepatan
        this.berat=berat
    }
    cepat(){
        console.log(`${this.name} memiliki kecepatan ${this.kecepatan}`)
    }
    beratNya(){
        console.log(`${this.name} memiliki berat ${this.berat}`)
    }
}

let kucing=new animals('kucing',114,'10kg')
let anjing=new animals("anjing",125,'25kg')
console.log(anjing)
console.log(kucing)
