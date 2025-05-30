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

