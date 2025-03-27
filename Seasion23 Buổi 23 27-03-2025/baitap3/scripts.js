let arr = []
let narr = parseInt(prompt("Nhập số phần tử: "))
let count = 0
for (let i = 0; i < narr; i++){
    let n = parseInt(prompt("Nhập số: "))
    arr.push(n)
    if(arr[i] < 0){
        count++
    }
}
console.log(`Có ${count} số nguyên âm trong mảng`);
if(count == 0){
    console.log("Không có số nguyên âm trong mảng")
}
