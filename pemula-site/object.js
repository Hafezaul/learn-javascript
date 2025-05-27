var mobil = {
    nama: "Toyota",
    tipe: "Agya",
    berat: 600,
    warna: "putih",

    maju : function() {
        return "Mobil Melaju";
    },
    mundur : function()
    {
        return "Mobil Mundur";
    }
}; 

console.log(`Nama: ${mobil.nama}, Berat: ${mobil.berat} kg, Aksi: ${mobil.maju()}`);

