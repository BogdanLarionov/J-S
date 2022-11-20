// Math.abs()
// тернарный оператор желательно использлвать для присвоения какогото значения
// ------------------------------------------------------------------
const lst = [12, 4, 32, 45, 43, 23];
lst.forEach((elem) => console.log(elem)); // 12, 4, 32, 45, 43, 23
// ------------------------------------------------------------------
const lst2 = [12, 4, 32, 45, 43, 23];
lst2.forEach((element, index, lst2) => console.log(element, index, lst2));
// 12 0 [ 12, 4, 32, 45, 43, 23 ] -- по мимо элемента возврозает индекс и массиф
// 4 1 [ 12, 4, 32, 45, 43, 23 ] -- по мимо элемента возврозает индекс и массиф
// 32 2 [ 12, 4, 32, 45, 43, 23 ] -- по мимо элемента возврозает индекс и массиф
// 45 3 [ 12, 4, 32, 45, 43, 23 ] -- по мимо элемента возврозает индекс и массиф
// 43 4 [ 12, 4, 32, 45, 43, 23 ] -- по мимо элемента возврозает индекс и массиф
// 23 5 [ 12, 4, 32, 45, 43, 23 ] -- по мимо элемента возврозает индекс и массиф
// ------------------------------------------------------------------
const lst1 = [12, 4, 32, 45, 43, 23];
function forEach(lst1, callback) {
  for (let index = 0; index < lst1.length; index++) {
    callback(lst1[index], index, lst1);
  }
}
forEach(lst1, (elem) => console.log(elem)); // 12, 4, 32, 45, 43, 23
forEach(lst1, (elem) => console.log(elem ** 2)); // 144, 16, 1024, 2025, 1849, 529
// ------------------------------------------------------------------
// Написать forEach, который выводит только четные числа в консоль
const array = [12, 4, 32, 45, 43, 23];
array.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element); // 12, 4, 32,
  }
});
// ------------------------------------------------------------------
//Написать forEach который выводит в консоль наибольше значения из массива
// 1.
const array2 = [12, 4, 32, 45, 43, 23];
let result = 0;
array2.forEach((element) => {
  if (element >= result) {
    result = element;
  }
});

console.log(result); // 45
// 2.
const arr = [-12, -4, -32, -45, -43, -23];
let result1 = arr[0];
arr.forEach((element) => {
  if (element >= result1) {
    result1 = element;
  }
});

console.log(result1); // -4
// 3.
const arr = [-12, -4, -32, -45, -43, -23];
let result1 = 0;
arr.forEach((element) => {
  if (element <= result1) {
    result1 = element;
  }
});

console.log(result1); // -45
// ------------------------------------------------------------------
// Method .map() - возврозает новый массив
// возвести в кводрат
// 1.
const arra = [12, 4, 32, 45, 43, 23];
const result3 = arra.map((elem) => elem ** 2);
console.log(result3); // [ 144, 16, 1024, 2025, 1849, 529 ]
// 2.
const arra1 = [12, 4, 32, 45, 43, 23];
function handler(elem) {
  return elem ** 2;
}
const result2 = arra1.map(handler);
console.log(result2); // [ 144, 16, 1024, 2025, 1849, 529 ]
// ------------------------------------------------------------------
// 3.
const lst4 = [12, 4, 32, 45, 43, 23];
function map(lst4, callback) {
  const new_array = [];
  for (let index = 0; index < lst4.length; index++) {
    new_array.push(callback(lst4[index]), index, lst4);
  }
  return new_array;
}
console.log(map(lst4, (elem) => elem ** 2));
// [
//  144, 0,[ 12, 4, 32, 45, 43, 23 ],
//  16,1,[ 12, 4, 32, 45, 43, 23 ],
//  1024, 2, [ 12, 4, 32, 45, 43, 23 ],
//  2025, 3, [ 12, 4, 32, 45, 43, 23 ],
//  1849, 4,[ 12, 4, 32, 45, 43, 23 ],
//  529, 5, [ 12, 4, 32, 45, 43, 23 ]
//  ]
// 4.
const arr1 = [12, 4, 32, 45, 43, 23];
function map(arr1, callback) {
  const new_array = [];
  for (let i = 0; i < arr1.length; i++) {
    const new_elem = callback(arr1[i], i, arr1);
    new_array.push(new_elem);
  }
  return new_array;
}
console.log(map(arr1, (elem) => elem ** 2)); // [ 144, 16, 1024, 2025, 1849, 529 ]
// 5.
const arr2 = [12, 4, 32, 45, 43, 23];
const handler = (elem) => elem ** 2;
const result = arr2.map(handler);
console.log(result); // [ 144, 16, 1024, 2025, 1849, 529 ]

