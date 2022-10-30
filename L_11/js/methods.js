// Методы Массивов
// ---------------------------------------------------------------------------------------------------------------------
//  Смотри в l_10 в HomeWork задача 1 решение тойже задачи через .forEach() и .filter()
// ---------------------------------------------------------------------------------------------------------------------

// .forEach() -  выполняет переданную функцию одни раз для кажлого элемента массива, нечего не возвращает (undefined)

// .filter()  -  возврощает новый массив со всеми элементами, прошедшими проверку.
// Длина нового массива может быть меньше длины оригинального массива.

// .map() - возврощает новый массив с результатом вызова указанной функции для кажлого элемента (изменяет каждая элемент)
// Длина нового массива всегда равны длине оригинального массива.

// .reduce()-

// ---------------------------------------------------------------------------------------------------------------------
// let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
// Сформируйте новый  массив с числами меньше 100. Придложите два способа решения (цикл for и метод .forEach)
// 1.
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_arr = array.filter((el) => {
  return el < 100;
});
console.log(new_arr); // [ 45, 65, 32, 1, 0, 7 ]
// 2.
let array1 = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_arr2 = array1.filter((element) => element < 100);
console.log(new_arr2); // [ 45, 65, 32, 1, 0, 7 ]
// 3.
let array2 = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_arr3 = array2.filter((element) => {
  return element < 100;
});
console.log(new_arr3); // [ 45, 65, 32, 1, 0, 7 ]
// 4.
let array3 = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_arr4 = array3.filter((element) => element + element < 100);
console.log(new_arr4); // [ 45, 32, 1, 0, 7 ]

// ---------------------------------------------------------------------------------------------------------------------
// Сформируйте новый массив с именами длиннее 5 букв
let users = ["Ivan", "Victoria", "Olga", "Elena", "Anton"];
let new_user = users.filter((elem) => elem.length >= 5);
console.log(users); // [ 'Ivan', 'Victoria', 'Olga', 'Elena', 'Anton' ]
console.log(new_user); // [ 'Victoria', 'Elena', 'Anton' ]
// ---------------------------------------------------------------------------------------------------------------------

// Два массива из строк. Вывести только слова, длиннее 10 символов

let arr = ["hello", "bye", "good morning", "good evening", "good night"];
let new_arra = arr.filter((elem) => elem.length >= 10);
console.log(new_arra); // [ 'good morning', 'good evening', 'good night' ]

// ---------------------------------------------------------------------------------------------------------------------

// Вернуть новый массив с каждым элементом, умноженным на 2

let newArray = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let mult_on_2 = newArray.map((el) => el * 2);
console.log(mult_on_2); // [ 400, 90, 130, 1340, 704, 64, 2, 0, 14 ]

// ---------------------------------------------------------------------------------------------------------------------
// 1.
let new_Array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
// 2.
let new_array = new_Array.filter((el) => el < 100);
// 3
let new_Arr = new_Array.map((el) => {
  if (el < 100) {
    return el;
  }
});
console.log(new_Array); // [200, 45, 65, 670, 352, 32, 1, 0, 7];
console.log(new_array); // [ 45, 65, 32, 1, 0, 7 ]
console.log(new_Arr); //  undefined, 45, 65, undefined, undefined, 32, 1, 0, 7 ]
// ---------------------------------------------------------------------------------------------------------------------

// let age = [23, 15, 18, 56, 43, 28];
// Сформировать новый массив с совершеннолетними
let age = [23, 15, 18, 56, 43, 28];
let age_adult = age.filter((el) => el >= 18);

console.log(age); // [ 23, 15, 18, 56, 43, 28 ]
console.log(age_adult); // [ 23, 18, 56, 43, 28 ]
// ---------------------------------------------------------------------------------------------------------------------

// let age = [23, 15, 18, 56, 43, 28];
// Сформировать новый массив, где возраст всех совершеннолетних заменен на 100
1;
let age1 = [23, 15, 18, 56, 43, 28];
let age_changed = age1.map((el) => {
  if (el >= 18) {
    return (el = 100);
  } else {
    return el;
  }
});

console.log(age1); // [ 23, 15, 18, 56, 43, 28 ]
console.log(age_changed); // [ 100, 15, 100, 100, 100, 100 ]

// 2.
let age2 = [23, 15, 18, 56, 43, 28];
let age_changed1 = age2.map((el) => (el = 100));
console.log(age_changed1); // [ 100, 100, 100, 100, 100, 100 ]

// 3.
let age3 = [23, 15, 18, 56, 43, 28];
let age_changed2 = age3.filter((el) => el >= 18).map((el) => (el = 100));
console.log(age_changed2); // [ 100, 100, 100, 100, 100 ]

// 4.
let age4 = [23, 15, 18, 56, 43, 28];
let age_changed3 = age4.filter((el) => el >= 18).map((el) => (el = "Hello"));
console.log(age_changed3); // [ 'Hello', 'Hello', 'Hello', 'Hello', 'Hello' ]
// ---------------------------------------------------------------------------------------------------------------------

// Создать массив, где несовершеннолетние заменены на 'child', а совершеннолетние на 'adult'
// 1.
let age5 = [23, 15, 18, 56, 43, 28];
let age_changed4 = age5.map((el) => {
  if (el > 18) {
    return "adult";
  } else {
    return "child";
  }
});
console.log(age_changed4); // [ 'adult', 'child', 'adult', 'adult', 'adult', 'adult' ]

// 2.
let age6 = [23, 15, 18, 56, 43, 28];
let age_changed5 = age6.map((el) => {
  if (el < 18) {
    return (el = "child");
  } else {
    return (el = "adult");
  }
});
console.log(age_changed5); // [ 'adult', 'child', 'adult', 'adult', 'adult', 'adult' ]

// 3.
let age7 = [23, 15, 18, 56, 43, 28];
let age_changed6 = age7.map((el) => {
  if (el < 18) {
    return (el = "child");
  }
  return (el = "adult");
});
console.log(age_changed6); // [ 'adult', 'child', 'adult', 'adult', 'adult', 'adult' ]

// 4.

let age9 = [23, 15, 18, 56, 43, 28];
let age_changed9 = age9.map((el) => {
  if (el < 18) return (el = "child");
  return (el = "adult");
});
console.log(age9); // [ 23, 15, 18, 56, 43, 28 ]
console.log(age_changed9); // [ 'adult', 'child', 'adult', 'adult', 'adult', 'adult' ]

// 5.  тернарный оператор ? :
// условие ? true : false
let age8 = [23, 15, 18, 56, 43, 28];
let age_changed7 = age8.map((el) =>
  el < 18 ? (el = "child") : (el = "adult")
);
console.log(age8); // [ 23, 15, 18, 56, 43, 28 ]
console.log(age_changed7); // [ 'adult', 'child', 'adult', 'adult', 'adult', 'adult' ]
// ---------------------------------------------------------------------------------------------------------------------

// Сформировать массив из последних цифр элементов => [3, 5, 8, 6, 3, 8]
// 1.
let agess = [23, 15, 18, 56, 43, 28];
let new_ages = agess.map((el) => el % 10);
// el = new_nums_arr2;
console.log(new_ages); // [ 3, 5, 8, 6, 3, 8 ]

// Разница между методом .forEach и .map(): Методом .forEach не чего не возврозает, а методом .map() возврозает массив
// 2.
let ages = [23, 15, 18, 56, 43, 28];
let new_ar = [];
ages.forEach((el) => new_ar.push(el % 10));
console.log(new_ar); // [ 3, 5, 8, 6, 3, 8 ]
