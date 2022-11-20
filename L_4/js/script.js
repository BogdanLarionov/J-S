// alert("Hello"); // Hello
// // ---------------
// let firstname = prompt("What is your name?");
// console.log(firstname);

// // ---------------

// const firstName = prompt("What is your name?");
// const lastName = prompt("What is your last name?");

// console.log(`Hello, ${firstName} ${lastName}`);
// // ---------------
// const firstName = prompt("What is your name?");
// const lastName = prompt("What is your last name?");
// const age = prompt("What is you age?");

// if(age < 18) {
//     console.log(`Hi, ${firstName} ${lastName}. Your age is ${age}`);
// } else {
//     console.log(`Hello, ${firstName} ${lastName}`);

// }
// // ---------------
// const firstName = prompt("What is your name?");
// const lastName = prompt("What is your last name?");
// const age = prompt("What is you age?");

// if(age < 18) {
//     console.log(`Hi, ${firstName} ${lastName}. Your age is ${age}.`);
// } else if (age > 18){
//     console.log(`Hello, ${firstName} ${lastName}.`);

// } else {
//     console.log(`Dear, ${firstName} ${lastName}. Your age is ${age}.`);
// }
// ---------------

/*  Сгенерируйте случайное число от 0 до 1. Округлите его до одного знака после точки,
тип выводимых данных должен быть number.
 Напишите условный оператор, Если случаное число больше 0.5, TO выводить в консоль
 сообщение "Победа". Если случаное число меньше 0.5, TO выводить в консоль сообщение
"Поражение", Если случаное число равно 0.5, TO выводить в консоль сообщение "Ничья". */

// Math, random():
// Math объект
// random( - метод
// let text = 'Nelli':
// text. length: Length - свойство

const random = +Math.random().toFixed(1);
if (random > 0.5) {
  console.log(`Победа: ${random}`);
} else if (random < 0.5) {
  console.log(`Поражение: ${random}`);
} else {
  console.log(`Ничья: ${random}`);
}
