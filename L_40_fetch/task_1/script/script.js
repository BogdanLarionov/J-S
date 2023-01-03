// https://jsonplaceholder.typicode.com/todos
// eslint - чистит код, правильный

const tasksContainer = document.querySelector("#tasks_container");

let id_num = 1; // стартует с номера 1

const request = (num) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
    .then((response) => response.json())
    .then((json) => render(json));
};

request(id_num);

// const render = (json) => {

const render = ({ title, completed }) => {
  tasksContainer.innerText = "";
  const task = document.createElement("div");
  const taskTitle = document.createElement("p");
  const taskStatus = document.createElement("p");

  // const status = json.completed ? "done" : "not done";
  // const background = json.completed ? "lightgreen" : "lightgray";

  const status = completed ? "done" : "not done";
  const background = completed ? "lightgreen" : "lightgray";

  // Елена Сорокина - код длинее!
  // completed === true
  //   ? (card.style.background = "#45b545")
  //   : (card.style.backgroundColor = "#7c877c");

  // taskTitle.innerText = `task: ${json.title}`;

  taskTitle.innerText = `task: ${title}`;
  taskStatus.innerText = `status: ${status}`;

  task.classList.add("task_card");
  task.style.backgroundColor = background;

  task.append(taskTitle, taskStatus);

  tasksContainer.append(task);
};

const [left_btn, right_btn] = document.querySelectorAll(".triggers button");

left_btn.addEventListener("click", () => {
  if (id_num === 1) {
    id_num = 201;
  }
  request(--id_num);
});
right_btn.addEventListener("click", () => {
  if (id_num === 200) {
    id_num = 0;
  }
  request(++id_num);
});
