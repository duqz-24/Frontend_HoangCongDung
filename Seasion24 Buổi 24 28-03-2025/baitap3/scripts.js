let arr = [];
let choice;

do{
    choice = parseInt(prompt(
        "Chọn một thao tác:\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n" +
        "4. Tính tổng và trung bình cộng của các số dương trong mảng\n" +
        "5. Đảo ngược mảng\n" +
        "6. Kiểm tra mảng có đối xứng không\n" +
        "7. Thoát chương trình"
    ));
    switch (choice){
        case 1:
            let n = parseInt(prompt("Nhập số phần tử trong mảng: "));
            arr = [];
            for (let i = 0; i < n; i++){
                let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `));
                arr.push(num);
            }
            break;
        case 2:
            if (arr.length == 0){
                alert("Mảng rỗng!");
            } else {
                alert("Mảng hiện tại là: " + arr.join(", "));
            }
            break;
        case 3:
            if (arr.length == 0){
                alert("Mảng rỗng!");
            }else{
                let max = arr[0];
                let index = 0;
                for (let i = 1; i < arr.length; i++){
                    if (arr[i] > max){
                        max = arr[i];
                        index = i;
                    }
                }
                alert(`Phần tử lớn nhất trong mảng là ${max} tại chỉ số ${index}`);
            }
            break;
        case 4:
            let sum = 0;
            let count = 0;
            for (let i = 0; i < arr.length; i++){
                if (arr[i] > 0){
                    sum += arr[i];
                    count++;
                }
            }
            if (count > 0){
                let average = sum / count;
                alert(`Tổng các số dương là: ${sum}, Trung bình cộng là: ${average}`);
            } else {
                alert("Mảng không có số dương.");
            }
            break;
        case 5:
            let reversedArr = [];
            for (let i = arr.length - 1; i >= 0; i--){
                reversedArr.push(arr[i]);
            }
            arr = reversedArr;
            alert("Mảng sau khi đảo ngược: " + arr.join(", "));
            break;
        case 6:
            let isSymmetric = true;
            for (let i = 0; i < Math.floor(arr.length / 2); i++){
                if (arr[i] !== arr[arr.length - 1 - i]){
                    isSymmetric = false;
                    break;
                }
            }
            if (isSymmetric){
                alert("Mảng là đối xứng.");
            }else{
                alert("Mảng không phải là đối xứng.");
            }
            break;
        case 7:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
} while (choice !== 7);