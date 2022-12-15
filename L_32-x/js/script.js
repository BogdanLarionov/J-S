// let products = [
//   {
//     id: 1,
//     title: "Велосипед",
//     price: 45000,
//   },

//   {
//     id: 2,
//     title: "Ролики",
//     price: 15000,
//   },

//   {
//     id: 3,
//     title: "Свмокат",
//     price: 12000,
//   },

//   {
//     id: 4,
//     title: "Лыжи",
//     price: 23000,
//   },

//   {
//     id: 5,
//     title: "Сноуборд",
//     price: 20000,
//   },
// ];

// // Создать функцию, которая на вход получает title и price и возвращает

// /*
//     <div>
//         <pСноубордp>
//         <p>20000</p>
//     </div>;
//  */

// const rootElem = document.querySelector("#root");

// function createProductElement(title, price) {
//   const container = document.createElement("div");
//   const title_p = document.createElement("p");
//   const price_p = document.createElement("p");

//   title_p.innerText = `title: ${title}`;
//   price_p.innerText = `price: ${price}`;

//   container.classList.add("product-item"); // добавили класс

//   container.append(title_p, price_p);
//   return container;
// }

// // написать функцию, которая получает id товара и удаляет его из масива

// function deleteProduct(id) {
//   products = products.filter((product) => product.id !== id);
// }

// // deleteProduct(3); //  удаляет его из масива

// // Создать, еще один div и залить в него карточку с продуктами этот div добавить в #root

// // можно Map()
// const productContainer = document.createElement("div");

// // Внешнему div элементу добавите класс product-container
// // div элементу, который является карточкой, присвойте класс product-item

// productContainer.classList.add("product-container"); // добавили класс

// products.forEach((product) => {
//   const productElement = createProductElement(product.title, product.price);

//   productContainer.append(productElement);
//   console.log(products);
// });

// rootElem.append(productContainer);

// --------------------------------------------------------------------------------------------------------------

//  Способ 2

let products = [
  {
    id: 1,
    title: "Велосипед",
    price: 45000,
  },

  {
    id: 2,
    title: "Ролики",
    price: 15000,
  },

  {
    id: 3,
    title: "Свмокат",
    price: 12000,
  },

  {
    id: 4,
    title: "Лыжи",
    price: 23000,
  },

  {
    id: 5,
    title: "Сноуборд",
    price: 20000,
  },
];

// Создать функцию, которая на вход получает title и price и возвращает

/* 
    <div>
        <pСноубордp>
        <p>20000</p>
    </div>;
 */

const rootElem = document.querySelector("#root");
const productContainer = document.createElement("div");
productContainer.classList.add("product-container"); // добавили класс
rootElem.append(productContainer);

// создать функцию, которая возвращает элемент (button) удаления

function createDeleteButton() {
  const button = document.createElement("button");
  button.innerText = "X";
  button.classList.add("delete-btn");
  return button;
}

// создать функцию emptyList которая возвращает параграф с текстом "Товаров нет"

function emptyList() {
  const p_elem = document.createElement("p");
  p_elem.innerText = "Товаров нет";
  return p_elem;
}

function createProductElement(id, title, price) {
  const container = document.createElement("div");
  const title_p = document.createElement("p");
  const price_p = document.createElement("p");
  const delete_btn = createDeleteButton();

  delete_btn.addEventListener("click", () => deleteProduct(id));
  // delete_btn.addEventListener("click", () => {
  //   deleteProduct(id);
  // });

  title_p.innerText = `title: ${title}`;
  price_p.innerText = `price: ${price}`;
  container.append(title_p, price_p, delete_btn);
  container.classList.add("product-item"); // добавили класс
  return container;
}

function render() {
  productContainer.innerText = ""; // что-бы небыло повторений карточек
  if (products.length === 0) {
    productContainer.append(emptyList());
  } else {
    products.forEach((product) => {
      const productElement = createProductElement(
        product.id,
        product.title,
        product.price
      );
      productContainer.append(productElement);
      console.log(products);
    });
  }
}

function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
  render();
}
// deleteProduct(2);
render();

// rootElem.append(createDeleteButton());

// повесить обработчик удалений на кнопку удаления
