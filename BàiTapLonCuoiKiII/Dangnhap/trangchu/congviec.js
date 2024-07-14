function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== "") {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        taskItem.appendChild(taskText);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.onclick = () => editTask(taskItem, taskText);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');
        completeButton.onclick = () => toggleComplete(taskItem);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => deleteTask(taskItem);

        taskItem.appendChild(editButton);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        taskInput.value = "";
        updateTaskStats();
    }
}

function editTask(taskItem, taskText) {
    const newTaskText = prompt('Edit your task:', taskText.textContent);
    if (newTaskText !== null) {
        taskText.textContent = newTaskText;
    }
}

function toggleComplete(taskItem) {
    taskItem.classList.toggle('completed');
    updateTaskStats();
}

function deleteTask(taskItem) {
    taskItem.remove();
    updateTaskStats();
}

function updateTaskStats() {
    const taskItems = document.querySelectorAll('.task-item');
    const completedTasks = document.querySelectorAll('.task-item.completed');

    document.getElementById('completed-count').textContent = completedTasks.length;
    document.getElementById('incomplete-count').textContent = taskItems.length - completedTasks.length;
}

document.querySelector('.account').addEventListener('click', function() {
    const accountOptions = document.getElementById('account-options');
    accountOptions.style.display = accountOptions.style.display === 'block' ? 'none' : 'block';
});

window.onclick = function(event) {
    if (!event.target.closest('.account')) {
        const accountOptions = document.getElementById('account-options');
        if (accountOptions.style.display === 'block') {
            accountOptions.style.display = 'none';
        }
    }
};





document.addEventListener('DOMContentLoaded', function() {
    const toggleAddTaskBtn = document.getElementById('toggleAddTaskBtn');
    const addTask = document.getElementById('addTask');
    const addTaskForm = document.getElementById('addTaskForm');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const updateTaskBtn = document.getElementById('updateTaskBtn');
    const taskList = document.getElementById('taskList');
    let editingTask = null;

    toggleAddTaskBtn.addEventListener('click', function() {
        addTask.classList.toggle('active');
    });

    addTaskBtn.addEventListener('click', function() {
        const taskName = document.getElementById('taskName').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const taskPriority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('dueDate').value;

        // Tạo một phần tử công việc mới
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <h3>${taskName}</h3>
            <p>${taskDescription}</p>
            <p><strong>Độ ưu tiên:</strong> ${taskPriority}</p>
            <p><strong>Ngày hết hạn:</strong> ${dueDate}</p>
            <div class="task-actions">
                <button class="edit">Chỉnh sửa</button>
                <button class="delete">Xóa</button>
            </div>
        `;

        taskList.appendChild(taskItem);

        // Đặt lại form sau khi thêm công việc thành công
        addTaskForm.reset();

        // Ẩn form thêm công việc
        addTask.classList.remove('active');

        // Xử lý sự kiện nút xóa
        taskItem.querySelector('.delete').addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        // Xử lý sự kiện nút chỉnh sửa
        taskItem.querySelector('.edit').addEventListener('click', function() {
            editingTask = taskItem;
            document.getElementById('taskName').value = taskName;
            document.getElementById('taskDescription').value = taskDescription;
            document.getElementById('taskPriority').value = taskPriority;
            document.getElementById('dueDate').value = dueDate;
            addTask.classList.add('active');
            addTaskBtn.style.display = 'none';
            updateTaskBtn.style.display = 'inline-block';
        });
    });

    updateTaskBtn.addEventListener('click', function() {
        const taskName = document.getElementById('taskName').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const taskPriority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('dueDate').value;

        if (editingTask) {
            editingTask.querySelector('h3').textContent = taskName;
            editingTask.querySelectorAll('p')[0].textContent = taskDescription;
            editingTask.querySelectorAll('p')[1].innerHTML = `<strong>Độ ưu tiên:</strong> ${taskPriority}`;
            editingTask.querySelectorAll('p')[2].innerHTML = `<strong>Ngày hết hạn:</strong> ${dueDate}`;
            editingTask = null;
        }

        // Đặt lại form sau khi cập nhật công việc
        addTaskForm.reset();
        addTask.classList.remove('active');
        addTaskBtn.style.display = 'inline-block';
        updateTaskBtn.style.display = 'none';
    });

    document.getElementById('clearFormBtn').addEventListener('click', function() {
        addTaskForm.reset();
        editingTask = null;
        addTaskBtn.style.display = 'inline-block';
        updateTaskBtn.style.display = 'none';
    });
});





document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.sidebar-buttons button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var url = button.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});




