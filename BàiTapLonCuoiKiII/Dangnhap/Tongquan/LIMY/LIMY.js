document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const todayCount = document.getElementById('today-count');
    const myTasksCount = document.getElementById('my-tasks-count');
    const relatedTasksCount = document.getElementById('related-tasks-count');

    let tasks = [];

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const task = {
                id: Date.now(),
                text: taskText,
                isToday: false,  // You can add a logic to mark today's task
                isMine: true,    // Assuming all tasks are mine for this example
                isRelated: false // Add logic for related tasks if needed
            };
            tasks.push(task);
            addTask(task);
            taskInput.value = '';
            updateCounts();
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const taskId = parseInt(e.target.parentElement.dataset.id);
            tasks = tasks.filter(task => task.id !== taskId);
            e.target.parentElement.remove();
            updateCounts();
        } else if (e.target.classList.contains('task')) {
            e.target.classList.toggle('completed');
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.className = 'task';
        li.textContent = task.text;
        li.dataset.id = task.id;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Xóa';

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    function updateCounts() {
        const todayTasks = tasks.filter(task => task.isToday);
        const myTasks = tasks.filter(task => task.isMine);
        const relatedTasks = tasks.filter(task => task.isRelated);

        todayCount.textContent = todayTasks.length;
        myTasksCount.textContent = myTasks.length;
        relatedTasksCount.textContent = relatedTasks.length;
    }
});
function search(event) {
    if (event.key === "Enter") {
        submitSearch();
    }
}

function submitSearch() {
    var searchText = document.getElementById("searchInput").value;
    // Thực hiện tìm kiếm dựa trên giá trị searchText
    console.log("Đã tìm kiếm: " + searchText);
    // Ví dụ: Gửi request tìm kiếm đến máy chủ và xử lý kết quả
}

