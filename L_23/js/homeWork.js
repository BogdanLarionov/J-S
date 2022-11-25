// В файле html в тэге body есть одни элемент div c классом root.
// Используя JS (DOM), создать карточку товара (div), которая должна включать в себя
// следующие данные: Артикул, наименование товара, цена. Данные взять произвольные.
// Применить стили к карточке: width, background-color, border, border-radius, padding, margin.

const rootElem = document.querySelector(".root");

const card = document.createElement("div");

const art = document.createElement("p");
const title = document.createElement("p");
const price = document.createElement("p");

art.innerText = "code: D-23nH9jAAA+";
title.innerText = "title: Dishwasher Bosch";
price.innerText = "price: 299 €";

// card.innerHTML = '<p>helo</p>' - отображает только текст а в теги виден <p>helo</p>

card.classList.add("card"); // добовляет класс в теге

// card.style.border = "1px solid black";
// card.style.width = "300px";
// card.style.backgroundColor = "gray";
// card.style.borderRadius = "1rem";
// card.style.padding = "10px";
// card.style.margin = "10px";

card.append(art, title, price);

rootElem.append(card);
