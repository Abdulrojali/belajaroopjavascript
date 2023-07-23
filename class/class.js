// class mahasiswa{
//     constructor(nama,alamat,id){
//         this.nama=nama
//         this.alamat=alamat
//         this.id=id
//     }
//     random(){
//        return Math.floor(Math.random()*10)
//     }
    
// }
// let mahasiswa1=new mahasiswa('rizky','sukabumi','0014')
// console.log(mahasiswa1)


// function data(nilai){
//     if(nilai>8){
//         return`nilai A`
//     }
//     else if(nilai>5 && nilai<8){
//         return`nilai B`
//     }
//     else if(nilai<5){
//         return `nilai C`
//     }
//     else{
//         return `nilai E`
//     }
// }
// console.log(data(mahasiswa1.random()))



// let bluprint=[
//     {
//         nama:'ovo',
//         harga:'100000'
//     },
//     {
//         nama:'vivo',
//         harga:'50000'
//     },
//     {
//         nama:'iphone',
//         harga:'1002000'
//     },
//     {
//         nama:'samsung',
//         harga:'1002000'
//     }
// ]
// let search=document.querySelector('.search')

// function selection(print){
//     for(let i=0;i<print.length;i++){
//         if(print[i].nama==search.value){
//             let teks=`<h3>${print[i].nama}</h3>
//             <p>${print[i].harga}</p>`
//             let div=document.createElement('div')
//             div.innerHTML=teks
//             document.querySelector('.datas').appendChild(div)
//         }
//     }
// }

// let button=document.querySelector('.clickSearch')
// button.addEventListener('click',function(){
//     selection(bluprint)
// })



class calculator{
    constructor(a,b){
        this.a=a
        this.b=b
    }
    kali(){
        return this.a*this.b
    }
}

let testing=new calculator(10,20)
console.log(testing.kali())