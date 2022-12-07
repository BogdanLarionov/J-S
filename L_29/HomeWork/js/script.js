// Создайте форму сбора данных работников с пятью полями: Имя, Фамилия, Email, Ссылка на фото, Прогресс. Поля ввода должны включать "текст-подсказку".

// Email должен быть кликабельным.
// Фото должно отображаться.

// Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.

// После отправки необходимо очистить инпуты.

const workers = document.querySelector(".form_workers");
const card = document.querySelector(".workers_cards");

workers.addEventListener("submit", (event) => {
  event.preventDefault();
  const cardElem = document.createElement("div");
  const nameElem = document.createElement("p");

  const emailElem = document.createElement("a");

  const photolElem = document.createElement("img");

  const progressDiv = document.createElement("div");
  const progressLine = document.createElement("div");
  const progressValue = document.createElement("p");

  const { name, lastname, email, photo, progress } = event.target;

  nameElem.innerText = `name: ${name.value} ${lastname.value}`;

  emailElem.innerText = `email: ${email.value}`;
  emailElem.href = `mailto:${email}`;

  cardElem.classList.add("card_elem");

  photolElem.src = photo.value;
  photolElem.href = "photo";
  photolElem.classList.add("link_img");

  progressDiv.classList.add("progres_div");
  progressLine.classList.add("progress_line");
  progressValue.classList.add("progress_value");

  progressValue.innerText = `${progress.value} %`;

  if (progress.value >= 100) {
    progressLine.style.backgroundColor = "green";
    progressLine.style.width = "100%";
  } else if (progress.value >= 75) {
    progressLine.style.backgroundColor = "yellow";
    progressLine.style.width = "75%";
  } else if (progress.value >= 50) {
    progressLine.style.backgroundColor = "brown";
    progressLine.style.width = "50%";
  } else {
    progressLine.style.backgroundColor = "red";
    progressLine.style.width = "25%";
  }

  workers.append(cardElem);
  cardElem.append(
    nameElem,
    emailElem,
    photolElem,
    progressDiv,
    progressLine,
    progressValue
  );
  progressDiv.append(progressLine, progressValue);

  name.value = "";
  lastname.value = "";
  photo.value = "";
  email.value = "";
  progress.value = "";
});

// const formWorkers = document.querySelector(".form_workers");
// const workersCards = document.querySelector(".workers_cards");

// formWorkers.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const cardElem = document.createElement("div");
//   const nameElem = document.createElement("p");
//   const lastnameElem = document.createElement("p");
//   const emailElem = document.createElement("a");
//   const photoElem = document.createElement("img");
//   const progressCont = document.createElement("div");
//   const progressElem = document.createElement("div");

//   const { name, lastname, email, photo, progress } = event.target;

//   nameElem.innerText = `name: ${event.target.name.value}`;
//   lastnameElem.innerText = `lastname: ${event.target.lastname.value}`;

//   emailElem.innerText = `email: ${event.target.email.value}`;

//   photoElem.setAttribute("src", photo.value);
//   photoElem.setAttribute("alt", "photo:");

//   progressElem.innerText = `progress: ${event.target.progress.value} %`;

//   cardElem.classList.add("card");
//   photoElem.classList.add("photo");

//   progressCont.classList.add("progressCont");
//   progressCont.append(progressElem);

//   formWorkers.append(workersCards);
//   workersCards.append(cardElem);
//   cardElem.append(nameElem, lastnameElem, emailElem, photoElem, progressElem);

//   name.value = "";
//   lastname.value = "";
//   email.value = "";
//   photo.value = "";
//   progress.value = "";
// });
