### 6. `.includes`

`.includes(nilai)`  digunakan untuk mengecek apakah suatu array mengandung nilai tertentu.
Hasilnya:

- `true` jika nilai tersebut ada di dalam array
- `false` jika tidak ada

sintaks 

```
let array = ["value"]; 
let newArray = array.includes("value");

// callback
```
Dalam `.includes()` ini diperhatikan lagi, karena JavaScript bersifat case sensitive yang dimana besar atau kecilnya huruf pada isi array, nama variabel dan lainnya sangat mempengaruhi kode.

contoh 

```
let bahasaPemograman = ["PHP", "JavaScript", "Kotlin", "TypeScript", "Java", "Flutter", "Dart"]; 
let cekBahasa = bahasaPemograman.includes("JavaScript"); // harus sama dengan isi arraynya !

console.log(cekBahasa);
```
Pada kode tersebut isi array dan pemanggilannya pun harus disamakan dengan isinya karena jika hanya menggunakan huruf kecil semua maka hasilnya adalah `false`. Jika menggunakan huruf besar semua maka hasilnya adalah `true`.