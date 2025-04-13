const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const one = document.querySelector("button"); // Fixed: Renamed to avoid confusion

function addTask() {
  // Fixed: Renamed function for clarity
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}

one.addEventListener("click", addTask);

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      // Fixed: Tag name should be uppercase
      e.target.classList.toggle("checked"); // Fixed: Typo in 'toggle'
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
