const dataUser = {
    nama : "Faris Iskandar Hafidz", 
    kelas : 10, 
    alamat : { 
        kota : "Surakarta", 
        provinsi : "Jawa Tengah", 
        negara : "Indonesia"
    }, 
    umur : 17,
}; 
const fixDataUser = Object.freeze(dataUser); 
dataUser.nama = "Faris Saja"; 
console.log(fixDataUser);
dataUser.alamat.kota = "Jakarta"
