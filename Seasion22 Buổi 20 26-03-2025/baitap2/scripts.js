let word = parseInt(prompt("Nhập số: "))
let number = [2,5,7,4,1,8,6]
for (key in number){
    if (word == number[key]){
        console.log("Bingo")
    }
    else{
        console.log("Chúc bạn may mắn lần sau")
    }
}