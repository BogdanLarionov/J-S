// 1. Создайте переменную user и присвойте ей значение: "   Ivan Ivanov    ".
// Выведите переменную user в консоль, но без лишниш пробелов по кроям.

const user = "   Ivan Ivanov    ";
console.log(user);
console.log(user.trim()); // trim() - Выведит без лишниш пробелов по кроям

// 2. Напишите программу, котороя выводит в консоль рандомные/слyчайные
// число от 0 до 1 и округлите его до трьетьего знака после точки. Воспользуйтесь мeтодом toFixed().

let random = Math.random(); // Math.random() - выводит в консоль рандомные/слyчайные число от 0 до 1
console.log(random); // 0.05153098716774385
console.log(+random.toFixed(3)); // Metod toFixed() - округлите его до трьетьего знака после точки , и возвращает строчку! +random поставил + чтобы вернуть число в место строки

// 3. Выведите на экран первую И последнюю буквы предложения, записанного В константу
// text (текст строки произвольный), В следующем формате:
// First: <первая буква строки>
// Last: <последняя буква строки></последняя>

const text = "Lorem ipsum dolor sit amet consectetur";
const index2 = text.length - 1;

console.log(`First: <${text[0]}>\nLast: <${text[index2]}>`);

