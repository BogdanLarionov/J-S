// Задачи
// method -  .reduce()
// const lst = [12, 4, 32, 3, 45, 43];
// Задача 1
// Используя метод forEach выведите квадраты этих чисел в консоль
// 1.
const lst = [12, 4, 32, 3, 45, 43];
lst.forEach((elem) => console.log(elem ** 2)); // 144, 16, 1024, 9, 2025, 1849
// 2.
const lst2 = [12, 4, 32, 3, 45, 43];
let new_arr = [];
lst2.forEach((element) => new_arr.push(element ** 2));
console.log(lst2); // [ 12, 4, 32, 3, 45, 43 ]
console.log(new_arr); // [ 144, 16, 1024, 9, 2025, 1849 ]
// 3.
const lst3 = [12, 4, 32, 3, 45, 43];
console.log(lst3.map((element) => element ** 2)); // [ 144, 16, 1024, 9, 2025, 1849 ]
// Задача 2
// Используя метод forEach выведите квадраты только четные числа
// 1.
const array = [12, 4, 32, 3, 45, 43];
array.forEach((elem) => {
  if (elem % 2 === 0) {
    console.log(elem); // 12, 4, 32
  }
});
// 2.
const arr = [12, 4, 32, 3, 45, 43];
let new_Array = [];
arr.forEach((el) => {
  if (el % 2 === 0) {
    new_Array.push(el ** 2);
  }
});
console.log(new_Array); // [ 144, 16, 1024 ]
// Задача 3
// Пользуясь методом .map() реализуйте новый массив,
// в котором все отрицательные значения были преобразованы в положительные
// 1.
const arra = [12, -4, 32, 3, -45, 43];
const new_arra = [];
arra.map((elem) => {
  if (elem < 0) {
    new_arra.push((elem = -elem));
  } else {
    new_arra.push(elem);
  }
});
console.log(new_arra); // [ 12, 4, 32, 3, 45, 43 ]
// 2.
const arra2 = [12, -4, 32, 3, -45, 43];
const new_arra2 = arra2.map((elem) => {
  if (elem < 0) {
    return -elem;
  } else {
    return elem;
  }
});
console.log(new_arra2); // [ 12, 4, 32, 3, 45, 43 ]
// 3.
const arra3 = [12, -4, 32, 3, -45, 43];
const new_arra3 = arra3.map((elem) => {
  return elem < 0 ? -elem : elem;
});
console.log(new_arra3); // [ 12, 4, 32, 3, 45, 43 ]
// 4.
const arra4 = [12, -4, 32, 3, -45, 43];
const new_arra4 = arra4.map((elem) => (elem < 0 ? -elem : elem));
console.log(new_arra4); // [ 12, 4, 32, 3, 45, 43 ]
// 5.
const arra5 = [12, -4, 32, 3, -45, 43];
const new_arr5 = arra5.map((elem) => {
  const tmp = elem < 0 ? -elem : elem;
  console.log(tmp);
  return tmp;
});
console.log(new_arr5);
// 12, 4, 32, 3, 45, 43
//[ 12, 4, 32, 3, 45, 43 ]
// 6.
const arra6 = [12, -4, 32, 3, -45, 43];
const new_arra6 = arra6.map((elem) => (elem > 0 ? elem : elem * -1));
console.log(new_arra6); // [ 12, 4, 32, 3, 45, 43 ]
// Задача 4
const array1 = [12, 4, 45, 32, 3, 43];
// С использованием метола .map() реализуйте процесс,
// который формирует новый массив состоящий из булевых значений.
// Если число в изначальном массве четное,
// то в результирующий добовляся true, в ином случае false
// 1.
const array = [12, 4, 45, 32, 3, 43];
const new_arra = array.map((elem) => {
  if (elem % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(new_arra); // [ true, true, false, true, false, false ]
// 2.
const array = [12, 4, 45, 32, 3, 43];
const new_arr = array.map((elem) => (elem % 2 === 0 ? true : false));
console.log(new_arr); // [ true, true, false, true, false, false ]
// 3.
const array = [12, 4, 45, 32, 3, 43];
const new_arra = array.map((elem) => elem % 2 === 0);
console.log(new_arra); // [ true, true, false, true, false, false ]
// 4.
const array = [12, 4, 45, 32, 3, 43];
const new_arra = array.map((elem) => !(elem % 2));
console.log(new_arra); // [ true, true, false, true, false, false ]
// Задача 5
// Используя метод .filter() сформировать массив, который состоит только из чисел меньше 10
const arrayMinTen = [12, 4, 45, 32, 3, 43];
const result = arrayMinTen.filter((elem) => elem < 10);
console.log(result); // [ 4, 3 ]
// -----------------------------------------------------------------------------------------------------------------------
// Method - .reduce(previousValue(предыдущее значение) + currentValue(Текущие значение));
const reduceMehtod = [12, 4, 45, 32, 3, 43];
const result = reduceMehtod.reduce((prev, value) => prev + value);
console.log(result); // 139
// (12, 4) => 16
// (16, 45) => 61
// (61, 32) => 93
// (93, 3) => 96
// (96, 43) => 139
// Method - .reduce(previousValue(предыдущее значение) + currentValue(Текущие значение, start value(Начальное значение)));
const reduceMehtod1 = [12, 4, 45, 32, 3, 43];
const result2 = reduceMehtod1.reduce((prev, value) => prev + value, 1000);
console.log(result2); // 1139
// (1000, 12) => 1012
// (1012, 4) => 1016
// (1016, 45) => 1061
// (1061, 32) => 1093
// (1096, 3) => 1096
// (1096, 43) => 1139

// Задача 5
// Используя метод reduce найти произведение-(умножение) всех чисел массива
const arrayMultiplay = [12, 4, 45, 32, 3, 43];
const res = arrayMultiplay.reduce((prev, value) => prev * value);
console.log(res); // 8916480
// (12, 4) => 48
// (48, 14) => 2160
// (2160, 32) => 69120
// (69120, 3) => 207360
// (207360, 43) => 8916480
// проверка
const a = 207360;
const b = 43;
console.log(a * b);
// 2.
const arrayMultiplay = [2, 3, 4, 5];
const res = arrayMultiplay.reduce((prev, value) => prev * value);
console.log(res); //120
// (2, 3) => 6
// (6, 4) => 24
// (24, 5) => 120
// Задача 6
// Используйте метод .reduce() найдите максимальное значение в массиве
// 1.
const arrayMax = [2, 3, 4, 5, 3];
const result = arrayMax.reduce((prev, value) => {
  if (prev > value) {
    return prev;
  } else {
    return value;
  }
});
console.log(result); // 5
// 2.
const arrayMax = [2, 3, 4, 5, 3];
const result = arrayMax.reduce((prev, value) => (prev > value ? prev : value));
console.log(result); // 5
// Задача 6
// Добавить процесс reduce, что-бы он выводил сумму четных чисел
////????????????????????

const arrayMax = [2, 3, 4, 5, 3];
const result = arrayMax.reduce((prev, value) => {
  if (prev % 2 === 0) {
    return value;
  }
});
console.log(result);
////????????????????????
