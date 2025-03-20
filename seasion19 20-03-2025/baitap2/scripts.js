let char = prompt("Nhập một ký tự:");

if (char.length !== 1) {
  console.log("Vui lòng nhập một ký tự duy nhất.");
} else {
  let charCode = char.charCodeAt(0);
  if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
    console.log(`${char} là một chữ cái.`);
  } else {
    console.log(`${char} không phải là một chữ cái.`);
  }
}