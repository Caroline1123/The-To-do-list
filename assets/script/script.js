import { addBtn, inputField, errorDiv } from './modules/display.js';
import { displayTasks, retrieveTask, deleteSelected } from './modules/display.js';
import { changeTaskStatus } from './modules/editTasks.js'


displayTasks();

addBtn.addEventListener("click", () => {
    retrieveTask(inputField);
});

const deleteAll = document.querySelector("#delete_selected");
deleteAll.addEventListener("click", () => {
    deleteSelected();
});
