let input = prompt("Nhập giá trị và đơn vị (VND hoặc USD):");

let parts = input.split(" ");
let value = parseFloat(parts[0]);
let unit = parts[1].toUpperCase();

const exchangeRate = 23000;

if (unit === "VND") {
  let usd = value / exchangeRate;
  console.log(`${usd} USD`);
} else if (unit === "USD") {
  let vnd = value * exchangeRate;
  console.log(`${vnd} VND`);
} else {
  console.log("Đơn vị không hợp lệ. Vui lòng nhập VND hoặc USD.");
}