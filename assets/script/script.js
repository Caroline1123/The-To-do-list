// Retrieve tasks list from storage, else initiate it.
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// Retrieve ID from storage, else initiate
let id = parseInt(localStorage.getItem('id')) || 0;
const addBtn = document.querySelector("#add_task");
const inputField = document.querySelector("#new_task");
const errorDiv = document.querySelector(".alert_box");
const ul = document.querySelector("ul");
let selectedTasks = [];


let retrieveTask = () => {
    const newTask = inputField.value;
    let isTaskAdded = addTask(newTask);
    inputField.value = "";
    if (isTaskAdded) {
        displayTasks();
    }
    else {
        alert("Invalid task.")
    }
}

let displayTasks = () => {
    ul.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let li = document.createElement("li");
        li.innerHTML = 
        `<input type="checkbox" name="task_${task.id}" class="task_checkbox"/>
        <label for="task_${task.id}">${task.task}</label>
        <image class="close_button" src="assets/images/delete.svg" id="task_${task.id}" alt="delete task" title="Delete Task"></image>
        `;
        ul.appendChild(li);
    }
    const closeBtns = document.querySelectorAll(".close_button");
    for (btn of closeBtns) {
        btn.addEventListener("click", function() {
            let taskId = this.id;
            taskId = parseInt(taskId.split('_')[1]);
            console.log(taskId);
            removeTask(taskId);
            displayTasks();
        })
    }
}

displayTasks();

let addTask = (task) => {
    let taskText  = task.replace(/\s/g, '');
    if (!taskText) {
        return false;
    }
    else {
        id ++;
        localStorage.setItem('id', id.toString());
        let newEntry = {"task": task, "id": id};
        tasks.push(newEntry);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        return true;
    }
}

let removeTask = (task_id) => {
    const index = tasks.findIndex(task => task.id === task_id);
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

let deleteSelected = () => {
    let checkboxItems = document.querySelectorAll(".task_checkbox:checked");
    let selected = [...checkboxItems].map(checkboxItem => checkboxItem.name.split("_")[1]);
    for (id of selected) {
        removeTask(id);
        displayTasks()
    }
}

const deleteAll = document.querySelector("#delete_selected");
deleteAll.addEventListener("click", () => {
    deleteSelected();
})


addBtn.addEventListener("click", () => {
    retrieveTask();
})



