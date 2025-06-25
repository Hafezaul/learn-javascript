let namaBuah = ["pisang", "apel", "durian"]; 

let nilaiPasti = namaBuah.some((nilai) => nilai === "pisang")
console.log(nilaiPasti);


let jumlahAritmatika = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28 , 30, 31]; 
let nilaiAritmatika = jumlahAritmatika.some((a) => a % 2 === 0); 
console.log(nilaiAritmatika);

const angka = [4, 7, 11, 15];

// TUGAS: Buat kondisi some() untuk mengecek apakah ada angka yang kelipatan 5
const hasil = angka.some((b) => b % 5 === 0); // isi di sini

console.log(hasil); // harusnya true karena ada 15
