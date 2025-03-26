let arr = []
let narr = parseInt(prompt("Nhập số phần tử: "))
for (let i = 0; i < narr; i++){
    let n = parseInt(prompt("Nhập số: "))
    arr.push(n)
}
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < arr.length; i++) {
    (arr[i] <= 0) ? null : (arr[i] % 2 == 0) ? sumEven += arr[i] : sumOdd += arr[i];
}
console.log(`Tổng các số chẵn: ${sumEven}`);
console.log(`Tổng các số lẻ: ${sumOdd}`);