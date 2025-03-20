let month = parseInt(prompt("Nhập tháng:"));

if (month < 1 || month > 12) {
  console.log("tháng không hợp lệ");
} else if (month === 2) {
  let year = new Date().getFullYear();
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("tháng 2 có 29 ngày năm nhuận");
  } else {
    console.log("tháng 2 có 28 ngày");
  }
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  console.log(`tháng ${month} có 30 ngày`);
} else {
  console.log(`tháng ${month} có 31 ngày`);
}