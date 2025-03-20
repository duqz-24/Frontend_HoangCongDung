
let so = parseInt(prompt("Nhập một số từ 0 đến 9:"));
let cachDoc;
switch (so) {
  case 0:
    cachDoc = "Số không";
    break;
  case 1:
    cachDoc = "Số một";
    break;
  case 2:
    cachDoc = "Số hai";
    break;
  case 3:
    cachDoc = "Số ba";
    break;
  case 4:
    cachDoc = "Số bốn";
    break;
  case 5:
    cachDoc = "Số năm";
    break;
  case 6:
    cachDoc = "Số sáu";
    break;
  case 7:
    cachDoc = "Số bảy";
    break;
  case 8:
    cachDoc = "Số tám";
    break;
  case 9:
    cachDoc = "Số chín";
    break;
  default:
    cachDoc = "Số không hợp lệ";
}

console.log(cachDoc);