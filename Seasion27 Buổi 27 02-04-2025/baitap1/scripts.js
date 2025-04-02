function congHaiSo(a, b) {
  return a + b;
}

function truHaiSo(a, b) {
  return a - b;
}

function nhanHaiSo(a, b) {
  return a * b;
}

function chiaHaiSo(a, b) {
  if (b === 0) {
    return "Không thể chia cho 0";
  }
  return a / b;
}

function hienThiMenu() {
  let luaChon;
  do {
    console.log("Menu tính toán trên hai số:");
    console.log("1. Cộng hai số");
    console.log("2. Trừ hai số");
    console.log("3. Nhân hai số");
    console.log("4. Chia hai số");
    console.log("5. Thoát");

    luaChon = parseInt(prompt("Nhập lựa chọn của bạn:"));

    switch (luaChon) {
      case 1:
        let so1 = parseFloat(prompt("Nhập số thứ nhất:"));
        let so2 = parseFloat(prompt("Nhập số thứ hai:"));
        console.log("Kết quả:", congHaiSo(so1, so2));
        break;
      case 2:
        so1 = parseFloat(prompt("Nhập số thứ nhất:"));
        so2 = parseFloat(prompt("Nhập số thứ hai:"));
        console.log("Kết quả:", truHaiSo(so1, so2));
        break;
      case 3:
        so1 = parseFloat(prompt("Nhập số thứ nhất:"));
        so2 = parseFloat(prompt("Nhập số thứ hai:"));
        console.log("Kết quả:", nhanHaiSo(so1, so2));
        break;
      case 4:
        so1 = parseFloat(prompt("Nhập số thứ nhất:"));
        so2 = parseFloat(prompt("Nhập số thứ hai:"));
        console.log("Kết quả:", chiaHaiSo(so1, so2));
        break;
      case 5:
        console.log("Kết thúc chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ.");
    }
  } while (luaChon !== 5);
}

hienThiMenu();