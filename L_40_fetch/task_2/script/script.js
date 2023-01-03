// https://dummyjson.com/
// https://codebeautify.org/jsonviewer

// https://prog-center.pro/ сайт Нелли

// https://dummyjson.com/users - таблица

// вывести Имя, фамилию, позраст, пол.
// В Зависимости от пола цвет заднего пола

const userForm = document.querySelector(".user_form");
const usersContainer = document.querySelector(".users_container");

const request = (num) => {
  fetch(`https://dummyjson.com/users/${num}`)
    .then((response) => response.json())
    // .then(json => console.log(json));
    // .then((json) => render(json.users));
    .then((json) => render(json));
};

// const render = (json) => {
const render = ({ firstName, lastName, age, gender }) => {
  usersContainer.innerText = ""; // чистить контейнер
  const userCard = document.createElement("div");
  const nameElem = document.createElement("p");
  const ageElem = document.createElement("p");
  const genderElem = document.createElement("p");

  userCard.append(nameElem, ageElem, genderElem);
  usersContainer.append(userCard);

  nameElem.innerText = `Name: ${firstName} ${lastName}`;
  ageElem.innerText = `Age: ${age}`;
  genderElem.innerText = `Gender: ${gender}`;

  const Cardbackground = gender === "male" ? "lightgreen" : "lightpink";
  userCard.style.backgroundColor = Cardbackground;
  userCard.classList.add("user_card");
};

// request(1);
// request(5);
// request(6);

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = event.target.id_number.value;
  request(id);
  event.target.id_number.value = ""; // очистить input
});
