const n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));

if (n < 0) {
  console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
  console.log("Mảng không có phần tử");
} else {
  const mangKyTu = [];
  for (let i = 0; i < n; i++) {
    mangKyTu.push(prompt(`Nhập phần tử thứ ${i + 1}:`));
  }

  let tong = 0;
  let coSo = false; 
  for (let i = 0; i < n; i++) {
    const phanTu = mangKyTu[i];
    if (!isNaN(phanTu)) {
      tong += parseInt(phanTu);
      coSo = true;
    }
  }

  if (!coSo) {
    console.log("Không có phần tử nào là số");
  } else {
    console.log(tong);
  }
}