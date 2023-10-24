function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = taskInput.value;

    // Adding delete functionality
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskList.removeChild(taskItem);
    }

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}
