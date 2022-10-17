// alert('Hello');


/* alert('Hello');
alert('Hello'); */


console.log("2");

let a = 7;
let b = 10;
a = 101;
console.log(a);
console.log(b);

const c = 16;
console.log(c);

var d = 2;
console.log(d);

// number_of_workers - snake_case
// numberOfWorkers - camalCase
// numberofcase - плохой способ
// number-of-workers - kebab-case


let number = 5; // число
let string = '5' // строка
let string1 = "Hello" // строка

// ' ', " " - разницы нет
// ` ` - можно включать переменную

let a= 5;
let b = 7;
console.log(a+b);

let greeting = "hello"; // строка
let firstName = "Oleg"; // строка
let city = `Berlin`; // строка

console.log('Приветствие через конконтинацию:' + ' '  + greeting + ' ' + firstName);  // конконтинация строк

console.log(`Приветствие через интераоляцию: ${greeting} ${firstName}`); // интерполяция

let d = 5;
let s = "hello";
console.log(typeof d);  // number
console.log(typeof s); // string

let object = {
    firstName: 'Bogdan',
    age: 32
}

console.log(typeof object); //object

// +
// -
// *
// /
// основа ** степень - 5 ** 2 = 25 ( ** возведение в степень)
// % остаток от деления
// 56 яиц
// 5 по 10
// 56%10=6

console.log(7 + "7"); // => '7' + '7' = 77  string
console.log(typeof(+(7 + "7"))); // => '7' + '7' = 77  преобоазует в number

console.log(b / 2);

let h = "100n";
console.log(typeof(c)); // undefined

let f = +"100d";
console.log( f ); // NaN

