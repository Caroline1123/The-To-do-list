let tasks = [];
let id = 0;
const addBtn = document.querySelector("#add_task");
const ul = document.querySelector("ul");
let selectedTasks = [];

let addTask = (task) => {
    let taskText  = task.replace(/\s/g, '');
    if (!taskText) {
        return false;
    }
    else {
        let newEntry = {"task": task, "id": id+1};
        id ++;
        tasks.push(newEntry)
        return true;
    }
}

let removeTask = (task_id) => {
    const index = tasks.findIndex(task => task.id === task_id);
    tasks.splice(index, 1);
}

let deleteSelected = () => {
    let checkboxItems = document.querySelectorAll(".task_checkbox:checked");
    let selected = [...checkboxItems].map(checkboxItem => checkboxItem.name.split("_")[1]);
    for (id of selected) {
        removeTask(id);
        displayTasks()
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

const deleteAll = document.querySelector("#delete_selected");
deleteAll.addEventListener("click", () => {
    deleteSelected();
})


addBtn.addEventListener("click", () => {
    const inputField = document.querySelector("#new_task");
    const newTask = inputField.value;
    inputField.value = "";
    let taskAdded = addTask(newTask);
    if (taskAdded) {
        displayTasks();
    }
    else {
        alert("Invalid task.")
    }
})

