//ФУНКЦИИ

//Правила наименования функций
//1. использовать настоящие английские слова
//2. использовать snake_case или cama LCase
//3. первое слово глагол (get, show, sum, divide и т.д.

//Функция - это всегда какое-то действие

// ОБЪЯВЛЕНИЕ ФУНКЦИИ (Function declaration)

function name(params) {
  // тело функции
}

name();
// ---------
function getSum() {
  // тело функции
  return 3 + 4;
}

console.log(getSum()); // 7
// ---------

function getSum() {
  let a = 3 + 4;
  return a;
  // console.log(a);  - kak return
}

console.log(getSum()); // 7
// ---------
function getSum(num1, num2) {
  // argument - num1, num2
  let a = num1 + num2;
  return a;
}

console.log(getSum(2, 5)); // 7
console.log(getSum(4, 5)); // 9
console.log(getSum(2, 7)); // 9

// ---------
function getSum(num1, num2) {
  // argument - num1, num2
  return num1 + num2;
}

console.log(getSum(3, 4)); // 7
// ---------

function getGreeting(firstName) {
  return `Hello, ${firstName}`;
}
console.log(getGreeting("Bogdan")); //  Hello, Bogdan
console.log(getGreeting("Alona")); //  Hello, Alona
console.log(getGreeting("Xenia")); //  Hello, Xenia
// ---------

function getNum(num1, num2) {
  return num1 + num2;
}
console.log(getNum(1)); // NaN - не передали значение во второй аргкент
// ---------

function getNum(num1, num2 = 5) {
  // положили по умолчанию в аргументы
  return num1 + num2;
}
console.log(getNum(1)); // 6
// ---------

function getNum(num1 = 4, num2 = 5) {
  // положили по умолчанию в аргументы
  return num1 + num2;
}
console.log(getNum()); // 9
// ---------

/* Напишите функцию, принимающую 3 аргумента с числовым значением и возвращающую результат умножения
чисел друг на друга. Значение последнего аргумента по умолчанию ДОЛЖНО быть
равно 1. 
Выведите в консоль результат вызова функции.
*/

function getMultiplication(num1, num2, num3 = 1) {
  return num1 * num2 * num3;
}

console.log(getMultiplication(5, 6)); // 60

// ---------
/* Напишите функцию, принимающую 2 аргумента firstname и age 
 и возврощающую сообщение в формате "Hello, Firstname. 
 Your age is AGE" По умолчанию указать значение
'name' для firsname  и 'age' для age */

function getPerson(firstname = "Bogdan", age = 32) {
  return `Hello, ${firstname}. Your age is ${age}`;
}
console.log(getPerson());
console.log(getPerson("Alona", 33));
console.log(getPerson("Xenia", 8));
console.log(getPerson(undefined, 80)); // undefined подставит по умолчанию имя задонное в firstname = "Bogdan"
// ---------
/* Напишите функцию, которая принимается в себя 2 аргумента и 
возврощает результат деления большого числа на меньшее. */
// 1.
function dividedNums(num1, num2) {
  if (num1 > num2) {
    return num1 / num2;
  } else {
    return num2 / num1;
  }
}
console.log(dividedNums(1, 4)); // 4
console.log(dividedNums(4, 2)); // 2

// 2.

function dividedNums(num1, num2) {
  return Math.max(num1, num2) / Math.min(num1, num2);
}
console.log(dividedNums(1, 4)); // 4
console.log(dividedNums(4, 2)); // 2

// ФУНКЦИИ (Function declaration)

function greeting_declaration(name, lastname) {
  return `Hello, ${name} ${lastname}!`;
}
console.log(greeting_declaration("Bogdan", "Larionov"));

// ---------
//NaN - not a number
// 5 + undefined = NaN
// 5 + '5' = 55
// 5 + true = NaN
// ---------

//ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ

let greeting = function getHello(name, lastname) {
  return `Hello ${name} ${lastname}!`;
};
console.log(greeting("allona", "b"));

//СТРЕЛОЧНЫЕ ФУНКЦИИ (Arrow functions)

let greeting_arrow = () => {
  return;
};
// ---------

let greeting_arrow = (name, lastname) => {
  return `Hello, ${name} ${lastname}!`;
};

console.log(greeting_arrow("Ivan", "Dron")); // Hello, Ivan Dron!

// ----------------------------------------------------------
// ФУНКЦИИ (Function declaration)
console.log(greeting_declaration("Bogdan", "Larionov")); // можно вызывать до обьявления функции

function greeting_declaration(name, lastname) {
  return `Hello, ${name} ${lastname}!`;
}
console.log(greeting_declaration("Bogdan", "Larionov")); // можно вызывать и после обьявления функции
//ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
// ----------------------------------------------------------
let greeting = function getHello(name, lastname) {
  return `Hello ${name} ${lastname}!`;
};
console.log(greeting("allona", "b"));
// ----------------------------------------------------------
//СТРЕЛОЧНЫЕ ФУНКЦИИ (Arrow functions)
let greeting_arrow = (name, lastname) => {
  return `Hello, ${name} ${lastname}!`;
};

let greeting_arrow = (lastname) => `Hello,  ${lastname}!`; // если аргумкнт 1 то модно писать без скобок
console.log(greeting_arrow("larionov"));

// ----------------------------------------------------------
