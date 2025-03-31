function Tong() {
  let a = parseInt(prompt("Nhập số a:"));

  let b = parseInt(prompt("Nhập số b:"));

  if (isNaN(a) || isNaN(b)) {
    return "Đầu vào không hợp lệ. Vui lòng nhập số.";
  } else {
    let tong = a + b;
    return "Tổng của a và b là: " + tong;
  }
}

let ketQua = Tong();
console.log(ketQua); 
