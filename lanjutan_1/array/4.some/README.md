### 4. `.some`

`.some` adalah method dalam JavaScript yang digunakan untuk memeriksa apakah setidaknya satu elemen dalam array memenuhi suatu kondisi. Jika ada minimal satu elemen yang memenuhi, maka hasilnya adalah `true`.

sintaks 

```
let array = ["value"]; 
let newArray = array.some((a) a => logika) ;

console.log(newArray);
```

contoh 
```
let namaBuah = ["pisang", "apel", "durian"]; 

let nilaiPasti = namaBuah.some((nilai) => nilai === "pisang")
console.log(nilaiPasti);
```

Pada kode diatas secara otomatis akan mencari array yang bernilai `pisang`, apakah array `pisang` ada atau tidak. Jika tidak ada maka hasilnya `false` jika benar adalah `true`.