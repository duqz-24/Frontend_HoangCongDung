let a = parseFloat(prompt("Nhập số a: "))
let b = parseFloat(prompt("Nhập số b: "))
let pheptinh = prompt("Nhập phép tính(+,-,*,/): ")
let ketQua;
switch (pheptinh) {
  case "+":
    ketQua = a + b;
    break;
  case "-":
    ketQua = a - b;
    break;
  case "*":
    ketQua = a * b;
    break;
  case "/":
    ketQua = a / b;
    break;
  default:
    ketQua = "Phép toán không hợp lệ";
}
alert(a + pheptinh + b + '=' + ketQua)
