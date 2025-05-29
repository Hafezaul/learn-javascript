### 5. `.every`

.every() digunakan untuk mengecek apakah semua elemen dalam array memenuhi syarat tertentu.
Jika semuanya memenuhi, hasilnya true. Tapi kalau ada satu saja yang tidak, hasilnya false.

Sintaks 

```
let array = ["value"]; 
let newArray = array.every((a) => a logika); 

console.log(newArray); 
```

Contoh 

```
let namaOrang = ["Budi", "Yanto", "Ariel", "Ediye"];
let orangNama = namaOrang.every((n) => n.length > 3); 

console.log(orangNama);
```

Pada kode diatas tersebut akan menjalankan program untuk mencari nilai `true`. Apakah variabel namaOrang itu memiliki array yang mana panjang stringnya 3. Jika ada maka hasilnya `true` jika tidak maka hasilnya `false`. 
