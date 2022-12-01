// 1. создать параграф
// 2. записать в него текст
// 3. добавить его в root

const rootElem = document.querySelector("#root");
const p_elem = document.createElement("p");
p_elem.innerText = "Hello World!";
rootElem.append(p_elem);

// создать массив из текста (минимум 3 элемента)
// для каждого элемента создать параграф и записать в него текст
// параграфы необходимо добавить в root элемент

const words = ["Привет", "пока", "велосипел", "самокат", "ку-ку"];

words.forEach((words) => {
  const p_elem = document.createElement("p");
  p_elem.innerText = words;
  rootElem.append(p_elem);
  p_elem.classList.add("card");

  //   // повесить обработчик событея клика на параграыфы при клике на параграф в консоль должно выводиться слово
  //   p_elem.addEventListener("click", () => {
  // по нажатию на порагроф ему должно присваиваться класс active
  //     p_elem.classList.add("active");
  //   });
  // });
  // ----------------------------------------------------------------------------------------------------------------------------------
  //   p_elem.addEventListener("click", (event) => {
  //     // event - callback function
  //     p_elem.classList.add("active");
  //     console.log(event); // экзампляр класса PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  //     console.log(event.target); // target - это элемент с которым произашло событие <p class="card active">Привет</p>
  //   });
  // });
  // ----------------------------------------------------------------------------------------------------------------------------------

  //   p_elem.addEventListener("click", (event) => {
  //     // event - callback function
  //     console.log(event.target === p_elem); // true
  //     event.target.classList.add("active"); // лучше писать так!!!!!!!!!!!!!
  //   });
  // });
  // ----------------------------------------------------------------------------------------------------------------------------------

  p_elem.addEventListener("click", (event) => {
    // event - callback function
    console.log(event); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

    // event.target.classList.add("active"); // лучше писать так!!!!!!!!!!!!!
    // Преобразовать процесс такие образом, что бы по нажвтию на p_elem active добовлялся, если нет и удалялся, если он есть
    event.target.classList.toggle("active"); // toggle  удаляет
  });
});

// document.body.addEventListener("click", (event) => {
//   // event - callback function
//   console.log(event); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// });
// ----------------------------------------------------------------------------------------------------------------------------------

// document.body.addEventListener("click", (event) => {
//   // event - callback function
//   console.log(event.target); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
//   console.log(event.currentTarget); // <p class="card active">пока</p> - на кого щелкнули
// });

// target - это ссылка на обьект с которым произашло событие
// event.target - тоже самое
// https://flatuicolors.com/palette/gb - сайт с цветами
