function hienthisolonhonhoacbang10(mang) {
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] >= 10) {
      console.log(mang[i]);
    }
    
  }

}

let mangSoNguyen = [12,14,15,5,7,9,10,20,45,22]
hienthisolonhonhoacbang10(mangSoNguyen);