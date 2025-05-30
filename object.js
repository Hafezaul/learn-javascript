const mobil = {
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

mobil.jalan(); 
mobil.belok();