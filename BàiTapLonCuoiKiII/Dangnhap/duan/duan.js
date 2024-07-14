document.addEventListener('DOMContentLoaded', () => {
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

    var buttons = document.querySelectorAll('.sidebar-buttons button');
  
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var url = button.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });

    // Đoạn mã sau đã được di chuyển ra ngoài sự kiện DOMContentLoaded
    // Dữ liệu cho biểu đồ overallChart
    var overallChart = document.getElementById('overallChart').getContext('2d');
    var overallChartInstance = new Chart(overallChart, {
        type: 'doughnut',
        data: {
            
            datasets: [{
                data: [20, 30, 15, 35],
                backgroundColor: ['#cde6f7', '#1abc9c', '#375dc4', '#5b92db']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += context.parsed + '%';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });

    // Dữ liệu cho biểu đồ overallChart2
    var overallChart2 = document.getElementById('overallChart2').getContext('2d');
    var overallChart2Instance = new Chart(overallChart2, {
        type: 'doughnut',
        data: {
            
            datasets: [{
                data: [10, 25, 30, 35],
                backgroundColor: ['#73af96', '#abfad9', '#6acaba', '#a2dfd1']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += context.parsed + '%';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
});
