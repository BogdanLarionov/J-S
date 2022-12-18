// forEach  - переберает элементы массива и выволняет с ними callback функцию

// map - переберает элементы массива и выволняет с ними callback функцию то, что callback функция возврощает попадает в новый массив

// filter - переберает элементы массива и выволняет с ними callback функцию те элементы, в котором функция вернула true остается в итоговом массиве, а иные отбрасываются

// find - возвращает первое значение в массиве, которое при вызове callback возвращает true

// reduce - получает callback функцию, которая получает результат предыдущего вызова callback и слудующий элемент из массива
// -------------------------------------------

// Задача 1
// вывести эти числа в консоль (по одному)

const arr = [12, 4, 32, 45, 6, 43, 23];
arr.forEach((element) => {
  console.log(element); // 12, 4, 32, 45, 6, 43, 23
});
// -------------------------------------------

// Задача 2
// вывести в консоль только положительные числа

const arr2 = [12, 4, 32, 45, 6, 43, 23];
arr2.forEach((element) => {
  if (element % 2 === 0) console.log(`ansver: ${element}.`); // ansver: 12, ansver: 4, ansver: 32,  ansver: 6;
});

// метод 2
const arr3 = [12, 4, 32, 45, 6, 43, 23];
const result = arr3.filter(function (elem) {
  return elem % 2 === 0;
});
console.log(result); // [ 12, 4, 32, 6 ]

// метод 3
const arr4 = [12, 4, 32, 45, 6, 43, 23];
const result2 = arr4.filter((elems) => {
  return elems % 2 === 0;
});
console.log(result2); // [ 12, 4, 32, 6 ]

// метод 4

const arr5 = [12, 4, 32, 45, 6, 43, 23];
arr5.filter((elem) => elem % 2 === 0).forEach((elem) => console.log(elem)); // 12, 4, 32, 6
// -------------------------------------------

// Задача 3
// написать программу, которая формирует новый массив из квадратов чисел массива arr
const arr6 = [12, 4, 32, 45, 6, 43, 23];
console.log(arr6.map((elem) => elem ** 2));

// [
//   144, 16, 1024,
//  2025, 36, 1849,
//   529
// ]

// -------------------------------------------

// Задача 4
// написать программу, которая формирует новый массив из квадратов только четных чисел массива arr (нечетные числа мы отбрасываем)

const arr7 = [12, 4, 32, 45, 6, 43, 23];
console.log(arr7.filter((elem) => elem % 2 === 0).map((elem) => elem ** 2)); // [ 144, 16, 1024, 36 ]

// метод 2

const arr8 = [12, 4, 32, 45, 6, 43, 23];
const result_3 = arr8.filter((elem) => elem % 2 === 0).map((elem) => elem ** 2);
console.log(result_3); // [ 144, 16, 1024, 36 ]

// -------------------------------------------

// Задача 5
// написать программу, которая формирует из массива со строками массив с их длинами

const arr9 = ["велосипед", "самокат", "ролики", "лыжи"];
// [9, 7, 6, 4];

console.log(arr9.map((elem) => elem.length)); // [ 9, 7, 6, 4 ]

console.log(arr9[0].length); // 9
console.log(arr9[1].length); // 7
console.log(arr9[2].length); // 6
console.log(arr9[3].length); // 4
// -------------------------------------------

// Задача 6
// написать программу, которая формирует из массива со строками массив с объектами каждый объект состоит из свойства word (само слово) и length (длина слова)

// [
//   {
//     word: "велосипед",
//     length: 9,
//   },

//   {
//     word: "самокат",
//     length: 7,
//   },
//      ...
// ];

const arr10 = ["велосипед", "самокат", "ролики", "лыжи"];

console.log(
  arr10.map((elem) => {
    return {
      word: elem,
      length: elem.length,
    };
  })
);

// метод 2

const arr11 = ["велосипед", "самокат", "ролики", "лыжи"];

console.log(
  arr11.map((elem) => ({
    word: elem,
    length: elem.length,
  }))
);

// метод 3

const arr12 = ["велосипед", "самокат", "ролики", "лыжи"];
const result_4 = arr12.map((elem) => ({
  word: elem,
  length: elem.length,
}));
console.log(result_4);

// Ответ:
// [
//   { word: 'велосипед', length: 9 },
//   { word: 'самокат', length: 7 },
//   { word: 'ролики', length: 6 },
//   { word: 'лыжи', length: 4 }
// ]
// -------------------------------------------

// Задача 7
//  Необходимо сформировать, массив из названий (word)

const arr13 = [
  { word: "велосипед", length: 9 },
  { word: "самокат", length: 7 },
  { word: "ролики", length: 6 },
  { word: "лыжи", length: 4 },
];

console.log(arr13.map((elem) => elem.word)); // [ 'велосипед', 'самокат', 'ролики', 'лыжи' ]
console.log(arr13.map((elem) => `Слово: ${elem.word}`)); // [ 'Слово: велосипед', 'Слово: самокат', 'Слово: ролики', 'Слово: лыжи' ]
console.log(arr13.map((elem) => elem.length)); // [ 9, 7, 6, 4 ]
// -------------------------------------------

// Задача 8
// откинуть последнее значение length
const arr14 = [
  { id: 1, word: "велосипед", length: 9 },
  { id: 2, word: "самокат", length: 7 },
  { id: 3, word: "ролики", length: 6 },
  { id: 4, word: "лыжи", length: 4 },
];

console.log(
  arr14.map((elem) => ({
    id: elem.id,
    word: elem.word,
  }))
);

// метод 2

console.log(
  arr14.map((elem) => {
    const { id, word } = elem;
    return {
      id: id,
      word: word,
    };
  })
);

// метод 3

console.log(
  arr14.map((elem) => {
    const { id, word } = elem;
    return {
      id,
      word,
    };
  })
);

// метод 4
console.log(
  arr14.map(({ id, word }) => {
    return {
      id,
      word,
    };
  })
);

// метод 5

console.log(arr14.map(({ id, word }) => ({ id, word })));

// Ответ:
// [
//   { id: 1, word: 'велосипед' },
//   { id: 2, word: 'самокат' },
//   { id: 3, word: 'ролики' },
//   { id: 4, word: 'лыжи' }
// ]

// -------------------------------------------
// Диструктивное присвоение
const a = {
  val_1: 1,
  val_2: 2, // --- Длинный способ
  val_3: 3,
};

const { val_1, val_2, val_3 } = a; //  --- Короткий способ, Диструктивное присвоение!

console.log(a.val_1);
// -------------------------------------------

let a = 15;
console.log(a); // 15

let b = 17;
console.log(b); // 17

const c = {
  a: a,
  b: b,
};
console.log(c); // { a: 15, b: 17 }

const c = { a, b };
console.log(c); // { a: 15, b: 17 }
// -------------------------------------------
