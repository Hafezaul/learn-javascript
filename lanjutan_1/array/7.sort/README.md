### 7. `.sort`

`.sort` adalah method yang digunakan untuk mengurutkan elemen dalam array, tapi secara delfault ia akan menganggap semua array menjadi string. Jadi akan aneh jika yang diurutkan adalah angka.

sintaks 
```
let array = ["value"]; 

let newArray = array.sort((a) => logika)

console.log(newArray);
```
contoh 

```
let angka = [1, 33, 99, 2, 12, 44, 05, 22, 76]
let newAngka = = angka.sort();

console.log(newAngka);
 /* output : [
  0.5,  1, 12,  2, 22,
   33, 44, 76, 99
]
*/ 
```

Hasil dari kode atas ialah `[0.5,  1, 12,  2, 22, 33, 44, 76, 99]` bukan `[0.5,  1,  2, 12, 22, 33, 44, 76, 99]` karena `.sort` akan mengambil angka pertama sebagai urutannya karena status array tersebut menjadi **string** bukan **number** karena ia string maka secara delfault akan mengurutkan seperti urutan angka pada umumnya. 

Kecuali jika memberikan operator pembanding maka hasil dari array tersebut akan berjalan sesuai dengan logika operator tersebut. 

Contoh 

```
let angka = [1, 33, 99, 2, 12, 44, 0.5, 22, 76]
let newAngka = angka.sort((a, b) => a - b);

console.log(newAngka);
```
Maka hasil dari kode diatas ialah `[0.5,  1,  2, 12, 22, 33, 44, 76, 99]` karena terdapat logika operator yang membuatnya urut dari yang terkecil ke yang besar(ascending). Jika ingin mulai dari yang besar ke kecil logika tersebut di balik saja.

contoh 

```
let angka = [1, 33, 99, 2, 12, 44, 0.5, 22, 76]
let newAngka = angka.sort((b, a) => b - a);

console.log(newAngka);
```

maka hasil dari kode tersebut ialah `[99, 76, 44,  33, 22, 12,  2,  1, 0.5]` karena ia akan mengurutkan dari yang besar ke kecil (descending )