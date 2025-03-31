function inhoachucaidau(str) {
  str = str.trim();

  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }

  return words.join(' ');
}

console.log(inhoachucaidau(" hello WORLD ")); 
console.log(inhoachucaidau(" rIKKei acaDEMY ")); 