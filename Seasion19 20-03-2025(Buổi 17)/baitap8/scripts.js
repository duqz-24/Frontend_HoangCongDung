let thang = parseInt(prompt("Nhập tháng (1-12):"));

let mua;

if (thang >= 1 && thang <= 3) {
  mua = "mùa xuân";
} else if (thang >= 4 && thang <= 6) {
  mua = "mùa hạ";
} else if (thang >= 7 && thang <= 9) {
  mua = "mùa thu";
} else if (thang >= 10 && thang <= 12) {
  mua = "mùa đông";
} else {
  mua = "tháng không hợp lệ";
}

console.log(mua);