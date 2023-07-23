class objectData{
    construktor(a,b){
        this.a=a
        this.b=b
    }
    set testing(a){
        console.log(`hello ${a}`)
    }
}

let data1=new objectData(10,5)
data1.testing=10; 
console.log(data1.testing)