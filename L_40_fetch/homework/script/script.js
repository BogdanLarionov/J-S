// https://jsonplaceholder.typicode.com/todos
// eslint - чистит код, правильный

const tasksContainer = document.querySelector("#tasks_container");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => render(json));

const render = (json) => {
  const tasks = json.map(({ title, completed }) => {
    const task = document.createElement("div");
    const taskTitle = document.createElement("p");
    const taskStatus = document.createElement("p");

    const status = completed ? "done" : "not done";
    const background = completed ? "lightgreen" : "lightgray";

    // Елена Сорокина - код длинее!
    // completed === true
    //   ? (card.style.background = "#45b545")
    //   : (card.style.backgroundColor = "#7c877c");

    taskTitle.innerText = `task: ${title}`;
    taskStatus.innerText = `status: ${status}`;

    task.classList.add("task_card");
    task.style.backgroundColor = background;

    task.append(taskTitle, taskStatus);
    return task;
  });
  tasksContainer.append(...tasks);
};
