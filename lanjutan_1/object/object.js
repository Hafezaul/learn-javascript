/*const mobil = {
    warna : "Hitam", 
    merek : "Toyota", 
    tahun : 2019, 
    jalan : function () {
        console.log(this.merek + " Sedang melaju jalan");   
    },
    belok : function(){
        console.log(this.merek + " Sedang melaju belok");
        
    }
}; 
delete mobil.warna; 
console.log(mobil);

mobil.jalan(); 
mobil.belok(); */


// membuat object & add-delete properti
let motor = [ 
    {
        merek : "Honda", 
        warna : "Hitam", 
        tahun : 2019, 
}, 
    {
        merek : "Suzuki",
        warna : "Merah", 
        tahun : 2020
}

];
motor[1].bensin = "oplosan solar"; 
delete motor[0].tahun;
console.log(motor);

// this 

function sapa() {
    console.log("Halo, saya " + this.nama);
  }
  
  const orang1 = { nama: "Aldi", sapa: sapa };
  const orang2 = { nama: "Budi", sapa: sapa };
  
  orang1.sapa(); // Halo, saya Aldi
  orang2.sapa(); // Halo, saya Budi
  

  // for....in 

  let user = 
    { 
        nama : "Faris Iskandar Hafidz",
        umur : 17, 
        schol : "SMK IT Informatika"
    };

  for (let key in user) {
    console.log(user);
    console.log(user[key]);
}

  