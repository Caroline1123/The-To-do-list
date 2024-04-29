let tasks = [];
const addBtn = document.querySelector("#add_task");

let addTask = (task) => {
    if (!task) {
        return false;
    }
    else {
        let newEntry = {"task": task, "status": "to do"};
        tasks.push(newEntry)
        return true;
    }
}

let displayTasks = () => {
    const ul = document.querySelector("ul");
    for (let task of tasks) {
        let li = document.createElement("li");
        li.innerText = task.task;
        ul.appendChild(li);
    }
}

addBtn.addEventListener("click", (event) => {
    const inputField = document.querySelector("#new_task");
    const newTask = inputField.value;
    inputField.value = "";
    let taskAdded = addTask(newTask);
    if (taskAdded) {
        console.log(tasks);
        displayTasks();
    }
    else {
        alert("Invalid task.")
    }
})

