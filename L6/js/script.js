function pow(value, p) {
  const result = value ** p; // возвели в степень
  console.log(result);
}

pow(12, 2); // 144
pow(12, 3); // 1728
pow(12, 4); // 20736
pow(12, 5); // 248832

// ------------------------

function pow(value, p) {
  const result = value ** p; // возвели в степень
  return result;
}

const result_1 = pow(12, 2); // 144
const result_2 = pow(12, 3); // 1728
const result_3 = pow(12, 4); // 20736
const result_4 = pow(12, 5); // 248832

console.log(pow(12, 2)); // 144
console.log(pow(12, 3)); // 1728
console.log(pow(12, 4)); // 20736
console.log(pow(12, 5)); // 248832

// console.log(result_1 + result_2 + result_3 + result_4);
// ------------------------
function pow(value, p) {
  const result = value ** p; // возвели в степень
  return result;
}

const hip = pow(pow(3, 2) + pow(4, 2), 0.5);
console.log(hip); // 5
// ------------------------

// опишите функцию которая в качестеве аргумента получает два числа и возврощает наибольшее
// 1.
function getMax(num1, num2) {
  return Math.max(num1, num2);
}
console.log(getMax(1, 4)); // 4
console.log(getMax(5, 4)); // 5
// 2.
function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(getMax(1, 3)); // 3
console.log(getMax(4, 3)); // 4
// ------------------------

// Описать функцию, которая получает в качестве аргумента число и возврощает
// true, если оно больше или равно нулю и false в ином случае
// 1.
function check(value) {
  if (value >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check(1)); // true
console.log(check(0)); // true
console.log(check(-1)); // false

// 2.
function check(value) {
  return value >= 0;
}
console.log(check(1)); // true
console.log(check(0)); // true
console.log(check(-1)); // false
// ------------------------

// Написать функцию, которая принимает 3 числовых аргумента и проверяет
// возможность построения треугольника с указанными сторонами
// Если построить можно,  функция возврощает true, а в ином случае false

function triangle_check(n1, n2, n3) {
  if (n1 + n2 > n3 && n3 + n2 > n1 && n3 + n1 > n2) {
    return true;
  } else {
    return false;
  }
}
console.log(triangle_check(3, 4, 5)); //true
console.log(triangle_check(4, 5, 3)); //true
console.log(triangle_check(5, 3, 4)); //true

console.log(triangle_check(3, 4, 15)); // false
console.log(triangle_check(4, 15, 3)); // false
console.log(triangle_check(15, 3, 4)); // false
// ------------------------
Math.random();
Math.round();
// ------------------------

// C использованием Math.random() и Math.round()
// реализуйте функцию, которая возврощает случайное число от 1 до 6
// 1. ФУНКЦИИ (Function declaration)
function square() {
  return Math.round(Math.random() * 5 + 1);
}
console.log(square());
// 2. СТРЕЛОЧНЫЕ ФУНКЦИИ (Arrow functions)
const getRandomSquare = () => {
  return Math.round(Math.random() * 5 + 1);
};
console.log(getRandomSquare());
// 3. ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
const square = function square() {
    return Math.round(Math.random() * 5 + 1);
  }
  console.log(square());
// ------------------------
