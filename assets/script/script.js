import { addBtn, inputField, errorDiv } from './modules/display.js';
import { displayTasks, retrieveTask, deleteSelected } from './modules/display.js';

displayTasks();

addBtn.addEventListener("click", () => {
    retrieveTask(inputField);
});

inputField.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        retrieveTask(inputField);
    }
})

const deleteAll = document.querySelector("#delete_selected");
deleteAll.addEventListener("click", () => {
    deleteSelected();
});
