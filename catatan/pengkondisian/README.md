# Pengkondisian 

### Pengertian Kondisi
Pernyataan kondisional digunakan untuk melakukan tindakan yang berbeda berdasarkan pada kondisi yang berbeda. Sangat sering ketika kita menulis kode, kita ingin melakukan tindakan yang berbeda untuk keputusan yang berbeda.

Pada javascript kita bisa menggunakan beberapa sintaks di bawah untuk menjalankan pernyataan kondisional.

- If
- Else
- Else If
- Switch

# if 
Gunakan if untuk menentukan blok kode yang akan dieksekusi jika kondisi yang ditentukan bernilai benar.

if harus diketik dengan huruf kecil, apabila tidak, maka javascript akan menampilkan pesan error.

Sintaks
```
if(kondisi)
{
    //kode yang akan dijalankan jika true
}
```
Contoh
```
if(jam < 10)
{
    sambutan = "Selamat Pagi!";
}
```
Pada contoh di atas, berarti jika jam kurang dari 10, maka sambutan diisi dengan `Selamat Pagi!` .

# else
Gunakan else untuk menentukan blok kode yang akan dieksekusi jika kondisi yang ditentukan bernilai salah.

Sintaks

```
if(kondisi)
{
    //kode yang akan dijalankan jika true
}
else
{
    //kode yang akan dijalankan jika false
}
```
Contoh
```
if(jam < 10)
{
    sambutan = "Selamat Pagi!";
}
else
{
    sambutan = "Selamat Malam!";
}
```
Pada contoh di atas, berarti jika jam kurang dari 10, maka sambutan diisi dengan Selamat Pagi!, jika tidak maka sambutan diisi dengan `Selamat Malam!`.

# else if
Gunakan pernyataan else if untuk menentukan kondisi baru jika kondisi pertama salah.

Sintaks
```
if(condition1)
{
    //jalankan jika kondisi 1 true
}
else if(condition2)
{
    //jalankan jika kondisi 1 false dan kondisi 2 true
}
else
{
    //jalankan jika kondisi 1 false dan kondisi 2 false
}
```
Contoh
```
if(jam < 10)
{
    sambutan = "Selamat Pagi!";
}
else if(jam < 20)
{
    sambutan = "Selamat siang!";
}
else
{
    sambutan = "Selamat Malam!";
}
```
Pada contoh di atas, jika jam kurang dari 10, maka sambutan diisi dengan Selamat Pagi!, jika tidak kurang dari 10 dan jam kurang dari 20 maka sambutan diisi dengan Selamat siang! jika tidak maka sambutan diisi dengan `Selamat Malam!`.

# switch
Pernyataan switch digunakan untuk melakukan tindakan yang berbeda berdasarkan pada kondisi yang berbeda. (sama seperti if-else if-else)

Sintaks
```
switch(expression)
{
    case x :
    	//kode
    break;
    case y:
    	//kode
    break;
    default:
    	//kode
}
```
Contoh
```
switch(x)
{
    case 0 :
		text = "Padam";
	break;
    case 1:
    	text = "Nyala";
    break;
    default:
    	text= "Data Tidak Ada";
}
```

# Ternary Operator 
Ternary operator adalah cara singkat dalam melakukan pengkondisian `true` atau `false` pada suatu program. 

Sintaks 
```
name_variabel = condition ? valueTrue : valueFalse ;
```
Contoh 
```
let age = 17; 
let result = age > 18 ? "Anda sudah dewas" : "Anda belum dewasa"; 
console.log(result); // output is Anda belum dewasa
```