class data{
    constructor(a,b){
        this.a=a
        this.b=b
    }
    get log(){
        console.log(`helo ${this.a},how are you doing ${this.b}`)
    }
}

let hasil=new data('rizky','fine')
console.log(hasil.log())

