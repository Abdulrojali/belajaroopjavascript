function data(name,alamat,usia){
    this.nama=name
    this.alamat=alamat
    this.usia=usia
}
let nama1=new data('ucup','sukabumi',19)
console.log(nama1)

// merubah property pada object construktor data
nama1.alamat='cicurug'
console.log(nama1)

nama1['alamat']='bandung'
console.log(nama1)

