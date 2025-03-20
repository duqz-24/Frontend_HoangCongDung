let math = prompt("nhập điểm môn toán");
let physics = prompt("nhập điểm môn vật lí");
let chemistry = prompt("nhập điểm môn hóa học");
let dtb = ( parseFloat(math) + parseFloat(physics) + parseFloat(chemistry) ) /3

if (dtb >= 8.0) {
 console.log("Xếp loại giỏi: " + dtb)
} else if (dtb >= 6.5) {
   console.log("Xếp loại Khá: " + dtb)
} else if (dtb >= 5.0) {
    console.log("Xếp loại Trung bình: " + dtb)

} else {
    console.log("Xếp loại Yếu: " + dtb)

}
