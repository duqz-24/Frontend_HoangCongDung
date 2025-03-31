function LongPassword(password) {
  if (password.length < 8) {
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }

  if (!/[0-9]/.test(password)) {
    return false;
  }

  return true;
}

console.log(LongPassword("Abc123!@"));
console.log(LongPassword("weakpass"));