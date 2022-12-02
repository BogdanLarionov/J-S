// ------------------------------------------------------------------------------
const formElem = document.querySelector(".form");
const cardsContainer = document.querySelector(".cards_container");

// formElem.addEventListener("submit", () => {
//   console.log("HEllo");
//   //при отправки формы страница обновляется  и HEllo пропадает в консоли
// });

// кнопка должна быть в нутри формы что бы сробатывал submit!

// что бы HEllo не пропадала
formElem.addEventListener("submit", (event) => {
  // formElem.addEventListener("submit", function (event) {
  event.preventDefault(); // запрешает обновлять страницу после отправки формы
  console.log("HEllo");
  console.log(event); // выведи событие SubmitEvent  интересует таргет в данном случае

  // console.log(event.target); // ссылка на элемент с которым происходит событие. target нужен чтобы достовать из формы значение которое введется в него

  // console.log(event.target.name); // ccылаемся на конкретнкю форму input
  // console.log(event.target.age); // ccылаемся на конкретнкю форму input
  // console.log(event.target.city); // ccылаемся на конкретнкю форму input

  // console.log(event.target.name.value); // выведем значение (данные) которое было введино в input
  // console.log(event.target.age.value); // выведем значение (данные) которое было введино в input
  // console.log(event.target.city.value); // выведем значение (данные) которое было введино в input

  const card = document.createElement("div");
  const nameElem = document.createElement("p");
  const ageElem = document.createElement("p");
  const cityElem = document.createElement("p");
  // ------------------------------------------------------------------------------

  //   nameElem.innerText = `Name: ${event.target.name.value}`; // Name: Bohdan Larionov
  //   ageElem.innerText = `age: ${event.target.age.value}`; // age: 32
  //   cityElem.innerText = `city: ${event.target.city.value}`; // city: Berlin
  // ------------------------------------------------------------------------------
  //   Так короче! Деструктуризация
  const { name, age, city } = event.target; // по атрибуту name=".." в input HTML, ссылка на форму
  //   Одна строка заменяет три ниже !
  //   const name = event.target.name;
  //   const age = event.target.age;
  //   const city = event.target.city;

  //   const { name, age, city } = this; // работает только с ("submit", function (event) {

  nameElem.innerText = `Name: ${name.value}`; // Name: Bohdan Larionov
  ageElem.innerText = `age: ${age.value}`; // age: 32
  cityElem.innerText = `city: ${city.value}`; // city: Berlin
  // ------------------------------------------------------------------------------

  card.classList.add("card");

  card.append(nameElem, ageElem, cityElem);
  cardsContainer.append(card);

  // для отчистки полей эти условия должны бьть написаны в низу!!!
  //   event.target.name.value = ""; // очистка input поля после нажатия кнопки submit
  //   event.target.age.value = ""; // очистка input поля после нажатия кнопки submit
  //   event.target.city.value = ""; // очистка input поля после нажатия кнопки submit
  // ------------------------------------------------------------------------------
  //   Так короче! работает в связке const { name, age, city } = event.target; этой строкой
  // для отчистки полей эти условия должны бьть написаны в низу!!!
  name.value = ""; // очистка input поля после нажатия кнопки submit
  age.value = ""; // очистка input поля после нажатия кнопки submit
  city.value = ""; // очистка input поля после нажатия кнопки submit
});

// ----------------------------------------------------------------------------------------------------------

// Pабочий код!!!!!!!!!!!!!!

// const formElem = document.querySelector(".form");
// const cardsContainer = document.querySelector(".cards_container");

// formElem.addEventListener("submit", (event) => {
//   event.preventDefault(); // запрешает обновлять страницу после отправки формы

//   const card = document.createElement("div");
//   const nameElem = document.createElement("p");
//   const ageElem = document.createElement("p");
//   const cityElem = document.createElement("p");

//   nameElem.innerText = `name: ${event.target.name.value}`;
//   ageElem.innerText = `age: ${event.target.age.value}`;
//   cityElem.innerText = `city: ${event.target.city.value}`;

//   card.classList.add("card");

//   card.append(nameElem, ageElem, cityElem);
//   cardsContainer.append(card);

//   event.target.name.value = "";
//   event.target.age.value = "";
//   event.target.city.value = "";

// });
// ----------------------------------------------------------------------------------------------------------
// Способ 2 короче записи

// const formElem = document.querySelector(".form");
// const cardsContainer = document.querySelector(".cards_container");

// formElem.addEventListener("submit", (event) => {
//   event.preventDefault(); // запрешает обновлять страницу после отправки формы
//   const card = document.createElement("div");
//   const nameElem = document.createElement("p");
//   const ageElem = document.createElement("p");
//   const cityElem = document.createElement("p");

//   const { name, age, city } = event.target;

//   nameElem.innerText = `name: ${name.value}`;
//   ageElem.innerText = `age: ${age.value}`;
//   cityElem.innerText = `city: ${city.value}`;

//   card.classList.add("card");

//   card.append(nameElem, ageElem, cityElem);
//   cardsContainer.append(card);

//   // для отчистки полей эти условия должны бьть написаны в низу!!!
//   name.value = ""; // очистка input поля после нажатия кнопки submit
//   age.value = ""; // очистка input поля после нажатия кнопки submit
//   city.value = ""; // очистка input поля после нажатия кнопки submit
// });
// ----------------------------------------------------------------------------------------------------------
// Способ 3

// const formElem = document.querySelector(".form");
// const cardsContainer = document.querySelector(".cards_container");

// formElem.addEventListener("submit", (event) => {
//   event.preventDefault(); // запрешает обновлять страницу после отправки формы
//   const card = document.createElement("div");
//   const nameElem = document.createElement("p");
//   const ageElem = document.createElement("p");
//   const cityElem = document.createElement("p");

//   const name = event.target.name;
//   const age = event.target.age;
//   const city = event.target.city;

//   nameElem.innerText = `name: ${name.value}`;
//   ageElem.innerText = `age: ${age.value}`;
//   cityElem.innerText = `city: ${city.value}`;

//   card.classList.add("card");

//   card.append(nameElem, ageElem, cityElem);
//   cardsContainer.append(card);

//   // для отчистки полей эти условия должны бьть написаны в низу!!!
//   name.value = ""; // очистка input поля после нажатия кнопки submit
//   age.value = ""; // очистка input поля после нажатия кнопки submit
//   city.value = ""; // очистка input поля после нажатия кнопки submit
// });

// 4 Способ

// const formElem = document.querySelector(".form");
// const cardsContainer = document.querySelector(".cards_container");

// formElem.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const card = document.createElement("div");
//   const nameElem = document.createElement("p");
//   const ageElem = document.createElement("p");
//   const cityElem = document.createElement("p");

//   const { name, age, city } = this;

//   nameElem.innerText = `name: ${name.value}`;
//   ageElem.innerText = `age: ${age.value}`;
//   cityElem.innerText = `city: ${city.value}`;

//   card.classList.add("card");

//   card.append(nameElem, ageElem, cityElem);
//   cardsContainer.append(card);

//   event.target.name.value = "";
//   event.target.age.value = "";
//   event.target.city.value = "";
// });
