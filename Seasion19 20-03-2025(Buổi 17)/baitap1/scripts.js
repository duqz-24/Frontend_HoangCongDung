let thang = parseInt(prompt("Nhập vào một tháng:"));

if (thang < 1 || thang > 12) {
  console.log("tháng không hợp lệ");
}   else if (thang === 2) {
    console.log("tháng 2 có 28 hoặc 29 ngày năm nhuận");
}   else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
    console.log(`tháng ${thang} có 30 ngày`);
} else {
  console.log(`tháng ${thang} có 31 ngày`);
}