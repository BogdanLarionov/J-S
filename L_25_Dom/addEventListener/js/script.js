const square = document.querySelector(".square");
const container = document.querySelector(".container");

// https://developer.mozilla.org/ru/docs/Web/Events

// .addEventListener(); - метод, принимает два аргумента.
// превым аргументом принимает событие 'в данном случае - click', 'submit - кнопка 'отправить' надать ', сыбытия клавиатуры, мыши.
// а что произайдет записсывается вторым аргуметном это callback function

square.addEventListener("click", () => {
  // повесили слушатель событий click
  container.innerText = "Красный квадрат";
  container.style.color = "black";
  document.body.style.backgroundColor = "blue";
});

// square.addEventListener(
//   "click",
//   () => (container.innerText = "Красный квадрат")
// );

const btn = document.querySelector(".btn");
const container2 = document.querySelector("#container");

btn.addEventListener("click", () => {
  const text = document.createElement("p");
  text.innerText = "Hello!";
  text.classList.add("text");
  text.style.color = "white";
  container.append(text);
});
