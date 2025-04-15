const initialTasks = [
    { id: 1, content: 'Learn Javascript Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Anh Bách' },
    { id: 2, content: 'Learn Javascript Session 2', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Lâm th' },
    { id: 3, content: 'Learn CSS Session 1', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Hiếu Cí ớt ớt' },
];

const taskTableBody = document.getElementById('taskTableBody');
const addButton = document.querySelector('.input-row button');
const editingTaskIdInput = document.getElementById('editingTaskId');

function renderTasks(tasks) {
    taskTableBody.innerHTML = '';

    tasks.forEach(task => {
        const row = taskTableBody.insertRow();
        row.insertCell().textContent = task.id;
        row.insertCell().textContent = task.content;
        row.insertCell().textContent = task.dueDate;
        row.insertCell().textContent = task.status;
        row.insertCell().textContent = task.assignedTo;

        const actionCell = row.insertCell();
        actionCell.classList.add('action-buttons');
        actionCell.innerHTML = `
            <button onclick="editTask(${task.id})">Sửa</button>
            <button onclick="deleteTask(${task.id})">Xóa</button>
        `;
    });
}

function editTask(taskId) {
    const taskToEdit = initialTasks.find(task => task.id === taskId);
    if (taskToEdit) {
        document.getElementById('editingTaskId').value = taskId;
        document.getElementById('newContent').value = taskToEdit.content;
        document.getElementById('newDueDate').value = taskToEdit.dueDate;
        document.getElementById('newStatus').value = taskToEdit.status;
        document.getElementById('newAssignedTo').value = taskToEdit.assignedTo;
        addButton.textContent = 'Lưu thay đổi';
    }
}

function addTask() {
    const editingId = document.getElementById('editingTaskId').value;
    const newContent = document.getElementById('newContent').value;
    const newDueDate = document.getElementById('newDueDate').value;
    const newStatus = document.getElementById('newStatus').value;
    const newAssignedTo = document.getElementById('newAssignedTo').value;

    if (newContent) {
        if (editingId) {
            const taskIndex = initialTasks.findIndex(task => task.id === parseInt(editingId));
            if (taskIndex !== -1) {
                initialTasks[taskIndex] = {
                    id: parseInt(editingId),
                    content: newContent,
                    dueDate: newDueDate,
                    status: newStatus,
                    assignedTo: newAssignedTo,
                };
            }
            document.getElementById('editingTaskId').value = ''; 
            addButton.textContent = 'Thêm công việc'; 
        } else {
            const newTask = {
                id: initialTasks.length > 0 ? Math.max(...initialTasks.map(task => task.id)) + 1 : 1,
                content: newContent,
                dueDate: newDueDate,
                status: newStatus,
                assignedTo: newAssignedTo,
            };
            initialTasks.push(newTask);
        }
        renderTasks(initialTasks);
        document.getElementById('newContent').value = '';
        document.getElementById('newDueDate').value = '';
        document.getElementById('newStatus').value = '';
        document.getElementById('newAssignedTo').value = '';
    } else {
        alert('Vui lòng nhập nội dung công việc.');
    }
}

function deleteTask(taskId) {
    const indexToDelete = initialTasks.findIndex(task => task.id === taskId);
    if (indexToDelete !== -1) {
        initialTasks.splice(indexToDelete, 1);
        renderTasks(initialTasks);
    }
}

renderTasks(initialTasks);