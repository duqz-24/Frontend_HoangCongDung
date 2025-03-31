function timGTNN(mang) {
    if (!Array.isArray(mang)) {
      return "giá trị không hợp lệ";
    }
  
    if (mang.length === 0) {
      return "mảng không chứa phần tử";
    }
  
    let min = mang[0];
    for (let i = 1; i < mang.length; i++) {
      if (mang[i] < min) {
        min = mang[i];
      }
    }
    return `phần tử nhỏ nhất trong mảng là ${min}`;
  }
  
  console.log(timGTNN([2, 4, 8, 1, 9]));
  console.log(timGTNN([]));
  console.log(timGTNN("abc"));
  console.log(timGTNN([5, 2, 7, 5, 4]));