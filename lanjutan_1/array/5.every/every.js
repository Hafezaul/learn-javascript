let namaOrang = ["Budi", "Yanto", "Ariel", "Ediye"];
let orangNama = namaOrang.every((n) => n.length > 3); 
console.log(orangNama);

let angka = [9, 5, 3, 7, 5, 10, 3, 6]; 
let angkaBaru = angka.every((a) => a > 1); 
console.log(angkaBaru);

const nilaiUjian = [70, 85, 90, 88];

// TUGAS: Buat kondisi every() untuk cek apakah semua nilai di atas KKM (misalnya 70)
const lulusSemua = nilaiUjian.every((b) => b >= 70); // isi di sini

console.log(lulusSemua); // hasilnya harusnya true

