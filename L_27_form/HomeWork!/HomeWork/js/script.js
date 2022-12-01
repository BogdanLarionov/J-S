// Коллеги, привет! Ловите задачки на дом:
// ЗАДАЧА 1
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div)
// При нажатии на кнопку в контейнере создается параграф с текстом зеленого цвета (текст взять произвольный)

// ЗАДАЧА 2
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div).
// При нажатии на кнопку в контейнере создаются желтые квадраты 300х300px. К контейнеру применить свойство grid.

const body = document.querySelector("body");

const btn = document.createElement("button");
const divElem = document.createElement("div");

const btn2 = document.createElement("button");
const divElem2 = document.createElement("div");

btn.innerText = "press me";
btn2.innerText = "push me";

body.append(btn, divElem);

body.append(btn2, divElem2);

btn.addEventListener("click", () => {
  const text = document.createElement("p");
  text.classList.add("text");
  text.innerText = "hello";
  text.style.color = "green";
  divElem.append(text);
});

btn2.addEventListener("click", () => {
  const yellowSquer = document.createElement("div");
  yellowSquer.style.height = "300px";
  yellowSquer.style.width = "300px";
  yellowSquer.style.backgroundColor = "yellow";
  yellowSquer.innerText = "Berlin";
  yellowSquer.classList.add("squer");

  divElem2.append(yellowSquer);
});
