// console.log(Date.now());

// const start_dttm = Date.now();
// while (true) {
//   if (Date.now() - 5000 > start_dttm) {
//     break;
//   }
// } // повесили паузу на 5 секунд
// -------------------------------------------------------------------------------------------
//функция fetch - ассенхронный запрос
// resolve - ok
// reject - not ok

// fetch("https://reqres.in/api/users/1") // передали вдрес по которому делаем запрос
//   .then(
//     (respons) => console.log(respons),
//     (error) => console.log(error) // если будет ошибка, выведет error
//   )
//   .then();
// -------------------------------------------------------------------------------------------

// fetch("https://reqres.in/api/users/1") // передали вдрес по которому делаем запрос
//   .then(
//     (respons) => respons.json(),
//     (error) => console.log(error) // если будет ошибка, выведет error
//   )
//   .then(
//     (respons) => console.log(respons),
//     (error) => console.log(error)
//   );

// -------------------------------------------------------------------------------------------

// .catch()

// fetch("https://reqres.in/") // передали вдрес по которому делаем запрос
//   .then(
//     (respons) => respons.json(),
//     (error) => console.log(error) // если будет ошибка, выведет error
//   )
//   .then((respons) => console.log(respons))
//   .catch((error) => console.log(error));

// SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
// -------------------------------------------------------------------------------------------
// Задача 1

// Написать функцию, котороя получает в качестве аргумента объект с данными пользователя
// и возвращает div c картинкой, именем и почтой пользователя

// const rootElem = document.querySelector("#root");

// const user = {
//   data: {
//     avatar: "https://reqres.in/img/faces/1-image.jpg",
//     email: "george.bluth@reqres.ins",
//     first_name: "George",
//   },
// };

// function addUser(user) {
//   const container = document.createElement("div");

//   const img = document.createElement("img");
//   img.src = user.data.avatar; // вытягиваем фото

//   const a = document.createElement("a");
//   a.innerText = user.data.email;
//   a.href = `mailto ${user.data.email}`;

//   const p = document.createElement("p");
//   //   p.innerText = `${user.data.first_name}`;
//   p.innerText = user.data.first_name;

//   container.append(img, a, p);
//   rootElem.append(container);
// }

// fetch("https://reqres.in/api/users/1") // передали вдрес по которому делаем запрос
//   .then(
//     (respons) => respons.json(),
//     (error) => console.log(error) // если будет ошибка, выведет error
//   )
//   .then(
//     (respons) => addUser(respons),
//     (error) => console.log(error)
//   );
// ------------------------------------------------------

const rootElem = document.querySelector("#root");

const user = {
  data: {
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "george.bluth@reqres.ins",
    first_name: "George",
  },
};

function addUser(user) {
  const container = document.createElement("div");

  const img = document.createElement("img");
  img.src = user.data.avatar; // вытягиваем фото

  const a = document.createElement("a");
  a.innerText = user.data.email;
  a.href = `mailto ${user.data.email}`;

  const p = document.createElement("p");
  //   p.innerText = `${user.data.first_name}`;
  p.innerText = user.data.first_name;

  container.append(img, a, p);
  rootElem.append(container);
}

function getUser(user_id) {
  fetch(`https://reqres.in/api/users/${user_id}`) // передали вдрес по которому делаем запрос
    .then(
      (respons) => respons.json(),
      (error) => console.log(error) // если будет ошибка, выведет error
    )
    .then(
      (respons) => addUser(respons),
      (error) => console.log(error)
    );
}

// getUser(1)
// getUser(2) вызов через консоль
// getUser(3)
