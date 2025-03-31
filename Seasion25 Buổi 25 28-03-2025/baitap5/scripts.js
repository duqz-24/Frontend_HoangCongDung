function DemSND(mang) {
  let dem = 0;

  for (let i = 0; i < mang.length; i++) {
    if (Number.isInteger(mang[i]) && mang[i] > 0) {
      dem++;
    }
  }

  if (dem === 0) {
    return "không có số nguyên dương trong mảng";
  }

  return dem; 
}

console.log(DemSND([4, 5.4, 6, -2])); 
console.log(DemSND([1, 2, 5, 7, -8, 6])); 
console.log(DemSND([1.2, -3, -6])); 