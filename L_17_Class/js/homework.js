// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
// Дан массив с данными
const people = [
  {
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20,
    city: "Moscow",
    country: "Russia",
    active: true,
  },
  {
    first_name: "dmitry",
    last_name: "Petrov",
    age: 7,
    city: "Berlin",
    country: "Germany",
    active: true,
  },
  {
    first_name: "Irina",
    last_name: "Alexandrova",
    age: 46,
    city: "Paris",
    country: "France",
    active: false,
  },
  {
    first_name: "Denis",
    last_name: "Sokolov",
    age: 10,
    city: "Rome",
    country: "Italy",
    active: false,
  },
];

//1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', {...}, {...}, ...]

const getPeople = people.map(
  (elem) =>
    `${elem.first_name} ${elem.last_name} (${elem.city}, ${elem.country})`
);
console.log(getPeople);

/* [
  "Ivan Ivanov (Moscow, Russia)",
  "dmitry Petrov (Berlin, Germany)",
  "Irina Alexandrova (Paris, France)",
  "Denis Sokolov (Rome, Italy)",
]; */

// 2. Сформируйте массив из активных людей
// 1.
const getActive1 = people.filter((elem) => elem.active === true);
console.log(getActive1);
// 2.
const getActive = people.filter((elem) => elem.active);
console.log(getActive);
// Ответ:
// [
//   {
//     first_name: "Ivan",
//     last_name: "Ivanov",
//     age: 20,
//     city: "Moscow",
//     country: "Russia",
//     active: true,
//   },
//   {
//     first_name: "dmitry",
//     last_name: "Petrov",
//     age: 7,
//     city: "Berlin",
//     country: "Germany",
//     active: true,
//   },
// ];

//3. Сформируйте массив из людей, чьи имена начинаются на 'D' (регистр буквы может быть и нижним)

// 1.
const getWord = people.filter(
  (elem) => elem.first_name[0] === "D" || elem.first_name[0] === "d"
); // || - operator 'or'

console.log(getWord);
// 2.
const getWord2 = people.filter(
  (elem) => elem.first_name[0].toUpperCase() === "D"
);
console.log(getWord2);
// 3.
const getWord3 = people.filter(
  (elem) => elem.first_name[0].toLowerCase() === "d"
);
console.log(getWord3);

//4. Получите из массива объект, где страной проживания человека является 'Germany'

const getCountry = people.find((elem) => elem.country === "Germany"); // метод .find() - возврощает только один объект
console.log(getCountry);

// const getCountry = people.filter((elem) => elem.country === "Germany" ); // метод .filter() - возврощает массив и объект
// console.log(getCountry);
// Ответ:
//  {
//     first_name: 'dmitry',
//     last_name: 'Petrov',
//     age: 7,
//     city: 'Berlin',
//     country: 'Germany',
//     active: true
//   }

// 5. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: [ {<Имя> <Фамилия> (<возраст>), <Страна> (<Город>)}, {...}, {...}, ...]

const getMinorPeople = people
  .filter((elem) => elem.age >= 18)
  .map(
    (elem) =>
      `${elem.first_name} ${elem.last_name} (${elem.age}), ${elem.country} ${elem.city}`
  );
console.log(getMinorPeople); // ["Ivan Ivanov (20), Russia Moscow", "Irina Alexandrova (46), France Paris"];

// 6. Измените у первого элемента значение first_name на "Petr" и age на 99;

console.log(people[0]); // первый без изменения [] // [0] - выводит первый объект массива // { [ first_name: 'Ivan',   age: 20, ] }

people[0].first_name = "Petr";
people[0].age = 99;

console.log(people[0]); // [{ first_name: 'Petr', age: 99,}]
// --------------------
const user = {
  first_name: "Nelli",
  last_name: "Efremyan",
  age: 27,
};
// user = [1, 2, 3]; => ошибка
console.log(user); // { first_name: 'Nelli', last_name: 'Efremyan', age: 27 }
user.age = 50; // => можно
console.log(user); // { first_name: 'Nelli', last_name: 'Efremyan', age: 50 }
// user = {
//   city: 'Yerevan'
// } => ошибка
