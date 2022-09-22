const inputEl = document.querySelector(".inputTask input");
const addBtn = document.querySelector(".btnAdd");
const listEl = document.querySelector(".todoList ol");
let todoItemList = [];

// ✅ Set required attribute
inputEl.setAttribute('required', '');

function deleteHandler(index) {
    const newTodos = todoItemList.filter((item, idx) => idx !== index);
    todoItemList = [...newTodos];
    console.log(newTodos);
    addTask();
}



///functions
function addTask(){
  
 const inputVal = inputEl.value;
 if(!inputVal){
     throw new Error("No Input provided");
 }

 listEl.innerHTML="";

 todoItemList.forEach((item, idx) => {

 const todoItem = document.createElement("li");
 todoItem.innerHTML = `${item}`;
 console.log(todoItem);

 const deleteBtn = document.createElement("span");
 deleteBtn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;

 todoItem.appendChild(deleteBtn);
 deleteBtn.addEventListener("click", () => deleteHandler(idx));
 console.log(deleteBtn);
 listEl.insertAdjacentElement("beforeend", todoItem);
});
}

//event listeners
addBtn.addEventListener("click", function() {
    const todoItem = inputEl.value;
    todoItemList.push(todoItem); 
    addTask();
});