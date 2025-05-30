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