// Создайте функци, которая принимает в качестве aргумента строку и выводит каждый символ этой строки в консоль.
//  hello =>
// h
// e
// l
// l
// o

// i < str.length  ===  i < str.length -1

const getLetter = (str) => {
  for (let i = 0; i <= str.length - 1; i++) {
    console.log(str[i]);
  }
};
getLetter("Hello");
// --------------------------------------------------------
// Моссив - Array
let str = "Bogdan";
let array = ["hello", 5, true, false, 23, "buy", str];
console.log(array); // показать сожержание моссива
console.log(array.length); // показать длину моссива
console.log(array.length - 1); // показать последний элемент, его длину
console.log(str); // показать элемент моссива
console.log(str.length); // показать длину моссива
console.log(array[1]); // показать вложение в моссиве
console.log(str[0]); // показать первое значение в моссиве
console.log(array[1].length); // вывести первое вложение моссива
console.log(array[0][0]); // вывести вторую букву у первого эллемента "hello" - h
console.log(str[2]); // показать третие значение в моссиве

// -------------------
// Найти длинуего элемента массива. последн Заранее не известна длина моссива
let str2 = "Hello, MamA";
let array1 = [
  "hello",
  5,
  true,
  false,
  23,
  "buy",
  76,
  true,
  undefined,
  null,
  str2,
];

console.log(array1.length); // считает количество эллементов в моссиве
console.log(array1.length - 1); // индекс последнего эллемента
console.log(array1[array1.length - 1]); // array[10] - str = 'Hello, World'  === console.log(array.length-1); // индекс последнего эллемента
console.log(array1[array1.length - 1].length); // длина str 12
console.log(array1[array1.length - 1][array1.length - 1]); // получили последний элемент в str - l
// -------------------

let str1 = "hello, world!!!!!";
let elements = [
  "hello",
  5,
  true,
  false,
  23,
  "buy",
  76,
  true,
  undefined,
  null,
  str1,
];
console.log(elements[elements.length - 1][elements.length - 1]);

let last_elem = elements[elements.length - 1];
console.log(last_elem[last_elem.length - 1]); //  последняя символ  посдеднего элемента в моссиве
// -------------------

let text = "good morning";
console.log(text[0]); //g
// -------------------

let arr = [1, 2, 3, 4, 5, "hello"];
console.log(arr[0]); // 1
console.log(arr.length - 1); // 5
console.log(arr[arr.length - 1]); // hello
console.log(arr[arr.length - 1]); // 4

// длина массива -1 = индккс последнего элемента
// -------------------

/* Создать функцию, которая принимает в качестве аргументов массив строк, а возвращает 
первый самый длинный элемент массива.
Если входной массив пуст, фунуция возвращает null.
Если есть несколько одинаковых по длине элемент - фунуция возвращает первый из этих
элементов.
Для начала пропишите аргумент функции.arr
Пример: ['one', 'two', 'three'] => 'three' */

// 1.
const get_Long_Str = (array) => {
  let result = ""; //0
  if (array.length === 0) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > result.length) {
      result = array[i];
    }
  }
  return result;
};
console.log(get_Long_Str([])); // null

console.log(get_Long_Str(["one", "two", "three"])); // three

// 2.
const getLongStr = (array) => {
  if (array.length === 0) {
    return null;
  }
  let result = array[0]; //0

  for (let i = 1; i < array.length; i++) {
    if (array[i].length > result.length) {
      result = array[i];
    }
  }
  return result;
};
console.log(getLongStr([])); // null
console.log(getLongStr(["one", "two", "three"])); // three

// 1.result = 'one'
// 2.result = '11111111'
// ----------------------------------------------------
