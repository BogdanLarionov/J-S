// Методы Массивов

// .forEach() -  выполняет переданную функцию одни раз для кажлого элемента массива, нечего не возвращает (undefined)

let age = [40, 45, 53, 23, 12, 7];

let new_age = [];
for (let i = 0; i < age.length; i++) {
  if (age[i] >= 18) {
    new_age.push(age[i]);
  }
}
console.log(age); // [ 40, 45, 53, 23, 12, 7 ]
console.log(new_age); //  [ 40, 45, 53, 23 ]

// ------------------------------------------

let age2 = [40, 45, 53, 23, 12, 7];

for (let i = 0; i < age2.length; i++) {
  if (age2[i] >= 18) {
    console.log(age2[i]); // 40, 45, 53, 23,
  }
}

// ------------------------------------------
// forEach

let age3 = [40, 45, 53, 23, 12, 7];

age3.forEach((el) => {
  if (el <= 18) {
    console.log(el); // 40, 45, 53, 23,
  }
});
// ------------------------------------------

let age4 = [40, 45, 53, 23, 12, 7];

age4.forEach((el) => {
  if (el <= 18) {
    console.log(el); // 12, 7
  }
}); // age4.forEach(el => {})
// ------------------------------------------

let age4 = [40, 45, 53, 23, 12, 7];
// обычная функция
for (let i = 0; i < age4.length; i++) {
  if (age4[i] >= 18) {
    console.log(age4[i]);
  }
}

//  callback функция
age4.forEach((element) => {
  //  element - переменная
  if (el >= 18) {
    console.log(element); // 12, 7
  }
});

// ------------------------------------------
let age = [40, 45, 53, 23, 12, 7];

age.forEach((element) => console.log(element * 2)); // 80, 90, 106, 46, 24, 14
age.forEach((element) => console.log(element / 2)); // 20, 22.5, 26.5, 11.5, 6, 3.5

// ------------------------------------------

let age = [40, 45, 53, 23, 12, 7];
let age_arr = [];
age.forEach((element) => age_arr.push(element / 2));
console.log(age); // [ 40, 45, 53, 23, 12, 7 ]
console.log(age_arr); // [ 20, 22.5, 26.5, 11.5, 6, 3.5 ]

// ------------------------------------------

let age = [40, 45, 53, 23, 12, 7];
let age_arr = [];
age.forEach((element) => age_arr.push(element));
console.log(age_arr); // [ 40, 45, 53, 23, 12, 7 ]
// ------------------------------------------

let age = [40, 45, 53, 23, 12, 7];
let age_arr = [];
age.forEach((element) => age_arr.push(element / 2));
console.log(age_arr); // [ 20, 22.5, 26.5, 11.5, 6, 3.5 ]
// ------------------------------------------

let age = [40, 45, 53, 23, 12, 7];
let new_age = [];
age.forEach((element) => new_age.push(element + 1));
console.log(age); // [ 40, 45, 53, 23, 12, 7 ]
console.log(new_age); // [ 41, 46, 54, 24, 13, 8 ]
// ------------------------------------------

// Дан массив

let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// Сформируйте новый ассив с числами меньше 100. Придложте два способа решения (цикл)