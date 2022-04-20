const inputEl = document.querySelector(".inputTask input");
const addBtn = document.querySelector(".btnAdd");
const listEl = document.querySelector(".todoList li");

// ✅ Set required attribute
inputEl.setAttribute('required', '');
//event listeners
addBtn.addEventListener("click", addTask)

///functions
function addTask(event){
 const inputVal = inputEl.value;
 if(!inputVal){
     throw new Error("No Input provided");
 }
 const todoItem = document.createElement("li");
 todoItem.innerHTML = `$(inputVal)<span><i class="fa fa-trash" aria-hidden="true"></i></span>`

}

