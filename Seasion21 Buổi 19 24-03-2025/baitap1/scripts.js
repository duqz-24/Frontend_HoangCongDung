
let numbers = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
  let input;
  let isValidInput = false;

  while (!isValidInput) {
    input = prompt("Nhập số nguyên thứ ${i + 1}:");
    if (input !== null && !isNaN(input) && Number.isInteger(Number(input))) {
      numbers.push(Number(input));
      isValidInput = true;
    } else {
      alert("Số nguyên không hợp lệ.");
    }
  }
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    sum += numbers[i];
  }
}

alert(`Tổng các số lẻ là: ${sum}`);