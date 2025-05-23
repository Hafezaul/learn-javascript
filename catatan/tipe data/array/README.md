# Array Lanjutan 

### 1.Memanggil salah satu array 

```
var merekMobil = ["Avanza", "Mazda", "Ayla"];
```

Jika ingin memanggil salah satu dari array merekMobil maka bisa menggunakan `merekMobil[0]`

Contoh 
```
var merekMobil = ["Avanza", "Mazda", "Ayla"];
console.log(merekMobil[1]); // output Mazda
```

### 2.Mencari banyak array 
Jika ingin mengetahu banyak jumlah array yang disimpan maka dapat menggunakan `merekMobil.length`

Contoh 

```
var merekMobil = ["Avanza", "Mazda", "Ayla"];

jumlahMobil = merekMobil.length;
console.log(jumlahMobil); // output 3
```

### 3.Mengubah array menjadi string
Untuk mengubah array menjadi string ada 2 cara yang bisa diguanakan. Yaitu, 

1. `.toString`
2. `.join`

Contoh `.toString`
```
var merekMobil = ["Avanza", "Mazda", "Ayla"];

console.log(merekMobil.toString()); 
// output : "Avanza,Mazda,Ayla"
```

Contoh `.join`
```
var merekMobil = ["Avanza", "Mazda", "Ayla"];

console.log(merekMobil.join(" * "));
// output : "Avanza * Mazda * Ayla"
```

### 4.Membuang Array 
Dalam membuang array ada 2 teknik yang bisa digunakan. Yaitu;

1. .pop();
2. .shift();

Kedua teknik tersebut memiliki kegunaannya masing-masing. 

- `.pop();` : Digunakan untuk membuang data array terakhir. 
- `.shift();` : Digunakan untuk membuang data array pertama.

Contoh `.pop();` 
```
let namaBuah = ["Pisang", "Apel", "Pepaya"]; 
let buangBuah = namaBuah.pop(); 

console.log(namaBuah); // output : Pepaya 
```
Contoh `.shift`


```
let namaBuah = ["Pisang", "Apel", "Pepaya"]; 
let buangBuah = namaBuah.shift(); 

console.log(namaBuah); // output : Pisang 
```

### Memasukkan data baru pada array 
Memasukkan data baru pada array bisa menggunakan `.push("new_array ");`

Contoh 

```
merekMobil = ["Avanza", "Ayla", "Mazda"]; 
merekMobil.push("Fortuner");
console.log(merekMobil); // output : "Avanza, Ayla, Mazda, Fortuner"
```

### Mengabungkan 2-3 Array Dalam 1 Blok 
Dalam menggabungkan 2/3 array maka bisa menggunakan `.concat(name_array1, name_array2);`

Contoh 
```
let mobilMahal = ["Fortuner", "Lamborghini"];
let mobilBudget = ["Avanza", "Ayla"];
var motor = ["Verza", "CB 1500R", "MegaPro"];

let semuaKendaraan = mobilMahal.concat(mobilBudget, motor);
console.log(semuaKendaraan);
 // output : ["Fortuner", "Lamborghini", "Avanza", "Ayla", "Verza", "CB 1500R", "MegaPro"]
```
# Iterasi array 
Iterasi array adalah proses mengakses atau melewati setiap elemen dalam sebuah array satu per satu, biasanya untuk melakukan suatu operasi, seperti menampilkan data, menghitung nilai, memodifikasi elemen, dll.

### Iterasi data dari array dengan `for` dan `forEach`
Melakukan perulangan (looping) untuk mengakses setiap elemen dalam array — satu per satu — dan melakukan sesuatu terhadap elemen itu (misalnya ditampilkan, diubah, dihitung, dll).

#### C. Iterasi dengan for (versi klasik):
```
let buah = ["apel", "jeruk", "pisang"];

for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}
// output : apel
        // jeruk
        // pisang
```
- `i` adalah indeks array.

- `buah[i]` mengambil isi dari array satu per satu.

- Kamu punya kontrol penuh atas indeks dan perulangan.

#### B. Iterasi dengan forEach (lebih modern dan sederhana):
```
let buah = ["apel", "jeruk", "pisang"];

buah.forEach(function(item) {
  console.log(item);
});
// output : ['apel', 'jeruk', 'pisang']
```
Atau versi arrow function:

```
buah.forEach(item => console.log(item));
```
- `item` adalah isi dari array, bukan indeks.

- Cocok saat kamu hanya ingin mengakses isi array.

- Tidak bisa langsung "break" atau "continue" seperti di for.

### ⚖️ Perbandingan cepat:
| Fitur                 | `for`   | `forEach`                        |
| --------------------- | ------- | -------------------------------- |
| Akses index           | ✅ Ya    | ✅ Bisa (opsional parameter ke-2) |
| Bisa break/continue   | ✅ Ya    | ❌ Tidak bisa                     |
| Lebih singkat         | ❌ Tidak | ✅ Ya                             |
| Cocok untuk ubah data | ✅ Ya    | ✅ Ya (tergantung kebutuhan)      |
