// 1  Вывести текст, введенный в инпут, в консоль

const showTextBtn = document.querySelector(".show_text_btn");

const showTextInput = document.querySelector(".show_text_input");

showTextBtn.addEventListener("click", () => console.log(showTextInput.value));
console.log(showTextBtn);
console.log(showTextInput);
// ------------------------------------------------------------------------------------------------------------------------------

// 2 Поменять текст в инпуте с ??? на !!!

const changeTextBtn = document.querySelector(".change_text_btn");
const changeTextInput = document.querySelector(".change_text_input");
changeTextBtn.addEventListener("click", () => (changeTextInput.value = "!!!"));
// ------------------------------------------------------------------------------------------------------------------------------

// 3 Поменять фон на черный
// 1 способ
const black_mode_btn = document.querySelector(".black_mode_btn");

black_mode_btn.addEventListener(
  "click",
  () => (document.body.style.backgroundColor = "black")
);

// 2 способ

// const black_mode_btn2 = document.querySelector(".black_mode_btn");
// const body = document.querySelector("body");

// black_mode_btn2.addEventListener(
//   "click",

//   () => (body.style.backgroundColor = "black")
// );
// ------------------------------------------------------------------------------------------------------------------------------
// classList.add(); // - добовляет класс
// classList.remove(); //- удаляет класс
// classList.toggle(); // - добовляет класс, если он есть удаляет класс если его нет / универсальный метод
// ------------------------------------------------------------------------------------------------------------------------------

// 4 Поменять фон на черный

// 1 способ

// const change_mode_btn = document.querySelector(".change_mode_btn");
// change_mode_btn.addEventListener("click", () => {
//   document.body.classList.toggle("black_mode");
// });
//   способ работает с css

// 2 способ

const change_mode_btn = document.querySelector(".change_mode_btn");
change_mode_btn.addEventListener("click", () => {
  const backgroundColor =
    document.body.style.backgroundColor === "black" ? "white" : "black";

  document.body.style.backgroundColor = backgroundColor;
});

//   способ работает без css

// 3 способ

// const change_mode_btn = document.querySelector(".change_mode_btn");
// change_mode_btn.addEventListener("click", () => {
//   if (document.body.style.backgroundColor === "black") {
//     return "white";
//   } else {
//     return "black";
//   }
// });

// прсмотреть не работает

// ------------------------------------------------------------------------------------------------------------------------------

// 5 Меняет цвет кнопки на red

const redColorBtn = document.querySelector(".red_color_btn");

redColorBtn.addEventListener(
  "click",
  (event) => (event.target.style.backgroundColor = "red")
);
// ------------------------------------------------------------------------------------------------------------------------------

// 6 Меняет цвет кнопки на random

// https://www.rapidtables.com/web/color/RGB_Color.html

const randomColorBtn = document.querySelector(".random_color_btn");
const getRandomNum = () => Math.round(Math.random() * 255);

//Math.random() => дробное от 0 до 1
//Math.random() * 255 => дробное от 0 до 255
//Math.round(Math.random() * 255) => целое число от 0 до 255

randomColorBtn.addEventListener(
  "click",
  (event) =>
    (event.target.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`)
);

// 7 Менять цвет фон на случайный

const randomBackground = document.querySelector(".random_bacgraund_btn");
const getRandomBackgraund = () => Math.round(Math.random() * 255);

randomBackground.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${getRandomBackgraund()}, ${getRandomBackgraund()}, ${getRandomBackgraund()})`;
});
// ------------------------------------------------------------------------------------------------------------------------------

// 8 Менять содержимое инпута на значение из массива

const changeBtn = document.querySelector(".change_btn");
const changeInput = document.querySelector(".change_input");

const symbols = ["!!!", "...", "+++", "@@@"];
let symbol_index = 0;

changeBtn.addEventListener(
  "click",
  () => (changeInput.value = symbols[symbol_index++ % symbols.length])
);

//symbols_index++ % symbols.length
// 0 % 4 = 0
// 1 % 4 = 1
// 2 % 4 = 2
// 3 % 4 = 3
// 4 % 4 = 0
// 5 % 4 = 1
// 6 % 4 = 2
// 7 % 4 = 3
// 8 % 4 = 0

// ------------------------------------------------------------------------------------------------------------------------------

// 9 Создать слайдер с фотографиями из массива

// 1 способ

// const imgSlider = document.querySelector(".img_slider");

// const photos = [
//   "https://www.ardalpha.de/wissen/weltall/raumfahrt/elefant-asiatischer-ohren-ruessel-sri-lanka-asien-100~_v-img__16__9__l_-1dc0e8f74459dd04c91a0d45af4972b9069f1135.jpg?version=3123b",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Elephant_near_ndutu.jpg/300px-Elephant_near_ndutu.jpg",
//   "https://static.nationalgeographic.de/files/styles/image_3200/public/nationalgeographic_2706457.jpg?w=1600&h=900",
//   "file:///Users/bogdanlarionov/Desktop/A.gif",
// ];
// let img_slider = 0;

// imgSlider.addEventListener(
//   "click",
//   (event) => (imgSlider.src = photos[img_slider++ % photos.length])
// );

// 2 способ

const photos = [
  "https://image.geo.de/30039574/t/b1/v3/w1440/r1/-/afrikanischer-elefant-gross-jpg--15463-.jpg",
  "https://image.stern.de/32837894/t/tc/v2/w1440/r1/-/elefant-baby.jpg",
  "https://www.fr.de/bilder/2022/03/14/91409793/28439211-eigentlich-sind-afrikas-elefanten-durch-das-washingtoner-artenschutzabkommen-geschuetzt-imago-images-2jw2YakuLDec.jpg",
  // "file:///Users/bogdanlarionov/Desktop/A.gif",
];

const imgSlider = document.querySelector(".img_slider");

let photoIndex = 0;

imgSlider.addEventListener(
  "click",
  (event) => (event.target.src = photos[photoIndex++ % photos.length])
);

// homework
// слайдер
const photosBtn = [
  "https://image.geo.de/30039574/t/b1/v3/w1440/r1/-/afrikanischer-elefant-gross-jpg--15463-.jpg",
  "https://image.stern.de/32837894/t/tc/v2/w1440/r1/-/elefant-baby.jpg",
  "https://www.fr.de/bilder/2022/03/14/91409793/28439211-eigentlich-sind-afrikas-elefanten-durch-das-washingtoner-artenschutzabkommen-geschuetzt-imago-images-2jw2YakuLDec.jpg",
  // "file:///Users/bogdanlarionov/Desktop/A.gif",
];

const imgBtnSlider = document.querySelector(".img_btn_slider");
const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");

let photo_index = 0;

leftBtn.addEventListener("click", () => {
  imgBtnSlider.src = photosBtn[photo_index++ % photosBtn.length];
});

rightBtn.addEventListener("click", () => {
  imgBtnSlider.src = photosBtn[++photo_index % photosBtn.length];
});

// кнопка

const btnBig = document.querySelector(".btn_big");

btnBig.addEventListener("click", () => {
  btnBig.style.height = "60px";
  btnBig.style.width = "60px";
  btnBig.style.backgroundColor = "green";
  btnBig.style.marginLeft = "50rem";
});
