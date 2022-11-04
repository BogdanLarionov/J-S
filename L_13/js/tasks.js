// Задан массив
// let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];

// Задачи:
// 1. Добавьте в начало массива число 67, используя метод .unshift().
// 2. Затем добавьте в конец массива число 56.
// Далее решайте задачи с обнавленным массивом.

let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];
// 1.
arr.unshift(67); // [ 67, 137, 5, 84, 299, 777, 500, 1, 8, 17];
// 2.
arr.push(56); // [ 67, 137, 5, 84, 299, 777, 500, 1, 8, 17, 56];
// 3.
console.log(arr.filter((arr) => arr < 100)); // [ 67,  5, 84, 1, 8, 17, 56 ]
// 4.
console.log(arr.filter((arr) => arr % 10 === 7)); // [ 67, 137, 777, 17 ]
let sum = arr.filter((el) => el < 100).reduce((total, el) => total + el);
console.log(sum); // 238
// -------
let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];
let sum2 = arr.reduce((total, el) => {
  if (el < 100) {
    total += el;
  }
  return total;
});
console.log(sum2); // 252
// 3. Сформеруйте массив из чисел меньше 100. Выведите в консоль результат.
let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];
let arr_lass_than_100 = arr.filter((el) => el < 100);
console.log(arr_lass_than_100); // [ 5, 84, 1, 8, 17 ]
// 4. Сформируйте массив, состоящий только из чисел, кончающихся на 7.
// 5. Найти сумму чисел, которые меньше 100.
// 6. Найти сумму чисел, которые заканчиваются на 7.

let sum1 = arr_lass_than_100.reduce(total, (el) => total + el);
console.log(sum1);

console.log(arr);
// -------------------------------------------------------------------------------------------
let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];
let arr1 = arr.unshift(67);
let arr2 = arr.push(56);
let arr3 = arr.filter((arr) => arr < 100);
let arr4 = arr.filter((arr3) => arr3 % 10 === 7);
let arr5 = arr3.reduce((total, elem) => (total += elem));
let arr6 = arr.filter((el) => el % 10 === 7).reduce((total, el) => total + el);

console.log(`arr ${arr}`); // [137, 5, 84, 299, 777, 500, 1, 8, 17];
console.log(`arr1 ${arr1}`); // [67, 137, 5, 84, 299, 777, 500, 1, 8, 17];
console.log(`arr2 ${arr2}`); // [67, 137, 5, 84, 299, 777, 500, 1, 8, 17, 56];
console.log(`arr3 ${arr3}`); // [ 67, 5, 84, 1, 8, 17, 56 ]
console.log(`arr4 ${arr4}`); // [ 67, 137, 777, 17 ]
console.log(`arr5 ${arr5}`); // 238
console.log(`arr6 ${arr6}`); // 998
