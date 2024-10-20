// HTML structure (assuming you have a list element with the ID "taskList")
<ul id="taskList"></ul>
<input type="text" id="taskInput">
<button id="addButton">Add Task</button>

// JavaScript code
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');

// Load tasks from Local Storage on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
});

// Add task function
function addTask(taskText, save = true) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
        removeTaskFromLocalStorage(taskText);
    });

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

// Remove task from Local Storage
function removeTaskFromLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(item => item !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

// Add task event listener
addButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});