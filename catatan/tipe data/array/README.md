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