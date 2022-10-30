//  Методы

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

push(6); // добавляет элемент в конец массива

unshift(0); // добавляет элемент в начала  массива

pop(); // извлекает элемент из конца  массива

shift(); // извлекает элемент из начала  массива

let arr = [1, 2, 3, 4, 5];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
arr.push(6); // добавляет элемент в конец массива
// arr.push('Hello'); // добавляет элемент в конец массива - 'Hello'
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]

// Задача
// 1. Напишите цикл for, который создает массив из чисел от 1 до 10.

let array = [];
for (let i = 1; i <= 10; i++) {
  array.push(i);
}

console.log(array); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// -----------
unshift(0); // добавляет элемент в начала  массива

const arrayUnshift = ["Hello", "world"];
console.log(arrayUnshift); // [ 'Hello', 'world' ]

arrayUnshift.unshift("First");
console.log(arrayUnshift); // [ 'First', 'Hello', 'world' ]

// -----------
pop(); // извлекает элемент из конца  массива

const arrayPop = ["hello", "Buy", "My-my", 6, 42];
console.log(arrayPop); // [ 'hello', 'Buy', 'My-my', 6, 42 ]

arrayPop.pop();
console.log(arrayPop); // [ 'hello', 'Buy', 'My-my', 6 ]

// -----------

shift(); // извлекает элемент из начала  массива

const arrayShift = ["hello", "Buy", "My-my", 6, 42];
console.log(arrayShift); // [ 'hello', 'Buy', 'My-my', 6, 42 ]

arrayShift.shift();
console.log(arrayShift); // [ 'Buy', 'My-my', 6, 42 ]
// -----------------------
const arr2 = [
  "hello",
  2,
  4,
  "",
  true,
  undefined,
  "hello492!",
  "hello492!",
  "hello492!",
];
console.log(arr2[arr2.length - 1][arr2.length - 1]); // !

// -----------------------

const arr3 = ["Hello", "2", "4", true, undefined, "hello462!"];

const result = arr3.slice(-1).join().slice(-1);
console.log(result);
// -----------------------
const arr1 = ["Hello", "2", "4", true, undefined, "hello462!"];

console.log(arr1.slice(-1).join().slice(-1)); // !
