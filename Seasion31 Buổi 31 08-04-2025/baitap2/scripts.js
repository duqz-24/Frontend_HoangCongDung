const body = document.body;
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = 'Toggle light mode';
  } else {
    toggleBtn.textContent = 'Toggle dark mode';
  }
});