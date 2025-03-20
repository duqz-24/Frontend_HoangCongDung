let Name= prompt("Nhập tên đăg nhập: ");
if (Name === "ADMIN") {
    let password = prompt("Nhập mật khẩu: ")
if (password === "TheMaster") {
    console.log("Welcome");
  } else if (password === null) {
    console.log("Cancelled");
  } else {
    console.log("Wrong password");
  }
} else if (Name === null) {
  console.log("Cancelled");
} else {
  console.log("I Don't know you");
}