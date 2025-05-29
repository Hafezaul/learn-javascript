### 3. `.reduce`

reduce() dipakai untuk menggabungkan semua elemen dalam array menjadi satu nilai.
Biasanya digunakan untuk:

- Menjumlahkan angka
- Menghitung total
- Menggabungkan string
- Membuat statistik dari array of object

 Sintaks Dasar:

```
array.reduce((accumulator, currentValue) => {
  // logika
  return hasilBaru;
}, nilaiAwal);
``` 

- `accumulator`: nilai sementara (hasil sebelumnya)
- `currentValue`: nilai saat ini dari array
- `nilaiAwal`: nilai awal dari accumulator (wajib ditulis kalau ingin hasil akurat)

Contoh 

```
let nomor = [1, 2, 3, 4, 5, 6, 7]; 
let jumlahNomor = nomor.reduce((p, q) => p + q, 0);
console.log(jumlahNomor);
// output 28
```

Contoh kode diatas merupakan sintaks `.reduce` yang digunakan untuk menjumlah seluruh array. Selain untuk menjumlah/mengabungkan array, `.reduce` juga bisa digunakan untuk membantu statistik.

contoh 
```

const nameStudent = [
    { nama: "Rizky Putra", address: "Jl. Melati No. 12", class: "A" },
    { nama: "Sarah Ayu", address: "Jl. Mawar No. 4", class: "B" },
    { nama: "Dimas Saputra", address: "Jl. Anggrek No. 19", class: "C" },
    { nama: "Lina Kartika", address: "Jl. Kamboja No. 2", class: "A" },
    { nama: "Fahmi Ramadhan", address: "Jl. Dahlia No. 7", class: "B" },
    { nama: "Mira Salsabila", address: "Jl. Flamboyan No. 21", class: "C" },
    { nama: "Andi Pratama", address: "Jl. Kenanga No. 8", class: "A" },
    { nama: "Siti Nurhaliza", address: "Jl. Cempaka No. 5", class: "B" },
    { nama: "Yoga Permana", address: "Jl. Teratai No. 3", class: "C" }
];

let statistik = nameStudent.reduce((acc, item) => {
    if (acc[item.class]){
        acc[item.class]++;
    } else {
        acc[item.class] = 1;
    };
    return acc;
}, {});
```
output 
```
{
  A: 3,
  B: 3,
  C: 3
}
```
