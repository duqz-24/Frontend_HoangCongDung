let nam = parseInt(prompt("Nhập một năm bất kỳ:"));
let laNamNhuan = false;
if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
  laNamNhuan = true;
}

if (laNamNhuan) {
  console.log(nam + " là năm nhuận.");
} else {
  console.log(nam + " không phải là năm nhuận.");
}