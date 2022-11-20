// --------------------------------------------------------------------
// Создайте новый массив, состоящий только из отрицательных чисел
// let array = [1, -6, 4, 0, 9, -5, 16];

// Императивное программирование  // Императивное способо - говорим программе КАК выполгить задачу

let array = [1, -6, 4, 0, 9, -5, 16];
let new_array = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    new_array.push(array[i]);
  }
}
console.log(new_array); // [ -6, -5 ]

// Декларативное программирование // Декларативное способо - говорим программе ЧТО нужно сделать

let array2 = [1, -6, 4, 0, 9, -5, 16];
let new_array2 = array2.filter((el) => el < 0);
console.log(new_array2); // [ -6, -5 ]
// ------------------------------------------------------------------------------------------------------

// Создайте функцию, принимающий массив и возвращающую массив с отрицатеоьным числоми

let arr = [1, 34, -10, 8, -5, -3];
const negative_nums = (arr) => {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
};
console.log(negative_nums(arr));

// Создайте функцию, принимающий массив и возвращающую массив с положительным числоми

let arr = [1, 34, -10, 8, -5, -3];
const positive_nums = (arr) => {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
};
console.log(positive_nums(arr));
