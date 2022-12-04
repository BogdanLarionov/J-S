// Создайте форму сбора данных работников с пятью полями: Имя, Фамилия, Email, Ссылка на фото, Прогресс. Поля ввода должны включать "текст-подсказку".

// Email должен быть кликабельным.
// Фото должно отображаться.

// Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.

// После отправки необходимо очистить инпуты.

const formWorkers = document.querySelector(".form_workers");
const workersCards = document.querySelector(".workers_cards");

formWorkers.addEventListener("submit", (event) => {
  event.preventDefault();
  const cardElem = document.createElement("div");
  const nameElem = document.createElement("p");
  const lastnameElem = document.createElement("p");
  const emailElem = document.createElement("p");
  const photoElem = document.createElement("img");
  const progressElem = document.createElement("p");

  const { name, lastname, email, photo, progress } = event.target;

  nameElem.innerText = `name: ${event.target.name.value}`;
  lastnameElem.innerText = `lastname: ${event.target.lastname.value}`;

  emailElem.innerText = `email: ${event.target.email.value}`;

  photoElem.setAttribute("src", photo.value);
  photoElem.setAttribute("alt", "photo:");

  progressElem.innerText = `progress: ${event.target.progress.value} %`;

  cardElem.classList.add("card");
  photoElem.classList.add("photo");

  formWorkers.append(workersCards);
  workersCards.append(cardElem);
  cardElem.append(nameElem, lastnameElem, emailElem, photoElem, progressElem);

  name.value = "";
  lastname.value = "";
  email.value = "";
  photo.value = "";
  progress.value = "";
});
