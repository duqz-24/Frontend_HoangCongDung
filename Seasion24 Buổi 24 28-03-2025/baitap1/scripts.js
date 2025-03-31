let arr = [];
let choice;

do{
  choice = parseInt(prompt(
    "Chọn một thao tác:\n" +
    "1. Nhập mảng\n" +
    "2. Hiển thị mảng\n" +
    "3. Tìm phần tử lớn nhất và nhỏ nhất\n" +
    "4. Tính tổng các phần tử\n" +
    "5. Tìm số lần xuất hiện của một phần tử\n" +
    "6. Sắp xếp mảng tăng dần\n" +
    "7. Thoát chương trình"
  ));
  switch (choice){
    case 1:
      let n = prompt("Nhập số phần tử trong mảng: ");
      arr = [];
      for (let i = 0; i < n; i++){
        let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `));
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
        if (arr.length == 0){
          alert("Mảng rỗng!");
        }else{
          let max = arr[0]; 
          let min = arr[0]; 
          for (let i = 1; i < arr.length; i++){
            if (arr[i] > max){
              max = arr[i];
            }
            if (arr[i] < min){
              min = arr[i];
            }
          }
          alert(`Phần tử lớn nhất: ${max}, Phần tử nhỏ nhất: ${min}`);
        }
        break;
      case 4:
        if (arr.length == 0){
          alert("Mảng rỗng!");
        }else{
          let sum = 0;
          for (let i = 0; i < arr.length; i++){
            sum += arr[i]; // Cộng dồn từng phần tử vào sum
          }
            alert("Tổng các phần tử trong mảng: " + sum);
          }
          break;
        case 5:
          if (arr.length == 0) {
            alert("Mảng rỗng!");
          } else {
            let x = parseInt(prompt("Nhập phần tử cần tìm số lần xuất hiện: "));
            let count = 0; 
            for (let i = 0; i < arr.length; i++){
              if (arr[i] == x){
                count++;
              }
            }
              alert("Phần tử " + x + " xuất hiện " + count + " lần trong mảng.");
            }
            break;
          case 6:
            if (arr.length == 0){
              alert("Mảng rỗng!");
            }else{
              let n = arr.length;
              for (let i = 0; i < n - 1; i++){
                for (let j = 0; j < n - i - 1; j++){
                  if (arr[j] > arr[j + 1]){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                  }
                }
              }
                alert("Mảng sau khi sắp xếp tăng dần: " + arr.join(", "));
              }
              break;
            case 7:
              alert("Đã thoát chương trình!");
              break;
          
            default:
            alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
          }
          
        }while (choice !== 7);