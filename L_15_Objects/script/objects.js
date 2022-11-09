// Приметивные типы данных

let a = "hello"; // string
console.log(typeof a);

let b = 7;
console.log(typeof b); // number

let c = true; // false
console.log(typeof c); // boolean

let d = undefined;
console.log(typeof d); // undefined

let e = null;
console.log(typeof e); // object

// Object - не премитивный тип данныйх!!

let user = {
  firstname: "Bogdan", // свойства обьекта
  lastname: "Larionov", // свойства обьекта
  age: 32, // свойства обьекта
  active: true, // свойства обьекта
};
// 1. способ
console.log(user); // { firstname: 'Bogdan', lastname: 'Larionov', age: 32, active: true }
// firstname: - key(Ключ),'Bogdan' - value(Значение)

console.log(user.firstname); // Bogdan
console.log(user.age); // 32
console.log(`Hello ${user.firstname}! You are ${user.age} years old`); // Hello Bogdan! You are 32 years old
// 2. способ
let user = {
  firstname: "Bogdan", // свойства обьекта
  lastname: "Larionov", // свойства обьекта
  age: 32, // свойства обьекта
  active: true, // свойства обьекта
};
console.log(`Hello ${user["firstname"]}! You are ${user["age"]} years old`); // Hello Bogdan! You are 32 years old

// почему такая запись
let user = {
  "first name": "Bogdan", // .first_name можно обращаться и так без ковычек
  lastname: "Larionov",
  age: 32,
  active: true,
};
console.log(`Hello ${user["first name"]}! You are ${user["age"]} years old`); // Hello Bogdan! You are 32 years old
// 1.если ключь состоит из двух и болкк слов
// 2.если ключь - это переменная
let user = {
  firstname: "Bogdan", // .first_name можно обращаться и так без ковычек
  lastname: "Larionov",
  age: 32,
  active: true,
};
let name = "firstname";
console.log(`Hello ${user[name]}! You are ${user["age"]} years old`); // Hello Bogdan! You are 32 years old
// ==============================================================================================================================
// способ хранения информыции - массива и в нем объекты

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// Method - .substring()
let anyString = "Mazilla";
console.log(anyString.substring(3, 0)); // Maz
console.log(anyString.substring(0, 3)); // Maz
console.log(anyString.substring(4, 7)); // lla

const users = [
  // в масиве оьтеты
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];
console.log(users[1]);
// { first_name: 'Olga', last_name: 'Petrova', age: 12, salary: 250 }
console.log(users[1].salary); // 250
console.log(`Hello ${users[0].first_name}`); // Hello Ivan

let arr = ["hello", 7, true]; // array- массив
console.log(arr[0]); // hello

//1. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль
const users = [
  // в масиве оьтеты
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];
users.forEach((el) => console.log(el)); // каждый el в массиве это обьект
/* { first_name: 'Ivan', last_name: 'Ivanov', age: 20, salary: 500 }
{ first_name: 'Olga', last_name: 'Petrova', age: 12, salary: 250 }
{ first_name: 'irina', last_name: 'Alexandrova', age: 46, salary: 1500 }
{ first_name: 'Denis', last_name: 'Sokolov', age: 30, salary: 760 } */

//2. Пройдитесь по массиву с объектами циклом forEach и выведите в консоль значения first_name из каждого объекта
const users = [
  // в масиве оьтеты
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];

users.forEach((element) => console.log(element.first_name)); // Ivan, Olga, irina, Denis
users.forEach((element) => console.log(element.first_name[0])); // I, O, i, D
users.forEach((element) => element.first_name[0]); // I, O, i, D
console.log(users);
// 3. Добавить в конец массива объект со следующими значениями:
// {
//   first_name: 'Anton',
//   last_name: 'Gribov',
//   age: 36,
//   salary: 1760
// }

const users = [
  // в масиве оьтеты
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];

users.push({
  first_name: "Anton",
  last_name: "Gribov",
  age: 36,
  salary: 1760,
});
console.log(users);
/* [
    { first_name: 'Ivan', last_name: 'Ivanov', age: 20, salary: 500 },
    { first_name: 'Olga', last_name: 'Petrova', age: 12, salary: 250 },
    { first_name: 'irina', last_name: 'Alexandrova', age: 46, salary: 1500 },
    { first_name: 'Denis', last_name: 'Sokolov', age: 30, salary: 760 },
    { first_name: 'Anton', last_name: 'Gribov', age: 36, salary: 1760 }
  ] */

// 4. Сформируйте массив из совершеннолетних пользователей (18+)
// Решение 1.
const users = [
  // в масиве оьтеты
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];
let adult = users.filter((elem) => {
  if (elem.age >= 18) {
    return elem;
  }
});
console.log(adult);

/* [
    { first_name: 'Ivan', last_name: 'Ivanov', age: 20, salary: 500 },
    { first_name: 'irina', last_name: 'Alexandrova', age: 46, salary: 1500 },
    { first_name: 'Denis', last_name: 'Sokolov', age: 30, salary: 760 }
  ] */
