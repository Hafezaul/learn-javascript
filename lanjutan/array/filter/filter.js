// contoh array dengan filter
let angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 

let newAngka = angka.filter(function(item){
 return item % 3  === 0; 
}); 

console.log(newAngka);


const namaSiswa = [
    {nama : "Faris Iskandar Hafidz", rank : "Legend"}, 
    {nama : "Umar Mujahid Ihsan", rank : "Mythical Honor"},
    {nama : "Fuad Umar Yasin", rank : "Mythical"}, 
    {nama : "Alvian", rank : "Mythical Honor"}, 
    {nama : "Ammar", rank : "Mythical"}, 
    {nama : "Ahmad", rank : "Legend"}, 
    {nama : "Fadhil", rank : "Mythical"}, 
    {nama : "Yusuf", rank : "legend"}, 
    {nama : "Khalid", rank : "Mythical Honor"}
]; 

let sortirSiswa = namaSiswa.filter(p => p.rank === "Legend" || p.rank === "legend");
console.log(sortirSiswa);

const nameGame = [
    {game : "Mobile Legend", devoloper : "Moonton"}, 
    {game : "Free Fire", developer : "Garena"},
    {game : "Call of Duty", developer : "Garena"}, 
    {game : "Magic Chees", developer : "Moonton"}, 
    {game : "PUBG Mobile", developer : "Tencent"}, 
    {game : "PUBG Lite", developer : "Tencent"}

]; 

const hasil = nameGame.filter(function(game) {
    if (game.developer === "Moonton" || game.developer === "Tencent") {
        return true; // disimpan dalam hasil
    } else {
        return false; // tidak disimpan
    }
});

console.log(hasil);

