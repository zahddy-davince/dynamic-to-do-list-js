
        // Wait for the DOM to fully load before running the script
        document.addEventListener('DOMContentLoaded', () => {
            const addButton = document.getElementById('add-task'); // Select Add Task button
            const taskInput = document.getElementById('task-input'); // Select input field
            const taskList = document.getElementById('task-list'); // Select unordered list

            // Function to add a new task to the list
            function addTask() {
                const taskText = taskInput.value.trim(); // Get and trim the task input

                // Check if the task input is not empty
                if (taskText === "") {
                    alert("Please enter a task."); // Alert user if input is empty
                    return; // Exit the function if no task is entered
                }

                // Create a new list item
                const li = document.createElement('li');
                li.textContent = taskText; // Set the text of the list item

                // Create a remove button
                const removeButton = document.createElement('button');
                removeButton.textContent = "Remove"; // Set button text
                removeButton.className = 'remove-btn'; // Assign class name

                // Remove the task when the button is clicked
                removeButton.onclick = () => {
                    taskList.removeChild(li); // Remove the list item from the task list
                };

                // Append the remove button to the list item and the list item to the task list
                li.appendChild(removeButton);
                taskList.appendChild(li);

                // Clear the input field after adding the task
                taskInput.value = "";
            }

            // Event listener for the Add Task button
            addButton.addEventListener('click', addTask);

            // Event listener for the Enter key to add tasks
            taskInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    addTask(); // Call addTask function if Enter is pressed
                }
            });
        });
