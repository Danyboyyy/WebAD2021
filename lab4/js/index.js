var submitButton = document.getElementById("submitButton");
var clearButton = document.getElementById("clearButton");
var markAllButton = document.getElementById("markAllButton");
var deleteButton = document.getElementById("deleteButton");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  var text = document.getElementById("todoText");
  var list = document.getElementById("listOfTodos");

  var div = document.createElement("div");
  var checkbox = document.createElement("input");
  var label = document.createElement("label");

  var textValue = text.value;

  checkbox.type = "checkbox";
  checkbox.name = "todoItem";

  label.textContent = textValue;

  div.appendChild(checkbox);
  div.appendChild(label);

  list.appendChild(div);

  text.value = "";
});

clearButton.addEventListener("click", (e) => {
  e.preventDefault();

  var todos = document.getElementsByName("todoItem");
  todos.forEach((todo) => {
    todo.checked = false;
  });
});

markAllButton.addEventListener("click", (e) => {
  e.preventDefault();

  var todos = document.getElementsByName("todoItem");
  todos.forEach((todo) => {
    todo.checked = true;
  });
});

deleteButton.addEventListener("click", (e) => {
  e.preventDefault();

  var list = document.getElementById("listOfTodos");
  list.innerHTML = "";
});