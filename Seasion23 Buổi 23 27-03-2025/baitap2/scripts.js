let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let vitri = 0
let max = arr[0]

for (let i = 1; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
        vitri = i
    }
}
console.log(`Số lớn nhất trong mảng là: ${max}`);
console.log(`Vị trí của số lớn nhất trong mảng là: ${vitri}`);
