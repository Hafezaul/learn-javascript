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
