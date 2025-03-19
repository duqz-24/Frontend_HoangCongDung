let date1= prompt("nhập ngày thứ nhất: ");
let date2= prompt("Nhập ngày thứ hai: ");

let d1 = new Date(date1) ;
let d2 = new Date(date2);

let gapDate = d2 - d1

let result = gapDate / (1000 * 3600 * 24)
console.log(result);
