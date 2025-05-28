// mengabungkan jumlah seluruh array 
let nomor = [1, 2, 3, 4, 5, 6, 7]; 
let jumlahNomor = nomor.reduce((p, q) => p + q, 0);
console.log(jumlahNomor);


// Mengabungkan seluruh string yang ada
let nama = ["Faris", "Iskandar", "Hafidz"]; 
let namaSaya = nama.reduce((a, b) => a + " " + b);
console.log(namaSaya);

// total dan statistik dalam reduce!

const nameStudent = [
    { nama: "Rizky Putra", address: "Jl. Melati No. 12", class: "A" },
    { nama: "Sarah Ayu", address: "Jl. Mawar No. 4", class: "B" },
    { nama: "Dimas Saputra", address: "Jl. Anggrek No. 19", class: "C" },
    { nama: "Lina Kartika", address: "Jl. Kamboja No. 2", class: "A" },
    { nama: "Fahmi Ramadhan", address: "Jl. Dahlia No. 7", class: "B" },
    { nama: "Mira Salsabila", address: "Jl. Flamboyan No. 21", class: "C" },
    { nama: "Andi Pratama", address: "Jl. Kenanga No. 8", class: "A" },
    { nama: "Siti Nurhaliza", address: "Jl. Cempaka No. 5", class: "B" },
    { nama: "Yoga Permana", address: "Jl. Teratai No. 3", class: "C" }
];

// total contoh
let totalStudent = nameStudent.reduce((e, d) => e + 1, 0);
console.log(totalStudent);

// statistik contoh 
let statistik = nameStudent.reduce((acc, item) => {
    if (acc[item.class]){
        acc[item.class]++;
    } else {
        acc[item.class] = 1;
    };
    return acc;
}, {});

console.log(statistik);
