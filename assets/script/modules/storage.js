import { displayTasks } from "./display.js";

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let id = parseInt(localStorage.getItem('id')) || 0;

const saveTasksToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const saveIdToLocalStorage = (id) => {
    localStorage.setItem('id', id.toString());
};

const saveStatusToStorage = (taskId, newStatus) => {
    taskId = parseInt(taskId);
    const index = tasks.findIndex(task => task.id === taskId);
    tasks[index].status = newStatus;
    localStorage.setItem("tasks", JSON.stringify(tasks));
};  

export { tasks, id, saveTasksToLocalStorage, saveIdToLocalStorage, saveStatusToStorage };