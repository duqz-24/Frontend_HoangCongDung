let arr = []
let narr = parseInt(prompt("Nhập số phần tử: "))
for (let i = 0; i < narr; i++){
    let n = parseInt(prompt("Nhập số: "))
    arr.push(n)
}
arr.reverse()
console.log(arr)

