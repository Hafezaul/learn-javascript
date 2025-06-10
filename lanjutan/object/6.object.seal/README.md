### 6.`Object.seal()`

`Object.seal` dalam JavaScript digunakan untuk menyegel object. Yang dimana propertinya tidak dapat dihapus dan ditambah lagi. Tetapi pada `value` properti dapat diubah.

contoh 

```
let userName = {
    name : "Faris Iskandar Hafidz",
    alamat : "Surakarta", 
    no_telp : '0289398264982',

};
delete userName.alamat;
const infoUser = Object.seal(userName); 
console.log(infoUser);
```

Pada code diatas object pada variabel `userName` tidak dapat diubah meski terdapat syntax `delete` pada kode tersebut. Namun, value dari properti pada object variabel `userName` dapat diubah.

Contoh 

```
let userName = {
    name : "Faris Iskandar Hafidz",
    alamat : "Surakarta", 
    no_telp : '0289398264982',

};
userName.alamat = "Boyolali" ;
const infoUser = Object.seal(userName); 
console.log(infoUser);
```
Output 

```
{
  name: 'Faris Iskandar Hafidz',
  alamat: 'Boyolali',
  no_telp: '0289398264982'
}
```

Jadi pada `object.seal()` ini tidak dapat menambah atau menghapus properti pada suatu object namun ia bisa mengubah value dari properti tersebut(yang sudah ada).
