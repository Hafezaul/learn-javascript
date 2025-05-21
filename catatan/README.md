# Operator Javascript 
### Pengertian Operator
Operator adalah simbol-simbol khusus yang digunakan untuk mengoperasikan suatu nilai data (operand).

### Macam Operator
- Operator Aritmatika
- Operator Assignment
- Operator Penggabungan String
- Operator Pembanding
- Operator Logika

# Operator Aritmatika

Operator aritmatika digunakan untuk melakukan aritmatika pada angka.

| **Operator** | **Penjelasan**                  | **Contoh**       |
|--------------|----------------------------------|------------------|
| `+`          | Penambahan                       | `1 + 1` hasilnya `2` |
| `-`          | Pengurangan                      | `1 - 1` hasilnya `0` |
| `*`          | Perkalian                        | `1 * 3` hasilnya `3` |
| `/`          | Pembagian                        | `10 / 2` hasilnya `5` |
| `%`          | Modulus (sisa pembagian)         | `7 % 2` hasilnya `1` |
| `++`         | Increment (menambah 1 nilai)     | `let x = 5; x++` hasilnya `6` |
| `--`         | Decrement (mengurangi 1 nilai)   | `let x = 5; x--` hasilnya `4` |

# Operator Assignment 

Operator Assignment memberikan nilai ke variabel Javascript.

| **Operator** | **Contoh** | **Sama Seperti** |
|--------------|------------|------------------|
| `=`          | `x = y`    | `x = y`          |
| `+=`         | `x += y`   | `x = x + y`      |
| `-=`         | `x -= y`   | `x = x - y`      |
| `*=`         | `x *= y`   | `x = x * y`      |
| `/=`         | `x /= y`   | `x = x / y`      |
| `%=`         | `x %= y`   | `x = x % y`      |

# Operator Pengabungan String 

Operator ini digunakan untuk menggabungkan dua atau lebih string jadi satu string baru.


| **Operator** | **Penjelasan**               | **Contoh**                          | **Hasil**           |
|--------------|-------------------------------|-------------------------------------|----------------------|
| `+`          | Menggabungkan dua string      | `"Halo" + " Dunia"`                 | `"Halo Dunia"`       |
| `+=`         | Menambahkan string ke variabel| `let x = "Halo"; x += " Dunia";`    | `x = "Halo Dunia"`   |

Contoh code 
```
let salam = "Halo";
let tempat = "Dunia";
let hasil = salam + " " + tempat;

console.log(hasil); // Output: "Halo Dunia"
```
 
# Operator Pembanding
Operator pembanding digunakan untuk membandingkan dua nilai. Hasilnya selalu true atau false (tipe data Boolean). 

| **Operator** | **Penjelasan**                   | **Contoh**            | **Hasil**     |
|--------------|----------------------------------|------------------------|----------------|
| `==`         | Sama dengan (tanpa cek tipe)     | `5 == '5'`             | `true`         |
| `===`        | Sama persis (dengan cek tipe)    | `5 === '5'`            | `false`        |
| `!=`         | Tidak sama (tanpa cek tipe)      | `5 != '5'`             | `false`        |
| `!==`        | Tidak sama persis (cek tipe)     | `5 !== '5'`            | `true`         |
| `>`          | Lebih besar                      | `10 > 5`               | `true`         |
| `<`          | Lebih kecil                      | `3 < 8`                | `true`         |
| `>=`         | Lebih besar atau sama            | `5 >= 5`               | `true`         |
| `<=`         | Lebih kecil atau sama            | `3 <= 2`               | `false`        |

# Operator Logika

Operator logika digunakan untuk menggabungkan ekspresi boolean (true/false). Biasanya digunakan dalam kondisi if, while, dan switch.

| **Operator** | **Nama**      | **Penjelasan**                                           | **Contoh**                   | **Hasil**         |
|--------------|----------------|-----------------------------------------------------------|-------------------------------|-------------------|
| `&&`         | AND            | True jika **semua kondisi bernilai true**                | `true && true`                | `true`            |
| `||`         | OR             | True jika **salah satu kondisi bernilai true**           | `true || false`               | `true`            |
| `!`          | NOT            | Membalikkan nilai boolean (true jadi false, dan sebaliknya) | `!true`                     | `false`           |
 
Contoh Kode untuk operator logika

```
// AND atau && 
let usia = 20;
let punyaKTP = true;

if (usia >= 17 && punyaKTP) {
  console.log("Bisa membuat SIM");
}
// Output: Bisa membuat SIM

// OR atau  || 
let punyaSIM = false;
let punyaKTP = true;

if (punyaSIM || punyaKTP) {
  console.log("Boleh masuk area");
}
// Output: Boleh masuk area

// NOT atau ! 
let sedangOnline = false;

if (!sedangOnline) {
  console.log("User sedang offline");
}
// Output: User sedang offline

```