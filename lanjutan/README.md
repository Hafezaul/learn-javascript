# Array dan Object Method 

## Array Method 

Array method adalah fungsi bawaan (method) yang bisa digunakan untuk memanipulasi atau mengakses data di dalam array.

Pada catatan sebelumnya, ada beberapa method array yang sudah diketahui seperti:

| Method        | Kegunaan Singkat                                  |
| ------------- | ------------------------------------------------- |
| `.push()`     | Menambahkan elemen di akhir array                 |
| `.pop()`      | Menghapus elemen terakhir dari array              |
| `.shift()`    | Menghapus elemen pertama                          |
| `.forEach()`  | Menjalankan fungsi untuk setiap item              |
| `.map()`	    | Mengubah setiap item dan mengembalikan array baru |

Pada catatan kali, kita akan belajar lebih lanjut lagi mengenai array method! 

## Object Method 

Object Method adalah fungsi (function) yang didefinisikan sebagai properti di dalam sebuah objek dan digunakan untuk menggambarkan perilaku (aksi) dari objek tersebut.

Penjelasan rinci 

| Istilah               | Artinya                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------- |
| **Object**            | Struktur data yang menyimpan data dalam bentuk pasangan `key: value`.                   |
| **Fungsi (function)** | Blok kode yang bisa dijalankan, biasanya untuk melakukan aksi tertentu.                 |
| **Method**            | Fungsi yang jadi bagian dari objek.                                                     |
| **Properti**          | Elemen dalam objek. Bisa berupa nilai biasa atau fungsi (jika fungsi → disebut method). |

Contoh 

```
const orang = {
  nama: "Faris",
  sapa: function() {
    console.log("Halo, saya " + this.nama);
  }
};
```

variabel `orang` adalah object sedangkan `sapa` ialah method dari variabel `orang` tersebut, yang dimana `sapa` ini memiliki aksi yaitu memanggil isi object yaitu `nama` ke console.


# **NB**
### Hal-hal yang perlu dipelajari di awal sebelum masuk ke method object 

| Kuasai | 
|--------|
| Membuat Object |
| Menambah dan menghapus properti object |
|  Method dalam object |
| `this` keyword |
| Memanggil method lain dalam object |
| `for...in` loop |
| Akses properti dengan [] |

## 1. Membuat object 

seperti pada catatan sebelumnya membuat object itu cukup mudah yaitu: 

```
let mobil = [
  {
  merek : "Toyota",
  warna : "Hitam", 
  tahun : 2019, 
  bensin : "oplosan pertalite"
  }
]; 
```

## 2. Menghapus dan menambahkan properti object

### A. Menambahkan properti 

Untuk menambahkan properti ke dalam object maka perlu menggunakan `keyword` nama variabelnya kemudian berikan apa yang ditambah. 

Contoh 
```
let mobil = [
  {
    merek : "Toyota",
    warna : "Hitam", 
    tahun : 2019, 
  }
]; 

// tambahkan properti baru dan valuenya

mobil.bensin = "oplosan pertalite"; 

console.log(mobil) 

/*
output : 
[
  {
    merek: 'Toyota',
    warna: 'Hitam',
    tahun: 2019,
    bensin: 'oplosan pertalite'
  }
]
*/
```

## B. Menghapus properti 

Dalam menghapus properti pada object maka kita harus mengakses object tersebut dengan menggunakan `[]` dan menggunakan keyword `delete`. 

Contoh 
```
let motor = [ 
  {
    merek : "Honda", 
    warna : "Hitam", 
    tahun : 2019, 
}
];
// akses object tersebut. 
delete motor[0].tahun;
```
Dalam kode tersebut secara otomatis akan menghapus properti yang berisi tahun dan untuk mengakses object kita hanya menggunakan angka 0 saja, karena object bukan array yang bisa di akses secara langsung(Jika object tersebut hanya satu) Namun, jika array tersebut memiliki banyak object maka urutkan saja sesuaikan dengan urutan object tersebut. Hal ini juga berlaku pada penambahan properti. 