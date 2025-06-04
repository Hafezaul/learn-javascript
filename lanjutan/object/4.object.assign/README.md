### 4. `Object.assign(target, ...sources)`

`Object.assign()` digunakan untuk menyalin properti dari satu atau lebih objek sumber (source) ke dalam objek target.
Properti yang sama akan ditimpa (overwrite) oleh yang terbaru jika ada konflik.

## 📘 Struktur Umum:

```
Object.assign(target, source1, source2, ...);
```

- `target`: objek tujuan (hasil akhirnya akan tersimpan di sini).
- `source` : satu atau lebih objek yang isinya akan disalin ke target.

Contoh 

```
const data1 = [{ 
    nama : "Faris Iskandar",
}]; 
const data2 = [{ 
    nomor : 2,
    kelas : 10,
}]; 

let copyData = Object.assign({}, data1[0], data2[0]);

console.log(copyData)
```