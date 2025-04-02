function chiaMang(mang, n) {
  if (!Array.isArray(mang) || typeof n !== 'number' || n <= 0) {
    return "dữ liệu không hợp lệ";
  }

  const ketQua = [];
  for (let i = 0; i < mang.length; i += n) {
    ketQua.push(mang.slice(i, i + n));
  }
  return ketQua;
}

console.log(chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 3)); 
console.log(chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chiaMang("abc", 3));