# Pengulangan dalam JavaScript 

### Pengertian Pengulangan
Dalam bahasa pemrograman, pengulangan dapat digunakan untuk "mengulang" kode yang kita inginkan, dengan data yang berbeda.

Pengulangan pada Javascript bisa menggunakan beberapa cara antara lain :

- For Loop
- While
- Do While

# For Looping 
For loop digunakan untuk pengulangan melalui blok kode beberapa kali.

Sintaks

```
for(pernyataan1; pernyataan 2; pernyataan 3)
{
    //blog kode yang akan dijalankan
}
```
- Penyataan 1 dijalankan (satu kali) sebelum eksekusi blok kode.

- Pernyataan 2 mendefinisikan kondisi untuk mengeksekusi blok kode.

- Pernyataan 3 dijalankan (setiap saat) setelah blok kode dijalankan.

```
for(i=0;i<5;i++)
{
    teks += "Ini adalah nomor" + 1 + "<br>";
}
``` 
# While Looping 
While digunakan untuk pengulangan melalui blok kode selama kondisi tertentu benar.

Sintaks
```
while(kondisi)
{
    //blok kode yang akan dijalankan
}
```
Contoh 
```
while(i<10)
{
    teks +="Ini adalah nomor " + i;
    i++;
}
``` 
Saat kondisi bernilai true atau benar, maka pengulangan akan dijalankan.

# Do-while Looping 
Do while loop adalah varian dari while loop. Looping ini akan mengeksekusi kode satu kali, sebelum memeriksa apakah kondisinya benar, jika kondisinya benar maka akan mengulang loop.

Sintaks 

```
do
{
    //kode yang akan dijalankan
}
while(kondisi);
```
Contoh 
```
do
{
    teks +="Ini adalah nomor " + i;
    i++;
}
while(i<10);
```


# ***NB***

- **Jika Ingin menggunakan looping maka berhati-hati lah karena program ini bisa saja menjalankan perulangan tanpa henti yang dapat menghentikan browser atau bahkan device yang digunakan!**
- **Cek Kembali program yang telah dibuat dan teliti kembali apakah program yang sudah dibuat tepat digunakan pada proyek tersebut!**