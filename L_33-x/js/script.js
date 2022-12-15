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
  title_p.innerText = `title: ${title}`;
  price_p.innerText = `price: ${price}`;
  container.append(title_p, price_p, delete_btn);
  container.classList.add("product-item"); // добавили класс

  // повесить на карточки обработчик событий click и выводить какой-нибудь текст в консоль
  container.addEventListener("click", (event) => {
    event.target.classList.add("active");
    console.log("hello");
  });
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
    });
  }
}

function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
  render();
}
render();

// rootElem.append(createDeleteButton());

// повесить обработчик удалений на кнопку удаления

// -----------

// обработка формы добавления

// 1) создать переменую с ссылкой на форму

const add_form = document.querySelector("#add_form");

// 2) Повесить обработчик submit  на форму add_form и при отправке формы выводить что-нибудь в консоль

add_form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("hello");
  // console.log(event.target);
  // console.log(event.target.title);
  // console.log(event.target.title.value);
  const input_title = event.target.title;
  const input_price = event.target.price;
  // console.log(input_title, input_price);
  // console.log(
  //   `input_title: ${input_title.value} \n input_price: ${input_price.value}`
  // );

  const new_product = {
    // сформировали новый обьект
    id: Date.now(),
    title: input_title.value,
    price: input_price.value,
  };

  products.push(new_product);
  render();
  input_title.value = ""; // очистить форму
  input_price.value = ""; // очистить форму
});

// console.log(Date.now()); время исчисления
