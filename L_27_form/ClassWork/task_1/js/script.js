const formElem = document.querySelector(".form");
const cardsContainer = document.querySelector(".cards_container");

// formElem.addEventListener("submit", () => {
//   console.log("HEllo");
//   //при отправки формы страниса обновляется  и HEllo пропадает в консоли
// });

// кнопка должна быть в нутри формы что бы сробатывал submit

// что бы HEllo не пропадала
formElem.addEventListener("submit", (event) => {
  // formElem.addEventListener("submit", function (event) {
  event.preventDefault(); // запрешает обновлять страницу после отправки формы
  console.log("HEllo");
  console.log(event); // SubmitEvent {isTrusted: true, submitter: button, type: 'submit', target: form.form, currentTarget: form.form, …} . интересует только поле target: form.form

  console.log(event.target); // ссылка на элемент с которым происходит событие. target нужен чтобы достовать из формы значение которое введется в него

  console.log(event.target.name); // ccылаемся на конкретнкю форму input
  console.log(event.target.age); // ccылаемся на конкретнкю форму input
  console.log(event.target.city); // ccылаемся на конкретнкю форму input

  console.log(event.target.city.value); // выведем значение (данные) которое было введино в input

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
  const { name, age, city } = event.target;
  //   const { name, age, city } = this; // работает только с ("submit", function (event) {

  //   Одна строка заченяет три ниже !
  //   const name = event.target.name;
  //   const age = event.target.age;
  //   const city = event.target.city;

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
