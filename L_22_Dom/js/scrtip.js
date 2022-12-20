// 1.
// const root = document.querySelector("#root");
// console.log(root);
// const div_elem = document.createElement("div");
// div_elem.innerText = "Hello";
// console.log(div_elem);
// root.append(div_elem);
// --------------

// меняет цвет у боди
const body = document.querySelector("body");
body.style.backgroundColor = "green";

// const div_text = document.createElement("div_text");

// div_text.innerText = "Hello";
// div_text.style.color = "yellow";

// document.body.append(div_text);

// --------------

const div = document.querySelector("div");
const img = document.querySelector("img");

div.innerText = "hell!!!o";
div.style.color = "blue";
div.style.fontSize = "100px";
div.style.margin = "100px";

img.src =
  "file:///Users/bogdanlarionov/Desktop/a2120549-6311-458c-b273-052916e0d411.jpeg";

img.style.height = "600px";
img.style.width = "450px";
img.style.border = "2px solid black";
img.style.marginLeft = "300px";

console.log(div);
document.body.append(div);
div.append(img);

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

// const div = document.createElement("div");
// const texts = ["Текст 1", "Текст 2", "Текст 3", "Текст 4"];
// const p_elem = texts.map((texts) => {
//   const p_elem = document.createElement("p");
//   p_elem.innerHTML = texts;
//   return p_elem;
// });
// div.append(...p_elem); // спред оператор
// root.append(div);
