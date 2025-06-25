let userName = {
    name : "Faris Iskandar Hafidz",
    alamat : "Surakarta", 
    no_telp : '0289398264982',

};
userName.alamat = "Boyolali" ;
const infoUser = Object.seal(userName); 
console.log(infoUser);


// mengecek status object yang digunakan.
console.log(Object.isSealed(userName));
