// 1.
function pow(value, p) {
  const result = value ** p;
  return result;
}
console.log(pow(3, 2)); // 9
console.log(pow(4, 2)); // 16
// 2.
const pow = (value, p) => {
  const result = value ** p;
  return result;
};

console.log(pow(3, 2)); // 9
console.log(pow(4, 2)); // 16
3;
const pow = (value, p) => value ** p;

console.log(pow(3, 2)); // 9
console.log(pow(4, 2)); // 16
// -------------
// Необходимо написать стрелочную фкнкцию,
// которая получает в качестве аргумента число и возвращает true,
// если оно больше 0 и fasle в ином случае
// 1.
const func = (num) => {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
};

console.log(func(2)); // true
console.log(func(0)); // false
console.log(func(-1)); // false
// 2.
const func = (num) => num > 0;
console.log(func(2)); // true
console.log(func(0)); // false
3;
const func = (num) => num > 0;
console.log(func(2)); // true
console.log(func(0)); // false
// -------------
// написать стрелочную функцию, которая в качестве аргумента получает число (год)
// и возвращает true если год високостный и false в ином случае

const checkLeapYear = (year) =>
  (year % 4 === 0 && year % 100 != 0) || year % 400 === 0;
console.log("2022", checkLeapYear(2022)); // false
console.log("2023", checkLeapYear(2023)); // false
console.log("2024", checkLeapYear(2024)); // true
console.log("2025", checkLeapYear(2025)); // false
console.log("2026", checkLeapYear(2026)); // false
console.log("2027", checkLeapYear(2027)); // false
console.log("2028", checkLeapYear(2028)); // true
console.log("1900", checkLeapYear(1900)); // false
console.log("1600", checkLeapYear(1600)); // true
// -------------

// написать функцию, которая принимает в качестве аргумента число и возврозает true,
// если она четное и false если нечетное
// 1.
const getOddEven = (num) => num % 2 === 0;
console.log(getOddEven(2)); // true
console.log(getOddEven(3)); // false
// 2.
function getOddEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(getOddEven(2)); // true
console.log(getOddEven(3)); // false
3;
const getOddEven = function getOddEven(num) {
  return num % 2 === 0 ? "true - even" : "false - odd";
};
console.log(getOddEven(2)); // true
console.log(getOddEven(3)); // false
// -------------
//www.programiz.com/javascript/examples/even-odd
// -------------
// .4
https: function getOddEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const a = getOddEven; // присвоил функцию переменной
console.log(a(2));
console.log(a(3));
console.log(getOddEven(2)); // true
console.log(getOddEven(3)); // false
// -------------
// callback function
const compare = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

const run_with_input_data = (func) => {
  const value_1 = +prompt("укажтите число: ");
  const value_2 = +prompt("укажтите число: ");
  return func(value_1, value_2);
};
const result = run_with_input_data(compare);
console.log(result);
// -------------

//function setTimeout() - выведет 12 через 2 секунды
setTimeout(() => console.log(12), 2000);
