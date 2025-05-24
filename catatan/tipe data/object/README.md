# Object JavaScript 
### Pengertian object 
Object pada bahasa pemroraman merupakan "abstraksi" dari benda yang ada di dunia nyata. Object dapat digunakan untuk menyimpan data.

Pada JavaScript, object terdiri dari `name` dan `value(variable)` atau `method(fungsi)`.

Name dan value disebut sebagai property.

## Analogi Object 

<img src="https://cdn-cdpl.sgp1.cdn.digitaloceanspaces.com/courses/basic-javascript/images/analogi_object.png" alt="analogi object">

Kita bisa menganalogikan suatu object `mobil` mempunyai beberapa name antara lain `nama mobil, berat, warna dan tipe`.

Masing-masing name tersebut mempunyai value misalnya `nama mobil` memiliki value `Toyota, berat` memiliki value `600kg`, warna memiliki value `putih, tipe` memiliki value `Agya`. Nah name dan value tersebut disebut sebagai property.

<img src="https://cdn-cdpl.sgp1.cdn.digitaloceanspaces.com/courses/basic-javascript/images/fungsi.png" alt="analogi object function">

Selain dapat menyimpan property, kita juga bisa menyimpan method atau fungsi, misalnya sebuah mobil bisa mempunyai fungsi `maju, mundur` dan sebagainya.

## Cara menggunakan object 

### Inisialisasi Object & Property 

Berdasarkan analogi di atas, kita bisa menginisialisasi property sebagai berikut ini.

```
var Mobil = {nama:"Toyota", tipe:"Agya",berat:600, warna:"putih"}
```

### Inisialisasi Method
Selain inisialisasi property, kita juga bisa menginisialisasi method di dalam object.

```
var Mobil = 
{
    nama:"Toyota", 
    tipe:"Agya",
    berat:600,
    warna:"putih",
    maju : function() {
        return "Mobil Melaju";
    },
    mundur : function()
    {
        return "Mobil Mundur";
    }
}
```
Pada contoh di atas, selain menginisialisasi property kita juga menginisialisasi fungsi maju dan mundur pada object Mobil.

### Mengakses Property dan Method pada Object
Untuk mengakses method pada object kita bisa menggunakan contoh sintaks seperti di bawah ini.

```
nama_object.nama_method();
```