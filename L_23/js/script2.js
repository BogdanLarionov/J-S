// const data = [
//   {
//     id: 1,
//     title: "Велосипед",
//     price: 100,
//   },
//   {
//     id: 2,
//     title: "Самокат",
//     price: 500,
//   },
//   {
//     id: 3,
//     title: "Скейт",
//     price: 200,
//   },
//   {
//     id: 4,
//     title: "Лыжи",
//     price: 300,
//   },
// ];

// const rootElem = document.querySelector(".root"); // ишим по классу

// data.forEach((product) => {
//   const cardElem = document.createElement("div");
//   const idElem = document.createElement("p");
//   const titleElem = document.createElement("p");
//   const priceElem = document.createElement("p");

//   idElem.innerText = `id: ${product.id}`;
//   titleElem.innerText = `title: ${product.title}`;
//   priceElem.innerText = `price: ${product.price}`;

//   cardElem.classList.add("card");

//   cardElem.append(idElem, titleElem, priceElem);
//   rootElem.append(cardElem);
// });

// Дeструкторизация

const data = [
  {
    id: 1,
    title: "Велосипед",
    price: 100,
  },
  {
    id: 2,
    title: "Самокат",
    price: 500,
  },
  {
    id: 3,
    title: "Скейт",
    price: 200,
  },
  {
    id: 4,
    title: "Лыжи",
    price: 300,
  },
];

const rootElem = document.querySelector(".root"); // ишим по классу

data.forEach(({ id, title, price }) => {
  const cardElem = document.createElement("div");
  const idElem = document.createElement("p");
  const titleElem = document.createElement("p");
  const priceElem = document.createElement("p");

  idElem.innerText = `id: ${id}`;
  titleElem.innerText = `title: ${title}`;
  priceElem.innerText = `price: ${price}`;

  // const {id, title, price} = product // Дeструкторизация

  //   const id = product.id
  //   const title = product.title
  //   const price = product.price

  cardElem.classList.add("card");

  cardElem.append(idElem, titleElem, priceElem);
  rootElem.append(cardElem);
});

// Диструкторизация
