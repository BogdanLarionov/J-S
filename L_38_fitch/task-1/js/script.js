// https://codebeautify.org/jsonviewer
// https://reqres.in/api/users/
// https://jsonplaceholder.typicode.com/

// const cards_container = document.querySelector(".cards_container");

// fetch("https://reqres.in/api/users/") // отпрваляем запрос по адрессу
//   .then((resp) => resp.json()) // получаем ответ, преобразовываем в json
//   .then((json) => render(json.data)); // получаем json, что-то делаем с json

// //   json.data => json_data(это переменная, может быть любое название)

// const render = (json_data) => {
//   json_data.forEach((element) => {
//     const card = document.createElement("div");
//     const idElem = document.createElement("p");
//     const avatarElem = document.createElement("img");
//     const firstnameElem = document.createElement("p");
//     const last_nameElem = document.createElement("p");
//     const emailElem = document.createElement("a");

//     card.classList = "card";

//     idElem.innerText = `id: ${element.id}`;

//     avatarElem.src = element.avatar; // короткая запись
//     avatarElem.alt = element.avatar; // короткая запись

//     // avatarElem.setAttribute("src", element.avatar); // длинная запись
//     // avatarElem.setAttribute("alt", element.avatar); // длинная запись

//     // firstnameElem.innerText = element.first_name;
//     // last_nameElem.innerText = element.last_name;

//     firstnameElem.innerText = `${element.first_name} ${element.last_name}`;

//     emailElem.innerText = element.email;
//     emailElem.href = ` mailto:${element.email}`;
//     // emailElem.setAttribute("href", `mailto:${element.email}`);

//     card.append(idElem, avatarElem, firstnameElem, last_nameElem, emailElem);
//     cards_container.append(card);
//   });
// };
// -------------------------------------------------
// emailElem.classList.add("email_elem"); // js

// .email_elem {
//     display: block; // css
//   }
// -------------------------------------------------
// диструкторизация
const cards_container = document.querySelector(".cards_container");

fetch("https://reqres.in/api/users/") // отпрваляем запрос по адрессу
  .then((resp) => resp.json()) // получаем ответ, преобразовываем в json
  .then((json) => render(json.data)); // получаем json, что-то делаем с json

const render = (json_data) => {
  json_data.forEach(({ id, avatar, first_name, last_name, email }) => {
    const card = document.createElement("div");
    const idElem = document.createElement("p");
    const avatarElem = document.createElement("img");
    const firstnameElem = document.createElement("p");
    const last_nameElem = document.createElement("p");
    const emailElem = document.createElement("a");

    card.classList = "card";

    idElem.innerText = `id: ${id}`;

    avatarElem.src = avatar;
    avatarElem.alt = avatar;

    firstnameElem.innerText = `${first_name} ${last_name}`;

    emailElem.innerText = email;
    emailElem.href = ` mailto:${email}`;

    card.append(idElem, avatarElem, firstnameElem, last_nameElem, emailElem);
    cards_container.append(card);
  });
};
