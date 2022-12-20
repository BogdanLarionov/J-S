// HomeWork
// https://jsonplaceholder.typicode.com/todos

const cardContiner_3 = document.querySelector(".cards_container_3");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((json_data) => render_3(json_data)); // json в том случае это переменная

const render_3 = (json_data) => {
  json_data.forEach(({ title, completed }) => {
    const card = document.createElement("div");
    const titleElem = document.createElement("p");
    const completedElem = document.createElement("p");

    card.append(titleElem, completedElem);
    cardContiner_3.append(card);

    card.classList.add("card");

    titleElem.innerText = `Title: ${title}`;
    completedElem.innerText = `Status: ${
      completed === true ? "done" : "not done"
    }`;

    card.style.backgroundColor = completed ? "#7CDC95" : "#D3D2D4";
    completedElem.completed = true ? "done" : "not done";
  });
};
