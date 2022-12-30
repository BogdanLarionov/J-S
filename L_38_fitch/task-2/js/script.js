// https://codebeautify.org/jsonviewer
// https://reqres.in/api/users?page=1
// https://reqres.in/api/users?page=2

// map - подходит для реализации расширинного футкционала (удалить, сортировать)

// const cardsContainer = document.querySelector(".cards_container");
// const render = (json_data) => {
//   const cards = json_data.map((element) => {
//     const card = document.createElement("div");
//     const avatarElem = document.createElement("img");
//     const nameElem = document.createElement("p");
//     const emailElem = document.createElement("a");

//     avatarElem.src = element.avatar;
//     avatarElem.alt = element.avatar;
//     nameElem.innerText = element.first_name;
//     emailElem.innerText = `${element.email}`;

//     card.append(avatarElem, nameElem, emailElem);
//     return card;
//   });
//   cardsContainer.append(...cards);
// };

// const request = (num) => {
//   fetch(`https://reqres.in/api/users?page=${num}`) // интерполяция
//     .then((response) => response.json())
//     .then((json) => render(json.data));
// };

// request(1);
// request(2);
// ---------------------------------------
// ... Spread оператор
// https://metanit.com/web/javascript/5.6.php
const array = [1, true, "hello", 56];
console.log(array); // [ 1, true, 'hello', 56 ] выводит массив
console.log(...array); // 1, true, 'hello', 56 выводит элемменты
// ... Spread оператор разберает массив на элемменты, в результате получаем элемменты в нутри этого массива!
// ---------------------------------------
// Диструкторизация

const cardsContainer = document.querySelector(".cards_container");
const render = (json_data) => {
  cardsContainer.innerText = "";
  const cards = json_data.map(
    ({ id, avatar, first_name, last_name, email }) => {
      const card = document.createElement("div");
      const idElem = document.createElement("p");
      const avatarElem = document.createElement("img");
      const nameElem = document.createElement("p");
      const last_nameElem = document.createElement("p");
      const emailElem = document.createElement("a");

      idElem.innerText = `id: ${id}`;

      avatarElem.src = avatar;
      avatarElem.alt = avatar;

      nameElem.innerText = first_name;
      last_nameElem.innerText = last_name;

      emailElem.innerText = `${email}`;
      emailElem.href = `mailto:${email}`;

      card.append(idElem, avatarElem, nameElem, last_nameElem, emailElem);
      return card;
    }
  );
  cardsContainer.append(...cards);
};

const request = (num) => {
  fetch(`https://reqres.in/api/users?page=${num}`) // интерполяция
    .then((response) => response.json())
    .then((json) => render(json.data));
};

request(1);
// request(2);

const [first_btn, second_btn] = document.querySelectorAll(".triggers button");

first_btn.addEventListener("click", () => request(1));
second_btn.addEventListener("click", () => request(2));
