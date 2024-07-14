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




document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.getElementById('events');
    const eventDetailsContainer = document.getElementById('event-details');
    const eventDetailInfo = document.getElementById('event-detail-info');

    const events = eventsContainer.querySelectorAll('.event');

    events.forEach(event => {
        const registerButton = event.querySelector('.btn-register');

        registerButton.addEventListener('click', function(e) {
            e.preventDefault();

            const eventName = event.querySelector('h2').textContent;
            const eventTime = event.querySelector('p:nth-of-type(1)').textContent;
            const eventLocation = event.querySelector('p:nth-of-type(2)').textContent;

            eventDetailInfo.innerHTML = `
                <h2>${eventName}</h2>
                <p><strong>Thời gian:</strong> ${eventTime}</p>
                <p><strong>Địa điểm:</strong> ${eventLocation}</p>
                <form id="registration-form">
                    <div class="form-group">
                        <label for="fullname">Họ và tên:</label>
                        <input type="text" id="fullname" name="fullname" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Số điện thoại:</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <button type="submit" class="btn">Đăng ký</button>
                </form>
            `;

            eventDetailsContainer.style.display = 'block';
        });
    });

    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        alert(`Đăng ký thành công: ${fullname}, ${email}, ${phone}`);

        eventDetailsContainer.style.display = 'none';
    });
});
