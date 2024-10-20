 // Wait for the DOM to fully load
 document.addEventListener('DOMContentLoaded', () => {
    // Select the DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign the onclick event to remove the task
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        // Allow adding task with the "Enter" key
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optionally invoke addTask on DOMContentLoaded (if needed)
    // addTask(); // Uncomment if you want to add a default task
});
