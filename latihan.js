/* 
// variabel 

let contohSederhana = "Faris Iskandar Hafidz"; 
var contohVar = 10;
const tinggiBadan = 175; 

console.log(`Hai nama saya ${contohSederhana} dan saya kelas ${contohVar} serta tinggi saya ialah ${tinggiBadan}`);

// perulangan 
// for
let i = 0; 
 for (i = 0; i < 5; i++){
    console.log("Ini adalah contoh perulangan dengan for " + i);
 }
// while 
let j = 0 
 while(j < 5) {
    console.log("Ini adalah contoh perulangan dengan while " + j);
    j++
 }
// do while 
let k = 0; 
do {
    console.log("Ini adalah contoh perulangan dengan do while " + k);
    k++
} while (k < 5);
    
// perkondisian 
// if - else

let umur = 17; 

if (umur > 15) {
    console.log("Anda sudah dewasa");
} else {
    console.log("Anda belum dewasa");
}

// if - else if

if (umur > 20) { 
    console.log("Anda sudah dewasa");
} else if(umur > 18){ 
    console.log("Anda masih remaja");
} else if(umur = 17){
    console.log("Anda masih remaja!");
} else {
    console.log("Anda masih bocil ye....")
}

// ternary operator 
let angka = 18; 
let result = angka > 17 ? "Anda sudah dewasa" : "Anda belum dewasa" ; 
console.log(result);

// switch 

let lampu = "merah"; 

switch (lampu) {
    case "merah":
        console.log("Berwarna merah");    
      break;
    case "kuning": 
        console.log("Berwarna kuning");
       break; 
    case "hijau": 
        console.log("Berwarna hijau");
       break; 
    case "biru": 
        console.log("Berwarna biru");
       break; 
    default:
        break;
}

// latihan object dan array method 

const nilaiUjian = {
    matematika : 90, 
    bahasaInggris : 95, 
    bahasaArab : 100, 
    seniDanBudaya : 45, 
    bahasaIndonesia : 80, 
    hadits : 90 
};

const ambilUjian = Object.values(nilaiUjian).reduce ((a, b) => a + b);
console.log(ambilUjian);

// mengabungkan seluruh object method 

const nilai = { 
    matematika : 80, 
    bahasaInggris : 90, 
    bahasaArab : 100, 
    bahasaIndonesia : 85, 
    hadits : 89, 
    seniBudaya : 65, 
    sejarah : 90, 
    ekonomi : 80,
}; 

const ambilNilai = Object.entries(nilai); 
const ambilPropertiNilai = Object.keys(nilai);
const ambilValuesNilai = Object.values(nilai);

console.log("Saya mengambil seluruh nilai " + ambilNilai + ", juga saya mengambil propert nilai " + ambilPropertiNilai + ", dan juga saya mengambil kelipatan nilai " + ambilValuesNilai + "");

*/


