function KTSNT(n) {
if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
      return "dữ liệu không hợp lệ";
    }
  
    if (n === 1) {
      return "không phải là số nguyên tố";
    }
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return "không phải là số nguyên tố";
      }
    }
  
    return "là số nguyên tố";
  }
  
  console.log(KTSNT(17)); 
  console.log(KTSNT(6)); 
  console.log(KTSNT("text")); 