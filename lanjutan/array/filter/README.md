
### 1. `.filter`

`.filter` merupakan method yang ada, untuk membuat array baru dengan kondisi tertentu saja yang dapat di masukkan pada array tersebut. 

Contoh : 

```
// contoh array dengan filter
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 

let newAngka = angka.filter(function(item){
 return item % 2  === 0; 
}); 

console.log(newAngka);
```

Pada kode diatas variabel `angka` memiliki array berupa number yang menyimpan angka 1-20, kemudian pada variabel `newAngka` mengambil array pada variabel `angka` yang akan mensortir angka mana saja yang memiliki kelipatan 2.

Jadi pada intinya sintaks `.filter` dapat digunakan dalam berbagai kasus seperti mensortir nama yang memiliki 4 huruf, mensortir produk yang sudah kosong, dan mensortir beberapa perkondisian 
