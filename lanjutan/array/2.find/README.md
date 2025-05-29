### 2 `.find`

`.find` adalah method yang digunakan untuk mencari elemen pertama yang memenuhi kondisi pertama. Jadi sintaks ini digunakan untuk mencari data pertama yang sesuai dengan kondisi yang diinginkan.

Contoh : 

```
const nomor = [5, 10, 15, 20, 25, 30]; 

let newNomor = nomor.find(n => n > 10); 

console.log(newNomor);
// output 15
```

Kode diatas menjelaskan bahwa variabel `newNomor` mengambil array pada variabel `nomor`. `newNomor` akan mencari value yang dimana ia lebih besar dibandingkan angka 10. Maka angka yang lebih besar dari angka 10 ialah 15 bukan 20 atau pun seterusnya, karena `find()` hanya akan mengambil angka pertama.