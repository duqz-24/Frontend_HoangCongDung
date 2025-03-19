
let n = parseInt(prompt("Nhập một số:"));
let laSoChinhPhuong = Math.sqrt(n) === Math.floor(Math.sqrt(n));
let ketqua = laSoChinhPhuong ? n + " là số chính phương" : n + " không phải là số chính phương";
console.log(ketqua);