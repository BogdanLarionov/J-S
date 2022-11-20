// Задачи
// Дан массив с числами.

let arr = [1, -6, 4, 0, 9, -5, 16];

// Создайте новый массив, состоящий только из отрицательных чисел.

let arrayNegative = [1, -6, 4, 0, 9, -5, 16];
let newArr = arrayNegative.filter((el) => el < 0);
console.log(newArr); // [ -6, -5 ]

// Создайте новый массив, состоящий только из четных чисел.

let arra = [1, -6, 4, 0, 9, -5, 16];
const new_arra = arra.filter((element) => element % 2 === 0 && element !== 0);
console.log(new_arra); // [ -6, 4, 16 ]

// Написать программу, высчитывающую количество отрицательных чисел в этом массиве.

let arrNegative = [1, -6, 4, 0, 9, -5, 16];
let newArr = arrNegative.filter((el) => el < 0);
// let arrayNew = arrNegative.length;
console.log(newArr.length); // 2
// ---------------------------------------------------------------------------------------------------
// Задача 2.
// Дан массив с числами.
// let arr2 = [1, -6, 4, 0, 9, -5, 16];
// Оставьть в нем только положительные числа. Затем извлеките квадратный корень из этих чисел.

let arr2 = [1, -6, 4, 0, 9, -5, 16];
let new_arr = arr2.filter((elem) => elem > 0).map((elem) => Math.sqrt(elem));
console.log(new_arr); // [ 1, 2, 3, 4 ]
// ---------------------------------------------------------------------------------------------------
// Задача 3.
// Дан массив из разных типов данных.
// let arr = [8, 'hello', true, false, 'buy', 122, undefined, 15]
// Необходимо сформировать массив из чисел (если значение не число, то подставить -1)
// 1.
let arr = [8, "hello", true, false, "buy", 122, undefined, 15];
const arrNumber = arr.map((elem) => {
  if (typeof elem === "number") {
    return elem;
  } else {
    return -1;
  }
});
console.log(arrNumber);
// [
//     8,  -1, -1, -1,
//    -1, 122, -1, 15
//  ]

// 2.
let array2 = [8, "hello", true, false, "buy", 122, undefined, 15];
let newarray = array2.map((elem) =>
  typeof elem !== "number" ? (elem = -1) : (elem = elem)
);

console.log(newarray);
// [
//     8,  -1, -1, -1,
//    -1, 122, -1, 15
//  ]

// 3.
// Number.isInteger() -- Method
let array4 = [8, "hello", true, false, "buy", 122, undefined, 15];
let arr_numb = array4.map((elem) => (Number.isInteger(elem) ? elem : -1));
console.log(arr_numb);
// [
//     8,  -1, -1, -1,
//    -1, 122, -1, 15
//  ]
// ---------------------------------------------------------------------------------------------------

// Задача 4.
// Дан массив из массивов. Вложенные массивы хранят в себе данные о пользователе (имя, фамилия и активность).
// Напишите filter, который оставляет только активных пользователей (true).
// Добавьте map, который в отфильтрованном списке  преобразует вложенные массивы в строки.
// Результат:  ["Максим", "Грибов", "Антон", "Куликов", "Ольга", "Петрова"]
// 1.
//
//
let arr = [
  ["Максим", "Грибов", true],
  ["Антон", "Куликов", true],
  ["Светлана", "Иванова", false],
  ["Ольга", "Петрова", true],
  ["Сидор", "Сидоров", false],
];

let new_arr = arr
  .filter((elem) => elem[2] === true)
  .map((elem) => `${elem[0]} ${elem[1]}`);
console.log(new_arr);
// [ 'Максим Грибов', 'Антон Куликов', 'Ольга Петрова' ]

// 2.
let arr21 = [
  ["Максим", "Грибов", true],
  ["Антон", "Куликов", true],
  ["Светлана", "Иванова", false],
  ["Ольга", "Петрова", true],
  ["Сидор", "Сидоров", false],
];
let trueArray = arr21.filter((el) => {
  for (let i = 0; i < el.length; i++) {
    if (el[i] === true) {
      return true;
    }
  }
});
console.log(trueArray);
// [
//   ["Максим", "Грибов", true],
//   ["Антон", "Куликов", true],
//   ["Ольга", "Петрова", true],
// ];
