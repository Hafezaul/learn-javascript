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

### B. Menghapus properti 

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

## 3. `this`

`this` adalah keyword khusus dalam JavaScript yang merujuk ke object tempat di mana kode itu sedang dijalankan.

Contoh 

```
function sapa() {
  console.log("Halo, saya " + this.nama);
}

const orang1 = { nama: "Aldi", sapa: sapa };
const orang2 = { nama: "Budi", sapa: sapa };

orang1.sapa(); // Halo, saya Aldi
orang2.sapa(); // Halo, saya Budi

```

`this` tersebut akan mengakses properti yang dituju(`nama`), kemudian ia akan di tampilkan pada console. Jika menggunakan `this` ini pada luar object maka ia akan di anggap sebagai global object(window di browser). 
 
Jadi gunakan `this` ini ketika ;

- Kamu ingin mengakses data dalam object dari method
- Kamu ingin method tersebut bisa digunakan ulang di banyak object

Catatan tambahan mengenai `this`

| Lokasi `this`        | Mengacu ke                                    |
| -------------------- | --------------------------------------------- |
| Dalam object method  | object itu sendiri                            |
| Dalam function biasa | global object (`window`)                      |
| Dalam event DOM      | elemen DOM yang ditrigger                     |
| Dalam arrow function | *Tidak punya `this` sendiri*, ambil dari luar |

## 4. `for....in`

`for...in` adalah loop (perulangan) yang digunakan untuk mengakses semua nama properti (key) dalam sebuah object.

Contoh 

```
  let user = 
    { 
        nama : "Faris Iskandar Hafidz",
        umur : 17, 
        schol : "SMK IT Informatika"
    };

  for (let key in user) {
    console.log(user);
    console.log(user[key]);
}
``` 

- key dalam for...in akan mewakili setiap properti dalam object.
- Untuk ambil nilainya, gunakan bracket notation: user[key]
- Tidak bisa pakai user.key, karena itu mengakses literal "key".

output 

```
{
  nama: 'Faris Iskandar Hafidz',
  umur: 17,
  schol: 'SMK IT Informatika'
}
Faris Iskandar Hafidz
{
  nama: 'Faris Iskandar Hafidz',
  umur: 17,
  schol: 'SMK IT Informatika'
}
17
{
  nama: 'Faris Iskandar Hafidz',
  umur: 17,
  schol: 'SMK IT Informatika'
}
SMK IT Informatika
```
Gunakan `for...in` ketika ; 

- Menampilkan semua properti di sebuah object
- Menyalin/memodifikasi properti
- Mengecek isi object tanpa tahu isinya secara spesifik

⚠️ Catatan Penting:
- `for...in` tidak digunakan untuk array secara umum, karena array punya index numerik.
- Untuk array, sebaiknya pakai `for...of` atau `.forEach()`.

## 5. Akses properti dengan []


JavaScript menyediakan dua cara untuk mengakses properti dalam sebuah object, yaitu:

---

### 1. Dot Notation (`.`)

Digunakan ketika nama properti **sudah pasti (statis)** dan **tidak mengandung spasi atau karakter khusus**.

Contoh 

```
let user = {
  nama: "Faris",
  umur: 17
};

console.log(user.nama); // Output: Faris
```

2. Bracket Notation ([])
Digunakan saat:

- Nama properti disimpan dalam variabel
- Nama properti memiliki spasi atau karakter khusus

Contoh 

```
let user = {
  nama: "Faris",
  umur: 17,
  "nama lengkap": "Faris Iskandar Hafidz"
};

let prop = "umur";

console.log(user["nama"]);          // Output: Faris
console.log(user[prop]);            // Output: 17
console.log(user["nama lengkap"]);  // Output: Faris Iskandar Hafidz
```
### Perbandingan Dot ( . ) dan Bracket ( [] )

| Kebutuhan                                       | Dot (`.`) | Bracket (`[]`) |
| ----------------------------------------------- | --------- | -------------- |
| Nama properti statis                            | ✅         | ✅              |
| Nama properti dari variabel                     | ❌         | ✅              |
| Nama properti dengan spasi atau karakter khusus | ❌         | ✅              |

### Tips 

- Gunakan dot notation saat memungkinkan karena lebih singkat dan mudah dibaca.
- Gunakan bracket notation saat properti dinamis atau tidak bisa dituliskan langsung (misal: dari user input, nama dengan spasi, dll).
