const inputEl = document.querySelector(".inputTask input");
const addBtn = document.querySelector(".btnAdd");
const listEl = document.querySelector(".todoList ol");
const clearAllBtn = document.querySelector(".footer button");
const pendingTask = document.querySelector(".footer .pendingCount");

let todoItemList = [];

// Set required attribute
inputEl.setAttribute("required", "");

function deleteHandler(index) {
  const newTodos = todoItemList.filter((item, idx) => idx !== index);
  todoItemList = [...newTodos];
  renderTaskList();
  updatePendingTask();
}

function clearAllTasks() {
  todoItemList = [];
  renderTaskList();
  updatePendingTask();
}

function addTask() {
  const inputVal = inputEl.value;
  if (!inputVal) {
    throw new Error("No Input provided");
  }

  todoItemList.push({ task: inputVal, completed: false });
  renderTaskList();
  updatePendingTask();
  inputEl.value = ""; // Clear the input field after adding the task
}

function toggleComplete(index) {
  todoItemList[index].completed = !todoItemList[index].completed;
  renderTaskList();
}
function renderTaskList() {
    listEl.innerHTML = "";
  
    todoItemList.forEach((item, idx) => {
      const todoItem = document.createElement("li");
  
      const taskItem = document.createElement("div");
      taskItem.classList.add("taskItem");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = item.completed;
      checkbox.addEventListener("change", () => toggleComplete(idx));
      taskItem.appendChild(checkbox);
  
      const taskText = document.createElement("span");
      taskText.classList.add("taskText");
      taskText.textContent = item.task;
  
      if (item.completed) {
        taskText.style.textDecoration = "line-through";
      }
  
      const deleteBtn = document.createElement("span");
      deleteBtn.classList.add("deleteBtn");
      deleteBtn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
      deleteBtn.addEventListener("click", () => deleteHandler(idx));
      taskItem.appendChild(taskText);
      taskItem.appendChild(deleteBtn);
  
      todoItem.appendChild(taskItem);
  
      listEl.appendChild(todoItem);
    });
  }
  
  
  
function updatePendingTask() {
  const count = todoItemList.filter((item) => !item.completed).length;
  pendingTask.textContent = count.toString();
}

// Event listeners
clearAllBtn.addEventListener("click", function () {
  clearAllTasks();
});

addBtn.addEventListener("click", function () {
  addTask();
});

renderTaskList();

updatePendingTask();
