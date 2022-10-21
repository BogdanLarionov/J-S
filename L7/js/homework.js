// 1. задача
// Напишите функцию, которая принимает в качестве аргумента имя (строку),
// а возврощает сообщение в формате: Dear Имя, welcome. Выведите результат в консоль.
// Запишите функцию в двух форматах (function declaration и aroow function).
// 1. function declaration
function getString(string) {
  return `Dear ${string}, welcome.`;
}

console.log(getString("Bogdan"));
// 2. aroow function

const getString = (string) => `Dear ${string}, welcome.`;
console.log(getString("Alona"));

/* 2. задача
Напишите функцию, которая принимает в качестве аргумента два значения: имя и возрост.
Если переданный возраст меньше 18, то функция возвращает сообщение в формате:
Dear Имя, you are younder than 18. Если возрост больше или равен 18,
то фкнкця возврощает сообщение в формате: Dear Имя, you are adult.
Запишите функци/ в двух форматах (function declaration и arrow function). */

// 1.function declaration
function getAge(name, age) {
  if (age < 18) {
    return `Dear ${name}, you are younger than 18`;
  } else age >= 18;
  {
    return `Dear ${name}, you are adult`;
  }
}
console.log(getAge("Bogdan", 32));
console.log(getAge("Alena", 18));
console.log(getAge("Xenia", 8));

// 2. arrow function

const getAge = (name, age) => {
  if (age < 18) {
    return `Dear ${name}, you are younger than 18`;
  } else age >= 18;
  {
    return `Dear ${name}, you are adult`;
  }
};
console.log(getAge("Bogdan", 32));
console.log(getAge("Alena", 18));
console.log(getAge("Xenia", 8));

// 3. Условный (тернарный) оператор " ? - if : - else " работает тольеко с одним условием!
// Условие1 ? Условие1 верно : Условие1 неверно
const getAge = (name, age) => {
  return age < 18
    ? `Dear ${name}, you are younger than 18`
    : `Dear ${name}, you are adult`;
};

console.log(getAge("Bogdan", 32));
console.log(getAge("Alena", 18));
console.log(getAge("Xenia", 8));
// 4.
const getAge = (name, age) =>
  age < 18
    ? `Dear ${name}, you are younger than 18`
    : `Dear ${name}, you are adult`;

console.log(getAge("Bogdan", 32));
console.log(getAge("Alena", 18));
console.log(getAge("Xenia", 8));
// ---------------
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// ---------------

/* 3. задача
Напишите функцию, которая принимает два числовых аргумента и возвращает результат их умножения.
Значение второго аргумента должно быть указано по умолчанию.
Запишите функцию в двух форматах (function declaration и arrow function) */

// 1.function declaration
function getmultiplicate(num1, num2 = 2) {
  return num1 * num2;
}
console.log(getmultiplicate(2, 3));
console.log(getmultiplicate(2));

// 2. arrow function
const getmultiplicate = (num1, num2 = 2) => num1 * num2;

console.log(getmultiplicate(2, 3));
console.log(getmultiplicate(2));

/* 4. задача
Напишите функцию, которая принимает два аргумента c числовым значением и возвращает меньшее.
Выведите результат в конслоль. Предложите два варианта решения.
Запишите функцию в двух форматах (function declaration и arrow function) */

// 1. function declaration
function getMin(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(getMin(1, 3)); // 1
console.log(getMin(4, 3)); // 3
// 1.1 function declaration - и метод Math.min()
function getMin(num1, num2) {
  return Math.min(num1, num2);
}
console.log(getMin(1, 3)); // 1
console.log(getMin(4, 3)); // 3
// 2. arrow function
const getMin = (num1, num2) => {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(getMin(1, 3)); // 1
console.log(getMin(4, 3)); // 3

// 2.2 arrow function и метод Math.min()

const getMin = (num1, num2) => {
  return Math.min(num1, num2);
};
console.log(getMin(1, 3)); // 1
console.log(getMin(4, 3)); // 3

// 2.3
const getMin = (num1, num2) => Math.min(num1, num2);

console.log(getMin(1, 3)); // 1
console.log(getMin(4, 3)); // 3
// ---------------
