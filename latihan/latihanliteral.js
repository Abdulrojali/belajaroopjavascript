// ini adalah cara membuat object literal
let hasil={
    teks:'ini adalah sebuah teks',
    sapa:function(){
        return `${this.teks}`
    }
}
console.log(hasil.teks)// ouput ini adalah sebuah teks

console.log(hasil.sapa())