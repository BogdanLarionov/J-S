// Задайте массив объектов workers. Выведите на экран карточки со следующей информацией по всем работникам: ID, Имя, Фвмилия, Возраст, Зарплата, Фото.
// Зарплата расчитывается через умножение ставки на количиство дней. Карточки должны включать отображение фотографии.
// Примените стили к карточкам: width, padding, border, background-color

const workers = [
  {
    id: 1,
    first_name: "Olga",
    last_name: "Petrova",
    age: 18,
    rate: 100,
    days: 15,
    photo: "https://reqres.in/img/faces/12-image.jpg",
    progress: 50,
  },

  {
    id: 2,
    first_name: "Petr",
    last_name: "Ivanov",
    age: 46,
    rate: 70,
    days: 22,
    photo: "https://reqres.in/img/faces/4-image.jpg",
    progress: 10,
  },

  {
    id: 3,
    first_name: "Oleg",
    last_name: "Orlov",
    age: 32,
    rate: 34,
    days: 10,
    photo: "https://reqres.in/img/faces/10-image.jpg",
    progress: 75,
  },

  {
    id: 4,
    first_name: "Irina",
    last_name: "Medvedeva",
    age: 22,
    rate: 85,
    days: 17,
    photo: "https://reqres.in/img/faces/2-image.jpg",
    progress: 30,
  },
];

const rootElem = document.querySelector(".root");

workers.forEach(({ id, first_name, last_name, age, salaty, photo }) => {
  const cardElem = document.createElement("div");

  const idElem = document.createElement("p");
  const first_nameElem = document.createElement("p");
  const last_nameElem = document.createElement("p");
  const ageElem = document.createElement("p");
  const salatyElem = document.createElement("p");
  const photoElem = document.createElement("img");

  idElem.innerText = `id: ${id}`;
  first_nameElem.innerText = `first_name: ${first_name}`;
  last_nameElem.innerText = `last_name: ${last_name}`;
  ageElem.innerText = `age: ${age}`;
  salatyElem.innerText = `salaty: ${salaty}`;

  cardElem.classList.add("card");
  photoElem.classList.add("photo");

  photoElem.src = photo;

  photoElem.alt = "photo";

  cardElem.append(
    idElem,
    first_nameElem,
    last_nameElem,
    ageElem,
    salatyElem,
    photoElem
  );
  rootElem.append(cardElem);
});

// Nelli Efremyan
//   8:58 PM
// Коллеги, привет! Ловите задачки на дом:
// ЗАДАЧА 1
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div)
// При нажатии на кнопку в контейнере создается параграф с текстом зеленого цвета (текст взять произвольный)
// ЗАДАЧА 2
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div).
// При нажатии на кнопку в контейнере создаются желтые квадраты 300х300px. К контейнеру применить свойство grid.
