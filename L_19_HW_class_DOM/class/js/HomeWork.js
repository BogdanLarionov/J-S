//ЗАДАЧА 1
// Реализуйте класс Language (Язык), который будет иметь следующие свойства:
// name (имя), alphabet, (латинский, кирилица и т.д.), country (страна, в которой говорят на этом языке)
//Создайте экземпляр этого класса
//Выведете в консоль все свойства созданного экземпляра класса
// Реализуйте метод get_info (выводит в консоль строку 'Язык: <name>, Алфавит: <alphabet>, Страна, в которой говорят на этом языке <country>)

class Language {
  constructor(name, alphabet, country) {
    this.name = name;
    this.alphabet = alphabet;
    this.country = country;
  }

  get_into() {
    console.log(
      `Язык: ${this.name} Алфавит: ${this.alphabet} Страна, в которой говорят на этом языке ${this.country}`
    );
  }
}

const lang_1 = new Language("German", "Latin", "German");
const lang_2 = new Language("Russion", "Cyrillic", "Russian");
const lang_3 = new Language("English", "Latin", "USA");
console.log(lang_1.name); // German
console.log(lang_1.alphabet); // Latin
console.log(lang_1.country); // German

lang_1.get_into(); // Язык: German Алфавит: Latin Страна, в которой говорят на этом языке German
lang_2.get_into(); // Язык: Russion Алфавит: Cyrillic Страна, в которой говорят на этом языке Russian

//ЗАДАЧА 2 (*посложнее)
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
//rate (ставка за день работы), days (количество отработанных дней).
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//С помощью класса создайте двух рабочих и найдите сумму их зарплат.
// Реализуйте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней на amount)

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days;
  }

  addDays(amount) {
    this.days += amount;
  }
  deleteDays(amount) {
    this.days -= amount;
  }
}

const worker_1 = new Worker("Mark", "Petrov", 50, 10);
const worker_2 = new Worker("Petr", "Ivanov", 60, 14);

const salary_1 = worker_1.getSalary();
const salary_2 = worker_2.getSalary();

const salarys_all = salary_1 + salary_2;

console.log(salary_1); // 500
console.log(salary_2); // 840
console.log(salary_1 + salary_2); // 1340
console.log(salarys_all); // 1340

console.log(worker_1); // Worker { name: 'Mark', surname: 'Petrov', rate: 50, days: 1 }
console.log(worker_2); // Worker { name: 'Mark', surname: 'Petrov', rate: 50, days: 14 }

worker_1.addDays(2);
worker_2.addDays(3);

console.log(worker_1); // Worker { name: 'Mark', surname: 'Petrov', rate: 50, days: 12 }
console.log(worker_2); // Worker { name: 'Mark', surname: 'Petrov', rate: 50, days: 17 }

worker_1.deleteDays(10);
worker_2.deleteDays(12);

console.log(worker_1); // Worker { name: 'Mark', surname: 'Petrov', rate: 50, days: 2 }
console.log(worker_2); // Worker { name: 'Mark', surname: 'Petrov', rate: 50, days: 5 }
// --------------------------------------------------------------------------------------------

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days;
  }
}

const worker_1 = new Worker("Mark", "Petrov", 50, 10);
const worker_2 = new Worker("Petr", "Ivanov", 60, 14);

const salary = worker_1.getSalary();

console.log(salary); // 500
console.log(worker_1); // Worker { name: 'Mark', surname: 'Petrov', rate: 50, days: 10 }
console.log(worker_1.getSalary()); // 500

// ------------

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.salary = rate * days;
  }

  getSalary() {
    return this.rate * this.days;
  }
}

const worker_1 = new Worker("Mark", "Petrov", 50, 10);

const salary = worker_1.getSalary();

console.log(worker_1); // Worker { name: 'Mark', surname: 'Petrov', rate: 50, days: 10  salary: 500}
// console.log(worker_1.getSalary()); // 500
// ------------

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.salary = 0;
  }

  getSalary() {
    return this.rate * this.days;
  }
}

const worker_1 = new Worker("Mark", "Petrov", 50, 10);

const salary = worker_1.getSalary();

console.log(worker_1); // Worker { name: 'Mark', surname: 'Petrov', rate: 50, days: 10  salary: 0}
// console.log(worker_1.getSalary()); // 500
