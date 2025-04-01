function chuoicododailonhon5kytu(mang){

  let KetQua = [];

  for (let i = 0; i < mang.length; i++) {
    if (mang[i].length > 5) {
      KetQua.push(mang[i]);
    }
  }

  return KetQua;
}
let mangchuoi = ["apple", "banana", "kiwi", "orange", "pear", "grape"];
let chuoidaihon5kytu  = chuoicododailonhon5kytu(mangchuoi)
console.log("Các chuỗi có độ dài lớn hơn 5 ký tự:", mangChuoiDaiHon5);
