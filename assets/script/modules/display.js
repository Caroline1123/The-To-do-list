import { tasks, id } from './storage.js';
import { addTask, removeTask, changeTaskStatus } from './editTasks.js';


const ul = document.querySelector("ul");
const addBtn = document.querySelector("#add_task");
const inputField = document.querySelector("#new_task");
const errorDiv = document.querySelector(".alert_box");

const displayTasks = () => {
    let tasksCopy = JSON.parse(localStorage.getItem('tasks')) || [];
    ul.innerHTML = "";
    for (let i = 0; i < tasksCopy.length; i++) {
        let task = tasksCopy[i];
        let task_id = task.id;
        let li = document.createElement("li");
        if (task.status === "done"){
            li.innerHTML =
            `<input type="checkbox" name="${task_id}" class="task_checkbox" checked/>
            <label class="done" name="task${task.id}">${task.task}</label>
            <image class="close_button" src="assets/images/delete.svg" id="task_${task_id}" alt="delete task" title="Delete Task"></image>`
        }
        else {
            li.innerHTML =
            `<input type="checkbox" name="${task_id}" class="task_checkbox"/>
            <label name="task${task.id}">${task.task}</label>
            <image class="close_button" src="assets/images/delete.svg" id="task_${task_id}" alt="delete task" title="Delete Task"></image>`
        }
        ul.appendChild(li);
    }
    const closeBtns = document.querySelectorAll(".close_button");
    for (let btn of closeBtns) {
        btn.addEventListener("click", function () {
            let taskId = this.id;
            taskId = parseInt(taskId.split('_')[1]);
            removeTask(taskId);
            displayTasks();
        });
    }
    const checkboxes = document.querySelectorAll(".task_checkbox");
    for (let checkbox of checkboxes) {
        checkbox.addEventListener("change", function(event) {
            changeTaskStatus(event.target.name);
        });
    }
};

const retrieveTask = (taskField) => {
    const newTask = taskField.value;
    let isTaskAdded = addTask(newTask);
    taskField.value = "";
    if (!isTaskAdded) {
        alert("Invalid task.");
    }
};

const deleteSelected = () => {
    let checkboxItems = document.querySelectorAll(".task_checkbox:checked");
    let selected = [...checkboxItems].map(checkboxItem => checkboxItem.name.split("_")[1]);
    for (let elem of selected) {
        removeTask(elem);
        displayTasks();
    }
};


export { addBtn, inputField, errorDiv, ul, displayTasks, retrieveTask, deleteSelected };