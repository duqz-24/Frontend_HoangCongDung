const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalContainer = document.getElementById('modalContainer');

openModalBtn.addEventListener('click', () => {
  modalContainer.style.display = 'flex'; // Hiển thị modal
});

closeModalBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none'; // Ẩn modal
});

// Đóng modal khi click ra ngoài modal
modalContainer.addEventListener('click', (event) => {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});