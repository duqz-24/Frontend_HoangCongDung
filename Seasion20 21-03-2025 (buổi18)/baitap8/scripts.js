let n = parseInt(prompt("nhập vào số lượng số nguyên tố "))
let count = 0 
let x = 2
while (count < n) {
let check = true
  for(let i = 2; i < Math.sqrt(n); i++){
     if(n % i ==0){
      check = false
     }
  }
  if (check){ console.log(x)
    count++}x++
   

}