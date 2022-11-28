// // метод 1

// const data = [
//   {
//     id: 1,
//     name: "Анатолий",
//     email: "anatoliy@gmail.com",
//     avatar: "./media/face.jpeg",
//     // avatar: "../media/face.jpeg",
//   },
//   {
//     id: 2,
//     name: "Максим",
//     email: "maxim@gmail.com",
//     avatar: "./media/face-2.jpeg",
//   },
//   {
//     id: 2,
//     name: "Антон",
//     email: "anton@gmail.com",
//     avatar: "./media/face-3.jpeg",
//   },
//   {
//     id: 4,
//     name: "Олег",
//     email: "oleg@gmail.com",
//     avatar: "./media/face-4.jpeg",
//   },
// ];

// const root = document.querySelector("#root");

// data.forEach((user) => {
//   const card = document.createElement("div");
//   const avatar = document.createElement("img");
//   const name = document.createElement("p");
//   const email = document.createElement("a");

//   // Добавить класс card для элемента card
//   card.classList.add("card");
//   avatar.classList.add("avatar");
//   name.classList.add("name");
//   email.classList.add("email");

//   // Добавить почту (тег а) в котором внутри будет указана почта и в качестве атрибута href
//   //   email.setAttribute("href", "mailto:anatoliy@gmail.com");
//   email.href = ("mailto:", +user.email);

//   name.innerText = user.name;
//   email.innerText = user.email;

//   // Добавить картинку с аватаркой и вставить ее перед именем и email
//   //   avatar.setAttribute("src", "./media/face.jpeg");
//   avatar.src = user.avatar;

//   card.append(avatar, name, email);
//   root.append(card);
// });

// метод 2

const data = [
  {
    id: 1,
    name: "Анатолий",
    email: "anatoliy@gmail.com",
    avatar: "./media/face.jpeg",
    // avatar: "../media/face.jpeg",
  },
  {
    id: 2,
    name: "Максим",
    email: "maxim@gmail.com",
    avatar: "./media/face-2.jpeg",
  },
  {
    id: 2,
    name: "Антон",
    email: "anton@gmail.com",
    avatar: "./media/face-3.jpeg",
  },
  {
    id: 4,
    name: "Олег",
    email: "oleg@gmail.com",
    avatar: "./media/face-4.jpeg",
  },
];

const root = document.querySelector("#root");

function getCard(name, email, avatar) {
  const card = document.createElement("div");
  const avatar_elem = document.createElement("img");
  const name_elem = document.createElement("p");
  const email_elem = document.createElement("a");

  card.classList.add("card");

  avatar_elem.classList.add("avatar");
  avatar_elem.src = avatar;

  name_elem.innerText = name;
  name_elem.classList.add("name");

  email_elem.classList.add("email");
  email_elem.innerText = email;
  email_elem.href = ("mailto:", +email);

  card.append(avatar_elem, name_elem, email_elem);
  return card;
}

data.forEach((user) => {
  const card = getCard(user.name, user.email, user.avatar);
  root.append(card);
});