// Решение 2.
const users = [
  // в масиве оьтеты
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];
let adult = users.filter((elem) => elem.age >= 18);
console.log(adult);
/* [
    { first_name: 'Ivan', last_name: 'Ivanov', age: 20, salary: 500 },
    { first_name: 'irina', last_name: 'Alexandrova', age: 46, salary: 1500 },
    { first_name: 'Denis', last_name: 'Sokolov', age: 30, salary: 760 }
  ] */

// 5. Получите из всех объектов значения last_name и сформируйте из этих фамилий массив.
// => ['Ivanov', 'Petrova', 'Alexandrova', 'Sokolov', 'Gribov']
const users = [
  // в масиве оьтеты
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];
let lastNameArray = users.map((elem) => elem.last_name);
console.log(lastNameArray); // [ 'Ivanov', 'Petrova', 'Alexandrova', 'Sokolov' ]

// 6. Сформируйте массив, состоящий только из имен и фамилий пользователей. Выведите результат в консоль.
// => ['Ivan Ivanov', 'Olga Petrova', 'Irina Alexandrova', 'Denis Sokolov', 'Anton Gribov']
// 1.
const users = [
  // в масиве оьтеты
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];
// let getNameFam = users.map((elem) => elem.first_name, elem.last_name);
console.log(users.map((elem) => elem.first_name, elem.last_name));
let getNameFam = users.map((elem) => (elem.first_name, elem.last_name));
let getNameFam = users.map((elem) =>
  console.log(elem.first_name, elem.last_name)
);
console.log(getNameFam); // [ 'Ivanov', 'Petrova', 'Alexandrova', 'Sokolov' ] ???

/* Ivan Ivanov
Olga Petrova
irina Alexandrova
Denis Sokolov */
// 2.
const users = [
  // в масиве оьтеты
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];
let getUser = users.map((elem) => `${elem.first_name} ${elem.last_name}`);
console.log(getUser); // [ 'Ivan Ivanov', 'Olga Petrova', 'irina Alexandrova', 'Denis Sokolov' ]
// 3.
const users = [
  // в масиве оьтеты
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];
const new_user = users.map((el) => el.first_name + " " + el.last_name);
const new_user1 = users.map((el) => `${el.first_name} + " " + ${el.last_name}`);
console.log(new_user); // [ 'Ivan Ivanov', 'Olga Petrova', 'irina Alexandrova', 'Denis Sokolov' ]
console.log(new_user1); // [ 'Ivan Ivanov', 'Olga Petrova', 'irina Alexandrova', 'Denis Sokolov' ]

// 7. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной => .find()

// Method.find(); -  можно искать элементы в нутри массива с определенным условием и возврощает найденый элемент

const users = [
  // в масиве оьтеты
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "Irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];

let user_olga_find = users.find((elem) => elem.first_name === "Olga");
console.log(user_olga_find); // { first_name: 'Olga', last_name: 'Petrova', age: 12, salary: 250 }
// метод find выводит обьект [ ]
// let user_olga = users.find((elem) => elem.first_name === "Olga" && elem.age === 12); // добавили возолсто (как выборка в sql)
// let user_olga = users.find((elem) => elem.first_name === "Olga" && elem.salary === 250); // добавили зарплату (как выборка в sql)
let user_olga_filter = users.filter((elem) => elem.first_name === "Olga");
console.log(user_olga_filter); // [ { first_name: 'Olga', last_name: 'Petrova', age: 12, salary: 250 } ]
console.log(user_olga_filter[0]); // { first_name: 'Olga', last_name: 'Petrova', age: 12, salary: 250 } // [0] вернет обьект
// метод filter выводит массив в нутри будет обьект [ {...} ]

// 8. Сформировать массив со всеми пользователями, чьи first_name начинаются с буквы I/i
// 1.
const users = [
  { first_name: "Ivan", last_name: "ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];
let users_i = users.filter(
  (elem) => elem.first_name[0] === "I" || elem.first_name[0] === "i"
);
console.log(users_i);
// [ { first_name: 'Ivan', last_name: 'ivanov', age: 20, salary: 500 },
// { first_name: 'irina', last_name: 'Alexandrova', age: 46, salary: 1500 } ]
// 2.
let users_ii = users.filter((elem) => elem.first_name[0].toLowerCase() === "i");
console.log(users_ii);
// 3.
let users_I = users.filter((elem) => elem.first_name[0].toUpperCase() === "I");
console.log(users_I);

// 9. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// => ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760', 'Anton Grobov (36)'];

const users_adult = [
  { first_name: "Ivan", last_name: "ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];

let users_18 = users_adult
  .filter((elem) => elem.age >= 18)
  .map(
    (elem) =>
      `${elem.first_name} ${elem.last_name} (${elem.age}): ${elem.salary}`
  );

console.log(users_18);
/* [
  "Ivan ivanov (20): 500",
  "irina Alexandrova (46): 1500",
  "Denis Sokolov (30): 760",
];
 */
// --------------------------------------------------------------------
// 1.
let users = [
  { first_name: "Ivan", last_name: "ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];

let arr = [];
for (let i = 0; i < users.length; i++) {
  arr.push(users[i].first_name);
}
console.log(arr); // [ 'Ivan', 'Olga', 'irina', 'Denis' ]
// 2.
// короткий способ
let lastNameArray = users.map((elem) => elem.first_name);
console.log(lastNameArray); // [ 'Ivan', 'Olga', 'irina', 'Denis' ]
