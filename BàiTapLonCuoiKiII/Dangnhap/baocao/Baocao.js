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
  document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('taskStatusChart').getContext('2d');
    var taskStatusChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [40, 10, 30, 20], 
                backgroundColor: ['#cde6f7', '#1abc9c', '#375dc4', '#5b92db'],
            }]
        },
        options: {
            responsive: true,
        }
    });

    var ctx2 = document.getElementById('tasksByDaysChart').getContext('2d');
    var tasksByDaysChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['01', '02', '03', '04', '05', '06', '07'],
            datasets: [{
                label: 'Tasks Completed',
                data: [10, 20, 5, 15, 25, 30, 10], 
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new gridjs.Grid({
        columns: ["Người thực hiện", "Đã thực hiện", "Chưa thực hiện", "Đang thực hiện"],
        data: [
            ["Nhân viên 1", 35, 2, 1],
            ["Nhân viên 2", 15, 3, 2],
            ["Nhân viên 3", 23, 8, 1],
            ["Nhân viên 4", 20, 2, 5],
            ["Nhân viên 5", 29, 6, 1],
            ["Nhân viên 6", 18, 4, 2],
            ["Nhân viên 7", 27, 7, 5],
            ["Nhân viên 8", 39, 8, 2],
            ["Nhân viên 9", 33, 12, 1],
            ["Nhân viên 10", 29, 8, 3],
            ["Nhân viên 11", 23, 3, 2],
            ["Nhân viên 12", 14, 9, 1],
            ["Nhân viên 13", 15, 1, 3],
            ["Nhân viên 14", 18, 4, 2],
            ["Nhân viên 15", 67, 6, 5],
        ],
        pagination: {
            enabled: true,
            limit: 10
        }
    }).render(document.getElementById("taskTable"));
});

// Hàm searchFunction() được đặt bên ngoài để có thể được gọi từ bất kỳ đâu trên trang web của bạn
function searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("taskTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]; // chỉ tìm kiếm theo cột "Người thực hiện"
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

