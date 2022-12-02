//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.

//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.

const formElem = document.querySelector(".workers_form"); // находим форму
const cardsContainer = document.querySelector(".cards_container"); // находим форму

formElem.addEventListener("submit", (event) => {
  event.preventDefault(); // запрет на обновление формы
  const card = document.createElement("div");
  const nameElem = document.createElement("p");
  const ageElem = document.createElement("p");
  const salaryElem = document.createElement("p");
  const photoElem = document.createElement("img");

  const { firstname, lastname, age, rate, days, photo } = event.target; // подтягиваем данные с формы по названию полей

  nameElem.innerText = `Firstname: ${firstname.value} \n Lastname: ${lastname.value}`;
  // lastnameElem.innerText = `Lastname: ${lastname.value}`;
  ageElem.innerText = `Age: ${age.value}`;
  salaryElem.innerText = `Rate: ${rate.value * days.value}`;

  photoElem.setAttribute("src", photo.value);
  photoElem.setAttribute("alt", "photo");

  card.classList.add("card");
  photoElem.classList.add("photo");

  card.append(nameElem, ageElem, salaryElem, photoElem);

  cardsContainer.append(card);

  firstname.value = "";
  lastname.value = "";
  age.value = "";
  rate.value = "";
  days.value = "";
  photo.value = "";
});

// https://reqres.in/ - link to photo

// HTML

/* <form class="form">
<input type="text" name="name" placeholder="You name" />
<input type="text" name="age" placeholder="Your age" value="20" />
<!-- value="20"  предзаполненые даееые -->
<input type="text" name="city" placeholder="Your city" />
<button>Submit</button>
</form>

<div class="cards_container"></div>

const formElem = document.querySelector(".form");
const cardsContainer = document.querySelector(".cards_container"); */

//  JS

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

//   event.target.name.value = "";
//   event.target.age.value = "";
//   event.target.city.value = "";
// });

// CSS

// * {
//   padding: 0px;
//   margin: 0px;
//   box-sizing: border-box;
// }

// .form {
//   display: flex;
//   flex-direction: column;
//   width: 200px;
// }

// .form input,
// form button {
//   padding: 10px;
//   margin: 10px;
// }

// .form button {
//   background-color: green;
//   color: white;
//   border: 1px solid green;
//   border-radius: 10px;
// }

// .card {
//   border: 1px solid black;
//   border-radius: 10px;
//   padding: 10px;
//   margin: 10px;
//   width: 200px;
//   background-color: antiquewhite;
// }
