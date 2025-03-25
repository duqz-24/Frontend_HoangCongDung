let num = parseInt(prompt("Nhập số nguyên:"));
let check
if (n < 2){
  console.log("Khong phai so nguyen to")
}
else{
  for (let i = 2; i< Math.sqrt(n); i++)
  {if (n%i ==0)
    console.log("Không là số nguyên tố")
    check = false
  }
  if (check) {console.log("là số nguyên tố")}
  }