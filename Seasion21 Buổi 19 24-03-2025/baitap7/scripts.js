let von = parseInt(prompt("nhập số vốn: "))
let laisuat = parseInt(prompt("nhập số lãi: "))
let thang = parseInt(prompt("nhập số tháng: "))
for (let i = 0; i < thang; i++) {
    von += von * laisuat / 100
    console.log(`số tiền sau ${i + 1} tháng là: ${von}`)
}
