const productsElem = document.querySelector("#products");

function getAllPdoducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => renderProductCards(json));
}

getAllPdoducts();

const products = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

// Написать функуию, которая получает на вход данные продукта и возвращает div элемент с отображением продукта.
// Картинку, название, цена

function getProductCard(card_data) {
  const { title, price, image, id } = card_data;

  const container = document.createElement("div");
  const idElem = document.createElement("p");
  const titleElem = document.createElement("p");
  const priceElme = document.createElement("p");

  const imageElem = document.createElement("img");

  container.append(imageElem, idElem, titleElem, priceElme);

  container.classList.add("item");

  idElem.innerText = `id product: ${id}`;
  titleElem.innerText = title;
  priceElme.innerText = `price: ${price}`;

  imageElem.src = image;
  return container;
}

productsElem.append(getProductCard(products));
