let chuoi = prompt("Nhập chuỗi:");

let kyTuCanTim = prompt("Nhập ký tự cần tìm:");

let timThay = false;

for (let i = 0; i < chuoi.length; i++) {
  if (chuoi[i] === kyTuCanTim) {
    timThay = true; 
    break; 
  }
}

if (timThay) {
  console.log("Ký tự '" + kyTuCanTim + "' được tìm thấy trong chuỗi.");
} else {
  console.log("Ký tự '" + kyTuCanTim + "' không được tìm thấy trong chuỗi.");
}