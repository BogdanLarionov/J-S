// DOM - Document Object Model

// Document
// HTML -Проект

// Object
// Коментарий
// простой текст
// <p>Парагроф</p>

// Method
// .querySelector() - method
// .remove() - method
// .add() - method
// .createElement() - создаю новый элемент
// .append() - добовляю
// .getElementById('') -
// .getElementsByClassName('') - .
// .getElementsByTagName('') - h2

// Свойство:

// .classList.remove("class_deleted"); // удалили class
// .classList.add('class_add') - добовляет новый класс в теге
// .innerText = '' - добывать текст
// .innerHTML = '' - добывать текст
// .innerHTML = '<p>helo</p>' - отображает только текст helo, а в теги виден <p>helo</p>
// .textContent = '' - добывать текст
// .appendChild = '' - добывать текст в первый

// https://stackoverflow.com/questions/35213147/difference-between-textcontent-vs-innertext

// В JS все свойства пишуться camalCase

// style - обращаемся к стилям
// classList - обращаемся к class

const header = document.querySelector("h2"); // обрашение к тегу
header.style.color = "red"; // покрасили
header.classList.add("class_added"); // добавили class
/* <h2 class="class_added" style="color: red;">Заголовок-1</h2> */
console.log(header); // <h2>Заголовок-1</h2>

const header2 = document.querySelector(".header"); // обрашение к class
header2.style.backgroundColor = "yellow"; // // покрасили
// header2.classList.add("class_added2"); // добавили class
header2.classList.remove("class_deleted"); // удалили class
/* <h2 class="header class_added2" style="background-color: yellow;">Заголовок-2</h2> */
console.log(header2); // <h2 class="header">Заголовок-2</h2>

const paragraph = document.querySelector("#par"); // обрашение к id
console.log(paragraph); // <p id="par">Парагроф</p>

const container = document.querySelector(".container"); // ищу элкмент в html документе
const text = document.createElement("p"); // создаю новый элемент (div, img)
text.innerText = "Какойто текст"; // добовляем текст в р
// container.append(text);
// добовляю р в нутрь container
// cont.textContent = "Hello";
// ----------

const divElem = document.createElement("div");
divElem.innerText = "Текст в нутри нового div";
container.append(text, divElem);
// container.append(divElem, text); - поменяется местами

const divElemBig = document.createElement("div");
divElemBig.innerText = "Текст внутри нового div";
divElemBig.append(text);

const divElemSmall = document.createElement("div");
divElemSmall.innerText = "Маленький контэйнер";
divElemBig.append(divElemSmall);
// ----------
// let c = 0,
//   d = 0;
// c = 5 + +(+5);
// d = 5 + +(+5);
// console.log(c === d); // true
