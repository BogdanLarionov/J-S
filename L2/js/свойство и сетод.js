// Свойства

let string = "Larionov Bogdan";
console.log(string.length); //  считает длину строки - 16
console.log(string[2]);// индекс моссива
// -------------
let array = [1,2,3,4,5, 'hello']; // 0,1,2,3,4,5 индекс моссива
console.log(array.length);  // длина массива - 6
console.log(array[2]); // 3 индекс моссива

// -------------

//  Если строка, мы не знаем сколько в ней символов. Вывести в консоль последний символ.
let long_string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi nesciunt voluptas architecto temporibus itaque, debitis reiciendis tempore voluptatum sed quos cum natus veritatis doloribus cupiditate molestias ullam aspernatur dolores.';
let index = long_string.length-1;//индекс последнего элемента в строке
console.log(long_string[index]);


let long_string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi nesciunt voluptas architecto temporibus itaque, debitis reiciendis tempore voluptatum sed quos cum natus veritatis doloribus cupiditate molestias ullam aspernatur dolores.';
console.log(long_string[long_string.length-1]);//индекс последнего элемента в строке
// -------------

// Mетод

let str = "Hello, world!";
console.log(str.toLowerCase()); // toLowerCase() -  приводит все символы к нижнему регистру
console.log(str.toUpperCase()); // oUpperCase() -  приводит все символы к вверхнему регистру


str.length; // свойство (без скобок)
str.toLowerCase(); // метод (скобки) - функция

let str1 = "   hello    ";
console.log(str1.trim()); // обрезает лигние пробелы по бокам


