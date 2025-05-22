# Fungsi JavaScript 
Fungsi JavaScript adalah blok kode yang dirancang untuk melakukan tugas tertentu.

Fungsi JavaScript dijalankan ketika "sesuatu" memanggilnya.

## Aturan Membuat Fungsi
- Fungsi JavaScript didefinisikan dengan keyword "function", lalu diikuti oleh nama fungsi, lalu diikuti oleh tanda kurung ().
- Nama fungsi dapat berisi huruf, angka, underscore (_), dan tanda dolar (aturan yang sama dengan variabel).
- Tanda kurung termasuk nama parameter dipisahkan oleh koma, contohnya seperti (parameter1, parameter2, ...)
- Kode yang akan dieksekusi ditempatkan di dalam kurung kurawal: {}

## Membuat Fungsi
Berikut sintaks untuk membuat fungsi.

Sintaks
```
function name(parameter1, parameter2, parameter3)
{
    code to be executed
}
```
Fungsi dengan "return"
Fungsi JavaScript dapat ditambahkan dengan statement "return" untuk mengembalikan data.

```
function kalikanAngka(a, b)
{
    return a*b; //Function mengembalikan hasil kali antara a dan b
}
```
Sebuah fungsi JavaScript akan selalu mengembalikan "return" meskipun kita tidak menentukan isi dari return tersebut.

## Variabel lokal pada Fungsi

Variabel yang dideklarasikan dalam fungsi JavaScript, menjadi variabel lokal (hanya di fungsi tersebut).

Variabel lokal hanya dapat diakses dari dalam fungsi.
```
//Kode disini tidak bisa menggunakan variabel namaMobil
function fungsiMobil()
{
    var namaMobil = "Avanza";
    //Kode disini dapat menggunakan variabel namaMobil
}
//Kode disini tidak bisa menggunakan variabel namaMobil
```