// ------------------------------------------------------------------
// setInterval() - вызывает функцию каждую сикунду
setInterval(() => {
  console.log("Hello");
}, 1000);
// ------------------------------------------------------------------
// const array = [-12, 4, -32, 45, 43, -23];
//  Написать метод map, который возвращает массив,
// в котором все отрицательные значения приобразованы в положительные
// array.map(...) // 12, 4, 32, 45, 43, 23];
// 1.
const array = [-12, 4, -32, 45, 43, -23];
const returnMap = array.map((elem) => elem > 0);
console.log(returnMap); // [ false, true, false, true, true, false ]
// ------------------------------------------------------------------
// 2.
const array = [-12, 4, -32, 45, 43, -23];
function func(value) {
  if (value < 0) {
    value *= -1;
    // value = -value;
  }
  return value;
}
console.log(array.map(func)); // [ 12, 4, 32, 45, 43, 23 ]
// ------------------------------------------------------------------
// 3.
const array = [-12, 4, -32, 45, 43, -23];
function func(value) {
  if (value < 0) {
    value *= -1;
    // value = -value;
  }
  return value;
}
const result = array.map(func);
console.log(result); // [ 12, 4, 32, 45, 43, 23 ]
// ------------------------------------------------------------------
// написать функцию, которая получает число и возврощает полодительное число
// func(12) -> 12
// func(-12) -> 12
function func(value) {
  if (value < 0) {
    value *= -1;
    // value = -value;
  }
  return value;
}
console.log(func(-12)); // 12
console.log(func(12)); // 12

//переписать данный процесс с использованием тернарного орератора
const lst = [-12, 4, -32, 45, 43, -23];
const result = lst.map((elem) => (elem < 0 ? -elem : elem));
console.log(result); // [ 12, 4, 32, 45, 43, 23 ]
// ------------------------------------------------------------------

// Написать map, который преобразовывает нечетные числа в четные (прибавляет единицу)
// 1.
const new_array = [-12, 4, -32, 45, 43, -23];
function getEven(value) {
  if (value % 2 !== 0) {
    value += 1;
  }
  return value;
}
const result = new_array.map(getEven);
console.log(result); // [ -12, 4, -32, 46, 44, -22 ]
// 2.
const new_array2 = [-12, 4, -32, 45, 43, -23];
const result = new_array2.map((value) => {
  if (value % 2 !== 0) {
    value += 1;
  }
  return value;
});
console.log(result); // [ -12, 4, -32, 46, 44, -22 ]
// 3.
const new_array3 = [-12, 4, -32, 45, 43, -23];
const result4 = new_array3.map((value) => {
  value % 2 === 0 ? value : (value += 1);

  return value;
});
console.log(result4); // [ -12, 4, -32, 46, 44, -22 ]
// ---------------------------------------------------------------

// 1. написать функцию, которая преобразует нечетные в четные
// 2. вставить функцию в map

const new_array = [-12, 4, -32, 45, 43, -23];
function func(value) {
  if (value % 2 !== 0) {
    value += 1;
  }
  return value;
}
const result = new_array.map(func);
console.log(result); // [ -12, 4, -32, 46, 44, -22 ]
// 2.
const new_array4 = [-12, 4, -32, 45, 43, -23];
const result = new_array4.map((elem) => (elem % 2 === 0 ? elem : elem + 1));
console.log(result); // [ -12, 4, -32, 46, 44, -22 ]
// ---------------------------------------------------------------
// Вернуть новый массив с каждым элементом, умноженным на 2
const new_arraay = [-12, 4, -32, 45, 43, -23];
const nuw_mosiv = new_arraay.map((el) => el * 2);
console.log(nuw_mosiv); // [ -24, 8, -64, 90, 86, -46 ]
// ---------------------------------------------------------------
let a = 12;
console.log(a % 2 === 0 ? a : a + 1); // 12

let a = 13;
console.log(a % 2 === 0 ? a : a + 1); // 14
// ---------------------------------------------------------------

// Method .filter()

const Arra = [-12, 4, -32, 45, 43, -23];
console.log(Arra.filter((elem) => elem > 0)); // [ 4, 45, 43 ]
// ---------------------------------------------------------------
// сформировать моссив, который состоит из слов, не длинее 6 символов ('привет'.lenght - 6)
const wordArray = [
  "велосипед",
  "самокат",
  "ролики",
  "телефон",
  "стол",
  "люстра",
];

const words = wordArray.filter((elem) => elem.length <= 6);
console.log(words); // [ 'ролики', 'стол', 'люстра' ]
// ---------------------------------------------------------------
