### 3. `Object.entries(obj)`

`Object.entries(obj)` mengembalikan array berisi pasangan `[key, value]` dari properti objek. Jadi, kamu akan dapat array di dalam array — satu untuk setiap properti objek.

Contoh 

```
const buah = {
  nama: "Apel",
  warna: "Merah",
  rasa: "Manis"
};

const pasangan = Object.entries(buah);

console.log(pasangan);
```
Maka output yang akan dihasilkan adalah:

```
[
  [ 'nama', 'Apel' ],
  [ 'warna', 'Merah' ],
  [ 'rasa', 'Manis' ]
]
```
Method ini digunakan untuk mengambil properti dan nilai pada array. 
