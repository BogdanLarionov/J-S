class Panda {
  eat() {
    console.log("nyam-nyam");
  }
  fall() {
    console.log("puff!");
  }
}

const karl = new Panda(); // Экземпляр класса
const tom = new Panda(); // созданли навый класс

console.log(tom); // Panda {}
// Экземпляр класса это обьект!

karl.name = "karl"; // создали товый обьект
console.log(karl); // Panda { name: 'karl' }

karl.eat(); // nyam-nyam
tom.eat(); // nyam-nyam

karl.fall(); // puff!     // вызволи методы
tom.fall(); // puff!
// --------------------------------------------
class Panda {
  // constructor(){} - использыют для создания свойств
  constructor(name) {
    console.log("экзампляр создан", name); // экзампляр создан / экзампляр создан tom /   console.log("экзампляр создан");
  }
  eat() {
    console.log("nyam-nyam");
  }
  fall() {
    console.log("puff!");
  }
}

const tom = new Panda("tom"); // созданли навый класс // const tom = new Panda()

console.log(tom); // Panda {}
// Экземпляр класса это обьект!

tom.name = "tom"; // создали товый обьект
console.log(tom); // Panda { name: 'tom' }

tom.eat(); // nyam-nyam
tom.fall(); // puff!
// ---------------------------
function sq(value) {
  console.log(value ** 2);
}

sq(12); // 144
// ---------------------------
class Panda {
  constructor(name, age) {
    // age = 12 - по умолчанию
    // console.log(this); // Panda {}
    this.name = name; // Panda { name: 'Tom' }
    // this.name = "Tom"; // Panda { name: 'Tom' }
    this.age = age;
    this.energy = 100;
  }
  eat() {
    console.log("nyam-nyam");
  }
  fall() {
    console.log("puff!");
  }
}
// const tom = new Panda("tom"); - age: 12  по умолчанию
const tom = new Panda("tom", 12); // созданли навый класс // const tom = new Panda()
// Panda { name: 'tom', age: 20, energy: 100 }
const karl = new Panda("karl", 18);
const bobik = new Panda("bobik", 15);

console.log(tom); // Panda { name: 'tom' }
console.log(tom.name); // tom
// this - ссылка на текушей объект

console.log(tom); // Panda { name: 'tom', age: 20, energy: 100 }
console.log(karl); // Panda { name: 'karl', age: 18, energy: 100 }
console.log(bobik); // Panda { name: 'bobik', age: 15, energy: 100 }
// ---------------------------
class Panda {
  constructor(name, age = 12) {
    // age = 12  по умолчанию
    // age = '12$'  12 доларов
    if (age !== undefined) {
      this.name = name;
      this.age = age;
      this.energy = 100;
    } else {
      console.log("Какая-то совсем другая логика");
    }
  }

  eat() {
    console.log("nyam-nyam");
  }
  fall() {
    console.log("puff!");
  }
}

const tom = new Panda("Tom", 14);
const karl = new Panda("karl", 18);
const bobik = new Panda("bobik", 15);

console.log(tom); // Какая-то совсем другая логика
console.log(karl); // Panda { name: 'karl', age: 18, energy: 100 }
console.log(bobik); // Panda { name: 'bobik', age: 15, energy: 100 }
// ---------------------------
class Panda {
  constructor(name, age = 12) {
    this.name = name;
    this.age = age;
    this.energy = 100;
  }

  eat() {
    console.log("nyam-nyam");
  }
  fall() {
    this.energy -= 20;
    // this.energy = this.energy - 20;
    console.log("puff!", `energy: ${this.energy}`);
  }
}

const tom = new Panda("Tom", 14);
const karl = new Panda("karl", 18);
const bobik = new Panda("bobik", 15);

console.log(tom); // Какая-то совсем другая логика
console.log(karl); // Panda { name: 'karl', age: 18, energy: 100 }
console.log(bobik); // Panda { name: 'bobik', age: 15, energy: 100 }

console.log(karl.fall()); // puff! energy: 80
console.log(karl.fall()); // puff! energy: 60
console.log(karl.fall()); // puff! energy: 40
// ---------------------------
Object.func = () => {
  console.log("fun run!");
};
() => {
  console.log("fun tun");
};
Object.func(); // fun run!
// ---------------------------
class Panda {
  constructor(name, age = 12) {
    this.name = name;
    this.age = age;
    this.energy = 100;
  }

  eat() {
    console.log("nyam-nyam");
  }
  fall() {
    if (this.energy === 0) {
      console.log("Пожалуйста, достаточно");
    } else {
      this.energy -= 20;
      console.log("puff!", `energy: ${this.energy}`);
    }
  }
}

const tom = new Panda("Tom", 14);
const karl = new Panda("karl", 18);
const bobik = new Panda("bobik", 15);

console.log(tom); // Какая-то совсем другая логика
console.log(karl); // Panda { name: 'karl', age: 18, energy: 100 }
console.log(bobik); // Panda { name: 'bobik', age: 15, energy: 100 }

console.log(karl.fall()); // puff! energy: 80
console.log(karl.fall()); // puff! energy: 60
console.log(karl.fall()); // puff! energy: 40
console.log(karl.fall()); // puff! energy: 20
console.log(karl.fall()); // puff! energy: 0
console.log(karl.fall()); // Пожалуйста, достаточно
console.log(karl.fall()); // Пожалуйста, достаточно
console.log(karl.fall()); // Пожалуйста, достаточно

// Задача
// Дороботайте метод eat таким образом, что-бы при каждом вызове добавлялась 20 процентов энергии.
// Если энергия уже 100 процентов выведите какое-нибудь сообщение и не прибовляйте энергию

class Panda {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.energy = 100;
  }
  eat() {
    if (this.energy === 100) {
      console.log("Хватит меня кормить!");
    } else {
      this.energy += 20;
      console.log("nyam-nyam", `energy: ${this.energy}`);
    }
  }
  fall() {
    if (this.energy === 0) {
      console.log("Пожалуйста, достаточно");
    } else {
      this.energy -= 20;
      console.log("puff!", `energy: ${this.energy}`);
    }
  }
}
const tom = new Panda("Tom", 14);
const karl = new Panda("karl", 18);
const bobik = new Panda("bobik", 15);

console.log(karl.fall()); // puff! energy: 80
console.log(karl.fall()); // puff! energy: 60
console.log(karl.fall()); // puff! energy: 40
console.log(karl.fall()); // puff! energy: 20
console.log(karl.fall()); // puff! energy: 0
console.log(karl.eat()); // Пожалуйста, достаточно
console.log(karl.eat()); // nyam-nyam energy: 20
console.log(karl.eat()); // nyam-nyam energy: 40
console.log(karl.eat()); // nyam-nyam energy: 60
console.log(karl.eat()); // nyam-nyam energy: 80
console.log(karl.eat()); // nyam-nyam energy: 100
console.log(karl.eat()); // Хватит меня кормить!
