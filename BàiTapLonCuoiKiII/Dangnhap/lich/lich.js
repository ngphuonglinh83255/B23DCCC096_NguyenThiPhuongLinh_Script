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


//...................................................................

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
//...........................


const calendarContainer = document.getElementById('calendar-container');
const calendarHeader = document.getElementById('calendar-header');
const calendar = document.getElementById('calendar');
const dayTemplate = document.getElementById('day-template').content;
const currentMonthYear = document.getElementById('current-month-year');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

const tasks = {
    '2024-06-01': ['Công việc 1'],
    '2024-06-05': ['Công việc 3'],
    '2024-06-12': ['Công việc 4'],
    '2024-06-15': ['Công việc 6'],
    '2024-06-20': ['Công việc 7'],
    '2024-06-25': ['Công việc 9'],
};

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getStartDay(year, month) {
    return new Date(year, month, 1).getDay();
}

function renderCalendar(year, month) {
    calendar.innerHTML = '';
    currentMonthYear.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

    const daysInMonth = getDaysInMonth(year, month);
    const startDay = getStartDay(year, month);

    for (let i = 0; i < startDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        calendar.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = dayTemplate.cloneNode(true);
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        dayElement.querySelector('.day-header').textContent = `${day}`;
        const taskList = dayElement.querySelector('.tasks');
        
        if (tasks[dateKey]) {
            tasks[dateKey].forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.classList.add('task');
                taskItem.textContent = task;
                taskList.appendChild(taskItem);
            });
        }

        calendar.appendChild(dayElement);
    }
}

prevMonthButton.addEventListener('click', () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    renderCalendar(currentYear, currentMonth);
});

nextMonthButton.addEventListener('click', () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    renderCalendar(currentYear, currentMonth);
});

renderCalendar(currentYear, currentMonth);
