// // https://jsonplaceholder.typicode.com/
// // `${}` - инткрполяция
// // Fetch

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// // Задача
// // На основе ранне реализованного fetch запроса напишите запрос,
// // который возвращает данные одного пользователя (с id 5)

// // способ 1

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data[4]));

// // способ 2

// fetch("https://jsonplaceholder.typicode.com/users/5")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// //   .then((data) => console.log(data.address.geo)); // .address.geo

// // Написать функцию, которая в качестве аргумента получает id польщователя
// // и выврдит данные о нем в консоль

// function showUser(id) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// console.log(showUser(1));
// showUser(1);
// // console.log(showUser(2));
// // showUser(2);
// // console.log(showUser(3));
// // showUser(3);
// // console.log(showUser(4));
// // showUser(4);

// // ------------------------------------------------------------

// function showUser(id, callback) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((response) => response.json())
//     .then((data) => callback(data));
// }

// showUser(3, console.log);

// ------------------------------------------------------------

// Написать функцию, которая получает в качестве аргумента объект с данными пользователя
// и добовдяет карточку с "name" и  "username" в #root

// добавить для карточек пользователя email (в виде ссылки)

const root = document.querySelector("#root");

function addUser(user) {
  const item = document.createElement("div");
  const nameElem = document.createElement("p");
  const usernameElem = document.createElement("p");
  const emailElem = document.createElement("a");

  item.classList.add("item");

  nameElem.innerText = user.name;
  usernameElem.innerText = user.username;

  emailElem.href = `mailto:${user.email}`;
  emailElem.innerText = user.email;

  item.append(nameElem, usernameElem, emailElem);
  root.append(item);
}

function showUser(id, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((data) => callback(data));
}

showUser(3, addUser); // - показать в браузере

/* Добавить форму,
форма должна иметь одно поле ввода и кнопку отправки
при отправке (событие submit) выводить содержимое поле ввода в консоль */

const add_form = document.querySelector("#add_form");
add_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = event.target.id.value;
  showUser(id, addUser);
  event.target.id.value = ""; // удаляет в поле id значение после ввода
});
