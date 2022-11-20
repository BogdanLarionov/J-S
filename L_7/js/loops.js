// for

// for (выражение 1; выражение 2; выражение 3;)

// выражение 1 - начальное значение счетчика
// выражение 2 - условие повторения цикла
// выражение 3 - изменения счетчика

// Напишите цикл for, который выводит в консоль число от 1 до 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// i = i + 1
// i +=1
// i++

// --------------
// 1. Задача
// Напишите цикл for, который выводит в консоль число от 15 до 65 с шагом 5
// => 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65

for (let i = 15; i <= 65; i += 5) {
  console.log(i);
}
// --------------
// 2. Задача
// Напишите цикл for, который выводит в консоль число от 15 до 65 с шагом 5
// => 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15

for (let i = 65; i >= 15; i -= 5) {
  console.log(i);
}
// --------------
// 3. Задача
// В программе заданные две переменные n и m с числовым значением каждая. Число n больше числа m.
// Напишите цикл который выводит в консоль все четные числа от m до n.

// function declaration
function getNumsEven(n, m) {
  for (let i = m; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

getNumsEven(10, 4); // 4,6,8,10
// getNumsEven(4, 20); // 4,6,8,10...20 'let i = n; i <= m; i++'

// arrow function
const getNumsEven = (n, m) => {
  for (let i = m; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
getNumsEven(10, 4); // 4,6,8,10
// -------------

// 4. Задача

// В программе заданные две переменные n и m с числовым значением каждая. Число n больше числа m.
// Напишите цикл который выводит в консоль все нечетные числа от m до n.

// function declaration
function getNums(n, m) {
  for (let i = m; i <= n; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

getNums(10, 1); // 1, 3, 5, 7, 9

// arrow function
const getNums = (n, m) => {
  for (let i = m; i <= n; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
};
getNums(10, 1); // 1, 3, 5, 7, 9
getNums(10, 4); // 5, 7, 9
// -------------
// 5. Задача

function getNums(n, m) {
  for (let i = m; i <= n; i++) {
    console.log(i);
  }
}
getNums(60, 40);
getNums(10, 4); // 4,5,,6,7,8,9,10
// -------------

/*  6. Задача
В программе заданные две переменные n и m с числовым значением каждая.
Напишите цикл, который выводит в консоль число от большого числа до меньшего.
Если числа равны, то вывести сообщение "The numbers are equal"*/

1;
const getMax = (n, m) => {
  if (n > m) {
    for (let i = n; i >= m; i--) {
      console.log(i);
    }
  } else if (m > n) {
    for (let i = m; i >= n; i--) {
      console.log(i);
    }
  } else {
    console.log(`The numbers are equal`);
  }
};

//getMax(7, 19); // 19,18,17,16,15,14,13,12,11,10,9,8,7
//getMax(70, 65);  // 70,69,68,67,66,65
getMax(65, 65); // The numbers are equal

// 2.
const getMax = (n, m) => {
  if (n === m) {
    console.log(`The numbers are equal`);
    return;
  }
  for (let i = Math.max(n, m); i >= Math.min(n, m); i--) {
    console.log(i);
  }
};
getMax(3, 5);
getMax(5, 4);
getMax(5, 5);

// Задача
// Написать программу, которая с помощью цикла считает сумму чисел от 1 до 10 и выводит в консоль

const getSum_1 = () => {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum;
};

console.log(getSum_1()); // 55
// -----------------------------------

const getMult = () => {
  let result = 1;
  for (let i = 1; i <= 10; i++) {
    result *= i;
  }
  return result;
};

console.log(getMult()); // 3628800
// -----------------------------------
const getSum = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};
getSum(1, 10);

// -----------------------------------

// Задача
// Написать программу, которая с помощью цикла считает сумму четных чисел от 1 до 10 и выводит в консоль => 30

const getSum1 = () => {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(getSum1());
