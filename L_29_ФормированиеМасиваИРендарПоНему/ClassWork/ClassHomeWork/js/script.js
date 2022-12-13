// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// HomeWork
// Создайте форму сбора данных работников с пятью полями: Имя, Фамилия, Email, Ссылка на фото, Прогресс. Поля ввода должны включать "текст-подсказку".
// Email должен быть кликабельным.
// Фото должно отображаться.
// Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.
// После отправки необходимо очистить инпуты.
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Method 1

// const form = document.querySelector(".form");
// const cardContainer = document.querySelector(".cards_container");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const cardElem = document.createElement("div");
//   const nameElem = document.createElement("p");
//   const emailElem = document.createElement("a");
//   //   const emailTextElem = document.createElement("p");
//   const emailTextElem = document.createElement("span");
//   const photoElem = document.createElement("img");
//   const progressContainer = document.createElement("div");
//   const progressLine = document.createElement("div");
//   const progressValue = document.createElement("p");

//   const { firstname, lastname, email, photo, progress } = event.target;

//   nameElem.innerText = `Name ${firstname.value} ${lastname.value}`;

//   emailElem.innerText = email.value;
//   //   emailElem.innerText = `mailto:${email.value}`;
//   //   emailElem.innerText = `Email:${email.value}`; просто слово мыло

//   emailElem.href = `mailto:${email.value}`;
//   //   emailElem.href = "mailto:" + email.value;
//   // email.setAttrebu

//   emailTextElem.innerText = "Email: ";
//   //   emailTextElem.style.display = "inline";

//   photoElem.src = photo.value;
//   photo.alt = "photo";

//   cardElem.classList.add("card");

//   cardElem.append(
//     nameElem,
//     emailTextElem,
//     emailElem,
//     photoElem,
//     progressContainer,
//     progressLine,
//     progressValue
//   );

//   cardContainer.append(cardElem);
// });

// --------------------------------------------------------------------

// Method 2

// const form = document.querySelector(".form");
// const cardContainer = document.querySelector(".cards_container");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const cardElem = document.createElement("div");
//   const nameElem = document.createElement("p");
//   const emailContainer = document.createElement("div");
//   const emailElem = document.createElement("a");
//   //   const emailTextElem = document.createElement("p");
//   const emailTextElem = document.createElement("span");
//   const photoElem = document.createElement("img");
//   const progressContainer = document.createElement("div");
//   const progressLine = document.createElement("div");
//   const progressValue = document.createElement("p");

//   const { firstname, lastname, email, photo, progress } = event.target;

//   nameElem.innerText = `Name ${firstname.value} ${lastname.value}`;

//   emailElem.innerText = email.value;
//   //   emailElem.innerText = `mailto:${email.value}`;
//   //   emailElem.innerText = `Email:${email.value}`; просто слово мыло

//   emailElem.href = `mailto:${email.value}`;
//   //   emailElem.href = "mailto:" + email.value;
//   //   email.setAttribute("href", `mailto: ${email.value}`);

//   emailTextElem.innerText = "Email: ";
//   //   emailTextElem.style.display = "inline";

//   photoElem.src = photo.value;
//   photo.alt = "photo";
//   photoElem.classList.add("img");
//   emailContainer.append(emailTextElem, emailElem);
//   cardElem.classList.add("card");

//   cardElem.append(
//     nameElem,
//     emailContainer,
//     photoElem,
//     progressContainer,
//     progressLine,
//     progressValue
//   );

//   cardContainer.append(cardElem);

//   firstname.value = "";
//   lastname.value = "";
//   email.value = "";
//   photo.value = "";
//   progress.value = "";
// });

// --------------------------------------------------------------------
