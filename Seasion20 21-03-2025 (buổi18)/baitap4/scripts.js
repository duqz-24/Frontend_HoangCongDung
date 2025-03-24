let char = prompt("Nhập chuỗi:");
let word = prompt("nhap vao ki tu can tim")
let check = true

for (let i = 0; i < length; i++) {
  if (str[i] === word ) {
    console.log("ki tu nam trong chuoi")
    check = true; 
    break; 
  }
}
if (check) {console.log("Kí tự không nằm trong chuỗi")}
