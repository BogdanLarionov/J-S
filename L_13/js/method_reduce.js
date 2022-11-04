// .reduce() - Служит для того, что мы получили какое-то финальное  значение,
// совершив итерацию по массиву. Возврощает финалтное значение, число.

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects
// ---------------------------------------------------------------------------
// Найти сумму чисел в массиве
// 1.
// цикл For
let numbers1 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers1.length; i++) {
  sum += numbers1[i];
}
console.log(numbers1); // [ 1, 2, 3, 4, 5 ]
console.log(sum); // 15
// 2.
// .reduce()
let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce(
  (total, elem) => {
    return total + elem;
  },
  0 //- Начало итерации
  //   5 - начнет итерацию с 5 до 20
);

// 0
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

console.log(result); // 15
// 3.
let numbers2 = [1, 2, 3, 4, 5];
let result1 = numbers2.reduce((total, elem) => total + elem, 0);
console.log(result1); // 15

// c 0 в initialValue
// 0
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// 4.
let numbers2 = [1, 2, 3, 4, 5];
let result1 = numbers2.reduce((total, elem) => total + elem);
console.log(result1); // 15

// Без 0 в initialValue
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// ---------------------------------------------------------------------------
// Дан массив
// let nums = [3, 6, 7, 1];
// (3 + 6 + 7 + 1) / 4 = 4.25
// Найти среднеарифмитическое всех элементов массива
// 1.
let nums = [3, 6, 7, 1];
let res = nums.reduce((total, elem) => total + elem / 4, 0);
console.log(res); // 4.25
// -----
// 2.
let nums = [3, 6, 7, 1];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i] / 4;
}
console.log(sum); // 4.25
// 3.
let nums = [3, 6, 7, 1];
let res = nums.reduce((total, elem) => total + elem);
console.log(res / nums.length); // 4.25
// 4.
let nums = [3, 6, 7, 1];
let res = nums.reduce((total, elem) => total + elem) / nums.length;
console.log(res); // 4.25
// 5.
let nums = [3, 6, 7, 1];
let res = nums.reduce((total, elem) => total + elem / nums.length, 0);
console.log(res); // 4.25
// ---------------------------------------------------------------------------
