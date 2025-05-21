// Operator aritmatika 
 
let a = 2 + 2;
console.log(a);

// operator assignment 

let nilaiA = 100; 
nilaiA -= nilaiA;
console.log(nilaiA); // Output: 0

// operator pengabungan string 

let salam = "Halo";
let tempat = "Dunia";
let hasil = salam + " " + tempat;

console.log(hasil); // Output: "Halo Dunia"

// operator pembanding 
 let valueA = 3;
 let valueB = 6; 
 let result = valueA > valueB;
 console.log(result); // Output: false

 // operator logika 

// AND atau && 
let usia = 20;
let punyaKTP = true;

if (usia >= 17 && punyaKTP) {
  console.log("Bisa membuat SIM");
}
// Output: Bisa membuat SIM

// OR atau  || 
let punyaSIM = false;
let punyaKTPA = true;

if (punyaSIM || punyaKTPA) {
  console.log("Boleh masuk area");
} 
// Output: Boleh masuk area

// NOT atau ! 
let sedangOnline = false;

if (!sedangOnline) {
  console.log("User sedang offline");
}
// Output: User sedang offline
