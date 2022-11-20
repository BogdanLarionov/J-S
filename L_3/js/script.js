console.log(`${c} / ${d} = ${+c / +d}`); // 23 / 10 = const age = 29;
console.log(age);  // 29
console.log(typeof(age)); // number
// ------------

const name = "Bogdan";
console.log(name); // name
console.log(typeof(name)); // string
// ------------

const is_teacher = true;
console.log(is_teacher); // true
console.log(typeof(is_teacher)); // boolean
// ------------
const name = "Bogdan";
const lastname = "Larionov";
const fullName = name + " " + lastname;  // Конконтинация
console.log(fullName);
console.log(name + " " + lastname); // Конконтинация
// ------------

const red = 134;
const green = 124;
const blue = 56;

console.log("rgb(" + red + ", " + green + ", " + blue + ");"); // Конконтинация
console.log(`rgb(${red}, ${green}, ${blue});`); // Интерполяция

// ------------
1.
const name = "Bogdan";
const lastname = "Larionov";
const age = 32;
const age_min = 32*365*24*60;
// 29*365*24*60

console.log(`Добрый день ${name} ${lastname}! Вам минут ${age_min}`);

2.
const name = "Bogdan";
const lastname = "Larionov";
const age = 32;

// 32*365*24*60

console.log(`Добрый день ${name} ${lastname}! Вам ${age*365*24*60}  минут`);

// ------------


const value1 = 12;
const value2 = 25;

console.log(value1 + value2); // 37
console.log(value1 - value2); // -13
console.log(value1 * value2); // 300
console.log(value1 / value2); // 0.48
console.log(value1 % value2); // 12 остаток от деления
/* 
65 яиц 
1 коробка - 7 яиц
9 коробок = 63 яйца
65 % 7 = 2 */
// ------------


console.log(Math.round(2.5)); // 3

console.log(Math.round(2.499)); // 2

console.log(Math.ceil(2.0001)); // 3

console.log(Math.floor(2.0001)); // 2
// ------------


const value_1 = 12;
console.log(String(value_1)); // 12
console.log(typeof(String(value_1))); // string
// ------------

const value_1 = 12;
console.log(" "+value_1); // преобразует в число

const a = 23424234233243242423423432; // BigInt
console.log(a); // 2.342423423324324e+25

// ------------


console.log("Helo" - "Buy"); // NaN
// ------------

console.log("12" + "12");// 1212
// ------------

 console.log(+"20"); // унарный плюс преобразовал строку в число 20 
// ------------

const n = +"hello";
console.log(n); // NaN
console.log(typeof(n)); // number
// ------------

let result = ("HELLO").toLowerCase();
console.log(result); // hello
// ------------

let result2 = ('b' + "a" + +"c").toLowerCase();
console.log(result2); // banan
// b + a - ba
// +'c' - NaN 
// 'b' + 'a' + +'c'.toLowerCase() - banan
// ------------

const a = prompt("Укажите первое число: ");
const b = prompt("Укажите второе число: ");

console.log(a); // выведет введенное число 
console.log(b); // выведет введенное число 
console.log(a + b); // склеет строки
console.log(+a + +b); // преаборазует в число и прибавит
// ------------
const a = prompt("Укажите первое число: ");
const b = prompt("Укажите второе число: ");

const a_number = +a;
const b_number = +b;
console.log(a_number + b_number);
// ------------

let number1 = 12;
let number2 = 45;
let ansver = number1 + number2;
console.log(`${number1} + ${number2} = ${ansver}`); // 12 + 45 = 57
// // ------------

const a = prompt("Укажите первое число: ");
const b = prompt("Укажите второе число: ");
const number1 = +a;
const number2 = +b;
console.log(`${a} + ${b} = ${number1+number2}`);  // 12 + 23 = 35
//------------
// Добавти в вывод вычисления разности, произведения и отношения

const c = prompt("Укажите первое число: ");
const d = prompt("Укажите второе число: ");
const result = +c - +d;
console.log(`${c} - ${d} = ${result}`); // 23 - 10 = 13
console.log(`${c} - ${d} = ${+c - +d}`); // 23 - 10 = 13
console.log(`${c} * ${d} = ${+c * +d}`); // 23 * 10 = 


//------------
const a = prompt ('укажите число: ');

if(a > 0) {
    console.log(`число ${a} положительное`);  // a > 0, 1 ...  // Интерполяция
    console.log('число' + a + 'положительное');// Конконтинация
} else {
    console.log(`число ${a} отрицательное`); // a < 0, -1 ...  // Интерполяция
    console.log('число' + b + 'отрицательное'); // Конконтинация
}

//------------
// https://www.rapidtables.com/code/text/ascii-table.html
//------------
// получить два числа через prompt и сравнить их с друг другом, вывести 
//сообщение <a> больше <b> на <разницу междку a и b>

let a = +prompt("Enter the number 1: ");
let b = +prompt("Enter the number 2: ");

if(a > b) {
    console.log(`${a} больше ${b} на ${a - b}`); \n 

} else {
    console.log(`${b} больше ${a} на ${b - a}`);
}
// //------------

   \n  - перенос строки

//------------

let a = +prompt("Enter the number 1: ");
let b = +prompt("Enter the number 2: ");

if(a > b) {
    console.log(`${a} больше ${b} на ${a - b}`); 

} else if (a < b){
    
    console.log(`${b} больше ${a} на ${b - a}`);
} else { 
    console.log('числа равны!');
}