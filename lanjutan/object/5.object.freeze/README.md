### 5. `Object.freeze()`

`Object.freeze()` adalah method di JavaScript yang digunakan untuk "membekukan" sebuah object. Artinya, kita tidak bisa lagi mengubah, menambah, atau menghapus properti dari object tersebut.

Contoh 

```
const dataUser = {
    nama : "Faris Iskandar Hafidz", 
    kelas : 10, 
    alamat : { 
        kota : "Surakarta", 
        provinsi : "Jawa Tengah", 
        negara : "Indonesia"
    }, 
    umur : 17,
}; 
const fixDataUser = Object.freeze(dataUser); 
dataUser.nama = "Faris Saja"; 
console.log(fixDataUser);
```
Object pada variabel `dataUser` akan tetap sama setelah di freeze. Kecuali perubahan dilakukan di sebelum sintaks `Object.freeze()`

Output 

```
{
  nama: 'Faris Iskandar Hafidz',
  kelas: 10,
  alamat: { kota: 'Surakarta', provinsi: 'Jawa Tengah', negara: 'Indonesia' },
  umur: 17
}
```

Contoh 

```
const dataUser = {
    nama : "Faris Iskandar Hafidz", 
    kelas : 10, 
    alamat : { 
        kota : "Surakarta", 
        provinsi : "Jawa Tengah", 
        negara : "Indonesia"
    }, 
    umur : 17,
};

dataUser.nama = "Faris Saja"; 
const fixDataUser = Object.freeze(dataUser); 

console.log(fixDataUser);
```

Pada kode tersebut object yang propertinya `nama` akan mengubah valuenya terlebih dahulu kemudian baru `Object.freeze()` akan dijalankan. 

Output 

```
{
  nama: 'Faris Saja',
  kelas: 10,
  alamat: { kota: 'Surakarta', provinsi: 'Jawa Tengah', negara: 'Indonesia' },
  umur: 17
}
```

Namun `Object.freeze()` hanya membekukan lapisan pertama (Shallow freeze), jika didalam object tersebut masih ada object lagi maka object yang kedua tersebut bisa diubah.