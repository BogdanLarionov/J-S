// 1. Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.

// Пример: ({ key: 'property' }, 'key') => 'property'
// Пример: (user, 'first_name') => 'Nelli'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'last_name') => 'Efremyan'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'age') => 27

const user = {
  first_name: "Bogdan",
  last_name: "Larionov",
};
const get_value = (obj, key) => {
  return obj[key];
};

// const get_value = (obj, kay) => obj[kay];

console.log(get_value(user, "last_name")); // Larionov
console.log(get_value(user, "first_name")); // Bogdan
// ---------------------

const get_name = {
  first_name: "Nelli",
  last_name: "Efremyan",
  age: 27,
};

const ss = (obj, key) => obj[key];
console.log(ss(get_name, "age"));
// ---------------------
// age: key = "27" - по умолчанию
const user2 = {
  first_name: "Nelli",
  last_name: "Efremyan",
  age: 27,
};

const get = (obj, key = "age") => obj[key];
console.log(get(user2)); // 27
console.log(get(user2, "last_name")); // Efremyan

// ---------------------

const person = {
  name: "Bogdan",
  age: 32,
};
console.log(person.age); // 32
console.log(person["age"]); // 32
console.log(`Hello, your age is ${person["age"]} `); // Hello, your age is 32
console.log(`Hello, your age is ${person.age}`); // Hello, your age is 32
let key = "name"; // Присвоили в переменную key обьект name и выведит значение Bogdan
console.log(person["name"]);
Bogdan;
// ---------------------
const object = {
  city: "Berlin",
  country: "germany",
};
const getCountry = (obj, key) => obj[key];
console.log(getCountry(object, "city")); // Berlin
// ---------------------
const object = {
  city: "Berlin",
  country: "germany",
};
const getCountry = (obj, key) => obj[key];
console.log(getCountry({ city: "Berlin", country: "germany" }, "country")); // germany
// ---------------------
const getCountry = (obj, key) => obj[key];
console.log(getCountry({ city: "Berlin", country: "germany" }, "country")); // germany

// 2. Проверьте, что массив не пустой - в нем есть хотя бы один объект с ключом age.

const people = [
  {
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20, // age: 20, будет undefined
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
// вывели первый обьект [0]
console.log(people[0].age); // 20 , если ключе не правилтный выведит undefined или пустой обьект
console.log(people[0].hasOwnProperty("age")); //если есть  true/ если нет false;
console.log("age" in people[0]); // если такое 'age'- свойство В первом элементе массива people, если есть  true/ если нет false;

// https://jsonplaceholder.typicode.com/todos
