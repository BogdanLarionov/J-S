// Массив из обьектов
const products = [
  {
    id: 1,
    title: "Велосипед",
    price: 55000,
  },
  {
    id: 2,
    title: "Ролики",
    price: 15000,
  },
  {
    id: 3,
    title: "Скейт",
    price: 10000,
  },
];
console.log(products);
/* [
  { id: 1, title: "Велосипед", price: 55000 },
  { id: 2, title: "Ролики", price: 15000 },
  { id: 3, title: "Скейт", price: 10000 },
]; */

// Задача 1
// Используя forEach вывести каждый объект отдельно
const products1 = [
  {
    id: 1,
    title: "Велосипед",
    price: 55000,
  },
  {
    id: 2,
    title: "Ролики",
    price: 15000,
  },
  {
    id: 3,
    title: "Скейт",
    price: 10000,
  },
];

const new_products1 = products1.forEach((elem) => console.log(elem));
/* { id: 1, title: 'Велосипед', price: 55000 }
{ id: 2, title: 'Ролики', price: 15000 }
{ id: 3, title: 'Скейт', price: 10000 } */

// Задача 2
// Вывести при помощи forEach вывести только название продукта

const products2 = [
  {
    id: 1,
    title: "Велосипед",
    price: 55000,
  },
  {
    id: 2,
    title: "Ролики",
    price: 15000,
  },
  {
    id: 3,
    title: "Скейт",
    price: 10000,
  },
];

const getTitle = products2.forEach(
  (elem) => console.log(`title: ${elem.title}`)
  //   console.log(elem.title);
);
/* title: Велосипед
title: Ролики
title: Скейт */

products2.forEach((elem) => console.log(elem.title));
/* Велосипед
Ролики
Скейт */

// Задача 3
// Сформировать новыйм массив, который состоит только из тех товаров,
// цена на которые больше 12000
// вывести получившийся массив

const products3 = [
  {
    id: 1,
    title: "Велосипед",
    price: 55000,
  },
  {
    id: 2,
    title: "Ролики",
    price: 15000,
  },
  {
    id: 3,
    title: "Скейт",
    price: 10000,
  },
];

// let getBig = products3.filter((elem) => elem.price > 12000);
// let getBig = products3.filter((elem) => elem["price"] > 12000);
let getBig = products3
  .filter((elem) => elem["price"] > 12000)
  .map((elem) => elem.title); //[ 'Велосипед', 'Ролики' ]
console.log(getBig);
/* [
  { id: 1, title: "Велосипед", price: 55000 },
  { id: 2, title: "Ролики", price: 15000 },
]; */

// Задача 4
// Найти общую стоимостей товаров (сумма + )
const products4 = [
  {
    id: 1,
    title: "Велосипед",
    price: 55000,
  },
  {
    id: 2,
    title: "Ролики",
    price: 15000,
  },
  {
    id: 3,
    title: "Скейт",
    price: 10000,
  },
];

const products_sum = products4.reduce((prev, value) => prev + value.price, 0);
console.log(products_sum); // 80000

// (0, obj_1) => 0 + 5500
// (5500, obj_2) => 5500 + 15000
// (7000, obj_3) => 7000 + 10000
// 80000
