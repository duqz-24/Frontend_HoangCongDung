function isPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/\s/g, '');

  let reversedStr = cleanStr.split('').reverse().join('');

  return cleanStr === reversedStr;
}
const inputStr = prompt("Nhập chuỗi ký tự:");

if (isPalindrome(inputStr)) {
  console.log("là chuỗi đối xứng");
} else {
  console.log("không phải chuỗi đối xứng");
}