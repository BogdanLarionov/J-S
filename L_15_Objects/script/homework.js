// Задан массив:
// let arr = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0, 33];

// Задачи:
// 1. Добавьте в начало массива число 53. Затем удалите из конца массива последние 2 числа. Далее решайте задачи с обновленным массивом.
// 1.
let arr = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0, 33];
arr.unshift(53);
arr.pop(arr.length - 1, arr.pop(arr.length - 1));
console.log(arr); // [ 53,  8,  7, -30,  76, 53, 93, -3,  10, -15 ]
// 2.
let arr1 = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0, 33];
arr1.unshift(53);
arr1.length = arr1.length - 2; //  length - 3, 4 удалит последнии элементы массива
console.log(arr1); // [ 53,  8,  7, -30,  76, 53, 93, -3,  10, -15 ]
// 3.
let arr1 = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0, 33];
console.log(arr1);
arr1.unshift(53);
arr1.pop();
arr1.pop();
console.log(arr1); // [ 53,  8,  7, -30,  76, 53, 93, -3,  10, -15 ]

// 2. Сформируйте массив из положительных чисел меньше 50. Найдите сумму всех положительных чисел меньше 50.
// 1.
let arr1 = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0];
let new_arr = arr1.filter((elem) => {
  if (elem > 0 && elem < 50) {
    return elem;
  }
});
console.log(new_arr); // [ 8, 7, 10 ]
// 2.
let arra = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0];
let new_arr1 = arra
  .filter((elem) => elem > 0 && elem < 50)
  .reduce((total, elem) => total + elem);
console.log(new_arr1); // 25
// 3.
let arra = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0];
new_arr1 = arra
  .filter((elem) => elem > 0 && elem < 50)
  .reduce((total, elem) => total + elem);
console.log(new_arr1); // 25
// 4.
let array = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0];
let new_arr2 = array.filter((elem) => {
  if (elem % 2 === 0) {
    return elem < 50;
  }
});
console.log(new_arr2); // [ 8, -30, 10, 0 ]

// 3. Сформируйте массив, состоящий только из положительных чисел, кончающихся на 3. Найдите сумму всех положительных чисел, кончающихся на 3.
let arr2 = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0];
let arr_new = arr2
  .filter((elem) => elem > 0 && elem % 10 === 3)
  .reduce((total, elem) => total + elem);
console.log(arr_new);

// 4. Сформируйте массив, в котором положительные числа заменены на строку '+', а отрицательные числа - на '-'
// 1.
let arrOddEven = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0];
let new_arrOddEven = arrOddEven.map((elem) => {
  if (elem >= 0) {
    return "+";
  } else {
    return "-";
  }
});
console.log(new_arrOddEven); // [ '+', '+', '-', '+', '+', '+', '-', '+', '-', '+' ]
// 2.
let arr = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0];
let changed_arr = arr.map((el) => (el >= 0 ? "+" : "-"));
console.log(changed_arr); // [ '+', '+', '-', '+', '+', '+', '-', '+', '-', '+' ]
