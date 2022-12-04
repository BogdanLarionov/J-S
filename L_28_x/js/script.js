// const form = document.querySelector("#add_product_form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // метод отменить дефолтное поведение, запрос не отправляется !
//   console.log("hello");
//   console.log(event.target.title); // ссылается на форму title <input placeholder="Название" type="text" name="title">
//   console.log(event.target.title.value); // считывает введеннле значение
//   console.log(event.target.price.value); // считывает введеннле значение
//   console.log(event.target.title.value, event.target.price.value); // короче запись

//   // const title = event.target.title; // тоже смособ, длинее способ чем ниже
//   // const price = event.target.price; // тоже смособ, длинее способ чем ниже
//   // console.log(title.value, price.value); // тоже смособ, длинее способ чем ниже

//   const { title, price } = event.target; // Деструктивное присваение, короче способ чем выше
//   console.log(title.value, price.value); // Деструктивное присваение, короче способ чем выше
// });

// let obj = { a: 12, b: 43 };
// let a = obj.a;
// let b = obj.b;
// // a 12
// // b 43
// Деструктивное присваение
// let { a, b } = obj;
// // a 12
// // b 43

// form.addEventListener("submit", event => {  короткая запись
// });

// http://htmlbook.ru/html/form

// Создать функцию getCard, которая в качестве аргкмента получает title и price и возвращает div с указанным внутри title и price

const form = document.querySelector("#add_product_form");
const products = document.querySelector("#products");

function getCard(title, price) {
  const container = document.createElement("div");
  const title_p = document.createElement("p");
  const price_p = document.createElement("p");
  title_p.innerText = title;
  price_p.innerText = price;
  container.append(title_p, price_p);
  return container;
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // метод отменить дефолтное поведение, запрос не отправляется !
  const { title, price } = event.target; // Деструктивное присваение, короче способ чем выше
  const card = getCard(title.value, price.value); // Деструктивное присваение, короче способ чем выше
  products.append(card);
});
