const data1 = [{ 
    nama : "Faris Iskandar",
}]; 
const data2 = [{ 
    nomor : 2,
    kelas : 10,
}]; 

let copyData = Object.assign({}, data1[0], data2[0]);

console.log(copyData)


// percobaan tanpa bracket []

const user = { name : "Faris Hafidz"}; 
const extra = { age : 7, hobby : "Ngoding"}; 

let copyUser = Object.assign(user, extra);
console.log(copyUser);
