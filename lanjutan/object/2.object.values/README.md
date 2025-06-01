### 2. `Object.values(obj)`

Object.values(obj) akan mengembalikan array berisi nilai dari semua properti milik sendiri (bukan turunan) dari sebuah objek.

contoh 

```
const buah = {
    nama : "Apel", 
    warna : "Merah", 
    rasa : "Manis", 
    harga : 10.000
}

const dataBuah = Object.values(buah);
console.log(dataBuah);
```