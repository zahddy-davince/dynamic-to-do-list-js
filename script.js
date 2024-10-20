 // Wait for the DOM to fully load
 document.addEventListener('DOMContentLoaded', () => {
    // Select the DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);
        // Append the li to the task list
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = '';
    }

    // Add event listener to addButton
    addButton.addEventListener('click', addTask);

    // Add event listener to taskInput for 'keypress' event
    taskInput.addEventListener('keypress', (event) => {
        // Allow tasks to be added by pressing the "Enter" key
        if (event.key === 'Enter') {
            addTask();
        }
    });
});