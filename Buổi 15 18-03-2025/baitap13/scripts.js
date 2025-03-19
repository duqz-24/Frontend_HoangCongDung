let soTienGui = parseFloat(prompt("Nhập số tiền gửi:"));
let soThangGui = parseInt(prompt("Nhập số tháng gửi:"));
let laiSuatNam = 4.3 / 100; // 4.3%
let laiSuatThang = laiSuatNam / 12;
let soTienLai = soTienGui * laiSuatThang * soThangGui;
alert("Số tiền lãi nhận được là: " + soTienLai);