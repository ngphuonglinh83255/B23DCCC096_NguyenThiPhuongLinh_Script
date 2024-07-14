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
//.................//
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const object = document.getElementById('object').value.trim();
    const objectName = document.getElementById('object-name').value.trim();
    const createdDate = document.getElementById('created-date').value;
    const status = document.getElementById('status').value;
    const creator = document.getElementById('creator').value.trim();
    const deadline = document.getElementById('deadline').value;

    if (!object || !objectName || !createdDate || !creator || !deadline) {
        alert('Vui lòng nhập đầy đủ thông tin công việc.');
        return;
    }

    const task = {
        id: Date.now(),
        object,
        objectName,
        createdDate,
        status,
        creator,
        deadline
    };

    addTaskToDOM(task);
    saveTask(task);
    clearInputFields();
}

function addTaskToDOM(task) {
    const taskList = document.querySelector('#task-list tbody');
    const row = document.createElement('tr');
    row.setAttribute('data-id', task.id);

    row.innerHTML = `
        <td>${task.object}</td>
        <td>${task.objectName}</td>
        <td>${task.createdDate}</td>
        <td class="status">${task.status}</td>
        <td>${task.creator}</td>
        <td>${task.deadline}</td>
        <td class="task-actions">
            <button class="complete" onclick="toggleTaskCompletion(${task.id})">${task.status === 'Đã duyệt' ? 'Chưa duyệt' : 'Đã duyệt'}</button>
            <button class="delete" onclick="deleteTask(${task.id})">Xóa</button>
        </td>
    `;

    taskList.appendChild(row);
}

function saveTask(task) {
    const tasks = getTasksFromStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = getTasksFromStorage();
    tasks.forEach(task => addTaskToDOM(task));
}

function getTasksFromStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function toggleTaskCompletion(id) {
    const tasks = getTasksFromStorage();
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = task.status === 'Đã duyệt' ? 'Chưa duyệt' : 'Đã duyệt';
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        const row = document.querySelector(`tr[data-id="${id}"]`);
        row.querySelector('.status').textContent = task.status;
        row.querySelector('.complete').textContent = task.status === 'Đã duyệt' ? 'Chưa duyệt' : 'Đã duyệt';
    }
}

function deleteTask(id) {
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    const taskList = document.querySelector('#task-list tbody');
    const taskRow = document.querySelector(`tr[data-id="${id}"]`);
    if (taskRow) {
        taskList.removeChild(taskRow);
    }
}

function clearInputFields() {
    document.getElementById('object').value = '';
    document.getElementById('object-name').value = '';
    document.getElementById('created-date').value = '';
    document.getElementById('status').value = 'Chưa duyệt';
    document.getElementById('creator').value = '';
    document.getElementById('deadline').value = '';
}
//........................
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

