console.log("Halo Dunia");

// Jenis tipe data 

// String 

let mobil = "Avanza";
// syntax di bawah di gunakan untuk mengubah isi variabel mobil menjadi isi variabel dibawah. Tidak berlaku jika menggunakan `const` hanya pada `var dan let` saja
mobil = "Mazda"
console.log(mobil);

// Number 
let nomorA = 152822; 
console.log(nomorA);


// Mengecek jenis tipe data 

typeof mobil;
typeof nomorA;

// Array 

const arrayContoh = ["Avanza", "Ayla", "Agya"];
console.log(arrayContoh);
// Ketika ingin memanggil salah satu data pada array maka bisa menggunakan `[]` untuk memilih salah satu data pada arrayContoh. Ingat! hitungan awal array di mulai dari 0 bukan 1 !
console.log(arrayContoh[2]); // output : Agya

// Object 

const namaMobil1 = {
    mobil: "Avanza",
    warna: "Hitam"
    };
console.log(namaMobil1);

// beda materi!!


// array lanjutan ! 

// memanggil salah satu array
var merekMobil = ["Avanza", "Mazda", "Ayla"];
console.log(merekMobil[1]); // output Mazda

// mencari banyak array 

jumlahMobil = merekMobil.length;
console.log(jumlahMobil); // output 3

// mengakses data array 

var mobilPertama = merekMobil[0]; // output "Avanza"
var mobilTerakhir = merekMobil[merekMobil.length - 1]; // output Ayla

console.log(mobilTerakhir);

// metode pada array 

// mengubah  array menjadi string 
// metode .toString
console.log(merekMobil.toString()); // output : "Avanza,Mazda,Ayla"

// metode .join

console.log(merekMobil.join(" * ")); // output : "Avanza * Mazda * Ayla"

// membuang data dari array .pop 

// membuang langsung 
merekMobil.pop();

// memasukkan ke variabel lain

var mobilku = merekMobil.pop();

// memasukkan array 

merekMobil.push("Fortuner")

var merekMobil = merekMobil.push("Fortuner");

// mengabungkan dua array 
let mobilMahal = ["Fortuner", "Lamborghini"];
let mobilBudget = ["Avanza", "Ayla"];
let semuaMobil = mobilMahal.concat(mobilBudget);
console.log(semuaMobil); // output : ["Fortuner", "Lamborghini", "Avanza", "Ayla"]

// mengabung 3 array 
var motor = ["Verza", "CB 1500R", "MegaPro"];

let semuaKendaraan = mobilMahal.concat(mobilBudget, motor);
console.log(semuaKendaraan); // output : ["Fortuner", "Lamborghini", "Avanza", "Ayla", "Verza", "CB 1500R", "MegaPro"]