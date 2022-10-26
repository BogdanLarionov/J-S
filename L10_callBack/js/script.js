// Напишите функцию, которая принимает два числовых аргумента a и b (a > b),
// и выводит в консоль число от a до b кратные 3. (Числа деленные на 3 без остатка)
// Пример 10, 3 => 9, 6, 3
// 1.
const getNums = (a, b) => {
  for (let i = a; i >= b; i--) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
};
getNums(10, 1); // 9, 6, 3
// 2.
const getNums2 = (a, b) => {
  for (let i = a; i >= b; i--) {
    if (i % 3 === 0) {
      console.log(a);
      a -= 1;
    } else {
      a -= 1;
    }
  }
};
getNums2(10, 1); // 9, 6, 3
// ------------------------------

// Напишите функцию, котороя  сумирует число от 0 до 100 кратные 3 или 5.
// Выведите сумму в консоль.

const getSum = () => {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      // || - или  && - и
      sum += i; // sum = sum + i
    }
  }
  return sum;
};
console.log(getSum(0, 100)); // 2418

// ------------------------------

//  Напишите функцию, формирующую массив из чисел от 0 до 50 кратных 5.
// => [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// 1.

const getArray = () => {
  let result = [];
  for (let i = 0; i <= 50; i++) {
    if (i % 5 === 0 && i !== 0) {
      result.push(i);
    }
  }
  return result;
};
console.log(getArray()); // // [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]

// 2.
const getArray1 = () => {
  let result = [];
  for (let i = 5; i <= 50; i++) {
    if (i % 5 === 0) {
      result.push(i);
    }
  }
  return result;
};
console.log(getArray1()); // [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
// 3.
let isDivided = (a, b) => {
  let arr = [];
  let index = 0;
  for (let i = a; i <= b; i++) {
    if (i % 5 == 0 && i !== 0) {
      arr[index] = i;
      index++;
    }
  }
  return arr;
};

console.log(isDivided(0, 50)); // [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]

arr[index] = i;
index++;

arr[0] = i;
index = 1;

arr[0] = i;
index = 2;

arr[0] = i;
index = 2;

arr[0] = i;
index = 3;
// ------------------------------
let a = 7 + "7";
console.log(a); // 77

let b = 7 + +"7";
console.log(b); // 17

let c = 7 == "7";
console.log(c); // true

let d = 7 === "7";
console.log(d); // false

const abc = "2" + "2" - "2";
console.log(abc); // 20
// ------------------------------

// Напишите функцию, формирующую массив из чисел от "a" до "b" (b > a) кратных 2.

const getnum3 = (a, b) => {
  let result = [];
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
};
console.log(getnum3(5, 30)); // [ 4,  6,  8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30 ]

// ------------------------------

// Write a function that reverses a string. The input string is as an array of characters s.
// You must do this by mofifying the input array in-place with 0(1) extra memory.
// https://leetcode.com/problems/reverse-string/
// 1.
const reversesString = (arr) => {
  let reverse_arr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse_arr.push(arr[i]);
  }
  return reverse_arr;
};
console.log(reversesString(["h", "e", "l", "l", "o"])); // [ 'o', 'l', 'l', 'e', 'h' ]
// 2.
const reversesString2 = (arr) => arr.reverse();
console.log(reversesString2(["h", "e", "l", "l", "o"])); // [ 'o', 'l', 'l', 'e', 'h' ]
// ------------------------------
let aSort = [1, 40, 53, 3, 6, 15];
console.log(aSort.sort()); // ожидаем 1, 3, 6, 15, 40, 53 => получаем 1, 15, 3, 40, 53, 6 ] sort() сортирует только по первой цывре
