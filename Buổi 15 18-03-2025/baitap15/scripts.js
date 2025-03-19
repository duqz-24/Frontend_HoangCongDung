
let bankinh = parseFloat(prompt("Nhập bán kính hình cầu:"));
let thetich = (4 / 3) * Math.PI * Math.pow(bankinh, 3);
let dientichBeMat = 4 * Math.PI * Math.pow(bankinh, 2);
let chuviLonNhat = 2 * Math.PI * bankinh;

console.log("Thể tích hình cầu là:", thetich);
console.log("Diện tích bề mặt hình cầu là:", dientichBeMat);
console.log("Chu vi lớn nhất của hình cầu là:", chuviLonNhat);