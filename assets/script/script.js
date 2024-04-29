let tasks = [];
let id = 0;
const addBtn = document.querySelector("#add_task");
const ul = document.querySelector("ul");

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

let displayTasks = () => {
    ul.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let li = document.createElement("li");
        li.innerHTML = 
        `<input type="checkbox" name="task_${i}"/>
        <label for="task_${id}">${task.task}</label>
        <image class="close_button" src="assets/images/delete.svg" id="task_${id}" alt="delete task" title="Delete Task"></image>
        `;
        ul.appendChild(li);
    }
}

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
