// Реализуйте класс Group (групп), который будет иметь следующие свойства:
// name (название группы), major (специализация), number (количество студентов, по умолчанию 15)
// Реализуйте методы add_student() (добавляет одного студента) и delete_student() (удаляет одного студента)
// Создайте экземпляр этого класса
// Проверьте как работают методы

class Group {
  constructor(name, major, number = 15) {
    //number = 15 будет по умолчаниу, еслизначение не передадут в экземпляр класса
    (this.name = name), (this.major = major), (this.number = number); // this.number = 15 - будет по умолчаниу у всех 15
  }

  add_student() {
    this.number++;
    // this.number+=1;
  }
  delete_student() {
    this.number -= 4;
    // this.number--;
  }
}

const grpou_1 = new Group("31/32", "JavaScript", 19); // экземпляр класса
const grpou_2 = new Group("33/34", "Java"); // экземпляр класса
console.log(grpou_1); // Group { name: '31/32', major: 'JavaScript', number: 19 }
console.log(grpou_2); // Group { name: '33/34', major: 'Java', number: 15 }
grpou_1.add_student(); // приминили метод

console.log(grpou_1); // Group { name: '31/32', major: 'JavaScript', number: 20 } увеличили на 1

grpou_1.delete_student(); // приминили метод
console.log(grpou_1); // Group { name: '31/32', major: 'JavaScript', number: 16 }

grpou_2.add_student(); // приминили методd
console.log(grpou_2); // Group { name: '33/34', major: 'Java', number: 16 }
grpou_2.delete_student(); // приминили методd
console.log(grpou_2); // Group { name: '33/34', major: 'Java', number: 12 }

// Задача
// Создайте функцию, которая будет создавать экземпляры класса Group и собирать их в один массив

class Group {
  constructor(name, major, number = 15) {
    (this.name = name), (this.major = major), (this.number = number);
  }
  add_student() {
    this.number++;
  }
  delete_student() {
    this.number -= 4;
  }
}

let all_groups = []; // пустой массив
const create_group = (name, major, number) => {
  const group = new Group(name, major, number); // создали экземпляр класса/обьект
  all_groups.push(new Group(group)); // добовляем обьект в пустой массив
};

create_group("31/32", "JavaScript", 19); // объект с данными передается в пустой массив
create_group("33/34", "Python");
// create_group("35/36", "Java", 20); // третья группа

console.log(all_groups);
// Ответ
// [
//   Group {
//     name: Group { name: '31/32', major: 'JavaScript', number: 19 },
//     major: undefined,
//     number: 15
//   },
//   Group {
//     name: Group { name: '33/34', major: 'Java', number: 15 },
//     major: undefined,
//     number: 15
//   }
// ]

// 2. код короче
class Group {
  constructor(name, major, number = 15) {
    (this.name = name), (this.major = major), (this.number = number);
  }
  add_student() {
    this.number++;
  }
  delete_student() {
    this.number--;
  }
}

let all_groups = [];
const create_group = (name, major, number) =>
  all_groups.push(new Group(name, major, number));

create_group("31/32", "JavaScript", 19);
create_group("33/34", "Python");
create_group("35/36", "Java", 20);

console.log(all_groups);

// Ответ
// [
//   Group { name: '31/32', major: 'JavaScript', number: 19 },
//   Group { name: '33/34', major: 'Python', number: 15 },
//   Group { name: '35/36', major: 'Java', number: 20 }
// ]
