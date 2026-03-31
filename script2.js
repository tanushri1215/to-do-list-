function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  // Alert if input is empty
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");

  // Task text
  let span = document.createElement("span");
  span.textContent = taskText;

  // Done Button (New Idea)
  let doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";

  doneBtn.onclick = function () {
    span.style.textDecoration = "line-through";
    span.style.color = "gray";
    saveTasks();
  };

  // Delete Button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.onclick = function () {
    li.remove();
    updateCounter();
    saveTasks();
  };

  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";

  updateCounter();
  saveTasks();
}

// New Idea: Task Counter
function updateCounter() {
  let totalTasks = document.querySelectorAll("#taskList li").length;

  document.getElementById("taskCount").textContent =
    "Total Tasks: " + totalTasks;
}

// Load tasks from localStorage
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task.text;
    if (task.done) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    }

    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.onclick = function () {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
      saveTasks();
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      li.remove();
      updateCounter();
      saveTasks();
    };

    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
  });
  updateCounter();
}

// Save tasks to localStorage
function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    let span = li.querySelector("span");
    let done = span.style.textDecoration === "line-through";
    tasks.push({
      text: span.textContent,
      done: done,
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks on page load
window.onload = loadTasks;
