/****************************************
 * 1️⃣ THEME TOGGLE (click event)
 * --------------------------------------
 * Task:
 * - Select the theme button.
 * - Add a click event listener.
 * - Check current body class.
 * - If body is "dark":
 *      → switch to "light"
 *      → change button text to "Switch Dark Mode"
 * - Else:
 *      → switch to "dark"
 *      → change button text to "Switch Light Mode"
 ****************************************/
let tm = document.getElementById("themeBtn");
tm.innerHTML = "drk";
tm.addEventListener("click", function () {
  let body = document.querySelector("body");
  if (body.className == "dark") {
    body.className = "Light";
    tm.innerText = "drk";
  } else {
    body.className = "dark";
    tm.innerText = "light";
  }
});
/****************************************
 * 2️⃣ ADD TASK (click event)
 * --------------------------------------
 * Task:
 * - Select the input field and Add button.
 * - On click:
 *      → get the input value
 *      → if empty → alert message
 *      → else create a new <li>:
 *            <span>text</span>
 *            <button>Delete</button>
 *      → append to the <ul>
 *      → clear input field
 *      → update total count
 ****************************************/
let task = document.getElementById("taskInput");
let btx = document.getElementById("addBtn");
let list = document.getElementById("taskList");
btx.addEventListener("click", function () {
  if (task.value) {
    let pp = task.value;
    let ctx = `
    <li style="color:black" class="task-item">
    <span>${pp}</span>
    <button>Delete</button>
    </li>`;
    list.innerHTML += ctx;
  } else {
    alert("task daal");
  }
});

/****************************************
 * 3️⃣ SEARCH FILTER (input event)
 * --------------------------------------
 * Task:
 * - Select the search input.
 * - Add "input" event listener.
 * - On every keystroke:
 *      → get the lowercase search value
 *      → loop through all <li>
 *      → compare searchValue with each <span> text
 *      → hide <li> if not matching
 *      → show <li> if matching
 ****************************************/

const sI = document.getElementById("searchInput");
sI.addEventListener("input", function (e) {
  const searchValue = e.target.value.toLowerCase();
  const tasks = document.querySelectorAll("#taskList .task-item");
  tasks.forEach((taskItem) => {
    const taskText = taskItem.querySelector("span").textContent.toLowerCase();
    if (taskText.includes(searchValue)) {
      taskItem.style.display = "";
    } else {
      taskItem.style.display = "none";
    }
  });
});
// ...existing code...
function updateCount() {
  const total = list.querySelectorAll('li').length;
  const countEl = document.getElementById('count');
  countEl.textContent = `Total Task: ${total}`;
}
updateCount();
// ...existing code...
/****************************************
 * 3.5️⃣ ADD TASK USING KEYDOWN (Enter key)
 * --------------------------------------🫡
 * Task:
 * - Add a "keydown" event listener to the task input field.
 * - When a key is pressed:
 *      → check if the key is "Enter"
 *      → if yes:
 *            → perform the SAME steps as clicking Add button
 *            (get value → validate → create <li> → add to list → clear input → update count)
 ****************************************/

/****************************************
 * 4️⃣ DELETE TASK (event delegation)
 * --------------------------------------
 * Task:
 * - Add one click listener to the <ul>.
 * - When clicked:
 *      → check if the clicked element is a Delete button
 *      → if yes:
 *            → remove the parent <li>
 *            → update total count
 ****************************************/

/****************************************
 * 5️⃣ HOVER EFFECT (mouseover + mouseout)
 * --------------------------------------
 * Task:
 * - Add mouseover listener to <ul>.
 *      → if hovered element is <li>
 *            → change its background color
 *
 * - Add mouseout listener to <ul>.
 *      → if leaving a <li>
 *            → reset the background color
 ****************************************/

/****************************************
 * 6️⃣ TOTAL TASK COUNTER FUNCTION
 * --------------------------------------
 * Task:
 * - Create a function to:
 *      → count all <li> inside the <ul>
 *      → update <h2 id="count"> with: "Total Task: X"
 *
 * - Call this function after:
 *      → adding a task
 *      → deleting a task
 ****************************************/