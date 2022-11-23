// 1.
// const root = document.querySelector("#root");
// console.log(root);

// const div_elem = document.createElement("div");
// div_elem.innerText = "Hello";
// console.log(div_elem);
// root.append(div_elem);

// 2.
// const root = document.querySelector("#root");
// console.log(root);

// const div_elem = document.createElement("div");
// const img_elem = document.createElement("img");
// const text_elem = document.createElement("p");
// // --------
// // img_elem.setAttribute("src", "link...");
// // img_elem.src = "link";
// // -----------
// img_elem.src =
//   "https://upload.wikimedia.org/wikipedia/commons/e/ea/Alexandr_Ivanov_001.jpg";
// text_elem.innerText = "Описание пейхажа";
// div_elem.append(img_elem, text_elem);

// root.append(div_elem); // добавили
// div_elem.classList.add("card"); // добавили класс

// img_elem.style.width = "300px";

// Задача
// добавить div и 4 параграфа внутри него какого-либо текстом созданный div должен быть помещен в #root

// const root = document.querySelector("#root");
// const div = document.createElement("div");
// const p_1 = document.createElement("p");
// const p_2 = document.createElement("p");
// const p_3 = document.createElement("p");
// const p_4 = document.createElement("p");

// p_1.innerText = "Text_1";
// p_2.innerText = "Text_2";
// p_3.innerText = "Text_3";
// p_4.innerText = "Text_4";

// div.append(p_1, p_2, p_3, p_4);

// root.append(div);

// Оптимальное решение

// const div = document.createElement("div");
// const texts = ["Текст 1", "Текст 2", "Текст 3", "Текст 4"];
// texts.forEach((texts) => {
//   const p_elem = document.createElement("p");
//   p_elem.innerHTML = texts;
//   div.append(p_elem);
// });
// root.append(div);

// еще метод

const div = document.createElement("div");
const texts = ["Текст 1", "Текст 2", "Текст 3", "Текст 4"];
const p_elem = texts.map((texts) => {
  const p_elem = document.createElement("p");
  p_elem.innerHTML = texts;
  return p_elem;
});
div.append(...p_elem); // спред оператор
root.append(div);
