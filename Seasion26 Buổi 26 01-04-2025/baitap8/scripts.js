function isPrime(number){
  if (number <= 1){
      return false; 
  }
  for (let i = 2; i <= Math.sqrt(number); i++){
      if (number % i === 0){
          return false; 
      }
  }
  return true;  
}
function filterOddPrimes(numbers){
  return numbers.filter(function(num){
      return isPrime(num) && num % 2 !== 0; 
  });
}
function nhapVaXuLy(){
  let nhap = prompt("Nhap vao 10-20 so nguyen, cach nhau bang dau phay ");
  let mangSo = nhap.split(',').map(function(so){
      return parseInt(so.trim());
  });
  if (mangSo.length >= 10 && mangSo.length <= 20 && mangSo.every(function(so){
      return !isNaN(so);
  })){
      let ketQua = filterOddPrimes(mangSo);
      alert("Ket qua: " + ketQua.join(", "));
  }else{
      alert("Dữ liệu không hợp lệ, vui lòng nhập từ 10 đến 20 số nguyên.");
  }
}
nhapVaXuLy();