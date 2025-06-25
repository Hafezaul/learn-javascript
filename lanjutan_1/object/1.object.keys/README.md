### 1.`Object.keys(keys)`

Object.keys(obj) adalah method (metode) bawaan JavaScript yang digunakan untuk mengambil semua nama properti (key) milik langsung dari suatu objek dan mengembalikannya dalam bentuk array.

contoh 

```
const buah = {
    nama : "Apel", 
    warna : "Merah", 
    rasa : "Manis", 
    harga : 10.000
}

dataBuah.Object.key(buah);
console.log(dataBuah);
```

object tersebut memiliki data berupa keterangan buah yang dimana ada properti dan valuenya, ketika menggunakan `Object.keys()` maka yang di tampilkan ialah propertinya saja tanpa valuenya.

maka output dari kode tersebut ialah 

```
[ 'nama', 'warna', 'rasa', 'harga' ]
```