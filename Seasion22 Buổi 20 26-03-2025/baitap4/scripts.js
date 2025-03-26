let arr = []
let narr = parseInt(prompt("Nhập số phần tử: "))
for (let i = 0; i < narr; i++){
    let n = parseInt(prompt("Nhập số: "))
    arr.push(n)
}
let max = 0
for (let i = 0; i < narr; i++){
    if (arr[i] > max){
        max = arr[i]
    }
}
console.log("Phần tử lớn nhất của mảng: " + max)
