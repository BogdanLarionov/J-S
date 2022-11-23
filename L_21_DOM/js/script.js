// console.log(document);

// const main_p = document.querySelector(".main"); // querySelector - метод, возвращающий элемент по селектору
// console.log(main_p);

// const p_list = document.querySelectorAll("p");
// console.log(p_list);
//querySelectorAll - метод возврозает итерируемый обьект ( NodeList() ) по селеутору

// const main_p = document.getElementsByClassName("main");
// // const main_p = document.getElementsByClassName("main")[0];
// console.log(main_p); // HTMLCollection
// getElementsByClassName - метод возврозает итерируемый обьект ( HTMLCollection ) по селеутору

// обращаюсь к <section class="products">
// const prod_p = document
//   .getElementsByClassName("products")[0]
//   .getElementsByTagName("p")[0];
// console.log(prod_p);
// // старый метод
// ------------
// const prod_p = document.querySelector(".products p");
// console.log(prod_p);
// // prod_p.innerText = "Товары";

// ------------
// события js
const prod_p = document.querySelector(".products p");

// addEventListener позволяет повесить событие (в данном случае click) на параграф prod_p
// и при этом событии выполняется callback функция
prod_p.addEventListener("click", () => {
  prod_p.innerText = "Товары";
});

// https://developer.mozilla.org/ru/docs/Web/Events - Справочник по событиям
// -------
