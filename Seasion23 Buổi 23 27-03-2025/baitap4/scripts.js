let arr = []
let narr = parseInt(prompt("Nhập số phần tử: "))
for (let i = 0; i < narr; i++){
    let n = parseInt(prompt("Nhập số: "))
    arr.push(n)
}
for (let i = 0; i < arr.length; i++){
   if(arr[i]== parseInt(arr[i])){
       console.log(arr[i])
   }
   
}

