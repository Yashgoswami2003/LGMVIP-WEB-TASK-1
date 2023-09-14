
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            ${taskText}
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}


addButton.addEventListener("click", addTask);


taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-button")) {
        event.target.parentElement.remove();
    }
});
