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

  todoItemList.push(inputVal);
  renderTaskList();
  updatePendingTask();
  inputEl.value = ""; // Clear the input field after adding the task
}

function renderTaskList() {
  listEl.innerHTML = "";

  todoItemList.forEach((item, idx) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = item;

    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;

    deleteBtn.addEventListener("click", () => deleteHandler(idx));
    todoItem.appendChild(deleteBtn);

    listEl.appendChild(todoItem);
  });
}

function updatePendingTask() {
  const count = todoItemList.length;
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
