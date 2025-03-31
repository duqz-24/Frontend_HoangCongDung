function SoChan(mang) {
    if (!Array.isArray(mang)) {
      return "dữ liệu không hợp lệ";
    }
  
    let sochan = [];
  
    for (let i = 0; i < mang.length; i++) {
      if (mang[i] % 2 === 0) {
        sochan.push(mang[i]);
      }
    }
  
    if (sochan.length === 0) {
      return "mảng không chứa số chẵn";
    }
  
    return sochan;
  }
  
 
  console.log(SoChan([11, 4, 65, 6]));
  console.log(SoChan([1, 3, 5, 17])); 
  console.log(SoChan("text"));