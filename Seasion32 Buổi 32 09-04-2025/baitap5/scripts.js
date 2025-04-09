function addTask() {
    const taskText = document.getElementById("newTask").value.trim();
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      const listItem = document.createElement("li");
      listItem.classList.add("task-item");
      listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">X</button>
      `;
      taskList.appendChild(listItem);
      document.getElementById("newTask").value = ""; // Clear the input
    }
  }

  function deleteTask(deleteButton) {
    if (confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?")) {
      const listItem = deleteButton.parentNode;
      const taskList = listItem.parentNode;
      taskList.removeChild(listItem);
    }
  }