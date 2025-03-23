let num = parseInt(prompt("Nhập số nguyên:"));

function kiemTraNguyenTo(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

if (kiemTraNguyenTo(num)) {
  console.log(num + " là số nguyên tố.");
} else {
  console.log(num + " không là số nguyên tố.");
}