// создайте класс User со свойствами name и age и методом sayHi который выводит в консоль фразу 'Привет'
// и создать экземпляр класса

// 1.

class User {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  sayHi() {
    console.log(`Hello ${this.name} your age is ${this.age}`);
  }
}

const user_1 = new User("Bogdan", 32);
const user_2 = new User("Alona", 33);

user_1.sayHi(); // Hello Bogdan your age is 32
user_2.sayHi(); // Hello Alona your age is 33

// 2.
// добавили новый метод .change_name() который меняет имя
class User {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  sayHi() {
    console.log(`Hello ${this.name} your age is ${this.age}`);
  }

  change_name(new_name) {
    this.name = new_name;
  }
}

const user_1 = new User("Bogdan", 32);
const user_2 = new User("Alona", 33);

console.log(user_1); // User { name: 'Bogdan', age: 32 }
console.log(user_2); // User { name: 'Alona', age: 33 }

console.log(user_1.name); // Bogdan
console.log(user_1.age); // 32

user_1.change_name("Igor"); // Hello Igor your age is 32
console.log(user_1.name); // Igor

user_1.change_name("Goga"); // Hello Goga your age is 32
console.log(user_1.name); // Goga

user_1.sayHi(); // Hello Bogdan your age is 32
user_2.sayHi(); // Hello Alona your age is 33

// 3.
// Добавьте метод birthday который увеличивает возрост на единицу и выводит в консоль

class User {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  sayHi() {
    console.log(`Hello ${this.name} your age is ${this.age}`);
  }

  birthday() {
    this.age++;
    console.log("Всегда оставайся таким веселым!");
  }
}

const user_1 = new User("Bogdan", 32);
const user_2 = new User("Alona", 33);

user_1.sayHi(); // Hello Bogdan your age is 32
user_2.sayHi(); // Hello Alona your age is 33

user_1.birthday(); // Всегда оставайся таким веселым!
console.log(user_1); // User { name: 'Bogdan', age: 33 }
// ---------------------------------------------------------------------------------

// 4.
// роли: root, admin, manager, user
// Провести указанную роль и если она входит в список допустимых указать ее пользователю
// в ином случае в свойство role указать undefined
// ---------------------------------------------------------------------------------
// .includes() - Method позволяет проверить если задданное значение в массиве
let a = [12, 4, 3, 5];
console.log(a.includes(12)); // true
console.log(a.includes(44)); // false
// ---------------------------------------------------------------------------------

class User {
  constructor(name, age, role) {
    (this.name = name), (this.age = age);
    if (["root", "admin", "manager", "user"].includes(role)) {
      this.role = role;
    } else {
      this.role = undefined;
    }
  }
}

const user_3 = new User("Bogdan", 32, "admin");
const user_4 = new User("Alona", 33, "student");

console.log(user_3); // User { name: 'Bogdan', age: 32, role: 'admin' }
console.log(user_4); // User { name: 'Alona', age: 33, role: undefined }

// 5
// Добавить метод изменения роли, который получает в качестве аргумента новую роль
// и изменяет свойство role в случае, если роль указана верно
// если роль неверна, то в свойство role указать undefined

class User {
  constructor(name, age, role) {
    (this.name = name), (this.age = age);
    if (["root", "admin", "manager", "user"].includes(role)) {
      this.role = role;
    } else {
      this.role = undefined;
    }
  }

  change_role(new_role) {
    if (["root", "admin", "manager", "user"].includes(new_role)) {
      this.role = new_role;
    } else {
      this.role = undefined;
    }
  }
}

const user_5 = new User("Bogdan", 32, "admin");
const user_6 = new User("Alona", 33, "student");

console.log(user_5); // User { name: 'Bogdan', age: 32, role: 'admin' }

console.log(user_5.change_role("student")); // undefined
console.log(user_5); // User { name: 'Bogdan', age: 32, role: undefined }

console.log(user_5.change_role("manager")); // undefined
console.log(user_5); // User { name: 'Bogdan', age: 32, role: 'manager' }

// 6. переписали код
class User {
  constructor(name, age, roles) {
    (this.name = name),
      (this.age = age),
      (this.roles = ["root", "admin", "manager", "user"]);
    if (this.roles.includes(roles)) {
      this.roles = roles;
    } else {
      this.roles = undefined;
    }
  }

  change_role(new_role) {
    if (this.roles.includes(new_role)) {
      this.roles = new_role;
    } else {
      this.roles = undefined;
    }
  }
}

const user_7 = new User("Bogdan", 32, "manager");
const user_8 = new User("Alona", 33, "student");

console.log(user_7); // User { name: 'Bogdan', age: 32, role: 'manager' }

user_7.change_role("student");
console.log(user_7); // User { name: 'Bogdan', age: 32, role: 'undefined' }

console.log(user_7.roles); // manager

// user_7.roles.push("babka");
// user_7.roles.append("gdgdgd");

user_7.change_role("manager");
console.log(user_7);
