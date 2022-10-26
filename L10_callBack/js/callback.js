// callback - это функция, переданная в другую функци/ в качесте аргумента

const getMultThree = () => {
  return 3 * 2;
};

const getMultFour = () => {
  return 4 * 2;
};
const getMultFive = () => {
  return 5 * 2;
};

const getMultNumber = (number) => {
  return number * 2;
};

console.log(getMultNumber(6));
console.log(getMultNumber(7));
console.log(getMultNumber(8));

// ------------------------------------------------------------------------
let numbers = [1, 2, 3, 4, 5];

const divideNums = (arr) => {
  let array = []; // созжал новый массив
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i] / 2); // пушу в новый массив
  }
  return array; // возврощаю в новый массив
};

console.log(divideNums(numbers)); // [ 0.5, 1, 1.5, 2, 2.5 ]
// ------------------------------------------------------------------------

let numbers2 = [1, 2, 3, 4, 5];

const multNumb = (arr) => {
  let array = []; // созжал новый массив
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i] * 2); // пушу в новый массив
  }
  return array; // возврощаю в новый массив
};

console.log(multNumb(numbers2)); // [ 2, 4, 6, 8, 10 ]

// ------------------------------------------------------------------------
let nums = [1, 2, 3, 4, 5];
const changeNumbers = (arr, callback) => {
  let array = []; // созжал новый массив
  for (let i = 0; i < arr.length; i++) {
    array.push(callback(arr[i])); // передаем инструкцию и работаем по тнструкции с каждым элементом массива
  }
  return array; // возврощаю в новый массив
};

const divide = (nums) => nums / 2;
const mult = (nums) => nums * 2;
const plus = (nums) => nums + 2;

console.log(changeNumbers(nums, divide)); // [ 0.5, 1, 1.5, 2, 2.5 ]
console.log(changeNumbers(nums, mult)); // [ 2, 4, 6, 8, 10 ]
console.log(changeNumbers(nums, plus)); // [ 3, 4, 5, 6, 7 ]
