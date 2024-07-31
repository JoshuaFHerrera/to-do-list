const listContainer = document.getElementById("list-container");
const inputValue = document.getElementById("task-input");

function addTask() {
  let newTask = document.createElement("li");
  newTask.innerHTML = inputValue.value;
  listContainer.appendChild(newTask);
  inputValue.value = null;
  let image = document.createElement("img");
  image.src = "./close.png";
  newTask.appendChild(image);
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
    }
  },
  false
);
