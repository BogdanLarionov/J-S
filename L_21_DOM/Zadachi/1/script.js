// const main_elem = document.querySelector(".main");
// main_elem.style.color = "red";

// const main_elem = document.querySelector(".main");
// main_elem.addEventListener("click", () => {
//   main_elem.style.color = "white";
//   main_elem.style.backgroundColor = "gray";
//   main_elem.style.padding = "20px";
// }); // при нажатии меняет цвет

// объявить фунцию, которая возводит случайное число от 0 до 255
// Math.round();
// Math.random();

const getNumber = Math.round(Math.random() * 255);
console.log(getNumber);

const newRandom = (Math.random() * 256) | 0;
console.log(newRandom);

("rgb(124,23,45)");

// реализовать фунцию random_color, которая возвращает случайный цвет в формате rgb

// const main_elem = document.querySelector(".main");
// const random_color = () => {
//   const r = Math.round(Math.random() * 255);
//   const g = Math.round(Math.random() * 255);
//   const b = Math.round(Math.random() * 255);
//   return `rgb(${r},${g},${b})`;
// };

// main_elem.addEventListener("click", () => {
//   main_elem.style.color = random_color();
//   main_elem.style.backgroundColor = random_color();
//   main_elem.style.padding = "20px";
// });

// const main_elem = document.querySelector(".main");
// main_elem.innerText = "Пока";

const ziro_elem = document.querySelector(".ziro");
ziro_elem.addEventListener("click", () => {
  const value = ziro_elem.innerText;
  ziro_elem.innerText = +value + 1;
});
