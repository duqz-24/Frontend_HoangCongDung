let number= prompt("Nhập số tiền của bạn");
let result= parseInt(number)
console.log(result.toLocaleString('vi', {style : 'currency', currency : 'VND'}))