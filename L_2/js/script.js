let a = Math.pow(8,2);  // возводим в кводрат Math.pow() 8 - основа, 2 - степень
console.log(a);
//-----------------
let b = Math.abs(5);  // Math.abs() - возврощает обсолютное число // Ответ 5
console.log(b);



let b = Math.abs(-5);  // Math.abs() - возврощает обсолютное число // Ответ 5
console.log(b);


let b = Math.abs(+5);
console.log(b);  // 5

//-----------------------

let d = Math.ceil(4.33);
console.log(d); // Math.ceil() округляет до высоты - 5 
//-----------------------

let e = Math.floor(4.33);
console.log(e);  //  Math.floor()  округляет до низа - 4
//-----------------------

let f = Math.round(4.33);
console.log(f); // Math.round() по правилам матиматики 4.33 будет 4

let f = Math.round(4.73);
console.log(f); // Math.round() по правилам матиматики 4.73 будет 5
//-----------------------

let min = Math.min(5, 34, -100, 56, 777, -575);
console.log(min); // Math.min() - возврощает min  -  -575
//-----------------------

let max = Math.max(5, 34, -100, 56, 777, -575);
console.log(max); // Math.max() возврощает max -  777

//-----------------------


let random = Math.random(); // возврощает случайное число от 0 до 1
console.log(random);  // 0.04078888999607333

//-----------------------

let a = Math.ceil(Math.random()*9);
console.log(a);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//-----------------------


let step_1 = Math.random(); // возврощает случайное число от 0 до 1
console.log(step_1); // 
//-----------------------
// Напишите программу, которая выводит случайное число оt 0 до 10

let step_1 = Math.random(); // выводит случайное число от 0 до 1увкличивает деапазон от 1 до 10 
let step_2 = step_1 * 10 + 1; // случайное число из step_1 умножаем на 10 // +1 
let step_3 = Math.round(step_2);  // округляет число из step_2
// console.log(Math.round(step_2));

console.log(step_1); // 0.9051700450605193
console.log(step_2); // 9.051700450605193
console.log(step_3); // 9

//-----------------------
// Напишите программу, которая выводит случайное число оt 0 до 10

let random_num = Math.round(Math.random() * 10); // 0 - 10
console.log(random_num);

let random_num = Math.round(Math.random() * 10 + 1); // 1 - 11
console.log(random_num);

let random_num = Math.round(Math.random() * 10 + 2); // 2 - 12
console.log(random_num);

let random_num = Math.round(Math.random() * 9 + 1); // 1 - 10
console.log(random_num);
//-----------------------

// Напишите программу, которая выводит случайное целое число оt 15 до 25

let getRandom = Math.round(Math.random() * 10  + 15 ); // 0 - 10 => 15 - 25 (10 ширина, 15 деапазон откуда начинается)
console.log(getRandom);


let getRandom = 15 + Math.round(Math.random() * 10 ); // 0 - 10 => 15 - 25 (10 ширина, 15 деапазон откуда начинается)
console.log(getRandom);

let get_Random = Math.floor(Math.random() * 11);
console.log(get_Random);
//-----------------------

