const rootElem = document.querySelector(".root"); // находим по классу
// -------------------------------------------
// создаем элементы
const card = document.createElement("div");

const idElem = document.createElement("p");
const firsnameElem = document.createElement("p");
const lastnameElem = document.createElement("p");
const ageElem = document.createElement("p");
const salaryElem = document.createElement("p");
const emailTextElem = document.createElement("span");

const imgElem = document.createElement("img"); // создали тег
const emailElem = document.createElement("a"); //создали тег для почты
// -------------------------------------------
// добавили текс
idElem.innerText = "ID: 1";
firsnameElem.innerText = "First name: Olga";
lastnameElem.innerText = "lastname: Petrov";
emailTextElem.innerText = "Email: ";
emailElem.innerText = "example@gmail.com";
ageElem.innerText = "Age: 18";
salaryElem.innerText = "Salary: 1500";

// -------------------------------------------
card.classList.add("card"); // добавили класс, можем в css обращаться
imgElem.classList.add("photo"); // добавили класс, элементу photo

imgElem.setAttribute("src", "https://reqres.in/img/faces/12-image.jpg"); // добовление атрибута src k imgElem, метод отображения картинуи через js

imgElem.setAttribute("alt", "Изображение с девушкой"); // добовление атрибута k alt k imgElem описание фото
// -----------------------------------------
emailElem.setAttribute("href", "mailto:example@gmail.com"); // // добовление атрибута к href

emailElem.setAttribute("href", "mailto:example@gmail.com"); // // добовление атрибута к href к emailElem

// -------
// Kороткий способ добовления атрибутов к img

// imgElem.src = "https://reqres.in/img/faces/12-image.jpg"; // второй способ отображения картинуи

// imgElem.alt = "Изображение с девушкой"; // // описание фото

// emailElem.href = "mailto:example@gmail.com"; // добовление атрибута к href к emailElem
// -------
card.append(
  idElem,
  firsnameElem,
  lastnameElem,
  ageElem,
  emailTextElem,
  emailElem,
  salaryElem,
  imgElem
); // добавили в div "card" порагроф 'p' - firsnameElem, lastnameElem
rootElem.append(card); // добавили card в rootElem
