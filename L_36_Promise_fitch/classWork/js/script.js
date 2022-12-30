// https://codebeautify.org/jsonviewer

// tech - запрос
fetch("https://jsonplaceholder.typicode.com/users") // Отправляем запрос, вытягиваем данные с сервера
  .then((response) => console.log(response));

// Oтвет:
// получили ответ
// c какого адреса мы получили ответ
// Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …}
// ----------------------------------------------------------------------------------------------------------------------------------------
// преобразовали заврос
fetch("https://jsonplaceholder.typicode.com/users") // // Отправляем запрос, вытягиваем данные с сервера
  .then((response) => console.log(response.json())) // получил ответ, преобразовали в json
  .then((json_data) => console.log(json_data)); // получили json, вывели данные в консоль (получили массив с объектами)
// ----------------------------------------------------------------------------------------------------------------------------------------
// получили json
// response.json()
fetch("https://jsonplaceholder.typicode.com/users") // // Отправляем запрос, вытягиваем данные с сервера
  .then((response) => response.json()) // получил ответ, преобразовали в json
  .then((json_data) => console.log(json_data)); // получили json, вывели данные в консоль (получили массив с объектами)

// ----------------------------------------------------------------------------------------------------------------------------------------
// response.text()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => console.log(response.text())) // получил ответ, преобразовали в json
  .then((text_data) => console.log(text_data)); // получили json, вывели данные в консоль (получили массив с объектами)
// ----------------------------------------------------------------------------------------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json()) // преобразовали в json
  .then((data_json) => console.log(data_json)); // получили объект

fetch("https://reqres.in/api/users?page=1")
  .then((response) => response.json()) // преобразовали в json
  .then((data_json) => console.log(data_json));
// .then((data_json) => console.log(data_json.data)) // получили массив с обьектами
// .then((data_json) => console.log(data_json.page)); // вывели из объекта по ключу
// .then((data_json) => console.log(data_json.per_page)); // вывели из объекта по ключу
// .then((data_json) => console.log(data_json, data_json.data, data_json.total)); // выводит несколько ключей

// .then((data_json) => {
//   console.log(data_json),
//     console.log(data_json.data),
//     console.log(data_json.total);
// }); // выводит несколько ключей

// .then((data_json) => console.log(data_json.data[1])); // вывели объект
// .then((data_json) => console.log(data_json.data[1].email)); // вывели Email

// ----------------------------------------------------------------------------------------------------------------------------------------

// стучимся в объект
const cardContiner = document.querySelector(".cards_container");

fetch("https://jsonplaceholder.typicode.com/users/1") // подставить другие данные, вместо /1 - /7
  .then((resp) => resp.json())
  .then((json) => render(json)); // json в том случае это переменная

const render = (json) => {
  //json  передали аргумент
  const card = document.createElement("div");
  const nameElem = document.createElement("p");
  const usernameElem = document.createElement("p");
  const phoneElem = document.createElement("p");

  card.append(nameElem, usernameElem, phoneElem);
  cardContiner.append(card);

  nameElem.innerText = `${json.name}`;
  usernameElem.innerText = `${json.username}`;
  phoneElem.innerText = `${json.phone}`;
};
// // ----------------------------------------------------------------------------------------------------------------------------------------

// // стучимся в массив
const cardContiner_2 = document.querySelector(".cards_container_2");

fetch("https://jsonplaceholder.typicode.com/users/")
  .then((resp) => resp.json())
  .then((json) => render_2(json)); // json в том случае это переменная

const render_2 = (json) => {
  const card = document.createElement("div");
  const nameElem = document.createElement("p");
  const usernameElem = document.createElement("p");
  const phoneElem = document.createElement("p");

  card.append(nameElem, usernameElem, phoneElem);
  cardContiner_2.append(card);

  nameElem.innerText = `Name: ${json[0].name}`;
  usernameElem.innerText = `Username: ${json[0].username}`;
  phoneElem.innerText = `Phone: ${json[0].phone}`;
};
