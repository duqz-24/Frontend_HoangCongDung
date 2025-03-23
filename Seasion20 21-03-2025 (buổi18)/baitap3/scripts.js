let chuoiSo = prompt("Nhập chuỗi số:");

function kiemTraDoiXung(str) {
  let chuoiDaoNguoc = str.split('').reverse().join('');

  return str === chuoiDaoNguoc;
}

if (kiemTraDoiXung(chuoiSo)) {
  console.log(chuoiSo + " là số đối xứng.");
} else {
  console.log(chuoiSo + " không là số đối xứng.");
}