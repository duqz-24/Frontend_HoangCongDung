let arr = []
let narr = parseInt(prompt("Nhập số phần tử: "))
let count = 0
for (let i = 0; i < narr; i++){
    let n = parseInt(prompt("Nhập số: "))
    arr.push(n)
    if(arr[i] >= 10){
        count++
    }
}
console.log(`Có ${count} số lớn hơn hoặc bằng 10 trong mảng`);
