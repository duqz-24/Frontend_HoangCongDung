function checkEmail() {
    const email = document.getElementById("emailInput").value;
    const resultDiv = document.getElementById("result");

    if (email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"))) {
      resultDiv.textContent = "email hợp lệ!";
      resultDiv.className = "valid";
    } else {
      resultDiv.textContent = "email không hợp lệ!";
      resultDiv.className = "invalid";
    }
  }