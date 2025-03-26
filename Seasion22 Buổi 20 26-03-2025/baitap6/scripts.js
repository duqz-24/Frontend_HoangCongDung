let number = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let newNumber = prompt("Nhập một số nguyên bất kỳ:"); 
let count = 0; 

for (let i = 0; i < number.length; i++) {
  if (number[i] == newNumber) {
    count++;
  }
}

if (count > 0) {
  console.log(`Số ${newNumber} xuất hiện ${count} lần trong mảng.`);
} else {
  console.log(`Số ${newNumber} không tồn tại trong mảng.`);
}