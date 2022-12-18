// homework
// 1. Создать слайдер картинок с кнопками
// слайдер

const photos = [
  "https://image.geo.de/30039574/t/b1/v3/w1440/r1/-/afrikanischer-elefant-gross-jpg--15463-.jpg",
  "https://image.stern.de/32837894/t/tc/v2/w1440/r1/-/elefant-baby.jpg",
  "https://www.fr.de/bilder/2022/03/14/91409793/28439211-eigentlich-sind-afrikas-elefanten-durch-das-washingtoner-artenschutzabkommen-geschuetzt-imago-images-2jw2YakuLDec.jpg",
  // "file:///Users/bogdanlarionov/Desktop/A.gif",
];

const img_slider_1 = document.querySelector(".img_slider_1");
// диструкторизация nodeList
const [left_btn, right_btn] = document.querySelectorAll(".triggers button");
let photoIndex_1 = 0;
right_btn.addEventListener(
  "click",
  () => (img_slider_1.src = photos[++photoIndex_1 % photos.length])
);

left_btn.addEventListener("click", () => {
  if (photoIndex_1 === 0) {
    photoIndex_1 = photos.length;
  }
  img_slider_1.src = photos[--photoIndex_1 % photos.length];
});
// ------------------------------------------------------------------------------------------------------------------------------

// a++ - сначала возвращает значение, а потом увеоичивает его на единицу
// ++a - сначала увеличивает на единицу, а потом возвращает

let a = 10;
console.log(a); // 10
console.log(a++); // 10
console.log(a); // 11
console.log(++a); // 12
// ------------------------------------------------------------------------------------------------------------------------------
// Стрелочная функуия
const user = {
  firstname: "Anton",
  lastname: "Ivanov",
  age: 38,
};

const showMassage = (obj) => {
  console.log(`Hello ${obj.firstname}. You are ${obj.age} years old!`);
};
showMassage(user);
// ------------------------------------------------------------------------------------------------------------------------------

const user2 = {
  firstname: "Anton",
  lastname: "Ivanov",
  age: 38,
};

const showMessage = (obj) => {
  console.log(`Hello ${obj.firstname}. You are ${obj.age} years old!`);
};
showMassage(user2);
// Стрелочная функуия c диструкторизацыей

const showMassage_1 = ({ firstname, age }) => {
  console.log(`Hello ${firstname}. You are ${age} years old!`);
};
showMassage_1(user2);
// ------------------------------------------------------------------------------------------------------------------------------
// кнопка
// 2. Cоздать кнопку с размерами 30 на 30 пикселей, при каждом нажатии увеличивать ее на 10 пикселей

const incrBtn = document.querySelector(".incr_btn");
let btn_params = 30;
const getRandomNum = () => Math.round(Math.random() * 255);

const incr_btn_rendem = (size_params) => {
  incrBtn.style.width = size_params + "px";
  incrBtn.style.height = size_params + "px";
};

incr_btn_rendem(btn_params);

incrBtn.addEventListener("click", () => {
  btn_params += 10;
  incrBtn.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;
  incr_btn_rendem(btn_params);
});

// ------------------------------------------------------------------------------------------------------------------------------

// Создать генератор бросаемых костей

const gameBtn = document.querySelector(".game_btn");
const gameResalt = document.querySelector(".game_resalt");

const getNum = () => Math.round(Math.random() * 5 + 1); // 1 - 6

gameBtn.addEventListener(
  "click",
  () => (gameResalt.innerText = `${getNum()} X ${getNum()}`)
);

// ------------------------------------------------------------------------------------------------------------------------------

// Создать описанный в форме элемент

const addForm = document.querySelector(".add_form");
const formResalt = document.querySelector(".form_resalt");

addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { type, content, color } = event.target;

  formResalt.innerText = "";

  const elem = document.createElement(type.value);
  elem.innerText = content.value;

  elem.style.color = color.value;

  formResalt.append(elem);

  type.value = "";
  content.value = "";
  color.value = "";
});
