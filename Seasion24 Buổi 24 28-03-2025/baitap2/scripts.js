let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let vitri = 0
let max = arr[0]

for (let i = 1; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
        vitri = i
    }
}
console.log(`Số lớn nhất trong mảng là: ${max}`);
console.log(`Vị trí của số lớn nhất trong mảng là: ${vitri}`);
let arr = [];
let choice;

do{
  choice = parseInt(prompt(
    "Chọn một thao tác:\n" +
    "1. Nhập mảng số nguyên\n" +
    "2. Hiển thị mảng\n" +
    "3. Tìm các phần tử chẵn và lẻ\n" +
    "4. Tính trung bình cộng của mảng\n" +
    "5. Xóa phần tử tại vị trí chỉ định\n" +
    "6. Tìm phần tử lớn thứ hai trong mảng\n" +
    "7. Thoát chương trình"
  ));
  switch (choice){
    case 1:
      let n = parseInt(prompt("Nhập số phần tử trong mảng: "));
      arr = [];
      for (let i = 0; i < n; i++){
        let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ": ")); 
        arr.push(num);
      }
      break;
    case 2:
      if (arr.length === 0){
        alert("Mảng rỗng!");
      }else{
        alert("Mảng hiện tại là: " + arr.join(", "));
      }
      break;
    case 3:
      if (arr.length === 0){
        alert("Mảng rỗng!");
      }else{
        let even = [];
        let odd = [];
        for (let i = 0; i < arr.length; i++){
          if (arr[i] % 2 === 0){
            even.push(arr[i]);
          }else{
            odd.push(arr[i]);
          }
        }
        alert("Các phần tử chẵn: " + even.join(", "));
        alert("Các phần tử lẻ: " + odd.join(", "));
      }
      break;
    case 4:
      if (arr.length === 0){
        alert("Mảng rỗng!");
      }else{
        let sum = 0;
        for (let i = 0; i < arr.length; i++){
          sum += arr[i];
        }
        let average = sum / arr.length;
        alert("Trung bình cộng của mảng: " + average);
      }
      break;
    case 5:
      if (arr.length === 0){
        alert("Mảng rỗng!");
      }else{
        let index = parseInt(prompt("Nhập chỉ số của phần tử cần xóa: "));
        if (index >= 0 && index < arr.length){
          arr.splice(index, 1);
          alert("Mảng sau khi xóa phần tử: " + arr.join(", "));
        }else{
          alert("Chỉ số không hợp lệ!");
        }
      }
      break;
    case 6:
        if (arr.length < 2){
            alert("Mảng phải có ít nhất hai phần tử để tìm phần tử lớn thứ hai!");
          }else{
            let firstMax = arr[0];
            let secondMax = arr[0];
            for (let i = 1; i < arr.length; i++){
              if (arr[i] > firstMax){
                secondMax = firstMax;  
                firstMax = arr[i]; 
              }else if (arr[i] > secondMax && arr[i] !== firstMax){
                secondMax = arr[i];
              }
            }
            alert("Phần tử lớn thứ hai trong mảng: " + secondMax);
          }
          break;
    case 7:
      alert("Chương trình đã kết thúc.");
      break;

    default:
      alert("Chọn lại thao tác.");
  }
} while (choice !== 7); 