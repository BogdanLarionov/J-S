let lst = [12, 4, 23, 45, 432];
console.log(lst[3]); // 45
// -----
// Имя, фамилия, возвраст, зарплата
let person = ["Анатолий", "Ушанов", 29, 130000];
console.log(person[1]); // Ушанов
// -----
let user = { name: "Анатолий", lastname: "Ушанов", age: 29, salary: 130000 };
console.log(user["lastname"]); // Ушанов
console.log(user.lastname); // Ушанов
// -----
// перезаписал значение
let user = { name: "Анатолий", lastname: "Ушанов", age: 29, salary: 130000 };
user["lastname"] = "Куликов";
console.log(user); // { name: 'Анатолий', lastname: 'Куликов', age: 29, salary: 130000 }
// или
let user2 = { name: "Анатолий", lastname: "Ушанов", age: 29, salary: 130000 };
user2.lastname = "Куликов";
console.log(user2); // { name: 'Анатолий', lastname: 'Куликов', age: 29, salary: 1
// -----
// добавим номый ключь-значение в обьект
let user2 = { name: "Анатолий", lastname: "Ушанов", age: 29, salary: 130000 };
user2.id = 1;
console.log(user2); // { name: "Анатолий", lastname: "Ушанов", age: 29, salary: 130000,  id: 1};
// или
let user2 = { name: "Анатолий", lastname: "Ушанов", age: 29, salary: 130000 };
user2["id"] = 1;
console.log(user2); // { name: "Анатолий", lastname: "Ушанов", age: 29, salary: 130000,  id: 1};
// -----
// удалить ключь-значение из обьект
let user2 = { name: "Анатолий", lastname: "Ушанов", age: 29, salary: 130000 };
delete user2.salary;
console.log(user2); // { name: 'Анатолий', lastname: 'Ушанов', age: 29 }
// или
let user2 = { name: "Анатолий", lastname: "Ушанов", age: 29, salary: 130000 };
delete user2["salary"];
console.log(user2); // { name: 'Анатолий', lastname: 'Ушанов', age: 29 }
// Задача
// Создать объект product со свойствами id, title и price
// Увеличить стоимость на 20 процентов, добавить свойство description с каким-то описанием
// вывести объект
let product = {
  id: 1,
  title: "Мыло",
  price: 2,
};
console.log(product); // { id: 1, title: 'Мыло', price: 2 }
product.price *= 1.2;
console.log(product); //{ id: 1, title: 'Мыло', price: 2.4  }
product["price"] *= 1.2;
console.log(product); // { id: 1, title: 'Мыло', price: 2.4 }
product.description = "Camay";
console.log(product); // { id: 1, title: 'Мыло', price: 2.4, description: 'Camay' }
product["description"] = "Camay";
console.log(product); // { id: 1, title: 'Мыло', price: 2.4, description: 'Camay' }
// -----
