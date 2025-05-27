// if dan else

let a = 22; 

if (a < 20){
    console.log("selamat anda masuk");
} else {
    console.log("selamat anda belum masuk");
}

// else-if 
let b = 10;
if (b < 5) {
    console.log("Anda masih bocil");
    
} else if (b = 10){
    console.log("Anda masih remaja");
} else if (b > 17){
    console.log("Anda sudah dewasa dan selamat atas dewasanya :v ");
} else {
    console.log("Anda kenapa?");
}

// switch 

let lampu = "merah";

        switch (lampu){
            case "merah" :
            console.log("Lampu berwarna merah");
        break; 
        case "kuning" :
            console.log("Lampu berwarna kuning");
        break; 
        case "hijau" :
            console.log("Lampu berwarna hijau");
        break; 
        case "pink" :
            console.log("Lampu berwarna pink");
        break; 
            default: 
        console.log("warna apa bang?");
        break;

};

// Ternary operator 

let age = 17; 

let result = age > 18 ? "Anda sudah dewas" : "Anda belum dewasa"; 
console.log(result);
