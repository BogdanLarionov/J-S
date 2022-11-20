// Литеральная нотация объектов
// https://largescalejs.ru/object-literal-notation/

// class - пишется с бодьшой буквы
// Экземпляр класса
// constructor - это встроенный метод
class Car {
  constructor(name, model, country, volume, color, year) {
    this.name = name; // this сслылаемся на car_1 первое name это ссылка
    this.model = model;
    this.country = country;
    this.volume = volume;
    this.color = color;
    this.year = year;
  }
}

const car_1 = new Car("Toyota", "RAV4", "Japon", 2.4, "red", 2020);
console.log(car_1);
console.log(car_1.country); // Japon
console.log(car_1["country"]); // Japon
// this.name === car_1.name
const car_2 = new Car("BMW", "X3", "Germany", 2.0, "black", 2018);
// this.name === car_2.name
const car_3 = new Car("Audi", "Q7", undefined, 2.0, "white", 2018);
// this.name === car_3.name
console.log(car_3);
console.log(car_3.name); // Audi
console.log(car_3["name"]); // Audi
// Ответ
// Car { name: 'Audi',model: 'Q7',country: undefined,volume: 2,color: 'white',year: 2018 }
//способы создания объектов в js
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects

// name, model, country, volume, color, year

// name:"Toyota"
// model:"RAV4"

console.log(car_1);
// Ответ
// Car { name: 'Toyota', model: 'RAV4', country: 'Japon', volume: 2.4, color: 'red', year: 2020 }

// Экземпляр класса - объект, созданный через класс
// this - контекст, ссылка на объект, с которым происходит действие

// литеральная натация
const car_1_1 = {
  name: "Toyota",
  model: "RAV4",
  country: "Japon",
  volume: 2.4,
  color: "red",
  year: 2020,
};
console.log(car_1_1);
// Ответ
// { name: 'Toyota', model: 'RAV4', country: 'Japon', volume: 2.4, color: 'red', year: 2020 }
// -----------------------------------
class Car2 {
  constructor(name, model, country, volume, color, year) {
    this.name = name; // this сслылаемся на car_1 первое name это ссылка
    this.model = model;
    this.country = country;
    this.volume = volume;
    this.color = color;
    this.year = year;
  }
  get_info() {
    console.log(
      `Машина: ${this.name} (${this.model}), из страны ${this.country}`
    );
  }
  get_year() {
    console.log(`Год выпуска: ${this.year}`);
  }
}
// создаем экземпляры классов
const car_1_ = new Car2("Toyota", "RAV4", "Japon", 2.4, "red", 2020);
const car_2_ = new Car2("BMW", "X3", "Germany", 2.0, "black", 2018);
const car_3_ = new Car2("Audi", "Q7", "Germany", 2.0, "white", 2018);

// вызываем метод get_info( )
car_1_.get_info(); // Машина: Toyota (RAV4), из страны Japon
car_2_.get_info(); // Машина: BMW (X3), из страны Germany
car_3_.get_info(); // Машина: Audi (Q7), из страны Germany

car_1_.get_year(); // Год выпуска: 2020
car_2_.get_year(); // Год выпуска: 2018

// ЗАДАЧА
// Реализуйте класс Country (Страна), который будет иметь следующие свойства:
// name (имя), capital (столица), population (численность населения), climat (климат)
//Создайте 3 экземпляра этого класса с разными свойствами
//Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса
//Реализйуте метод get_capital, который выводит в консоль сообщение 'The capital of <NAME> is <CAPITAL>'

class Country {
  constructor(name, capital, population, climat) {
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.climat = climat;
  }

  get_capital() {
    console.log(`The capital of ${this.name} is ${this.capital}`);
  }
}

const country_1 = new Country("Ukraine", "Kyiv", 4000000, "bad");
const country_2 = new Country("Germany", "Berlin", 3000000, "hot");
const country_3 = new Country("Spain", "Madrid", "2000000", "warm");
console.log(country_1.name); // Ukraine
console.log(country_2["capital"]); // Berlin
console.log(country_3.population); // 2000000

country_1.get_capital(); // The capital of Ukraine is Kyiv
