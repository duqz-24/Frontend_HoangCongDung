let n = parseInt(prompt("Nhập số N:"));

let tong = 0;

for (let i = 1; i <= n; i++) {
  tong += i;
}

console.log("Tổng các số từ 1 đến " + n + " là: " + tong);