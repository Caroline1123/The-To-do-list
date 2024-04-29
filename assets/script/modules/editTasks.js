import { tasks, saveTasksToLocalStorage, saveIdToLocalStorage, saveStatusToStorage} from './storage.js';
import { displayTasks } from './display.js';


const addTask = (task) => {
    let taskText = task.replace(/\s/g, '');
    if (!taskText) {
        return false;
    } else {
        let id = localStorage.getItem("id");
        id++;
        saveIdToLocalStorage(id);
        let newEntry = { "task": task, "id": id, status: "to do"};
        tasks.push(newEntry);
        saveTasksToLocalStorage();
        displayTasks();
        return true;
    }
};

const removeTask = (taskId) => {
    const index = tasks.findIndex(task => task.id === taskId);
    tasks.splice(index, 1);
    saveTasksToLocalStorage();
};

const changeTaskStatus = (taskId) => {
    taskId = parseInt(taskId);
    const task = tasks.find(task => task.id === taskId);
    let newStatus = "";
    if (task.status == "to do") {
        newStatus = "done";
    }
    else {
        newStatus = "to do";
    }
    saveStatusToStorage(taskId, newStatus);
    displayTasks();
};

export { addTask, changeTaskStatus, removeTask };