// Задачи продублирую в скиллдеск.
//1. Напишите функцию, которая принимает в качестве аргумента строку, а возвращает ее длину. Выведите результат в консоль.

// ФУНКЦИИ (Function declaration)
function getLength(string) {
  return string.length;
}

console.log(getLength("Hello, world!")); // 13
// ---------------------
// 1.
//СТРЕЛОЧНЫЕ ФУНКЦИИ (Arrow functions)

const getLength = (string) => {
  return string.length;
};
console.log(getLength("Bogdan")); // 6
// 2.

const getLength = (string) => string.length;

console.log(getLength("Bogdan")); // 6
// ---------------------

// 2. Напишите функцию, которая принимает два аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
// 1.
function getExp(num1, num2 = 2) {
  return num1 ** num2; // return Math.pow(num1, num2);  //  ** - степени
}

console.log(getExp(2, 4)); // 16
console.log(getExp(2)); // 4
// ---------------------
// 2.
const getSum = (num1, num2 = 2) => {
  return Math.pow(num1, num2);
};
console.log(getSum(2)); // 4
// ---------------------
// 3.
let getExp = (num1, num2 = 2) => num1 ** num2;
console.log(getExp(2, 4)); // 16
// ---------------------
// 3. Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение. Выведите результат в консоль. Предложите два варианта решения (через условный оператор и Math.max()).
// 1.
function getMaxNum(num1, num2) {
  return Math.max(num1, num2);
}
console.log(getMaxNum(2, 4)); // 4
console.log(getMaxNum(4, 2)); // 4
// 2.

const getMaxNum = (num1, num2) => Math.max(num1, num2);
console.log(getMaxNum(3, 4)); // 4
console.log(getMaxNum(4, 3)); // 4

// 3.
function getMaxNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(getMaxNum(2, 3)); // 3
console.log(getMaxNum(3, 2)); // 3
// 4.
const getMaxNum = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(getMaxNum(2, 3)); // 3
console.log(getMaxNum(3, 2)); // 3
// ---------------------

// 4. Напишите функцию, принимающую в качестве аргументов три числа и выводящую в консоль отсортированные числа по убыванию. Используйте условный оператор.
// 1.
function sortNum(num1, num2, num3) {
  if (num1 > num2 && num1 > nim3) {
    if (num2 > num3) {
      console.log(num1, num2, num3);
    } else {
      console.log(num1, num3, num2);
    }
  } else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
      console.log(num2, num1, num3);
    } else {
      console.log(num2, num3, num1);
    }
  } else {
    if (num1 > num2) {
      console.log(num3, num1, num2);
    } else {
      console.log(num3, num2, num1);
    }
  }
}
console.log(sortNum(3, 8, 2));
console.log(sortNum(-3, 88, 12));
console.log(sortNum(1, 4, 90));

// 2.

const sortNum = (num1, num2, num3) => {
  if (num1 > num2 && num1 > nim3) {
    if (num2 > num3) {
      return num1, num2, num3;
    } else {
      return num1, num3, num2;
    }
  } else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
      return num2, num1, num3;
    } else {
      return num2, num3, num1;
    }
  } else {
    if (num1 > num2) {
      return num3, num1, num2;
    } else {
      return num3, num2, num1;
    }
  }
};

console.log(sortNum(3, 8, 2)); // 2
console.log(sortNum(-3, 88, 12)); // -3
console.log(sortNum(1, 4, 90)); // 1
// 5. Напишите функцию, принимающую в качестве аргументов пять чисел и выводящую в консоль наибольшее из них. Используйте условный оператор. (Math.max, Math.min)*/

// 1. (Function declaration)
function getMax(num1, num2, num3, num4, num5) {
  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    return num1;
  } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    return num2;
  } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    return num3;
  } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    return num4;
  } else num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4;
  {
    return num5;
  }
}
console.log(getMax(8, 10, 19, 18, 50)); // 50 - 5
console.log(getMax(80, 10, 19, 18, 50)); // 80 - 1
console.log(getMax(8, 10, 190, 18, 50)); // 190 - 3
console.log(getMax(8, 10, 19, 180, 50)); //180 - 4
console.log(getMax(8, 100, 19, 18, 50)); // 100 - 2

// 2. ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
const getMax = function getMax(num1, num2, num3, num4, num5) {
  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    return num1;
  } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    return num2;
  } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    return num3;
  } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    return num4;
  } else num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4;
  {
    return num5;
  }
};
console.log(getMax(8, 10, 19, 18, 50)); // 50 - 5
console.log(getMax(80, 10, 19, 18, 50)); // 80 - 1
console.log(getMax(8, 10, 190, 18, 50)); // 190 - 3
console.log(getMax(8, 10, 19, 180, 50)); //180 - 4
console.log(getMax(8, 100, 19, 18, 50)); // 100 - 2

// 3. СТРЕЛОЧНЫЕ ФУНКЦИИ (Arrow functions)
const getMax = (num1, num2, num3, num4, num5) => {
  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    return num1;
  } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    return num2;
  } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    return num3;
  } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    return num4;
  } else num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4;
  {
    return num5;
  }
};

console.log(getMax(8, 10, 19, 18, 50)); // 50 - 5
console.log(getMax(80, 10, 19, 18, 50)); // 80 - 1
console.log(getMax(8, 10, 190, 18, 50)); // 190 - 3
console.log(getMax(8, 10, 19, 180, 50)); //180 - 4
console.log(getMax(8, 100, 19, 18, 50)); // 100 - 2
// 4.
const getMax = (num1, num2, num3, num4, num5) => {
  return Math.max(num1, num2, num3, num4, num5);
};
console.log(getMax(8, 10, 19, 18, 50)); // 50 - 5
console.log(getMax(80, 10, 19, 18, 50)); // 80 - 1
console.log(getMax(8, 10, 190, 18, 50)); // 190 - 3
console.log(getMax(8, 10, 19, 180, 50)); //180 - 4
console.log(getMax(8, 100, 19, 18, 50)); // 100 - 2

// 5.
function getMax(num1, num2, num3, num4, num5) {
  return Math.max(num1, num2, num3, num4, num5);
}
console.log(getMax(8, 10, 19, 18, 50)); // 50 - 5
console.log(getMax(80, 10, 19, 18, 50)); // 80 - 1
console.log(getMax(8, 10, 190, 18, 50)); // 190 - 3
console.log(getMax(8, 10, 19, 180, 50)); //180 - 4
console.log(getMax(8, 100, 19, 18, 50)); // 100 - 2

// 6.

function getMax(num1, num2, num3, num4, num5) {
  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    return num1;
  }
  if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    return num2;
  }
  if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    return num3;
  }
  if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    return num4;
  }
  if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
    return num5;
  }
}
console.log(getMax(8, 10, 19, 18, 50)); // 50 - 5
console.log(getMax(80, 10, 19, 18, 50)); // 80 - 1
console.log(getMax(8, 10, 190, 18, 50)); // 190 - 3
console.log(getMax(8, 10, 19, 180, 50)); //180 - 4
console.log(getMax(8, 100, 19, 18, 50)); // 100 - 2
